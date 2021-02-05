// var button = document.querySelector(".button");
// var inputValue = document.querySelector(".input-value");
// var city = document.querySelector(".city");
// var desc = document.querySelector(".desc");
// var temp = document.querySelector(".temp");

// button.addEventListener("click", function(){
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=0f59db382c2a056a530ec61ec957415c")
//     .then(response => response.json())
//     .then(data => {
//         var nameValue = data["name"];
//         var tempValue = data["main"]["temp"];
//         var descValue = data["weather"][0]["description"];

//         city.innerHTML = nameValue;
//         temp.innerHTML = "Temp: " + tempValue;
//         desc.innerHTML = "Condition: " + descValue;
//     })

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});


console.log("hi")

var genreInput = $("#genreSelect");
var decade = $("#decadeSelect");
var rating = $("#ratingSelect");
var actor = $("#actorSelect");
var search = $("#srchBtn");
var clear = $("#clear");

// var genreQuery = "Genres="+genreInput.value
var genres = ["Action", "Adventure", "Fantasy"]

for (var i = 0; i < genres.length; i++) {
    console.log("for loop")
    var option = $("<option>").attr("value", genres[i]).text(genres[i])
    genreInput.append(option)
    console.log(option)
}

$("#srchBtn").on("click", function () {
    console.log($("#genreSelect").val())
    var genre = $("#genreSelect").val()
    var genreQuery = "Genres=" + genre
    fetch("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/?" + genreQuery, {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-rapidapi-key": "cad95bd25cmsh6e5669cc54c4eb1p11eeb2jsn2eebb15c9353",
            "x-rapidapi-host": "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com"
        }

    })

        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
        })



})



// button.addEventListener("click", function(){
//     fetch("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/?"+genreQuery, {
//         "method": "GET",
//         "headers": {
//             "content-type": "application/json",
//             "x-rapidapi-key": "cad95bd25cmsh6e5669cc54c4eb1p11eeb2jsn2eebb15c9353",
//             "x-rapidapi-host": "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com"
//         }
// 



    // fetch("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/?Genres=Fantasy&YearRange_Start=2010&YearRange_End=2020", {
    //     "method": "GET",
    //     "headers": {
    //         "content-type": "application/json",
    //         "x-rapidapi-key": "cad95bd25cmsh6e5669cc54c4eb1p11eeb2jsn2eebb15c9353",
    //         "x-rapidapi-host": "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com"
    //     }
    // })
    // .then(response => response.json(){
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });


// .catch(err => alert("Wrong movie name"))
// })