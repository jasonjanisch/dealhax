angular
  .module('deals')
  .controller('dealsController', deals);

deals.$inject = ['$http', 'Deals'];

function deals($http, Deals) {
 var vm = this;

 var response = Deals.get();

 response.then(function(response) {
   var data = response.data;
   var groups = [];

   for (var i = 0; i < 10; i++) {
     var group = {};
     group.titles = [];
     group.score = i * 10;
     groups.push(group);
   }

   data.forEach(function(item) {
     var score = Math.ceil(item.metacriticScore / 10) * 10;
     groups.forEach(function(group) {
       if (score === group.score) {
         group.titles.push(item);
       }
     });
   });

   vm.groups = groups;
 });
}
