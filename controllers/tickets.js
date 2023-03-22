const TicketModel = require('../models/ticket')
const FlightModel = require('../models/flight')

module.exports = {
    new: newTicket,
    create
}

async function newTicket(req,res){
    const flight = await FlightModel.findById({_id: req.params.id})
    res.render('tickets/new',{flight})
}

async function create(req, res){
    const 
}