// Import express, create a router and import the database connection pool
var express = require('express');
var router = express.Router();
var pool = require('../queries.js')

// Get list Category soal 2.3
router.get('/', function(req, res){
    pool.query('SELECT * FROM category', (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error')
        } else {res.send(result.rows)
        }
    })
})

// Get list film based on category
router.get('/:category', (req, res) => {
    const categoryName = req.params.category;
    const query = {
        text: 'SELECT f* FROM category c ' +
              'JOIN film f ' +
              'ON c.category_id = f.category_id ' +
              'WHERE c.name = $1',
        values: [categoryName],
    };

    pool.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result.rows);
        }
    });
});


module.exports = router