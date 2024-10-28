const express = require('express')
const { getTheValue, setTheValue, updateTheValue, deleteTheValue } = require('./controller.js')
const router = express.Router()


router.get('/get', getTheValue)
router.post('/set', setTheValue)
router.put('/update', updateTheValue)
router.delete('/delete', deleteTheValue)

module.exports = router