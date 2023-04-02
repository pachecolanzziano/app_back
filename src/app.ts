import express from "express";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(router);

db()
.then(() => console.log("DB connection established"))
.catch((error) => console.error(error));

app.listen(PORT, ()=>console.log('Server ✅ Port:', PORT));