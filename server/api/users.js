const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//CR NOTE: Definitely want to add some sort of middleware function to check if the user requesting this route is an admin.
//Because only admins should be able to request this! :)
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
