const express = require("express");
const router = express.Router();


// Admin
router.get("/", (req, res) => {
	res.send("Welcome NodeJS");
});


const TestController = require("../apps/controllers/test")

router.get("/test", TestController.test);
router.post("/test", TestController.test2);


const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");

const AuthMiddleware = require("../apps/middlewares/auth")

router.get("/admin/login", AuthMiddleware.checkLogin, AuthController.getLogin);
router.post("/admin/login", AuthMiddleware.checkLogin, AuthController.postLogin);
router.get("/admin/logout", AuthMiddleware.checkAdmin, AuthController.Logout);
router.get("/admin/dashboard", AdminController.index);

// Admin products


router.get("/admin/products", AuthMiddleware.checkAdmin, ProductController.index);
router.get("/admin/products/create", AuthMiddleware.checkAdmin, ProductController.cre);
router.get("/admin/products/edit/:editId", AuthMiddleware.checkAdmin, ProductController.edit);
router.get("/admin/products/delete/:deleteId", AuthMiddleware.checkAdmin, ProductController.del);


// User
router.get("/admin/users", (req, res) => {
	res.send("Users");
})
router.get("/admin/users/create", (req, res) => {
	res.send("Create");
})
router.get("/admin/users/edit/:editId", (req, res) => {
	res.send("Edit");
})
router.get("/admin/users/delete/:deleteId", (req, res) => {
	res.send("Delete");
})

// Category
router.get("/admin/categories", (req, res) => {
	res.send("Users");
})
router.get("/admin/categories/create", (req, res) => {
	res.send("Create");
})
router.get("/admin/categories/edit/:editId", (req, res) => {
	res.send("Edit");
})
router.get("/admin/categories/delete/:deleteId", (req, res) => {
	res.send("Delete");
})

module.exports = router;