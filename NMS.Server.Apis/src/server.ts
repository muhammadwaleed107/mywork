import { User } from "./models";
import { Config } from "./config";
import { Request, Response } from "express";
import {
    LoginDTO, LoginResponseDTO,SignOutDTO
} from "./dtos";

import { MainService } from "./services/mainservice";
import { Helpers } from "./helpers";





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
app.use(function (req: Request, res: Response, next: any) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Models
let _mainService = new MainService();
let _user = new User();


//Setting up server
let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log("App now running on port", port);
});



//GET API
app.get("/", function (req: Request, res: Response) {
    res.sendfile(__dirname + '/dist/index.html');
    // let query = "select * from [user]";
    // res.send("done");
});


app.post("/api/user/signout", function (req: Request, res: Response) {
    Helpers.LogParams(req.body);
    let params: SignOutDTO = new SignOutDTO();
    Object.assign(params, req.body);
    _mainService.SignoutWithoutSql(res, params);

});

app.post("/api/user/login", function (req: Request, res: Response) {
    Helpers.LogParams(req.body);       
    let params: LoginDTO = new LoginDTO();
    Object.assign(params, req.body);
    _mainService.LoginWithoutSql(res, params);
});





