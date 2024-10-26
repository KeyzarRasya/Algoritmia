const mongoose = require('mongoose')

const QRSchema = new mongoose.Schema({
    qr:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        require:true
    }
})

const Model = mongoose.model('Scanned', QRSchema)

module.exports = Model;