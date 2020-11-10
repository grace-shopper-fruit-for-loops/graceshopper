'use strict'

const db = require('../server/db')
const {
  Product,
  Customer,
  UserInfo,
  UserType,
  OrderDetail
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const customers = await Promise.all([
    Customer.create({
      firstName: 'Elisa',
      lastName: 'Levet',
      email: 'elisa@hotmail.com',
      phone: '605-123-1234',
      address: '101 Main St'
    }),
    Customer.create({
      firstName: 'Mackenzie',
      lastName: 'Kroon',
      email: 'mkroon@gmail.com',
      phone: '605-124-1234',
      address: '49 Main St'
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

  const user_type = await Promise.all([
    UserType.create({
      name: 'admin'
    }),
    UserType.create({
      name: 'customer'
    }),
    UserType.create({
      name: 'guest'
    })
  ])

  const user_info = await Promise.all([
    UserInfo.create({
      userName: 'mkroon94',
      password: '1234567',
      customerId: 1,
      userTypeId: 1
    }),
    UserInfo.create({
      userName: 'elisa2',
      password: '1234567',
      customerId: 2,
      userTypeId: 2
    })
    // UserInfo.create({
    //   userName: 'jessica9',
    //   password: '1234567',
    //   userTypeId: 3,
    // }),
  ])

  const order_details = await Promise.all([
    OrderDetail.create({
      quantity: 1,
      price: 4
    }),
    OrderDetail.create({
      quantity: 2,
      price: 8
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
