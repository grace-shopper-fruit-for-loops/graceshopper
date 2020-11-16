const router = require('express').Router()
const {OrderDetails, Product} = require('../db/models')
const Order = require('../db/models/order')
const {isAdmin} = require('../api/helper')

// passing the userId in req.params
router.get('/:userId', isAdmin, async (req, res, next) => {
  console.log('REQ PARAMS-->', req.params.userId)
  try {
    const orderId = await Order.findOne({
      where: {
        userId: req.params.userId,
        isFulfilled: 'FALSE'
      }
    })
    console.log('ORDER ID', orderId)
    const shoppingCart = await OrderDetails.findAll({
      where: {
        orderId: orderId.id
      },
      include: [
        {
          model: Product
        }
      ]
    })
    res.send(shoppingCart)
  } catch (error) {
    next(error)
  }
})

// router.post('/', isAdmin, async (req, res, next) => {
//   try {
//     const newOrder = await Order.create(req.body)
//     res.send(newOrder)
//   } catch (error) {
//     next(error)
//   }
// })

router.post('/', async (req, res, next) => {
  console.log('REQ BODY IN ORDER', req.body)
  try {
    const newPost = await OrderDetails.create(req.body)
    res.send(newPost)
  } catch (error) {
    next(error)
  }
})

router.delete('/', isAdmin, async (req, res, next) => {
  try {
    await OrderDetails.destroy({
      where: {
        productId: req.body.productId,
        orderId: req.body.orderId
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

// router.put -> will update isFulfilled to true when user clicks checkout
//           -> also need to empty the cart

module.exports = router
