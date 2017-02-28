var mongoose = require('./database');
var User = require('../models/user');

var users = [
  // { // 0
  //   name: "Michael Cruz",
  //   phone: "(555) 555-5555",
  //   email: "person@people.com",
  //   employer: "employer",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 1
  //   name: "Elon Musk",
  //   phone: "(555) 555-5555",
  //   email: "elon@tesla.com",
  //   employer: "Tesla",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 2
  //   name: "Tim Cook",
  //   phone: "(555) 555-5555",
  //   email: "tim@apple.com",
  //   employer: "Apple",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 3
  //   name: "Sundai Pichai",
  //   phone: "(555) 555-5555",
  //   email: "sundai@google.com",
  //   employer: "Google",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 4
  //   name: "Larry Page",
  //   phone: "(555) 555-5555",
  //   email: "larry@alphabet.com",
  //   employer: "Alphabet",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 5
  //   name: "Mark Zuckerberg",
  //   phone: "(555) 555-5555",
  //   email: "mark@facebook.com",
  //   employer: "Facebook",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 6
  //   name: "Jeff Bezos",
  //   phone: "(555) 555-5555",
  //   email: "jeff@amazon.com",
  //   employer: "Amazon",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 7
  //   name: "Satya Nadella",
  //   phone: "(555) 555-5555",
  //   email: "satya@microsoft.com",
  //   employer: "Microsoft",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 8
  //   name: "Marissa Mayer",
  //   phone: "(555) 555-5555",
  //   email: "marissa@yahoo.com",
  //   employer: "Yahoo",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // },
  // { // 9
  //   name: "Susan Wojcicki",
  //   phone: "(555) 555-5555",
  //   email: "susan@youtube.com",
  //   employer: "YouTube",
  //   github: "github",
  //   linkedin: "linkedin",
  //   facebook: "facebook",
  //   projects: {}
  // }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      mongoose.disconnect();
      process.exit(0);
    }
  });
});
