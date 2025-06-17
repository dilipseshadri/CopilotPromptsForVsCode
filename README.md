# Copilot Prompt Library

A VS Code extension that provides a curated collection of predefined prompts for GitHub Copilot Chat, helping developers get the most out of AI-assisted coding.

## Features

- **Extensive Prompt Library**: Over 20 carefully crafted prompts covering various development scenarios
- **Organized Categories**: Prompts are organized into logical categories like Code Review, Testing, Refactoring, etc.
- **Quick Search**: Easily find prompts using the built-in search functionality
- **Multiple Actions**: Send prompts directly to Copilot Chat, copy to clipboard, or insert at cursor
- **Customizable**: Add your own custom prompts through VS Code settings

## Prompt Categories

### Code Review & Analysis
- **Code Review**: Comprehensive code review for best practices, bugs, and improvements
- **Security Analysis**: Analyze code for security vulnerabilities
- **Performance Analysis**: Identify and fix performance bottlenecks

### Testing
- **Generate Unit Tests**: Create comprehensive unit tests with edge cases
- **Test Coverage Analysis**: Analyze and improve test coverage

### Documentation
- **Generate Documentation**: Create detailed code documentation
- **Generate API Documentation**: Create API documentation with examples

### Refactoring
- **Refactor for Clean Code**: Apply clean code principles
- **Extract Reusable Components**: Identify and extract reusable patterns
- **Modernize Legacy Code**: Update old code with modern practices

### Debugging
- **Debug Issue**: Systematic debugging assistance
- **Add Logging**: Add comprehensive logging to code

### Architecture & Design
- **Design Pattern Suggestions**: Recommend appropriate design patterns
- **Architecture Review**: Review system architecture and design

### Learning & Explanation
- **Explain Code**: Detailed code explanations
- **Compare Approaches**: Compare different implementation approaches

### Database
- **Optimize Database Query**: Improve database query performance

### Frontend
- **Accessibility Review**: Review code for accessibility compliance
- **Performance Optimization**: Optimize frontend performance

## Usage

### Quick Access
1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Show Copilot Prompts"
3. Select a prompt from the list
4. Choose how to use the prompt:
   - Send directly to Copilot Chat
   - Copy to clipboard
   - Insert at cursor position
   - Preview the full prompt

### Context Menu
- Right-click in any editor with selected text
- Choose "Show Copilot Prompts" from the context menu

### Search Functionality
- Start typing in the prompt picker to search across titles, descriptions, and categories
- Use keywords like "test", "security", "performance", etc.

## Installation

1. Install the extension from the VS Code Marketplace
2. Reload VS Code
3. Use `Ctrl+Shift+P` and search for "Show Copilot Prompts"

## Configuration

You can add custom prompts through VS Code settings:

```json
{
  "copilotPromptLibrary.customPrompts": [
    {
      "title": "My Custom Prompt",
      "description": "Description of what this prompt does",
      "prompt": "Your custom prompt text here...",
      "category": "Custom"
    }
  ]
}
```

## Requirements

- VS Code 1.74.0 or higher
- GitHub Copilot extension (recommended for best experience)

## Tips for Best Results

1. **Be Specific**: Select relevant code before using prompts for more targeted results
2. **Combine Prompts**: Use multiple prompts in sequence for comprehensive analysis
3. **Customize Context**: Modify prompts to include specific requirements for your project
4. **Iterate**: Use follow-up questions to dive deeper into specific areas

## Contributing

Found a bug or have a suggestion for a new prompt? Please open an issue or submit a pull request on our GitHub repository.

## License

This extension is licensed under the MIT License.

## Changelog

### 1.0.0
- Initial release with 20+ predefined prompts
- Search and categorization functionality
- Multiple prompt actions (send to chat, copy, insert, preview)
- Custom prompt configuration support