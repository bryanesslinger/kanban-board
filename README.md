# Kanban Board App

<img src="./Assets/14-02-main-page.png" alt="Main Page Screenshot" width="800" />

## Overview
This is a simple yet secure Kanban board app designed for managing tasks. It requires user authentication using JSON Web Tokens (JWT) for secure login and session management. Users can create, update, and organize tasks within boards, but only after authenticating with a valid username and password.

## Features
- Secure Login: Users must log in with a valid username and password.
- JWT Authentication: Authentication is handled via JSON Web Tokens (JWT), ensuring secure sessions.
- Session Management: JWT tokens are securely stored in local storage and automatically cleared on logout or session expiration.
- Redirects: Unauthorized users are redirected to the login page, and session timeouts lead to automatic logouts.

## User Authentication Flow

### Login Page:

- The login button is the first screen a user sees.
- The page contains two form inputs: one for the username and another for the password.

### Successful Login:

- After entering valid credentials, the user is authenticated with JWT.
- On successful login, the user is redirected to the main Kanban board page.
- The JWT is stored securely in local storage for subsequent requests.

### Failed Login:

- If invalid credentials are provided, the user is shown an error message indicating the credentials are incorrect.

### Session Expiry:

- The app monitors user activity and automatically expires the session after a defined period of inactivity.
- If the session expires, the JWT is invalidated, and the user is redirected to the login page upon their next action.

### Logout:

- The user can log out by clicking a logout button.
- Upon logging out, the JWT is removed from local storage, and the user is redirected to the login page.

### Access Control:

- Any attempt to access the Kanban board page without being authenticated will redirect the user back to the login page.
Getting Started

## Technologies Used
- Frontend: React (for building the UI components)
- Backend: Express.js (for handling authentication and API requests)
- JWT: For secure user authentication
- LocalStorage: To store JWT securely in the client’s browser

## Contributing
Feel free to fork the repository, create a branch, and submit a pull request for any changes or improvements. All contributions are welcome!

## License
This project is licensed under the MIT License - see the LICENSE file for details.

