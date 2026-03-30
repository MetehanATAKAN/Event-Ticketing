import { Event } from "../../models/events.model.js";

export const allEvents = async () => {
  const events = await Event.findAll();

  return events;
};
