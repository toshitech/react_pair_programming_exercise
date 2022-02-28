import { setupWorker } from "msw";

import { orderHandler } from "./orderHandler";

export const worker = setupWorker(...orderHandler);
