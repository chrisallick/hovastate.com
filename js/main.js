function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
  		height: '390',
  		width: '640',
  		videoId: 'eRMKy0Yn3OI',
  		events: {
    		'onReady': onPlayerReady,
    		'onStateChange': onPlayerStateChange
  		}
	});
}

function onPlayerReady(event) {
	ready = true;
}

function onPlayerStateChange(event) {

}

var gl, player, ready = false;
$(document).ready(function() {
	gl = new GifLoader();

	gl.load( $(".gif")[0], "./img/logo.gif" );

	$("#logo").click(function(event){
		event.preventDefault();

		$("html,body").animate({
			scrollTop: $(document).height()
		}, function() {
			if( ready ) {
				player.playVideo();
			}
		});
	});

	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$("#buttons .bookmarklet").mouseover('fast', function(){
		$("#tips .drag").show().animate({
			opacity: 1,
			bottom: "-58px"
		});
	}).mouseout('100', function(){
		$("#tips .drag").animate({
			opacity: 0,
			bottom: "-50px"
		}, function(){
			$(this).hide();
		});
	});

	$("#buttons .chrome").mouseover('fast', function(){
		$("#tips .install-chrome").show().animate({
			opacity: 1,
			bottom: "-58px"
		});
	}).mouseout('100', function(){
		$("#tips .install-chrome").animate({
			opacity: 0,
			bottom: "-50px"
		}, function() {
			$(this).hide();
		});
	});

	$("#buttons .safari").mouseover('fast', function(){
		$("#tips .install-safari").show().animate({
			opacity: 1,
			bottom: "-58px"
		});
	}).mouseout('100', function(){
		$("#tips .install-safari").animate({
			opacity: 0,
			bottom: "-50px"
		}, function(){
			$(this).hide();
		});
	});

});