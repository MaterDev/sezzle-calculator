
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

console.log('history working');


const HistorySchema = new Schema({
    expression: {
        type: Array
    },
    theAnswer: {
        type: String
    }
})

const  HistoryItem = mongoose.model('HistoryItem', HistorySchema)


// POST Route
router.post('/', function (req, res) {
    // Assigns client data to variable
    let fromClient = req.body;
    // Applies Schema before sending to mongo
    let HistoryAdd = new  HistoryItem(fromClient);

      // Saves data to the server
      HistoryAdd.save().then(() => {
        console.log('History Added', HistoryAdd);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Post', error);
        res.sendStatus(500);
    })


}); // END POST Route

// GET Route
router.get('/', function (req, res) {
    console.log('get working');
}); // END GET Route

module.exports = router;