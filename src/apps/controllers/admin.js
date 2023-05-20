const UserModel = require("../models/user");
const ProductModel = require("../models/product");

const index = async (req, res) => {
	if (!req.session.email || !req.session.password) {
		res.redirect("/admin/login")
	}
	const users = (await UserModel.find()).length;
	const products = (await ProductModel.find()).length;
	res.render("admin/dashboard", {
		users,
		products
	});
}

module.exports = {
	index,
};