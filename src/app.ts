import express from "express";

const app = express();
export const PORT = 3000;

app.use(express.json());

export default app;