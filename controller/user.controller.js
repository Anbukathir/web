
const { postUser, queryUser, getuserById, updateUserById, deleteUserById } = require('../service/user.service');
const pick = require("../utils/pick");

const postUserController = async (req, res, next) => {
    const user = await postUser(req.body, next);
    res.send(user);
};

const getUsers = async (req, res) => {
    const filter = pick(req.query, ["Name", "email"]);
    const option = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await queryUser(filter, option);
    res.send(result);
};

const getUser = async (req, res) => {
    const user = await getuserById(req.params.userId);
    res.send(user);

};

const updateUser = async (req, res) => {
    const user = await updateUserById(
        req.params.userId,
        req.body,
        req
    );
    res.send(user);
};

const deleteUser = async (req, res) => {
    await deleteUserById(req.params.userId, req.user);
    res.send({ success: true });
};

module.exports = {
    postUserController,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
};
