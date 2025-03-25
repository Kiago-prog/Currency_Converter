const populate=async(CSSMathValue, currency) => {
    let myStr=""
    URL="https://api.currencyapi.com/v3/latest?apikey=https://api.currencyapi.com/v3/latest?apikey=cur_live_vve40AbFqZ19EVNIQbc137vIeDTwzwKb1ut8BbM8&base_currency="+currency
    let response=await fetch(URL)
    let data=await response.json()
    document.querySelector(".output").computedStyleMap.display="block"

    for (let key of Object.keys(data[data])){
