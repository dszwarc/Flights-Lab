const flightModel = require('../models/flight');

function create(req, res){
    flightModel.findById(req.params.id)
        .then(function(flight){
            console.log(flight)
            flight.destinations.push(req.body)
            console.log(flight)
            flight.save();
            res.redirect(`/flights/${flight._id}`)
        })
}

module.exports = {
    create
}