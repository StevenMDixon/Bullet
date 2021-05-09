const journalController = require('../../controllers/journals');
const router = require('express').Router();
const requireAuth = require('../../utils/auth');

router.get('/test', async (req, res) =>{
    const journals = await journalController.getAllJournals();
    if(journals){
        res.json(journals);
    } else {
        res.sendStatus(400);
    }
});

router.get('/', requireAuth, async (req, res) =>{
    const {userId} = req.session;
    console.log(req.session)
    const journals = await journalController.getAllJournalsbyUser(userId);
    if(journals){
        res.json(journals);
    } else {
        res.sendStatus(400);
    }
});

router.post ('/create', async (req, res) =>{
    //console.log(req.session)
    const {name, userID} = req.body
    const journals = await journalController.createJournal(userID, name);
    if(journals){
        res.json(journals);
    } else {
        res.sendStatus(400);
   }
})


module.exports = router;