const express = require("express");
const app = express();
const config = require("config")
const session = require("express-session")

app.set('trust proxy', 1) // trust first proxy
app.use(session({
	secret: config.get("app.session_key"),
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false
	}
}));

// Router
app.use(express.urlencoded({
	extended: true
}));


app.use("/static", express.static(config.get("app.static_folder")));
app.set("views", config.get("app.view_folder"));
app.set("view engine", config.get("app.view_engine"));

app.use(require(config.get("app.router")));

module.exports = app;