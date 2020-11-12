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

module.exports = router
