import { Hono } from "hono";
import { handle } from "hono/vercel";
import { createHub } from "honohub";
import hubConfig from "../hub.config";

export const runtime = "edge";

const app = new Hono().basePath("/api").route("/hub", createHub(hubConfig));

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

export const GET = handle(app);
export const POST = handle(app);
