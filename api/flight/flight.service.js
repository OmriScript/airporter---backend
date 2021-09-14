const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    update,
}

async function query() {
    try {
        const collection = await dbService.getCollection('flight')
        return await collection.find().toArray()
    } catch (err) {
        console.log('cannot find flights', err)
        throw err
    }
}

async function getById(flightId) {
    try {
        const collection = await dbService.getCollection('flight')
        const flight = await collection.findOne({ '_id': ObjectId(flightId) })
        return flight
    } catch (err) {
        console.log(`cant find flight ${flightId}`, err)
        throw err
    }
}

async function update(flight) {
    try {
        // peek only updatable fields!
        const flightToSave = {
            _id: ObjectId(flight._id),
            status: flight.status
        }
        const collection = await dbService.getCollection('flight')
        await collection.updateOne({ '_id': flightToSave._id }, { $set: flightToSave })
        return flightToSave;
    } catch (err) {
        console.log(`cannot update flight ${flight._id}`, err)
        throw err
    }
}
