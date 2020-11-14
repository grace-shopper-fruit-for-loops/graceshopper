// const User = require('./user')
const Product = require('./product')
const User = require('./user')
const Order = require('./order')
const OrderDetails = require('./orderDetail')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

///////
User.hasMany(Order)
Order.belongsToMany(Product, {
  through: OrderDetails,
  foreignKey: 'orderId'
})
Product.belongsToMany(Order, {
  through: OrderDetails,
  foreignKey: 'productId'
})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Product,
  User,
  Order,
  OrderDetails
}
