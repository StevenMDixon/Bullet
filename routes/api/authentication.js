const router = require('express').Router();
const User = require('../../models/users');

router.post('/login', async (req, res) =>{
    const {username} = req.body;
    const user = await User.getUserByName(username);
    if(user){
        // handle login logic
        console.log(user)
    }else{
        res.send(400);
    }
});

router.post('/logout', async (req, res) =>{

});



module.exports = router;