const UserModel = require("../models/user");

const getLogin = (req, res) => {
    res.render("admin/login", { data: {} });
}

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    let error = null;
    const users = await UserModel.find({ email, password });
    if (email == "" || password == "") {
        error = "Email hoặc Password không được để trống";
    } else if (users.length > 0) {
        res.redirect("/admin/dashboard")
    } else {
        error = "Tài khoản không hợp lệ !";
    }
    res.render("admin/login", { data: { error } });
}

const Logout = (req, res) => {
    res.send("Logout");
}

module.exports = {
    getLogin,
    postLogin,
    Logout
}