  // $( document ).ready(function() {
//   $("#btn-login").click(function(){
// 	var email = $("#email").val();
// 	var password = $("#password").val();
// 	var result = firebase.auth().signInWithEmailAndPassword(email, password);

// 	result.catch(function(error){
// 		var errorCode = error.code;
// 		var errorMessage = error.message;

// 		console.log(errorCode);
// 		console.log(errorMessage);
// 	});
// });

// });

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
