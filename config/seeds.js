var mongoose = require('./database');
var People = require('../models/people');

var peoples = [
  { // 0
    name: "Aaron Goldsmith",
    phone: "(555) 555-5555",
    email: "aaron@aaron.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 1
    name: "Emily Main",
    phone: "(555) 555-5555",
    email: "emily@emily.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 2
    name: "Gaye Lowenstein",
    phone: "(555) 555-5555",
    email: "gaye@gaye.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 3
    name: "Michael Cruz",
    phone: "(555) 555-5555",
    email: "michael@michael.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 4
    name: "Andrew Gonzalez",
    phone: "(555) 555-5555",
    email: "andrew@andrew.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 5
    name: "Antonio Rhee",
    phone: "(555) 555-5555",
    email: "antonio@antonio.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 6
    name: "Darin Ma",
    phone: "(555) 555-5555",
    email: "darin@darin.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 7
    name: "Kevin Salazar",
    phone: "(555) 555-5555",
    email: "kevin@kevin.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 8
    name: "Paul Baik",
    phone: "(555) 555-5555",
    email: "paul@paul.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  },
  { // 9
    name: "Viviana Rishe",
    phone: "(555) 555-5555",
    email: "vivi@vivi.io",
    employer: "undisclosed",
    github: "github",
    linkedin: "linkedin",
    facebook: "facebook",
    projects: []
  }
];

People.remove({}, function(err) {
  if (err) console.log(err);
  People.create(cupcakes, function(err, peoples) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + peoples.length  + " peoples.");
      mongoose.disconnect();
      process.exit(0);
    }
  });
});
