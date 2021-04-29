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
    
}

exports.modules = dbController