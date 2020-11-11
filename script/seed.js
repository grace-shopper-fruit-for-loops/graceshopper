'use strict'

const db = require('../server/db')
const {Product, User, Order, OrderDetails} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Elisa',
      lastName: 'Levet',
      email: 'elisa@hotmail.com',
      phone: '605-123-1234',
      address: '101 Main St',
      isAdmin: false,
      userName: 'elisa000',
      password: '12345!'
    }),
    User.create({
      firstName: 'Mackenzie',
      lastName: 'Kroon',
      email: 'mkroon@gmail.com',
      phone: '605-124-1234',
      address: '49 Main St',
      isAdmin: false,
      userName: 'mkroon25',
      password: '12345?!'
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Orange jucie',
      description: 'full of vitamin c!',
      category: 'Juice',
      quantity: 6,
      price: 5,
      imageUrl:
        'https://img1.mashed.com/img/gallery/this-is-the-maximum-amount-of-orange-juice-you-should-drink-each-day/intro-1585587621.jpg'
    }),
    Product.create({
      name: 'Apple jucie',
      description: 'good for the kids!',
      category: 'Juice',
      quantity: 4,
      price: 4,
      imageUrl:
        'https://img1.mashed.com/img/gallery/this-is-the-maximum-amount-of-orange-juice-you-should-drink-each-day/intro-1585587621.jpg'
    }),
    Product.create({
      name: 'Green jucie',
      description: 'detox after a crazy weekend!',
      category: 'Juice',
      quantity: 4,
      price: 9,
      imageUrl:
        'https://img1.mashed.com/img/gallery/this-is-the-maximum-amount-of-orange-juice-you-should-drink-each-day/intro-1585587621.jpg'
    })
  ])

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const orders = await Promise.all([
    Order.create({
      isFulfilled: false,
      userId: 1
    }),
    Order.create({
      isFulfilled: false,
      userId: 2
    })
  ])

  const order_details = await Promise.all([
    OrderDetails.create({
      quantity: 1,
      price: 4,
      orderId: 1,
      productId: 1
    }),
    OrderDetails.create({
      quantity: 2,
      price: 8,
      orderId: 2,
      productId: 2
    })
  ])
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
