
// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyASQxS6eiXJjyYJTTNhdfEcmpisuk3HzR8",
    authDomain: "portfolio-4f277.firebaseapp.com",
    databaseURL: "https://portfolio-4f277.firebaseio.com",
    projectId: "portfolio-4f277",
    storageBucket: "portfolio-4f277.appspot.com",
    messagingSenderId: "1063929049363"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Contacts
$("#submit-button").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var email = $("#emailInput").val().trim();
  var name = $("#nameInput").val().trim();

  // Creates local "temporary" object for holding employee data
  var newContact = {
    email: email,
    name: name,
  };

  // Uploads employee data to the database
  database.ref().push(newContact);

  // Clears all of the text-boxes
  $("#emailInput").val("");
  $("#nameInput").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
})