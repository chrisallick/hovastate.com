
var gl;
$(document).ready(function() {
	gl = new GifLoader();

	gl.load( $(".gif")[0], "./img/logo.gif" );
});