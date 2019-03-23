var hotelName ="Marcus' Hotel";
var roomType = ["Twin", "Double", "Queen", "King", "Penthouse"];
var roomSymbol = ["TWN", "DUB", "QUEN", "KNG", "PNT"];
var guestId = [001, 002, 003];
var guestName = ["Patriots", "Eagles", "Rams"];
var customerRoom = [["Twin", "Queen", "King"], ["Double", "King"], ["King", "Queen", "Twin"]];
var roomAmount = [[5, 10, 15], [8, 4], [20]]
var roomPrice = [[100, 200, 300], [400, 500], [150]];


function totalsReport() {
    for (var i = 0; i < guestId.length; i++) {
        console.log("");
        console.log('Customer ID:', guestId[i], "Customer Name: ", guestName[i]);
        for (var j = 0; j < customerRoom[i].length; j++) {
            console.log("Rents", roomAmount[i][j], "rooms of", customerRoom[i][j]), "total value of:", roomPrice[i][j] * customerRoom[i][j];
        }
}
    }
           
      function grandTotalsReport() {
          
          var grandTotal = 0;
          
     for (var i = 0; i <guestId.length; i++) {
         console.log("");
         console.log('Customer ID:', guestId[i], "Customer Name:", guestName[i]);
         
         
         for (var j = 0; j < customerRoom[i].length; j++) {
             var total = roomPrice[i][j] * customerRoom[i][j];
             console.log("Rents", customerRoom[i][j], "room for a total value of:", total);
             grandTotal += total;
         }
         
     }
     console.log("The grand total portfolio value is:", grandTotal);
     
      }  
        
        
    
    


