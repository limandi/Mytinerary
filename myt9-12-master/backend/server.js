const express = require('express')
require ('./functions/database')
const  l = require ("./routes/routesCities")
const m= require ("./routes/routesItinerarys")
const i= require ("./routes/userRoutes")
require('./components/auth/passport');
require('./components/auth/passportGoogle')

const cors = require('cors')
const app = express ()

app.use(cors())
app.use(express.json()); 
app.use('/api',require('./auth/authApi'));
app.use ('/users', i)
app.use('/cities', l);
app.use ('/Itinerarios', m)




app.listen(4000, () => console.log ("Listening on port 4000"))