const FlightModel = require('../models/flight')

module.exports = {
    new: newFlight,
    create: create,
    index,
    show


}
async function show(req, res) {
    try {
        const flightFromTheDatabase = await FlightModel.findById(req.params.id)
        console.log(flightFromTheDatabase);

        res.render('flights/show', {
            flight: flightFromTheDatabase
        });
    } catch (err) {
        res.send(err)
    }
}

async function index(req, res) {
    try {
        const flightDocumentsFromTheDB = await FlightModel.find({})
        console.log(flightDocumentsFromTheDB)
        res.render('flights/index', { flightDocs: flightDocumentsFromTheDB })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
}

async function create(req, res) {
    console.log(req.body, " <- is the contents of our form!")
    req.body.nowShowing = !!req.body.nowShowing // !! forces the value to a boolean

    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);

    try {
        const createdMovieDoc = await FlightModel.create(req.body)
        // for now redirect to new page
        res.redirect('/flights/new')
    } catch (err) {
        console.log(err)
        res.redirect('/flights/new')
    }
}

function newFlight(req, res) {
    res.render('flights/new')
}