# Tic-Tac-Toe Game

This project is a Cypress end-to-end (E2E) testing setup for a Tic-Tac-Toe web application built with React and Vite.

## Project Overview
Tests the Tic-Tac-Toe app using Cypress.
Runs automated UI tests for game logic (X/O moves, win/draw conditions, reset functionality).
Uses Vite as the development server.
Supports interactive Cypress testing (UI mode) and headless testing (CLI mode).

## Project Structure

/cypress
  ├── /e2e          # Cypress test specs (Tic-Tac-Toe tests live here)
  ├── /fixtures     # Sample test data (if needed)
  ├── /support      # Cypress custom commands & setup
  ├── cypress.config.js  # Cypress configuration file
/src
  ├── /components   # React components for the Tic-Tac-Toe game
  ├── App.jsx       # Main React App component
  ├── main.jsx      # App entry point
/package.json       # Project scripts and dependencies
/vite.config.js     # Vite server configuration

## Installation

1. Prerequisites
    Node.js 
    npm

2. Clone the Repository
    git clone https://github.com/AukseMaz/Tic_Tac_Toe-cypress-pipeline-demo.git

3. Install Dependencies
    npm install

4. Run the Application  
    npm run dev

## Running Tests

1. Run Cypress in UI Mode (Interactive)
    npm run test:e2e

2. Run Cypress in CLI Mode (Headless)
    npm run test:e2eh

## Cypress Test Cases

The following test cases are included in cypress/e2e/spec.cy.js:

✅ TC01: Load the app and verify the title.
✅ TC02: Check if the board renders with 9 empty squares.
✅ TC03: Ensure 'X' is placed first, followed by 'O'.
✅ TC04: Prevent clicking on an already filled square.
✅ TC05: Detect a winning condition.
✅ TC06: Detect a draw condition.
✅ TC07: Reset the game board when clicking the reset button.

## Additional Commands

Command	Description
npm run dev	    Start the Vite dev server.
npm run build	Build the production version.
npm run preview	Preview the production build.
npm run lint	Run ESLint for code quality checks.
npm run cy:ui	Open Cypress Test Runner (UI).
npm run cy:cli	Run Cypress tests in headless mode.

## License

This project is open-source under the MIT License.