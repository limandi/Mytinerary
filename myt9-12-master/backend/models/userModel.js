const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        
    },

    password: {
      type: String,

    },

    email: {
        type: String,
        unique: true
   },

   profileImg: {
     type: String,
   },

  })

  //  userSchema.methods.encryptPassword = (password) => {
  //    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  //  },

  //  userSchema.methods.comparePassword = function (password) {
  //    return bcrypt.compareSync(password, this.password);

  // },

module.exports = mongoose.model('usuarios', userSchema)