/*
 * jQuery Date
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
	var calendar = $.culture.calendar,
		format = formatstring ? formatstring : calendar.patterns.d,
		date = datestring ? $.parseDate(datestring, format) : new Date();
	return {
		setFormat: function( formatstring ) {
			if (formatstring) {
				format = formatstring;
			}	
			return this;
		},
		adjust: function( period, offset ) {
			var day = period == "D" ? date.getDate() + offset : date.getDate(), 
				month = period == "M" ? date.getMonth() + offset : date.getMonth(), 
				year = period == "Y" ? date.getFullYear() + offset : date.getFullYear();
			date = new Date(year, month, day);
			return this;
		},
		daysInMonth: function(year, month){
			year = year || date.getFullYear();
			month = month || date.getMonth();
			return 32 - new Date(year, month, 32).getDate();
		},
		date: function() {
			return date;
		},
		format: function( formatstring ) {
			return $.format(date, formatstring ? formatstring : format);
		},
		calendar: function( newcalendar ) {
			if (newcalendar) {
				calendar = newcalendar;
				return this;
			}
			return calendar;
		}
	}
}

}( jQuery ));