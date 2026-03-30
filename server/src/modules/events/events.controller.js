import { allEvents } from "./events.service.js";

export const getAllEvents = async (req, res) => {
  try {
    const events = await allEvents();

    return res.status(200).json({
      message: "Success",
      data: events,
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;

    return res.status(statusCode).json({
      message: error.message || "Something went wrong",
    });
  }
};
