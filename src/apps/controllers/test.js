const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const UserModel = require("../models/user");

const test = async (req, res) => {

    // const users = await UserModel.find();
    // console.log(users);
    // const categories = await CategoryModel.find();
    // const products = await ProductModel.find();

    // console.log(categories.length + products.length);

    // const str = "Welcome ";

    // const promise = new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res(str + "NodeJS")
    //     }, 3000)
    // })
    // promise.then((result) => {
    //     console.log(result);
    // })

    // const category = {
    //     description: "BPhone description",
    //     title: "Test BPhone",
    //     slug: "bphone",
    // }
    // new CategoryModel(category).save();

    // CategoryModel.deleteMany({ title: "Test BPhone" }, (err, docs) => {
    //     console.log(docs);
    // })

    // ProductModel.find().populate({ path: "cat_id" }).exec((err, docs) => {
    //     console.log(docs);
    // });

};

const test2 = (req, res) => {
    res.send(req.body.email);
};

module.exports = {
    test: test,
    test2: test2
}