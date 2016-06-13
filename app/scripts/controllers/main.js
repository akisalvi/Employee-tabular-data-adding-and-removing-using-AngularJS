'use strict';


/**
 * @ngdoc function
 * @name mytableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytableApp
 */

angular.module('mytableApp')
.controller('MainCtrl', function($scope) {
    
	$scope.employees= [
    { 'name':'EMP NAME 1',
			
       'designation':
'Director'
,
			       'dateOfJoining':'12-12-2016T00:00:00',
			       'email':'emp1@company.com',
			       'skills':'Management,Process Training,Recruitment',
			       'status':'active',
			       'remarks':'He is one of the founders of the company' 
			     },
			     { 'name':'EMP NAME 2',
			
       'designation':
'Developer'
,
			       'dateOfJoining':'12-12-2016T00:00:00',
			       'email':'emp2@company.com',
			       'skills':'Java,HTML,CSS',
			       'status':'left',
			       'remarks':'Terminated due to copyright infringement' 
			     },];

	$scope.addRow = function(){		
	$scope.employees.push({ 'name':$scope.name, 'designation': $scope.designation, 'email':$scope.email, 'skills': $scope.skills, 'status':$scope.status, 'remarks': $scope.remarks });
	$scope.name='';
	$scope.designation='';
	$scope.email='';
	$scope.skills='';
	$scope.status='';
	$scope.remarks='';
	};

	$scope.removeRow=function(name){
	var index=-1;
	var comArr=eval($scope.employees);
	for(var i=0; i < comArr.length; i++){
		if(comArr[i].name === name){
			index=i;
			break;
		}
	}
	
	$scope.employees.splice(index,1);
	};
	


});