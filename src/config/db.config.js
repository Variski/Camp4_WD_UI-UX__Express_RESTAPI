import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const testConnection = async () => {
  try {
    const result = await db.query("SELECT NOW()");
    console.log("Database connected:", result.rows[0].now);
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};