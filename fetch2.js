


let l1='Avengers: Endgame'
url1='https://api.themoviedb.org/3/search/movie?api_key=4d8f107a19366ff018ab05901d44eb84&language=en-US&query=Avengers: Endgame &page=1&include_adult=false';
url2='https://api.themoviedb.org/3/search/movie?api_key=4d8f107a19366ff018ab05901d44eb84&language=en-US&query=Tamasha  &page=1&include_adult=false';
Promise.all([
    fetch(url1).then(value=>value.json()),
    fetch(url2).then(value=>value.json())
])
.then((value)=>{
    console.log(value)
    $('#name').append(value[0].results[0].title)
    $("#release_date").append(value[0].results[0].release_date)
    $("#img").attr('src','https://image.tmdb.org/t/p/w500/'+(value[0].results[0].poster_path)).height(350).width(350)
    $("#overview").append(value[0].results[0].overview)
    $("#popularity").append(value[0].results[0].popularity)

    $('#name1').append(value[1].results[3].title)
    $("#release_date1").append(value[1].results[3].release_date)
    $("#img1").attr('src','https://image.tmdb.org/t/p/w500/'+(value[1].results[3].poster_path)).height(350).width(350)
    $("#overview1").append(value[1].results[3].overview)
    $("#popularity1").append(value[1].results[3].popularity)
})