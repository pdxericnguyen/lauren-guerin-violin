
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const enabled = process.env.DB_ENABLED === "true";
const url = process.env.DATABASE_URL;

export type DB = ReturnType<typeof drizzle> | null;

export const db: DB = (() => {
  if (!enabled) return null;
  if (!url) {
    console.warn("[db] DB_ENABLED=true but DATABASE_URL is missing.");
    return null;
  }

  const pool = new pg.Pool({ connectionString: url });
  return drizzle(pool);
})();
