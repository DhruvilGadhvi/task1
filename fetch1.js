// 1. we will fetch data from the tmdb api
fetch('https://api.themoviedb.org/3/search/movie?api_key=4d8f107a19366ff018ab05901d44eb84&language=en-US&query=Avengers: Endgame &page=1&include_adult=false')
.then(function (response) {
    console.log(response)
    response.json().then(function (data) {
        console.log(data); //2. to see all the data in json format on the consol
        //console.log(data.results[0].title)
        //console.log(data.results[0].overview)
        $("#title").append(data.results[0].title)
        $("#release_date").append(data.results[0].release_date)
        $("#img").attr('src','https://image.tmdb.org/t/p/w500/'+(data.results[0].poster_path)).height(350).width(350)
        $("#overview").append(data.results[0].overview)
        $("#popularity").append(data.results[0].popularity)
    })
})