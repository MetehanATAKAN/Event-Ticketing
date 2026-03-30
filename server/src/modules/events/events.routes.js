import { Router } from "express";
import { requireAuth } from "../../middlewares/requireAuth.js";
import { getAllEvents } from "./events.controller.js";

const eventsRouter = Router();

eventsRouter.get("/events", requireAuth, getAllEvents);

export default eventsRouter;
