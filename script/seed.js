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
      password: '12345!'
    }),
    User.create({
      firstName: 'Mackenzie',
      lastName: 'Kroon',
      email: 'mkroon@gmail.com',
      phone: '605-124-1234',
      address: '49 Main St',
      isAdmin: false,
      password: '12345?!'
    }),
    User.create({
      firstName: 'Jessica',
      lastName: 'Cotrina',
      email: 'jessicacotrina@gmail.com',
      phone: '605-124-1254',
      address: '765 Main St',
      isAdmin: false,
      password: 'caracoles'
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Orange Juice',
      description:
        'It Serves as an Excellent Source of Vitamin C to Help Support a Healthy Immune System',
      category: 'Juice',
      quantity: 6,
      price: 5,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/08/23/15/52/fresh-orange-juice-1614822_1280.jpg'
    }),
    Product.create({
      name: 'Apple Juice',
      description:
        'Supports hydration. Apple juice is 88% water and tastes good so... it is good for the kids!',
      category: 'Juice',
      quantity: 4,
      price: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    }),
    Product.create({
      name: 'Tomato Juice',
      description:
        'Rich in nutrients like vitamin C, B vitamins, and potassium. It is also an excellent source of antioxidants, such as lycopene, which may reduce inflammation and your risk of heart disease and some cancers',
      category: 'Juice',
      quantity: 4,
      price: 9,
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/04/05/11/41/tomato-316743_1280.jpg'
    }),
    Product.create({
      name: 'Carrot Juice',
      description:
        'It provides potassium and vitamin C but also is very rich in provitamin A. Drinking carrot juice is thought to boost immunity and improve eye and skin health',
      category: 'Juice',
      quantity: 4,
      price: 6,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_1280.jpg'
    }),
    Product.create({
      name: 'Watermelon Juice',
      description:
        'High water content, antioxidants, and amino acids may make for a better workout. It is also high in potassium, a mineral that could cut down on cramps at the gym',
      category: 'Juice',
      quantity: 6,
      price: 5,
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/03/12/21/37/table-3220967_1280.jpg'
    }),
    Product.create({
      name: 'Beet Juice',
      description:
        'Beetroot juice is one of the richest dietary sources of antioxidants and naturally occurring nitrates. Nitrates are compounds which improve blood flow throughout the body – including the brain, heart, and muscles.',
      category: 'Juice',
      quantity: 3,
      price: 10,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/05/09/04/30/smoothie-5148214_1280.jpg'
    }),
    Product.create({
      name: 'Green Boost',
      description:
        'Detoxify Your Body & Boost Immunity. Reduce Stress. Get Focus & Clarity. Perfect after a crazy weekend!',
      category: 'Smoothie',
      quantity: 9,
      price: 11,
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/09/23/09/15/smoothie-3696961_1280.jpg'
    }),
    Product.create({
      name: 'Very Berry',
      description:
        'Loaded with antioxidants, high in fiber, help fight inflamation and of course sweet and delicious!',
      category: 'Smoothie',
      quantity: 6,
      price: 12,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/05/29/23/01/drink-2355224_1280.jpg'
    }),
    Product.create({
      name: 'Oat time',
      description:
        'Kicks inflammation to the curb with powerful herbs that target the cells and support immunity!',
      category: 'Smoothie',
      quantity: 6,
      price: 10,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/04/19/14/46/smoothie-729922_1280.jpg'
    }),
    Product.create({
      name: 'Banana Banana',
      description:
        'Great healthy breakfast or snack throughout the week. Bananas are packed with potassium, magnesium, and vitamin C.',
      category: 'Smoothie',
      quantity: 4,
      price: 9,
      imageUrl:
        'https://images.unsplash.com/photo-1555411093-41f7864ed3a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }),
    Product.create({
      name: 'Kiwi-wi',
      description:
        'A delicious kiwi smoothie could be the perfect healthy breakfast or snack option to help curb hunger and sneak in that extra boost of nutrition to your diet',
      category: 'Smoothie',
      quantity: 8,
      price: 12,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/07/25/17/25/smoothie-2538950_1280.jpg'
    }),
    Product.create({
      name: 'Mango my Love',
      description:
        'Perfect way to start the day, with a mango smoothie: full of fiber, antioxidants, and Vitamins A & C.',
      category: 'Smoothie',
      quantity: 8,
      price: 11,
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/05/07/11/22/mango-3380631__480.jpg'
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
      isFulfilled: true,
      userId: 2
    }),
    Order.create({
      isFulfilled: true,
      userId: 2
    }),
    Order.create({
      isFulfilled: false,
      userId: 2
    }),
    Order.create({
      isFulfilled: false,
      userId: 3
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
      orderId: 1,
      productId: 5
    }),
    OrderDetails.create({
      quantity: 4,
      price: 8,
      orderId: 1,
      productId: 12
    }),
    OrderDetails.create({
      quantity: 2,
      price: 8,
      orderId: 4,
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
