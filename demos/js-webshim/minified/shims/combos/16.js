jQuery.webshims.register("dom-extend",function(e,t,n,r,i){"use strict";var s=t.modules,o=/\s*,\s*/,u={},a={},f={},l={},c={},h=e.fn.val,p=function(t,n,r,i,s){return s?h.call(e(t)):h.call(e(t),r)};e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.val=function(t){var n=this[0];arguments.length&&t==null&&(t="");if(!arguments.length)return!n||n.nodeType!==1?h.call(this):e.prop(n,"value",t,"val",!0);if(e.isArray(t))return h.apply(this,arguments);var r=e.isFunction(t);return this.each(function(s){n=this;if(n.nodeType===1)if(r){var o=t.call(n,s,e.prop(n,"value",i,"val",!0));o==null&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})};var d="_webshimsLib"+Math.round(Math.random()*1e3),v=function(t,n,r){t=t.jquery?t[0]:t;if(!t)return r||{};var s=e.data(t,d);return r!==i&&(s||(s=e.data(t,d,{})),n&&(s[n]=r)),n?s&&s[n]:s};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){return this.map(function(){var e=v(this,"shadowData");return e&&e[t.prop]||this})}}),["removeAttr","prop","attr"].forEach(function(n){u[n]=e[n],e[n]=function(t,r,s,o,l){var h=o=="val",d=h?p:u[n];if(!t||!a[r]||t.nodeType!==1||!h&&o&&n=="attr"&&e.attrFn[r])return d(t,r,s,o,l);var v=(t.nodeName||"").toLowerCase(),m=f[v],g=n!="attr"||s!==!1&&s!==null?n:"removeAttr",y,b,w;m||(m=f["*"]),m&&(m=m[r]),m&&(y=m[g]);if(y){r=="value"&&(b=y.isVal,y.isVal=h);if(g==="removeAttr")return y.value.call(t);if(s===i)return y.get?y.get.call(t):y.value;y.set&&(n=="attr"&&s===!0&&(s=r),w=y.set.call(t,s)),r=="value"&&(y.isVal=b)}else w=d(t,r,s,o,l);if((s!==i||g==="removeAttr")&&c[v]&&c[v][r]){var E;g=="removeAttr"?E=!1:g=="prop"?E=!!s:E=!0,c[v][r].forEach(function(e){(!e.only||(e.only=n=="prop")||e.only=="attr"&&n!="prop")&&e.call(t,s,E,h?"val":g,n)})}return w},l[n]=function(r,s,o){f[r]||(f[r]={}),f[r][s]||(f[r][s]={});var a=f[r][s][n],l=function(e,t,r){return t&&t[e]?t[e]:r&&r[e]?r[e]:n=="prop"&&s=="value"?function(e){var t=this;return o.isVal?p(t,s,e,!1,arguments.length===0):u[n](t,s,e)}:n=="prop"&&e=="value"&&o.value.apply?function(e){var t=u[n](this,s);return t&&t.apply&&(t=t.apply(this,arguments)),t}:function(e){return u[n](this,s,e)}};f[r][s][n]=o,o.value===i&&(o.set||(o.set=o.writeable?l("set",o,a):t.cfg.useStrict&&s=="prop"?function(){throw s+" is readonly on "+r}:e.noop),o.get||(o.get=l("get",o,a))),["value","get","set"].forEach(function(e){o[e]&&(o["_sup"+e]=l(e,a))})}});var m=Modernizr.ES5,g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),n=Object.prototype.hasOwnProperty;return function(i,s,o){var u,a;if(m&&(u=r.createElement(i))&&(a=t.getPrototypeOf(u))&&e!==a&&(!u[s]||!n.call(u,s))){var f=u[s];o._supvalue=function(){return f&&f.apply?f.apply(this,arguments):f},a[s]=o.value}else o._supvalue=function(){var e=v(this,"propValue");return e&&e[s]&&e[s].apply?e[s].apply(this,arguments):e&&e[s]},y.extendValue(i,s,o.value);o.value._supvalue=o._supvalue}}(),y=function(){var n={};t.addReady(function(r,i){var s={},o=function(t){s[t]||(s[t]=e(r.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(s[t]=s[t].add(i)))};e.each(n,function(e,n){o(e);if(!n||!n.forEach){t.warn("Error: with "+e+"-property. methods: "+n);return}n.forEach(function(t){s[e].each(t)})}),s=null});var i,s=e([]),o=function(t,s){n[t]?n[t].push(s):n[t]=[s],e.isDOMReady&&(i||e(r.getElementsByTagName(t))).each(s)},u={};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(r.getElementsByTagName(t))),i||s},flushTmpCache:function(){i=null},content:function(t,n){o(t,function(){var t=e.attr(this,n);t!=null&&e.attr(this,n,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,n,r){o(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=r})})}}}(),b=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var r=n.attr("id");return r||(t++,r="ID-"+t,n.attr("id",r)),r}}(),extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,r){var i=(e._data(t,"events")||{})[n],s;i&&i.length>1&&(s=i.pop(),r||(r="bind"),r=="bind"&&i.delegateCount?i.splice(i.delegateCount,0,s):i.unshift(s)),t=null},addShadowDom:function(){var i,s,o,u={init:!1,runs:0,test:function(){var e=u.getHeight(),t=u.getWidth();e!=u.height||t!=u.width?(u.height=e,u.width=t,u.handler({type:"docresize"}),u.runs++,u.runs<9&&setTimeout(u.test,90)):u.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if(t.type=="resize"){var i=e(n).width(),a=e(n).width();if(a==s&&i==o)return;s=a,o=i,u.height=u.getHeight(),u.width=u.getWidth()}e(r).triggerHandler("updateshadowdom")},t.type=="resize"?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=r.body,i=r.documentElement;u[t]=function(){return Math.max(n["scroll"+e],i["scroll"+e],n["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=u.getHeight(),this.width=u.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t=e.fn.animate,n;e.fn.animate=function(){return clearTimeout(n),n=setTimeout(function(){u.test()},99),t.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){u.start()})},function(n,r,i){i=i||{},n.jquery&&(n=n[0]),r.jquery&&(r=r[0]);var s=e.data(n,d)||e.data(n,d,{}),o=e.data(r,d)||e.data(r,d,{}),u={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),u=e.data(i.shadowFocusElement,d)||e.data(i.shadowFocusElement,d,u)):i.shadowFocusElement=r,s.hasShadow=r,u.nativeElement=o.nativeElement=n,u.shadowData=o.shadowData=s.shadowData={nativeElement:n,shadowElement:r,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),i.data&&(u.shadowData.data=o.shadowData.data=s.shadowData.data=i.data),i=null,t.docObserve()}}(),propTypes:{standard:function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}}},"boolean":function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return e.attr.get.call(this)!=null}}},src:function(){var t=r.createElement("a");return t.style.display="none",function(n,r){b(n);if(n.prop)return;n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n=this.getAttribute(r),i;if(n==null)return"";t.setAttribute("href",n+"");if(!e.support.hrefNormalized){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(s){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}}}}(),enumarated:function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();if(!t||e.limitedTo.indexOf(t)==-1)t=e.defaultValue;return t}}}},reflectProperties:function(n,r){typeof r=="string"&&(r=r.split(o)),r.forEach(function(r){t.defineNodeNamesProperty(n,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(n,r,i){return a[r]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,r),["prop","attr","removeAttr"].forEach(function(s){var o=i[s];o&&(s==="prop"?o=e.extend({writeable:!0},o):o=e.extend({},o,{writeable:!0}),l[s](n,r,o),n!="*"&&t.cfg.extendNative&&s=="prop"&&o.value&&e.isFunction(o.value)&&g(n,r,o),i[s]=o)}),i.initAttr&&y.content(n,r),i},defineNodeNameProperties:function(e,n,r,i){var s;for(var o in n)!i&&n[o].initAttr&&y.createTmpCache(e),r&&(n[o][r]||(n[o][r]={},["value","set","get"].forEach(function(e){e in n[o]&&(n[o][r][e]=n[o][e],delete n[o][e])}))),n[o]=t.defineNodeNameProperty(e,o,n[o]);return i||y.flushTmpCache(),n},createElement:function(n,r,i){var s;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(n),r.before&&y.createElement(n,r.before),i&&(s=t.defineNodeNameProperties(n,i,!1,!0)),r.after&&y.createElement(n,r.after),y.flushTmpCache(),s},onNodeNamesPropertyModify:function(t,n,r,i){typeof t=="string"&&(t=t.split(o)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){c[e]||(c[e]={}),typeof n=="string"&&(n=n.split(o)),r.initAttr&&y.createTmpCache(e),n.forEach(function(t){c[e][t]||(c[e][t]=[],a[t]=!0),r.set&&(i&&(r.set.only=i),c[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,r,s){s||(s={}),e.isFunction(s)&&(s.set=s),t.defineNodeNamesProperty(n,r,{attr:{set:function(e){this.setAttribute(r,e),s.set&&s.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return e==null?i:r}},removeAttr:{value:function(){this.removeAttribute(r),s.set&&s.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:s.initAttr||!1})},contentAttr:function(e,t,n){if(!e.nodeName)return;var r;if(n===i)return r=e.attributes[t]||{},n=r.specified?r.value:null,n==null?i:n;typeof n=="boolean"?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n)},activeLang:function(){var n=[],r={},i,o,u=/:\/\/|^\.*\//,a=function(n,r,i){var s;return r&&i&&e.inArray(r,i.availabeLangs||[])!==-1?(n.loading=!0,s=i.langSrc,u.test(s)||(s=t.cfg.basePath+s),t.loader.loadScript(s+r+".js",function(){n.langObj[r]?(n.loading=!1,l(n,!0)):e(function(){n.langObj[r]&&l(n,!0),n.loading=!1})}),!0):!1},f=function(e){r[e]&&r[e].forEach(function(e){e.callback()})},l=function(e,t){if(e.activeLang!=i&&e.activeLang!==o){var n=s[e.module].options;e.langObj[i]||o&&e.langObj[o]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[o],i),f(e.module)):!t&&!a(e,i,n)&&!a(e,o,n)&&e.langObj[""]&&e.activeLang!==""&&(e.activeLang="",e.callback(e.langObj[""],i),f(e.module))}},c=function(t){return typeof t=="string"&&t!==i?(i=t,o=i.split("-")[0],i==o&&(o=!1),e.each(n,function(e,t){l(t)})):typeof t=="object"&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback()):(t.activeLang||(t.activeLang=""),n.push(t),l(t))),i};return c}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,r,i,s){typeof e=="string"&&(e=e.split(o));var u={};return e.forEach(function(e){u[e]=t[n](e,r,i,s)}),u}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!Modernizr.localstorage||"hidden"in t.createElement("a"))return;var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(i,s){e.each(n,function(t,n){var o=e(t,i).add(s.filter(t));for(var u=0,a=o.length;u<a;u++)r(o[u],n)});if(i===t){var o=t.getElementsByTagName("header")[0],u=t.getElementsByTagName("footer"),a=u.length;o&&!e(o).closest("section, article")[0]&&r(o,"banner");if(!a)return;var f=u[a-1];e(f).closest("section, article")[0]||r(f,"contentinfo")}})}(jQuery,document),function(e){"use strict";var t=/webkit/i.test(navigator.userAgent),n=window.Modernizr,r=e.webshims,i=r.bugs,s=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),o=function(){if(s[0].querySelector)try{i.findRequired=!s[0].querySelector("select:required")}catch(e){i.findRequired=!1}},u=e("input",s).eq(0),a=function(e){r.loader.loadList(["dom-extend"]),r.ready("dom-extend",e)};i.findRequired=!1,i.validationMessage=!1,r.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!!(n.apply(this,arguments)||e.data(t.target,t.type+"DefaultPrevented")||!1)},t._isPolyfilled=!0}};if(!n.formvalidation||i.bustedValidity)o();else{r.capturingEvents(["input"]),r.capturingEvents(["invalid"],!0);if(window.opera||window.testGoodWithFix)s.appendTo("head"),o(),i.validationMessage=!u.prop("validationMessage"),r.reTest(["form-native-extend","form-message"]),s.remove(),e(function(){a(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(n){var i=r.defineNodeNameProperty(n,"checkValidity",{prop:{value:function(){r.fromSubmit||e(this).on("invalid.checkvalidity",t),r.fromCheckValidity=!0;var n=i.prop._supvalue.apply(this,arguments);return r.fromSubmit||e(this).unbind("invalid.checkvalidity",t),r.fromCheckValidity=!1,n}}})})})});t&&!r.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,n=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(n=e.target.form)&&setTimeout(function(){n=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&n&&n==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()}jQuery.webshims.register("form-core",function(e,r,i,s,o,u){var a={checkbox:1,radio:1},f=e([]),l=r.bugs,c={radio:1},h=function(t){t=e(t);var n,r,i=f;return c[t[0].type]&&(r=t.prop("form"),n=t[0].name,n?r?i=e(r[n]):i=e(s.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):i=t,i=i.filter('[type="radio"]')),i},p=r.getContentValidationMessage=function(t,n,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]&&(i=i[r]),typeof i=="object"&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){if(t&&e!="valid"&&i[e])return i=i[e],!1})),typeof i=="object"&&(i=i.defaultMessage),i||""},d={number:1,range:1,date:1},v=function(t){var n=!1;return e(e.prop(t,"elements")).each(function(){n=e(this).is(":invalid");if(n)return!1}),n};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!v(t):!!e.prop(t,"willValidate")&&!!g(t)},"invalid-element":function(t){return e.nodeName(t,"form")?v(t):!!e.prop(t,"willValidate")&&!g(t)},"required-element":function(t){return!!e.prop(t,"willValidate")&&!!e.prop(t,"required")},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!!e.prop(t,"willValidate")&&e.prop(t,"required")===!1},"in-range":function(t){if(!d[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!!(n&&!n.rangeOverflow&&!n.rangeUnderflow)},"out-of-range":function(t){if(!d[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||!n.rangeOverflow&&!n.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1},n.formvalidation&&t&&!r.bugs.bustedValidity&&function(){var t=function(){var e;(e=this.validity)&&!e.customError&&this.setCustomValidity("")};r.addReady(function(n,r){n!==s&&e('input[type="radio"]:invalid',n).add(r.filter('input[type="radio"]:invalid')).each(t)})}();var m=e.event.customEvent||{},g=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(l.bustedValidity||l.findRequired)&&function(){var t=e.find,r=e.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,o=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,n=function(n){var r=arguments;return r=e.call(r,1,r.length),r.unshift(n.replace(i,o)),t.apply(this,r)};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}();if(!n.prefixed||n.prefixed("matchesSelector",s.documentElement))e.find.matchesSelector=function(e,t){return t=t.replace(i,o),r.call(this,e,t)}}();var y=e.prop,b={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,n,r){var i=y.apply(this,arguments);return t&&"form"in t&&b[n]&&r!==o&&e(t).hasClass(S)&&g(t)&&(e(t).getShadowElement().removeClass(x),n=="checked"&&r&&h(t).not(t).removeClass(x).removeAttr("aria-invalid")),i};var w=function(t,n){var r;return e.each(t,function(t,i){if(i)return r=t=="customError"?e.prop(n,"validationMessage"):t,!1}),r},E=function(e){var t;try{t=s.activeElement.name===e}catch(n){}return t},S="user-error",x="user-error form-ui-invalid",T="user-success",N="user-success form-ui-valid",C=function(t){var n,r;if(!t.target)return;n=e(t.target).getNativeElement()[0];if(n.type=="submit"||!e.prop(n,"willValidate"))return;r=e.data(n,"webshimsswitchvalidityclass");var i=function(){if(t.type=="focusout"&&n.type=="radio"&&E(n.name))return;var r=e.prop(n,"validity"),i=e(n).getShadowElement(),s,o,u,f,l;e(n).trigger("refreshCustomValidityRules"),r.valid?i.hasClass(T)||(s=N,o=x,f="changedvaliditystate",u="changedvalid",a[n.type]&&n.checked&&h(n).not(n).removeClass(o).addClass(s).removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(l=w(r,n),e.data(n,"webshimsinvalidcause")!=l&&(e.data(n,"webshimsinvalidcause",l),f="changedvaliditystate"),i.hasClass(S)||(s=x,o=N,a[n.type]&&!n.checked&&h(n).not(n).removeClass(o).addClass(s),u="changedinvalid")),s&&(i.addClass(s).removeClass(o),setTimeout(function(){e(n).trigger(u)},0)),f&&setTimeout(function(){e(n).trigger(f)},0),e.removeData(t.target,"webshimsswitchvalidityclass")};r&&clearTimeout(r),t.type=="refreshvalidityui"?i():e.data(n,"webshimsswitchvalidityclass",setTimeout(i,9))};e(s).on(u.validityUIEvents||"focusout change refreshvalidityui",C),m.changedvaliditystate=!0,m.refreshCustomValidityRules=!0,m.changedvalid=!0,m.changedinvalid=!0,m.refreshvalidityui=!0,r.triggerInlineForm=function(t,n){e(t).trigger(n)},r.modules["form-core"].getGroupElements=h;var k=function(){r.scrollRoot=t||s.compatMode=="BackCompat"?e(s.body):e(s.documentElement)};k(),r.ready("DOM",k),r.getRelOffset=function(t,n){t=e(t);var r=e(n).offset(),i;return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()}),r.top-=i.top,r.left-=i.left,r},r.validityAlert=function(){var t="span",n,o=!1,u=!1,a=!1,f,l={hideDelay:5e3,showFor:function(t,n,r,s){l._create(),t=e(t);var u=e(t).getShadowElement(),c=l.getOffsetFromBody(u);l.clear(),s?this.hide():(this.getMessage(t,n),this.position(u,c),this.show(),this.hideDelay&&(o=setTimeout(f,this.hideDelay)),e(i).on("resize.validityalert reposoverlay.validityalert",function(){clearTimeout(a),a=setTimeout(function(){l.position(u)},9)})),r||this.setFocus(u,c)},getOffsetFromBody:function(e){return r.getRelOffset(n,e)},setFocus:function(o,u){var a=e(o).getShadowFocusElement(),l=r.scrollRoot.scrollTop(),c=(u||a.offset()).top-30,h;r.getID&&t=="label"&&n.attr("for",r.getID(a)),l>c&&(r.scrollRoot.animate({scrollTop:c-5},{queue:!1,duration:Math.max(Math.min(600,(l-c)*1.5),80)}),h=!0);try{a[0].focus()}catch(p){}h&&(r.scrollRoot.scrollTop(l),setTimeout(function(){r.scrollRoot.scrollTop(l)},0)),setTimeout(function(){e(s).on("focusout.validityalert",f)},10),e(i).triggerHandler("reposoverlay")},getMessage:function(t,r){r||(r=p(t[0])||t.prop("customValidationMessage")||t.prop("validationMessage")),r?e("span.va-box",n).text(r):this.hide()},position:function(t,r){r=r?e.extend({},r):l.getOffsetFromBody(t),r.top+=t.outerHeight(),n.css(r)},show:function(){n.css("display")==="none"&&n.css({opacity:0}).show(),n.addClass("va-visible").fadeTo(400,1)},hide:function(){n.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(u),clearTimeout(o),e(s).unbind(".validityalert"),e(i).unbind(".validityalert"),n.stop().removeAttr("for")},_create:function(){if(n)return;n=l.errorBubble=e("<"+t+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+t+">").css({position:"absolute",display:"none"}),r.ready("DOM",function(){n.appendTo("body"),e.fn.bgIframe&&n.bgIframe()})}};return f=e.proxy(l,"hide"),l}(),function(){var t,n=[],r,i;e(s).on("invalid",function(i){if(i.wrongWebkitInvalid)return;var o=e(i.target),u=o.getShadowElement();u.hasClass(S)||(u.addClass(x).removeClass(N),setTimeout(function(){e(i.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=i.isDefaultPrevented;var a=e.Event("firstinvalidsystem");e(s).triggerHandler(a,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&i.preventDefault(),n.push(i.target),i.extraData="fix",clearTimeout(r),r=setTimeout(function(){var r={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(i.target).trigger(r,r)},9),o=null,u=null})}(),e.fn.getErrorMessage=function(){var t="",n=this[0];return n&&(t=p(n)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),t},u.replaceValidationUI&&r.ready("DOM forms",function(){e(s).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})})})}(jQuery),function(e,t,n){"use strict";var r=t.audio&&t.video,i=!1,s=n.bugs,o=function(){n.ready(a,function(){n.mediaelement.createSWF||(n.mediaelement.loadSwf=!0,n.reTest([a],r))})},u=n.cfg.mediaelement,a=u&&u.player=="jwplayer"?"mediaelement-swf":"mediaelement-jaris",f;if(!u){n.error("mediaelement wasn't implemented but loaded");return}if(r){var l=document.createElement("video");t.videoBuffered="buffered"in l,i="loop"in l,n.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(n.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),n.reTest("mediaelement-native-fix"))}if(r&&!u.preferFlash){var c={1:1,2:1},h=function(t){var r,i=t.target.parentNode;!u.preferFlash&&(e(t.target).is("audio, video")||i&&e("source:last",i)[0]==t.target)&&(r=e(t.target).closest("audio, video"))&&!c[r.prop("error")]&&e(function(){f&&!u.preferFlash?(o(),n.ready("WINDOWLOAD "+a,function(){setTimeout(function(){!u.preferFlash&&n.mediaelement.createSWF&&!r.is(".nonnative-api-active")&&(u.preferFlash=!0,document.removeEventListener("error",h,!0),e("audio, video").each(function(){n.mediaelement.selectSource(this)}),n.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+r.prop("error")))},9)})):document.removeEventListener("error",h,!0)})};document.addEventListener("error",h,!0),e("audio, video").each(function(){var t=e.prop(this,"error");t&&!c[t]&&h({target:this})})}t.track&&!s.track&&function(){s.track||(s.track=typeof e("<track />")[0].readyState!="number");if(!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}var r=n.cfg.track,i=function(t){e(t.target).filter("track").each(o)},o=function(){if(s.track||!r.override&&e.prop(this,"readyState")==3)r.override=!0,n.reTest("track"),document.removeEventListener("error",i,!0),this&&e.nodeName(this,"track")?n.error("track support was overwritten. Please check your vtt including your vtt mime-type"):n.info("track support was overwritten. due to bad browser support")},u=function(){document.addEventListener("error",i,!0),s.track?o():e("track").each(o)};r.override||(n.isReady("track")?u():e(u))}(),n.register("mediaelement-core",function(e,n,l,c,h){f=swfobject.hasFlashPlayerVersion("9.0.115"),e("html").addClass(f?"swf":"no-swf");var p=n.mediaelement;p.parseRtmp=function(e){var t=e.src.split("://"),r=t[1].split("/"),i,s,o;e.server=t[0]+"://"+r[0]+"/",e.streamId=[];for(i=1,s=r.length;i<s;i++)!o&&r[i].indexOf(":")!==-1&&(r[i]=r[i].split(":")[1],o=!0),o?e.streamId.push(r[i]):e.server+=r[i]+"/";e.streamId.length||n.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var d=function(t,n){t=e(t);var r={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")},i;if(!r.src)return r;i=t.attr("data-server"),i!=null&&(r.server=i),i=t.attr("type"),i?(r.type=i,r.container=e.trim(i.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),n=="source"&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),r.server?(r.type=n+"/rtmp",r.container=n+"/rtmp"):(i=p.getTypeForSrc(r.src,n,r),i&&(r.type=i,r.container=i))),i=t.attr("media"),i&&(r.media=i);if(r.type=="audio/rtmp"||r.type=="video/rtmp")r.server?r.streamId=r.src:p.parseRtmp(r);return r},v=!f&&"postMessage"in l&&r,m=function(){if(m.loaded)return;m.loaded=!0,e(function(){n.loader.loadList(["track-ui"])})},g=function(){var t;return function(){if(t||!v)return;t=!0,n.loader.loadScript("https://www.youtube.com/player_api"),e(function(){n.polyfill("mediaelement-yt")})}}(),y=function(){f?o():g()};n.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,n,r){if(t.indexOf("youtube.com/watch?")!=-1||t.indexOf("youtube.com/v/")!=-1)return"video/youtube";if(t.indexOf("rtmp")===0)return n+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var i;return e.each(p.mimeTypes[n],function(e,n){if(n.indexOf(t)!==-1)return i=e,!1}),i},p.srces=function(t,n){t=e(t);if(!n){n=[];var r=t[0].nodeName.toLowerCase(),i=d(t,r);return i.src?n.push(i):e("source",t).each(function(){i=d(this,r),i.src&&n.push(i)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(e){var n=c.createElement("source");typeof e=="string"&&(e={src:e}),n.setAttribute("src",e.src),e.type&&n.setAttribute("type",e.type),e.media&&n.setAttribute("media",e.media),t.append(n)})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==h&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,n){var r="";if(f||v)t=e(t),n=n||p.srces(t),e.each(n,function(e,t){if(t.container&&t.src&&(f&&p.swfMimeTypes.indexOf(t.container)!=-1||v&&t.container=="video/youtube"))return r=t,!1});return r};var b={};p.canNativePlaySrces=function(t,n){var i="";if(r){t=e(t);var s=(t[0].nodeName||"").toLowerCase();if(!b[s])return i;n=n||p.srces(t),e.each(n,function(e,n){if(n.type&&b[s].prop._supvalue.call(t[0],n.type))return i=n,!1})}return i},p.setError=function(t,r){r||(r="can't play sources"),e(t).pause().data("mediaerror",r),n.warn("mediaelementError: "+r),setTimeout(function(){e(t).data("mediaerror")&&e(t).trigger("mediaerror")},1)};var w=function(){var e;return function(t,r,i){e||m(),n.ready(f?a:"mediaelement-yt",function(){p.createSWF?p.createSWF(t,r,i):e||(e=!0,y(),w(t,r,i))}),!e&&v&&!p.createSWF&&g()}}(),E=function(e,t,n,r,i){var s;n||n!==!1&&t&&t.isActive=="third"?(s=p.canThirdPlaySrces(e,r),s?w(e,s,t):i?p.setError(e,!1):E(e,t,!1,r,!0)):(s=p.canNativePlaySrces(e,r),s?t&&t.isActive=="third"&&p.setActive(e,"html5",t):i?(p.setError(e,!1),t&&t.isActive=="third"&&p.setActive(e,"html5",t)):E(e,t,!0,r,!0))},S=/^(?:embed|object|datalist)$/i,x=function(t,r){var i=n.data(t,"mediaelementBase")||n.data(t,"mediaelementBase",{}),s=p.srces(t),o=t.parentNode;clearTimeout(i.loadTimer),e.data(t,"mediaerror",!1);if(!s.length||!o||o.nodeType!=1||S.test(o.nodeName||""))return;r=r||n.data(t,"mediaelement"),E(t,r,u.preferFlash||h,s)};p.selectSource=x,e(c).on("ended",function(t){var r=n.data(t.target,"mediaelement");if(i&&(!r||r.isActive=="html5")&&!e.prop(t.target,"loop"))return;setTimeout(function(){if(e.prop(t.target,"paused")||!e.prop(t.target,"loop"))return;e(t.target).prop("currentTime",0).play()},1)}),i||n.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var i=n.defineNodeNameProperty(t,"load",{prop:{value:function(){var e=n.data(this,"mediaelement");x(this,e),r&&(!e||e.isActive=="html5")&&i.prop._supvalue&&i.prop._supvalue.apply(this,arguments)}}});b[t]=n.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(n){var i="";return r&&b[t].prop._supvalue&&(i=b[t].prop._supvalue.call(this,n),i=="no"&&(i="")),!i&&f&&(n=e.trim((n||"").split(";")[0]),p.swfMimeTypes.indexOf(n)!=-1&&(i="maybe")),i}}})}),n.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=n.data(e,"mediaelementBase")||n.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){x(e),e=null},9)}});var T=function(){n.addReady(function(t,i){var s=e("video, audio",t).add(i.filter("video, audio")).each(function(){var t=n.data(this,"mediaelement");r&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay])')&&(!t||t.isActive=="html5")?e(this).prop("preload","metadata").mediaLoad():x(this,t),r&&function(){var t,n,r=this,i=function(){var t=e.prop(r,"buffered");if(!t)return;var n="";for(var i=0,s=t.length;i<s;i++)n+=t.end(i);return n},s=function(){var t=i();t!=n&&(n=t,e(r).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){e.type=="progress"&&(n=i()),clearTimeout(t),t=setTimeout(s,999)},"emptied stalled mediaerror abort suspend":function(e){e.type=="emptied"&&(n=!1),clearTimeout(t)}})}()});!m.loaded&&e("track",s).length&&m(),s=null})};t.track&&!s.track&&n.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(n.isReady("mediaelement-core",!0),T(),n.ready("WINDOWLOAD mediaelement",y)):n.ready(a,T),n.ready("WINDOWLOAD mediaelement",m)})}(jQuery,Modernizr,jQuery.webshims);