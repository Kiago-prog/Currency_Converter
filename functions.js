
const currencySelects = document.querySelectorAll("select");
const apiKey = "your_api_key_here";
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

async function loadCurrencies() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const currencies = Object.keys(data.conversion_rates);
    
    currencySelects.forEach(select => {
        currencies.forEach(currency => {
            let option = document.createElement("option");
            option.value = currency;
            option.textContent = currency;
            select.appendChild(option);
        });
    });
}

async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    
    if (amount === "" || isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }
    
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.conversion_rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    
    document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

loadCurrencies();