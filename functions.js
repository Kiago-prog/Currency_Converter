const populate=async(CSSMathValue, currency) => {
    let myStr=""

const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
