var swfmini=function(){function S(){if(g)return;try{var e=u.getElementsByTagName("body")[0].appendChild(H("span"));e.parentNode.removeChild(e)}catch(t){return}g=!0;var n=l.length;for(var r=0;r<n;r++)l[r]()}function x(e){g?e():l[l.length]=e}function T(e){}function N(){f&&C()}function C(){var n=u.getElementsByTagName("body")[0],r=H(t);r.setAttribute("type",s);var i=n.appendChild(r);if(i){var o=0;(function(){if(typeof i.GetVariable!=e){var t=i.GetVariable("$version");t&&(t=t.split(" ")[1].split(","),E.pv=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10)])}else if(o<10){o++,setTimeout(arguments.callee,10);return}n.removeChild(r),i=null})()}}function k(n){var r=null,i=P(n);if(i&&i.nodeName=="OBJECT")if(typeof i.SetVariable!=e)r=i;else{var s=i.getElementsByTagName(t)[0];s&&(r=s)}return r}function L(e){if(E.ie&&E.win&&e.readyState!=4){var t=H("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(A(e),t),e.style.display="none",function(){e.readyState==4?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(A(e),e)}function A(e){var n=H("div");if(E.win&&E.ie)n.innerHTML=e.innerHTML;else{var r=e.getElementsByTagName(t)[0];if(r){var i=r.childNodes;if(i){var s=i.length;for(var o=0;o<s;o++)(i[o].nodeType!=1||i[o].nodeName!="PARAM")&&i[o].nodeType!=8&&n.appendChild(i[o].cloneNode(!0))}}}return n}function O(n,r,i){var o,u=P(i);if(E.wk&&E.wk<312)return o;if(u){typeof n.id==e&&(n.id=i);if(E.ie&&E.win){var a="";for(var f in n)n[f]!=Object.prototype[f]&&(f.toLowerCase()=="data"?r.movie=n[f]:f.toLowerCase()=="styleclass"?a+=' class="'+n[f]+'"':f.toLowerCase()!="classid"&&(a+=" "+f+'="'+n[f]+'"'));var l="";for(var h in r)r[h]!=Object.prototype[h]&&(l+='<param name="'+h+'" value="'+r[h]+'" />');u.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>",c[c.length]=n.id,o=P(n.id)}else{var p=H(t);p.setAttribute("type",s);for(var d in n)n[d]!=Object.prototype[d]&&(d.toLowerCase()=="styleclass"?p.setAttribute("class",n[d]):d.toLowerCase()!="classid"&&p.setAttribute(d,n[d]));for(var v in r)r[v]!=Object.prototype[v]&&v.toLowerCase()!="movie"&&M(p,v,r[v]);u.parentNode.replaceChild(p,u),o=p}}return o}function M(e,t,n){var r=H("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function _(e){var t=P(e);t&&t.nodeName=="OBJECT"&&(E.ie&&E.win?(t.style.display="none",function(){t.readyState==4?D(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function D(e){var t=P(e);if(t){for(var n in t)typeof t[n]=="function"&&(t[n]=null);t.parentNode.removeChild(t)}}function P(e){var t=null;try{t=u.getElementById(e)}catch(n){}return t}function H(e){return u.createElement(e)}function B(e,t,n){e.attachEvent(t,n),h[h.length]=[e,t,n]}function j(e){var t=E.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function F(e,t){if(!w)return;var n,r=t?"visible":"hidden";g&&n&&P(e)&&(P(e).style.visibility=r)}function I(t){var n=/[\\\"<>\.;]/,r=n.exec(t)!=null;return r&&typeof encodeURIComponent!=e?encodeURIComponent(t):t}var e="undefined",t="object",n=jQuery.webshims,r="Shockwave Flash",i="ShockwaveFlash.ShockwaveFlash",s="application/x-shockwave-flash",o=window,u=document,a=navigator,f=!1,l=[N],c=[],h=[],p,d,v,m,g=!1,y,b,w=!0,E=function(){var n=typeof u.getElementById!=e&&typeof u.getElementsByTagName!=e&&typeof u.createElement!=e,l=a.userAgent.toLowerCase(),c=a.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(l),p=c?/mac/.test(c):/mac/.test(l),d=/webkit/.test(l)?parseFloat(l.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,v=!1,m=[0,0,0],g=null;if(typeof a.plugins!=e&&typeof a.plugins[r]==t)g=a.plugins[r].description,g&&(typeof a.mimeTypes==e||!a.mimeTypes[s]||!!a.mimeTypes[s].enabledPlugin)&&(f=!0,v=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),m[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),m[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),m[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof o.ActiveXObject!=e)try{var y=new ActiveXObject(i);y&&(g=y.GetVariable("$version"),g&&(v=!0,g=g.split(" ")[1].split(","),m=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]))}catch(b){}return{w3:n,pv:m,wk:d,ie:v,win:h,mac:p}}(),q=function(){E.ie&&E.win&&window.attachEvent&&window.attachEvent("onunload",function(){var e=h.length;for(var t=0;t<e;t++)h[t][0].detachEvent(h[t][1],h[t][2]);var n=c.length;for(var r=0;r<n;r++)_(c[r]);for(var i in E)E[i]=null;E=null;for(var s in swfmini)swfmini[s]=null;swfmini=null})}();return n.ready("DOM",S),{registerObject:function(){},getObjectById:function(e){if(E.w3)return k(e)},embedSWF:function(n,r,i,s,o,u,a,f,l,c){var h={success:!1,id:r};E.w3&&!(E.wk&&E.wk<312)&&n&&r&&i&&s&&o?(F(r,!1),x(function(){i+="",s+="";var u={};if(l&&typeof l===t)for(var p in l)u[p]=l[p];u.data=n,u.width=i,u.height=s;var d={};if(f&&typeof f===t)for(var v in f)d[v]=f[v];if(a&&typeof a===t)for(var m in a)typeof d.flashvars!=e?d.flashvars+="&"+m+"="+a[m]:d.flashvars=m+"="+a[m];if(j(o)){var g=O(u,d,r);u.id==r&&F(r,!0),h.success=!0,h.ref=g}else F(r,!0);c&&c(h)})):c&&c(h)},switchOffAutoHideShow:function(){w=!1},ua:E,getFlashPlayerVersion:function(){return{major:E.pv[0],minor:E.pv[1],release:E.pv[2]}},hasFlashPlayerVersion:j,createSWF:function(e,t,n){return E.w3?O(e,t,n):undefined},showExpressInstall:function(){},removeSWF:function(e){E.w3&&_(e)},createCSS:function(){},addDomLoadEvent:x,addLoadEvent:T,expressInstallCallback:function(){}}}();(function(e){"use strict";var t=window.Modernizr,n=e.webshims,r=n.bugs,i=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),s=function(){if(i[0].querySelector)try{r.findRequired=!i[0].querySelector("select:required")}catch(e){r.findRequired=!1}},o=e("input",i).eq(0),u=function(e){n.loader.loadList(["dom-extend"]),n.ready("dom-extend",e)};r.findRequired=!1,r.validationMessage=!1,n.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!!(n.apply(this,arguments)||e.data(t.target,t.type+"DefaultPrevented")||!1)},t._isPolyfilled=!0}};if(!t.formvalidation||r.bustedValidity){s();return}n.capturingEvents(["input"]),n.capturingEvents(["invalid"],!0);if(window.opera||window.testGoodWithFix)i.appendTo("head"),s(),r.validationMessage=!o.prop("validationMessage"),n.reTest(["form-native-extend","form-message"]),i.remove(),e(function(){u(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(r){var i=n.defineNodeNameProperty(r,"checkValidity",{prop:{value:function(){n.fromSubmit||e(this).on("invalid.checkvalidity",t),n.fromCheckValidity=!0;var r=i.prop._supvalue.apply(this,arguments);return n.fromSubmit||e(this).unbind("invalid.checkvalidity",t),n.fromCheckValidity=!1,r}}})})})});e.browser.webkit&&!n.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,n=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(n=e.target.form)&&setTimeout(function(){n=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&n&&n==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()})(jQuery),jQuery.webshims.register("form-core",function(e,t,n,r,i,s){"use strict";var o={checkbox:1,radio:1},u=e([]),a=t.bugs,f={radio:1},l=function(t){t=e(t);var n,i,s=u;return f[t[0].type]&&(i=t.prop("form"),n=t[0].name,n?i?s=e(i[n]):s=e(r.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):s=t,s=s.filter('[type="radio"]')),s},c=t.getContentValidationMessage=function(t,n,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]&&(i=i[r]),typeof i=="object"&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){if(t&&e!="valid"&&i[e])return i=i[e],!1})),typeof i=="object"&&(i=i.defaultMessage),i||""},h={number:1,range:1,date:1},p=function(t){var n=!1;return e(e.prop(t,"elements")).each(function(){n=e(this).is(":invalid");if(n)return!1}),n};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!p(t):!!e.prop(t,"willValidate")&&!!v(t)},"invalid-element":function(t){return e.nodeName(t,"form")?p(t):!!e.prop(t,"willValidate")&&!v(t)},"required-element":function(t){return!!e.prop(t,"willValidate")&&!!e.prop(t,"required")},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!!e.prop(t,"willValidate")&&e.prop(t,"required")===!1},"in-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!!(n&&!n.rangeOverflow&&!n.rangeUnderflow)},"out-of-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||!n.rangeOverflow&&!n.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1},Modernizr.formvalidation&&e.browser.webkit&&!t.bugs.bustedValidity&&t.browserVersion<27&&function(){var n=function(){var e;(e=this.validity)&&!e.customError&&this.setCustomValidity("")};t.addReady(function(t,i){t!==r&&e('input[type="radio"]:invalid',t).add(i.filter('input[type="radio"]:invalid')).each(n)})}();var d=e.event.customEvent||{},v=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(a.bustedValidity||a.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,s=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,n=function(n){var r=arguments;return r=e.call(r,1,r.length),r.unshift(n.replace(i,s)),t.apply(this,r)};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",r.documentElement))e.find.matchesSelector=function(e,t){return t=t.replace(i,s),n.call(this,e,t)}}();var m=e.prop,g={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,n,r){var s=m.apply(this,arguments);return t&&"form"in t&&g[n]&&r!==i&&e(t).hasClass(w)&&v(t)&&(e(t).getShadowElement().removeClass(w),n=="checked"&&r&&l(t).not(t).removeClass(w).removeAttr("aria-invalid")),s};var y=function(t,n){var r;return e.each(t,function(t,i){if(i)return r=t=="customError"?e.prop(n,"validationMessage"):t,!1}),r},b=function(e){var t;try{t=r.activeElement.name===e}catch(n){}return t},w="user-error",E="user-success",S=function(t){var n,r;if(!t.target)return;n=e(t.target).getNativeElement()[0];if(n.type=="submit"||!e.prop(n,"willValidate"))return;r=e.data(n,"webshimsswitchvalidityclass");var i=function(){if(t.type=="focusout"&&n.type=="radio"&&b(n.name))return;var r=e.prop(n,"validity"),i=e(n).getShadowElement(),s,u,a,f,c;e(n).trigger("refreshCustomValidityRules"),r.valid?i.hasClass(E)||(s=E,u=w,f="changedvaliditystate",a="changedvalid",o[n.type]&&n.checked&&l(n).not(n).removeClass(u).addClass(s).removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(c=y(r,n),e.data(n,"webshimsinvalidcause")!=c&&(e.data(n,"webshimsinvalidcause",c),f="changedvaliditystate"),i.hasClass(w)||(s=w,u=E,o[n.type]&&!n.checked&&l(n).not(n).removeClass(u).addClass(s),a="changedinvalid")),s&&(i.addClass(s).removeClass(u),setTimeout(function(){e(n).trigger(a)},0)),f&&setTimeout(function(){e(n).trigger(f)},0),e.removeData(t.target,"webshimsswitchvalidityclass")};r&&clearTimeout(r),t.type=="refreshvalidityui"?i():e.data(n,"webshimsswitchvalidityclass",setTimeout(i,9))};e(r).on(s.validityUIEvents||"focusout change refreshvalidityui",S),d.changedvaliditystate=!0,d.refreshCustomValidityRules=!0,d.changedvalid=!0,d.changedinvalid=!0,d.refreshvalidityui=!0,t.triggerInlineForm=function(t,n){e(t).trigger(n)},t.modules["form-core"].getGroupElements=l;var x=function(){t.scrollRoot=e.browser.webkit||r.compatMode=="BackCompat"?e(r.body):e(r.documentElement)};x(),t.ready("DOM",x),t.getRelOffset=function(t,n){t=e(t);var r=e(n).offset(),i;return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()}),r.top-=i.top,r.left-=i.left,r},t.wsPopover={_create:function(){this.options=e.extend({},t.cfg.wspopover,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.options.prepareFor&&this.prepareFor(e(this.options.prepareFor).getNativeElement(),e(this.options.prepareFor).getShadowElement()),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.element.on({mousedown:function(n){e.stopBlur=!0,e.timers.stopBlur=setTimeout(t,9)}})},show:function(t){if(this.isVisible)return;this.isVisible=!0,t=e(t).getNativeElement();var i=this,s=e(t).getShadowElement();this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.options.prepareFor||this.prepareFor(t,s),this.position(s),i.timers.show=setTimeout(function(){i.element.css("display",""),i.timers.show=setTimeout(function(){i.element.addClass("ws-po-visible")},9)},9),e(r).on("focusin"+this.eventns+" mousedown"+this.eventns,function(t){i.options.hideOnBlur&&!i.stopBlur&&!e.contains(i.lastElement.parent()[0]||r.body,t.target)&&!e.contains(i.element.parent()[0],t.target)&&i.hide()}),e(n).on("resize"+this.eventns+" pospopover"+this.eventns,function(){clearTimeout(i.timers.repos),i.timers.repos=setTimeout(function(){i.position(s)},900)})},prepareFor:function(t,n){var r,i=e.extend({},this.options,e(t.prop("form")||[]).data("wspopover")||{},t.data("wspopover")),s=this;this.lastElement=e(t).getShadowFocusElement(),i.appendTo=="element"?this.element.insertAfter(t):this.element.appendTo(i.appendTo),this.element.attr({"data-class":t.prop("className"),"data-id":t.prop("id")}),this.element.css({width:i.constrainWidth?n.outerWidth():""}),i.hideOnBlur&&(r=function(e){s.stopBlur?e.stopImmediatePropagation():s.hide()},this.options.prepareFor?s.lastElement.on("focusout"+s.eventns+" blur"+s.eventns,r).data("preparedpopover",s):s.timers.bindBlur=setTimeout(function(){s.lastElement.on("focusout"+s.eventns+" blur"+s.eventns,r)},10)),!this.prepared&&e.fn.bgIframe&&e.browser.msie&&parseInt(e.browser.version,10)<7&&this.element.bgIframe(),this.prepared=!0},clear:function(){e(n).off(this.eventns),e(r).off(this.eventns),this.options.prepareFor||this.lastElement.off(this.eventns),this.stopBlur=!1,e.each(this.timers,function(e,t){clearTimeout(t)})},hide:function(){if(!this.isVisible)return;this.isVisible=!1;var t=this,r=function(){t.element.css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(t.timers.forcehide)};this.clear(),this.element.removeClass("ws-po-visible"),e(n).on("resize"+this.eventns,r),t.timers.forcehide=setTimeout(r,999)},position:function(e){var n=t.getRelOffset(this.element.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0}).removeAttr("hidden"),e);n.top+=e.outerHeight(),this.element.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(n)}},t.wsPopover.id=0,t.validityAlert=function(){var r=!1,i=t.objectCreate(t.wsPopover,{},s.messagePopover),o=i.hide.bind(i);return i.element.addClass("validity-alert").attr({role:"alert"}),e.extend(i,{hideDelay:5e3,showFor:function(t,n,r,i){t=e(t).getNativeElement(),this.clear(),this.hide(),i||(this.getMessage(t,n),this.show(t),this.hideDelay&&(this.timers.delayedHide=setTimeout(o,this.hideDelay))),r||this.setFocus(t)},setFocus:function(r){var i=e(r).getShadowFocusElement(),s=t.scrollRoot.scrollTop(),o=i.offset().top-30,u;s>o&&(t.scrollRoot.animate({scrollTop:o-5},{queue:!1,duration:Math.max(Math.min(600,(s-o)*1.5),80)}),u=!0);try{i[0].focus()}catch(a){}u&&(t.scrollRoot.scrollTop(s),setTimeout(function(){t.scrollRoot.scrollTop(s)},0)),e(n).triggerHandler("pospopover"+this.eventns)},getMessage:function(e,t){t||(t=c(e[0])||e.prop("customValidationMessage")||e.prop("validationMessage")),t?i.contentElement.text(t):this.hide()}}),i}(),function(){var t,n=[],i,s;e(r).on("invalid",function(s){if(s.wrongWebkitInvalid)return;var o=e(s.target),u=o.getShadowElement();u.hasClass(w)||(u.addClass(w).removeClass(E),setTimeout(function(){e(s.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=s.isDefaultPrevented;var a=e.Event("firstinvalidsystem");e(r).triggerHandler(a,{element:s.target,form:s.target.form,isInvalidUIPrevented:s.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&s.preventDefault(),n.push(s.target),s.extraData="fix",clearTimeout(i),i=setTimeout(function(){var r={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(s.target).trigger(r,r)},9),o=null,u=null})}(),e.fn.getErrorMessage=function(){var t="",n=this[0];return n&&(t=c(n)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),t},s.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})})}),function(e,t,n){"use strict";var r=t.audio&&t.video,i=!1,s=n.bugs,o=function(){n.ready(a,function(){n.mediaelement.createSWF||(n.mediaelement.loadSwf=!0,n.reTest([a],r))})},u=n.cfg.mediaelement,a=u&&u.player=="jwplayer"?"mediaelement-swf":"mediaelement-jaris",f;if(!u){n.error("mediaelement wasn't implemented but loaded");return}if(r){var l=document.createElement("video");t.videoBuffered="buffered"in l,i="loop"in l,n.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(n.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),n.reTest("mediaelement-native-fix"))}if(r&&!u.preferFlash){var c=function(t){var r=t.target.parentNode;!u.preferFlash&&(e(t.target).is("audio, video")||r&&e("source:last",r)[0]==t.target)&&n.ready("DOM mediaelement",function(){f&&o(),n.ready("WINDOWLOAD "+a,function(){setTimeout(function(){f&&!u.preferFlash&&n.mediaelement.createSWF&&!e(t.target).closest("audio, video").is(".nonnative-api-active")?(u.preferFlash=!0,document.removeEventListener("error",c,!0),e("audio, video").mediaLoad(),n.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src)):f||document.removeEventListener("error",c,!0)},20)})})};document.addEventListener("error",c,!0),e("audio, video").each(function(){this.error&&c({target:this})})}t.track&&!s.track&&function(){s.track||(s.track=typeof e("<track />")[0].readyState!="number");if(!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}var r=n.cfg.track,i=function(t){e(t.target).filter("track").each(o)},o=function(){if(s.track||!r.override&&e.prop(this,"readyState")==3)r.override=!0,n.reTest("track"),document.removeEventListener("error",i,!0),this&&e.nodeName(this,"track")?n.error("track support was overwritten. Please check your vtt including your vtt mime-type"):n.info("track support was overwritten. due to bad browser support")},u=function(){document.addEventListener("error",i,!0),s.track?o():e("track").each(o)};r.override||(n.isReady("track")?u():e(u))}(),n.register("mediaelement-core",function(e,n,l,c,h){f=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(f?"swf":"no-swf");var p=n.mediaelement;p.parseRtmp=function(e){var t=e.src.split("://"),r=t[1].split("/"),i,s,o;e.server=t[0]+"://"+r[0]+"/",e.streamId=[];for(i=1,s=r.length;i<s;i++)!o&&r[i].indexOf(":")!==-1&&(r[i]=r[i].split(":")[1],o=!0),o?e.streamId.push(r[i]):e.server+=r[i]+"/";e.streamId.length||n.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var d=function(t,n){t=e(t);var r={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")},i;if(!r.src)return r;i=t.attr("data-server"),i!=null&&(r.server=i),i=t.attr("type"),i?(r.type=i,r.container=e.trim(i.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),n=="source"&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),r.server?(r.type=n+"/rtmp",r.container=n+"/rtmp"):(i=p.getTypeForSrc(r.src,n,r),i&&(r.type=i,r.container=i))),i=t.attr("media"),i&&(r.media=i);if(r.type=="audio/rtmp"||r.type=="video/rtmp")r.server?r.streamId=r.src:p.parseRtmp(r);return r},v=!f&&"postMessage"in l&&r,m=function(){if(m.loaded)return;m.loaded=!0,e(function(){n.loader.loadList(["track-ui"])})},g=function(){var t;return function(){if(t||!v)return;t=!0,n.loader.loadScript("https://www.youtube.com/player_api"),e(function(){n.polyfill("mediaelement-yt")})}}(),y=function(){f?o():g()};n.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,n,r){if(t.indexOf("youtube.com/watch?")!=-1||t.indexOf("youtube.com/v/")!=-1)return"video/youtube";if(t.indexOf("rtmp")===0)return n+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var i;return e.each(p.mimeTypes[n],function(e,n){if(n.indexOf(t)!==-1)return i=e,!1}),i},p.srces=function(t,n){t=e(t);if(!n){n=[];var r=t[0].nodeName.toLowerCase(),i=d(t,r);return i.src?n.push(i):e("source",t).each(function(){i=d(this,r),i.src&&n.push(i)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(e){var n=c.createElement("source");typeof e=="string"&&(e={src:e}),n.setAttribute("src",e.src),e.type&&n.setAttribute("type",e.type),e.media&&n.setAttribute("media",e.media),t.append(n)})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==h&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,n){var r="";if(f||v)t=e(t),n=n||p.srces(t),e.each(n,function(e,t){if(t.container&&t.src&&(f&&p.swfMimeTypes.indexOf(t.container)!=-1||v&&t.container=="video/youtube"))return r=t,!1});return r};var b={};p.canNativePlaySrces=function(t,n){var i="";if(r){t=e(t);var s=(t[0].nodeName||"").toLowerCase(),o=(b[s]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return i;n=n||p.srces(t),e.each(n,function(e,n){if(n.type&&o.call(t[0],n.type))return i=n,!1})}return i},p.setError=function(t,r){r||(r="can't play sources"),e(t).pause().data("mediaerror",r),n.warn("mediaelementError: "+r),setTimeout(function(){e(t).data("mediaerror")&&e(t).trigger("mediaerror")},1)};var w=function(){var e;return function(t,r,i){e||m(),n.ready(f?a:"mediaelement-yt",function(){p.createSWF?p.createSWF(t,r,i):e||(e=!0,y(),w(t,r,i))}),!e&&v&&!p.createSWF&&g()}}(),E=function(e,t,n,r,i){var s;n||n!==!1&&t&&t.isActive=="third"?(s=p.canThirdPlaySrces(e,r),s?w(e,s,t):i?p.setError(e,!1):E(e,t,!1,r,!0)):(s=p.canNativePlaySrces(e,r),s?t&&t.isActive=="third"&&p.setActive(e,"html5",t):i?(p.setError(e,!1),t&&t.isActive=="third"&&p.setActive(e,"html5",t)):E(e,t,!0,r,!0))},S=/^(?:embed|object|datalist)$/i,x=function(t,r){var i=n.data(t,"mediaelementBase")||n.data(t,"mediaelementBase",{}),s=p.srces(t),o=t.parentNode;clearTimeout(i.loadTimer),e.data(t,"mediaerror",!1);if(!s.length||!o||o.nodeType!=1||S.test(o.nodeName||""))return;r=r||n.data(t,"mediaelement"),E(t,r,u.preferFlash||h,s)};e(c).on("ended",function(t){var r=n.data(t.target,"mediaelement");if(i&&(!r||r.isActive=="html5")&&!e.prop(t.target,"loop"))return;setTimeout(function(){if(e.prop(t.target,"paused")||!e.prop(t.target,"loop"))return;e(t.target).prop("currentTime",0).play()},1)}),n.ready("dom-support",function(){i||n.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var i=n.defineNodeNameProperty(t,"load",{prop:{value:function(){var e=n.data(this,"mediaelement");x(this,e),r&&(!e||e.isActive=="html5")&&i.prop._supvalue&&i.prop._supvalue.apply(this,arguments)}}});b[t]=n.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(n){var i="";return r&&b[t].prop._supvalue&&(i=b[t].prop._supvalue.call(this,n),i=="no"&&(i="")),!i&&f&&(n=e.trim((n||"").split(";")[0]),p.swfMimeTypes.indexOf(n)!=-1&&(i="maybe")),i}}})}),n.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=n.data(e,"mediaelementBase")||n.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){x(e),e=null},9)}})});var T=function(){var t=function(){e.browser.msie&&n.browserVersion>8&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay])')?e(this).prop("preload","metadata").mediaLoad():x(this);if(r){var t,i,s=this,o=function(){var t=e.prop(s,"buffered");if(!t)return;var n="";for(var r=0,i=t.length;r<i;r++)n+=t.end(r);return n},u=function(){var t=o();t!=i&&(i=t,e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){e.type=="progress"&&(i=o()),clearTimeout(t),t=setTimeout(u,999)},"emptied stalled mediaerror abort suspend":function(e){e.type=="emptied"&&(i=!1),clearTimeout(t)}})}},i=!1;n.ready("dom-support",function(){i=!0,n.addReady(function(n,r){var i=e("video, audio",n).add(r.filter("video, audio")).each(t);!m.loaded&&e("track",i).length&&m(),i=null})}),r&&!i&&n.addReady(function(t,n){i||e("video, audio",t).add(n.filter("video, audio")).each(function(){if(!p.canNativePlaySrces(this)||!m.loaded&&e("track",this).length)return y(),i=!0,!1})})};t.track&&!s.track&&n.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(n.isReady("mediaelement-core",!0),T(),n.ready("WINDOWLOAD mediaelement",y)):n.ready(a,T),n.ready("WINDOWLOAD mediaelement",m)})}(jQuery,Modernizr,jQuery.webshims);