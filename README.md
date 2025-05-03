# Vue Site RW

A full-stack web application for managing a neighborhood (RW) community website. This project consists of a Vue 3 frontend and an Express.js backend.

## Project Structure

```
vue-site-rw/
├── client/           # Vue 3 frontend application
├── server/           # Express.js backend API
└── index.html        # Main HTML entry point
```

## Frontend (Vue 3)

The frontend is built with:

- Vue 3 with Composition API
- TypeScript
- Vue Router
- Pinia for state management
- Vite as build tool

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Building for Production

```bash
cd client
npm run build
```

## Backend (Express.js)

The backend is built with:

- Express.js
- TypeScript
- Node.js

### Backend Setup

```bash
cd server
npm install
```

Note: The backend needs additional setup to run properly. You'll need to:

1. Configure environment variables in `.env`
2. Set up a database connection in `config/db.ts`
3. Implement controllers and routes

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
