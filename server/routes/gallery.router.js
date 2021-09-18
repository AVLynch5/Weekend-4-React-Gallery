const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route - modified to GET gallery photos from DB
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "posts" ORDER BY "likes" DESC;`;
    pool.query(queryText).then((result) => {
        console.log('Retrieved gallery from the DB', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error during GET DB query', error);
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;