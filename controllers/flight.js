const FlightModel = require('../models/flight')
const TicketModel = require('../models/ticket')
const db = require('../config/database')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res){
    const newFlight = new FlightModel();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0,16);
    res.render('flights/new', {departsDate});    
}

function create(req, res){
    const flight = req.body;
    FlightModel.create(flight)
        .then(function(){
            res.redirect('/flights')
        }).catch((err)=> {
            console.log(err)
        })
}

async function index(req, res){
    allFlights = await FlightModel.find({})
        .sort('departs')
    console.log(allFlights)
    res.render('flights/index', {flights: allFlights})
}

async function show(req, res){
    try{
        const dbFlight = await FlightModel.findById(req.params.id)
        const dbTickets = await TicketModel.find({flight: dbFlight._id})
        res.render('flights/show',{
        flight: dbFlight,
        destinations: dbFlight.destinations,
        tickets: dbTickets
    })
    } catch(err){
        console.log(err)
    }
}

// function show(req, res){
//     FlightModel.findById(req.params.id)
//         .then(function(ourFlight){
//             console.log(ourFlight.destinations, ' <--- this should be destinations')
//                 res.render('flights/show', {
//                     flight: ourFlight,
//                     destinations: ourFlight.destinations
//                 })
//         }) .catch(err => {
//             console.log(err)
//             res.send(err)
//         })
// }