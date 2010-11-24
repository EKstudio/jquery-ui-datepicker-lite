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
 *	jquery.date.js
 *	jquery.tmpl.js
 *  jquery.ui.datepicker.html
 */
(function( $, undefined ) {

// production version will have the default template compiled into a string
// then if you want to override the template you will be able to supply selector to get the template
var templates;
$.get("../ui.datepicker.lite.html", function(data){
	templates = data;
});

$.widget( "ui.datepicker", {
	options: {
	},
	_create: function() {
		var self = this;
		self.element
			.bind( "mousedown.datepicker", function( event ) {

			})
			.bind( "keydown.datepicker", function( event ) {

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