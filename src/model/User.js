const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    fullName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    whatsApp:{
        type:String,
        require:true
    },
    poin:{
        type:Number,
        require:true,
        default:0
    }
})

userSchema.statics.findAndValidate = async function(username, password){
    const user = await Model.findOne({username});
    if(!user){
        return false;
    }
    const isvalid = await bcrypt.compare(password, user.password);
    return isvalid ? user : false;
}

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const Model = mongoose.model('User', userSchema);

module.exports = Model;