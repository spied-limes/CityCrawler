const Sequelize = require('sequelize')
const db = require('../db')


const Place = db.define('place', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  streetAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  latitude: {
    type:Sequelize.STRING
  },
  longitude: {
    type: Sequelize.STRING
  }
})

module.exports = Place
