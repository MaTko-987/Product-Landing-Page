
const email = document.getElementById('email');

function subscribe(){

    if(email.value == ""){
        alert('Please write your email here!')
    } else {
        alert('Thank you for your subscription!');
    }

}

function addToCart1(){

    

}


// ------------------Data Access----------------------------------------//

const data = { 

    "keyboard1": {
      "name" : "Corsair K65 RGB Mini Gaming Keyboard",
      "description" : "Greatest properly off ham exercise all.",
      "image" : "dummy-pdt-b.jpg",
      "price" : 2034
    },

    "keyboard2": {
      "name" : "HyperX Alloy Origins 60 Gaming Keyboard",
      "description" : "Unsatiable its possession nor off.",
      "image" : "dummy-pdt-b.jpg",
      "price" : 1247
    },

    "keyboard3": {
      "name" : "Fnatic Streak65 Gaming Keyboard",
      "desc" : "All difficulty unreserved the solicitude.",
      "image" : "dummy-pdt-a.jpg",
      "price" : 675
    }
    

}

const json = JSON.parse(data);



// https://mkyong.com/javascript/how-to-access-json-object-in-javascript/
//how to acces JSON with JS