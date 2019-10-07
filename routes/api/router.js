const lodo = require("express").Router();
const Businesses = require("../../models/Business");
const axios = require('axios');
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");
const User = require("../../models/User");
require('dotenv').config();


console.log("inside the routes")
// "/api/nearby"
//****This is the api that will show the local business feed  */
lodo.route("/api/nearby/:long/:latt")
    .get((req, res) => {
        const long = req.params.long
        const latt = req.params.latt
        Businesses.find({
            location: {
                $near: {
                    $maxDistance: 48280.3,
                    $geometry: {
                        type: "Point",
                        coordinates: [long, latt]
                    }
                }
            }
        }).then((results) => {
            console.log(results);
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
        console.log("TYPE: GET &&& LOCATION: /api/nearby/")
    });
// "/api/business"
//****This is the route that will allow you to create a business in the database */
lodo.route("/api/business")
    .post((req, res) => {
        console.log("1")
        console.log(req.body)
        const newBusiness = new Businesses(req.body)
        newBusiness.save((err, product) => {
            if (err) {
                throw err
            }
            else {
                // User.findOne(_id : )
                console.log("saved")
                console.log(product)
                res.json(product)
            }
        });
    })

lodo.route("/api/mybusiness")
.get(jwtVerify.confirmToken, jwtVerify.verifyToken, (req, res) => {
    User.find({
        _id: req.params
    }).then((results) => {
        console.log("FOUND " + results[0].usersbusiness[0] + " businesses");
        res.json({usersBusiness : results[0].usersbusiness[0]});
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
})
// This will be to delete a business
.delete((req, res) => {
    const id = req.params.id
    Businesses.deleteOne({ _id: id }, (err, result) => {
        if (err) { res.send(err) }
        else { console.log(result); res.send(result) }
    });
    console.log("TYPE: DELETE &&& LOCATION: /api/business/:id")
});
//  "/api/business/:id"
//****This the route that will be used for showing a specific businesses page */
lodo.route("/api/business/:id")
    .get( (req, res) => {
        console.log()
        Businesses.find({
            _id: req.params.id
        }).then((results) => {
            // console.log("TYPE: GET &&& LOCATION: /api/business/:id")
            console.log("FOUND " + results + " businesses");
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });

    })
//  "/api/business/:id"
//****This the route that will be used for showing a specific businesses page */
lodo.route("/api/business/:id")
    .get( (req, res) => {
        const id = req.params.id
        Businesses.find({
            _id: id
        }).then((results) => {
            console.log("TYPE: GET &&& LOCATION: /api/business/:id")
            console.log(results);
            res.json(results);
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
    })
    // This will be to delete a business
    .delete((req, res) => {
        const id = req.params.id
        Businesses.deleteOne({ _id: id }, (err, result) => {
            if (err) { res.send(err) }
            else { console.log(result); res.send(result) }
        });
        console.log("TYPE: DELETE &&& LOCATION: /api/business/:id")
    });
// "/api/search/:businessName"
//****This will used to search for a business name in the database */
lodo.route("/api/search/:businessName")
    .get((req, res) => {
        const businessName = req.params.businessName
        Businesses.find({ BusinessName: new RegExp('^' + businessName + '$', "i") }).then(results => {
            console.log(results)
            res.json(results)
        }).catch(err => res.send(err));
        console.log("TYPE: GET &&& LOCATION: /api/search/:businessName")
    })
lodo.route("/api/getDistanceBetween/:loggedInLatt/:loggedInLong/:bLatt/:bLong")
    .get((req, res) => {
        const loggedInLatt = req.params.loggedInLatt
        const loggedInLong = req.params.loggedInLong
        const bLatt = req.params.bLatt
        const bLong = req.params.bLong
        axios
            .get("https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=" + loggedInLatt + "," + loggedInLong + "&destinations=" + bLatt + "," + bLong + "&travelMode=driving&distanceUnit=mi"
                + "&key=" + process.env.APIKEY)
            .then(results => {
                // console.log(res.data)
                //Set the state of miles away to the results from the api call
                res.json(results.data.resourceSets[0].resources[0].results[0])
            })
            //Exception Handling
            .catch(err => { console.log(err) })
    })


module.exports = lodo;
