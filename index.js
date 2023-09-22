// var urlBacon = "https://baconipsum.com/api/?type=meat-and-filler";
//         var urlBacon2 = "https://jsonplaceholder.typicode.com/todos/1";

//         function getData(){
//             $.ajax({
//                 url: urlBacon,
//                 method: "GET",
//                 dataType: "json"
//             }).done(function(data){
//                 console.log(data);
//             }).fail(function(){
//                 console.log("not good");
//             });
//         }
        
//         getData();

//         function getData1(){
//             $.ajax({
//                 url: urlBacon2,
//                 method: "GET",
//                 dataType: "json"
//             }).done(function(data){
//                 console.log(data);
//             }).fail(function(){
//                 console.log("not good");
//             });
//         }
//         getData1();
        // $.ajax({
        //     url: "https://jsonplaceholder.typicode.com/todos/1",
        //     beforeSend: function (xhr) {
        //         xhr.overrideMimeType("text/plain; charset=x-user-defined");
        //     }
        // })
        //     .done(function (data) {
        //         if (console && console.log) {
        //             console.log("Sample of data:", data.slice(0, 100));
        //         }
        //     });
//Get all users
// var url = 'https://jsonplaceholder.typicode.com/todos';
// var xhr1 = new XMLHttpRequest()
// xhr1.open('GET', url, true)
// xhr1.onload = function () {
//     var users = JSON.parse(xhr1.responseText);
//     if (xhr1.readyState == 4 && xhr1.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr1.send(null);
//  // Get a user
//   var url = 'https://jsonplaceholder.typicode.com/todos';
//  var xhr = new XMLHttpRequest()
//  xhr.open('GET', url + '/1', true)
//  xhr.onload = function () {
//      var users = JSON.parse(xhr.responseText);
//      if (xhr.readyState == 4 && xhr.status == "200") {
//          console.table(users);
//      } else {
//          console.error(users);
//      }
//  }
//  xhr.send(null);
//  var xhr = new XMLHttpRequest()
//  xhr.open('GET', url + '/1', true)
//  xhr.onload = function () {
//      var users = JSON.parse(xhr.responseText);
//      if (xhr.readyState == 4 && xhr.status == "200") {
//          var user = document.createElement("user");
//          user.innerHTML = users.title;
//          document.body.appendChild(user)
//      } else {
//          console.error(users);
//      }
//  }
//  xhr.send(null);
 
//  var data = {};
//  data.firstname = "John";
//  data.lastname = "Snow";
//  var json = JSON.stringify(data);

//  var xhr2 = new XMLHttpRequest();
//  xhr2.open("POST", url, true);
//  xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//  xhr2.onload = function () {
//      var users = JSON.parse(xhr2.responseText);
//      if (xhr2.readyState == 4 && xhr2.status == "201") {
//          console.table(users);
//      } else {
//      console.error(users);
//      }
//  }
//  xhr2.send(json);
// var data = {};
// data.firstname = "John2";
// data.lastname = "Snow2";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url + '/12', true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(json);
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url + '/12', true);
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send("delete complete");

