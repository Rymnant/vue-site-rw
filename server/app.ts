import express, { Express } from "express";

// Initialize express app
const app: Express = express();
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});

export default app;
