const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api/router");
const app = express();
const jwt = require("jsonwebtoken");
const jwtSecret = require('./config/jwtConfig')


const PORT = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || "mongodb://localhost/HermesDataBase"
const path = require("path")
const passport = require("passport")
require('./config/passport');
const User = require("./models/User")


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("public/")))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error("error here" + err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      // eslint-disable-next-line no-unused-vars
      res.status(200).send({ message: 'user created' });
    }
  })(req, res, next);
});

app.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      console.log(user)
        // User.findOne({ username: req.body.username
        // }).populate("usersbusiness").exec((err, user) => {
        //   console.log(user);
          const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
            expiresIn: 60 * 60,
          });
          res.status(200).send({
            auth: true,
            token ,
            // _someData : {
            //   user : user
            // },
            message: 'user found & logged in',
          });
        // });
    }
  })(req, res, next);
});

// Api Routes
app.use(routes);

mongoose.connect(db, { useNewUrlParser: true }, (err) => { if (err) { throw err } console.log('mongoose connected') });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT} !`);
});
