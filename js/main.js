
var gl;
$(document).ready(function() {
	gl = new GifLoader();

	gl.load( $(".gif")[0], "./img/logo.gif" );

	$("#logo").click(function(event){
		event.preventDefault();

		$("html,body").animate({
			scrollTop: $(document).height()
		})
	});
});