// import { defineConfig } from "drizzle-kit";
// import { config } from "dotenv";

// config({ path: ".env.local" });

// export default defineConfig({
//   schema: "./db/schema.ts",
//   dialect: "postgresql",
//   migrations: {
//     prefix: "supabase",
//   },
//   dbCredentials: {
//     url: process.env.DATABASE_URL || "postgres://localhost:5432/drizzle",
//   },
// });


import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
export default {
  dialect: "postgresql",
  schema: "./db/schema.ts",
  migrations: {
    prefix: 'supabase'
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!
,
  },
  out: "./drizzle/migrations",
}

