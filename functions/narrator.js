!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r,t){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),i=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(t[o]=e[o]);return t};e.exports={arrayToObject:i,assign:function(e,r){return Object.keys(r).reduce(function(e,t){return e[t]=r[t],e},e)},compact:function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],o=0;o<r.length;++o)for(var n=r[o],i=n.obj[n.prop],a=Object.keys(i),l=0;l<a.length;++l){var c=a[l],s=i[c];"object"==typeof s&&null!==s&&-1===t.indexOf(s)&&(r.push({obj:i,prop:c}),t.push(s))}return function(e){for(var r;e.length;){var t=e.pop();if(r=t.obj[t.prop],Array.isArray(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}return r}(r)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(r){return e}},encode:function(e){if(0===e.length)return e;for(var r="string"==typeof e?e:String(e),t="",o=0;o<r.length;++o){var i=r.charCodeAt(o);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?t+=r.charAt(o):i<128?t+=n[i]:i<2048?t+=n[192|i>>6]+n[128|63&i]:i<55296||i>=57344?t+=n[224|i>>12]+n[128|i>>6&63]+n[128|63&i]:(o+=1,i=65536+((1023&i)<<10|1023&r.charCodeAt(o)),t+=n[240|i>>18]+n[128|i>>12&63]+n[128|i>>6&63]+n[128|63&i])}return t},isBuffer:function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(r,t,n){if(!t)return r;if("object"!=typeof t){if(Array.isArray(r))r.push(t);else{if("object"!=typeof r)return[r,t];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,t))&&(r[t]=!0)}return r}if("object"!=typeof r)return[r].concat(t);var a=r;return Array.isArray(r)&&!Array.isArray(t)&&(a=i(r,n)),Array.isArray(r)&&Array.isArray(t)?(t.forEach(function(t,i){o.call(r,i)?r[i]&&"object"==typeof r[i]?r[i]=e(r[i],t,n):r.push(t):r[i]=t}),r):Object.keys(t).reduce(function(r,i){var a=t[i];return o.call(r,i)?r[i]=e(r[i],a,n):r[i]=a,r},a)}}},function(e,r,t){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,r,t){const o=t(3),n=t(6);r.handler=function(e,r,t){const i=o.parse(e.body);console.log("parsed:",i);const a=i.text,l=process.env.BOT_TOKEN;console.log("token:",l);const c=JSON.stringify({channel:i.channel_id,text:`_${a}_`}),s={hostname:"slack.com",port:443,path:"/api/chat.postMessage",method:"POST",headers:{"Content-Type":"application/json","Content-Length":c.length,Authorization:`Bearer ${l}`}},u=n.request(s,e=>{console.log(`statusCode: ${e.statusCode}`),e.on("data",e=>{process.stdout.write(e)}),t(null,{body:"",statusCode:200})});u.on("error",e=>{console.log("error is ",e)}),u.write(c),u.end()}},function(e,r,t){"use strict";var o=t(4),n=t(5),i=t(1);e.exports={formats:i,parse:n,stringify:o}},function(e,r,t){"use strict";var o=t(0),n=t(1),i={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(r,t,n,i,a,c,s,u,f,p,d,y){var b=r;if("function"==typeof s)b=s(t,b);else if(b instanceof Date)b=p(b);else if(null===b){if(i)return c&&!y?c(t,l.encoder):t;b=""}if("string"==typeof b||"number"==typeof b||"boolean"==typeof b||o.isBuffer(b))return c?[d(y?t:c(t,l.encoder))+"="+d(c(b,l.encoder))]:[d(t)+"="+d(String(b))];var g,m=[];if(void 0===b)return m;if(Array.isArray(s))g=s;else{var v=Object.keys(b);g=u?v.sort(u):v}for(var h=0;h<g.length;++h){var O=g[h];a&&null===b[O]||(m=Array.isArray(b)?m.concat(e(b[O],n(t,O),n,i,a,c,s,u,f,p,d,y)):m.concat(e(b[O],t+(f?"."+O:"["+O+"]"),n,i,a,c,s,u,f,p,d,y)))}return m};e.exports=function(e,r){var t=e,a=r?o.assign({},r):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===a.delimiter?l.delimiter:a.delimiter,u="boolean"==typeof a.strictNullHandling?a.strictNullHandling:l.strictNullHandling,f="boolean"==typeof a.skipNulls?a.skipNulls:l.skipNulls,p="boolean"==typeof a.encode?a.encode:l.encode,d="function"==typeof a.encoder?a.encoder:l.encoder,y="function"==typeof a.sort?a.sort:null,b=void 0!==a.allowDots&&a.allowDots,g="function"==typeof a.serializeDate?a.serializeDate:l.serializeDate,m="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:l.encodeValuesOnly;if(void 0===a.format)a.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,a.format))throw new TypeError("Unknown format option provided.");var v,h,O=n.formatters[a.format];"function"==typeof a.filter?t=(h=a.filter)("",t):Array.isArray(a.filter)&&(v=h=a.filter);var j,w=[];if("object"!=typeof t||null===t)return"";j=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var x=i[j];v||(v=Object.keys(t)),y&&v.sort(y);for(var A=0;A<v.length;++A){var P=v[A];f&&null===t[P]||(w=w.concat(c(t[P],P,x,u,f,p?d:null,h,y,b,g,O,m)))}var N=w.join(s),C=!0===a.addQueryPrefix?"?":"";return N.length>0?C+N:""}},function(e,r,t){"use strict";var o=t(0),n=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,r,t){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(o),l=a?o.slice(0,a.index):o,c=[];if(l){if(!t.plainObjects&&n.call(Object.prototype,l)&&!t.allowPrototypes)return;c.push(l)}for(var s=0;null!==(a=i.exec(o))&&s<t.depth;){if(s+=1,!t.plainObjects&&n.call(Object.prototype,a[1].slice(1,-1))&&!t.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+o.slice(a.index)+"]"),function(e,r,t){for(var o=r,n=e.length-1;n>=0;--n){var i,a=e[n];if("[]"===a)i=(i=[]).concat(o);else{i=t.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(l,10);!isNaN(c)&&a!==l&&String(c)===l&&c>=0&&t.parseArrays&&c<=t.arrayLimit?(i=[])[c]=o:i[l]=o}o=i}return o}(c,r,t)}};e.exports=function(e,r){var t=r?o.assign({},r):{};if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(t.ignoreQueryPrefix=!0===t.ignoreQueryPrefix,t.delimiter="string"==typeof t.delimiter||o.isRegExp(t.delimiter)?t.delimiter:i.delimiter,t.depth="number"==typeof t.depth?t.depth:i.depth,t.arrayLimit="number"==typeof t.arrayLimit?t.arrayLimit:i.arrayLimit,t.parseArrays=!1!==t.parseArrays,t.decoder="function"==typeof t.decoder?t.decoder:i.decoder,t.allowDots="boolean"==typeof t.allowDots?t.allowDots:i.allowDots,t.plainObjects="boolean"==typeof t.plainObjects?t.plainObjects:i.plainObjects,t.allowPrototypes="boolean"==typeof t.allowPrototypes?t.allowPrototypes:i.allowPrototypes,t.parameterLimit="number"==typeof t.parameterLimit?t.parameterLimit:i.parameterLimit,t.strictNullHandling="boolean"==typeof t.strictNullHandling?t.strictNullHandling:i.strictNullHandling,""===e||null==e)return t.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,r){for(var t={},o=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=r.parameterLimit===1/0?void 0:r.parameterLimit,l=o.split(r.delimiter,a),c=0;c<l.length;++c){var s,u,f=l[c],p=f.indexOf("]="),d=-1===p?f.indexOf("="):p+1;-1===d?(s=r.decoder(f,i.decoder),u=r.strictNullHandling?null:""):(s=r.decoder(f.slice(0,d),i.decoder),u=r.decoder(f.slice(d+1),i.decoder)),n.call(t,s)?t[s]=[].concat(t[s]).concat(u):t[s]=u}return t}(e,t):e,c=t.plainObjects?Object.create(null):{},s=Object.keys(l),u=0;u<s.length;++u){var f=s[u],p=a(f,l[f],t);c=o.merge(c,p,t)}return o.compact(c)}},function(e,r){e.exports=require("https")}]));