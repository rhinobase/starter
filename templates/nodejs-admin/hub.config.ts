import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { defineCollection, defineHub } from "honohub";
import * as schema from "./src/db/schema";

const neonSql = neon("DATABASE_URL");
const db = drizzle(neonSql, { schema });

export default defineHub({
  db,
  serverUrl: "http://localhost:3000/hub",
  collections: [
    defineCollection({
      slug: "todos",
      schema: schema.todos,
    }),
  ],
});
