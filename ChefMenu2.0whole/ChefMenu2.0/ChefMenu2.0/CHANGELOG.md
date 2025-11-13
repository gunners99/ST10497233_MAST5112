# Project Changelog - POE Part 3

This document outlines the changes and new features implemented for Part 3 of the Portfolio of Evidence, based on feedback from Part 2 and the new requirements.

## 1. Fixes Based on Part 2 Feedback

The primary functional feedback from Part 2 was "App not showing total number of menu items added".

* **FIXED:** The Home Screen now correctly displays a live count of all menu items.
* **Implementation:** This was achieved by reading the `.length` property from the `menuItems` array stored in the `MenuContext` and displaying it in a `<Text>` component on `HomeScreen.tsx`.

## 2. New Features for Part 3

The following features were added as per the Part 3 requirements:

### Feature: Average Price Statistics

* **NEW:** The Home Screen now displays the average price of menu items, broken down by course (Starter, Main, Dessert).
* **Implementation:** Used the `useMemo` hook in `HomeScreen.tsx` to efficiently calculate these statistics. The logic iterates through each course, filters the `menuItems` array, and calculates the average price. The results are displayed in a new "stats" section on the Home Screen.

### Feature: Dedicated "Add Item" Screen

* **NEW:** The "Add Menu Item" functionality has been moved from the Home Page to its own dedicated screen (`AddItemScreen.tsx`).
* **Implementation:** The Home Screen now has an "Add Item" button that navigates the user to the `AddItemScreen` using React Navigation.

### Feature: Menu Item Removal

* **NEW:** Chefs can now remove items from the menu.
* **Implementation:** A `removeItem` function was added to the `MenuContext`. This function is passed to each `MenuItemCard` component, which displays a "Remove" button to trigger the deletion.

### Feature: Dedicated "Filter" Screen

* **NEW:** A separate page (`FilterScreen.tsx`) was created to allow guests to filter the menu by course.
* **Implementation:** The screen fetches the full menu from `MenuContext` and uses `useState` to manage the currently selected filter. It displays only the items that match the selected course.

## 3. Code Quality & Refactoring

As required, the app was refactored to improve code quality and maintainability.

* **State Management:** Implemented React Context (`MenuContext.tsx`) to manage the application's state (menu items, courses) in a centralized, clean way. This removes the need to pass props down through many levels.
* **Component Structure:** Broke down the UI into multiple, reusable components (e.g., `MenuItemCard.tsx`, `Header.tsx`, `CustomButton.tsx`).
* **File Organization:** Separated logic into screens (`screens/`), components (`components/`), and context (`context/`).
* **Navigation:** Used React Navigation (`RootNavigator.tsx`) to manage all app navigation and screen parameters.