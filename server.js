const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// if process.env is not production, load the .env file
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// bringing in the stripe library AFTER requiring the dotenv
// stripe then gives a function that we invoke right after with the stripe_secret_key right away
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // we now get back the stripe object that we use to make the charges
// on the /payment route

// instanciates the express library that helps build a server easily
const app = express();

// Heroku will set up it's own port on deploy or 5000 on local
const port = process.env.PORT || 5000;

// for any requests coming in, it's body will be parsed to json
app.use(bodyParser.json());

// url strings coming in or passing out are parsed or properly escaped
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// if it's in production, send all the static files in the build.
// path library concats the current directory(__dirname) with the 'client/build'
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // the get requests from the front end, will be given this
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// /payment route
app.post("/payment", (req, res) => {
  // creating the body object that we will be getting from the token passed
  // on from the stripe-button component thru the request.
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
