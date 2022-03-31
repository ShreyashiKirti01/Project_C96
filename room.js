
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
//ADD YOUR FIREBASE LINKS HERE

user_name= localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="<h3>Welcome "+user_name+"! </h3>";

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
      }
      
      function addRoom(){
      room_name= document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
      Room: room_name
      });
      localStorage.setItem("room_name", room_name);
document.getElementById("add_room").value="";
      window.location="chat_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='rooms_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name", name);
window.location="chat_page.html";
}


