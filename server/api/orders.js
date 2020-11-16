const router = require('express').Router()
const {OrderDetails, Product, Order} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    console.log(req.body, '<-------REQ BODY')
    const shoppingCart = await OrderDetails.findAll({
      where: {
        orderId: req.body.orderId
      }
      // include: [
      //   {
      //     model: Product
      //   }
      // ]
    })
    res.send(shoppingCart)
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

router.delete('/orderDetails', async (req, res, next) => {
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
