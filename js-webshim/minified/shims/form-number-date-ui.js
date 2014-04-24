webshims.register("form-number-date-ui",function(a,b,c,d,e,f){"use strict";var g,h=b.formcfg,i=Modernizr.formvalidation&&!b.bugs.bustedValidity,j=["01","02","03","04","05","06","07","08","09","10","11","12"],k=function(a){a.stopImmediatePropagation()},l=function(b){var c="monthSelect"+b.monthNames;if(!g[c]){var d=g.date[b.monthNames]||j;g[c]='<option value=""></option>'+a.map(j,function(a,b){return'<option value="'+a+'">'+d[b]+"</option>"}).join("")}return g[c]},m='<select class="dd"><option value=""></option>'+function(){for(var a=1,b=[];32>a;)b.push("<option>"+(10>a?"0"+a:a)+"</option>"),a++;return b.join("")}()+"</select>",n=function(b){if(!g.patterns[b+"Obj"]){var c={};a.each(g.patterns[b].split(g[b+"Format"]),function(a,b){c[b]=a}),g.patterns[b+"Obj"]=c}},o=function(c,d){var e,f,g,h;d.yearSelect&&(f=parseInt(d.value.split("-")[0],10),g=d.max.split("-"),h=d.min.split("-"),e=b.picker.createYearSelect(f||parseInt(h[0],10)||parseInt(g[0],10)||r,g,h),e.unshift("<option />"),a(c.elements).filter("select.yy").html(e.join("")).each(function(){f||(a("option[selected]",this).removeAttr("selected"),a(this).val())}))},p={date:{_create:function(b){var c={splits:[]};return c.splits.push(b.yearSelect?a('<select class="yy"></select>')[0]:a('<input type="text" class="yy" size="4" inputmode="numeric" maxlength="4" />')[0]),c.splits.push(b.monthSelect?a('<select class="mm">'+l(b)+"</select>")[0]:a('<input type="text" class="mm" inputmode="numeric" maxlength="2" size="2" />')[0]),c.splits.push(b.daySelect?a(m)[0]:a('<input type="text" class="dd ws-spin" inputmode="numeric" maxlength="2" size="2" />')[0]),c.elements=[c.splits[0],a('<span class="ws-input-seperator" />')[0],c.splits[1],a('<span class="ws-input-seperator" />')[0],c.splits[2]],o(c,b),c},sort:function(b){n("d");var c=0,d=a(".ws-input-seperator",b).html(g.dFormat),e=a("input, select",b);a.each(g.patterns.dObj,function(a){var f=e.filter("."+a);f[0]&&(f.appendTo(b),c<d.length&&d.eq(c).insertAfter(f),c++)})}},month:{_create:function(b){var c={splits:[]};return c.splits.push(b.yearSelect?a('<select class="yy"></select>')[0]:a('<input type="text" class="yy" size="4" inputmode="numeric" maxlength="4" />')[0]),b.monthSelect?c.splits.push(a('<select class="mm">'+l(b)+"</select>")[0]):(c.splits.push(a('<input type="text" class="mm ws-spin" />')[0]),b.onlyMonthDigits&&a(c.splits[1]).attr({inputmode:"numeric",size:2,maxlength:2})),c.elements=[c.splits[0],a('<span class="ws-input-seperator" />')[0],c.splits[1]],o(c,b),c},sort:function(b){var c,d=a(".ws-input-seperator",b).html(g.dFormat),e=a("input.mm, select.mm",b);g.date.showMonthAfterYear?(e.appendTo(b),c="insertBefore"):(e.prependTo(b),c="insertAfter"),d[c](e)}}},q=new Date((new Date).getTime()-60*(new Date).getTimezoneOffset()*1e3),r=q.getFullYear();q=new Date(q.getFullYear(),q.getMonth(),q.getDate(),q.getHours()).getTime();var s={number:{step:1},"datetime-local":{step:60,start:new Date(q).getTime()},time:{step:60},month:{step:1,start:new Date(q)},date:{step:1,start:new Date(q)}},t=function(){var c=function(){return b.getID(this)};return function(b,d,e){a(b).attr({"aria-labelledby":d.map(c).get().join(" ")}),e||d.on("click",function(a){return b.getShadowFocusElement().focus(),a.preventDefault(),!1})}}(),u=function(a){return a?(a+="",1==a.length?"0"+a:a):""},v=function(a,c){return a=("color"==a?"color":"forms")+"-picker",v[c+"Loaded"+a]||(v[c+"Loaded"+a]=!0,b.ready(c,function(){b.loader.loadList([a])})),a};f.addZero=u,b.loader.addModule("forms-picker",{noAutoCallback:!0,css:"styles/forms-picker.css",options:f}),b.loader.addModule("color-picker",{noAutoCallback:!0,css:"jpicker/jpicker.css",options:f,d:["forms-picker"]}),f.steps=s,function(){h.de=a.extend(!0,{numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},month:{currentText:"Aktueller Monat"},time:{currentText:"Jetzt"},date:{close:"schlie\xdfen",clear:"L\xf6schen",prevText:"Zur\xfcck",nextText:"Vor",currentText:"Heute",monthNames:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},h.de||{}),h.en=a.extend(!0,{numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},meridian:["AM","PM"],month:{currentText:"This month"},time:{currentText:"Now"},date:{closeText:"Done",clear:"Clear",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},h.en||{}),h["en-US"]||(h["en-US"]=a.extend(!0,{},h.en)),h["en-GB"]||(h["en-GB"]=a.extend(!0,{},h.en,{date:{firstDay:1},patterns:{d:"dd/mm/yy"}})),h["en-AU"]||(h["en-AU"]=a.extend(!0,{},h["en-GB"])),h[""]||(h[""]=h["en-US"]),g=h[""];var c=function(b){if(!b.date.monthkeys){var c=function(a,c){var d,e=a+1;d=10>e?"0"+e:""+e,b.date.monthkeys[e]=d,b.date.monthkeys[c]=d,b.date.monthkeys[c.toLowerCase()]=d};b.date.monthkeys={},b.date.monthDigits=j,b.numberSigns+="-",b.meridian&&(b.timeSigns+=b.meridian[0]+b.meridian[1]+b.meridian[0].toLowerCase()+b.meridian[1].toLowerCase()),a.each(b.date.monthNames,c),a.each(b.date.monthNamesShort,c)}b.colorSigns||(b.colorSigns="#abcdefABCDEF"),b["datetime-localSigns"]||(b["datetime-localSigns"]=b.dateSigns+b.timeSigns),b["datetime-local"]||(b["datetime-local"]={}),b.time||(b.time={}),!b["datetime-local"].currentText&&b.time.currentText&&(b["datetime-local"].currentText=b.time.currentText)},e=function(){c(g),a(d).triggerHandler("wslocalechange")};g=b.activeLang(h),e(),a(h).on("change",function(){g=h.__active,e()})}(),function(){var c=function(a,b){return"number"==typeof a||a&&a==1*a?1*a:b},d={number:function(a,b){var c,d,e,f;if(b&&b.nogrouping)return(a+"").replace(/\,/g,"").replace(/\./,g.numberFormat["."]);for(a+="","-"==a.charAt(0)&&(f=!0,a=a.replace("-","")),c=a.split("."),d=c[0].length,e=d-1,a="";e>=0;)a=c[0].charAt(e)+a,e>0&&(d-e)%3===0&&(a=g.numberFormat[","]+a),--e;return null!=c[1]&&(a+=g.numberFormat["."]+c[1]),f&&(a="-"+a),a},time:function(b){var c;return b&&g.meridian&&(b=b.split(":"),c=1*b[0],c&&c>=12?(b[0]=u(c-12+""),c=1):c=0,"00"===b[0]&&(b[0]="12"),b=a.trim(b.join(":"))+" "+g.meridian[c]),b},"datetime-local":function(b,c){var d=a.trim(b||"").split("T");return 2==d.length&&(b=this.date(d[0],c)+" "+this.time(d[1],c)),b},month:function(a,b){var c,d=a.split("-");return d[0]&&d[1]?(b&&b.monthSelect||(c=g.date[b.monthNames]||g.date.monthNames,d[1]=c[1*d[1]-1]),b&&b.splitInput?a=[d[0]||"",d[1]||""]:d[1]&&(a=g.date.showMonthAfterYear?d.join(" "):d[1]+" "+d[0])):b&&b.splitInput&&(a=[d[0]||"",d[1]||""]),a},date:function(a,b){var c=(a+"").split("-");return c[2]&&c[1]&&c[0]?b&&b.splitInput?a=c:(a=g.patterns.d.replace("yy",c[0]||""),a=a.replace("mm",c[1]||""),a=a.replace("dd",c[2]||"")):b&&b.splitInput&&(a=[c[0]||"",c[1]||"",c[2]||""]),a},color:function(a){var b="#000000";return a&&(a=a.toLowerCase(),7==a.length&&h("color").isValid(a)&&(b=a)),b}},e={number:function(a){return(a+"").split(g.numberFormat[","]).join("").replace(g.numberFormat["."],".")},"datetime-local":function(b,c){var d,e=a.trim(b||"").split(/\s+/);return 2==e.length?(-1!=e[0].indexOf(":")&&-1==e[1].indexOf(":")&&(d=e[1],e[1]=e[0],e[0]=d),b=this.date(e[0],c)+"T"+this.time(e[1],c)):3==e.length&&(b=this.date(e[0],c)+"T"+this.time(e[1]+e[2],c)),b},time:function(b){var c;return b&&g.meridian&&(b=b.toUpperCase(),"12"===b.substr(0,2)&&(b="00"+b.substr(2)),-1!=b.indexOf(g.meridian[1])&&(b=b.split(":"),c=1*b[0],isNaN(c)||(b[0]=c+12),b=b.join(":")),b=a.trim(b.replace(g.meridian[0],"").replace(g.meridian[1],""))),b},month:function(a,b,c){var d=b.splitInput?a:a.trim().split(/[\.\s-\/\\]+/);return 2==d.length&&d[0]&&d[1]?(d[0]=!c&&g.date.monthkeys[d[0]]||d[0],d[1]=!c&&g.date.monthkeys[d[1]]||d[1],a=2==d[1].length&&d[0].length>3?d[0]+"-"+d[1]:2==d[0].length&&d[1].length>3?d[1]+"-"+d[0]:""):b.splitInput&&(a=""),a},date:function(a,b,c){n("d");var d,e,f="";return b.splitInput?e={yy:0,mm:1,dd:2}:(e=g.patterns.dObj,a=a.split(g.dFormat)),3==a.length&&a[0]&&a[1]&&a[2]&&(!c||a[e.yy].length>3&&2==a[e.mm].length&&2==a[e.dd].length)&&(!b.noDayMonthSwitch&&a[e.mm]>12&&a[e.dd]<13&&(d=a[e.dd],a[e.dd]=a[e.mm],a[e.mm]=d),a[e.yy].length<4&&(d=((new Date).getFullYear()+"").substr(0,4-a[e.yy].length),a[e.yy]>50&&d--,a[e.yy]=d+a[e.yy]),f=[u(a[e.yy]),u(a[e.mm]),u(a[e.dd])].join("-")),f},color:function(a){var b="#000000";return a&&(a=a.toLowerCase(),0!==a.indexOf("#")&&(a="#"+a),4==a.length&&(a="#"+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)+a.charAt(3)+a.charAt(3)),7==a.length&&h("color").isValid(a)&&(b=a)),b}},f={date:function(a,b){var c=(a||"").split("-");return c=3==c.length?b.splitInput?c:g.patterns.d.replace("yy",c[0]).replace("mm",c[1]).replace("dd",c[2]):b.splitInput?[a,a,a]:a},month:function(a,b){var c=(a||"").split("-");return c=2==c.length?b.splitInput?c:g.date.showMonthAfterYear?c[0]+" "+c[1]:c[1]+" "+c[0]:b.splitInput?[a,a]:a}},h=function(){var b={};return function(c){var d;return b[c]||(d=a('<input type="'+c+'" step="any" />'),b[c]={asNumber:function(a){var b="object"==typeof a?"valueAsDate":"value";return d.prop(b,a).prop("valueAsNumber")},asValue:function(a){var b="object"==typeof a?"valueAsDate":"valueAsNumber";return d.prop(b,a).prop("value")},asDate:function(a){var b="number"==typeof a?"valueAsNumber":"value";return d.prop(b,a).prop("valueAsDate")},isValid:function(b,c){return c&&(c.nodeName||c.jquery)&&(c={min:a(c).prop("min")||"",max:a(c).prop("max")||"",step:a(c).prop("step")||"any"}),c=a.extend({step:"any",min:"",max:""},c||{}),d.attr(c).prop("value",b).is(":valid")&&d.prop("value")==b}}),b[c]}}();s.range=s.number;var j={_create:function(){var c,d,e,f=this.options,g=this.createOpts;for(this.type=f.type,this.orig=f.orig,this.buttonWrapper=a('<span class="input-buttons '+this.type+'-input-buttons"></span>').insertAfter(this.element),this.options.containerElements.push(this.buttonWrapper[0]),f.mirrorValidity=f.mirrorValidity&&this.orig&&i,f.splitInput&&this._addSplitInputs?(f.monthSelect&&this.element.addClass("ws-month-select"),this._addSplitInputs()):this.inputElements=this.element,s[this.type]&&"object"==typeof s[this.type].start&&(s[this.type].start=this.asNumber(s[this.type].start)),b.picker[this.type]||(f.buttonOnly=!1),c=0;c<g.length;c++)null!=f[g[c]]&&this[g[c]](f[g[c]],f[g[c]]);"color"==this.type&&this.inputElements.prop("maxLength",7),this.addBindings(),a(this.element).data("wsWidget"+f.type,this),f.buttonOnly&&this.inputElements.prop({readOnly:!0}),this._init=!0,f.mirrorValidity&&(d=this,e=function(){clearTimeout(e._timerDealy),e._timerDealy=setTimeout(e._wsexec,9)},e._wsexec=function(){clearTimeout(e._timerDealy),d.mirrorValidity(!0)},e(),a(this.orig).on("change input",function(a){"input"==a.type?e():e._wsexec()}))},mirrorValidity:function(b){if(this._init&&this.options.mirrorValidity){b||a.prop(this.orig,"validity");var c=a(this.orig).getErrorMessage();c!==this.lastErrorMessage&&(this.inputElements.prop("setCustomValidity",function(a,b){b._supvalue&&b._supvalue.call(this,c)}),this.lastErrorMessage=c)}},addBindings:function(){var c=this,d=this.options,e=function(){c._addBindings()};this._addBindings?e():(b.ready("forms-picker",e),v(this.type,"WINDOWLOAD")),this.inputElements.add(this.buttonWrapper).add(this.element).one("mousedown focusin",function(){v(c.type,"DOM")}).on({"change input focus focusin blur focusout":function(b){var e,f;a(b.target).trigger("ws__"+b.type),d.toFixed&&"number"==d.type&&"change"==b.type&&(e=c.element.prop("value"),f=c.toFixed(e,!0),e!=f&&(c.element[0].value=f))}}),"color"!=this.type&&!function(){var b,e,g;d.splitInput?(b=function(){c.reorderInputs(),d.monthSelect&&(e=c.inputElements.filter("select.mm"),g=e.prop("value"),e.html(l(d)),e.prop("value",g))},c.reorderInputs()):b=function(){d.value&&c.value(d.value,!0),f[c.type]&&d.placeholder&&c.placeholder(d.placeholder)},a(c.orig).onWSOff("wslocalechange",b)}()},required:function(a,b){this.inputElements.attr({"aria-required":""+b}),this.mirrorValidity()},parseValue:function(b){var c=this.inputElements.map(function(){return a.prop(this,"value")}).get();return this.options.splitInput||(c=c[0]),e[this.type](c,this.options,b)},formatValue:function(a,b){return d[this.type](a,b===!1?!1:this.options)},createOpts:["readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],placeholder:function(b){var c=this.options;c.placeholder=b;var d=b;f[this.type]&&(d=f[this.type](b,this.options)),c.splitInput&&"object"==typeof d?a.each(this.splits,function(b,c){a.nodeName(c,"select")?a(c).children("option:first-child").text(d[b]):a.prop(c,"placeholder",d[b])}):this.element.prop("placeholder",d)},list:function(b){"number"==this.type&&this.element.attr("list",a.attr(this.orig,"list")),this.options.list=b,this._propertyChange("list")},_propertyChange:a.noop,tabindex:function(b){this.options.tabindex=b,this.inputElements.prop("tabindex",this.options.tabindex),a("button",this.buttonWrapper).prop("tabindex",this.options.tabindex)},title:function(b){!b&&this.orig&&null==a.attr(this.orig,"title")&&(b=null),this.options.title=b,null==b?this.inputElements.removeAttr("title"):this.inputElements.prop("title",this.options.title)}};["defaultValue","value"].forEach(function(a){j[a]=function(b,c){(!this._init||c||b!==this.options[a])&&(this.element.prop(a,this.formatValue(b)),this.options[a]=b,this._propertyChange(a),this.mirrorValidity())}}),["readonly","disabled"].forEach(function(b){var c="disabled"==b;j[b]=function(d,e){var f=this.options;f[b]==e&&this._init||(f[b]=!!e,!c&&f.buttonOnly?this.inputElements.attr({"aria-readonly":f[b]}):this.inputElements.prop(b,f[b]),this.buttonWrapper[f[b]?"addClass":"removeClass"]("ws-"+b),c&&a("button",this.buttonWrapper).prop("disabled",f[b]))}});var k=a.extend({},j,{_create:function(){var c=this.options,d=h(c.type);this.elemHelper=a('<input type="'+c.type+'" />'),this.asNumber=d.asNumber,this.asValue=d.asValue,this.isValid=d.isValid,this.asDate=d.asDate,j._create.apply(this,arguments),this._init=!1,this.buttonWrapper.html('<span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span>'),"number"==this.type&&this.inputElements.attr("inputmode","numeric"),(!c.max&&"number"==typeof c.relMax||!c.min&&"number"==typeof c.relMin)&&b.error("relMax/relMin are not supported anymore calculate at set it your own."),this.options.relDefaultValue&&b.warn("relDefaultValue was removed use startValue instead!"),this._init=!0},createOpts:["step","min","max","readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],_addSplitInputs:function(){if(!this.inputElements){var b=p[this.type]._create(this.options);this.splits=b.splits,this.inputElements=a(b.elements).prependTo(this.element).filter("input, select")}},addZero:u,_setStartInRange:function(){var a=this.options.startValue&&this.asNumber(this.options.startValue)||s[this.type].start||0;!isNaN(this.minAsNumber)&&a<this.minAsNumber?a=this.minAsNumber:!isNaN(this.maxAsNumber)&&a>this.maxAsNumber&&(a=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",a),this.options.defValue=this.elemHelper.prop("value")},reorderInputs:function(){if(p[this.type]){var a=this.element.attr("dir",g.date.isRTL?"rtl":"ltr");p[this.type].sort(a,this.options),setTimeout(function(){var c=b.data(a);c&&c.shadowData&&(c.shadowData.shadowFocusElement=a.find("input, select")[0]||a[0])},9)}},step:function(a){var b=s[this.type];this.options.step=a,this.elemHelper.prop("step",c(a,b.step)),this.mirrorValidity()},_beforeValue:function(a){this.valueAsNumber=this.asNumber(a),this.options.value=a,isNaN(this.valueAsNumber)||!isNaN(this.minAsNumber)&&this.valueAsNumber<this.minAsNumber||!isNaN(this.maxAsNumber)&&this.valueAsNumber>this.maxAsNumber?this._setStartInRange():(this.elemHelper.prop("value",a),this.options.defValue="")},toFixed:function(a,b){var c=this.options;return!c.toFixed||"number"!=c.type||!a||isNaN(this.valueAsNumber)||!b&&this.element.is(":focus")||c.fixOnlyFloat&&!(this.valueAsNumber%1)||(a=d[this.type](this.valueAsNumber.toFixed(c.toFixed),this.options)),a}});["defaultValue","value"].forEach(function(b){var c="value"==b;k[b]=function(e,f,g){var h;(!this._init||f||this.options[b]!==e)&&(c?this._beforeValue(e):this.elemHelper.prop(b,e),e=d[this.type](e,this.options),this.options.splitInput?a.each(this.splits,function(d,f){b in f||c||!a.nodeName(f,"select")?a.prop(f,b,e[d]):a('option[value="'+e[d]+'"]',f).prop("defaultSelected",!0)}):(e=this.toFixed(e),g&&this._getSelectionEnd&&(h=this._getSelectionEnd(e)),this.element.prop(b,e),h&&this.element.prop("selectionEnd",h)),this._propertyChange(b),this.mirrorValidity())}}),a.each({min:1,max:-1},function(a,b){var c=a+"AsNumber";k[a]=function(d){this.elemHelper.prop(a,d),this[c]=this.asNumber(d),null!=this.valueAsNumber&&(isNaN(this.valueAsNumber)||!isNaN(this[c])&&this.valueAsNumber*b<this[c]*b)&&this._setStartInRange(),this.options[a]=d,this._init&&o({elements:this.inputElements},this.options),this._propertyChange(a),this.mirrorValidity()}}),a.fn.wsBaseWidget=function(c){return c=a.extend({},c),this.each(function(){b.objectCreate(j,{element:{value:a(this)}},c)})},a.fn.wsBaseWidget.wsProto=j,a.fn.spinbtnUI=function(c){return c=a.extend({monthNames:"monthNamesShort"},c),this.each(function(){b.objectCreate(k,{element:{value:a(this)}},c)})},a.fn.spinbtnUI.wsProto=k}(),function(){var c={};b.inlinePopover={_create:function(){this.element=a('<div class="ws-inline-picker"><div class="ws-po-box" /></div>').data("wspopover",this),this.contentElement=a(".ws-po-box",this.element),this.element.insertAfter(this.options.prepareFor)},show:a.noop,hide:a.noop,preventBlur:a.noop,isVisible:!0},c.isInRange=function(a,b,c){return!(c[0]&&c[0]>a[0]||b[0]&&b[0]<a[0])},c.createYearSelect=function(a,b,d,e,f){f||(f={start:a,step:1,label:a});var g,h=!0,i=!0,j=['<option selected="">'+f.label+"</option>"],k=0,l=function(a,g){var h,i;return f.step>1?(h=a+f.step-1,i=a+" \u2013 "+h):i=a,c.isInRange([a],b,d)||h&&c.isInRange([h],b,d)?(j[g]('<option value="'+(a+e)+'">'+i+"</option>"),!0):void 0};for(e||(e="");18>k&&(h||i);)k++,h&&(g=f.start-k*f.step,h=l(g,"unshift")),i&&(g=f.start+k*f.step,i=l(g,"push"));return j},c._genericSetFocus=function(b,c){if(b=a(b||this.activeButton),!this.popover.openedByFocus&&!c){var d=this,e=function(a){clearTimeout(d.timer),d.timer=setTimeout(function(){b[0]&&(b.trigger("focus"),a===!0||b.is(":focus")||e(!0))},d.popover.isVisible?0:360)};this.popover.activateElement(b),e()}},c._actions={changeInput:function(a,b,d){d.options.noChangeDismiss||c._actions.cancel(a,b,d),d.setChange(a)},cancel:function(a,b,c){c.options.inlinePicker||(b.stopOpen=!0,c.element.getShadowFocusElement().trigger("focus"),setTimeout(function(){b.stopOpen=!1},9),b.hide())}},c.commonInit=function(b,c){if(!b._commonInit){b._commonInit=!0;var e;c.isDirty=!0,c.element.on("updatepickercontent pickerchange",function(){e=!1}),b.options.inlinePicker||c.contentElement.on({keydown:function(d){if(9==d.keyCode){e||(e=a('input:not(:disabled), [tabindex="0"]:not(:disabled)',this).filter(":visible"));var f=e.index(d.target);if(d.shiftKey&&0>=f)return e.last().focus(),!1;if(!d.shiftKey&&f>=e.length-1)return e.first().focus(),!1}else if(27==d.keyCode)return b.element.getShadowFocusElement().focus(),c.hide(),!1}}),b._propertyChange=function(){var a,d=function(){c.isVisible&&c.element.triggerHandler("updatepickercontent")};return function(e){("value"!=e||b.options.inlinePicker)&&(c.isDirty=!0,c.isVisible&&(clearTimeout(a),a=setTimeout(d,9)))}}(),c.activeElement=a([]),c.activateElement=function(b){b=a(b),b[0]!=c.activeElement[0]&&(c.activeElement.removeClass("ws-focus"),b.addClass("ws-focus")),c.activeElement=b},c.element.on({wspopoverbeforeshow:function(){b.element.triggerHandler("wsupdatevalue"),c.element.triggerHandler("updatepickercontent")}}),a(b.orig).on("remove",function(c){c.originalEvent||a(d).off("wslocalechange",b._propertyChange)})}},c._common=function(d){var e=d.options,f=b.objectCreate(e.inlinePicker?b.inlinePopover:b.wsPopover,{},a.extend(e.popover||{},{prepareFor:e.inlinePicker?d.buttonWrapper:d.element})),g=a('<button type="button" class="ws-popover-opener"><span /></button>').appendTo(d.buttonWrapper);e.widgetPosition&&b.error("options.widgetPosition was removed use options.popover.position instead"),e.openOnFocus&&f.options&&("auto"==f.options.appendTo||"element"==f.options.appendTo)&&b.error('openOnFocus and popover.appendTo "auto/element" can prduce a11y problems try to change appendTo to body or similiar or use openOnMouseFocus instead');var h=function(){(c[d.type].showPickerContent||c.showPickerContent)(d,f)},i=function(){var a=v(d.type,"DOM");e.disabled||e.readonly||!e.inlinePicker&&f.isVisible||(b.ready(a,h),f.show(d.element))},j=function(){(e.inlinePicker||f.isVisible)&&f.activeElement&&(f.openedByFocus=!1,f.activeElement.focus()),i()};e.containerElements.push(f.element[0]),f.element.addClass(d.type+"-popover input-picker").attr({role:"application"}).on({wspopoverhide:function(){f.openedByFocus=!1},focusin:function(a){f.activateElement&&(f.openedByFocus=!1,f.activateElement(a.target))},focusout:function(){f.activeElement&&f.activeElement.removeClass("ws-focus"),e.inlinePicker&&(f.openedByFocus=!0)}}),t(f.element.children("div.ws-po-outerbox").attr({role:"group"}),e.labels,!0),t(g,e.labels,!0),null!=e.tabindex&&g.attr({tabindex:e.tabindex}),e.disabled&&g.prop({disabled:!0}),g.on({click:j}),e.inlinePicker?f.openedByFocus=!0:(g.on({mousedown:function(){k.apply(this,arguments),f.preventBlur()},focus:function(){f.preventBlur()}}),function(){var b=!1,c=function(){b=!1};d.inputElements.on({keydown:function(b){40==b.keyCode&&b.altKey&&!a.nodeName(b.target,"select")&&j()},focus:function(c){f.stopOpen||!(e.buttonOnly||e.openOnFocus||b&&e.openOnMouseFocus)||a.nodeName(c.target,"select")?f.preventBlur():(f.openedByFocus=e.buttonOnly?!1:!e.noInput,i())},mousedown:function(g){b=!0,setTimeout(c,9),e.buttonOnly&&f.isVisible&&f.activeElement&&(f.openedByFocus=!1,setTimeout(function(){f.openedByFocus=!1,f.activeElement.focus()},4)),d.element.is(":focus")&&!a.nodeName(g.target,"select")&&(f.openedByFocus=e.buttonOnly?!1:!e.noInput,i()),f.preventBlur()}})}()),d.popover=f,d.opener=g,a(d.orig).on("remove",function(a){a.originalEvent||setTimeout(function(){g.remove(),f.element.remove()},4)}),e.inlinePicker&&i()},c.month=c._common,c.date=c._common,c.time=c._common,c["datetime-local"]=c._common,c.color=function(b){var d=c._common.apply(this,arguments),e=a(b.orig).data("alphacontrol"),f=b.opener.prepend('<span class="ws-color-indicator-bg"><span class="ws-color-indicator" /></span>').find(".ws-color-indicator"),g=function(){f.css({backgroundColor:a.prop(this,"value")||"#000000"})},h=function(){var a,c=function(){try{var a=b.alpha.prop("valueAsNumber")/(b.alpha.prop("max")||1);isNaN(a)||f.css({opacity:a})}catch(c){}};return function(b){clearTimeout(a),a=setTimeout(c,b&&"change"!=b.type?40:4)}}();return b.alpha=a(e?"#"+e:[]),a(b.orig).on("wsupdatevalue change",g).each(g),b.alpha.on("wsupdatevalue change input",h).each(h),d},b.picker=c}(),function(){var c,e,g=Modernizr.inputtypes,j={},l={disabled:1,required:1,readonly:1},m=["disabled","readonly","value","defaultValue","min","max","step","title","required","placeholder"],n=["data-placeholder","tabindex"];if(a.each(m.concat(n),function(a,d){var e=d.replace(/^data\-/,"");b.onNodeNamesPropertyModify("input",d,function(a,d){if(!c){var f=b.data(this,"shadowData");f&&f.data&&f.nativeElement===this&&f.data[e]&&(l[e]?f.data[e](a,d):f.data[e](a))}})}),f.replaceUI&&"valueAsNumber"in d.createElement("input")){var o=function(){b.data(this,"hasShadow")&&a.prop(this,"value",a.prop(this,"value"))};b.onNodeNamesPropertyModify("input","valueAsNumber",o),b.onNodeNamesPropertyModify("input","valueAsDate",o),a.each({stepUp:1,stepDown:-1},function(a){var c=b.defineNodeNameProperty("input",a,{prop:{value:function(){var a;return c.prop&&c.prop._supvalue&&(a=c.prop._supvalue.apply(this,arguments),o.apply(this,arguments)),a}}})})}var q=function(){return function(b,c){j[b]=c,c.attrs=a.merge([],n,c.attrs),c.props=a.merge([],m,c.props)}}(),r=function(){return"none"!=a.css(this,"display")},u=function(b){var c,d,e,f,g,h,i,j=b.orig.style,k=b.element[0].style;null!=a.support.boxSizing||a.isReady?d=b.orig.parentNode:a(function(){d=b.orig.parentNode});var l=function(){var l,m,n,o,p=.8;d&&(l=d.offsetWidth),(!c||l&&l!=e)&&(e=l,j.display="",k.display="none",c||(i=b.buttonWrapper&&b.buttonWrapper.filter(r).length,h=i&&"rtl"==b.buttonWrapper.css("direction"),h?(f="Right",g="Left"):(f="Left",g="Right"),i&&b.buttonWrapper[h?"addClass":"removeClass"]("ws-is-rtl")),m=a.css(b.orig,"margin"+g),k["margin"+f]=a.css(b.orig,"margin"+f),k["margin"+g]=i?"0px":m,i&&(n=parseInt(b.buttonWrapper.css("margin"+f),10)||0,k["padding"+g]="",0>n?(m=(parseInt(m,10)||0)+-1*(b.buttonWrapper.outerWidth()+n),b.buttonWrapper[0].style["margin"+g]=m+"px",k["padding"+g]=(parseInt(b.element.css("padding"+g),10)||0)+b.buttonWrapper.outerWidth()+"px"):(b.buttonWrapper[0].style["margin"+g]=m,p=b.buttonWrapper.outerWidth(!0)+p)),o=a(b.orig).outerWidth()-p,k.display="",b.element.outerWidth(o),j.display="none",c=!0)};b.element.onWSOff("updateshadowdom",l,!0)},v=function(){var d,g,h,l,o,p,q=a.prop(this,"type");if(j[q]&&b.implement(this,"inputwidgets")){for(h={},l=q,o=a(this).jProp("labels"),g=a.extend(b.getOptions(this,q,[f.widgets,f[q],a(a.prop(this,"form")).data(q)]),{orig:this,type:q,labels:o,options:{},input:function(a){g._change(a,"input")},change:function(a){g._change(a,"change")},_change:function(b,d){c=!0,a.prop(g.orig,"value",b),c=!1,d&&a(g.orig).trigger(d)},containerElements:[]}),d=0;d<m.length;d++)g[m[d]]=a.prop(this,m[d]);for(d=0;d<n.length;d++)l=n[d].replace(/^data\-/,""),"placeholder"!=l&&g[l]||(g[l]=a.attr(this,n[d])||g[l]);g.formatMonthNames&&b.error("formatMonthNames was renamded to monthNames"),g.onlyMonthDigits&&(g.monthNames="monthDigits"),h.shim=j[q]._create(g),b.addShadowDom(this,h.shim.element,{data:h.shim||{}}),h.shim.options.containerElements.push(h.shim.element[0]),p=a.prop(this,"className"),g.classes&&(p+=" "+g.classes,a(this).addClass(g.classes)),(g.splitInput||"range"==q)&&(p=p.replace("form-control","")),h.shim.element.on("change input",k).addClass(p),h.shim.buttonWrapper&&(h.shim.buttonWrapper.addClass("input-button-size-"+h.shim.buttonWrapper.children().filter(r).length),h.shim.buttonWrapper.filter(r).length&&h.shim.element.addClass("has-input-buttons")),t(a(this).getShadowFocusElement(),o),a(this).on("change",function(){c||h.shim.value(a.prop(this,"value"))}),function(){var b,c={focusin:!0,focus:!0},d=!1,e=!1;a(h.shim.options.containerElements).on({"focusin focus focusout blur":function(f){f.stopImmediatePropagation(),e=c[f.type],clearTimeout(b),b=setTimeout(function(){e!=d&&(d=e,a(g.orig).triggerHandler(e?"focus":"blur"),a(g.orig).trigger(e?"focusin":"focusout")),d=e},9)}})}(),i&&a(g.orig).on("firstinvalid",function(c){(b.fromSubmit||!e)&&a(g.orig).off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(d){d.isDefaultPrevented()||(b.validityAlert.showFor(c.target),c.preventDefault(),d.preventDefault()),a(g.orig).off("invalid.replacedwidgetbubble")})}),g.calculateWidth?u(h.shim):a(this).css("display","none")}};i&&["input","form"].forEach(function(a){var c=b.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){e=!0;var a=c.prop._supvalue.apply(this,arguments);return e=!1,a}}})});var w={};f.replaceUI&&(a.isPlainObject(f.replaceUI)?a.extend(w,f.replaceUI):a.extend(w,{range:1,number:1,time:1,month:1,date:1,color:1,"datetime-local":1})),g.number&&-1==navigator.userAgent.indexOf("Touch")&&(/MSIE 1[0|1]\.\d/.test(navigator.userAgent)||/Trident\/7\.0/.test(navigator.userAgent))&&(w.number=1),(!g.range||w.range)&&q("range",{_create:function(b){var c=a("<span />").insertAfter(b.orig).rangeUI(b).data("rangeUi");return c}}),["number","time","month","date","color","datetime-local"].forEach(function(c){(!g[c]||w[c])&&q(c,{_create:function(d){(d.monthSelect||d.daySelect||d.yearSelect)&&(d.splitInput=!0),d.splitInput&&!p[c]&&(b.warn("splitInput not supported for "+c),d.splitInput=!1);var e=d.splitInput?'<span class="ws-'+c+' ws-input ws-inputreplace" role="group"></span>':'<input class="ws-'+c+' ws-inputreplace" type="text" />',f=a(e).insertAfter(d.orig);return f=s[c]?f.spinbtnUI(d).data("wsWidget"+c):f.wsBaseWidget(d).data("wsWidget"+c),b.picker&&b.picker[c]&&b.picker[c](f),f}})});var x=function(){b.addReady(function(b,c){a("input",b).add(c.filter("input")).each(v)})};h._isLoading?a(h).one("change",x):x()}()});