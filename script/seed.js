'use strict'

const db = require('../server/db')
const {User, Place, Activity} = require('../server/db/models')

/*
   _____               ______        __
  / ___/___  ___  ____/ / __ \____ _/ /_____ _
  \__ \/ _ \/ _ \/ __  / / / / __ `/ __/ __ `/
 ___/ /  __/  __/ /_/ / /_/ / /_/ / /_/ /_/ /
/____/\___/\___/\__,_/_____/\__,_/\__/\__,_/
*/

const Users = require('./seed-data/users.json')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(Users.map(user => User.create(user)))

  console.log(`\n########### SEEDING REPORT ###########\n`)
  console.log(`Seed data ver. 11/14/18\n`)
  console.log(`Created ${Users.length} user.`)

  // console.log(`Associated ${JellyCat.length} jellies to categories.\n`)
  console.log(`Seeding completed successfully!\n`)
  console.log(`######################################\n`)
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
