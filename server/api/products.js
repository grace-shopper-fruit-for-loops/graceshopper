const router = require('express').Router()
const {Product} = require('../db/models')

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

router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})

router.delete('/:productId', (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.productId
    }
  })
    .then(() => res.status(204).end())
    .catch(next)
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
