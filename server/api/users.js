const router = require('express').Router()
const {User} = require('../db/models')
const {isLoggedIn, isAdmin, isLoggedInAsSelf} = require('./userTypeChecker')
module.exports = router

const fieldReducer = (bodyObj, options) => {
  return options.reduce((accum, curr) => {
    if (bodyObj[curr]) {
      accum[curr] = bodyObj[curr]
    }
    return accum
  }, {})
}

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'firstName', 'lastName', 'isAdult', 'streetAddress', 'city', 'state', 'zipCode', 'latitude', 'longitude']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/homebase', async (req, res, next) => {
  try {
    const user = await User.create(
      fieldReducer(req.body, [
          'firstName',
          'lastName',
          'email',
          'password',
          'address',
          'isAdult',
          'streetAddress',
          'city',
          'state',
          'zipCode',
          'latitude',
          'longtiude',
      ])
    )
    res.json(user)
  } catch (error) {
    next(error)
  }
})
