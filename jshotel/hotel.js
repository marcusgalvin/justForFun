var jsHotel = {
    
    hotelName:  "Javascript Hotel",
    hotelMotto: "We're The Object of Your Desire!",
    availableRooms: [101, 102, 103, 104, 105, 106],
    bookedRooms: [],
    roomPrice: 35, 
    
    bookRoom: function() {
       
    console.log("Congrats, you've just booked room number:", (this.bookedRooms = this.bookedRooms.concat(this.availableRooms.shift()))[this.bookedRooms.length-1]);
    console.log("The remaining available rooms are:", this.availableRooms );
    console.log("The available rooms are:", this.availableRooms);
    },
    
    notBookedRooms: function() 
    {
        console.log("The remaining rooms are:", this.availableRooms);
    },
    
    howManyRooms: function()
    {
        var roomCount = this.availableRooms.length;
        console.log("Total Rooms available:", roomCount);
    }
    
    
};


