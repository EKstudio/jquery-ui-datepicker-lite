jQuery UI Datepicker Lite
=============

A lightweight alternative to the jQuery UI Datepicker. This is a total rewrite of the datepicker component intended for replacement of the existing datepicker that comes with jQuery UI.

Design Goals
-------------

The first goal with this is to get a datepicker rendering with the least amount of code as possible and then leveraging UI components and official plugins like jQuery templating and globalization.

Templating and Events
-------------

Use ajax to get the template and then have only one mousedown event on the datepicker (like autocomplete) and then determine the user's intended action based on if the element clicked is inside the element has a certain class or attribute. That way the entire calendar template could be changed and the events are setup based on selectors rather than previously coupled tightly with certain elements. Theoretically the view could be totally decoupled from the events (linked together from classes or data attributes).

Globalization
-------------

The jQuery Date plugin sits on top of the globalization plugin to provide a jQuery-esk API for interacting with a new globalized date object.

var date = $.date(); // replaces new Date()