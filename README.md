🏋️‍♂️ Fitness Tracker API

A simple REST API for tracking workouts, built with Node.js, Express, MongoDB, and Swagger/OpenAPI.
Deployed as a serverless function on Vercel.

✨ Features

Full CRUD for workouts:

Create, Read, Update (PUT/PATCH), Delete

Input validation with express-validator

MongoDB database integration using Mongoose

Swagger/OpenAPI auto-generated documentation

Security middleware: helmet, cors

Works locally and on Vercel serverless environment

🧱 Tech Stack

Node.js (Express)

MongoDB + Mongoose

Swagger (swagger-jsdoc, swagger-ui-express)

Vercel Serverless (@vercel/node, serverless-http)

🚀 Getting Started (Local Development)
1. Clone & Install
cd Fitness-Tracker-Api
npm install

2. Create Environment Variables

Create a .env file:

PORT=3000
MONGODB_URI=your-mongodb-connection-string
LOCAL=true


Note: On Vercel, only set MONGODB_URI in Project → Environment Variables.
You do not need LOCAL=true there.

3. Run the Server Locally
npm start


API is now available at:

http://localhost:3000

📡 API Base URLs
Environment	URL
Local	http://localhost:3000
Production (Vercel)	https://fitness-tracker-api-jamero.vercel.app

All workout routes are prefixed with:

/api/v1/workout

🏋️‍♀️ Workout Endpoints
GET /api/v1/workout

Get all workouts.

POST /api/v1/workout

Create a workout.

Example Request Body:

{
  "name": "Morning Run",
  "type": "Cardio",
  "duration": 45,
  "caloriesBurned": 300
}

GET /api/v1/workout/{id}

Get a workout by ID.

PUT /api/v1/workout/{id}

Full update of a workout.

PATCH /api/v1/workout/{id}

Partial update of a workout.

DELETE /api/v1/workout/{id}

Delete a workout.

GET /api/v1/workout/source/info

Returns basic API information.

✔️ Validation Rules

Using express-validator (middlewares/validationMiddleware.js):

name: required, string

type: required, string

duration: required, positive integer

caloriesBurned: optional, non-negative integer

Invalid requests return:

{
  "validation_error": { ... }
}

📘 Swagger / API Documentation
Local

Swagger JSON → http://localhost:3000/swagger.json

Swagger UI → http://localhost:3000/api-docs

Production (Vercel)

Swagger JSON → https://fitness-tracker-api-jamero.vercel.app/swagger.json

Swagger UI → https://fitness-tracker-api-jamero.vercel.app/api-docs

Swagger definitions are generated in:

swagger.js

Route annotations in routes/workoutRoutes.js

☁️ Deployment on Vercel
Key Files

index.js

Wraps Express using serverless-http

Exported as:

module.exports = app;
module.exports.handler = serverless(app);


vercel.json

Specifies the serverless entrypoint

After pushing to GitHub, Vercel builds automatically and deploys the API to your project URL.

📁 Project Structure
Fitness-Tracker-Api/
├── routes/
│   └── workoutRoutes.js
├── middlewares/
│   └── validationMiddleware.js
├── models/
│   └── Workout.js
├── swagger.js
├── index.js
├── vercel.json
├── package.json
└── .env.example

📄 License

This project is available for educational and personal use.
Feel free to fork, modify, and expand it.

If you want, I can also generate:
✅ A professional badge header (Node, Express, MongoDB, Vercel, Swagger)
✅ A logo/banner for your repo
✅ A .env.example file
✅ A better project structure section
Just say the word!
