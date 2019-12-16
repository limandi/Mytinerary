const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/usuarios', function (req, res) {


  usuarioModel.find(function (err, usuarios) {
      if (err) {
          res.send(err)
      }
      res.send(usuarios);
  })

})



router.post('/userModel', function (req, res) {


  var usuario = new usuarioModel(req.body);
  usuario.save(function (err, respuesta) {
      if (err) {
          res.send(err)
      }
      res.send(respuesta);
  })

})

module.exports = router;