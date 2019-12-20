const mongoose  = require ('mongoose')
const URI ='mongodb+srv://limadandi:Darkside73@cluster0-a3dp8.mongodb.net/Mytinerarys?retryWrites=true&w=majority'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // secretOrKey: "secret"


} )
const conexion = mongoose.connection
conexion.once('open', () => console.log ('Connect to Database..'))