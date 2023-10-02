

export const movieArr = [
    {
        id: 0,
        title : 'Barbie'
    },{
        id:1,
        title : 'Tennat'
    }
]

export function getAllMovies(){
    //console.log(movieArr)
    return movieArr;
}

export function addMovie(name){
    movieArr.push({
        id: movieArr.length,
        title: name
    })
}