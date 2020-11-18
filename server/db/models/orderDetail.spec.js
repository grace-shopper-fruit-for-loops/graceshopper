const {expect} = require('chai')
const {cyan} = require('chalk')
const db = require('../db')
const OrderDetails = require('./orderDetail')

describe('Order Details', () => {
  describe('Sequelize', () => {
    beforeEach(async () => {
      await db.sync({force: true})
    })

    describe('Order details: id', () => {
      describe('order details', () => {
        it('order details has an id as an integer', async () => {
          const orderDetails = await OrderDetails.create({id: 1})
          expect(orderDetails.id).to.equal('1', '1 is a number')
        })

        it('order details has a quantity', async () => {
          const orderDetails = await OrderDetails.create({quantity: 2})
          expect(orderDetails.quantity).to.equal(2)
        })

        // it('quantity can not be null', async () => {
        //   const orderDetails = await OrderDetails.create({})
        //   expect(orderDetails.quantity).to.be.rejected
        // })
      })
    })
  })
})
