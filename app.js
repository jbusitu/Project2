//require modules
const express = require('express');
const morgan = require('morgan');
const eventRoutes = require('./routes/eventRoutes');

const {fileUpload} = require('./middleware/fileUpload');

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middlware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

//set up routes
app.get('/', (req, res)=>{
    res.render('index')
});

app.post('/', fileUpload, (req, res, next) => {
    let image = "./images/" + req.file.filename;
    res.render('index', {image});
});

app.use('/events', eventRoutes);

//start the server
app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
})