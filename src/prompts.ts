export interface PromptItem {
  title: string;
  description: string;
  prompt: string;
  category: string;
}

export const predefinedPrompts: PromptItem[] = [
  // Code Review & Analysis
  {
    title: "Code Review",
    description: "Review the selected code for best practices, bugs, and improvements",
    prompt: "Please review this code for:\n- Potential bugs or issues\n- Code quality and best practices\n- Performance optimizations\n- Security vulnerabilities\n- Readability improvements\n\nProvide specific suggestions with examples where possible.",
    category: "Code Review"
  },
  {
    title: "Security Analysis",
    description: "Analyze code for security vulnerabilities",
    prompt: "Analyze this code for security vulnerabilities including:\n- SQL injection risks\n- XSS vulnerabilities\n- Authentication/authorization issues\n- Input validation problems\n- Sensitive data exposure\n- OWASP Top 10 issues\n\nProvide specific remediation steps.",
    category: "Code Review"
  },
  {
    title: "Performance Analysis",
    description: "Analyze code for performance bottlenecks",
    prompt: "Analyze this code for performance issues:\n- Time complexity problems\n- Memory usage optimization\n- Database query efficiency\n- Caching opportunities\n- Algorithmic improvements\n\nSuggest specific optimizations with before/after examples.",
    category: "Code Review"
  },

  // Code Generation
  {
    title: "Generate Unit Tests",
    description: "Generate comprehensive unit tests for the selected code",
    prompt: "Generate comprehensive unit tests for this code including:\n- Happy path scenarios\n- Edge cases and boundary conditions\n- Error handling tests\n- Mock dependencies where needed\n- Test data setup and teardown\n\nUse the appropriate testing framework for the language.",
    category: "Testing"
  },
  {
    title: "Generate Documentation",
    description: "Generate detailed documentation for code",
    prompt: "Generate comprehensive documentation for this code including:\n- Function/method descriptions\n- Parameter explanations\n- Return value descriptions\n- Usage examples\n- Error conditions\n- Dependencies and requirements\n\nUse appropriate documentation format (JSDoc, docstrings, etc.).",
    category: "Documentation"
  },
  {
    title: "Generate API Documentation",
    description: "Generate API documentation from code",
    prompt: "Generate API documentation for this code including:\n- Endpoint descriptions\n- Request/response schemas\n- HTTP status codes\n- Authentication requirements\n- Rate limiting information\n- Example requests and responses\n\nFormat as OpenAPI/Swagger specification where applicable.",
    category: "Documentation"
  },

  // Refactoring
  {
    title: "Refactor for Clean Code",
    description: "Refactor code following clean code principles",
    prompt: "Refactor this code following clean code principles:\n- Extract methods/functions for better readability\n- Improve variable and function naming\n- Reduce complexity and nesting\n- Apply SOLID principles\n- Remove code duplication\n- Improve error handling\n\nExplain each refactoring decision.",
    category: "Refactoring"
  },
  {
    title: "Extract Reusable Components",
    description: "Identify and extract reusable components",
    prompt: "Analyze this code and:\n- Identify reusable patterns or components\n- Extract them into separate functions/classes/modules\n- Create proper interfaces and abstractions\n- Ensure proper separation of concerns\n- Maintain backward compatibility\n\nProvide the refactored code with usage examples.",
    category: "Refactoring"
  },
  {
    title: "Modernize Legacy Code",
    description: "Modernize old code with current best practices",
    prompt: "Modernize this legacy code by:\n- Updating to current language features\n- Applying modern design patterns\n- Improving error handling\n- Adding type safety where applicable\n- Updating deprecated APIs\n- Improving maintainability\n\nExplain the benefits of each modernization.",
    category: "Refactoring"
  },

  // Debugging
  {
    title: "Debug Issue",
    description: "Help debug and fix code issues",
    prompt: "Help me debug this code issue:\n- Analyze the code for potential problems\n- Identify the root cause of the issue\n- Suggest debugging strategies\n- Provide step-by-step troubleshooting\n- Offer multiple solution approaches\n- Include logging/debugging code if needed",
    category: "Debugging"
  },
  {
    title: "Add Logging",
    description: "Add comprehensive logging to code",
    prompt: "Add comprehensive logging to this code:\n- Log entry/exit points of functions\n- Log important variable values\n- Log error conditions with context\n- Use appropriate log levels (debug, info, warn, error)\n- Include structured logging where beneficial\n- Follow logging best practices for the framework",
    category: "Debugging"
  },

  // Architecture & Design
  {
    title: "Design Pattern Suggestions",
    description: "Suggest appropriate design patterns",
    prompt: "Analyze this code and suggest appropriate design patterns:\n- Identify current design issues\n- Recommend suitable design patterns\n- Show how to implement the patterns\n- Explain benefits and trade-offs\n- Provide before/after comparisons\n- Consider maintainability and scalability",
    category: "Architecture"
  },
  {
    title: "Architecture Review",
    description: "Review system architecture and design",
    prompt: "Review this system architecture/design for:\n- Scalability concerns\n- Maintainability issues\n- Performance bottlenecks\n- Security considerations\n- Design pattern usage\n- Separation of concerns\n- Dependency management\n\nSuggest architectural improvements.",
    category: "Architecture"
  },

  // Learning & Explanation
  {
    title: "Explain Code",
    description: "Explain how the code works in detail",
    prompt: "Explain this code in detail:\n- What does it do overall?\n- Break down each section/function\n- Explain the logic flow\n- Identify key algorithms or patterns used\n- Explain any complex or tricky parts\n- Provide context about when/why to use this approach",
    category: "Learning"
  },
  {
    title: "Compare Approaches",
    description: "Compare different implementation approaches",
    prompt: "Compare different approaches for implementing this functionality:\n- Show alternative implementations\n- Discuss pros and cons of each approach\n- Consider performance implications\n- Evaluate maintainability\n- Suggest the best approach for different scenarios\n- Provide code examples for each approach",
    category: "Learning"
  },

  // Database
  {
    title: "Optimize Database Query",
    description: "Optimize database queries for better performance",
    prompt: "Optimize this database query/code:\n- Analyze query performance\n- Suggest index optimizations\n- Identify N+1 query problems\n- Recommend query restructuring\n- Suggest caching strategies\n- Provide execution plan analysis\n- Show optimized versions with explanations",
    category: "Database"
  },

  // Frontend Specific
  {
    title: "Accessibility Review",
    description: "Review code for accessibility compliance",
    prompt: "Review this frontend code for accessibility:\n- WCAG compliance issues\n- Keyboard navigation support\n- Screen reader compatibility\n- Color contrast and visual design\n- ARIA attributes usage\n- Semantic HTML structure\n- Focus management\n\nProvide specific fixes and improvements.",
    category: "Frontend"
  },
  {
    title: "Performance Optimization (Frontend)",
    description: "Optimize frontend code for performance",
    prompt: "Optimize this frontend code for performance:\n- Bundle size optimization\n- Lazy loading opportunities\n- Image optimization\n- Caching strategies\n- Rendering performance\n- Memory leak prevention\n- Core Web Vitals improvements\n\nProvide specific optimizations with measurements.",
    category: "Frontend"
  }
];

export function getPromptsByCategory(): Map<string, PromptItem[]> {
  const categorized = new Map<string, PromptItem[]>();
  
  predefinedPrompts.forEach(prompt => {
    if (!categorized.has(prompt.category)) {
      categorized.set(prompt.category, []);
    }
    categorized.get(prompt.category)!.push(prompt);
  });
  
  return categorized;
}

export function searchPrompts(query: string): PromptItem[] {
  const lowercaseQuery = query.toLowerCase();
  return predefinedPrompts.filter(prompt => 
    prompt.title.toLowerCase().includes(lowercaseQuery) ||
    prompt.description.toLowerCase().includes(lowercaseQuery) ||
    prompt.category.toLowerCase().includes(lowercaseQuery)
  );
}