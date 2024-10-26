const express = require('express')
const {saveQR, scans} = require('../controller/Qr')
const QR = require('../model/QR')

const router = express.Router()

router.post('/save', saveQR)
router.post('/scan/:code', scans)
router.get('/all', async(req, res) => {
    const qr = await QR.find();
    res.send(qr)
})

module.exports = router