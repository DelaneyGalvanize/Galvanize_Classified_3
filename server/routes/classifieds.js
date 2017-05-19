
'use strict';

const express = require('express');
const knex= require('../knex')

const router = express.Router();

// YOUR CODE HERE
router.get('/', (req,res,next) => {
  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .then((data) => {
      res.send(data)
    })
})

router.get('/:id', (req,res,next) => {
  let id= req.params.id
  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .where('id', id)
    .then((data) => {
      res.send(data[0])
    })
})

router.post('/', (req,res,next) => {
  knex('classifieds')
    .insert(req.body)
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then((newData) => {
      res.send(newData[0])
    })
})

router.patch('/:id', (req,res,next) => {
  let id=req.params.id
  knex('classifieds')
    .where('id', id)
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .update(req.body)
    .then((updatedData) => {
      res.send(updatedData[0])
    })
})

router.delete('/:id', (req,res,next) => {
  let id= req.params.id
  knex('classifieds')
    .where('id', id)
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .del()
    .then((deletedData) => {
      res.send(deletedData[0])
    })
})

module.exports = router;
