// Run: npm install --save-dev @types/node -> So TypeScript can identify the functions that exist in the Node.js environment
// Run: npm install --save-dev @types/express -> So TypeScript can identify Express types

// In this case we use the ES modules syntax because of TypeScript, the compiled js file will use the commonjs syntax
import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";

const app = express();

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
