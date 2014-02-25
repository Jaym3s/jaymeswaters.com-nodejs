var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30733671-1']);
_gaq.push(['_trackPageview']);

$().ready(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

  if ( $.fn.makisu.enabled ) {

    var $maki = $( '.list' );

    console.log(' // Create Makisus');
    $maki.makisu({ selector: 'dd', overlap: 0.6, speed: 0.85 });

    // Open all

    setTimeout(function() {
      $( '.list' ).makisu( 'open' );
    }, 150);

    // Toggle on click

    // $( '.toggle' ).on( 'click', function() {
      // $( '.list' ).makisu( 'toggle' );
    // });

    // Disable all links

    // $( '.demo a' ).click( function( event ) {
      // event.preventDefault();
    // });

  } else {

    $( '.warning' ).show();
  }

});
