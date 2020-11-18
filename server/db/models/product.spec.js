const {expect} = require('chai')
const {cyan} = require('chalk')
const db = require('../db')
// const Product = require('./product')
const Product = require('./product')

describe('Product Model', () => {
  describe('Sequelize', () => {
    beforeEach(async () => {
      await db.sync({force: true})
    })

    describe('Basic Fields: name and description', () => {
      describe('name', () => {
        it('name is a string', async () => {
          const orange = await Product.create({name: 'orange'})
          expect(orange.name).to.equal(
            'orange',
            'Was not able to create a product with name orange'
          )
        })

        it('name must be unique', async () => {
          // We shouldn't be able to create two products with the same name.
          await Product.create({name: 'orange'})
          await expect(
            Product.create({name: 'orange'}),
            "Shouldn't be able to create two products with the same name (orange)"
          ).to.be.rejected
        })

        it('name cannot be null', async () => {
          // We shouldn't be able to create a product without a name.
          await Product.create()
          await expect(
            Product.create({}),
            "We shouldn't be able to create a product with no name"
          ).to.be.rejected
        })

        it('name cannot be an empty string', async () => {
          // We also shouldn't be able to create a user with an empty name.
          await Product.create({name: ''})
          await expect(
            Product.create({name: ''}),
            "We shouldn't be able to create a product with an empty name"
          ).to.be.rejected
        })
      })
    })
  })
})
