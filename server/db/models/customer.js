const Sequelize = require('sequelize')
const db = require('../db')

const Customer = db.define('customer', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  phone: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.TEXT
  }
})

module.exports = Customer
