import { PORT } from "./app.js";
import app from "./app.js";
import { Request, Response } from "express";

// test server
app.get("/hello", (res: Response) => {
    console.log("hello");
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});