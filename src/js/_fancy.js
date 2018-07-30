import '../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import '../../node_modules/fancybox/dist/helpers/js/jquery.fancybox-buttons.js';
$(document).ready(function() {
  $('.fancybox-button').fancybox({
    prevEffect		: 'none',
    nextEffect		: 'none',
    closeBtn		: 'none',
    helpers		: {
      title	:  'none' ,
      buttons	: {}
    }
  });
});
