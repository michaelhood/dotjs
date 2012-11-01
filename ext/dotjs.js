
jQuery(function($) {
  var path   = 'http://localhost:3131/'+window.location.hostname.replace('www.', '');
  var script = document.createElement('script');
  var handle = function() {
    console.log('no dotjs server found at localhost:3131');
  };

  script.src     = path + '.js';
  script.async   = true;
  script.onerror = handle;

  document.head.appendChild(script);
});
