import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { createHub } from "honohub";
import hubConfig from "../hub.config";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono().use(cors()).route("/hub", createHub(hubConfig));

const pathValidationRegex = /^\/[a-zA-Z0-9\/-]*(?<!\.[a-zA-Z0-9]+)$/;

app.use(
  "/*",
  serveStatic({
    root: "./apps/sandbox/dist",
    rewriteRequestPath: (path) => {
      const isPath = pathValidationRegex.test(path);

      if (isPath) return "/";
      return path;
    },
  })
);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
