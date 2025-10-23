# Chef Menu 2.0

A modern restaurant menu management application built with React Native, Expo, and TypeScript. This application allows restaurant owners and managers to create, manage, and filter their menu items by courses.

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
```bash
cd ChefMenu2.0
npm install
```
3. Start the development server:
```bash
npx expo start
```

## 📁 Project Structure

### Core Components

#### `src/components/`

- **`CustomButton.tsx`**
  - A reusable button component with customizable styles
  - Props: title, onPress, color, style, textStyle
  - Supports both primary and secondary button variations

- **`Header.tsx`**
  - Application header component
  - Displays restaurant logo and title
  - Consistent styling across screens

- **`MenuItemCard.tsx`**
  - Displays individual menu items
  - Shows name, description, course type, and price
  - Includes delete functionality
  - Used in both Home and Filter screens

### Navigation

#### `src/navigation/`

- **`RootNavigator.tsx`**
  - Implements stack navigation using @react-navigation/native-stack
  - Defines main navigation structure
  - Screens: Home, AddItem, Filter
  - Includes header styling and configuration

### Screens

#### `src/screens/`

- **`HomeScreen.tsx`**
  - Main application screen
  - Displays complete menu list
  - Features:
    - Add new item button
    - Filter navigation
    - Total items counter
    - Menu item deletion

- **`AddItemScreen.tsx`**
  - Form for adding new menu items
  - Fields:
    - Dish name
    - Description (optional)
    - Course selection (Starter/Main/Dessert)
    - Price
  - Input validation and error handling

- **`FilterScreen.tsx`**
  - Allows filtering menu items by course
  - Shows item count for current filter
  - Course filter buttons
  - Filtered menu item list

### State Management

#### `src/context/`

- **`MenuContext.tsx`**
  - Implements React Context for global state management
  - Manages menu items array
  - Provides functions:
    - addItem: Add new menu items
    - removeItem: Delete existing items
  - Stores course types

### Types

#### `src/types.ts`**
- Defines core TypeScript interfaces and types
- Types:
  - `Course`: 'Starter' | 'Main' | 'Dessert'
  - `MenuItem`: Interface for menu item structure
    ```typescript
    {
      id: string;
      name: string;
      description?: string;
      course: Course;
      price: number;
    }
    ```

## 🛠️ Technical Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation v6
- **Component Library**: React Native core components
- **Form Elements**: @react-native-picker/picker for course selection

## 🎨 Styling

- Modern white/blue/grey theme
- Consistent styling using StyleSheet
- Custom button components
- Responsive layouts
- Platform-specific adjustments

## 📦 Dependencies

Core dependencies:
- expo: ^48.0.0
- react: 18.2.0
- react-native: 0.71.8
- typescript: ^5.2.2
- @react-navigation/native: ^6.1.6
- @react-navigation/native-stack: ^6.9.12
- @react-native-picker/picker: ^2.4.8

## 🔧 Development

To start development:
1. Ensure you have Expo CLI installed
2. Install dependencies: `npm install`
3. Start development server: `npx expo start`
4. Use Expo Go app on your device or emulator

## 📱 Features

- Create and manage menu items
- Categorize items by course type
- Filter menu items
- Delete items
- Form validation
- Responsive design
- Native platform UI components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
