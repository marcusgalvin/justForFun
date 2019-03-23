var hotelName = "Javascript Function Hotel";
var hotelMotto = " What's Your Function";

var roomTypes = ["Twin", "Single", "Double", "Queen", "Kings"];
var roomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202, 203, 204], [301, 302, 303], [304, 305]];
var roomPrices = [75, 85, 100, 150, 200];

// old way :var bookedRooms = [[], [], [], [], []];

//loop and push empty sub arrays into book rooms for as many elements that exist in RoomTypes
var bookedRooms = []
for (var i = 0; i < roomTypes.length; i++) {
    bookedRooms.push([]);
}

function availableRoomsQty() {
    
        var totalRoomQty = 0;

    for (var i = 0; i < roomNumbers.length; i++) {
        totalRoomQty += roomNumbers[i].length;
        
    }
    //console.log("Total rooms available:", totalRoomQty);
    return totalRoomQty;
    
}

function availableRoomsReport() {
      console.log("Total rooms available:", availableRoomsQty());
}

function bookTwin() {
    bookedRooms[0].push(roomNumbers[0].pop());
    bookedRooms[0].sort();
}

function bookSingle() {
    bookedRooms[1].push(roomNumbers[1].pop());
    bookedRooms[1].sort();
}



// salesReport - calculate bookedRooms[0].length * roomPrices[0]
function salesReport() {
    var totalSales = 0;
    
   // [ [ 102, 103, 104 ], [ 106, 107 ], [], [], [] ]
   for(var i = 0; i < bookedRooms.length; i++) {
           totalSales += bookedRooms[i].length * roomPrices[i]
       
   }
    
    return totalSales;
};