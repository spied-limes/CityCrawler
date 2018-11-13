const Sequelize = require('sequelize')
const db = require('../db')

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userCheckIn: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})



module.exports = Activity
