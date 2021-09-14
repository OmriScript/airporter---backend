const express = require('express')
const { getFlights, getFlight, updateFlight } = require('./flight.controller')

const router = express.Router()

router.get('/', getFlights)
router.get('/:id', getFlight)
router.put('/:id', updateFlight)

module.exports = router