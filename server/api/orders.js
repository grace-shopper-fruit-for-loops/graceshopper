const router = require('express').Router()
const {Order} = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    const newPost = await Order.create(req.body)
    res.send(newPost)
  } catch (error) {
    next(error)
  }
})

module.exports = Order
