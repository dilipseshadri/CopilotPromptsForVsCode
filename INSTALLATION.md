# Installation and Setup Guide

## Installation Options

### Option 1: Install from VSIX (Recommended for Testing)

1. Download the `copilot-prompt-library-1.0.0.vsix` file
2. Open VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open Command Palette
4. Type "Extensions: Install from VSIX..."
5. Select the downloaded `.vsix` file
6. Reload VS Code when prompted

### Option 2: Development Installation

1. Clone or download this repository
2. Open the folder in VS Code
3. Run `npm install` in the terminal
4. Press `F5` to launch a new Extension Development Host window
5. Test the extension in the new window

### Option 3: Marketplace Installation (Future)

Once published to the VS Code Marketplace:
1. Open VS Code
2. Go to Extensions view (`Ctrl+Shift+X`)
3. Search for "Copilot Prompt Library"
4. Click Install

## First Time Setup

### 1. Verify Installation
- Open Command Palette (`Ctrl+Shift+P`)
- Type "Show Copilot Prompts"
- You should see the command available

### 2. Test Basic Functionality
- Open any code file
- Select some code
- Use `Ctrl+Shift+Alt+P` (or `Cmd+Shift+Alt+P` on Mac)
- Browse through the available prompts

### 3. Configure Custom Prompts (Optional)
Add custom prompts in VS Code settings:

```json
{
  "copilotPromptLibrary.customPrompts": [
    {
      "title": "My Custom Review",
      "description": "Custom code review for my team",
      "prompt": "Review this code according to our team standards...",
      "category": "Custom"
    }
  ]
}
```

## Usage Examples

### Basic Usage
1. **Select code** you want to analyze
2. **Open prompt library** using:
   - Command Palette: "Show Copilot Prompts"
   - Keyboard shortcut: `Ctrl+Shift+Alt+P`
   - Right-click context menu
3. **Choose a prompt** from the categorized list
4. **Select action**:
   - Send to Copilot Chat
   - Copy to clipboard
   - Insert at cursor
   - Preview prompt

### Advanced Usage

#### For Code Reviews
1. Select a function or class
2. Use "Code Review" prompt
3. Send directly to Copilot Chat
4. Review the AI's suggestions

#### For Refactoring
1. Select code that needs improvement
2. Use "Refactor for Clean Code" prompt
3. Get specific refactoring suggestions
4. Apply improvements iteratively

#### For Testing
1. Select a function
2. Use "Generate Unit Tests" prompt
3. Get comprehensive test cases
4. Adapt to your testing framework

## Troubleshooting

### Extension Not Loading
- Check VS Code version (requires 1.74.0+)
- Reload VS Code window
- Check Extensions view for any error messages

### Prompts Not Showing
- Verify extension is enabled
- Check Command Palette for "Show Copilot Prompts"
- Try reloading the window

### Copilot Integration Issues
- Ensure GitHub Copilot extension is installed
- Check Copilot subscription status
- Try copying prompt to clipboard as fallback

### Custom Prompts Not Working
- Verify JSON syntax in settings
- Check that all required fields are present
- Reload VS Code after changing settings

## Performance Tips

- Use search functionality to quickly find relevant prompts
- Bookmark frequently used prompts by copying to clipboard
- Combine multiple prompts for comprehensive analysis
- Use context-specific prompts for better results

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Show Prompts | `Ctrl+Shift+Alt+P` | `Cmd+Shift+Alt+P` |
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Copy | `Ctrl+C` | `Cmd+C` |
| Paste | `Ctrl+V` | `Cmd+V` |

## Support

If you encounter issues:
1. Check this troubleshooting guide
2. Review the demo.md file for examples
3. Open an issue on the GitHub repository
4. Include VS Code version and error messages