const router = require('express').Router()
const Order = require('../db/models/order')
const Product = require('../db/models/product')
const OrderDetails = require('../db/models/orderDetail')
const {isAdmin} = require('../api/helper')

router.get('/', async (req, res, next) => {
  try {
    const orderId = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        isFulfilled: 'FALSE'
      }
    })
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

router.post('/newOrder', async (req, res, next) => {
  try {
    const newOrder = await Order.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        isFulfilled: false
      }
    })
    res.send(newOrder)
  } catch (error) {
    next(error)
  }
})

// create a new product in the shopping cart
router.post('/', async (req, res, next) => {
  try {
    const newPost = await OrderDetails.create(req.body)
    res.send(newPost)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const userId = await req.user.dataValues.id
    const order = await Order.update(
      {isFulfilled: true},
      {
        where: {
          userId: userId,
          isFulfilled: false
        },
        returning: true,
        plain: true
      }
    )
    res.send(order[1])
  } catch (error) {
    next(error)
  }
})

// delete an item in the cart
router.delete('/:id', async (req, res, next) => {
  try {
    await OrderDetails.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
