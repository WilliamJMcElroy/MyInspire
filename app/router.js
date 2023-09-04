import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { SandboxAlphaController } from "./controllers/SandboxAlphaController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { ClockController } from "./controllers/ClockController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { TodoListController } from "./controllers/TodoListController.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [SandboxAlphaController, QuotesController, ClockController, WeatherController, TodoListController]
  },
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */