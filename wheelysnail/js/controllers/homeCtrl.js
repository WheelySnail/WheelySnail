'use strict';

myApp.controller('homeCtrl',
	function homeCtrl($scope) {
        $scope.pictures = [
            			{src: 'Images/burrs.gif', alt: 'Burrs', categories: 'creatures'},
             			{src: 'Images/expandable-sharks.gif', alt: 'Expandable sharks', categories: 'scientists'},
            			{src: 'Images/experiment-2.gif', alt: 'Experiment 2', categories: 'experiments'},
            			{src: 'Images/fleeing-camel.gif', alt: 'Fleeing camel', categories: 'creatures'},
            			{src: 'Images/griffin.gif', alt: 'Griffin', categories: 'mythical'},
            			{src: 'Images/mating-display-1.gif', alt: 'Mating display 1', categories: 'creatures'},
            			{src: 'Images/mating-display-2.gif', alt: 'Mating display 2', categories: 'creatures'},
            			{src: 'Images/no-can-opener.gif', alt: 'No can opener', categories: 'creatures'},
            			{src: 'Images/peas.gif', alt: 'Peas', categories: 'people'},
            			{src: 'Images/sea-horses.gif', alt: 'Sea horses', categories: 'creatures'},
            			{src: 'Images/willesden-junction.gif', alt: 'Willesden Junction', categories: 'unclassified'} 
       ];
       
        $scope.filters = '';
        
        $scope.activecategory='';
        
		$scope.changefilter = function(value) {
		$scope.filters = value;
		$scope.activecategory = value;
		}
	 }
);


myApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      sortedOutput = sortByKey(output, keyname);
	return sortedOutput;
   };
   
   function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
});

