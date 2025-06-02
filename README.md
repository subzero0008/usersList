# User Directory App

React application that displays users from JSONPlaceholder API with pagination, built with Vite and TypeScript.

## Features
- TypeScript type safety
- Responsive design with modern UI
- Pagination system (3 users per page)
- Glass morphism design effects
- Error handling and loading states

## Technologies & Versions
- **React**: 19.1.0
- **React DOM**: 19.1.0
- **TypeScript**: 5.8.3
- **Vite**: 6.3.5
- **Axios**: 1.9.0
- **ESLint**: 9.25.0

## Installation

1. Clone the repository and navigate into it:

2. Install dependencies:
npm install
Run the development server:
npm run dev
Build for production:
npm run build

3. Development Dependencies
@types/react: 19.1.2

@types/react-dom: 19.1.2

@vitejs/plugin-react: 4.4.1

eslint: 9.25.0

eslint-plugin-react-hooks: 5.2.0

eslint-plugin-react-refresh: 0.4.19

4. Pagination Component Description
This Pagination component is built with React and TypeScript. It renders a set of page buttons based on the total number of users and how many users should be displayed per page. Clicking a page number calls the paginate function to update the current page.

Props:
usersPerPage: number of users shown per page

totalUsers: total number of users to paginate through

currentPage: the currently active page number

paginate(pageNumber: number): function to change the current page

How it works:
Calculates the total number of pages by dividing totalUsers by usersPerPage and rounding up.

Creates an array of page numbers.

Renders a button for each page number.

Highlights the active page button.

Calls the paginate function when a page button is clicked.

