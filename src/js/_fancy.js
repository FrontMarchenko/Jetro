import fancybox1 from '../../node_modules/fancybox/dist/js/jquery.fancybox.cjs.js';
fancybox1();
import fancyboxbuttons from '../../node_modules/fancybox/dist/helpers/js/jquery.fancybox-buttons.cjs';
fancyboxbuttons();
$(document).ready(function() {
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
