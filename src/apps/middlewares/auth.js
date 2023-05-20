const checkLogin = (res, req, next) => {
	if (req.session.email && req.session.password) {
		return res.redirect("/admin/dashboard")
	}
	next();
}
const checkAdmin = (res, req, next) => {
	if (!req.session.email || !req.session.password) {
		return res.redirect("/admin/login")
	}
	next();
}
module.exports = {
	checkLogin,
	checkAdmin
}