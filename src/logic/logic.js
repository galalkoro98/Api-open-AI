import { data } from "../data.js";
import { API_KEY, url } from "../myVars.js";

export let information = "";
export const getPost = () => {
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data.choices[0].text);
      information = data.choices[0].text;
      return information;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
