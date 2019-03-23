var companyName = "Redbox";
var companyMotto = ""

var movieId = ["RomCom", "Horror", "Comedy", "Drama", "Musical"]
var movieNames = [["Llegally Blonde", "The Princess Bride", "My Big Fat Greek Wedding","27 Dresses"],
["Saw", "The Conjouring", "Get Out"],
["Step Brothers", "Elf"],
["The Departed", "The Hurt Locker"],
["A Star is Born"]];
var moviePrices = [3, 5, 7, 9, 10];

var rentedMovies = [[], [], [], [],[]]

function availableMoviesQty() {
    
    var totalMovieQty = 0;
    
    for (var i = 0; i < movieNames.length; i++) {
        totalMovieQty += movieNames[i].length;
        
    }
    return totalMovieQty;
}

function availableMoviesReport() {
    console.log("Total Movies available to Rent:", availableMoviesQty());
}

function rentRomCom() {
    rentedMovies[0].push(movieNames[0].pop());
    rentedMovies[0].sort();
}

function rentHorror() {
    rentedMovies[1].push(movieNames[1].pop());
    rentedMovies[1].sort();
}

function salesReport() {
    var totalSales = 0;
    
    for( var i = 0; i < rentedMovies.length; i++) {
        totalSales += rentedMovies[i].length * moviePrices[i]
    }
    
    return totalSales;
}