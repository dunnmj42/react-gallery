const { response } = require('express');
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    
    let queryText = `
        UPDATE "gallery"
        SET "likes" = "likes" + 1
        WHERE "id" = $1;`;

  pool.query(queryText, [id]).then((results) => {
      console.log(results.rows);
      res.sendStatus(200)
  })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    
    const queryText = `SELECT * FROM gallery ORDER BY path;`;
    

    pool.query(queryText)
        .then((response) => {
            console.log(response);
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;