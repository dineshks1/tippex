!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.mithril=e()}}(function(){return function e(t,n,r){function o(l,a){if(!n[l]){if(!t[l]){var u="function"==typeof require&&require;if(!a&&u)return u(l,!0);if(i)return i(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[l]={exports:{}};t[l][0].call(s.exports,function(e){var n=t[l][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(e,t){(function(e){!function(){"use strict";function n(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}function r(e){for(var t,n="div",r=[],o={};t=a.exec(e);){var i=t[1],l=t[2];if(""===i&&""!==l)n=l;else if("#"===i)o.id=l;else if("."===i)r.push(l);else if("["===t[3][0]){var f=t[6];f&&(f=f.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(f):o[t[4]]=f||!0}}return r.length>0&&(o.className=r.join(" ")),u[e]={tag:n,attrs:o}}function o(e,t,r){var o,i,l=!1,a=t.className||t["class"];for(var u in e.attrs)f.call(e.attrs,u)&&(t[u]=e.attrs[u]);null!=a&&(null!=t["class"]&&(t["class"]=void 0,t.className=a),null!=e.attrs.className&&(t.className=e.attrs.className+" "+a));for(var u in t)if(f.call(t,u)&&"key"!==u){l=!0;break}return Array.isArray(r)&&1===r.length&&null!=r[0]&&"#"===r[0].tag?i=r[0].children:o=r,n(e.tag,t.key,l?t:void 0,o,i)}function i(e){var t,i=arguments[1],l=2;if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");if("string"==typeof e)var a=u[e]||r(e);if(i?("object"!=typeof i||null!=i.tag||Array.isArray(i))&&(i={},l=1):i={},arguments.length===l+1)t=arguments[l],Array.isArray(t)||(t=[t]);else for(t=[];l<arguments.length;)t.push(arguments[l++]);var f=n.normalizeChildren(t);return"string"==typeof e?o(a,i,f):n(e,i.key,i,f)}function l(e){var t=16,n=0,r=null,o="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var i=Date.now();0===n||i-n>=t?(n=i,e()):null===r&&(r=o(function(){r=null,e(),n=Date.now()},t-(i-n)))}}n.normalize=function(e){return Array.isArray(e)?n("[",void 0,void 0,n.normalizeChildren(e),void 0,void 0):null!=e&&"object"!=typeof e?n("#",void 0,void 0,e===!1?"":e,void 0,void 0):e},n.normalizeChildren=function(e){for(var t=0;t<e.length;t++)e[t]=n.normalize(e[t]);return e};var a=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,u={},f={}.hasOwnProperty;i.trust=function(e){return null==e&&(e=""),n("<",void 0,void 0,e,void 0,void 0)},i.fragment=function(e,t){return n("[",e.key,e,n.normalizeChildren(t),void 0,void 0)};var s=i,c=function(e){function t(e,t){return function l(s){var c;try{if(!t||null==s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof(c=s.then))f(function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",s);for(var n=0;n<e.length;n++)e[n](s);o.length=0,i.length=0,u.state=t,u.retry=function(){l(s)}});else{if(s===r)throw new TypeError("Promise can't be resolved w/ itself");n(c.bind(s))}}catch(d){a(d)}}}function n(e){function t(e){return function(t){n++>0||e(t)}}var n=0,r=t(a);try{e(t(l),r)}catch(o){r(o)}}if(!(this instanceof c))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var r=this,o=[],i=[],l=t(o,!0),a=t(i,!1),u=r._instance={resolvers:o,rejectors:i},f="function"==typeof setImmediate?setImmediate:setTimeout;n(e)};if(c.prototype.then=function(e,t){function n(e,t,n,i){t.push(function(t){if("function"!=typeof e)n(t);else try{r(e(t))}catch(i){o&&o(i)}}),"function"==typeof l.retry&&i===l.state&&l.retry()}var r,o,i=this,l=i._instance,a=new c(function(e,t){r=e,o=t});return n(e,l.resolvers,r,!0),n(t,l.rejectors,o,!1),a},c.prototype["catch"]=function(e){return this.then(null,e)},c.resolve=function(e){return e instanceof c?e:new c(function(t){t(e)})},c.reject=function(e){return new c(function(t,n){n(e)})},c.all=function(e){return new c(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function a(e){o++,i[l]=e,o===r&&t(i)}null==e[l]||"object"!=typeof e[l]&&"function"!=typeof e[l]||"function"!=typeof e[l].then?a(e[l]):e[l].then(a,n)}(l)})},c.race=function(e){return new c(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){"undefined"==typeof window.Promise&&(window.Promise=c);var c=window.Promise}else if("undefined"!=typeof e){"undefined"==typeof e.Promise&&(e.Promise=c);var c=e.Promise}var d=function(e){function t(e,r){if(Array.isArray(r))for(var o=0;o<r.length;o++)t(e+"["+o+"]",r[o]);else if("[object Object]"===Object.prototype.toString.call(r))for(var o in r)t(e+"["+o+"]",r[o]);else n.push(encodeURIComponent(e)+(null!=r&&""!==r?"="+encodeURIComponent(r):""))}if("[object Object]"!==Object.prototype.toString.call(e))return"";var n=[];for(var r in e)t(r,e[r]);return n.join("&")},v=new RegExp("^file://","i"),h=function(e,t){function n(e){h=e}function r(){function e(){0===--t&&"function"==typeof h&&h()}var t=0;return function n(r){var o=r.then;return r.then=function(){t++;var i=o.apply(r,arguments);return i.then(e,function(n){if(e(),0===t)throw n}),n(i)},r}}function o(e,t){if("string"==typeof e){var n=e;e=t||{},null==e.url&&(e.url=n)}return e}function i(n,i){var l=r();n=o(n,i);var d=new t(function(t,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var o="GET"===n.method||"TRACE"===n.method?!1:"boolean"==typeof n.useBody?n.useBody:!0;"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=f),"function"!=typeof n.extract&&(n.extract=s),n.url=a(n.url,n.data),o?n.data=n.serialize(n.data):n.url=u(n.url,n.data);var i=new e.XMLHttpRequest,l=!1,d=i.abort;i.abort=function(){l=!0,d.call(i)},i.open(n.method,n.url,"boolean"==typeof n.async?n.async:!0,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize===JSON.stringify&&o&&i.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize===f&&i.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(i.withCredentials=n.withCredentials);for(var h in n.headers)({}).hasOwnProperty.call(n.headers,h)&&i.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(i=n.config(i,n)||i),i.onreadystatechange=function(){if(!l&&4===i.readyState)try{var e=n.extract!==s?n.extract(i,n):n.deserialize(n.extract(i,n));if(i.status>=200&&i.status<300||304===i.status||v.test(n.url))t(c(n.type,e));else{var o=new Error(i.responseText);for(var a in e)o[a]=e[a];r(o)}}catch(u){r(u)}},o&&null!=n.data?i.send(n.data):i.send()});return n.background===!0?d:l(d)}function l(n,i){var l=r();n=o(n,i);var f=new t(function(t,r){var o=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+p++,i=e.document.createElement("script");e[o]=function(r){i.parentNode.removeChild(i),t(c(n.type,r)),delete e[o]},i.onerror=function(){i.parentNode.removeChild(i),r(new Error("JSONP request failed")),delete e[o]},null==n.data&&(n.data={}),n.url=a(n.url,n.data),n.data[n.callbackKey||"callback"]=o,i.src=u(n.url,n.data),e.document.documentElement.appendChild(i)});return n.background===!0?f:l(f)}function a(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function u(e,t){var n=d(t);if(""!==n){var r=e.indexOf("?")<0?"?":"&";e+=r+n}return e}function f(e){try{return""!==e?JSON.parse(e):null}catch(t){throw new Error(e)}}function s(e){return e.responseText}function c(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}var h,p=0;return{request:i,jsonp:l,setCompletionCallback:n}},p=h(window,c),m=function(e){function t(e){return H=e}function r(e,t,n,r,i,l,a){for(var u=n;r>u;u++){var f=t[u];null!=f&&o(e,f,i,a,l)}}function o(e,t,n,r,o){var f=t.tag;if("string"!=typeof f)return s(e,t,n,r,o);switch(t.state={},null!=t.attrs&&L(t.attrs,t,n),f){case"#":return i(e,t,o);case"<":return l(e,t,o);case"[":return a(e,t,n,r,o);default:return u(e,t,n,r,o)}}function i(e,t,n){return t.dom=B.createTextNode(t.children),k(e,t.dom,n),t.dom}function l(e,t,n){var r=t.children.match(/^\s*?<(\w+)/im)||[],o={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[r[1]]||"div",i=B.createElement(o);i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length;for(var l,a=B.createDocumentFragment();l=i.firstChild;)a.appendChild(l);return k(e,a,n),a}function a(e,t,n,o,i){var l=B.createDocumentFragment();if(null!=t.children){var a=t.children;r(l,a,0,a.length,n,null,o)}return t.dom=l.firstChild,t.domSize=l.childNodes.length,k(e,l,i),l}function u(e,t,o,i,l){var a=t.tag;switch(t.tag){case"svg":i="http://www.w3.org/2000/svg";break;case"math":i="http://www.w3.org/1998/Math/MathML"}var u=t.attrs,f=u&&u.is,s=i?f?B.createElementNS(i,a,{is:f}):B.createElementNS(i,a):f?B.createElement(a,{is:f}):B.createElement(a);if(t.dom=s,null!=u&&N(t,u,i),k(e,s,l),null!=t.attrs&&null!=t.attrs.contenteditable)C(t);else if(null!=t.text&&(""!==t.text?s.textContent=t.text:t.children=[n("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children){var c=t.children;r(s,c,0,c.length,o,null,i),O(t)}return s}function f(e,t){var r;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),r=e.state.view,null!=r.$$reentrantLock$$)return J;r.$$reentrantLock$$=!0}else{if(e.state=void 0,r=e.tag,null!=r.$$reentrantLock$$)return J;r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(e._state=e.state,null!=e.attrs&&L(e.attrs,e,t),L(e._state,e,t),e.instance=n.normalize(e._state.view.call(e.state,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function s(e,t,n,r,i){if(f(t,n),null!=t.instance){var l=o(e,t.instance,n,r,i);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,k(e,l,i),l}return t.domSize=0,J}function c(e,t,n,i,l,a,u){if(t!==n&&(null!=t||null!=n))if(null==t)r(e,n,0,n.length,l,a,void 0);else if(null==n)S(t,0,t.length,n);else{if(t.length===n.length){for(var f=!1,s=0;s<n.length;s++)if(null!=n[s]&&null!=t[s]){f=null==n[s].key&&null==t[s].key;break}if(f){for(var s=0;s<t.length;s++)t[s]!==n[s]&&(null==t[s]&&null!=n[s]?o(e,n[s],l,u,x(t,s+1,a)):null==n[s]?S(t,s,s+1,n):d(e,t[s],n[s],l,x(t,s+1,a),i,u));return}}if(i=i||y(t,n)){var c=t.pool;t=t.concat(t.pool)}for(var v,h=0,p=0,m=t.length-1,g=n.length-1;m>=h&&g>=p;){var C=t[h],E=n[p];if(C!==E||i)if(null==C)h++;else if(null==E)p++;else if(C.key===E.key){var z=null!=c&&h>=t.length-c.length||null==c&&i;h++,p++,d(e,C,E,l,x(t,h,a),z,u),i&&C.tag===E.tag&&k(e,b(C),a)}else{var C=t[m];if(C!==E||i)if(null==C)m--;else if(null==E)p++;else{if(C.key!==E.key)break;var z=null!=c&&m>=t.length-c.length||null==c&&i;d(e,C,E,l,x(t,m+1,a),z,u),(i||g>p)&&k(e,b(C),x(t,h,a)),m--,p++}else m--,p++}else h++,p++}for(;m>=h&&g>=p;){var C=t[m],E=n[g];if(C!==E||i)if(null==C)m--;else if(null==E)g--;else if(C.key===E.key){var z=null!=c&&m>=t.length-c.length||null==c&&i;d(e,C,E,l,x(t,m+1,a),z,u),i&&C.tag===E.tag&&k(e,b(C),a),null!=C.dom&&(a=C.dom),m--,g--}else{if(v||(v=w(t,m)),null!=E){var A=v[E.key];if(null!=A){var N=t[A],z=null!=c&&A>=t.length-c.length||null==c&&i;d(e,N,E,l,x(t,m+1,a),i,u),k(e,b(N),a),t[A].skip=!0,null!=N.dom&&(a=N.dom)}else{var j=o(e,E,l,void 0,a);a=j}}g--}else m--,g--;if(p>g)break}r(e,n,p,g+1,l,a,u),S(t,h,m+1,n)}}function d(e,t,n,r,i,l,a){var u=t.tag,f=n.tag;if(u===f){if(n.state=t.state,n._state=t._state,n.events=t.events,!l&&F(n,t))return;if("string"==typeof u)switch(null!=n.attrs&&(l?(n.state={},L(n.attrs,n,r)):D(n.attrs,n,r)),u){case"#":v(t,n);break;case"<":h(e,t,n,i);break;case"[":p(e,t,n,l,r,i,a);break;default:m(t,n,l,r,a)}else g(e,t,n,r,i,l,a)}else E(t,null),o(e,n,r,a,i)}function v(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children),t.dom=e.dom}function h(e,t,n,r){t.children!==n.children?(b(t),l(e,n,r)):(n.dom=t.dom,n.domSize=t.domSize)}function p(e,t,n,r,o,i,l){c(e,t.children,n.children,r,o,i,l);var a=0,u=n.children;if(n.dom=null,null!=u){for(var f=0;f<u.length;f++){var s=u[f];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),a+=s.domSize||1)}1!==a&&(n.domSize=a)}}function m(e,t,r,o,i){var l=t.dom=e.dom;switch(t.tag){case"svg":i="http://www.w3.org/2000/svg";break;case"math":i="http://www.w3.org/1998/Math/MathML"}"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0)),T(t,e.attrs,t.attrs,i),null!=t.attrs&&null!=t.attrs.contenteditable?C(t):null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[n("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[n("#",void 0,void 0,t.text,void 0,void 0)]),c(l,e.children,t.children,r,o,null,i))}function g(e,t,r,i,l,a,u){if(a)f(r,i);else{if(r.instance=n.normalize(r._state.view.call(r.state,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");null!=r.attrs&&D(r.attrs,r,i),D(r._state,r,i)}null!=r.instance?(null==t.instance?o(e,r.instance,i,u,l):d(e,t.instance,r.instance,i,l,a,u),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=t.instance?(E(t.instance,null),r.dom=void 0,r.domSize=0):(r.dom=t.dom,r.domSize=t.domSize)}function y(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}function w(e,t){for(var n={},r=0,r=0;t>r;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function b(e){var t=e.domSize;if(null!=t||null==e.dom){var n=B.createDocumentFragment();if(t>0){for(var r=e.dom;--t;)n.appendChild(r.nextSibling);n.insertBefore(r,n.firstChild)}return n}return e.dom}function x(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function k(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function C(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function S(e,t,n,r){for(var o=t;n>o;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:E(i,r))}}function E(e,t){function n(){if(++o===r&&(A(e),e.dom)){var n=e.domSize||1;if(n>1)for(var i=e.dom;--n;)z(i.nextSibling);z(e.dom),null==t||null!=e.domSize||I(e.attrs)||"string"!=typeof e.tag||(t.pool?t.pool.push(e):t.pool=[e])}}var r=1,o=0;if(e.attrs&&"function"==typeof e.attrs.onbeforeremove){var i=e.attrs.onbeforeremove.call(e.state,e);null!=i&&"function"==typeof i.then&&(r++,i.then(n,n))}if("string"!=typeof e.tag&&"function"==typeof e._state.onbeforeremove){var i=e._state.onbeforeremove.call(e.state,e);null!=i&&"function"==typeof i.then&&(r++,i.then(n,n))}n()}function z(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function A(e){if(e.attrs&&"function"==typeof e.attrs.onremove&&e.attrs.onremove.call(e.state,e),"string"!=typeof e.tag&&"function"==typeof e._state.onremove&&e._state.onremove.call(e.state,e),null!=e.instance)A(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&A(r)}}}function N(e,t,n){for(var r in t)j(e,r,null,t[r],n)}function j(e,t,n,r,o){var i=e.dom;if("key"!==t&&"is"!==t&&(n!==r||$(e,t)||"object"==typeof r)&&"undefined"!=typeof r&&!_(t)){var l=t.indexOf(":");if(l>-1&&"xlink"===t.substr(0,l))i.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(l+1),r);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof r)q(e,t,r);else if("style"===t)R(i,n,r);else if(t in i&&!M(t)&&void 0===o&&!P(e)){if("input"===e.tag&&"value"===t&&e.dom.value==r&&e.dom===B.activeElement)return;if("select"===e.tag&&"value"===t&&e.dom.value==r&&e.dom===B.activeElement)return;if("option"===e.tag&&"value"===t&&e.dom.value==r)return;if("input"===e.tag&&"type"===t)return void i.setAttribute(t,r);i[t]=r}else"boolean"==typeof r?r?i.setAttribute(t,""):i.removeAttribute(t):i.setAttribute("className"===t?"class":t,r)}}function O(e){var t=e.attrs;"select"===e.tag&&null!=t&&("value"in t&&j(e,"value",null,t.value,void 0),"selectedIndex"in t&&j(e,"selectedIndex",null,t.selectedIndex,void 0))}function T(e,t,n,r){if(null!=n)for(var o in n)j(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||_(o)?"key"!==o&&e.dom.removeAttribute(o):q(e,o,void 0))}function $(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===B.activeElement}function _(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function M(e){return"href"===e||"list"===e||"form"===e||"width"===e||"height"===e}function P(e){return e.attrs.is||e.tag.indexOf("-")>-1}function I(e){return null!=e&&(e.oncreate||e.onupdate||e.onbeforeremove||e.onremove)}function R(e,t,n){if(t===n&&(e.style.cssText="",t=null),null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{"string"==typeof t&&(e.style.cssText="");for(var r in n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}function q(e,t,n){var r=e.dom,o="function"!=typeof H?n:function(e){var t=n.call(r,e);return H.call(r,e),t};if(t in r)r[t]="function"==typeof n?o:null;else{var i=t.slice(2);if(void 0===e.events&&(e.events={}),e.events[t]===o)return;null!=e.events[t]&&r.removeEventListener(i,e.events[t],!1),"function"==typeof n&&(e.events[t]=o,r.addEventListener(i,e.events[t],!1))}}function L(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function D(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}function F(e,t){var n,r;return null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t)),"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t)),void 0===n&&void 0===r||n||r?!1:(e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0)}function U(e,t){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],o=B.activeElement;null==e.vnodes&&(e.textContent=""),Array.isArray(t)||(t=[t]),c(e,e.vnodes,n.normalizeChildren(t),!1,r,null,void 0),e.vnodes=t;for(var i=0;i<r.length;i++)r[i]();B.activeElement!==o&&o.focus()}var H,B=e.document,J=B.createDocumentFragment();return{render:U,setEventCallback:t}},g=function(e){function t(e,t){n(e),i.push(e,l(t))}function n(e){var t=i.indexOf(e);t>-1&&i.splice(t,2)}function r(){for(var e=1;e<i.length;e+=2)i[e]()}var o=m(e);o.setEventCallback(function(e){e.redraw!==!1&&r()});var i=[];return{subscribe:t,unsubscribe:n,redraw:r,render:o.render}},y=g(window);p.setCompletionCallback(y.redraw);var w=function(e){return function(t,r){if(null===r)return e.render(t,[]),void e.unsubscribe(t);if(null==r.view&&"function"!=typeof r)throw new Error("m.mount(element, component) expects a component, not a vnode");var o=function(){e.render(t,n(r))};e.subscribe(t,o),e.redraw()}};s.mount=w(y);var b=c,x=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),f=n;l.indexOf("[")>-1&&u.pop();for(var s=0;s<u.length;s++){var c=u[s],d=u[s+1],v=""==d||!isNaN(parseInt(d,10)),h=s===u.length-1;if(""===c){var l=u.slice(0,s).join();null==r[l]&&(r[l]=0),c=r[l]++}null==f[c]&&(f[c]=h?a:v?[]:{}),f=f[c]}}return n},k=function(e){function t(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function n(e){return function(){null==o&&(o=l(function(){o=null,e()}))}}function r(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var l=o>-1?o:e.length,a=x(e.slice(r+1,l));for(var u in a)t[u]=a[u]}if(o>-1){var f=x(e.slice(o+1));for(var u in f)n[u]=f[u]}return e.slice(0,i)}var o,i="function"==typeof e.history.pushState,l="function"==typeof setImmediate?setImmediate:setTimeout,a={prefix:"#!"};return a.getPath=function(){var e=a.prefix.charAt(0);switch(e){case"#":return t("hash").slice(a.prefix.length);case"?":return t("search").slice(a.prefix.length)+t("hash");default:return t("pathname").slice(a.prefix.length)+t("search")+t("hash")}},a.setPath=function(t,n,o){var l={},u={};if(t=r(t,l,u),null!=n){for(var f in n)l[f]=n[f];t=t.replace(/:([^\/]+)/g,function(e,t){return delete l[t],n[t]})}var s=d(l);s&&(t+="?"+s);var c=d(u);if(c&&(t+="#"+c),i){var v=o?o.state:null,h=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(v,h,a.prefix+t):e.history.pushState(v,h,a.prefix+t)}else e.location.href=a.prefix+t},a.defineRoutes=function(t,o,l){function u(){var n=a.getPath(),i={},u=r(n,i,i),f=e.history.state;if(null!=f)for(var s in f)i[s]=f[s];for(var c in t){var d=new RegExp("^"+c.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(u))return void u.replace(d,function(){for(var e=c.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),l=0;l<e.length;l++)i[e[l].replace(/:|\./g,"")]=decodeURIComponent(r[l]);o(t[c],i,n,c)})}l(n,i)}i?e.onpopstate=n(u):"#"===a.prefix.charAt(0)&&(e.onhashchange=u),u()},a},C=function(e,t){var r,o,i,l,a,u=k(e),f=function(e){return e},s=function(e,s,c){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var d=function(){null!=r&&t.render(e,r(n(o,i.key,i)))},v=function(e){if(e===s)throw new Error("Could not resolve default route "+s);u.setPath(s,null,{replace:!0})};u.defineRoutes(c,function(e,t,n){var u=a=function(e,s){u===a&&(o=null==s||"function"!=typeof s.view&&"function"!=typeof s?"div":s,i=t,l=n,a=null,r=(e.render||f).bind(e),d())};e.view||"function"==typeof e?u({},e):e.onmatch?b.resolve(e.onmatch(t,n)).then(function(t){u(e,t)},v):u(e,"div")},v),t.subscribe(e,d)};return s.set=function(e,t,n){null!=a&&(n={replace:!0}),a=null,u.setPath(e,t,n)},s.get=function(){return l},s.prefix=function(e){u.prefix=e},s.link=function(e){e.dom.setAttribute("href",u.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(u.prefix)&&(t=t.slice(u.prefix.length)),s.set(t,void 0,void 0)}}},s.param=function(e){return"undefined"!=typeof i&&"undefined"!=typeof e?i[e]:i},s};s.route=C(window,y),s.withAttr=function(e,t,n){return function(r){t.call(n||this,e in r.currentTarget?r.currentTarget[e]:r.currentTarget.getAttribute(e))}};var S=m(window);s.render=S.render,s.redraw=y.redraw,s.request=p.request,s.jsonp=p.jsonp,s.parseQueryString=x,s.buildQueryString=d,s.version="1.1.0",s.vnode=n,"undefined"!=typeof t?t.exports=s:window.m=s}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});