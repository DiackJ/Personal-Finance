import { PORT } from "./app.js";
import app from "./app.js";

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});