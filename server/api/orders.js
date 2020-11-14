const router = require('express').Router()
const {OrderDetails} = require('../db/models')
const Product = require('../db/models/product')
const Order = require('../db/models/order')

router.get('/', async (req, res, next) => {
  try {
    const cartItems = await OrderDetails.findAll({
      where: {
        orderId: req.body.orderId
      },
      include: [
        {
          model: Product,

          through: {attributes: []}
        }
      ]
      // where: {
      //   orderId: req.body.orderId,
      // },

      // include: [
      //   {
      //     model: Order,
      //     where: {
      //       orderId: req.body.orderId,
      //     },
      //     include: {
      //       model: Product,
      //     },
      //   },
      // ],
    })

    res.send(cartItems)
  } catch (error) {
    next(error)
  }
})

// router.get('/newOrder/:orderId', async (req, res, next) => {
//   try {
//     const newOrder = await Order.findByPk(req.params.orderId)
//     res.json(newOrder)
//   } catch (error) {
//     next(error)
//   }
// })

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
