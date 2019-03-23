var hotelName = "JavaScript Hotel";

var roomTypes = ["Twin", "Single", "Double", "Queen", "King"];
var roomPrices = [ 75, 85, 100, 150, 200 ];

var availableRoomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202, 203, 204],[301, 302, 303], [304, 305]];

// old method 
// var bookedRooms = [[], [], [], [], []];

var bookedRooms = [];

// LOOP and PUSH empty subarrays into bookedRooms for as many elements that exists in roomTypes.
for (var i = 0; i < roomTypes.length; i++) {
    bookedRooms.push([]);
}

function availableRoomQty() {
    var totalAvailableRoomQty = 0;
    
    for (var i = 0; i < availableRoomNumbers.length; i++) {
        
        totalAvailableRoomQty += availableRoomNumbers[i].length;
    }
    return totalAvailableRoomQty
}

function totalAvailableRoomsReport() {
    console.log("Total Available Room Count:", availableRoomQty());
}

// var availableRoomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202, 203, 204],[301, 302, 303], [304, 305]];
// var bookedRooms = [[], [], [], [], []];
function bookTwin() {
    bookedRooms[0].push(availableRoomNumbers[0].pop());
}

function bookSingle() {
    bookedRooms[1].push(availableRoomNumbers[1].pop());
}

function bookDouble() {
    bookedRooms[2].push(availableRoomNumbers[2].pop());
}

function bookQueen() {
    bookedRooms[3].push(availableRoomNumbers[3].pop());
}

function bookKing() {
    bookedRooms[4].push(availableRoomNumbers[4].pop());
}
// var roomTypes = ["Twin", "Single", "Double", "Queen", "King"];
// var availableRoomNumbers = [[101, 102], [105, 106, 107], [201, 202, 203, 204],[301, 302], [304, 305]];
// var bookedRooms = [[104, 103], [108], [], [303], []];
// var roomPrices = [ 75, 85, 100, 150, 200 ];


// salesReport 1) Calculate bookedRooms[0].length * roomPrices[0]
function salesReport() {
    var totalRoomSales = 0;
    for (var i = 0; i < bookedRooms.length; i++) {
        totalRoomSales += bookedRooms[i].length * roomPrices[i];
    }
    return totalRoomSales;
    
}
