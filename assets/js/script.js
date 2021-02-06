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