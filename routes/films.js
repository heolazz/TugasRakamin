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
