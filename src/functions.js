const fetch = require("node-fetch");

const updateAllPrices = async () => {
  const data = await fetch(`http://localhost:3000/api/v1/cards`, {
    method: "GET",
  }).then(response =>{
    return response.json()
  })

  for (let card of data) {
    const scryData = await fetch(`https://api.scryfall.com/cards/${card.id}`, {
      method: "GET",
    }).then(response => {
      return response.json()
    }) 

    const success = await fetch(`http://localhost:3000/api/v1/cards/${card.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        usd: scryData.prices.usd,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(response =>{
      return response.json()
    });
  }

  const newData = await fetch(`http://localhost:3000/api/v1/cards`, {
    method: "GET",
  }).then(response => {
    return response.json()
  })
  return newData
};

module.exports = {
  updateAllPrices,
};
