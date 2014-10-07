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
    window.onload = function(){
      alert("work in progress \nworks best in google chrome\nthx\nlove, ezra"); 
    }
  	$("nav a").click(function(){
      $(".enter").remove();
      var enter = document.createElement("a");
      enter.className = "enter header"
      enter.href = "/" + this.innerHTML;
      enter.innerHTML = "Enter " + (this.innerHTML).charAt(0).toUpperCase() + (this.innerHTML).slice(1);

      if(this.innerHTML == "beautiful time"){
        enter.href = "/beautiful_time";
        enter.innerHTML = "Enter Beautiful Time"
      }
      enter.style.color = "white";
      enter.style.position = "absolute";
      enter.style.bottom = "0";
      enter.style.left = "0";
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
                if(this.id == id){
                  $(this).removeClass("hidden");
                  // $(this).removeClass("animated fadeInUpBig");
                  $(this).addClass("animated fadeInUpBig");
                }
             });
             $("#back").removeClass("hidden");
             $("#back").removeClass("animated fadeOut");
             $("#back").addClass("animated fadeIn");
              $('.container').append(enter);

             $(".enter").addClass("animated fadeIn");
    			});
        }
  		})
  	})
  	$("#back").click(function(){
      $("nav a").removeClass("atTheTop");
  		$("nav a").removeClass("animated fadeOutDownBig fadeInDownBig fadeOutUpBig fadeInUpBig");
  		$("nav a").addClass("animated fadeIn");
  		$("article").addClass("hidden");
  		$("#back").addClass("animated fadeOut");
      $(".enter").addClass("animated fadeOut");
  	})
  });
