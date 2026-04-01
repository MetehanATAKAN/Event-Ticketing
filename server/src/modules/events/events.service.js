import { Event } from "../../models/events.model.js";

export const allEvents = async ({ page, limit }) => {
  const offset = (page - 1) * limit;
  const { count, rows } = await Event.findAndCountAll({
    order: [["start_date", "ASC"], ["id", "ASC"]],
    offset,
    limit,
  });

  return {
    events: rows,
    pagination: {
      page,
      limit,
      total: count,
      totalPages: Math.ceil(count / limit),
      hasNextPage: offset + rows.length < count,
    },
  };
};
