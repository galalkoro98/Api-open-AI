import "./listener/apiListerner.js";

// const searchForm = document.getElementById("search-form");
// const searchInput = document.getElementById("search-input");
// const searchSubmit = document.getElementById("search-submit");
// const result = document.getElementById("result");
// const url = `https://api.openai.com/v1/engines/davinci/completions`;
// const searchTerm = searchInput.value;
// const API_KEY = "you need code";

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = {
//     prompt: searchTerm,
//     max_tokens: 100,
//     temperature: 0.9,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0.6,
//     stop: ["\n", " Human:", " AI:"],
//   };

//   fetch(url, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data);
//       result.innerHTML = data.choices[0].text;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
