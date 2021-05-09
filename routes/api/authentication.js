const router = require('express').Router();
const userController = require('../../controllers/users');


router.post('/login', async (req, res) =>{
    const {userName, password} = req.body;
    if(!userName && !password){
        res.sendStatus(400).json({ message: 'Missing userName or password from request' });
        return;
    }
    
    const user = await userController.getUserByName(userName);
    if(!user){
        res.sendStatus(404).json({ message: 'User not found' });;
        return;
    }

    const validPassword = user.checkPassword(password);
    if (!validPassword) {
      res.sendStatus(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.userName;
      req.session.loggedIn = true;
  
      res.json({ user: user, message: 'You are now logged in!' });
    });
});

router.get('/logout', async (req, res) =>{
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
    }
    else {
    res.status(404).end();
    }
});



module.exports = router;