import { defineConfig } from "drizzle-kit";
import { config } from "./apiConfig.js";

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/db/schema/ts',
    out: './drizzle',
    dbCredentials: {
        url: config.db_url
    }
});