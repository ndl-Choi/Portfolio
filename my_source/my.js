/*
 
 */
;
(function ($) {

  /* ---------------------------------------------- /*
    * Set sections backgrounds
  /* ---------------------------------------------- */

  var module = $('.home-section, .module, .module-small, .side-image');
  module.each(function(i) {
      if ($(this).attr('data-background')) {
          $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
      }
  });

})(jQuery);
