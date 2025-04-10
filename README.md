# Food Order App

## Project Overview

This is a React-based food ordering application built with Vite. The app allows users to browse a menu of available meals, add items to their cart, and manage their order. It's a single-page application that demonstrates core React concepts like components, state management, context API, and more.

## Implementation Details

### Tech Stack

- **React**: For building the UI components
- **Vite**: As the build tool and development server
- **CSS Modules**: For component-scoped styling
- **React Context API**: For global state management
- **React Portals**: For rendering modals outside the DOM hierarchy

### Project Structure

The project follows a component-based architecture with the following structure:

```
src/
├── assets/
├── components/
│   ├── Cart/
│   ├── Header/
│   ├── Meals/
│   │   └── MealItem/
│   └── UI/
├── store/
├── App.jsx
└── main.jsx
```

### Key Features

#### 1. Component Architecture

I built the app using a modular component approach. Each component has a specific responsibility:

- **Header**: Shows the app title and cart button
- **Meals**: Displays available meals with descriptions and prices
- **Cart**: Shows selected items and total amount
- **UI Components**: Reusable UI elements like Card, Modal, and Input

#### 2. State Management

Instead of prop drilling, I implemented a context-based state management system:

- **CartContext**: Provides cart data to all components that need it
- **CartProvider**: Manages the cart state and provides methods to update it

#### 3. Reducer Pattern

For more complex state logic, I used the reducer pattern:

```jsx
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // Logic for adding items
  }
  if (action.type === "REMOVE") {
    // Logic for removing items
  }
  return defaultCartState;
};
```
