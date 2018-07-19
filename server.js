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
         res.send("Welcome to server.js / route"); 
    });

app.get("/api/companies", function(req, res) {
      db.Company.findAll({}).then(function(dbCompany) {
      console.log(dbCompany);
      console.log("api/companies get \n")
      res.json(dbCompany);
    }).catch(function(err) {
      console.log(err);
    });
});
app.get("/api/contacts", function(req, res) {
    db.Contacts.findAll({}).then(function(dbContact) {
    console.log("api/contacts get \n");
    console.log(dbContact);
    res.json(dbContact);
}).catch(function(err) {
    console.log(err);
    });
});

app.get("/api/jobOpenings", function(req, res) {
    db.JobOpening.findAll({}).then(function(dbJobOpening) {
    console.log("api/jobOpenings get \n");
    console.log(dbJobOpening);
    res.json(dbJobOpening);
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
   
    app.post("/api/contacts", function(req, res) {
        db.Contacts.create(req.body).then(function(dbContact) {
            res.json(dbContact);
    
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
app.post("/api/jobOpenings", function(req, res) {
    db.JobOpening.create(req.body).then(function(dbJobOpening) {
        res.json(dbJobOpening);

    }).catch(function(err) {
        console.log(err);
    });
    //     console.log(req.body);
    //     console.log("test");
        //db.create
    //     return res.json(req.body);
}); 
  
app.use(function(req, res) { 
            res.sendFile(path.join(__dirname, "client/build/index.html")); 
        }); 
    // Syncing our database and logging a message to the user upon success

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
