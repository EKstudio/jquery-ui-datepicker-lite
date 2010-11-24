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

function daysInMonth(year, month) {
	
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