function isLoggedIn(req, res, next) {
  // req is meant to be req.user
  if (!req.user) {
    res.status(401).send('Please log in before trying that.')
  }
  if (req.user.userType === 'regular' || req.user.userType === 'admin') {
    next()
  } else {
    res.status(401).send('You are not authorized to do that.')
  }
}

function isLoggedInAsSelf(req, res, next) {
  if (!req.user) {
    res.status(401).send('You are not authorized to do that.')
  } else if (
    req.user.userType === 'admin' ||
    req.user.id === Number(req.params.userId)
  ) {
    next()
  } else {
    res.status(401).send('You are not authorized to do that.')
  }
}



function isAdmin(req, res, next) {
  if (!req.user) {
    // console.log('first 401 in isAdmin & req.user', req.user)
    res.status(401).send('Please log in before trying that.')
  }
  if (req.user.userType === 'admin') {
    next()
  } else {
    // console.log('hitting the second 401')
    res.status(401).send('You are not authorized to do that.')
  }
}

module.exports = {
  isLoggedIn,
  isAdmin,
  isLoggedInAsSelf
}
