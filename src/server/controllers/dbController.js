const { query } = require('../models/gitstopModel')
const db = require('../models/gitstopModel')
const dbController = {}

dbController.checkUserInDatabase = async (req, res) => {
  try {
    const queryString = 
    `SELECT * FROM "public"."User" WHERE user_name=$1`

    const {name, email} = res.locals.userData

    await db.query(queryString, [name], (returnedRes) => {
      try{
        req.query.userInfo = returnedRes
      } catch(err) {
          next({
            log: `Query for checkUserInDatabase: ${err}`,
            status: 500,
            message: `${err}`,
          })
      }
    })
  }
  catch (err) {
    next({
      log: `dbController.checkUserInDatabase: ${err}`,
      status: 500,
      message: `${err}`
    })
  }    

  next();
}

dbController.addUserToDatabase = async (req, res) => {
  try {
    const queryString =
    `INSERT INTO "public"."User" (user_name, user_email)
    VALUES ($1, $2)
    `

    const {name, email} = res.locals.userData

    await db.query(queryString, [name, email], (resp) => {
        console.log(resp)
    })
    next();
  }
  catch (err) {
    next({
      log: `dbController.addUserToDatabase: ${err}`,
      status: 500,
      message: `${err}`
    })
  }    
}

exports.modules = dbController