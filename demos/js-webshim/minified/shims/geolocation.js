(function(a){if(!navigator.geolocation){a.support.geolocation="shim";var i=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},j=0;navigator.geolocation=function(){var d,h={getCurrentPosition:function(e,b,c){var g=function(){clearTimeout(k);if(!(d||!window.google||!google.loader||!google.loader.ClientLocation)){var f=google.loader.ClientLocation;d={coords:{latitude:f.latitude,longitude:f.longitude,altitude:null,
accuracy:43E3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:a.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},f.address)}}if(d)e(a.extend(d,{timestamp:(new Date).getTime()}));else b&&b({code:2,message:"POSITION_UNAVAILABLE"})},k;if(!window.google||!google.loader){if(a.webshims.modules.geolocation.options.destroyWrite){document.write=i;document.writeln=i}a(document).one("google-loader",g);a.webshims.loader.loadScript("http://www.google.com/jsapi",false,
"google-loader");if(c&&c.timeout)k=setTimeout(function(){a(document).unbind("google-loader",g);b&&b({code:3,message:"TIMEOUT"})},c.timeout)}else setTimeout(g,1)},clearWatch:a.noop};h.watchPosition=function(e,b,c){h.getCurrentPosition(e,b,c);j++;return j};return h}()}})(jQuery);
