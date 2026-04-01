import { allEvents } from "./events.service.js";

function parsePositiveNumber(value, fallback) {
  const parsedValue = Number.parseInt(value, 10);

  if (Number.isNaN(parsedValue) || parsedValue < 1) {
    return fallback;
  }

  return parsedValue;
}

export const getAllEvents = async (req, res) => {
  try {
    const page = parsePositiveNumber(req.query.page, 1);
    const limit = Math.min(parsePositiveNumber(req.query.limit, 12), 50);
    const events = await allEvents({ page, limit });

    return res.status(200).json({
      message: "Success",
      data: events.events,
      pagination: events.pagination,
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;

    return res.status(statusCode).json({
      message: error.message || "Something went wrong",
    });
  }
};
