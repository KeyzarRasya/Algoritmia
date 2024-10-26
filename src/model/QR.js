const mongoose = require('mongoose')

const QRSchema = new mongoose.Schema({
    qrContent:{
        type:String,
        require:true
    }
})

const Model = mongoose.model('Qr', QRSchema)

module.exports = Model;