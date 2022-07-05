// Using the commonjs syntax below does not allow TypeScript autocompletion
// const express = require("express");
// const Router = express.Router;

import { create } from "domain";
import { Router } from "express";
import { createTodo } from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/");

router.patch("/:id");

router.delete("/:id");

export default router;
