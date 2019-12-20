var express= require('express');
var router = express.Router();
const passport= require('passport');
const jwt= require('jsonwebtoken');

var usuarioModel=require('../models/userModel');


router.post('/login', function (req, res) {
  usuarioModel.findOne({ userName: req.body.userName })
      .then(user => {


          if (!user) {
              return res.send({ message: 'Incorrect userName.' });
          }

          if (user.password === req.body.password) {
              const payload = {
                  id: user._id,
                  userName: user.userName,
                  // avatarPicture: user.avatarPicture
              };
              const options = { expiresIn: 2592000 };
              jwt.sign(
                  payload,
                  "secret",
                  options,
                  (err, token) => {
                      if (err) {
                          res.json({
                              success: false,
                              token: "There was an error"
                          });
                      } else {
                          res.json({
                              success: true,
                              token: token
                          });
                      }
                  }
              );
          } else {
              res.send({ message: 'Incorrect password.' });
          }
      })
      .catch(err => {
          return req.send(err);
      });
})

module.exports = router;