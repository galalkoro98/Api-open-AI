import { handle } from "../handler/handler.js";
import { searchForm } from "../myVars.js";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handle();
});
