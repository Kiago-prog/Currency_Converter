const populate = async (value, currency) => {
    let myStr = "";
    let URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency=${currency}`;

    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let data = await response.json();

        // Show the output section
        document.querySelector(".output").style.display = "block";

        // Loop through exchange rate data
        for (let key of Object.keys(data.data)) {
            myStr += `
            <tr>
                <td>${key}</td>
                <td>${data.data[key].code}</td>
                <td>${Math.round(data.data[key].value * value)}</td>
            </tr>`;
        }

        // Update the table body
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = myStr;
    } catch (error) {
        console.error("Error:", error);
    }
};

// Add event listener to the button
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});
