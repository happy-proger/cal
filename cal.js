Days = new Meteor.Collection("days");
    
        Date.prototype.format = function () {
            return this.getFullYear() + '-' + ('0' + (this.getMonth() + 1)).slice(-2) + '-' + ('0' + this.getDate()).slice(-2)
        }
/*Router.map(function () {
  this.route('index', {  // создается маршрут к /, который будет рендерить шаблон index
  //  template: "month",
    path: '/'
  });
  this.route('files');
  this.route('days');
  this.route('month');// создается маршрут к /login, который будет рендерить шаблон login
  this.route('day_edit');
});
*/

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "public/uploads"})]
});


console.log(JSON.stringify(Images));
