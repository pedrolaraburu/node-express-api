# Learning Node.js with Express
- This is just a simple CRUD I made to learn Node.js and Express;
- Also used this to learn more about Docker;
### Requirements
- Node.js v18.17.1+
- Docker v24.0.6+

### Setup
```bash
# Clone this repository
git clone https://github.com/pedrolaraburu/node-express-api
# Natigate to the repository
cd node-express-api
# Install dependencies
npm install
# Run the container
docker compose up
# Start the server
npm start
```

### API Endpoints
- The server will start at localhost:8000.
- Get All Users
    - URL: localhost:8000/api/v1/users
    - Method: GET
    - Description: Retrieve a list of all users.
- Get User by ID
    - URL: localhost:8000/api/v1/users/:id
    - Method: GET
    - Description: Retrieve user information by their unique ID.
- Create User
    - URL: localhost:8000/api/v1/users/
    - Method: POST
    - Description: Create a new user.
    - Request Body:
        - nome_completo (string): The full name of the user.
        - genero (string): The gender of the user.
        - email (string): The email address of the user.
        - telefone (string): The phone number of the user.
- Delete User
    - URL: localhost:8000/api/v1/users/:id
    - Method: DELETE
    - Description: Delete a user by their unique ID.