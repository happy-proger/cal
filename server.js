if (Meteor.isServer) {
    
  Meteor.startup(function () {
    // code to run on server at startup
    if (Days.find().count() === 0) {
        var date = new Date();
        var cMonth = date.getMonth();
        date.setDate(1);
        var result = [];
        var i=0;
        
        do {
            var day = {
                date : "1",
                type : "1",
                fast_start:"1",
                fast_end:"1",
                cit_id:"1"
            }
            Days.insert(
                    day
            )
            date.setDate(date.getDate() + 1);
            i+=1;
            }
            while (cMonth == date.getMonth());
   
    }
  });
  
}