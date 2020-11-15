const router = require('express').Router()
const {OrderDetails, Product, Order} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    console.log('req.body.', req.body)
    const cartItems = await Order.findOne({
      where: {
        id: req.body.orderId
      },
      include: Product
    })

    res.send(cartItems)
  } catch (error) {
    next(error)
  }
})

router.post('/newOrder', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.send(newOrder)
  } catch (error) {
    next(error)
  }
})

router.post('/orderDetails', async (req, res, next) => {
  try {
    const newPost = await OrderDetails.create(req.body)
    res.send(newPost)
  } catch (error) {
    next(error)
  }
})

// router.put -> will update isFulfilled to true when user clicks checkout

module.exports = router
