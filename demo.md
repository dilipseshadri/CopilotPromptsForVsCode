# Copilot Prompt Library Demo

This extension provides a comprehensive library of predefined prompts for GitHub Copilot Chat.

## How to Use

1. **Open Command Palette**: Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. **Search for Command**: Type "Show Copilot Prompts"
3. **Select a Prompt**: Browse through categories or search for specific prompts
4. **Choose Action**: 
   - Send directly to Copilot Chat
   - Copy to clipboard
   - Insert at cursor
   - Preview the prompt

## Quick Access

- **Keyboard Shortcut**: `Ctrl+Shift+Alt+P` (or `Cmd+Shift+Alt+P` on Mac)
- **Context Menu**: Right-click in editor with selected code

## Sample Code for Testing

Here's some sample code you can use to test the extension:

```javascript
function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

// This function could be improved for performance and readability
function processUserData(users) {
    var result = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].active == true) {
            result.push({
                id: users[i].id,
                name: users[i].firstName + " " + users[i].lastName,
                email: users[i].email
            });
        }
    }
    return result;
}
```

## Try These Prompts

1. **Select the code above** and use the "Code Review" prompt
2. **Select the `processUserData` function** and use the "Refactor for Clean Code" prompt
3. **Select any function** and use the "Generate Unit Tests" prompt
4. **Use the "Security Analysis" prompt** to check for vulnerabilities

## Available Categories

- **Code Review & Analysis**: Review code quality, security, and performance
- **Testing**: Generate tests and improve test coverage
- **Documentation**: Create comprehensive documentation
- **Refactoring**: Improve code structure and maintainability
- **Debugging**: Debug issues and add logging
- **Architecture & Design**: Review system design and patterns
- **Learning & Explanation**: Understand and explain code
- **Database**: Optimize queries and database interactions
- **Frontend**: Accessibility and performance optimization