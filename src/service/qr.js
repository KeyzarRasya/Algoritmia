const Scanned = require('../model/Scanned')
const QR = require('../model/QR')
const User = require('../model/User')
const {addPoint} = require('../service/user')

const scan = async (userId, qrid, poin) => {
    const qr = await Scanned.find({userId})
    for(let q of qr){
        if(q.qr == qrid){
            return {status:400, message:'you already scanned'};
        }
    }
    const user = await User.findById(userId)
    if(!user){
        return {status:400, message:'User not found'}
    }
    user.poin += poin;
    const newQR = new Scanned({userId, qr:qrid})
    await newQR.save()
    await user.save();
    return {status:200, message:"QR Saved"}
}

const save = async(code) => {
        const qr = await QR.findOne({qrContent:code})
        if(qr){
            return {status:400, message:"alreadt exist"}
        }
        const newqr = new QR({qrContent:code})
        await newqr.save();
    return {statsu:200, message:'Success'}
}

const saveMultiple = async (codes) => {
    let results = [];
    
    for (let code of codes) {
        const qr = await QR.findOne({ qrContent: code });
        if (qr) {
            results.push({ code, status: 400, message: "Already exists" });
        } else {
            const newqr = new QR({ qrContent: code });
            await newqr.save();
            results.push({ code, status: 200, message: "Success" });
        }
    }

    return results;
};

module.exports = {
    save,
    scan,
    saveMultiple
}