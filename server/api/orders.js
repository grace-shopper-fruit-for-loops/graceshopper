const router = require('express').Router()
const {OrderDetails, Product, Order} = require('../db/models')

/*CR NOTE: GET route but uses req.body? Instead we can use req.params 
- Should not be adding rows into DB with req.body - best practice to destructure properties off of req.body. 
- Routes should be RESTful
- GET /orders //retrieve ALL orders from the database
- GET /orders/:id //retrieves since order
- POST /orders //post a new order to the database
- DELETE /orders
*/
//shopping cart
router.get('/:userId', async (req, res, next) => {
  try {
    //1. Check the orders table - retrieve an order from the specific user
    //2. const orderId = Order.findAll(where userId: req.params.userId && where !isFulfilled) //returns orderID for a SHOPPING CART
    //3. OrderDetails.findAll(where orderId = orderId)
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
    const newOrder = await Order.create({user, products})
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
