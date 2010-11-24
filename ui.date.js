/*
 * jQuery UI Datepicker Lite
 *
 * Copyright 2010 Marc Grabanski
 * Licensed under the MIT license
 *
 *
 * Depends:
 *	jquery.glob.js
 */
(function( $, undefined ) {
	
if (typeof($.culture) == "undefined") {
	$.culture = $.cultures["default"];
}

$.date = function ( datestring, formatstring ) {
	var format = formatstring ? formatstring : $.culture.calendar.patterns.d,
		date = datestring ? $.parseDate(datestring, format) : new Date();
	return {
		format: function( formatstring ) {
			if (formatstring) {
				format = formatstring;
				return this;
			}
			return format;
		},
		adjust: function( period, offset ) {
			var month = period == "M" ? date.getMonth() + offset : date.getMonth(), 
				year = period == "Y" ? date.getFullYear() + offset : date.getFullYear();
			if (month > 11) {
				month = month - 12;
				year++;
			}
			if (month < 0) {
				month = month + 11;
				year--;
			}
			date = new Date(year, month, date.getDate());
			return this;
		},
		date: function() {
			return date;
		},
		print: function( formatstring ) {
			return $.format(date, formatstring ? formatstring : format);
		},
		calendar: function() {
			return $.culture.calendar;
		}
	}
}

}( jQuery ));