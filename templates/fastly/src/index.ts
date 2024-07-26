import { Hono } from "hono";
import { createHub } from "honohub";
import hubConfig from "../hub.config";

const app = new Hono().route("/hub", createHub(hubConfig));

app.get("/", (c) => c.text("Hello Fastly!"));

app.fire();
