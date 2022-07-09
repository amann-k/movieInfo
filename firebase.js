firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("myform").style.display = "block";
    document.getElementById("moviesList").style.display = "none";
  } else {
    // User is signed out
    // ...
    document.getElementById("myform").style.display = "none";
    document.getElementById("moviesList").style.display = "block";
  }
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function login() {
  var userEmail = document.getElementById("email_f").value;
  var userPass = document.getElementById("psw_f").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}


function logout(){
    firebase.auth().signOut();
}
