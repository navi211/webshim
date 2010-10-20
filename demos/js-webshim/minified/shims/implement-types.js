(function(b){if(!(b.support.validity===true&&b('<input type="datetime-local" />')[0].type=="datetime-local"&&b('<input type="range" />')[0].type=="range")){var g=b.webshims.inputTypes;b.webshims.addInputType=function(a,d){g[a]=d};var j={};b.webshims.addValidityRule=function(a,d){j[a]=d};b.webshims.addValidityRule("typeMismatch",function(a,d,e){if(d==="")return false;var c=false;if(!("type"in e))e.type=(a[0].getAttribute("type")||"").toLowerCase();if(g[e.type]&&g[e.type].mismatch)c=g[e.type].mismatch(d,
a);return c});var o=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],k=b.fn.val,h=function(a){if(g[(a.getAttribute&&a.getAttribute("type")||"").toLowerCase()])b.attr(a,"validity")},p=b.attr,q={value:1,val:1,min:1,max:1,step:1};b.attr=function(a,d,e){var c=p.apply(this,arguments);q[d]&&e!==undefined&&h(a);return c};b.webshims.attr("validity",{elementNames:["input"],getter:function(a){var d=a.validity,e={};if(!d)return d;
var c={};o.forEach(function(f){c[f]=d[f]});if(!b.attr(a,"willValidate"))return c;e.type=(a.getAttribute&&a.getAttribute("type")||"").toLowerCase();if(!g[e.type])return c;var l=b(a),r=k.call(l),s=!!b.data(a,"hasCustomError");c.customError=s;if(c.valid&&c.customError)c.valid=false;else if(!c.valid){var m=true;b.each(c,function(f,i){if(i)return m=false});if(m)c.valid=true}if((a.nodeName||"").toLowerCase()=="select")return c;b.each(j,function(f,i){var n;c[f]=i(l,r,e);if(c[f]&&c.valid){n=b.webshims.createValidationMessage(a,
f);a.setCustomValidity(n);c.valid=false}});c.valid&&a.setCustomValidity("");return c}});b.webshims.addMethod("setCustomValidity",function(a){a+="";this.setCustomValidity(a);b.data(this,"hasCustomError",!!a);h(this)});b.fn.val=function(){var a=k.apply(this,arguments);this.each(function(){h(this)});return a};document.addEventListener&&document.addEventListener("change",function(a){h(a.target)},true);b.webshims.ready("validation-base",function(){b.webshims.addReady(function(a){b("input",a).each(function(){h(this)})});
b.webshims.createReadyEvent("implement-types")},true)}})(jQuery);
