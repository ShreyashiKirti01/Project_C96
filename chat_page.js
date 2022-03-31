var firebaseConfig = {
    apiKey: "AIzaSyCq-jwd7M4QrCoNy6O8Ro18mRZwD-k8GxA",
    authDomain: "let-s-chat-c6b6f.firebaseapp.com",
    databaseURL: "https://let-s-chat-c6b6f-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-c6b6f",
    storageBucket: "let-s-chat-c6b6f.appspot.com",
    messagingSenderId: "421891685386",
    appId: "1:421891685386:web:16e840316863e157e833f3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function Send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
likes:0
});
document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }