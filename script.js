// openAI chatGPT with node.js as back-end sever
// import the required packages

const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

// use the packages
app.use(bodyParser.json());
app.use(cors());

// set the port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// set the route
app.post("/chat", (req, res) => {
  const { prompt } = req.body;
  const config = {
    headers: {
      // API key
    },
  };
  const data = {
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.9,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [
      "\
        ",
    ],
  };

  // send the request to the openAI API
  axios
    .post("https://api.openai.com/v1/engines/davinci/completions", data, config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// set the route

app.get("/", (req, res) => {
  res.send("Hello World!");

  // send the request to the openAI API
  axios.post(
    "https://api.openai.com/v1/engines/davinci/completions",
    data,
    config
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  );
});

// run the server
