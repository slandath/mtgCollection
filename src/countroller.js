const pool = require('../db');
const queries = require('./queries');

const getCards = (req, res) => {
    pool.query(queries.getCards, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const findCard = (req, res) => {
    const name = req.params.name;

    pool.query(queries.findCard, [name], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addCard = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const usd = req.body.usd;

    pool.query(queries.addCard, [id, name, usd], (error, results) => {
        if (error) throw error;
        res.status(201).send("Card Added!");
        console.log("Added");
    })
};

const removeCard = (req, res) => {
    const id = req.params.id;

    pool.query(queries.removeCard, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Card(s) removed successfully!");
    });
};

const updateCard = (req, res) => {
    const { name } = req.body;
    const { usd } = req.body;
    const id = req.params.id;
    
    pool.query(queries.updateCard, [name, usd, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Card updated!");
    })
};

module.exports = {
    getCards, 
    findCard,
    addCard,
    removeCard,
    updateCard,
};