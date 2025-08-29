import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import init from "./service/db";
import { exhibitions } from "./service/exhibitions";

dotenv.config();

const app = express();
const port = 8567;

app.use(cors());
app.use(express.json());

init();

app.get("/api/exhibitions", exhibitions);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
