const express = require('express');
const router = express.Router();
const userModel= require('../models/userModel');

// router.get('/usuarios', function (req, res) {


//   userModel.find(function (err, usuarios) {
//       if (err) {
//           res.send(err)
//       }
//       res.send(usuarios);
//   })

// })
router.get('/usuarios',
    (req, res) => {
        userModel.find((err, usuarios) => {
            if (err) {
                console.log('Error find users: ', error);
                return res.status(500).json({ err: 'Error al consultar usuarios.' })
            }
            res.status(200).json({ usuarios: usuarios });
            console.log(usuarios)
        });
    });


    router.post('/usuariosModel', function (req, res) {

      console.log('post con usuarioModel');
      var usuario = new userModel(req.body);
      usuario.save(function (err, res) {
          if (err) {
              res.send(err)
          }
          res.send(respuesta);
      })
  
  })
// router.post('/usuarios', function (req, res) {
//   console.log("dfdgfdg");
  
  
//    var user = req.body.userName
//    var password = req.body.password
//    var email = req.body.email
//    var profilePic = req.body.profilePic
  

// console.log("hola")
//   var usuario = new userModel({userName:user, password:password, email:email, profilePic:profilePic});
//   usuario.save(function (err, respuesta) {
//       if (err) {
//           res.send(err)
//       }
//       res.send(respuesta);
//   })

// })


module.exports = router;