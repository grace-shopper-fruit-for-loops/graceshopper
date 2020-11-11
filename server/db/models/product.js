const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.ENUM('Juice', 'Smoothie'),
    defaultValue: 'Juice'
  }
})

module.exports = Product
