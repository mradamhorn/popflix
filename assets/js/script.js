document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

var genreInput = $("#genreSelect");
var decadeInput = $("#decadeSelect");
var ratingInput = $("#ratingSelect");
var actorInput = $("#name");
var search = $("#srchBtn");
var clear = $("#clear");

// genres manually selected from imdb genre list
var genres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller", "War", "Western"]
var decades = [
    { display: "1950s", query: "YearRange_Start=1950&YearRange_End=1959" },
    { display: "1960s", query: "YearRange_Start=1960&YearRange_End=1969" },
    { display: "1970s", query: "YearRange_Start=1970&YearRange_End=1979" },
    { display: "1980s", query: "YearRange_Start=1980&YearRange_End=1989" },
    { display: "2010s", query: "YearRange_Start=2010&YearRange_End=2019" },
    { display: "1990s", query: "YearRange_Start=1990&YearRange_End=1999" },
    { display: "2000s", query: "YearRange_Start=2000&YearRange_End=2009" },
    { display: "2020s", query: "YearRange_Start=2020&YearRange_End=2019" }
]

var ratings = [
    { display: "8+", query: "Minimum_IvaRating=80" },
    { display: "6+", query: "Minimum_IvaRating=60" },
    { display: "4+", query: "Minimum_IvaRating=40" },
    { display: "2+", query: "Minimum_IvaRating=20" },
    { display: "0+", query: "Minimum_IvaRating=0" }
];

// Setting up dropdown menues for genre, decade, and rating
for (var i = 0; i < genres.length; i++) {
    console.log("for loop")
    var option = $("<option>").attr("value", genres[i]).text(genres[i])
    genreInput.append(option)
    console.log(option)
}

for (var i = 0; i < decades.length; i++) {
    console.log("for loop")
    var option = $("<option>").attr("value", decades[i].query).text(decades[i].display)
    decadeInput.append(option)
    console.log(option)
}

for (var i = 0; i < ratings.length; i++) {
    console.log("for loop")
    var option = $("<option>").attr("value", ratings[i].query).text(ratings[i].display)
    ratingInput.append(option)
    console.log(option)
}

// Setting up query terms for IVA Api
$("#srchBtn").on("click", function () {
    if ($("#genreSelect").val()) {
        var genre = $("#genreSelect").val()
        console.log(genre)
        var genreQuery = "Genres=" + genre
    }
    else {
        var genreQuery = ""
    };
    if ($("#decadeSelect").val()) {
        var decade = $("#decadeSelect").val()
        console.log(decade)
        var decadeQuery = "&" + decade
    }
    else {
        var decadeQuery = ""
    };
    if ($("#ratingSelect").val()) {
        var rating = $("#ratingSelect").val()
        console.log(rating)
        var ratingQuery = "&" + rating
    }
    else {
        var ratingQuery = ""
    };
    if ($("#name").val()) {
        var actorName = $("#name").val()
        console.log(actorName)
        var actorQuery = "&PersonNames=" + actorName
    }
    else {
        var actorName = ""
    };

    // runs IVA Api request (Default ReleaseCountries=US)
    fetch("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/?" + genreQuery + actorQuery + "&ReleaseCountries=US" + decadeQuery + ratingQuery + "&ProgramTypes=Movie", {
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
