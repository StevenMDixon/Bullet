const userModel = require('../models/users')

exports.getUser = async (userID) =>{
    const user = await userModel.findOne({
        where: {id: userID}
    })
    return user;
}

exports.getUserByName = async (userName) =>{
    const user = await userModel.findOne({
        where: {username: userName}
    })
    return user;
}

exports.getAllUsers = async () =>{
    const user = await userModel.findAll()
    console.log(user)
    return user;
}

exports.createUser = async (userName, password) =>{
    let user = null;
    console.log(userName, password)
    try {
        user = await userModel.create({
            username: userName,
            password: password
        })
    } catch {
        user = null;
    }

    return user;
}