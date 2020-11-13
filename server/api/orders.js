const router = require('express').Router()
const {OrderDetails} = require('../db/models')
const Product = require('../db/models/product')
const Order = require('../db/models/order')

router.get('/', async (req, res, next) => {
  try {
    const cartItems = await OrderDetails
      .findAll
      //   {
      //   include: [
      //     {
      //       model: Order,
      //     },
      //     {
      //       model: OrderDetails,
      //     },
      //   ],
      // }
      ()
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

router.post('/orderDetails', (req, res, next) => {
  try {
    const newPost = OrderDetails.create(req.body)
    console.log('req body-->', req.body)
    res.send(newPost)
  } catch (error) {
    next(error)
  }
})

// router.put -> will update isFulfilled to true when user clicks checkout

module.exports = router
