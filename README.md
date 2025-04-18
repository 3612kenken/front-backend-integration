# Simple MERN Stack Project + Setup Guide

By [codewarriork3nz](https://github.com/3612kenken/)

## FRONTEND SETUP

React Framework with Vite Setup

```
npm create vite@latest <your project name> -- --template react
cd <your project name>
npm install
npm run dev

npm i -D react-router-dom
```
I used bootstrap CSS framework for minimal, quick, and professional design

## IMPORT DATABASE INSTRUCTION
- Create database from MongoDB -> 'db_cruds'
- Look for JSON files from 'database' folder path
- Import files into mongoDB collection with the following names 'tbl_business' and 'tbl_users'
- You can see the Database Screenshot below for clarification
  
## BACKEND SETUP

```
npm init
npm install express mongoose cors
npm install nodemon
```
### To run your frontend site use
```
npm run dev
```
### To run your backend site use
```
nodemon index.js
```
## Dashboard Screenshot
![Dashboard Screenshot ](https://github.com/3612kenken/front-backend-integration/blob/main/dashboard.png)
## Database Screenshot
![MongoDB Screenshot ](https://github.com/3612kenken/front-backend-integration/blob/main/database.png)
## API Screenshot
![API Screenshot ](https://github.com/3612kenken/front-backend-integration/blob/main/api-backend.png)

# Other features to update

- Mongoose CRUD and API - 80% Done
- React using Bootstrap CSS Framework - Done
- Chart.js/Apexchart for data visualization and analytics - Done

### UNIT TESTING DEMO

- This repository is built as [Unit Testing Code](https://github.com/thehungrycoder225/unit-test-demo.git) demo by [thehungrycoder225](https://github.com/thehungrycoder225/).

### OTHER FRONT END INTEGRATION DEMO

- This repository is built as [Front End Integration](https://github.com/thehungrycoder225/demo-frontend-integration.git) demo by [thehungrycoder225](https://github.com/thehungrycoder225/).

### Mongoose CRUD DEMO

- This repository is built as [Guide to MongoDB](https://github.com/thehungrycoder225/guide-to-mongodb.git) demo by [thehungrycoder225](https://github.com/thehungrycoder225/).
