import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.newChamber + '&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var committees = [];
     responseJSON.results.forEach(function(committee) {
       committees.push(committee);
     });
     return committees;
   });
  }
});
