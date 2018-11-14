const router = require('express').Router()
const {Place} = require('../db/models')
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
    // probably have to modify/add attriites to exclude/include certain data later on
    const places = await Place. findAll()
    res.json(places)
  } catch (error) {
    next(error)
  }
})


router.post('/homebase', async (req, res, next) => {
  try {
    const place = await Place.create(
      fieldReducer(req.body, [
          'name',
          'description',
          'streetAddress',
          'city',
          'state',
          'zipCode',
          'latitude',
          'longtiude',
      ])
    )
    res.json(place)
  } catch (error) {
    next(error)
  }
})
