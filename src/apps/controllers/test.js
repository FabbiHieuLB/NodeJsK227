const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const UserModel = require("../models/user");

const test = async (req, res) => {
	req.session.email = "hieudeu1xx1@gmail.com"
};
const test1 = (req, res) => {
	if (req.session.email) {
		res.send("send defined")
	} else {
		res.send("send not defined")
	}
};

const test2 = (req, res) => {
	res.session.destroy()
};

module.exports = {
	test: test,
	test1: test1,
	test2: test2
}