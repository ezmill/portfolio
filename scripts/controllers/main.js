'use strict';

/**
 * @ngdoc function
 * @name portfolio2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolio2App
 */
angular.module('portfolio2App')
  .controller('MainCtrl', function ($scope) {
  	$("#one").click(function(){
  		$(this).addClass("animated fadeOutUpBig");
  		$("#two").addClass("animated fadeOutDownBig");
  		$("#three").addClass("animated fadeOutDownBig");
  		$("#four").addClass("animated fadeOutDownBig");
  		$("#five").addClass("animated fadeOutDownBig");
  		$("#six").addClass("animated fadeOutDownBig");
  		// $('#two').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  		// 	$(this).hide();
  		// });
  		// $('#three').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  		// 	// $(this).hide();
  		// });
  		// $('#four').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  		// 	$(this).hide();
  		// });
  		// $('#five').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  		// 	$(this).hide();
  		// });
  		// $('#six').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  		// 	$(this).hide();
  		// });  		
  		$('#one').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  			$(this).removeClass("animated fadeOutUpBig");
  			$(this).addClass("animated fadeInDownBig");
  			$("#one-text").removeClass("hidden");
  			$("#one-text").addClass("animated fadeInUpBig");
  			$("#back").removeClass("hidden");
  			$("#back").removeClass("animated fadeOut");
  			$("#back").addClass("animated fadeIn");
  			// $(this).style.top = 0;
  		});
  	})
  	$("#back").click(function(){
  		$("nav a").removeClass("animated fadeOutDownBig fadeInDownBig fadeOutUpBig fadeInUpBig");
  		$("nav a").addClass("animated fadeIn");
  		$("#one-text").addClass("hidden");
  		$("#back").addClass("animated fadeOut");
  	})
  });
