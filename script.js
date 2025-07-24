// Sample exchange rates (1 unit of base currency)
const exchangeRates = {
  USD: { INR: 83.2, EUR: 0.91 },
  INR: { USD: 0.012, EUR: 0.011 },
  EUR: { USD: 1.1, INR: 91.3 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (isNaN(amount)) {
    document.getElementById("result").innerText = "Please enter a valid amount";
    return;
  }

  if (from === to) {
    document.getElementById("result").innerText = `${amount} ${from} = ${amount} ${to}`;
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = (amount * rate).toFixed(2);

  document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`;
}
