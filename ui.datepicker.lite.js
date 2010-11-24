/*
 * jQuery UI Datepicker Lite
 *
 * Copyright 2010 Marc Grabanski
 * Licensed under the MIT license
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 *	jquery.ui.button.js
 *	jquery.tmpl.js
 *  jquery.ui.datepicker.html
 */
(function( $, undefined ) {

$.widget( "ui.datepicker", {
	options: {
	},
	_create: function() {
		var self = this,
			template;
		self.element
			.bind( "mousedown.datepicker", function( event ) {

			})
			.bind( "keydown.datepicker", function( event ) {

			});
			
		$.get("../ui.datepicker.lite.html", function(data){
			template = data;
		});
	},
	_setOption: function( key, value ) {
		$.Widget.prototype._setOption.apply( this, arguments );
		if ( key === "" ) {
		}
	},
	open: function( event ) {
	},
	close: function( event ) {
	},
	destroy: function() {
	},
	widget: function() {
		return this.element;
	}
});

}( jQuery ));