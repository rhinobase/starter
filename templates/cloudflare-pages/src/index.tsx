import { Hono } from "hono";
import { renderer } from "./renderer";
import { createHub } from "honohub";
import hubConfig from "../hub.config";

const app = new Hono().route("/hub", createHub(hubConfig));

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(<h1>Hello, Cloudflare Pages!</h1>);
});

export default app;
