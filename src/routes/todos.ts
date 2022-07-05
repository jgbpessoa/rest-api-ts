// Using the commonjs syntax below does not allow TypeScript autocompletion
// const express = require("express");
// const Router = express.Router;

import { create } from "domain";
import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
