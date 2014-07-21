Package.describe({
  summary: 'Packed ical parser'
});

Package.on_use(function (api) {
   api.add_files("ijp-0.6.js", ['client', 'server']);
   api.export("icalParser");
});
