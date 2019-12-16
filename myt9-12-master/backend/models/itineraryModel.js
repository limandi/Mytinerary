const mongoose = require('mongoose');

const itinerarySchema=mongoose.Schema({
    title:{
        type:String
    },
    profilePic:{
        type:String
    },
    rating:{
        type:Number
    },
    duration:{
        type:Number
    },
    price:{
        type: Number
    },
     hashtags:{
        type:Array
    } 
   });
    


module.exports = mongoose.model('itinerarios', itinerarySchema, 'itinerarios')
