import { rest } from "msw";
import orders from "./orders";

export const ordersResponse = orders;

export const orderHandler = [
  rest.get("orders", (_, res, ctx) => res(ctx.json(ordersResponse))),
];
