import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "../config/apiConfig";

export const db = drizzle(config.db_url);