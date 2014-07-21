        
        if (Meteor.isClient) {
          Template.month.getArray = function () {
            var date = new Date();
            var cMonth = date.getMonth();
            var dotw = date.getDay();
            date.setDate(1);
            var result = [];
            do {
                var dp = {
                    year:date.getYear(),
                    month:date.getMonth(),
                    dotw:date.getDay(),
                    dotm:date.getDate(),
                    formatted:date.format()
                }
                result.push(dp);
                date.setDate(date.getDate() + 1);
            }
            while (cMonth == date.getMonth());
            return result;
          };
          
          Template.month.getArrayByWeek = function () {
              var array = Template.month.getArray();
              var list = [1,2,3,4,5,6,0];
              //на какой день недели приходится первое число
              var first = (array[0].dotw == 0 ? 7 : array[0].dotw);
              
              console.log(first)
              if (first == 0) {
                  first = 7
              } 
              var result = [];
              
              while (first > 1)
              {
                  first -=1;
                  array.unshift({year:"^_^"});
              }
              //for (var i=array.length(); i>0; i-=chunk)
              var i = 0, chunk = 7,result= [];
              do {
                  result.push(array.slice(i,i+chunk));
                  i+=chunk;
              } while(i<array.length)
              
              return result;
          }
          
          Template.month.events({
            'click .day' : function(e) {
                var id = e.currentTarget.id;
                Session.set("edit",id)
                //alert("day loaded! "+ id);
                $('#Modal').modal('show')
            }
        });
        Template.day_edit.date = function(){
            return Session.get("edit");
        }
            Template.days.list = function(){
                return Days.find();
            }
            
        
        
    Template.files.events({
    'dropped .imageArea': FS.EventHandlers.insertFiles(Images, {
      metadata: function (fileObj) {
        return {
          owner: "anon",
          foo: "bar"
        };
      },
      after: function (error, fileObj) {
        console.log("Inserted", fileObj.name);
      }
    }),
    'change #imageInput': FS.EventHandlers.insertFiles(Images, {
      metadata: function (fileObj) {
        return {
          owner: "anon",
          foo: "bar"
        };
      },
      after: function (error, fileObj) {
        console.log("Inserted", fileObj.name);
      }
    }),
});
        
        }
        
        var ical = "BEGIN:VCALENDAR"+"\n"+
"VERSION:2.0"+"\n"+
"PRODID:-//Oleh Demchenko//Vaisnava Reminder v0.65b//EN"+"\n"+
"CALSCALE:GREGORIAN"+"\n"+
"METHOD:PUBLISH"+"\n"+
"X-WR-CALNAME:Vaisnava Reminder Calendar"+"\n"+
"BEGIN:VEVENT"+"\n"+
"DTSTART;VALUE=DATE:20140720"+"\n"+
"DTEND;VALUE=DATE:20140721"+"\n"+
"UID:20140717T1600@vreminder-0"+"\n"+
"DTSTAMP:20140717T160000Z"+"\n"+
"TRANSP:TRANSPARENT"+"\n"+
"SUMMARY:Учреждение ISKCON в Нью Йорке"+"\n"+
"END:VEVENT"+"\n"+
"BEGIN:VEVENT"+"\n"+
"DTSTART;VALUE=DATE:20140722"+"\n"+
"DTEND;VALUE=DATE:20140723"+"\n"+
"SUMMARY:Пост на Камика Экадаши"+"\n"+
"UID:20140717T1600@vreminder-1"+"\n"+
"DTSTAMP:20140717T160000Z"+"\n"+
"TRANSP:TRANSPARENT"+"\n"+
"PRIORITY:1"+"\n"+
"BEGIN:VALARM"+"\n"+
"TRIGGER:-P1D"+"\n"+
"ACTION:DISPLAY"+"\n"+
"SUMMARY:Завтра Шуддха Экадаши"+"\n"+
"END:VALARM"+"\n"+
"END:VEVENT"+"\n"+
"BEGIN:VEVENT"+"\n"+
"DTSTART;VALUE=DATE:20140723T051800Z"+"\n"+
"DTEND;VALUE=DATE:20140723T105000Z"+"\n"+
"SUMMARY:Прервать пост\nс 05:18 до 10:50"+"\n"+
"UID:20140717T1600@vreminder-2"+"\n"+
"DTSTAMP:20140717T160000Z"+"\n"+
"TRANSP:TRANSPARENT"+"\n"+
"PRIORITY:1"+"\n"+
"BEGIN:VALARM"+"\n"+
"TRIGGER:-PT15M"+"\n"+
"ACTION:DISPLAY"+"\n"+
"SUMMARY:Прервать пост с 05:18 до 10:50"+"\n"+
"END:VALARM"+"\n"+
"END:VEVENT"+"\n"+
"BEGIN:VEVENT"+"\n"+
"DTSTART;VALUE=DATE:20140731"+"\n"+
"DTEND;VALUE=DATE:20140801"+"\n"+
"UID:20140717T1600@vreminder-3"+"\n"+
"DTSTAMP:20140717T160000Z"+"\n"+
"TRANSP:TRANSPARENT"+"\n"+
"SUMMARY:Уход Шри Рагхунанданы Тхакура"+"\n"+
"END:VEVENT"+"\n"+
"BEGIN:VEVENT"+"\n"+
"DTSTART;VALUE=DATE:20140731"+"\n"+
"DTEND;VALUE=DATE:20140801"+"\n"+
"UID:20140717T1600@vreminder-4"+"\n"+
"DTSTAMP:20140717T160000Z"+"\n"+
"TRANSP:TRANSPARENT"+"\n"+
"SUMMARY:Уход Шри Вамшидаса Бабаджи"+"\n"+
"END:VEVENT"+"\n"+
"END:VCALENDAR";
        icalParser.parseIcal(ical);
        console.log(JSON.stringify(icalParser.ical.events))
        
        