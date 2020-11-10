// const User = require('./user')
const Product = require('./product')
const Customer = require('./customer')
const UserInfo = require('./userInfo')
const UserType = require('./userType')
const OrderDetail = require('./orderDetail')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Customer.belongsToMany(OrderDetail, {through: 'Orders'})
//Customer.belongsTo(UserInfo)
UserInfo.belongsTo(Customer)
OrderDetail.hasMany(Product)
// UserInfo.hasOne(UserType)
//UserInfo.hasOne(Customer)
UserInfo.belongsTo(UserType)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Product,
  Customer,
  UserInfo,
  UserType,
  OrderDetail
}
