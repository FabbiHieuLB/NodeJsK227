const ProductModel = require("../models/product");
const paginate = require("../../common/paginate");

const index = async (req, res) => {
	const limit = 10;
	const page = parseInt(req.query.page) || 1;
	const skip = page * limit - limit
	const totalRow = await ProductModel.find({

	}).countDocuments
	const totalPage = Math.ceil(totalRow / limit)
	const products = await ProductModel.find().skip(skip).limit(limit).populate({
		path: "cat_id"
	});
	res.render("admin/products/product", {
		products,
		page,
		totalPage,
		pages: paginate(page, totalPage)
	});
}

const cre = (req, res) => {
	res.render("admin/products/add_product");
}

const edit = (req, res) => {
	res.render("admin/products/edit_product");
}

const del = (req, res) => {
	res.send("Delete");
}

module.exports = {
	index,
	cre,
	edit,
	del
}