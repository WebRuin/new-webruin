/*
	Tessellate by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	/*!
    loadCSS: load a CSS file asynchronously.
    [c]2014 @scottjehl, Filament Group, Inc.
    Licensed MIT
    */
  function loadCSS( href, before, media ){
      "use strict";
      var ss = window.document.createElement( "link" );
      var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
      var sheets = window.document.styleSheets;
      ss.rel = "stylesheet";
      ss.href = href;
      ss.media = "only x";
      ref.parentNode.insertBefore( ss, ref );
      function toggleMedia(){
          var defined;
          for( var i = 0; i < sheets.length; i++ ){
              if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
                  defined = true;
              }
          }
          if( defined ){
              ss.media = media || "all";
          }
          else {
              setTimeout( toggleMedia );
          }
      }
      toggleMedia();
      return ss;
  }

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly links.
			$('.scrolly').scrolly();

		// Prioritize "important" elements on narrow.
			skel.on('+narrow -narrow', function() {
				$.prioritize(
					'.important\\28 narrow\\29',
					skel.breakpoint('narrow').active
				);
			});

	});

})(jQuery);
