const {expect} = require('chai')
const {cyan} = require('chalk')
const db = require('../db')
const Order = require('./order')

describe('Order Model', () => {
  describe('Sequelize', () => {
    beforeEach(async () => {
      await db.sync({force: true})
    })

    describe('Order: is Fullfilled?', () => {
      describe('order', () => {
        let order

        beforeEach(async () => {
          order = await Order.create({
            isFullfiled: false
          })
        })

        it('order type is a boolean', () => {
          //const order = await Order.create({isFullfiled: false})
          expect(order.isFullfiled).to.be.equal(false)
        })
      })
    })
  })
})
