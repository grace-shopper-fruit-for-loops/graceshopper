const router = require('express').Router()
const Order = require('../db/models/order')
const Product = require('../db/models/product')
const OrderDetails = require('../db/models/orderDetail')
const {isAdmin} = require('../api/helper')

router.get('/', async (req, res, next) => {
  console.log('user ID passed in-->', req.user.dataValues.id)
  try {
    const orderId = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        isFulfilled: 'FALSE'
      }
    })
    console.log('ORDER ID found>>>>>>>>???', orderId.id)
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
    console.log('shopping cart---->', shoppingCart)
    res.send(shoppingCart)
  } catch (error) {
    next(error)
  }
})

router.post('/newOrder', async (req, res, next) => {
  try {
    console.log('REQ USER', req.user)
    const newOrder = await Order.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        isFulfilled: false
      }
    })

    console.log('new order', newOrder[0])
    res.send(newOrder)
  } catch (error) {
    next(error)
  }
})

// create a new product in the shopping cart
router.post('/', async (req, res, next) => {
  console.log('INSIDE OF ROUTE<<<<')
  console.log('REQ BODY IN post', req.body)
  try {
    const order = OrderDetails.findOne({
      where: {
        productId: req.body.productId,
        orderId: req.body.orderId
      }
    }).then(function(obj) {
      // update
      let values = req.body
      if (obj) {
        console.log('Quantity Before', values.quantity)
        values.quantity += obj.quantity
        console.log('Quantity After', values.quantity)
        return obj.update(values)
      }
      // insert
      return OrderDetails.create(values)
    })

    // const newPost = await OrderDetails.create(req.body)
    res.send(order)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const userId = await req.user.dataValues.id
    console.log(userId, '00USER')
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
    console.log(order[1], ';;;ORDER')
    res.send(order[1])
  } catch (error) {
    next(error)
  }
})

// delete an item in the cart
router.delete('/:id', async (req, res, next) => {
  console.log('REQ PARAMS-->', req.params)
  try {
    // let orderId = await OrderDetails.findByPk(req.params.id)
    console.log('made it inside destroy request')
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
