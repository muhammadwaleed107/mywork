"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const dtos_1 = require("./dtos");
const mainservice_1 = require("./services/mainservice");
const helpers_1 = require("./helpers");
//Initiallising node modules
const express = require("express");
const argv = require('minimist')(process.argv.slice(2));
const swagger = require("swagger-node-express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const app = express();
const subpath = express();
// Body Parser Middleware
app.use(bodyParser.json());
// Swagger
app.use("/v1", express);
swagger.setAppHandler(subpath);
swagger.setApiInfo({
    title: "example Express & Swagger API",
    description: "API to do something, manage something...",
    termsOfServiceUrl: "",
    contact: "yourname@something.com",
    license: "",
    licenseUrl: ""
});
app.use(express.static('dist'));
//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});
//Models
let _mainService = new mainservice_1.MainService();
let _user = new models_1.User();
//Setting up server
let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log("App now running on port", port);
});
//GET API
app.get("/", function (req, res) {
    res.sendfile(__dirname + '/dist/index.html');
    // let query = "select * from [user]";
    // res.send("done");
});
app.post("/api/user/signout", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.SignOutDTO();
    Object.assign(params, req.body);
    _mainService.Signout(res, params);
});
app.post("/api/user/login", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.LoginDTO();
    Object.assign(params, req.body);
    _mainService.Login(res, params);
});
app.post("/api/user/getUseMetaInfo", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.LoginResponseDTO();
    Object.assign(params, req.body);
    _mainService.GetAuthenticateUserMetaInfo(res, params);
});
app.post("/api/user/getSlugByUser", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.UserSlugRequestDTO();
    Object.assign(params, req.body);
    _mainService.GetSlugByUser(res, params);
});
app.post("/api/user/getNewsBySlugId", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.NewsBySlugRequestDTO();
    Object.assign(params, req.body);
    _mainService.GetNewsBySlugId(res, params);
});
app.post("/api/user/getSlugNews", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.SlugNewsRequestDTO();
    Object.assign(params, req.body);
    _mainService.getSlugNews(res, params);
});
app.post("/api/user/addNews", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.AddNewsRequestDTO();
    Object.assign(params, req.body);
    _mainService.addNews(res, params);
});
app.post("/api/user/getAssignmentByUserId", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.AssignmentByUserRequestDTO();
    Object.assign(params, req.body);
    _mainService.getAssignmentByUserId(res, params);
});
app.post("/api/user/getGuestAssignmentByUserId", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.GuestAssignmentByUserRequestDTO();
    Object.assign(params, req.body);
    _mainService.getGuestAssignmentByUserId(res, params);
});
app.post("/api/user/updateAssignment", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.UpdateAssignmentRequestDTO();
    Object.assign(params, req.body);
    _mainService.updateAssignment(res, params);
});
app.post("/api/user/getChat", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.GetChatRequestDTO();
    Object.assign(params, req.body);
    _mainService.getChat(res, params);
});
app.post("/api/user/addChat", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.AddChatRequestDTO();
    Object.assign(params, req.body);
    _mainService.addChat(res, params);
});
app.post("/api/user/updateGuestAssignment", function (req, res) {
    let params = new dtos_1.UpdateGuestAssignmentRequestDTO();
    Object.assign(params, req.body);
    console.log("params", JSON.stringify(params));
    _mainService.updateGuestAssignment(res, params);
});
app.post("/api/user/addEvent", function (req, res) {
    let params = new dtos_1.AddEventRequestDTO();
    Object.assign(params, req.body);
    _mainService.addEvent(res, params);
});
app.post("/api/user/getUserNotification", function (req, res) {
    let params = new dtos_1.GetUserNotificationRequestDTO();
    Object.assign(params, req.body);
    _mainService.getUserNotification(res, params);
});
app.post("/api/user/getUserPointsDetail", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.GetUserPointsDetailRequestDTO();
    Object.assign(params, req.body);
    _mainService.getUserPointsDetail(res, params);
});
app.post("/api/user/getArchivalMedia", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.ArchivalMediaRequestDTO();
    Object.assign(params, req.body);
    _mainService.getArchivalMedia(res, params);
});
app.post("/api/user/getSuggestedKeywords", function (req, res) {
    helpers_1.Helpers.LogParams(req.body);
    let params = new dtos_1.ArchivalMediaRequestDTO();
    Object.assign(params, req.body);
    _mainService.getSuggestedKeywords(res, params);
});
