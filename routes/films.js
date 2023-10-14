// Import express, create a router and import the database connection pool
var express = require('express');
var router = express.Router();
var pool = require('../queries.js')

// Get List Film
router.get('/', function(req,res){
    pool.query('SELECT * FROM film', (err, result) => {
        if (err){
            throw err
        }
        res.send(result.rows)
    })
})

// Get Film by ID
router.get('/:id', function(req,res){
    const filmID = req.params.id;
    const query = {
        text :'SELECT * FROM film WHERE film_id = $1',
        values : [filmID],
    };
    
    pool.query(query, (err, result) => {
        if (err){
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result.rows);
        }
    })
})

module.exports = router