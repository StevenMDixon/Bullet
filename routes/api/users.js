const userController = require('../../controllers/users')
const router = require('express').Router();

// Route to grab all users from the database
router.get('/', async (req, res)=> {
    const users = await userController.getAllUsers();
    if(users){
        res.json(users);
    } else {
        res.sendStatus(400);
    }
})

// Route for specific users
router.get('/:id', async (req, res)=> {
    const {id} = req.params;
    const user = await userController.getUser(id);
    if(user){
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

// Route to create users
router.post('/', async (req, res)=> {
    const {body} = req;
    console.log(body)
    //userController.createUser();
    res.sendStatus(200)
})

module.exports = router;