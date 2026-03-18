import { pool } from "../../db/db.js";

export async function findUserByEmail(email) {
  const query = `
    SELECT id, name, email, password, created_at
    FROM users
    WHERE email = $1
    LIMIT 1
  `;

  const { rows } = await pool.query(query, [email]);
  return rows[0] || null;
}

export async function createUser({ name, email, password }) {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, created_at
  `;

  const { rows } = await pool.query(query, [name, email, password]);
  return rows[0];
}
