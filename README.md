# React + TypeScript + Vite

# 🚀 Dev Stack

Dev Stack is a responsive React application where users can explore different development technologies and build their own preferred technology stack.

Users can browse frontend, backend, database, language, styling, and DevOps technologies, add them to their stack, and remove them whenever needed.

## 🌐 Live Website

https://dev-stack-tamim.surge.sh

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite
- JSON

## ✨ Features

1. **Explore Technologies**  
   Users can browse different development technologies with their category, difficulty, rating, badge, description, and icon.

2. **Build Your Own Stack**  
   Users can add technologies to the "Your Stack" section. The same technology cannot be added more than once.

3. **Manage Selected Technologies**  
   Users can remove a single technology or clear the entire stack. Toast notifications provide feedback for different actions.

## 📚 React Questions

##1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to make UI components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State stores data inside a component that can change while the application is running.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores and updates data in a React component. In this project, I used it to store the technology data, selected stack, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch the technology data from `data.json` when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. This allows React to update the correct item efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

For example, I used it in the "Your Stack" section:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>Selected technologies</div>
)}
How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props.

Example:

<TechCard tech={tech} />

A child can communicate with the parent by calling a function that the parent passes through props.

Example:

<TechCard
  tech={tech}
  handleAddToStack={handleAddToStack}
/>

The child can then call:

handleAddToStack(tech);
