
module.exports = [{
   description:	'Test Owntracks connection',
   method:      'POST',
   path:        '/test/broker/',
   requires_authorization: true,
   role: 'owner',
   fn: function(callback, args) {
      Homey.log("");
      Homey.log("API: Incoming POST on /set/broker/");
      Homey.app.testBroker(callback, args);
      callback(callback, args);
   }
},
{
   description:	'Notify on settings changed',
   method:      'POST',
   path:        '/test/settingschange/',
   requires_authorization: true,
   role: 'owner',
   fn: function(callback, args) {
      Homey.log("");
      Homey.log("API: Incoming POST on /test/settingschange/");
      Homey.app.changedSettings(callback, args);
      callback(callback, args);
   }
},
{
   description:	'Show latst loglines',
   method:      'GET',
   path:        '/test/getloglines/',
   requires_authorization: true,
   role: 'owner',
   fn: function(callback, args) {
      Homey.log("");
      Homey.log("API: Incoming POST on /test/getloglines/");
      Homey.app.getLogLines(callback, args);
      callback(callback, args);
   }
},
{
   description:	'Get Array with user info',
   method:      'GET',
   path:        '/test/getUserArray/',
   requires_authorization: true,
   role: 'owner',
   fn: function(callback, args) {
      Homey.log("");
      Homey.log("API: Incoming POST on /test/getUserArray/");
      Homey.app.getUserArray(callback, args);
      callback(callback, args);
   }
},
{
   description:	'Purge userdata',
   method:      'GET',
   path:        '/test/purgeUserData/',
   requires_authorization: true,
   role: 'owner',
   fn: function(callback, args) {
      Homey.log("");
      Homey.log("API: Incoming POST on /test/purgeUserData/");
      Homey.app.purgeUserData(callback, args);
      callback(callback, args);
   }
}]




