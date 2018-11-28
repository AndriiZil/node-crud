const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

const controller = require('./controllers/employees');
const upload = require('./middleware/upload');


let dev_db_url = 'mongodb://localhost/Employees';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.once('open', () => console.log('Connected to Mongodb'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/employees/create', upload.single('image'), controller.create);
app.get('/employees/:id', controller.getById);
app.put('/employees/:id', upload.single('image'), controller.update);
app.delete('/employees/:id', controller.delete);


app.listen(port, () => console.log(`Server started listen ${port}`));
