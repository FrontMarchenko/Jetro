import '../../node_modules/fancybox/dist/js/jquery.fancybox.js';
$(document).ready(function() {
  $('.fancybox-button').fancybox({
    prevEffect		: 'none',
    nextEffect		: 'none',
    closeBtn		: 'none',
    helpers		: {
      title	: { type : 'inside' },
      buttons	: {}
    }
  });
});
