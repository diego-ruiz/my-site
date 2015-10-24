//angular simple site setup
var mainsite = angular.module('mainsite', []);
mainsite.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/',{
		templateUrl:'partials/home.html',
		controller: 'maincontentarea'
	}).
	when('/about',{
		templateUrl:'partials/about.html',
		controller: 'maincontentarea'
	}).
	when('/education',{
		templateUrl:'partials/education.html',
		controller: 'maincontentarea'
	}).
	when('/technical-skills',{
		templateUrl:'partials/tech-skills.html',
		controller: 'maincontentarea'
	}).
	when('/experience',{
		templateUrl:'partials/experience.html',
		controller: 'maincontentarea'
	}).
	when('/additional',{
		templateUrl:'partials/additional.html',
		controller: 'maincontentarea'
	}).
	when('/other',{
		templateUrl:'partials/other.html',
		controller: 'maincontentarea'
	}).
	when('/contact',{
		templateUrl:'partials/contact.html',
		controller: 'maincontentarea'
	}).
	when('/projects/love-charley/',{
		templateUrl:'partials/projects/love-charley.html',
		controller: 'maincontentarea'
	}).
	when('/projects/wirefly-mobile/',{
		templateUrl:'partials/projects/wirefly-mobile.html',
		controller: 'maincontentarea'
	}).
	when('/projects/powerbrokers-breakfast/',{
		templateUrl:'partials/projects/powerbrokers-breakfast.html',
		controller: 'maincontentarea'
	}).
	when('/projects/humana-gmail-ad/',{
		templateUrl:'partials/projects/humana-gmail-ad.html',
		controller: 'maincontentarea'
	}).
	when('/projects/hpva-email-template/',{
		templateUrl:'partials/projects/hpva-email-template.html',
		controller: 'maincontentarea'
	}).
	when('/projects/office-depot/',{
		templateUrl:'partials/projects/depot-finder.html',
		controller: 'maincontentarea'
	}).
	when('/projects/rakuten/',{
		templateUrl:'partials/projects/rakuten-finder.html',
		controller: 'maincontentarea'
	}).
	when('/projects/officemax/',{
		templateUrl:'partials/projects/officemax.html',
		controller: 'maincontentarea'
	}).
	when('/projects/wirefly-header/',{
		templateUrl:'partials/projects/wirefly-header.html',
		controller: 'maincontentarea'
	}).
	when('/projects/simplexity/',{
		templateUrl:'partials/projects/simplexity-corp.html',
		controller: 'maincontentarea'
	}).
	otherwise({
		redirectTo:'/',
	});
}]);
mainsite.controller('maincontentarea',['$scope','$routeParams',function($scope,$routeParams){
	//
}]);
mainsite.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
      	var current_link = $location.path();
      	$(".dr10_s_nav_select").val("/#"+current_link);
    })
  }]);
//jquery form submission
$(document).on("submit",".dr10_contact_form",function(e){
	e.preventDefault();
	$.ajax({
		url:$(this).attr("action"),
		data:$(this).serialize(),
		context:$(this),
		success:function(data){
			//console.log(data);
			$(".contact_return_area").html(data);
			$(this).find("input[type=text], textarea").val("");
		}
	});
	return false;
});
//nav js
$(document).ready(function(){	
	$(".dr10_nav_link").click(function(){
		$(".dr10_s_nav_select option[value='"+$(this).attr("href")+"']").prop("selected",true);
	});
	$(".dr10_s_nav_select").change(function(){
		window.location = $(".dr10_nav_link[href='"+$(this).val()+"']").attr("href");
	});
});