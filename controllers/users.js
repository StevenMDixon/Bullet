const userModel = require('../models/users')

exports.getUser = async (userID) =>{
    const user = await userModel.findOne({
        where: {id: userID}
    })

    console.log(user);
}

exports.createUser = async (userName, Password) =>{
  
}