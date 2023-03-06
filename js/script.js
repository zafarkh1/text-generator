let generateBtn = document.querySelector("#generate-btn");
let copyBtn = document.querySelector("#copy-btn");
let paraDisplay = document.querySelector(".paragraph");

let options = {
  method: "GET",
  headers: { "x-api-key": apiKey },
};
let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

let generateParas = () => {
  let numOfText = document.querySelector("#num-of-text").value;
  let finalURl = url + numOfText;
  fetch(finalURl, options).then((response) => response.json()).then((data) => {
		console.log(data);
		paraDisplay.innerText = data.text
	})
};

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(paraDisplay.innerText)
	alert("Text copied")
})

generateBtn.addEventListener("click", generateParas);
window.addEventListener("load", generateParas);
