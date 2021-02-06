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




function getApi() {
    var results = "boom town";
    fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + results + "&country=us", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "f80621f52fmsh7e0dcc69fa2d99ep1bff0bjsn0072d61650b6",
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
        }
    })
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {
            var name = data.results
            var movieMatch;
            for (var i = 0; i < name.length; i++) {
                if (results === name[i].name.toLowerCase()) {
                    movieMatch = name[i];
                    break;
                }
            }

            for (var i = 0; i < movieMatch.locations.length; i++) {
                var button = $("<button>")
                var icon = $("<img>").attr("src", movieMatch.locations[i].icon)
                $("#uTelly").append(button);
                button.append(icon)

            }
            console.log(movieMatch);
        });
}
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

getApi();