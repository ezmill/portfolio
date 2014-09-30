// 'use strict';

// /**
//  * @ngdoc function
//  * @name portfolio2App.controller:AboutCtrl
//  * @description
//  * # AboutCtrl
//  * Controller of the portfolio2App
//  */


// var gl;
angular.module('portfolio2App')
  .controller('SyrupCtrl', function ($scope) {
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

  	var close = document.getElementById("syrup");
  	close.onclick = function(){
  		document.getElementsByClassName("center").remove();
  		document.getElementsByClassName("fa").remove();
  	}
// 	var baseTexture, canvas, fbo, feedback;
// 	var baseProgram, feedbackProgram;
// 	var baseVs, baseFs, feedbackFs;
// 	var camTex;
// 	var videoLoaded = false;
// 	var firstFrame = true;
// 	var delay = 0;
// 	var mapMouseX, mapMouseY, mouseX, mouseY;


// 	var video=document.createElement('video');
//   	$scope.initWebGL = function(){
//   		gl = null;

//   		canvas = document.getElementById("canvas");
//   		canvas.width = window.innerWidth;
// 		canvas.height = window.innerHeight;
//   		gl = getWebGLContext(canvas);
//   		// console.log(gl);
//   	}
//   	$scope.initFbosAndShaders = function(){
// 		baseTexture = new pxBB();
// 		fbo = new pxFbo();
// 		feedback = new pxFbo()
// 		//set up fbo's
// 		fbo.allocate(canvas.width, canvas.height);
// 		feedback.allocate(canvas.width, canvas.height)
// 		//create shaders
// 		baseVs = createShaderFromScriptElement(gl, "baseVs");
// 		baseFs = createShaderFromScriptElement(gl, "baseFs");
// 		feedbackFs = createShaderFromScriptElement(gl, "feedbackFs")
// 		//create program
// 		baseProgram = createProgram(gl, [baseVs, baseFs]);
// 		feedbackProgram = createProgram(gl, [baseVs, feedbackFs]);
//   	}
//   	$scope.getCamAsTexture = function(){
//   		camTex = createAndSetupTexture(gl);
// 		camTex.image = video;
// 		gl.bindTexture(gl.TEXTURE_2D, camTex);
// 		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, camTex.image);
//   	}
//   	var time;
//   	$scope.loop = function(){
//   		window.requestAnimationFrame($scope.loop);

// 		if(videoLoaded){

// 		  if(delay < 50){
// 		    //fill our feedback fbo with at least one frame of camera data
// 		    $scope.getNewImg();
// 		    delay++;
// 		  }
// 		  time += 0.007;
		 
// 		 //draw feedback.texture into fbo
// 		 fbo.start();
// 		 gl.useProgram(baseProgram);
// 		 gl.uniform2f(gl.getUniformLocation(baseProgram,"res"), canvas.width, canvas.height);
// 		  gl.uniform1f(gl.getUniformLocation(baseProgram, "time"), time);

// 		  gl.useProgram(feedbackProgram);
// 		  gl.uniform2f(gl.getUniformLocation(feedbackProgram,"res"), canvas.width, canvas.height);
// 		  gl.uniform1f(gl.getUniformLocation(feedbackProgram, "time"), time);

// 		  gl.uniform1f(gl.getUniformLocation(feedbackProgram, "step_w"), 1.0/canvas.width);
// 		  gl.uniform1f(gl.getUniformLocation(feedbackProgram, "step_h"), 1.0/canvas.height);
// 		  gl.uniform1fv(gl.getUniformLocation(feedbackProgram, "kernel"),[0,-1,0,-1,7,-1, 0,-1,0.2]);
// 		  gl.uniform1fv(gl.getUniformLocation(feedbackProgram, "kernel2"),[-1, -1, -1, -1, 16, -1, -1, -1, -1]);
// 		  gl.uniform1fv(gl.getUniformLocation(feedbackProgram, "kernel3"), [1, 2, 1, 2, 4, 2, 1, 2, 1]);
// 		    gl.uniform1f(gl.getUniformLocation(feedbackProgram, "mouseX"), mapMouseX);
// 		  gl.uniform1f(gl.getUniformLocation(feedbackProgram, "mouseY"), mapMouseY);


// 		  feedback.draw(feedbackProgram);

// 		 //return fbo to itself
// 		 feedback.start();
// 		  fbo.draw(baseProgram);

// 		 //calling bindFramebuffer with null will draw to the screen
// 		 gl.bindFramebuffer(gl.FRAMEBUFFER, null);
// 		  feedback.draw(baseProgram);

// 		 //keep updating camtex in case we want another frame
// 		 gl.bindTexture(gl.TEXTURE_2D, camTex);
// 		 gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, camTex.image);
// 		}//end of videoLoaded
//   	}
//   	$scope.getNewImg = function(){
//   		feedback.start();
// 	    baseTexture.draw(baseProgram, camTex);
//   	}
//   	$scope.map = function(value,max,minrange,maxrange){
//   		return ((max-value)/(max))*(maxrange-minrange)+minrange;
//   	}
//   	$scope.handleVideo = function(stream){
//   		var url = window.URL || window.webkitURL;
//         video.src = url ? url.createObjectURL(stream) : stream;
//         video.play();
//         //video.src = window.URL.createObjectURL(stream);
//         videoLoaded = true;
//   	}
//   	$scope.videoError = function(){
//   		alert("There seems to be something wrong with your webcam :(");
//   	}
//   	$scope.onDocumentMouseMove = function(){
//   		mouseX = (event.clientX );
// 	    mouseY = (event.clientY );
// 	    mapMouseX = $scope.map(mouseX, window.innerWidth, -1.0,1.0);
// 	    mapMouseY = $scope.map(mouseY, window.innerHeight, -1.0,1.0);
//   	}
//   	$scope.onDocumentMouseDown = function(){
//   		$scope.getNewImg();
//   	}

//     $scope.initWebGL();
//     $scope.initFbosAndShaders();
//     $scope.getCamAsTexture();
//     $scope.loop();
// 	document.addEventListener('mousemove', $scope.onDocumentMouseMove, false);
// 	document.addEventListener('mousedown', $scope.onDocumentMouseDown, false);
//     navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
//     if (navigator.getUserMedia) {       
//         navigator.getUserMedia({video: true, audio: false}, $scope.handleVideo, $scope.videoError);
//     }

  });
//   