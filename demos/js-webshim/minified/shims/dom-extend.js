jQuery.webshims.register("dom-extend",function(e,g,p,h,m){var C=g.modules,t=/\s*,\s*/,k={},u={},l={},A={},q={},y=e.fn.val,B=function(b,a,c,d,f){return f?y.call(e(b)):y.call(e(b),c)};e.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?y.call(this):e.prop(a,"value",b,"val",!0);if(e.isArray(b))return y.apply(this,arguments);var c=e.isFunction(b);return this.each(function(d){a=this;1===a.nodeType&&(c?(d=b.call(a,d,e.prop(a,"value",m,"val",
!0)),null==d&&(d=""),e.prop(a,"value",d,"val")):e.prop(a,"value",b,"val"))})};var n="_webshimsLib"+Math.round(1E3*Math.random()),w=function(b,a,c){b=b.jquery?b[0]:b;if(!b)return c||{};var d=e.data(b,n);c!==m&&(d||(d=e.data(b,n,{})),a&&(d[a]=c));return a?d&&d[a]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){e.fn[b.name]=function(){return this.map(function(){var a=w(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){k[b]=e[b];e[b]=function(a,c,d,f,v){var r="val"==f,j=!r?k[b]:B;if(!a||!u[c]||1!==a.nodeType||!r&&f&&"attr"==b&&e.attrFn[c])return j(a,c,d,f,v);var z=(a.nodeName||"").toLowerCase(),s=l[z],o="attr"==b&&(!1===d||null===d)?"removeAttr":b,g,h,i;s||(s=l["*"]);s&&(s=s[c]);s&&(g=s[o]);if(g){if("value"==c)h=g.isVal,g.isVal=r;if("removeAttr"===o)return g.value.call(a);if(d===m)return g.get?g.get.call(a):g.value;g.set&&
("attr"==b&&!0===d&&(d=c),i=g.set.call(a,d));if("value"==c)g.isVal=h}else i=j(a,c,d,f,v);if((d!==m||"removeAttr"===o)&&q[z]&&q[z][c]){var n;n="removeAttr"==o?!1:"prop"==o?!!d:!0;q[z][c].forEach(function(c){if(!c.only||(c.only="prop"==b)||"attr"==c.only&&"prop"!=b)c.call(a,d,n,r?"val":o,b)})}return i};A[b]=function(a,c,d){l[a]||(l[a]={});l[a][c]||(l[a][c]={});var f=l[a][c][b],v=function(a,f,e){return f&&f[a]?f[a]:e&&e[a]?e[a]:"prop"==b&&"value"==c?function(a){return d.isVal?B(this,c,a,!1,0===arguments.length):
k[b](this,c,a)}:"prop"==b&&"value"==a&&d.value.apply?function(a){var d=k[b](this,c);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return k[b](this,c,a)}};l[a][c][b]=d;if(d.value===m){if(!d.set)d.set=d.writeable?v("set",d,f):g.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:e.noop;if(!d.get)d.get=v("get",d,f)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=v(a,f))})}});var D=!e.browser.msie||8<parseInt(e.browser.version,10),E=function(){var b=g.getPrototypeOf(h.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,d,f){var e=h.createElement(c),r=g.getPrototypeOf(e);if(D&&r&&b!==r&&(!e[d]||!a.call(e,d))){var j=e[d];f._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};r[d]=f.value}else f._supvalue=function(){var a=w(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},i.extendValue(c,d,f.value);f.value._supvalue=f._supvalue}}(),i=function(){var b={};g.addReady(function(a,c){var d={},j=function(b){d[b]||(d[b]=e(a.getElementsByTagName(b)),
c[0]&&e.nodeName(c[0],b)&&(d[b]=d[b].add(c)))};e.each(b,function(a,b){j(a);!b||!b.forEach?g.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){d[a].each(b)})});d=null});var a,c=e([]),d=function(c,d){b[c]?b[c].push(d):b[c]=[d];e.isDOMReady&&(a||e(h.getElementsByTagName(c))).each(d)};return{createTmpCache:function(b){e.isDOMReady&&(a=a||e(h.getElementsByTagName(b)));return a||c},flushTmpCache:function(){a=null},content:function(a,b){d(a,function(){var a=e.attr(this,b);null!=a&&e.attr(this,
b,a)})},createElement:function(a,b){d(a,b)},extendValue:function(a,b,c){d(a,function(){e(this).each(function(){w(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),x=function(b,a){if(b.defaultValue===m)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}};if(!b.attr)b.attr={}};e.extend(g,{getID:function(){var b=(new Date).getTime();return function(a){var a=e(a),c=a.attr("id");c||(b++,c="ID-"+b,a.attr("id",c));
return c}}(),extendUNDEFProp:function(b,a){e.each(a,function(a,d){a in b||(b[a]=d)})},createPropDefault:x,data:w,moveToFirstEvent:function(){var b=e._data?"_data":"data";return function(a,c,d){if((a=(e[b](a,"events")||{})[c])&&1<a.length)c=a.pop(),d||(d="bind"),"bind"==d&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(){var b,a,c,d,f={init:!1,start:function(){if(!this.init)this.init=!0,this.height=e(h).height(),this.width=e(h).width(),setInterval(function(){var a=
e(h).height(),b=e(h).width();if(a!=f.height||b!=f.width)f.height=a,f.width=b,d({type:"docresize"}),console.log("docresize")},400)}};d=function(d){clearTimeout(b);b=setTimeout(function(){if("resize"==d.type&&d.target==p){var b=e(p).width(),j=e(p).width();if(j==a&&b==c)return;a=j;c=b;f.height=e(h).height();f.width=e(h).width()}e.event.trigger("updateshadowdom")},20)};e(h).bind("emchange resize fontresize",d);e(p).bind("resize",d);e.event.customEvent.updateshadowdom=!0;return function(a,b,c){c=c||{};
a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);var d=e.data(a,n)||e.data(a,n,{}),g=e.data(b,n)||e.data(b,n,{}),o={};if(c.shadowFocusElement){if(c.shadowFocusElement){if(c.shadowFocusElement.jquery)c.shadowFocusElement=c.shadowFocusElement[0];o=e.data(c.shadowFocusElement,n)||e.data(c.shadowFocusElement,n,o)}}else c.shadowFocusElement=b;d.hasShadow=b;o.nativeElement=g.nativeElement=a;o.shadowData=g.shadowData=d.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&
c.shadowChilds.each(function(){w(this,"shadowData",g.shadowData)});if(c.data)o.shadowData.data=g.shadowData.data=d.shadowData.data=c.data;c=null;f.start()}}(),propTypes:{standard:function(b){x(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){x(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}},src:function(){var b=
h.createElement("a");b.style.display="none";return function(a,c){x(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(c),f;if(null==a)return"";b.setAttribute("href",a+"");if(!e.support.hrefNormalized){try{e(b).insertAfterTo(this),f=b.getAttribute("href",4)}catch(g){f=b.getAttribute("href",4)}e(b).detach()}return f||b.href}}}}(),enumarated:function(b){x(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var a=(b.attr.get.call(this)||
"").toLowerCase();if(!a||-1==b.limitedTo.indexOf(a))a=b.defaultValue;return a}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(t));a.forEach(function(a){g.defineNodeNamesProperty(b,a,{prop:{set:function(b){e.attr(this,a,b)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,c){u[a]=!0;if(c.reflect)g.propTypes[c.propType||"standard"](c,a);["prop","attr","removeAttr"].forEach(function(d){var f=c[d];f&&(f="prop"===d?e.extend({writeable:!0},f):e.extend({},
f,{writeable:!0}),A[d](b,a,f),"*"!=b&&g.cfg.extendNative&&"prop"==d&&f.value&&e.isFunction(f.value)&&E(b,a,f),c[d]=f)});c.initAttr&&i.content(b,a);return c},defineNodeNameProperties:function(b,a,c,d){for(var e in a)!d&&a[e].initAttr&&i.createTmpCache(b),c&&(a[e][c]?g.log("override: "+b+"["+e+"] for "+c):(a[e][c]={},["value","set","get"].forEach(function(b){b in a[e]&&(a[e][c][b]=a[e][b],delete a[e][b])}))),a[e]=g.defineNodeNameProperty(b,e,a[e]);d||i.flushTmpCache();return a},createElement:function(b,
a,c){var d;e.isFunction(a)&&(a={after:a});i.createTmpCache(b);a.before&&i.createElement(b,a.before);c&&(d=g.defineNodeNameProperties(b,c,!1,!0));a.after&&i.createElement(b,a.after);i.flushTmpCache();return d},onNodeNamesPropertyModify:function(b,a,c,d){"string"==typeof b&&(b=b.split(t));e.isFunction(c)&&(c={set:c});b.forEach(function(b){q[b]||(q[b]={});"string"==typeof a&&(a=a.split(t));c.initAttr&&i.createTmpCache(b);a.forEach(function(a){q[b][a]||(q[b][a]=[],u[a]=!0);if(c.set){if(d)c.set.only=d;
q[b][a].push(c.set)}c.initAttr&&i.content(b,a)});i.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,c){c||(c={});if(e.isFunction(c))c.set=c;g.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?m:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===
m)return b=b.attributes[a]||{},c=b.specified?b.value:null,null==c?m:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var b=[],a={},c,d,f=/:\/\/|^\.*\//,h=function(a,b,c){return b&&c&&-1!==e.inArray(b,c.availabeLangs||[])?(a.loading=!0,c=c.langSrc,f.test(c)||(c=g.cfg.basePath+c),g.loader.loadScript(c+b+".js",function(){a.langObj[b]?(a.loading=!1,j(a,!0)):e(function(){a.langObj[b]&&j(a,!0);a.loading=!1})}),!0):!1},i=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},
j=function(a,b){if(a.activeLang!=c&&a.activeLang!==d){var e=C[a.module].options;if(a.langObj[c]||d&&a.langObj[d])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[d],c),i(a.module);else if(!b&&!h(a,c,e)&&!h(a,d,e)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),i(a.module)}};return function(f){if("string"==typeof f&&f!==c)c=f,d=c.split("-")[0],c==d&&(d=!1),e.each(b,function(a,b){j(b)});else if("object"==typeof f)if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),
f.callback();else{if(!f.activeLang)f.activeLang="";b.push(f);j(f)}return c}}()});e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){g[b]=function(b,d,e,h){"string"==typeof b&&(b=b.split(t));var i={};b.forEach(function(b){i[b]=g[a](b,d,e,h)});return i}});g.isReady("webshimLocalization",!0)});
(function(e,g){var p=e.webshims.browserVersion;if(!(e.browser.mozilla&&5<p)&&(!e.browser.msie||12>p&&7<p)){var h={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(e,g){e.getAttribute("role")||e.setAttribute("role",g)};e.webshims.addReady(function(p,t){e.each(h,function(g,h){for(var k=e(g,p).add(t.filter(g)),l=0,n=k.length;l<n;l++)m(k[l],h)});if(p===g){var k=g.getElementsByTagName("header")[0],u=g.getElementsByTagName("footer"),l=u.length;
k&&!e(k).closest("section, article")[0]&&m(k,"banner");l&&(k=u[l-1],e(k).closest("section, article")[0]||m(k,"contentinfo"))}})}})(jQuery,document);
