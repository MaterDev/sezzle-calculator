const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const history = require('./routes/history.router.js');
const port = process.env.PORT || 5000;


// Require mongoose
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongomongodb://localhost:27017/sezzleCalc';

// Attempt to connect to DB
mongoose.connect(mongoURI, { useNewUrlParser: true});
// Log success/Failure in terminal
mongoose.connection.on('open', () => {
    console.log('connected to mongo');
})
mongoose.connection.on('error', (error) => {
    console.log(error);
})

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/history', history);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});