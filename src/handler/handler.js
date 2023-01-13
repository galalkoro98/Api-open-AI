import { displayOutput } from "../component/component.js";
import { getPost } from "../logic/logic.js";

// handle

export const handle = () => {
  getPost();
  displayOutput();
};
