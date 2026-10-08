import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { config } from "../config/apiConfig";

const pool = new Pool({
    connectionString: config.db_url!
});

export const db = drizzle({ client: pool });