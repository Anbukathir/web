const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



var personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    /*
    name : String,
    email: String,
    password: String,
    */
    isDeleted: {
        type: String,
        default: false
    }
});

personSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};

personSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
const User = mongoose.model('users', personSchema);

module.exports = User;
