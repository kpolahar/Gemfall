$(document).ready(function( )
{
  // Declare the elements
  banner              = document.getElementById( 'banner' );
  logo                = document.getElementById( 'logo' );
  stars               = document.getElementById( 'stars' );
  star1               = document.getElementById( 'star1' );
  star2               = document.getElementById( 'star2' );
  star3               = document.getElementById( 'star3' );
  rose                = document.getElementById( 'gem_rose' );
  amethyst            = document.getElementById( 'gem_amethyst' );
  pearl               = document.getElementById( 'gem_pearl' );
  ruby                = document.getElementById( 'gem_ruby' );
  sapphire            = document.getElementById( 'gem_sapphire' );
  peridot             = document.getElementById( 'gem_peridot' );
  lapis               = document.getElementById( 'gem_lapis' );
  jasper              = document.getElementById( 'gem_jasper' );
  bismuth             = document.getElementById( 'gem_bismuth' );
  yellowPearl         = document.getElementById( 'gem_yellow_pearl' );
  yellowDiamond       = document.getElementById( 'gem_yellow_diamond' );
  bluePearl           = document.getElementById( 'gem_blue_pearl' );
  blueDiamond         = document.getElementById( 'gem_blue_diamond' );
  garnetRuby          = document.getElementById( 'gem_garnet_ruby' );
  garnetSapphire      = document.getElementById( 'gem_garnet_sapphire' );
  opalAmethyst        = document.getElementById( 'gem_opal_amethyst' );
  opalPearl           = document.getElementById( 'gem_opal_pearl' );
  sugiliteAmethyst    = document.getElementById( 'gem_sugilite_amethyst' );
  sugiliteRuby        = document.getElementById( 'gem_sugilite_ruby' );
  sugiliteSapphire    = document.getElementById( 'gem_sugilite_sapphire' );
  rainbowQuartzRose   = document.getElementById( 'gem_rainbow_quartz_rose' );
  rainbowQuartzPearl  = document.getElementById( 'gem_rainbow_quartz_pearl' );
  sardonyxPearl       = document.getElementById( 'gem_sardonyx_pearl' );
  sardonyxRuby        = document.getElementById( 'gem_sardonyx_ruby' );
  sardonyxSapphire    = document.getElementById( 'gem_sardonyx_sapphire' );
  smokyQuartzRose     = document.getElementById( 'gem_smoky_quartz_rose' );
  smokyQuartzAmethyst = document.getElementById( 'gem_smoky_quartz_amethyst' );
  alexandriteAmethyst = document.getElementById( 'gem_alexandrite_amethyst' );
  alexandritePearl    = document.getElementById( 'gem_alexandrite_pearl' );
  alexandriteRuby     = document.getElementById( 'gem_alexandrite_ruby' );
  alexandriteSapphire = document.getElementById( 'gem_alexandrite_sapphire' );
  malachiteLapis      = document.getElementById( 'gem_malachite_lapis' );
  malachiteJasper     = document.getElementById( 'gem_malachite_jasper' );

  // Add the event listeners
  addListeners( );

  // Begin the animation
  animate( );

  /* Adds appropriate listeners at initialization time */
  function addListeners( )
  {
    // Add main event listeners to logo
    logo.addEventListener( 'click', mainExitClickHandler, false );
    logo.addEventListener( 'mouseover', mainExitHoverHandler );

    // Add mouseover event listeners to gems
    rose.addEventListener( 'mouseover', roseHoverHandler );
    amethyst.addEventListener( 'mouseover', amethystHoverHandler );
    pearl.addEventListener( 'mouseover', pearlHoverHandler );
    ruby.addEventListener( 'mouseover', rubyHoverHandler );
    sapphire.addEventListener( 'mouseover', sapphireHoverHandler );
    peridot.addEventListener( 'mouseover', peridotHoverHandler );
    lapis.addEventListener( 'mouseover', lapisHoverHandler );
    jasper.addEventListener( 'mouseover', jasperHoverHandler );
    bismuth.addEventListener( 'mouseover', bismuthHoverHandler );
    yellowPearl.addEventListener( 'mouseover', yellowPearlHoverHandler );
    yellowDiamond.addEventListener( 'mouseover', yellowDiamondHoverHandler );
    bluePearl.addEventListener( 'mouseover', bluePearlHoverHandler );
    blueDiamond.addEventListener( 'mouseover', blueDiamondHoverHandler );
    garnetRuby.addEventListener( 'mouseover', garnetRubyHoverHandler );
    garnetSapphire.addEventListener( 'mouseover', garnetSapphireHoverHandler );
    opalAmethyst.addEventListener( 'mouseover', opalAmethystHoverHandler );
    opalPearl.addEventListener( 'mouseover', opalPearlHoverHandler );
    sugiliteAmethyst.addEventListener( 'mouseover', sugiliteAmethystHoverHandler );
    sugiliteRuby.addEventListener( 'mouseover', sugiliteRubyHoverHandler );
    sugiliteSapphire.addEventListener( 'mouseover', sugiliteSapphireHoverHandler );
    rainbowQuartzRose.addEventListener( 'mouseover', rainbowQuartzRoseHoverHandler );
    rainbowQuartzPearl.addEventListener( 'mouseover', rainbowQuartzPearlHoverHandler );
    sardonyxPearl.addEventListener( 'mouseover', sardonyxPearlHoverHandler );
    sardonyxRuby.addEventListener( 'mouseover', sardonyxRubyHoverHandler );
    sardonyxSapphire.addEventListener( 'mouseover', sardonyxSapphireHoverHandler );
    smokyQuartzRose.addEventListener( 'mouseover', smokyQuartzRoseHoverHandler );
    smokyQuartzAmethyst.addEventListener( 'mouseover', smokyQuartzAmethystHoverHandler );
    alexandriteAmethyst.addEventListener( 'mouseover', alexandriteAmethystHoverHandler );
    alexandritePearl.addEventListener( 'mouseover', alexandritePearlHoverHandler );
    alexandriteRuby.addEventListener( 'mouseover', alexandriteRubyHoverHandler );
    alexandriteSapphire.addEventListener( 'mouseover', alexandriteSapphireHoverHandler );
    malachiteLapis.addEventListener( 'mouseover', malachiteLapisHoverHandler );
    malachiteJasper.addEventListener( 'mouseover', malachiteJasperHoverHandler );
  }

  /* Set element to pop on hover */
  function pop( element )
  {
      TweenMax.to( element, 0.1, { scaleX: 1.2, scaleY: 1.2, ease: Quad.easeIn } );
      TweenMax.to( element, 0.3, { delay: 0.1, scaleX: 1, scaleY: 1, ease: Quad.easeOut } );
  }

  /* Set element to sparkle on hover */
  function sparkle( element, x, y )
  {
    TweenMax.from( stars, 0.5, { left: x, top: y, alpha: .95, ease: Quad.easeIn } );
    TweenMax.to( stars, 0.5, { left: x, top: y, alpha: 0, ease: Quad.easeOut } );
  }

  /* Set the logo to trigger an exit on click and to pop on hover */
  function mainExitClickHandler( )
  { Enabler.exit( 'mainExit', 'http://www.cartoonnetwork.com/video/steven-universe/' ); }

  function mainExitHoverHandler( )
  { pop( logo ); }

  /* Set gems to react to mouseover */
  function roseHoverHandler( )
  { sparkle( rose, 488, 55 ); }

  function amethystHoverHandler( )
  { sparkle( amethyst, 72, -4 ); }

  function pearlHoverHandler( )
  { sparkle( pearl, 568, -4 ); }

  function rubyHoverHandler( )
  { sparkle( ruby, 68, 54 ); }

  function sapphireHoverHandler( )
  { sparkle( sapphire, 601, -4 ); }

  function peridotHoverHandler( )
  { sparkle( peridot, 548, 30 ); }

  function lapisHoverHandler( )
  { sparkle( lapis, 652, 50 ); }

  function jasperHoverHandler( )
  { sparkle( jasper, 37, 19 ); }

  function bismuthHoverHandler( )
  { sparkle( bismuth, 145, 27 ); }

  function yellowPearlHoverHandler( )
  { sparkle( yellowPearl, 114, 2 ); }

  function yellowDiamondHoverHandler( )
  { sparkle( yellowDiamond, 630, 26 ); }

  function bluePearlHoverHandler( )
  { sparkle( bluePearl, 698, 48 ); }

  function blueDiamondHoverHandler( )
  { sparkle( blueDiamond, 182, 18 ); }

  function garnetRubyHoverHandler( )
  { sparkle( garnetRuby, 533, 66 ); }

  function garnetSapphireHoverHandler( )
  { sparkle( garnetSapphire, 223, 63 ); }

  function opalAmethystHoverHandler( )
  { sparkle( opalAmethyst, 659, 2 ); }

  function opalPearlHoverHandler( )
  { sparkle( opalPearl, 194, 58 ); }

  function sugiliteAmethystHoverHandler( )
  { sparkle( sugiliteAmethyst, 680, 26 ); }

  function sugiliteRubyHoverHandler( )
  { sparkle( sugiliteRuby, 545, -1 ); }

  function sugiliteSapphireHoverHandler( )
  { sparkle( sugiliteSapphire, 120, 57 ); }

  function rainbowQuartzRoseHoverHandler( )
  { sparkle( rainbowQuartzRose, 43, 58); }

  function rainbowQuartzPearlHoverHandler( )
  { sparkle( rainbowQuartzPearl, 690, 4 ); }

  function sardonyxPearlHoverHandler( )
  { sparkle( sardonyxPearl, 10, 14 ); }

  function sardonyxRubyHoverHandler( )
  { sparkle( sardonyxRuby, 682, 64 ); }

  function sardonyxSapphireHoverHandler( )
  { sparkle( sardonyxSapphire, 159, 58 ); }

  function smokyQuartzRoseHoverHandler( )
  { sparkle( smokyQuartzRose, 594, 24 ); }

  function smokyQuartzAmethystHoverHandler( )
  { sparkle( smokyQuartzAmethyst, 57, 23 ); }

  function alexandriteAmethystHoverHandler( )
  { sparkle( alexandriteAmethyst, 5, 56 ); }

  function alexandritePearlHoverHandler( )
  { sparkle( alexandritePearl, 567, 51 ); }

  function alexandriteRubyHoverHandler( )
  { sparkle( alexandriteRuby, 219, 30 ); }

  function alexandriteSapphireHoverHandler( )
  { sparkle( alexandriteSapphire, 600, 57 ); }

  function malachiteLapisHoverHandler( )
  { sparkle( malachiteLapis, 88, 20 ); }

  function malachiteJasperHoverHandler( )
  { sparkle( malachiteJasper, 512, 38 ); }

  /* Animate the banner */
  function animate( )
  {
    // Create the Timeline
    var timeline = new TimelineLite( );

    /* Animate the elements */
    // Round gems
    timeline.from( rose,                0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( amethyst,            0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( garnetRuby,          0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( garnetSapphire,      0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( ruby,                0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( sapphire,            0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( yellowPearl,         0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( bluePearl,           0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( opalAmethyst,        0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( sugiliteRuby,        0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( sugiliteSapphire,    0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( sugiliteAmethyst,    0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( rainbowQuartzRose,   0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( sardonyxRuby,        0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( sardonyxSapphire,    0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( smokyQuartzRose,     0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( smokyQuartzAmethyst, 0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( alexandriteRuby,     0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( alexandriteSapphire, 0.5, { top: -75, rotation:  720, transformOrigin: '50% 50%'}, 0 );
    timeline.from( alexandriteAmethyst, 0.5, { top: -75, rotation: -720, transformOrigin: '50% 50%'}, 0 );

    // Pearl
    timeline.from( pearl, 0.5, { top: -65, transformOrigin: '50% 50%'}, 0);
    timeline.to( pearl, 0.1, { rotation:  39, transformOrigin: '50% 50%'}, 0 );
    timeline.to( pearl, 0.1, { rotation: -1,  transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( pearl, 0.1, { rotation:  29, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( pearl, 0.1, { rotation:  9,  transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( pearl, 0.1, { rotation:  19, transformOrigin: '50% 50%'}, 0.4 );

    // Peridot
    timeline.from( peridot, 0.5, { top: -50, transformOrigin: '50% 50%'}, 0);
    timeline.to( peridot, 0.1, { rotation:  32, transformOrigin: '50% 50%'}, 0 );
    timeline.to( peridot, 0.1, { rotation: -8,  transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( peridot, 0.1, { rotation:  22, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( peridot, 0.1, { rotation:  2,  transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( peridot, 0.1, { rotation:  12, transformOrigin: '50% 50%'}, 0.4 );

    // Lapis
    timeline.from( lapis, 0.5, { top: -70, transformOrigin: '50% 50%'}, 0);
    timeline.to( lapis, 0.1, { rotation:  69, transformOrigin: '50% 50%'}, 0 );
    timeline.to( lapis, 0.1, { rotation: -1,  transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( lapis, 0.1, { rotation:  49, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( lapis, 0.1, { rotation:  19, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( lapis, 0.1, { rotation:  29, transformOrigin: '50% 50%'}, 0.4 );

    // Jasper
    timeline.from( jasper, 0.5, { top: -80, transformOrigin: '50% 50%'}, 0);
    timeline.to( jasper, 0.1, { rotation: 1,  transformOrigin: '50% 50%'}, 0 );
    timeline.to( jasper, 0.1, { rotation: 71, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( jasper, 0.1, { rotation: 11, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( jasper, 0.1, { rotation: 51, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( jasper, 0.1, { rotation: 31, transformOrigin: '50% 50%'}, 0.4 );

    // Bismuth
    timeline.from( bismuth, 0.5, { top: -55, transformOrigin: '50% 50%'}, 0);
    timeline.to( bismuth, 0.1, { rotation: -19, transformOrigin: '50% 50%'}, 0 );
    timeline.to( bismuth, 0.1, { rotation: -44, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( bismuth, 0.1, { rotation: -9,  transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( bismuth, 0.1, { rotation: -34, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( bismuth, 0.1, { rotation: -24, transformOrigin: '50% 50%'}, 0.4 );

    // Yellow Diamond
    timeline.from( yellowDiamond, 0.5, { top: -60, transformOrigin: '50% 50%'}, 0);
    timeline.to( yellowDiamond, 0.1, { rotation:  46, transformOrigin: '50% 50%'}, 0 );
    timeline.to( yellowDiamond, 0.1, { rotation: -14, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( yellowDiamond, 0.1, { rotation:  26, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( yellowDiamond, 0.1, { rotation: -4,  transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( yellowDiamond, 0.1, { rotation:  6,  transformOrigin: '50% 50%'}, 0.4 );

    // Blue Diamond
    timeline.from( blueDiamond, 0.5, { top: -75, transformOrigin: '50% 50%'}, 0);
    timeline.to( blueDiamond, 0.1, { rotation: 0,  transformOrigin: '50% 50%'}, 0 );
    timeline.to( blueDiamond, 0.1, { rotation: 60, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( blueDiamond, 0.1, { rotation: 15, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( blueDiamond, 0.1, { rotation: 45, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( blueDiamond, 0.1, { rotation: 30, transformOrigin: '50% 50%'}, 0.4 );

    // Opal Pearl
    timeline.from( opalPearl, 0.5, { top: -65, transformOrigin: '50% 50%'}, 0);
    timeline.to( opalPearl, 0.1, { rotation:  17, transformOrigin: '50% 50%'}, 0 );
    timeline.to( opalPearl, 0.1, { rotation: -63, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( opalPearl, 0.1, { rotation: -3,  transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( opalPearl, 0.1, { rotation: -43, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( opalPearl, 0.1, { rotation: -23, transformOrigin: '50% 50%'}, 0.4 );

    // Rainbow Quartz Pearl
    timeline.from( rainbowQuartzPearl, 0.5, { top: -65, transformOrigin: '50% 50%'}, 0);
    timeline.to( rainbowQuartzPearl, 0.1, { rotation: -65, transformOrigin: '50% 50%'}, 0 );
    timeline.to( rainbowQuartzPearl, 0.1, { rotation:  5,  transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( rainbowQuartzPearl, 0.1, { rotation: -50, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( rainbowQuartzPearl, 0.1, { rotation: -15, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( rainbowQuartzPearl, 0.1, { rotation: -35, transformOrigin: '50% 50%'}, 0.4 );

    // Sardonyx Pearl
    timeline.from( sardonyxPearl, 0.5, { top: -65, transformOrigin: '50% 50%'}, 0);
    timeline.to( sardonyxPearl, 0.1, { rotation:  58, transformOrigin: '50% 50%'}, 0 );
    timeline.to( sardonyxPearl, 0.1, { rotation: -22, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( sardonyxPearl, 0.1, { rotation:  38, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( sardonyxPearl, 0.1, { rotation: -2,  transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( sardonyxPearl, 0.1, { rotation:  18, transformOrigin: '50% 50%'}, 0.4 );

    // Alexandrite Pearl
    timeline.from( alexandritePearl, 0.5, { top: -65, transformOrigin: '50% 50%'}, 0);
    timeline.to( alexandritePearl, 0.1, { rotation:  32, transformOrigin: '50% 50%'}, 0 );
    timeline.to( alexandritePearl, 0.1, { rotation: -68, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( alexandritePearl, 0.1, { rotation:  2,  transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( alexandritePearl, 0.1, { rotation: -48, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( alexandritePearl, 0.1, { rotation: -28, transformOrigin: '50% 50%'}, 0.4 );

    // Malachite Lapis
    timeline.from( malachiteLapis, 0.5, { top: -70, transformOrigin: '50% 50%'}, 0);
    timeline.to( malachiteLapis, 0.1, { rotation: -63, transformOrigin: '50% 50%'}, 0 );
    timeline.to( malachiteLapis, 0.1, { rotation:  19, transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( malachiteLapis, 0.1, { rotation: -47, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( malachiteLapis, 0.1, { rotation: -6,  transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( malachiteLapis, 0.1, { rotation: -31, transformOrigin: '50% 50%'}, 0.4 );

    // Malachite Jasper
    timeline.from( malachiteJasper, 0.5, { top: -75, transformOrigin: '50% 50%'}, 0);
    timeline.to( malachiteJasper, 0.1, { rotation: -68, transformOrigin: '50% 50%'}, 0 );
    timeline.to( malachiteJasper, 0.1, { rotation: -8,  transformOrigin: '50% 50%'}, 0.1 );
    timeline.to( malachiteJasper, 0.1, { rotation: -53, transformOrigin: '50% 50%'}, 0.2 );
    timeline.to( malachiteJasper, 0.1, { rotation: -23, transformOrigin: '50% 50%'}, 0.3 );
    timeline.to( malachiteJasper, 0.1, { rotation: -38, transformOrigin: '50% 50%'}, 0.4 );

    // Show the ad
    banner.style.display = 'block';
  }
});