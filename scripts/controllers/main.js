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
  	$("nav a").click(function(){
  		// $(this).addClass("animated fadeOutUpBig");
  		// $("#two").addClass("animated fadeOutDownBig");
  		// $("#three").addClass("animated fadeOutDownBig");
  		// $("#four").addClass("animated fadeOutDownBig");
  		// $("#five").addClass("animated fadeOutDownBig");
  		// $("#six").addClass("animated fadeOutDownBig");
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
		// for(var i = 0; i < $('nav a').length; i++){
		// 	console.log($('nav a')[i]);
		// 	if($('nav a').index() == $(this).index()){
		// 		$('nav a').index().addClass("animated fadeOutUpBig");
		// 	} else{
		// 		$('nav a').index().addClass("animated fadeOutDownBig");
		// 	}
		// }
		var id = this.id;
		// console.log(id);
		$('nav a').each(function(index){
			// console.log($('nav a')[index].id);
			// console.log(this.id);
			if(this.id <= id){
				$(this).addClass("animated fadeOutUpBig");
			} else{
				$(this).addClass("animated fadeOutDownBig");
			}
			if(this.id == id){
  			$(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				   $(this).removeClass("animated fadeOutUpBig");
           $(this).addClass("animated fadeInDownBig atTheTop");
           $('article').each(function(index){
              console.log(id);
              if(this.id == id){
                $(this).removeClass("hidden");
                // $(this).removeClass("animated fadeInUpBig");
                $(this).addClass("animated fadeInUpBig");
              }
           });
           $("#back").removeClass("hidden");
           $("#back").removeClass("animated fadeOut");
           $("#back").addClass("animated fadeIn");
  			});
      }
		})

  		// $('#one').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  		// 	$(this).removeClass("animated fadeOutUpBig");
  		// 	$(this).addClass("animated fadeInDownBig");
  		// 	$("#one-text").removeClass("hidden");
  		// 	$("#one-text").addClass("animated fadeInUpBig");
  		// 	$("#back").removeClass("hidden");
  		// 	$("#back").removeClass("animated fadeOut");
  		// 	$("#back").addClass("animated fadeIn");
  		// 	// $(this).style.top = 0;
  		// });
  	})
  	$("#back").click(function(){
      $("nav a").removeClass("atTheTop");
  		$("nav a").removeClass("animated fadeOutDownBig fadeInDownBig fadeOutUpBig fadeInUpBig");
  		$("nav a").addClass("animated fadeIn");
  		$("article").addClass("hidden");
  		$("#back").addClass("animated fadeOut");
  	})
  });
