const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); 
const dotenv = require ("dotenv");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(express.static("client/build"));

// bodyParser only works because we add these lines
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => { 
         res.send("Welcome to server.js / route"); 
    });

app.get("/api/viewcompanies", function(req, res) {
      db.Company.findAll({}).then(function(dbCompany) {
      console.log(dbCompany);
      console.log("api/companies get \n")
      res.json(dbCompany);
    }).catch(function(err) {
      console.log(err);
    });
});

app.get("/api/viewcontacts", function(req, res) {
    db.Contacts.findAll({}).then(function(dbContact) {
    console.log("api/contacts get \n");
    console.log(dbContact);
    res.json(dbContact);
}).catch(function(err) {
    console.log(err);
    });
});

app.get("/api/viewjobOpenings", function(req, res) {
    db.JobOpening.findAll({}).then(function(dbJobOpening) {
    console.log("api/jobOpenings get \n");
    console.log(dbJobOpening);
    res.json(dbJobOpening);
}).catch(function(err) {
    console.log(err);
    });
});

app.get("/api/viewactivities", function(req, res) {
    db.Activity.findAll({}).then(function(dbActivity) {
    console.log("api/activities get \n");
    console.log(dbActivity);
    res.json(dbActivity);
}).catch(function(err) {
    console.log(err);
    });
});

app.post("/api/editcompanies", function(req, res) {
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
   
    app.post("/api/editcontacts", (req, res) => {
        db.Contacts.create(req.body).then((dbContact) => {
            console.log("Posted")
            res.json(dbContact);
    
        }).catch(function(err) {
            console.log(err);
        });
        
    });    
 
app.post("/api/editjobOpenings", function(req, res) {
    db.JobOpening.create(req.body).then(function(dbJobOpening) {
        res.json(dbJobOpening);

    }).catch(function(err) {
        console.log(err);
    });
}); 

app.post("/api/editactivities", (req, res) => {
    db.Activity.create(req.body).then((dbActivity) => {
        res.json(dbActivity);

    }).catch(function(err) {
        console.log(err);
    });
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
