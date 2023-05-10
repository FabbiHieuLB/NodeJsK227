const mongoose = require("../../common/database")();
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    full_name: {
        type: String,
        require: true,
    },
});

const UserModel = mongoose.model("User", userSchema, "users");

module.exports = UserModel;