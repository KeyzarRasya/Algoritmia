const {createAccount, loginAccount, addPoint, getAllUser, getUserInfo} = require('../service/user');

const signup = async(req, res) => {
    const signup = await createAccount(req.body);
    res.send(signup);
}

const login = async(req, res) => {
    const {username, password} = req.body;
    const login = await loginAccount(username, password);
    res.send(login);
}

const addPoin = async(req, res) => {
    const {userId, poin} = req.body;
    const point = await addPoint(userId, poin);
    res.send(point);
}

const userInfo = async (req, res) =>{
    const {userId} = req.params;
    const info = await getUserInfo(userId);
    res.send(info);
}

const allUser = async (req, res) => {
    const user = await getAllUser();
    res.send(user);
}

module.exports = {
    signup,
    login,
    addPoin,
    allUser,
    userInfo
}