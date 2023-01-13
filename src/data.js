import { searchTerm } from "./myVars.js";

export const data = {
  prompt: searchTerm,
  max_tokens: 100,
  temperature: 0.9,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: ["\n", " Human:", " AI:"],
};
