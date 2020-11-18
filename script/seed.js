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
      password: 'hola'
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
      isAdmin: true,
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
      name: 'Cranberry Juice',
      description:
        'This juice is known for treating or preventing urinary tract infection diseases and it is also an amazing support to digestive health',
      category: 'Juice',
      quantity: 6,
      price: 4,
      imageUrl:
        'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/10/cranberryJuice-452047269-770x533-1.jpg'
    }),
    Product.create({
      name: 'Pear Juice',
      description:
        'Pears are a great source of antioxidants, rich in Vitamin C, possibly protect against ulcers and a good source of potassium. ',
      category: 'Juice',
      quantity: 6,
      price: 7,
      imageUrl:
        'https://livingfreshdaily.com/wp-content/uploads/2019/10/pear-juice-recipe.jpg'
    }),
    Product.create({
      name: 'Peach Juice',
      description:
        'Peach juice is a natural diuretic and laxative agent, which helps to improve kidney and bladder function.',
      category: 'Juice',
      quantity: 9,
      price: 8,
      imageUrl:
        'https://cdn2.stylecraze.com/wp-content/uploads/2014/05/2026_10-Amazing-Health-Benefits-of-Peach-Juice_iS.jpg'
    }),
    Product.create({
      name: 'Pineapple Juice',
      description:
        'Pineapple juice has loads of vitamin C and antioxidants that can treat acne, sun damage and uneven skin toning. Also sweet and refreshing',
      category: 'Juice',
      quantity: 6,
      price: 5,
      imageUrl:
        'https://www.unityecovillage.org/unityecoculture/wp-content/uploads/2019/06/freshpineapplejuice.jpg'
    }),
    Product.create({
      name: 'Grapefruit Juice',
      description:
        'It is rich in vitamin C and ranges from sweet-tart to very sour. Ideal for delicate palates',
      category: 'Juice',
      quantity: 8,
      price: 7,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_GEI7yCjtqJjeDGgN8q30pYfROFgiKgtkg&usqp=CAU'
    }),
    Product.create({
      name: 'Apple Juice',
      description:
        'Supports hydration. Apple juice is 88% water and tastes good so... it is good for the kids!',
      category: 'Juice',
      quantity: 4,
      price: 4,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglrd8WNqRCIUkk2KG7M2soAmUOk3-DgZGdw&usqp=CAU'
    }),
    Product.create({
      name: 'Tomato Juice',
      description:
        'Rich in nutrients like vitamin C, B vitamins, and potassium. It is also an excellent source of antioxidants, such as lycopene, which may reduce inflammation and your risk of heart disease and some cancers',
      category: 'Juice',
      quantity: 4,
      price: 9,
      imageUrl:
        'https://morejuicepress.com/wp-content/uploads/2016/01/tomato-juice_Sp.jpg'
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
        'https://images.eatthismuch.com/site_media/img/906528_Shamarie84_bb81007b-26be-4f5f-a01a-78f379622741.png'
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
    }),
    Product.create({
      name: 'Piña Tropical',
      description:
        'Delicious and refreshing mix of pinapple, mint and a touch of orange juice. Perfect for the summer',
      category: 'Smoothie',
      quantity: 5,
      price: 10,
      imageUrl:
        'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/pineapple-smoothie-3.jpg'
    }),
    Product.create({
      name: 'Only for Avocado Lovers',
      description:
        'Ever thought about drinking avocado? This smoothie will take your love for avocado to another different level',
      category: 'Smoothie',
      quantity: 5,
      price: 14,
      imageUrl:
        'https://cdn.loveandlemons.com/wp-content/uploads/2017/08/avocado-smoothie.jpg'
    }),
    Product.create({
      name: 'Strawberry Pineapple',
      description:
        'Perfect combination of sweetnes and freshness. With this smoothie you will boost up your antioxidants!',
      category: 'Smoothie',
      quantity: 5,
      price: 10,
      imageUrl: 'https://images.media-allrecipes.com/userphotos/6440442.jpg'
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
