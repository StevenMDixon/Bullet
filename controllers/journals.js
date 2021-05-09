const {userModel, journalModel} = require('../models');

exports.getJournal = async (journalID) => {
    const journal = await journalModel.findOne({
        where: {id: journalID}
    })

    return journal;
}

exports.getAllJournals = async () => {
    const journals = await journalModel.findAll({})

    return journals;
}

exports.getAllJournalsbyUser = async (userID) => {
    const journals = await journalModel.findAll({
        where: {userId: userID}
    })

    return journals;
}

exports.createJournal = async (userID, journalName) => {
    let journal = null;
    console.log(userID);
    try {
        journal = await journalModel.create({
            name: journalName,
            created_date: Date.now(),
            userId: userID
        })
    } catch {
        journal = null;
    }

    return journal;
}
