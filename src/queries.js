const getCards = "SELECT * FROM card";
const findCard = "SELECT * FROM card WHERE name = $1";
const addCard =  "INSERT INTO card (id, name, usd) VALUES ($1, $2, $3)";
const removeCard = "DELETE FROM card WHERE id = $1";
const updateCard = "UPDATE card SET name = $1, usd = $2 WHERE id = $3";

module.exports = {
    getCards, 
    findCard,
    addCard,
    removeCard,
    updateCard,
};