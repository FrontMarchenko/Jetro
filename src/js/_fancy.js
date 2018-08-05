import $ from 'jquery';
import fancybox from '../../node_modules/fancybox/dist/js/jquery.fancybox.cjs.js';
fancybox();
import fancyboxbuttons from '../../node_modules/fancybox/dist/helpers/js/jquery.fancybox-buttons.cjs.js';
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
