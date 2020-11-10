const Sequelize = require('sequelize')
const db = require('../db')

const UserType = db.define('userType', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = UserType
