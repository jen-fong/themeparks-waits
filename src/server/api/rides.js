const express = require('express')
const router = express.Router()
const wrap = require('../wrap.js')
const ridesService = require('../service/rides.js')

router.get('/:parkId/rides/:rideId/weekdays', wrap((req, res) => {
  const { parkId, rideId } = req.params
  const { day } = req.query

  return ridesService.fetchRideStatsForWeekday({
    rideId,
    parkId,
    day
  })
}))

router.get('/:parkId/rides/:rideId/date', wrap((req, res) => {
  const { parkId, rideId } = req.params
  const { date } = req.query

  return ridesService.fetchRideStatsByDate({
    rideId,
    parkId,
    date
  })
}))

router.get('/:parkId/rides/:rideId/months', wrap((req, res) => {
  const { parkId, rideId } = req.params
  const { month } = req.query
  return ridesService.fetchRideStatsByMonth({
    rideId,
    parkId,
    month
  })
}))

module.exports = router
