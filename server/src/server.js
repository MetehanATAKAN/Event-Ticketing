import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./modules/auth/auth.routes.js";
import { sequelize } from "./config/database.js";
import eventsRouter from "./modules/events/events.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.options(/.*/, cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/auth", authRouter);
app.use("/api", eventsRouter);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    await sequelize.sync();
    console.log("Table synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
}

startServer();
