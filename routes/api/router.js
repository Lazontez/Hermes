const lodo = require("express").Router();
const Businesses = require("../../models/Business");
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
    .post((req , res)=>{
        const newBusiness = new Businesses(req.body)

        newBusiness.save((err , product)=>{
         if (err) {
           throw err
         }
         else {
           console.log("saved")
           console.log(product)
           res.json(product)
         }
         
       }); 
    })

//  "/api/business/:id"
//****This the route that will be used for showing a specific businesses page */
lodo.route("/api/business/:id")
    .get((req, res) => {
        const id = req.params.id
        Businesses.find({
            _id: id

        }).then((results) => {

            console.log(results);
            res.json(results);

        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
        console.log("TYPE: GET &&& LOCATION: /api/nearby/")
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
   .get((req , res)=>{
       const businessName = req.params.businessName
       Businesses.find({BusinessName:businessName}).then(results=>{
           console.log(results)
           res.json(results)
       }).catch(err=>res.send(err));
    
       console.log("TYPE: GET &&& LOCATION: /api/search/:businessName")

   })

module.exports = lodo;
