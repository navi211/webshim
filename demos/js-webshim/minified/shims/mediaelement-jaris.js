jQuery.webshims.register("mediaelement-jaris",function(d,e,o,x,p,j){var k=e.mediaelement,y=o.swfobject,r=Modernizr.audio&&Modernizr.video,z=y.hasFlashPlayerVersion("9.0.115"),q=0,o={paused:!0,ended:!1,currentSrc:"",duration:o.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)e.error("buffered index size error");else return 0},end:function(a){if(a)e.error("buffered index size error");else return 0},length:0}},E=Object.keys(o),A={currentTime:0,volume:1,
muted:!1};Object.keys(A);var B=d.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:p},o,A),F=/^jarisplayer-/,i=function(a){return(a=e.data(a,"mediaelement"))&&"third"==a.isActive?a:null},g=function(a,b){b=d.Event(b);b.preventDefault();d.event.trigger(b,p,a)},G=j.playerPath||e.cfg.basePath+"swf/"+(j.playerName||"JarisFLVPlayer.swf");e.extendUNDEFProp(j.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"});
e.extendUNDEFProp(j.vars,{controltype:"1",jsapi:"1"});e.extendUNDEFProp(j.attrs,{bgcolor:"#000000"});var h=function(a,b){3>a&&clearTimeout(b._canplaythroughTimer);if(3<=a&&3>b.readyState)b.readyState=a,g(b._elem,"canplay"),b.paused||g(b._elem,"playing"),clearTimeout(b._canplaythroughTimer),b._canplaythroughTimer=setTimeout(function(){h(4,b)},4E3);if(4<=a&&4>b.readyState)b.readyState=a,g(b._elem,"canplaythrough");b.readyState=a};d.extend(d.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,
swfstageresize:!0,mediaelementapichange:!0});k.jarisEvent={};var l={onPlayPause:function(a,b,c){var f;if(null==c)try{f=b.api.api_get("isPlaying")}catch(d){}else f=c;if(f==b.paused)b.paused=!f,a=b.paused?"pause":"play",b._ppFlag=!0,g(b._elem,a),3>b.readyState&&h(3,b),b.paused||g(b._elem,"playing")},onNotBuffering:function(a,b){h(3,b)},onDataInitialized:function(a,b){var c=b.duration;b.duration=a.duration;if(c!==b.duration){b.videoHeight=a.height;b.videoWidth=a.width;if(!b.networkState)b.networkState=
2;1>b.readyState&&h(1,b);b.duration&&g(b._elem,"durationchange");g(b._elem,"loadedmetadata")}},onBuffering:function(a,b){if(b.ended)b.ended=!1;h(1,b);g(b._elem,"waiting")},onTimeUpdate:function(a,b){if(b.ended)b.ended=!1;3>b.readyState&&(h(3,b),g(b._elem,"playing"));g(b._elem,"timeupdate")},onProgress:function(a,b){if(b.ended)b.ended=!1;if(b.duration&&!isNaN(b.duration)){var c=a.loaded/a.total;if(0.02<c&&0.2>c)h(3,b);else if(0.2<c){if(0.99<c)b.networkState=1;h(4,b)}if(b._bufferedEnd&&b._bufferedEnd>
c)b._bufferedStart=b.currentTime||0;b._bufferedEnd=c;b.buffered.length=1;d.event.trigger("progress",p,b._elem,!0)}},onPlaybackFinished:function(a,b){4>b.readyState&&h(4,b);b.ended=!0;g(b._elem,"ended")},onVolumeChange:function(a,b){if(b.volume!=a.volume||b.muted!=a.mute)b.volume=a.volume,b.muted=a.mute,g(b._elem,"volumechange")}};l.onMute=l.onVolumeChange;var H=function(a){var b=!0;k.jarisEvent[a.id]=function(b){a.currentTime=b.position;if(b.duration&&a.duration!=b.duration&&isNaN(a.duration))l.onDataInitialized(b,
a);if(!a._ppFlag&&"onPlayPause"!=b.type)l.onPlayPause(b,a);if(l[b.type])l[b.type](b,a)};try{a.api.api_addlistener("on*","jQuery.webshims.mediaelement.jarisEvent."+a.id)}catch(c){return b=!1}return b},I=function(a){var b=a.actionQueue.length,c=0,d;if(b&&"third"==a.isActive)for(;a.actionQueue.length&&b>c;){c++;d=a.actionQueue.shift();try{a.api[d.fn].apply(a.api,d.args)}catch(g){e.warn(g)}}if(a.actionQueue.length)a.actionQueue=[]},J=function(a){a&&(a._ppFlag===p&&d.prop(a._elem,"autoplay")||!a.paused)&&
setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===p||!a.paused))try{d(a._elem).play(),a._ppFlag=!0}catch(b){}},1)};k.playerResize=function(a){a&&(a=x.getElementById(a.replace(F,"")))&&d(a).triggerHandler("swfstageresize")};var s;k.playerReady=function(a){var b=0,c=function(){if(!(9<b))b++,H(a)?(a.wasSwfReady=!0,a.tryedReframeing=0,I(a),J(a)):(clearTimeout(a.reframeTimer),a.reframeTimer=setTimeout(c,9*b),2<b&&9>a.tryedReframeing&&(a.tryedReframeing++,a.shadowElem.css({overflow:"visible"}),
setTimeout(function(){a.shadowElem.css({overflow:"hidden"})},16)))};if(a&&a.api){if(!a.tryedReframeing)a.tryedReframeing=0;clearTimeout(s);a.shadowElem.removeClass("flashblocker-assumed");d.prop(a._elem,"volume",a.volume);d.prop(a._elem,"muted",a.muted);c()}};var u=d.noop;if(r){var K={play:1,playing:1},C="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),D=C.map(function(a){return a+".webshimspolyfill"}).join(" "),L=function(a){var b=e.data(a.target,
"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==("third"==b.activating)&&(a.stopImmediatePropagation(),K[a.type]&&b.isActive!=b.activating&&d(a.target).pause())},u=function(a){d(a).unbind(D).bind(D,L);C.forEach(function(b){e.moveToFirstEvent(a,b)})};u(x)}k.setActive=function(a,b,c){c||(c=e.data(a,"mediaelement"));if(c&&c.isActive!=b){"html5"!=b&&"third"!=b&&e.warn("wrong type for mediaelement activating: "+b);var f=e.data(a,"shadowData");c.activating=b;d(a).pause();c.isActive=
b;"third"==b?(f.shadowElement=f.shadowFocusElement=c.shadowElem[0],d(a).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(d(a).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1);d(a).trigger("mediaelementapichange")}};var M=function(){var a="_bufferedEnd,_bufferedStart,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth".split(","),b=a.length;return function(c){if(c){var d=
b,e=c.networkState;for(h(0,c);--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&g(c._elem,"emptied")}}}(),v=function(a,b){var c=a._elem,f=a.shadowElem;d(c)[b?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!b?f.css({width:0,height:0}):f.css({width:c.style.width||d(c).width(),height:c.style.height||d(c).height()})};k.createSWF=function(a,b,c){if(z){1>q?q=1:q++;var f=d.extend({},j.vars,{poster:d.prop(a,"poster")||"",source:b.srcProp}),g=d(a).data("vars")||{};c||(c=
e.data(a,"mediaelement"));var w=d.prop(a,"controls"),m="jarisplayer-"+e.getID(a),h=d.extend({},j.params,d(a).data("params")),i=a.nodeName.toLowerCase(),l=d.extend({},j.attrs,{name:m,id:m},d(a).data("attrs")),n;c&&c.swfCreated?(clearInterval(c.readyInterval),k.setActive(a,"third",c),c.currentSrc=b.srcProp,c.shadowElem.html('<div id="'+m+'">'),c.api=!1,c.actionQueue=[],M(c)):(n=d('<div class="polyfill-'+i+' polyfill-mediaelement" id="wrapper-'+m+'"><div id="'+m+'"></div>').css({position:"relative",
overflow:"hidden"}),c=e.data(a,"mediaelement",e.objectCreate(B,{actionQueue:{value:[]},shadowElem:{value:n},_elemNodeName:{value:i},_elem:{value:a},currentSrc:{value:b.srcProp},swfCreated:{value:!0},id:{value:m.replace(/-/g,"")},buffered:{value:{start:function(a){if(a>=c.buffered.length)e.error("buffered index size error");else return 0},end:function(a){if(a>=c.buffered.length)e.error("buffered index size error");else return(c.duration-c._bufferedStart)*c._bufferedEnd+c._bufferedStart},length:0}}})),
v(c,w),n.insertBefore(a),r&&d.extend(c,{volume:d.prop(a,"volume"),muted:d.prop(a,"muted")}),e.addShadowDom(a,n),u(a),k.setActive(a,"third",c),d(a).bind("updatemediaelementdimensions updateshadowdom",function(){v(c,d.prop(a,"controls"))}));d(function(){clearInterval(c.readyInterval);c.readyInterval=setTimeout(function(){d.extend(f,{id:m,controls:""+w,autostart:"false"},g);if("audio/mpeg"==b.type||"audio/mp3"==b.type)f.type="audio",f.streamtype="file";else if("video/youtube"==b.type)f.streamtype="youtube";
j.changeSWF(f,a,b,c,"embed");y.embedSWF(G,m,"100%","100%","9.0.0",!1,f,h,l,function(b){if(b.success)c.api=b.ref,w||d(b.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!b.ref.parentNode&&n[0].parentNode||"none"==b.ref.style.display)n.addClass("flashblocker-assumed"),d(a).trigger("flashblocker"),e.warn("flashblocker assumed");d(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),s||(clearTimeout(s),s=setTimeout(function(){var a=d(b.ref);1<a[0].offsetWidth&&1<a[0].offsetHeight&&
0===location.protocol.indexOf("file:")?e.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>a[0].offsetWidth||2>a[0].offsetHeight)&&e.warn("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3)),c.readyInterval=setInterval(function(){"api_get"in c.api&&(clearInterval(c.readyInterval),k.playerReady(c))},9)})},9)})}else setTimeout(function(){d(a).mediaLoad()},
1)};var t=function(a,b,c,d){return(d=d||i(a))?(d.api&&d.api[b]?d.api[b].apply(d.api,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},c,f=function(d){"audio"==a&&("videoHeight"==d||"videoWidth"==d)||(b[d]={get:function(){var a=i(this);return a?a[d]:r&&c[d].prop._supget?c[d].prop._supget.apply(this):B[d]},writeable:!1})},h=function(a,c){f(a);delete b[a].writeable;
b[a].set=c};h("volume",function(a){var b=i(this);if(b){if(a*=1,!isNaN(a)&&((0>a||1<a)&&e.error("volume greater or less than allowed "+a/100),t(this,"api_volume",[a],b),b.volume!=a))b.volume=a,g(b._elem,"volumechange")}else if(c.volume.prop._supset)return c.volume.prop._supset.apply(this,arguments)});h("muted",function(a){var b=i(this);if(b){if(a=!!a,t(this,"api_volume",[a?0:b.volume||1],b),b.muted!=a)b.muted=a,g(b._elem,"volumechange")}else if(c.muted.prop._supset)return c.muted.prop._supset.apply(this,
arguments)});h("currentTime",function(a){var b=i(this);if(b)a*=1,isNaN(a)||t(this,"api_seek",[a],b);else if(c.currentTime.prop._supset)return c.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=i(this);if(b){if(b.stopPlayPause&&clearTimeout(b.stopPlayPause),t(this,"play"==a?"api_play":"api_pause",[],b),b._ppFlag=!0,b.paused!=("play"!=a))b.paused="play"!=a,g(b._elem,a)}else if(c[a].prop._supvalue)return c[a].prop._supvalue.apply(this,
arguments)}}});E.forEach(f);e.onNodeNamesPropertyModify(a,"controls",function(b,c){var f=i(this);d(this)[c?"addClass":"removeClass"]("webshims-controls");f&&(e.warn("changing controls currently not fully supported with jaris player"),"audio"==a&&v(f,c),f.api&&d(this).mediaLoad())});c=e.defineNodeNameProperties(a,b,"prop")});if(z){var N=d.cleanData,O=d.browser.msie&&9>e.browserVersion,P={object:1,OBJECT:1};d.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&q)for(b=0;b<c;b++)if(P[a[b].nodeName]){if("api_pause"in
a[b]){q--;try{a[b].api_pause()}catch(e){}}if(O)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(g){}}return N.apply(this,arguments)}}r||(["poster","src"].forEach(function(a){e.defineNodeNamesProperty("src"==a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(a){e.defineNodeNamesBooleanProperty(["audio","video"],a)}),e.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},
HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});