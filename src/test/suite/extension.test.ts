import * as assert from 'assert';
import * as vscode from 'vscode';
import { predefinedPrompts, searchPrompts, getPromptsByCategory } from '../../prompts';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Predefined prompts should be loaded', () => {
        assert.ok(predefinedPrompts.length > 0, 'Should have predefined prompts');
        assert.ok(predefinedPrompts.length >= 20, 'Should have at least 20 prompts');
    });

    test('All prompts should have required properties', () => {
        predefinedPrompts.forEach(prompt => {
            assert.ok(prompt.title, 'Prompt should have a title');
            assert.ok(prompt.description, 'Prompt should have a description');
            assert.ok(prompt.prompt, 'Prompt should have prompt text');
            assert.ok(prompt.category, 'Prompt should have a category');
        });
    });

    test('Search functionality should work', () => {
        const results = searchPrompts('test');
        assert.ok(results.length > 0, 'Should find prompts containing "test"');
        
        const codeReviewResults = searchPrompts('code review');
        assert.ok(codeReviewResults.length > 0, 'Should find code review prompts');
    });

    test('Category grouping should work', () => {
        const categorized = getPromptsByCategory();
        assert.ok(categorized.size > 0, 'Should have categorized prompts');
        
        // Check that we have expected categories
        const categories = Array.from(categorized.keys());
        assert.ok(categories.includes('Code Review'), 'Should have Code Review category');
        assert.ok(categories.includes('Testing'), 'Should have Testing category');
        assert.ok(categories.includes('Refactoring'), 'Should have Refactoring category');
    });

    test('Extension should be present', () => {
        assert.ok(vscode.extensions.getExtension('dilipseshadri.copilot-prompt-library'));
    });
});