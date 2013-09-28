function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
  		height: '390',
  		width: '640',
  		videoId: 'QurX1BB1Ftc',
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
});