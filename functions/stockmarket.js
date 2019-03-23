var marketName = "nasdaq";
var stockSymbol = ["MSFT", "AAPL", "GOOG", "AMZN", "NFLX"];
var stockName = ["Microsoft", "Apple", "Google", "Amazon", "Netflix"];

var customerId = [001, 002, 003];
var customerName = ["Raul", "Daenerys", "Sora" ];
var customerStocks = [["MSFT", "GOOG", "AMZN"], ["AAPL", "NFLX"], ["AMZN", "GOOG", "MSFT"] ];
var customerShares = [[5, 10, 15], [8, 4], [20]];
var stockPrice = [[105, 1095, 1588], [170, 347], [1588]];


  function totalsReport() {
   for (var i = 0; i < customerId.length; i++) {
    console.log("");
    console.log('Customer ID:', customerId[i], "Customer Name: ", customerName[i]);
        for (var j = 0; j < customerStocks[i].length; j++) {
            console.log("Owns", customerShares[i][j], "shares of", customerStocks[i][j], "total value of:", stockPrice[i][j] * customerShares[i][j]);
        }
}   
  }  
  
    function grandTotalsReport() {
        
          var grandTotal = 0;
          
   for (var i = 0; i < customerId.length; i++) {
    console.log("");
    console.log('Customer ID:', customerId[i], "Customer Name: ", customerName[i]);
    
    
  
        for (var j = 0; j < customerStocks[i].length; j++) {
           var total = stockPrice[i][j] * customerShares[i][j];
            console.log("Owns", customerShares[i][j], "shares of", customerStocks[i][j], "total value of:", total);
            grandTotal += total;
        }
}   
    
   
  
        
    
    
    
    
      
  console.log("The grand total portfolio value is:", grandTotal);
  
  
  
    }
    
    
    
    
    
    
  //totalsReport();
  