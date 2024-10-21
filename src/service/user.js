const User = require('../model/User')

const createAccount = async (metadata) => {
    const {username, fullName, password, whatsApp} = metadata;
    const user = await User.findOne({username});
    if(user){
        return {status:400, message:"Username already exist"};
    }
    const newUser = new User({username, fullName, password, whatsApp});
    await newUser.save();
    return {status:200, message:"Account Saved"};
}

const loginAccount = async (username, password) => {
    const user = await User.findAndValidate(username, password);
    if(!user){
        return {status:400, message:"Wrong credential"};
    }
    return {status:200, message:"Login Success", user};
}

const addPoint = async (userId, poin) => {
    const user = await User.findById(userId);
    if(!user){
        return {status:400, message:"User not recognize"};
    }
    user.poin += poin;
    await user.save();
    return {status:200, message:`${poin} Poin Added`};
}

const getUserInfo = async (userId) => {
    const user = await User.findById(userId);
    if(!user){
        return {status:400, message:"User not found"};
    }
    return {status:200, message:"Account found", user};
}

const getAllUser = async () => {
    const user = await User.find();
    return {status:200, message:"Success", user};
}

module.exports = {
    createAccount,
    loginAccount,
    addPoint,
    getUserInfo,
    getAllUser
}