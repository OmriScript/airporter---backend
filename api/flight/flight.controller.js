const flightService = require('./flight.service')

async function getFlight(req, res) {
    try {
        const flight = await flightService.getById(req.params.id)
        res.send(flight)
    } catch (err) {

        res.status(500).send({ err: 'Failed to get flight' })
    }
}

async function getFlights(req, res) {
    try {
        const flights = await flightService.query()
        res.send(flights)
    } catch (err) {

        res.status(500).send({ err: 'Failed to get flights' })
    }
}

async function updateFlight(req, res) {
    try {
        const flight = req.body
        const savedFlight = await flightService.update(flight)
        res.send(savedFlight)
    } catch (err) {
        res.status(500).send({ err: 'Failed to update flight' })
    }
}

module.exports = {
    getFlights,
    getFlight,
    updateFlight,
}