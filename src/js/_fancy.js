import $ from 'jquery';
import fancybox from 'fancybox';
fancybox();
import fancyboxbuttons from './_jquery.fancybox-buttons.cjs';
fancyboxbuttons();
$(window).ready(function() {
  $('.fancybox-button').fancybox({
    prevEffect		: 'none',
    nextEffect		: 'none',
    closeBtn		: false,
    helpers		: {
      title	:  'none' ,
      buttons	: {}
    }
  });
});
