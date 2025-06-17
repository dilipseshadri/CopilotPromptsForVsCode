import * as vscode from 'vscode';
import { predefinedPrompts, getPromptsByCategory, searchPrompts, PromptItem } from './prompts';

export function activate(context: vscode.ExtensionContext) {
    console.log('Copilot Prompt Library extension is now active!');

    // Register the main command to show prompts
    let showPromptsCommand = vscode.commands.registerCommand('copilot-prompt-library.showPrompts', async () => {
        await showPromptPicker();
    });

    // Register command to insert prompt directly
    let insertPromptCommand = vscode.commands.registerCommand('copilot-prompt-library.insertPrompt', async (prompt: string) => {
        await insertPromptToCopilotChat(prompt);
    });

    context.subscriptions.push(showPromptsCommand, insertPromptCommand);
}

async function showPromptPicker() {
    const quickPick = vscode.window.createQuickPick<PromptQuickPickItem>();
    quickPick.title = 'Copilot Prompt Library';
    quickPick.placeholder = 'Search for a prompt or browse categories...';
    quickPick.matchOnDescription = true;
    quickPick.matchOnDetail = true;

    // Create quick pick items from prompts
    const promptItems = createQuickPickItems();
    quickPick.items = promptItems;

    // Handle search
    quickPick.onDidChangeValue((value) => {
        if (value.trim() === '') {
            quickPick.items = promptItems;
        } else {
            const searchResults = searchPrompts(value);
            quickPick.items = searchResults.map(prompt => createQuickPickItem(prompt));
        }
    });

    // Handle selection
    quickPick.onDidAccept(async () => {
        const selectedItem = quickPick.selectedItems[0];
        if (selectedItem && selectedItem.prompt) {
            quickPick.hide();
            await handlePromptSelection(selectedItem.prompt);
        }
    });

    quickPick.show();
}

interface PromptQuickPickItem extends vscode.QuickPickItem {
    prompt?: PromptItem;
}

function createQuickPickItems(): PromptQuickPickItem[] {
    const items: PromptQuickPickItem[] = [];
    const categorized = getPromptsByCategory();

    // Add category headers and prompts
    for (const [category, prompts] of categorized) {
        // Add category header
        items.push({
            label: `$(folder) ${category}`,
            kind: vscode.QuickPickItemKind.Separator
        });

        // Add prompts in this category
        prompts.forEach(prompt => {
            items.push(createQuickPickItem(prompt));
        });
    }

    return items;
}

function createQuickPickItem(prompt: PromptItem): PromptQuickPickItem {
    return {
        label: `$(comment-discussion) ${prompt.title}`,
        description: prompt.category,
        detail: prompt.description,
        prompt: prompt
    };
}

async function handlePromptSelection(prompt: PromptItem) {
    const action = await vscode.window.showQuickPick([
        {
            label: '$(comment) Send to Copilot Chat',
            description: 'Send this prompt directly to GitHub Copilot Chat',
            action: 'copilot'
        },
        {
            label: '$(copy) Copy to Clipboard',
            description: 'Copy the prompt text to clipboard',
            action: 'copy'
        },
        {
            label: '$(edit) Insert at Cursor',
            description: 'Insert the prompt text at the current cursor position',
            action: 'insert'
        },
        {
            label: '$(eye) Preview Prompt',
            description: 'Show the full prompt text in a new document',
            action: 'preview'
        }
    ], {
        title: `What would you like to do with "${prompt.title}"?`,
        placeHolder: 'Choose an action...'
    });

    if (!action) {
        return;
    }

    switch (action.action) {
        case 'copilot':
            await insertPromptToCopilotChat(prompt.prompt);
            break;
        case 'copy':
            await vscode.env.clipboard.writeText(prompt.prompt);
            vscode.window.showInformationMessage('Prompt copied to clipboard!');
            break;
        case 'insert':
            await insertPromptAtCursor(prompt.prompt);
            break;
        case 'preview':
            await previewPrompt(prompt);
            break;
    }
}

async function insertPromptToCopilotChat(promptText: string) {
    try {
        // Try to open Copilot Chat and insert the prompt
        // First, try to execute the GitHub Copilot Chat command
        await vscode.commands.executeCommand('github.copilot.interactiveEditor.explain');
        
        // Wait a moment for the chat to open
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Try to insert text into the active editor (which should be the chat input)
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            await activeEditor.edit(editBuilder => {
                editBuilder.insert(activeEditor.selection.active, promptText);
            });
        } else {
            // Fallback: copy to clipboard and show message
            await vscode.env.clipboard.writeText(promptText);
            vscode.window.showInformationMessage(
                'Copilot Chat not available. Prompt copied to clipboard - paste it in Copilot Chat manually.',
                'Open Copilot Chat'
            ).then(selection => {
                if (selection === 'Open Copilot Chat') {
                    vscode.commands.executeCommand('github.copilot.interactiveEditor.explain');
                }
            });
        }
    } catch (error) {
        // Fallback: copy to clipboard
        await vscode.env.clipboard.writeText(promptText);
        vscode.window.showWarningMessage(
            'Could not send directly to Copilot Chat. Prompt copied to clipboard - paste it manually.',
            'Open Copilot Chat'
        ).then(selection => {
            if (selection === 'Open Copilot Chat') {
                vscode.commands.executeCommand('github.copilot.interactiveEditor.explain');
            }
        });
    }
}

async function insertPromptAtCursor(promptText: string) {
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        await activeEditor.edit(editBuilder => {
            editBuilder.insert(activeEditor.selection.active, promptText);
        });
        vscode.window.showInformationMessage('Prompt inserted at cursor position!');
    } else {
        vscode.window.showWarningMessage('No active editor to insert prompt into.');
    }
}

async function previewPrompt(prompt: PromptItem) {
    const doc = await vscode.workspace.openTextDocument({
        content: `# ${prompt.title}\n\n**Category:** ${prompt.category}\n\n**Description:** ${prompt.description}\n\n## Prompt Text\n\n${prompt.prompt}`,
        language: 'markdown'
    });
    await vscode.window.showTextDocument(doc);
}

export function deactivate() {
    console.log('Copilot Prompt Library extension is now deactivated.');
}