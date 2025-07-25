import { QuickReply } from '../types/chat';

const responses = [
  "I'd be happy to help you with that! Let me provide you with a solution.",
  "Great question! Here's what I can help you with:",
  "I understand what you're looking for. Let me give you a detailed answer:",
  "That's something I can definitely assist with. Here's my response:",
  "Excellent! I have some useful information for you:",
  "I can help you with that. Here's what you need to know:",
  "Perfect! Let me provide you with a comprehensive answer:",
  "That's a great question! I'll give you a detailed explanation:",
];

const codeExamples = {
  react: `// React Component Example
import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default MyComponent;`,

  javascript: `// JavaScript Function Example
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log(result); // Output: 15`,

  css: `/* CSS Flexbox Centering */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.content {
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}`,

  python: `# Python Function Example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Usage
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`,

  api: `// API Fetch Example
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Usage
fetchUserData(123)
  .then(user => console.log(user))
  .catch(error => console.error(error));`,

  form: `// Form Handling Example
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
};`
};

const quickReplies: QuickReply[] = [
  { id: '1', text: 'Show me React code' },
  { id: '2', text: 'JavaScript examples' },
  { id: '3', text: 'CSS styling help' },
  { id: '4', text: 'API integration' },
  { id: '5', text: 'Form handling' },
  { id: '6', text: 'Python code' },
];

export const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Greeting responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! I'm your coding assistant. I can help you with React, JavaScript, CSS, Python, APIs, and much more. What would you like to build today?";
  }
  
  if (message.includes('how are you') || message.includes('how do you do')) {
    return "I'm doing great and ready to help you code! I can provide examples, explain concepts, and help you solve programming challenges. What are you working on?";
  }
  
  // Coding-related responses
  if (message.includes('react') || message.includes('component') || message.includes('jsx')) {
    return `Here's a React component example that demonstrates state management and event handling:

${codeExamples.react}

This component uses the useState hook to manage state and shows how to handle button clicks. Would you like me to explain any specific part or show you a different React pattern?`;
  }
  
  if (message.includes('javascript') || message.includes('js') || message.includes('function')) {
    return `Here's a useful JavaScript example:

${codeExamples.javascript}

This shows how to use the reduce method to calculate a sum. JavaScript has many powerful array methods like map, filter, and reduce. What specific JavaScript concept would you like to explore?`;
  }
  
  if (message.includes('css') || message.includes('style') || message.includes('center') || message.includes('flexbox')) {
    return `Here's how to center content with CSS Flexbox:

${codeExamples.css}

This creates a perfectly centered layout with a beautiful gradient background. CSS Flexbox is incredibly powerful for layouts. Need help with any other CSS properties?`;
  }
  
  if (message.includes('python') || message.includes('py')) {
    return `Here's a Python example with the classic Fibonacci sequence:

${codeExamples.python}

Python is great for algorithms and data processing. This recursive approach is elegant but not the most efficient for large numbers. Would you like to see an iterative version or other Python examples?`;
  }
  
  if (message.includes('api') || message.includes('fetch') || message.includes('request') || message.includes('http')) {
    return `Here's how to make API calls with proper error handling:

${codeExamples.api}

This example shows modern async/await syntax with try-catch error handling. It's important to always handle potential errors when making API calls. Need help with a specific API integration?`;
  }
  
  if (message.includes('form') || message.includes('input') || message.includes('submit')) {
    return `Here's a complete form handling example in React:

${codeExamples.form}

This demonstrates controlled components, form validation, and submission handling. Forms are crucial for user interaction. What type of form are you trying to build?`;
  }
  
  if (message.includes('help') || message.includes('what can you do') || message.includes('assist')) {
    return `I'm your coding assistant! I can help you with:

🚀 **Frontend Development:**
- React components and hooks
- JavaScript functions and ES6+ features
- CSS styling and layouts
- HTML structure and semantics

💻 **Backend & APIs:**
- API integration and fetch requests
- Node.js and Express
- Database queries
- Authentication

🐍 **Python Programming:**
- Functions and algorithms
- Data structures
- Web scraping
- Automation scripts

🛠️ **General Programming:**
- Debugging help
- Code optimization
- Best practices
- Architecture advice

Just ask me about any coding topic or describe what you're trying to build!`;
  }
  
  if (message.includes('bug') || message.includes('error') || message.includes('debug') || message.includes('fix')) {
    return `I'd be happy to help you debug! To provide the best assistance, please share:

1. **The error message** you're seeing
2. **The code** that's causing the issue
3. **What you expected** to happen
4. **What actually happened**

Common debugging steps:
- Check the browser console for errors
- Verify variable names and syntax
- Ensure all imports are correct
- Check for missing dependencies

Share your code and I'll help you identify the issue!`;
  }
  
  if (message.includes('database') || message.includes('sql') || message.includes('mongodb')) {
    return `Here are some database examples:

**SQL Query:**
\`\`\`sql
SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name
ORDER BY order_count DESC;
\`\`\`

**MongoDB Query:**
\`\`\`javascript
// Find users with more than 5 orders
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  },
  {
    $match: {
      "orders.5": { $exists: true }
    }
  }
]);
\`\`\`

What type of database operation do you need help with?`;
  }
  
  if (message.includes('joke') || message.includes('funny')) {
    return `Why do programmers prefer dark mode? 

Because light attracts bugs! 🐛😄

Here's another one: Why don't programmers like nature? It has too many bugs and not enough documentation! 

Now, what coding challenge can I help you with today?`;
  }
  
  if (message.includes('bye') || message.includes('goodbye')) {
    return "Happy coding! Remember, every expert was once a beginner. Keep practicing and don't hesitate to come back if you need help with any programming challenges. Good luck with your projects! 🚀";
  }
  
  // Default response for unrecognized queries
  return `I'd love to help you with that! I specialize in:

• **Web Development** (React, JavaScript, CSS, HTML)
• **Python Programming** (functions, algorithms, data processing)
• **API Integration** (REST APIs, fetch requests)
• **Database Queries** (SQL, MongoDB)
• **Debugging & Problem Solving**

Could you be more specific about what you're trying to build or what coding problem you're facing? The more details you provide, the better I can assist you!

For example:
- "How do I create a login form in React?"
- "Show me how to fetch data from an API"
- "Help me debug this JavaScript function"
- "How do I center a div with CSS?"`;
};

export const getQuickReplies = (): QuickReply[] => {
  return quickReplies;
};