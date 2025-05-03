# Vue Site RW - Backend API

This is the Express.js backend for the RW (neighborhood community) website.

## Technology Stack

- Express.js
- TypeScript
- Node.js

## Project Structure

```
server/
├── app.ts              # Main application entry point
├── config/             # Configuration files
│   ├── db.ts           # Database connection setup
│   └── roles.ts        # User role definitions
├── controllers/        # Request handlers
│   ├── adminController.ts
│   └── authController.ts
├── middleware/         # Express middleware
│   ├── authMiddleware.ts
│   └── upload.ts       # File upload middleware
├── models/             # Data models
│   └── User.ts
├── routes/             # API route definitions
│   ├── adminRoutes.ts
│   ├── authRoutes.ts
│   └── userRoutes.ts
└── utils/              # Utility functions
    ├── helpers.ts
    └── validators.ts
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables:
   Create a `.env` file in the root of the server directory with the following variables:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## API Endpoints

The API includes several endpoints for:

- Authentication (login, register, verify)
- User management
- Content management for the community website

## Database Setup

The application uses MongoDB as its database. Make sure to configure your database connection in `config/db.ts` and set the appropriate connection string in your `.env` file.

## Development

To contribute to this project:

1. Make sure your code follows the established patterns in the codebase
2. Test your changes thoroughly before submitting
3. Use descriptive commit messages
