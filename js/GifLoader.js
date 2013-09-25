GifLoader = function() {
	self = this;

	this.load = function( _el, _gifpath, _onLoad ) {
		var image = new Image();
		image.onload = function(){
			this.width = $(_el).width();
			$(this).insertAfter(_el);
			$(_el).remove();
		}
		image.src = _gifpath;
	}
}