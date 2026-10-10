# Personal Finance App

The outline for this project is provided by the site Frontend Mentor, however I have taken a few liberties to further customize it. This project will provide users with a more user-friendly and visually pleasing alternative to the typical finance tracking many do on platforms such as Excel or Google Sheets. Users are able to track transactions (both income and expenses), savings, budgets, and bills all in one coheasive and easy-to-navigate platform. 

## Features

- User registration and login
- An at-a-glance dashboard for quick insights
- Create, edit, and delete transactions
- Create, edit, and delete savings containers
- Add or withdraw money from savings container 
- Create, edit, and delete budgets 
- Create, edit, and delete bills
- search, filter, and sort transactions and bills 

## Tech stack

-- backend
- Node.js
- Express
- TypeScript (backend and frontend)
- PostgreSQL (Drizzle ORM)
- vitest (unit testing)

-- frontend 
- React
- Tanstack Query 

## Feature break down

- User registration and login (Authentication):
    - Password input is required to be a minimum of 8 characters and is required to include 1 uppercase letter, 1 number and 1 special character. The requirements for the password are mainly based on the intuition that this is meant to be a personal finance application that users are intended to use to track sensitive information such as income, money transfers between friends and family, expenses, bills, etc. Even though it is not intended to be directly linked to the user's bank account, I believe requiring the user to input a secure password is necessary given the nature of the application.
    
    - Upon signing up or logging in, the user is issued a tempory jwt token to allow access to protected endpoints and concurrently issued a refresh token that will be used upon the expiry of the initial jwt token to issue a new token so the user can remain logged in to their account for longer periods. When deciding which authentication flow to use, I decided against my typical cookie approach to demonstrate a type of authentication that is better suited to both web and native mobile app users. 