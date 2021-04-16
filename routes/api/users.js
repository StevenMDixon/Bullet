const userController = require('../../controllers/users')
const router = require('express').Router();

router.get('/', async (req, res)=> {
    console.log(req)
    const user = await userController.getUser('1');
    if(user){
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

router.post('/', async (req, res)=> {
    const {body} = req;
    console.log(body)
    userController.createUser();
    res.sendStatus(200)
})

module.exports = router;