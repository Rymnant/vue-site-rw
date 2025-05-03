# Vue Site RW - Frontend

This is the frontend application for the RW (neighborhood community) website built with Vue 3.

## Technology Stack

- Vue 3 with Composition API
- TypeScript
- Vue Router for navigation
- Pinia for state management
- Vite as build tool
- ESLint and Prettier for code quality

## Development Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. For linting:

   ```bash
   npm run lint
   ```

4. For formatting:
   ```bash
   npm run format
   ```

## Building for Production

```bash
npm run build
```

This will generate production assets in the `dist` directory.

## Project Structure

```
client/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   ├── components/     # Vue components
│   │   ├── admin/      # Admin-specific components
│   │   └── common/     # Shared components
│   ├── router/         # Vue Router configuration
│   ├── services/       # API services
│   ├── stores/         # Pinia stores
│   │   └── modules/    # Store modules
│   ├── utils/          # Utility functions
│   ├── views/          # Page components
│   │   └── admin/      # Admin pages
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── .env.development    # Development environment variables
├── .env.production     # Production environment variables
└── vite.config.ts      # Vite configuration
```

## Connecting to Backend

The frontend connects to the Express.js backend API. Configuration for API endpoints can be set in the environment files.

## Contributing

1. Follow the code style guidelines defined in `.prettierrc.json` and ESLint configuration
2. Make sure to run linting and tests before submitting code
3. Use feature branches for new development
