const joi = require('joi');


const postUserController = {
    body: joi.object().keys({
        _id: joi.string(),
        name: joi.string(),
        email: joi.string().email().allow(''),
        password: joi.string()
    }),
};

const getUsers = {
    query: joi.object().keys({
        _id: joi.string(),
        name: joi.string(),
        email: joi.string().email().allow(''),
        password: joi.string()
    }),
};


const getUser = {
    params: joi.object().keys({
        userId: joi.string(),
    })
}

const updateUser = {
    params: joi.object().keys({
        userId: joi.string(),
    }),
    body: joi.object().keys({
        _id: joi.string(),
        name: joi.string(),
        email: joi.string().email().allow(''),
        password: joi.string()
    })
}

const deleteUser = {
    params: joi.object().keys({
        userId: joi.string(),
    })
}

module.exports = {
    postUserController,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}
