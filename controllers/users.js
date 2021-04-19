const userModel = require('../models/users')

exports.getUser = async (userID) =>{
  
    const user = await userModel.findOne({
        where: {id: userID}
    })
    return user;
}

exports.getAllUsers = async () =>{
    const user = await userModel.findOne({
        where: {}
    })
    console.log(user)
    return user;
}

exports.createUser = async (userName, Password) =>{
  
}