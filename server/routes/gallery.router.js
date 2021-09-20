const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE - sorry but IMMA MODIFY 

//Put route - increase number of likes using id (sent by route) and #likes (sent via axios call)
router.put('/like/:id', (req, res) => {
    const postId = req.params.id;
    const newLikes = parseInt(req.body.likes)+1;
    const queryText = `UPDATE "posts" SET "likes" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [newLikes, postId]).then((result) => {
        console.log('PUT - updated likes to', newLikes);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error updating likes for post with ID', postId);
        res.sendStatus(500);
    })
});//End PUT route

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

//DELETE Route - delete post from gallery using ID sent via route params
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    const queryText = `DELETE FROM "posts" WHERE "id" = $1;`;
    pool.query(queryText, [postId]).then((result) => {
        console.log('DELETE - removed post with ID', postId);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error deleting post with ID', postId);
        res.sendStatus(500);
    })
});//End DELETE route

//POST route - add new post to gallery using data sent via axios call
router.post('/', (req, res) => {
    const post = req.body;
    const queryText = `INSERT INTO "posts" ("description", "path")
                       VALUES ($1, $2)`;
    pool.query(queryText, [post.description, post.path]).then((result) => {
        console.log('Added new post to the gallery', post);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error adding new post to gallery', error);
        res.sendStatus(500);
    })
})


module.exports = router;