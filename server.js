const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path"); 
const db = require("./models");

app.use(express.static("client/build"));

// bodyParser only works because we add these lines
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => { 
         res.send("Hi"); 
    });

app.get("/api/companies", function(req, res) {
        db.Company.findAll({}).then(function(dbCompany) {
        console.log(dbCompany);
        res.json(dbCompany);
    }).catch(function(err) {
        console.log(err);
    });
        });

// app.get("/", function (req, res) {
//     event.preventDefault();
//     console.log("api/companies was hit");
//     db.Company.findAll({
//       //   order: [
//       //     ['co_name', 'ASC'],
//       //     ['priority', 'ASC']
//       // ]
//     }).then(function (dbCompany) {
//       res.json(dbCompany)
//     });
//   });

app.post("/api/companies", function(req, res) {
        db.Company.create(req.body).then(function(dbCompany) {
            res.json(dbCompany);
    
        }).catch(function(err) {
            console.log(err);
        });
        //     console.log(req.body);
        //     console.log("test");
            //db.create
        //     return res.json(req.body);
    });
   
// POST route for saving a new post
// app.post("/api/posts", function(req, res) {
//     db.Post.create(req.body).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   }); 
  
app.use(function(req, res) { 
            res.sendFile(path.join(__dirname, "client/build/index.html")); 
        }); 
    // Syncing our database and logging a message to the user upon success

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
