# 🎮 Tic-Tac-Toe Game

This project is a Cypress end-to-end (E2E) testing setup for a Tic-Tac-Toe web application built with React and Vite.

## 📌  Project Overview

1️⃣ Tests the Tic-Tac-Toe app using Cypress.  
2️⃣ Runs automated UI tests for game logic (X/O moves, win/draw conditions, reset functionality).  
3️⃣ Uses Vite as the development server.  
4️⃣ Supports interactive Cypress testing (UI mode) and headless testing (CLI mode).  

## 📂 Project Structure

| Path                 | Description |
|----------------------|------------|
| `/cypress/e2e`      | Cypress test specs (Tic-Tac-Toe tests live here) |
| `/cypress/fixtures` | Sample test data (if needed) |
| `/cypress/support`  | Cypress custom commands & setup |
| `cypress.config.js` | Cypress configuration file |
| `/src/components`   | React components for the Tic-Tac-Toe game |
| `App.jsx`           | Main React App component |
| `main.jsx`          | App entry point |
| `package.json`      | Project scripts and dependencies |
| `vite.config.js`    | Vite server configuration |


## 🔧  Installation

1️⃣ Prerequisites 
``` 
Node.js   
npm  
```

2️⃣ Clone the Repository  
```
git clone https://github.com/AukseMaz/ Tic_Tac_Toe-cypress-pipeline-demo.git  
```

3️⃣ Install Dependencies  
```
npm install
```

4️⃣  Run the Application  
```
npm run dev
```

## 🧪 Running Tests

1. Run Cypress in UI Mode (Interactive)
``` bash
npm run test:e2e
```
2. Run Cypress in CLI Mode (Headless)
``` bash
npm run test:e2eh
```

## 📜 Cypress Test Cases

The following test cases are included in cypress/e2e/spec.cy.js:

✅ TC01: Load the app and verify the title.  
✅ TC02: Check if the board renders with 9 empty squares.  
✅ TC03: Ensure 'X' is placed first, followed by 'O'.  
✅ TC04: Prevent clicking on an already filled square.  
✅ TC05: Detect a winning condition.  
✅ TC06: Detect a draw condition.  
✅ TC07: Reset game.  

## 🚀 GitHub Actions


## 📝 License

This project is open-source under the MIT License.