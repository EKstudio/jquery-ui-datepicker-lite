jQuery UI Datepicker Lite
=============

A lightweight alternative to the jQuery UI Datepicker. This is a total rewrite of the datepicker component intended for replacement of the existing datepicker that comes with jQuery UI.

Design Goals
-------------

The first goal with this is to get a datepicker rendering with the least amount of code as possible using [clean calendar](https://github.com/1Marc/javascript-clean-calendar) as the base, then leveraging other ui plugins/utilities and the official templating and globalization plugins.

Templating and Events
-------------

Use ajax to get the template and then have only one mousedown event on the datepicker (like autocomplete) and then determine the user's intended action based on if the element clicked is inside the element has a certain class or attribute. That way the entire calendar template could be changed and the events are setup based on selectors rather than previously coupled tightly with certain elements. Theoretically the view could be totally decoupled from the events (linked together from classes or data attributes).

Globalization
-------------

It is really amazing that this time around we have the globalization plugin. We will need to leverage that and build a simple date object on top of it that the datepicker can use internally to move around the dates. Lots of times people just need the date piece, so creating a ui.date.js utility that uses globalization with a tiny bit simpler API that people can actually use. The idea is that ui.date.js would be the layer in between the globalization and the datepicker to handle the dates just like I was going to do with calendar engine but instead we can just leverage the work already done in this area but put a tiny, lightweight API on top of it that deals more specifically with the date piece.