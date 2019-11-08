const transactions = document.querySelector(".trans");
const balance = document.querySelector(".bal");

fetch("http://0.0.0.0:5000/transactions", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json"
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // no-referrer, *client
  body: JSON.stringify({ id: "ben" })
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.all_transaction.length) {
      data.all_transaction.map(
        trans =>
          (transactions.innerHTML += `
        <i>Index: ${trans.index}</i> <br />
        <i>Timestamp: ${new Date(trans.timestamp).toLocaleDateString(
          "en-US"
        )}</i>
        <br/>
        <i>Transactions: ${trans.transactions.map(
          transaction =>
            ` <br/ ><i>Amount ${transaction.amount}</i>  <i>Sender ${transaction.sender}</i>  <i>Recipent ${transaction.recipient}</i>`
        )}</i> <br /><br />
        `)
      );
    } else {
      transactions.innerHTML = "<i>No transactions yet</i>";
    }
  })
  .catch(e => console.log(e));


fetch("http://0.0.0.0:5000/transactions/amount", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json"
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // no-referrer, *client
  body: JSON.stringify({ id: "ben" })
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    balance.innerHTML = `Total coins: ${data.total_coin}`
  })
  .catch(e => console.log(e));
