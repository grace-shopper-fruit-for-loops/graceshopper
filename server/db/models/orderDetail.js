const Sequelize = require('sequelize')
const db = require('../db')

const OrderDetails = db.define('orderDetails', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  }
  // ProductId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // OrderId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
})

module.exports = OrderDetails
