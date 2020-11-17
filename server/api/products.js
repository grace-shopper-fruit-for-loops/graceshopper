const router = require('express').Router()
const {Product} = require('../db/models')
const {isAdmin} = require('../api/helper')

// GET ALL PRODUCTS /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let singleProduct = await Product.findAll({
      where: {
        id: req.params.id
      }
    })
    res.send(singleProduct[0])
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      category: req.body.category
    }
    const newProduct = await Product.create(data)
    res.send(newProduct)
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', (req, res, next) => {
  try {
    Product.destroy({
      where: {
        id: req.params.productId
      }
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByPk(req.params.productId)
    await updatedProduct.update(req.body)
    res.send(updatedProduct)
  } catch (error) {
    next(error)
  }
})

module.exports = router
