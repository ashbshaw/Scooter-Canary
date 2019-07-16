const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const scooterRoutes = express.Router();
const PORT = 4000;

let Scooter = require('./scooter.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/scooter', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

// Get request to show all scooter data
scooterRoutes.route('/').get(function(req, res) {
    Scooter.find(function(err, scooter) {
        if (err) {
            console.log(err);
        } else {
            res.json(scooter);
        }
    });
});

// Get request to show scooter data by id
scooterRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Scooter.findById(id, function(err, scooter) {
        res.json(scooter);
    });
});

// Update scooter by id in order to mark resolved
scooterRoutes.route('/update/:id').post(function(req, res) {
    Scooter.findById(req.params.id, function(err, scooter) {
        if (!scooter)
            res.status(404).send("data is not found");
        else
            scooter.scooter_location = req.body.scooter_location;
            scooter.scooter_type = req.body.scooter_type;
            scooter.scooter_date = req.body.scooter_date;
            scooter.scooter_priority = req.body.scooter_priority;
            scooter.scooter_resolved = req.body.scooter_resolved;

            scooter.save().then(scooter => {
                res.json('Scooter information is updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// Add request to add new scooter data
scooterRoutes.route('/add').post(function(req, res) {
    let scooter = new Scooter(req.body);
    scooter.save()
        .then(scooter => {
            res.status(200).json({'scooter': 'scooter information added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new scooter information failed');
        });
});

app.use('/scooter', scooterRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});