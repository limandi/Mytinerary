const express = require('express')
require ('./functions/database')
const  l = require ("./routes/routesCities")
const m= require ("./routes/routesItinerarys")
const i= require ("./routes/userRoutes")

const cors = require('cors')
const app = express ()
const s=  require('./routes/routesCities');
app.use(cors())
app.use(express.json()); 
app.use('/cities', l);
app.use ('/Itinerarios', m)
app.use ('/users', i)



app.listen(4000, () => console.log ("Listening on port 4000"))