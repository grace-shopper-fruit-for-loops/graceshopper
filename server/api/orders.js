const router = require('express').Router()
const Order = require('../db/models/order')
const Product = require('../db/models/product')
const OrderDetails = require('../db/models/orderDetail')
const {isAdmin} = require('../api/helper')

// was from /auth/me
// const orderId = await Order.findOrCreate({
//   where: {
//     userId: req.user.dataValues.id,
//     isFulfilled: 'FALSE'
//   }
// })

// req.user.dataValues.order = orderId[0].dataValues

// passing the userId in req.params
router.get('/:userId', async (req, res, next) => {
  console.log('user ID passed in-->', req.params.userId)
  try {
    const orderId = await Order.findOne({
      where: {
        userId: req.params.userId,
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
    res.send(shoppingCart)
  } catch (error) {
    next(error)
  }
})

// router.get('/users/:userId', async (req, res, next) => {
//   try {
//     const newOrder = await Order.findOrCreate({
//       where: {
//         userId: req.params.userId,
//         isFulfilled: false,
//       },
//     })
//     console.log('NEW ORDER', newOrder)
//     res.send(newOrder)
//   } catch (error) {
//     next(error)
//   }
// })

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
  console.log('INSIDE OF ROUTE<<<<')
  console.log('REQ BODY IN post', req.body)
  try {
    const newPost = await OrderDetails.create(req.body)
    res.send(newPost)
  } catch (error) {
    next(error)
  }
})

// update isFulfilled to true
// router.put('/:orderId', async (req, res, next) => {
//   try {
//     await Order.update(req.body, {
//       where: {
//         id: req.params.orderId
//       },
//       returning: true,
//       plain: true
//     })
//     res.sendStatus(200)
//   } catch (error) {
//     next(error)
//   }
// })

router.put('/:orderId', async (req, res, next) => {
  try {
    console.log('REQ BODY IN ORDER', req.params.orderId)
    const updatedOrderDetails = await Order.findByPk(req.params.orderId)
    const data = {
      isFulfilled: req.body.isFulfilled
    }
    await updatedOrderDetails.update(data)
    res.send(updatedOrderDetails)
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
