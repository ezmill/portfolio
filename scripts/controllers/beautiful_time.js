angular.module('portfolio2App')
  .controller('Beautiful_TimeCtrl', function ($scope) {
	Element.prototype.remove = function() {
	    this.parentElement.removeChild(this);
	}
	NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	    for(var i = 0, len = this.length; i < len; i++) {
	        if(this[i] && this[i].parentElement) {
	            this[i].parentElement.removeChild(this[i]);
	        }
	    }
	}

  	var close = document.getElementById("close");
  	close.onclick = function(){
  		document.getElementsByClassName("center").remove();
  		document.getElementsByClassName("fa").remove();
  	}
});