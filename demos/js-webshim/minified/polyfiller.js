(function(b){var o=document;"polyfillspan abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section source summary time track video".replace(/\w+/g,function(a){o.createElement(a)});b.support.dynamicHTML5=!!b("<video><div></div></video>")[0].innerHTML;b.webshims={version:"1.0.0beta1",fixHTML5:function(){var a,e;return b.support.dynamicHTML5?function(f){return f}:function(f){if(!a){e=document.body;a=document.createElement("div");a.style.display=
"none"}var c=a.cloneNode(false);e.appendChild(c);c.innerHTML=f;e.removeChild(c);return c.childNodes}}(),createReadyEvent:function(a,e){if(a){b.isArray(a)||(a=[a]);b.each(a,function(f,c){if(!(e&&m[c]&&m[c].noAutoCallback)){if(m[c]||h.features[c])c+="Ready";if(!(b.event.special[c]&&b.event.special[c].add)){b.event.special[c]=b.extend(b.event.special[c]||{},{add:function(g){g.handler.call(this,b.Event(c))}});b.event.trigger(c)}}})}},moduleList:[],modules:{},features:{},featureList:[],loader:{basePath:function(){var a=
b("script");a=a[a.length-1].src.split("?")[0];return a.slice(0,a.lastIndexOf("/")+1)}(),combinations:{},addModule:function(a,e){m[a]=e},loadList:function(){var a=[];return function(e){var f=[];b.each(e,function(c,g){var d=m[g];if("test"in d&&d.test())q(g);else{d.css&&k.loadCSS(d.css);f.push(g);d.loadInit&&d.loadInit()}});h.debug||b.each(k.combinations||[],function(c,g){var d=true;b.each(g,function(j,i){if(b.inArray(i,f)===-1||b.inArray(i,a)!==-1)return d=false});if(d){a=a.concat(g);k.loadScript(c,
false,g);return false}});b.each(f,function(c,g){if(b.inArray(g,a)==-1)k.loadScript(m[g].src||g,false,g)})}}(),makePath:function(a){if(a.indexOf("://")!=-1||a.indexOf("/")===0)return a;if(a.indexOf(".js")==-1&&a.indexOf(".css")==-1)a+=".js";return k.basePath+a},loadCSS:function(){var a,e=[];return function(f){f=this.makePath(f);if(b.inArray(f,e)==-1){a=a||o.getElementsByTagName("head")[0]||o.body;e.push(f);b('<link rel="stylesheet" href="'+f+'" />').prependTo(a).attr({href:f,rel:"stylesheet"})}}}(),
loadScript:function(){var a,e=[];return function(f,c,g){f=k.makePath(f);if(b.inArray(f,e)==-1){a=a||o.getElementsByTagName("head")[0]||o.body;if(!a||!a.appendChild)setTimeout(function(){k.loadScript(f,c)},10);else{var d=o.createElement("script"),j=function(i){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){d.onload=null;d.onerror=null;d.onreadystatechange=null;c&&c(i,this);q(g,true);d=null}};d.setAttribute("async","async");d.src=f;d.onload=j;d.onerror=j;d.onreadystatechange=
j;a.appendChild(d);d.async=true;e.push(f)}}}}()},ready:function(a,e,f,c){if(typeof a=="string")a=a.split(" ");c||(a=b.map(a,function(d){return m[d]||h.features[d]?d+"Ready":d}));if(a.length){c=a.shift();var g=function(){h.ready(a,e,f,true)};c=="ready"?b(g):b(o).one(c,g)}else f?e(b,m):setTimeout(function(){e(b,m)},0)},capturingEvents:function(a,e){if(o.addEventListener){if(typeof a=="string")a=[a];b.each(a,function(f,c){var g=function(d){d=b.event.fix(d);if(e){var j=d.preventDefault;d.preventDefault=
function(){j.apply(this,arguments);var i=b.data(d.target,"maybePrevented"+d.type);i&&clearTimeout(i);b.data(d.target,"maybePrevented"+d.type,setTimeout(function(){b.removeData(d.target,"maybePrevented"+d.type)},90))}}return b.event.handle.call(this,d)};b.event.special[c]=b.event.special[c]||{};b.extend(b.event.special[c],{setup:function(){this.addEventListener(c,g,true)},teardown:function(){this.removeEventListener(c,g,true)}})})}},attr:function(){var a=[{}],e=function(f){var c=b.attr;b.attr=function(g,
d,j,i,l){if(!f[d]||g.nodeType!==1||f[d].elementNames[0]!=="*"&&b.inArray((g.nodeName||"").toLowerCase(),f[d].elementNames)===-1)return c(g,d,j,i,l);var p=function(){if(j===undefined)return c(g,d,j,i,l);return c(g,d,j,i,l)};if(j===undefined)return f[d].getter(g,p,j,i,l);f[d].setter(g,j,p,i,l)}};e(a[0]);return function(f,c){c.elementNames=c.elementNames||["*"];if(c.setter){if(!b.isFunction(c.setter))c.setter=function(j,i,l){return l()}}else c.setter=function(){throw f+" is readonly";};if(!c.getter||
!b.isFunction(c.getter))c.getter=function(j,i){return i()};if(typeof c.elementNames=="string")c.elementNames=[c.elementNames];var g=false;b.each(a,function(j,i){if(!i[f]){i[f]=c;g=true;return false}});if(!g){var d={};d[f]=c;e(d);a.push(d)}}}(),createBooleanAttrs:function(a,e){if(typeof name==="string")a=[a];b.each(a,function(f,c){h.attr(c,{elementNames:e,getter:function(g){return typeof g[c]=="boolean"?g[c]:!!(g.attributes[c]||{}).specified},setter:function(g,d){(d=!!d)?g.setAttribute(c,c):g.removeAttribute(c);
g[c]=d}})})},addMethod:function(a,e){var f=b.fn[a].elementNames||["*"];if(typeof f=="string")f=[ext.elementNames];b.fn[a]=function(){var c=arguments,g;this.each(function(){if(f[0]=="*"||b.inArray((this.nodeName||"").toLowerCase(),f)!==-1){g=e.apply(this,c);return g!==undefined}});return g===undefined?this:g};b.fn[a].elementNames=f;b.fn[a].shim=true},addMethodName:function(a,e){if(!(b.fn[a]&&"shim"in b.fn[a])){b.fn[a]=function(){var f=arguments,c;this.each(function(){if(this[a]){c=this[a].apply(this,
f);if(c!==undefined)return false}});return c!==undefined?c:this};b.fn[a].shim=false;b.fn[a].elementNames=e}},addPolyfill:function(a,e){e=e||{};var f=e.feature||a,c=h;if(!c.features[f]){c.features[f]=[];c.featureList.push(f)}c.features[f].push(a);k.addModule(a,e);c.moduleList.push(a);b.each(e.combination||[],function(g,d){if(r[d])r[d].push(a);else r[d]=[a]});if(e.methodNames){if(!b.isArray(e.methodNames))e.methodNames=[e.methodNames];b.each(e.methodNames,function(g,d){h.addMethodName(d.name,d.elementNames)})}},
polyfill:function(a){var e=this,f=e.loader,c=[];a=a||e.featureList;if(a=="lightweight")a=h.light;if(typeof a=="string")a=a.split(" ");b.each(a,function(g,d){d!==e.features[d][0]&&e.ready(e.features[d],function(){q(d)},true);c=c.concat(e.features[d])});f.loadCSS("shim.css");f.loadList(c)},activeLang:function(){var a=[navigator.browserLanguage||navigator.language||""],e=b("html").attr("lang"),f;e&&a.push(e);return function(c,g,d){if(c)if(!g||!d){if(c!==a[0]){a[0]=c;clearTimeout(f);f=setTimeout(function(){b(o).triggerHandler("htmlExtLangChange",
a)},9)}}else{g=m[g].options;var j=function(l){if(b.inArray(l,i)!==-1){k.loadScript(g.langSrc+l+".js",function(){c[l]&&d(c[l])});return true}return false},i=g&&g.availabeLangs;b.each(a,function(l,p){var s=p.split("-")[0];if(c[p]||c[s]){d(c[p]||c[s]);return false}if(i&&g.langSrc!==undefined&&(j(p)||j(s)))return false})}return a}}()};var h=b.webshims,q=h.createReadyEvent,k=h.loader,m=h.modules,r=k.combinations,n=h.addPolyfill;(function(){var a=[];b.extend(h,{addReady:function(e){var f=function(c){b(function(){e(c)})};
a.push(f);f(document)},triggerDomUpdate:function(e){e&&b.each(a,function(f,c){c(e)})}})})();b.fn.htmlWebshim=function(a){a=this.html(a?h.fixHTML5(a):a);a===this&&b.isReady&&this.each(function(){h.triggerDomUpdate(this)});return a};b.each(["after","before","append","prepend"],function(a,e){b.fn[e+"Webshim"]=function(f){f=b(h.fixHTML5(f));this[e](f);b.isReady&&f.each(function(){h.triggerDomUpdate(this)});return this}});b.each({height:["height","innerHeight","outerHeight"],width:["width","innerWidth",
"outerWidth"]},function(a,e){b.each(e,function(f,c){b.fn["get"+c]=function(){if(!this[0])return false;var g=b.fn[c].apply(this,arguments),d;if(!this[0].offsetHeight&&!this[0].offsetWidth){d=parseInt(this.css(a),10);if(!d)return false;g+=d}return g}})});q("htmlExtLangChange",true);k.addModule("jquery-ui",{src:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js",test:function(){return!!(b.widget&&b.Widget)}});k.addModule("swfobject",{src:"http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",
test:function(){return"swfobject"in window}});n("html5shiv",{test:function(){return b.support.dynamicHTML5},combination:["combined-ie7","combined-ie8","combined-ie7-light","combined-ie8-light"]});b.support.es5=!!(String.prototype.trim&&Function.prototype.bind&&!isNaN(Date.parse("T00:00"))&&Date.now&&Date.prototype.toISOString);b.support.es5&&b.each(["filter","map","every","reduce","reduceRight","lastIndexOf"],function(a,e){if(!Array.prototype[e])return b.support.es5=false});b.support.es5&&b.each(["keys",
"isExtensible","isFrozen","isSealed","preventExtensions","defineProperties","create","getOwnPropertyNames"],function(a,e){if(!Object[e])return b.support.es5=false});n("es5",{test:function(){return b.support.es5},combination:["combined-ie7","combined-ie8","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ff3-light"]});b.support.geolocation="geolocation"in navigator;n("geolocation",{test:function(){return b.support.geolocation},options:{destroyWrite:true},combination:["combined-ie7",
"combined-ie8","combined-ie9","combined-ie7-light","combined-ie8-light","combined-ie9-light"]});b.support.canvas="getContext"in b("<canvas />")[0];n("canvas",{test:function(){return b.support.canvas},methodNames:[{name:"getContext",elementNames:["canvas"]}],combination:["combined-ie7","combined-ie8","combined-ie7-light","combined-ie8-light"]});b.support.validity="checkValidity"in b('<form action="#" />')[0];(function(){h.validityMessages=[];h.inputTypes={};var a=b('<form action="#"><fieldset><input name="a" required /></fieldset></form>'),
e=b("fieldset",a)[0];b.support.validationMessage=!!a.find("input").attr("validationMessage");b.support.fieldsetValidation=!!(e.elements&&e.checkValidity&&"disabled"in e&&!e.checkValidity());n("validation-base",{feature:"forms",noAutoCallback:true,test:function(){return false},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]})})();n("validity",{feature:"forms",noAutoCallback:true,
test:function(){return b.support.validity},methodNames:[{name:"setCustomValidity",elementNames:["input","select","textarea"]},{name:"checkValidity",elementNames:["form","fieldset","input","select","textarea"]}],options:{},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]});if(b.support.validity===true){h.capturingEvents(["input"]);h.capturingEvents(["invalid"],true)}n("implement-types",{feature:"forms-ext",
noAutoCallback:true,test:function(){return!(b.support.validity===true&&(b('<input type="datetime-local" />').attr("type")!=="datetime-local"||b('<input type="range" />').attr("type")!=="range"))},combination:["combined-ff4"]});n("number-date-type",{feature:"forms-ext",noAutoCallback:true,test:function(){return b('<input type="datetime-local" />').attr("type")==="datetime-local"&&b('<input type="range" />').attr("type")==="range"},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3",
"combined-ff4"],options:{stepArrows:{number:1,time:1},calculateWidth:true}});b.support.inputUI=b('<input type="range" />')[0].type=="range"&&b('<input type="date" />')[0].type=="date";n("inputUI",{feature:"forms-ext",test:function(){return b.support.inputUI&&!m.inputUI.options.replaceNative},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4"],noAutoCallback:true,loadInit:function(){k.loadList(["jquery-ui"])},options:{slider:{},date:{},langSrc:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/i18n/jquery.ui.datepicker-",
availabeLangs:"af ar az bg bs cs da de el en-GB eo es et eu fa fi fo fr fr-CH he hr hu hy id is it ja ko it lt lv ms nl no pl pt-BR ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" "),recalcWidth:true,replaceNative:false}});b.support.placeholder=b('<input type="text" />').attr("placeholder")!==undefined;n("placeholder",{feature:"forms",test:function(){return b.support.placeholder},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light",
"combined-ie9-light","combined-ff3-light"]});b.support.jsonStorage="JSON"in window&&"localStorage"in window&&"sessionStorage"in window;n("json-storage",{test:function(){return b.support.jsonStorage},loadInit:function(){k.loadList(["swfobject"])},noAutoCallback:true,combination:["combined-ie7","combined-ie7-light"]});h.light=["html5shiv","es5","canvas","forms","json-storage"]})(jQuery);
