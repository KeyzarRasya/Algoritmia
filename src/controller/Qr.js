const {scan, save, saveMultiple} = require("../service/qr")

const saveQR = async(req, res) => {
    try {
        const { qrids } = req.body;
        if (!Array.isArray(qrids)) {
            return res.status(400).json({ message: "Invalid input, array expected." });
        }

        const results = await saveMultiple(qrids);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const scans = async (req, res) => {
    const {userId} = req.body;
    const {code} = req.params
    const qr = await scan(userId, code, 10)
    res.send(qr)
}

module.exports = {
    saveQR,
    scans
}