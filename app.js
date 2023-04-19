const express=require('express');
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');
const Handlebars=require('handlebars')
const{allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access')

const path=require('path');


//Database
const db=require('./config/database');
const urlencoded = require('body-parser/lib/types/urlencoded');


//Test DB

db.authenticate()
.then(()=>console.log("Database connected..."))
.catch(err=>console.log('Error '+err))

const app=express();

// Handlebars
app.engine('handlebars',exphbs.engine({defaultLayout:'main',handlebars:allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine','handlebars')

// Setting Middleware Body parser
app.use(bodyParser.urlencoded({extended:false}))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Index route
app.get('/',(req,res)=> res.render('index',{layout:'landing'}));

// student routes
app.use('/student', require('./routes/student.routes'))


const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server started on port ${PORT}`)
)