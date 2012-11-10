
jQuery(function($) {
  var dport;
  var dhost = 'local.michaelhood.net';
  if (window.location.hostname == dhost) { return; }
  if (window.location.protocol == 'http:') { dport = 3131; }
  if (window.location.protocol == 'https:') { dport = 3132; }
  var path   = window.location.protocol + '//'+dhost+':'+dport+'/';
  var script = document.createElement('script');
  var style  = document.createElement('link');
  var handle = function() {
    console.log('no dotjs server found at '+dhost+':'+dport);
  };

  script.src     = path + window.location.hostname.replace(/^www\./, '') + '.js';
  script.async   = true;
  script.onerror = handle;

  style.href     = path + window.location.hostname.replace(/^www\./, '') + '.css';
  style.rel      = 'stylesheet';
  style.onerror  = handle;

  document.head.appendChild(script);
  document.head.appendChild(style);
});
