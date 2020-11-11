const router = require('express').Router()
const {Product} = require('../db/models')

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
