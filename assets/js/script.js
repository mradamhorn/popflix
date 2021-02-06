document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});


console.log("hi")

var genreInput = $("#genreSelect");
var decadeInput = $("#decadeSelect");
var ratingInput = $("#ratingSelect");
var actorInput = $("#actorSelect");
var search = $("#srchBtn");
var clear = $("#clear");

// genres manually selected from imdb genre list
var genres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller", "War", "Western"]
var decades = ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"]
var ratings = ["8-10", "6-8", "4-6", "2-4", "0-2"]

for (var i = 0; i < genres.length; i++) {
    console.log("for loop")
    var option = $("<option>").attr("value", genres[i]).text(genres[i])
    genreInput.append(option)
    console.log(option)
}

for (var i = 0; i < decades.length; i++) {
    console.log("for loop")
    var option = $("<option>").attr("value", decades[i]).text(decades[i])
    decadeInput.append(option)
    console.log(option)
}

for (var i = 0; i < ratings.length; i++) {
    console.log("for loop")
    var option = $("<option>").attr("value", ratings[i]).text(ratings[i])
    ratingInput.append(option)
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



var results = "boom town";
//make function
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

    // Example ivaee querry
    // fetch("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/?Genres=Fantasy&YearRange_Start=2010&YearRange_End=2020", {
    //     "method": "GET",
    //     "headers": {
    //         "content-type": "application/json",
    //         "x-rapidapi-key": "cad95bd25cmsh6e5669cc54c4eb1p11eeb2jsn2eebb15c9353",
    //         "x-rapidapi-host": "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com"
    //     }

