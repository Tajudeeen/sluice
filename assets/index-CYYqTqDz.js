import{a as e,t}from"./rolldown-runtime-B0Z9INg1.js";import{$ as n,A as r,B as i,C as a,D as o,E as s,G as c,H as l,I as u,J as d,K as f,L as p,M as m,N as h,O as g,P as _,Q as v,R as y,S as b,T as x,U as S,V as C,W as w,X as T,Y as ee,Z as te,_ as ne,b as E,c as re,d as ie,et as D,f as ae,g as oe,h as se,it as ce,j as O,k,l as le,m as ue,nt as de,p as fe,q as pe,rt as me,s as he,tt as ge,u as _e,v as ve,w as ye,x as be,y as xe,z as Se}from"./wallet-B3lAN8Na.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Ce=t((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,D(x);else{var t=n(l);t!==null&&ae(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ae(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,ee=-1;function te(){return!(e.unstable_now()-ee<T)}function ne(){if(C!==null){var t=e.unstable_now();ee=t;var n=!0;try{n=C(!0,t)}finally{n?E():(S=!1,C=null)}}else S=!1}var E;if(typeof v==`function`)E=function(){v(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,E=function(){ie.postMessage(null)}}else E=function(){g(ne,0)};function D(e){C=e,S||(S=!0,E())}function ae(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,D(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ae(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,D(x))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),we=t(((e,t)=>{t.exports=Ce()})),Te=t((e=>{var t=ce(),n=we();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},f={};function p(e){return l.call(f,e)?!0:l.call(d,e)?!1:u.test(e)?f[e]=!0:(d[e]=!0,!1)}function m(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function h(e,t,n,r){if(t==null||m(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function g(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var _={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){_[e]=new g(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];_[t]=new g(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){_[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){_[e]=new g(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){_[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){_[e]=new g(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){_[e]=new g(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){_[e]=new g(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){_[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(v,y);_[t]=new g(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(v,y);_[t]=new g(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(v,y);_[t]=new g(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){_[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new g(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){_[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)});function b(e,t,n,r){var i=_.hasOwnProperty(t)?_[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(h(t,n,i,r)&&(n=null),r||i===null?p(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var x=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,S=Symbol.for(`react.element`),C=Symbol.for(`react.portal`),w=Symbol.for(`react.fragment`),T=Symbol.for(`react.strict_mode`),ee=Symbol.for(`react.profiler`),te=Symbol.for(`react.provider`),ne=Symbol.for(`react.context`),E=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),ae=Symbol.for(`react.lazy`),oe=Symbol.for(`react.offscreen`),se=Symbol.iterator;function O(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var k=Object.assign,le;function ue(e){if(le===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);le=t&&t[1]||``}return`
`+le+e}var de=!1;function fe(e,t){if(!e||de)return``;de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{de=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?ue(e):``}function pe(e){switch(e.tag){case 5:return ue(e.type);case 16:return ue(`Lazy`);case 13:return ue(`Suspense`);case 19:return ue(`SuspenseList`);case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return``}}function me(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case w:return`Fragment`;case C:return`Portal`;case ee:return`Profiler`;case T:return`StrictMode`;case re:return`Suspense`;case ie:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ne:return(e.displayName||`Context`)+`.Consumer`;case te:return(e._context.displayName||`Context`)+`.Provider`;case E:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?me(e.type)||`Memo`:t;case ae:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return me(t);case 8:return t===T?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function ge(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function _e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ve(e){var t=_e(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ye(e){e._valueTracker||=ve(e)}function be(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=_e(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function xe(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Se(e,t){var n=t.checked;return k({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ce(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=ge(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Te(e,t){t=t.checked,t!=null&&b(e,`checked`,t,!1)}function Ee(e,t){Te(e,t);var n=ge(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Oe(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Oe(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function De(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Oe(e,t,n){(t!==`number`||xe(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var ke=Array.isArray;function Ae(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ge(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function je(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return k({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function A(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(ke(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:ge(n)}}function Me(e,t){var n=ge(t.value),r=ge(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ne(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Pe(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Fe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Pe(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Ie,j=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Ie||=document.createElement(`div`),Ie.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Ie.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Le(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Re).forEach(function(e){ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Re[t]=Re[e]})});function Be(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Re.hasOwnProperty(e)&&Re[e]?(``+t).trim():t+`px`}function Ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Be(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var He=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(e,t){if(t){if(He[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function We(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ge=null;function Ke(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qe=null,Je=null,Ye=null;function Xe(e){if(e=Vi(e)){if(typeof qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ui(t),qe(e.stateNode,e.type,t))}}function Ze(e){Je?Ye?Ye.push(e):Ye=[e]:Je=e}function Qe(){if(Je){var e=Je,t=Ye;if(Ye=Je=null,Xe(e),t)for(e=0;e<t.length;e++)Xe(t[e])}}function $e(e,t){return e(t)}function et(){}var tt=!1;function nt(e,t,n){if(tt)return e(t,n);tt=!0;try{return $e(e,t,n)}finally{tt=!1,(Je!==null||Ye!==null)&&(et(),Qe())}}function rt(e,t){var n=e.stateNode;if(n===null)return null;var i=Ui(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var it=!1;if(c)try{var at={};Object.defineProperty(at,"passive",{get:function(){it=!0}}),window.addEventListener(`test`,at,at),window.removeEventListener(`test`,at,at)}catch{it=!1}function ot(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var st=!1,ct=null,lt=!1,ut=null,dt={onError:function(e){st=!0,ct=e}};function ft(e,t,n,r,i,a,o,s,c){st=!1,ct=null,ot.apply(dt,arguments)}function pt(e,t,n,i,a,o,s,c,l){if(ft.apply(this,arguments),st){if(st){var u=ct;st=!1,ct=null}else throw Error(r(198));lt||(lt=!0,ut=u)}}function mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ht(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gt(e){if(mt(e)!==e)throw Error(r(188))}function _t(e){var t=e.alternate;if(!t){if(t=mt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return gt(a),e;if(o===i)return gt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function vt(e){return e=_t(e),e===null?null:yt(e)}function yt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yt(e);if(t!==null)return t;e=e.sibling}return null}var bt=n.unstable_scheduleCallback,xt=n.unstable_cancelCallback,St=n.unstable_shouldYield,Ct=n.unstable_requestPaint,M=n.unstable_now,wt=n.unstable_getCurrentPriorityLevel,Tt=n.unstable_ImmediatePriority,Et=n.unstable_UserBlockingPriority,Dt=n.unstable_NormalPriority,Ot=n.unstable_LowPriority,kt=n.unstable_IdlePriority,At=null,jt=null;function Mt(e){if(jt&&typeof jt.onCommitFiberRoot==`function`)try{jt.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)==128)}catch{}}var Nt=Math.clz32?Math.clz32:It,Pt=Math.log,Ft=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Pt(e)/Ft|0)|0}var Lt=64,Rt=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=zt(a))):r=zt(s)}else o=n&~i,o===0?a!==0&&(r=zt(a)):r=zt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Vt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ut(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Wt(){var e=Lt;return Lt<<=1,!(Lt&4194240)&&(Lt=64),e}function Gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function qt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var N=0;function Yt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xt,Zt,Qt,$t,en,tn=!1,nn=[],rn=null,an=null,on=null,sn=new Map,cn=new Map,ln=[],un=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function dn(e,t){switch(e){case`focusin`:case`focusout`:rn=null;break;case`dragenter`:case`dragleave`:an=null;break;case`mouseover`:case`mouseout`:on=null;break;case`pointerover`:case`pointerout`:sn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:cn.delete(t.pointerId)}}function fn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vi(t),t!==null&&Zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pn(e,t,n,r,i){switch(t){case`focusin`:return rn=fn(rn,e,t,n,r,i),!0;case`dragenter`:return an=fn(an,e,t,n,r,i),!0;case`mouseover`:return on=fn(on,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return sn.set(a,fn(sn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,cn.set(a,fn(cn.get(a)||null,e,t,n,r,i)),!0}return!1}function mn(e){var t=Bi(e.target);if(t!==null){var n=mt(t);if(n!==null){if(t=n.tag,t===13){if(t=ht(n),t!==null){e.blockedOn=t,en(e.priority,function(){Qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=En(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ge=r,n.target.dispatchEvent(r),Ge=null}else return t=Vi(n),t!==null&&Zt(t),e.blockedOn=n,!1;t.shift()}return!0}function gn(e,t,n){hn(e)&&n.delete(t)}function _n(){tn=!1,rn!==null&&hn(rn)&&(rn=null),an!==null&&hn(an)&&(an=null),on!==null&&hn(on)&&(on=null),sn.forEach(gn),cn.forEach(gn)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,tn||(tn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_n)))}function yn(e){function t(t){return vn(t,e)}if(0<nn.length){vn(nn[0],e);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&vn(rn,e),an!==null&&vn(an,e),on!==null&&vn(on,e),sn.forEach(t),cn.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)mn(n),n.blockedOn===null&&ln.shift()}var bn=x.ReactCurrentBatchConfig,xn=!0;function Sn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=1,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function Cn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=4,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function wn(e,t,n,r){if(xn){var i=En(e,t,n,r);if(i===null)fi(e,t,r,Tn,n),dn(e,r);else if(pn(i,e,t,n,r))r.stopPropagation();else if(dn(e,r),t&4&&-1<un.indexOf(e)){for(;i!==null;){var a=Vi(i);if(a!==null&&Xt(a),a=En(e,t,n,r),a===null&&fi(e,t,r,Tn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else fi(e,t,r,null,n)}}var Tn=null;function En(e,t,n,r){if(Tn=null,e=Ke(r),e=Bi(e),e!==null){if(t=mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ht(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return Tn=e,null}function Dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(wt()){case Tt:return 1;case Et:return 4;case Dt:case Ot:return 16;case kt:return 536870912;default:return 16}default:return 16}}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=k({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=k({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(k({},Un,{dataTransfer:0})),Kn=Fn(k({},Rn,{relatedTarget:0})),qn=Fn(k({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),P=Fn(k({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),F=Fn(k({},In,{data:0})),Jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Yn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Xn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xn[e])?!!t[e]:!1}function Qn(){return Zn}var $n=Fn(k({},Rn,{key:function(e){if(e.key){var t=Jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Yn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qn,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),er=Fn(k({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),tr=Fn(k({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qn})),nr=Fn(k({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),rr=Fn(k({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ir=[9,13,27,32],ar=c&&`CompositionEvent`in window,or=null;c&&`documentMode`in document&&(or=document.documentMode);var I=c&&`TextEvent`in window&&!or,sr=c&&(!ar||or&&8<or&&11>=or),cr=` `,lr=!1;function ur(e,t){switch(e){case`keyup`:return ir.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function dr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var fr=!1;function pr(e,t){switch(e){case`compositionend`:return dr(t);case`keypress`:return t.which===32?(lr=!0,cr):null;case`textInput`:return e=t.data,e===cr&&lr?null:e;default:return null}}function mr(e,t){if(fr)return e===`compositionend`||!ar&&ur(e,t)?(e=jn(),An=kn=On=null,fr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return sr&&t.locale!==`ko`?null:t.data;default:return null}}var hr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!hr[e.type]:t===`textarea`}function _r(e,t,n,r){Ze(r),t=mi(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var vr=null,L=null;function yr(e){si(e,0)}function br(e){if(be(Hi(e)))return e}function xr(e,t){if(e===`change`)return t}var Sr=!1;if(c){var Cr;if(c){var wr=`oninput`in document;if(!wr){var Tr=document.createElement(`div`);Tr.setAttribute(`oninput`,`return;`),wr=typeof Tr.oninput==`function`}Cr=wr}else Cr=!1;Sr=Cr&&(!document.documentMode||9<document.documentMode)}function Er(){vr&&(vr.detachEvent(`onpropertychange`,Dr),L=vr=null)}function Dr(e){if(e.propertyName===`value`&&br(L)){var t=[];_r(t,L,e,Ke(e)),nt(yr,t)}}function Or(e,t,n){e===`focusin`?(Er(),vr=t,L=n,vr.attachEvent(`onpropertychange`,Dr)):e===`focusout`&&Er()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return br(L)}function Ar(e,t){if(e===`click`)return br(t)}function jr(e,t){if(e===`input`||e===`change`)return br(t)}function R(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:R;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function z(){for(var e=window,t=xe();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=xe(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Rr(e){var t=z(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ir(n.ownerDocument.documentElement,n)){if(r!==null&&Lr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Fr(n,a);var o=Fr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zr=c&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==xe(r)||(r=Br,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=mi(Vr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};c&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionend`),ei=new Map,ti=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ni(e,t){ei.set(e,t),o(t,[e])}for(var ri=0;ri<ti.length;ri++){var B=ti[ri];ni(B.toLowerCase(),`on`+(B[0].toUpperCase()+B.slice(1)))}ni(Xr,`onAnimationEnd`),ni(Zr,`onAnimationIteration`),ni(Qr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni($r,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ii=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ai=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ii));function oi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,pt(r,t,void 0,e),e.currentTarget=null}function si(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;oi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;oi(i,s,l),a=c}}}if(lt)throw e=ut,lt=!1,ut=null,e}function V(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+`__bubble`;n.has(r)||(di(t,e,2,!1),n.add(r))}function ci(e,t,n){var r=0;t&&(r|=4),di(n,e,r,t)}var li=`_reactListening`+Math.random().toString(36).slice(2);function ui(e){if(!e[li]){e[li]=!0,i.forEach(function(t){t!==`selectionchange`&&(ai.has(t)||ci(t,!1,e),ci(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[li]||(t[li]=!0,ci(`selectionchange`,!1,t))}}function di(e,t,n,r){switch(Dn(t)){case 1:var i=Sn;break;case 4:i=Cn;break;default:i=wn}n=i.bind(null,t,n,e),i=void 0,!it||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function fi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Bi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}nt(function(){var r=a,i=Ke(n),o=[];a:{var s=ei.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=$n;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=tr;break;case Xr:case Zr:case Qr:c=qn;break;case $r:c=nr;break;case`scroll`:c=zn;break;case`wheel`:c=rr;break;case`copy`:case`cut`:case`paste`:c=P;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=er}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=rt(p,f),h!=null&&u.push(pi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ge&&(l=n.relatedTarget||n.fromElement)&&(Bi(l)||l[Ii]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Bi(l):null,l!==null&&(d=mt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=er,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Hi(c),m=l==null?s:Hi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Bi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=hi(m))p++;for(m=0,h=f;h;h=hi(h))m++;for(;0<p-m;)u=hi(u),p--;for(;0<m-p;)f=hi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=hi(u),f=hi(f)}u=null}else u=null;c!==null&&gi(o,s,c,u,!1),l!==null&&d!==null&&gi(o,d,l,u,!0)}}a:{if(s=r?Hi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=xr;else if(gr(s)){if(Sr)g=jr;else{g=kr;var _=Or}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Ar);if(g&&=g(e,r)){_r(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Oe(s,`number`,s.value)}switch(_=r?Hi(r):window,e){case`focusin`:(gr(_)||_.contentEditable===`true`)&&(Br=_,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(o,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(o,n,i)}var v;if(ar)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else fr?ur(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(sr&&n.locale!==`ko`&&(fr||y!==`onCompositionStart`?y===`onCompositionEnd`&&fr&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,fr=!0)),_=mi(r,y),0<_.length&&(y=new F(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=dr(n),v!==null&&(y.data=v)))),(v=I?pr(e,n):mr(e,n))&&(r=mi(r,`onBeforeInput`),0<r.length&&(i=new F(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}si(o,t)})}function pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=rt(e,n),a!=null&&r.unshift(pi(e,a,i)),a=rt(e,t),a!=null&&r.push(pi(e,a,i))),e=e.return}return r}function hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=rt(n,a),c!=null&&o.unshift(pi(n,c,s))):i||(c=rt(n,a),c!=null&&o.push(pi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _i=/\r\n?/g,vi=/\u0000|\uFFFD/g;function yi(e){return(typeof e==`string`?e:``+e).replace(_i,`
`).replace(vi,``)}function bi(e,t,n){if(t=yi(t),yi(e)!==t&&n)throw Error(r(425))}function xi(){}var Si=null,Ci=null;function wi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout==`function`?setTimeout:void 0,Ei=typeof clearTimeout==`function`?clearTimeout:void 0,Di=typeof Promise==`function`?Promise:void 0,Oi=typeof queueMicrotask==`function`?queueMicrotask:Di===void 0?Ti:function(e){return Di.resolve(null).then(e).catch(ki)};function ki(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),yn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);yn(t)}function ji(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Mi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),Pi=`__reactFiber$`+Ni,Fi=`__reactProps$`+Ni,Ii=`__reactContainer$`+Ni,Li=`__reactEvents$`+Ni,Ri=`__reactListeners$`+Ni,zi=`__reactHandles$`+Ni;function Bi(e){var t=e[Pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ii]||n[Pi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mi(e);e!==null;){if(n=e[Pi])return n;e=Mi(e)}return t}e=n,n=e.parentNode}return null}function Vi(e){return e=e[Pi]||e[Ii],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ui(e){return e[Fi]||null}var Wi=[],Gi=-1;function Ki(e){return{current:e}}function H(e){0>Gi||(e.current=Wi[Gi],Wi[Gi]=null,Gi--)}function U(e,t){Gi++,Wi[Gi]=e.current,e.current=t}var qi={},Ji=Ki(qi),Yi=Ki(!1),Xi=qi;function Zi(e,t){var n=e.type.contextTypes;if(!n)return qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qi(e){return e=e.childContextTypes,e!=null}function $i(){H(Yi),H(Ji)}function ea(e,t,n){if(Ji.current!==qi)throw Error(r(168));U(Ji,t),U(Yi,n)}function ta(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,he(e)||`Unknown`,a));return k({},n,i)}function na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qi,Xi=Ji.current,U(Ji,e),U(Yi,Yi.current),!0}function ra(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ta(e,t,Xi),i.__reactInternalMemoizedMergedChildContext=e,H(Yi),H(Ji),U(Ji,e)):H(Yi),U(Yi,n)}var ia=null,W=!1,aa=!1;function oa(e){ia===null?ia=[e]:ia.push(e)}function sa(e){W=!0,oa(e)}function ca(){if(!aa&&ia!==null){aa=!0;var e=0,t=N;try{var n=ia;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ia=null,W=!1}catch(t){throw ia!==null&&(ia=ia.slice(e+1)),bt(Tt,ca),t}finally{N=t,aa=!1}}return null}var la=[],ua=0,da=null,fa=0,pa=[],ma=0,ha=null,ga=1,_a=``;function va(e,t){la[ua++]=fa,la[ua++]=da,da=e,fa=t}function ya(e,t,n){pa[ma++]=ga,pa[ma++]=_a,pa[ma++]=ha,ha=e;var r=ga;e=_a;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ga=1<<32-Nt(t)+i|n<<i|r,_a=a+e}else ga=1<<a|n<<i|r,_a=e}function ba(e){e.return!==null&&(va(e,1),ya(e,1,0))}function xa(e){for(;e===da;)da=la[--ua],la[ua]=null,fa=la[--ua],la[ua]=null;for(;e===ha;)ha=pa[--ma],pa[ma]=null,_a=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null}var Sa=null,Ca=null,G=!1,wa=null;function Ta(e,t){var n=Jl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ea(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,Sa=e,Ca=ji(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,Sa=e,Ca=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=ha===null?null:{id:ga,overflow:_a},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Sa=e,Ca=null,!0);default:return!1}}function Da(e){return!!(e.mode&1)&&!(e.flags&128)}function Oa(e){if(G){var t=Ca;if(t){var n=t;if(!Ea(e,t)){if(Da(e))throw Error(r(418));t=ji(n.nextSibling);var i=Sa;t&&Ea(e,t)?Ta(i,n):(e.flags=e.flags&-4097|2,G=!1,Sa=e)}}else{if(Da(e))throw Error(r(418));e.flags=e.flags&-4097|2,G=!1,Sa=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Sa=e}function Aa(e){if(e!==Sa)return!1;if(!G)return ka(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!wi(e.type,e.memoizedProps)),t&&=Ca){if(Da(e))throw ja(),Error(r(418));for(;t;)Ta(e,t),t=ji(t.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ca=ji(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ca=null}}else Ca=Sa?ji(e.stateNode.nextSibling):null;return!0}function ja(){for(var e=Ca;e;)e=ji(e.nextSibling)}function Ma(){Ca=Sa=null,G=!1}function Na(e){wa===null?wa=[e]:wa.push(e)}var Pa=x.ReactCurrentBatchConfig;function Fa(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ia(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function La(e){var t=e._init;return t(e._payload)}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Zl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===w?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ae&&La(i)===t.type)?(r=a(t,n.props),r.ref=Fa(e,t,n),r.return=e,r):(r=Ql(n.type,n.key,n.props,null,e.mode,r),r.ref=Fa(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=nu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=$l(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=tu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case S:return n=Ql(t.type,t.key,t.props,null,e.mode,n),n.ref=Fa(e,null,t),n.return=e,n;case C:return t=nu(t,e.mode,n),t.return=e,t;case ae:var r=t._init;return f(e,r(t._payload),n)}if(ke(t)||O(t))return t=$l(t,e.mode,n,null),t.return=e,t;Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case S:return n.key===i?l(e,t,n,r):null;case C:return n.key===i?u(e,t,n,r):null;case ae:return i=n._init,p(e,t,i(n._payload),r)}if(ke(n)||O(n))return i===null?d(e,t,n,r,null):null;Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case S:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case C:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ae:var a=r._init;return m(e,t,n,a(r._payload),i)}if(ke(r)||O(r))return e=e.get(n)||null,d(t,e,r,i,null);Ia(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),G&&va(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return G&&va(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),G&&va(r,h),l}function g(a,s,c,l){var u=O(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),G&&va(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return G&&va(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),G&&va(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===w&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case S:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===w){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ae&&La(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Fa(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===w?(r=$l(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Ql(i.type,i.key,i.props,null,e.mode,o),o.ref=Fa(e,r,i),o.return=e,e=o)}return s(e);case C:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=nu(i,e.mode,o),r.return=e,e=r}return s(e);case ae:return l=i._init,_(e,r,l(i._payload),o)}if(ke(i))return h(e,r,i,o);if(O(i))return g(e,r,i,o);Ia(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=tu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var za=Ra(!0),Ba=Ra(!1),Va=Ki(null),Ha=null,Ua=null,Wa=null;function Ga(){Wa=Ua=Ha=null}function Ka(e){var t=Va.current;H(Va),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ja(e,t){Ha=e,Wa=Ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fs=!0),e.firstContext=null)}function Ya(e){var t=e._currentValue;if(Wa!==e){if(e={context:e,memoizedValue:t,next:null},Ua===null){if(Ha===null)throw Error(r(308));Ua=e,Ha.dependencies={lanes:0,firstContext:e}}else Ua=Ua.next=e}return t}var Xa=null;function Za(e){Xa===null?Xa=[e]:Xa.push(e)}function Qa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Za(t)):(n.next=i.next,i.next=n),t.interleaved=n,$a(e,r)}function $a(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var eo=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function no(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ro(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function io(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$a(e,n)}return i=r.interleaved,i===null?(t.next=t,Za(r)):(t.next=i.next,i.next=t),r.interleaved=t,$a(e,n)}function ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}function oo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var i=e.updateQueue;eo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=k({},d,f);break a;case 2:eo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zc|=o,e.lanes=o,e.memoizedState=d}}function co(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var lo={},uo=Ki(lo),fo=Ki(lo),po=Ki(lo);function mo(e){if(e===lo)throw Error(r(174));return e}function ho(e,t){switch(U(po,t),U(fo,e),U(uo,lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fe(t,e)}H(uo),U(uo,t)}function go(){H(uo),H(fo),H(po)}function _o(e){mo(po.current);var t=mo(uo.current),n=Fe(t,e.type);t!==n&&(U(fo,e),U(uo,n))}function vo(e){fo.current===e&&(H(uo),H(fo))}var K=Ki(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bo=[];function xo(){for(var e=0;e<bo.length;e++)bo[e]._workInProgressVersionPrimary=null;bo.length=0}var So=x.ReactCurrentDispatcher,Co=x.ReactCurrentBatchConfig,wo=0,q=null,J=null,To=null,Eo=!1,Do=!1,Oo=0,ko=0;function Ao(){throw Error(r(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function Mo(e,t,n,i,a,o){if(wo=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?hs:gs,e=n(i,a),Do){o=0;do{if(Do=!1,Oo=0,25<=o)throw Error(r(301));o+=1,To=J=null,t.updateQueue=null,So.current=_s,e=n(i,a)}while(Do)}if(So.current=ms,t=J!==null&&J.next!==null,wo=0,To=J=q=null,Eo=!1,t)throw Error(r(300));return e}function No(){var e=Oo!==0;return Oo=0,e}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?q.memoizedState=To=e:To=To.next=e,To}function Fo(){if(J===null){var e=q.alternate;e=e===null?null:e.memoizedState}else e=J.next;var t=To===null?q.memoizedState:To.next;if(t!==null)To=t,J=e;else{if(e===null)throw Error(r(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},To===null?q.memoizedState=To=e:To=To.next=e}return To}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=J,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((wo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,q.lanes|=d,Zc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Mr(i,t.memoizedState)||(Fs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,q.lanes|=o,Zc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ro(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Mr(o,t.memoizedState)||(Fs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function zo(){}function Bo(e,t){var n=q,i=Fo(),a=t(),o=!Mr(i.memoizedState,a);if(o&&(i.memoizedState=a,Fs=!0),i=i.queue,Qo(Uo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||To!==null&&To.memoizedState.tag&1){if(n.flags|=2048,qo(9,Ho.bind(null,n,i,a,t),void 0,null),Wc===null)throw Error(r(349));wo&30||Vo(n,t,a)}return a}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Go(e){var t=$a(e,1);t!==null&&_l(t,e,1,-1)}function Ko(e){var t=Po();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=us.bind(null,q,e),[t.memoizedState,e]}function qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jo(){return Fo().memoizedState}function Yo(e,t,n,r){var i=Po();q.flags|=e,i.memoizedState=qo(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=void 0;if(J!==null){var o=J.memoizedState;if(a=o.destroy,r!==null&&jo(r,o.deps)){i.memoizedState=qo(t,n,a,r);return}}q.flags|=e,i.memoizedState=qo(1|t,n,a,r)}function Zo(e,t){return Yo(8390656,8,e,t)}function Qo(e,t){return Xo(2048,8,e,t)}function $o(e,t){return Xo(4,2,e,t)}function es(e,t){return Xo(4,4,e,t)}function ts(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ns(e,t,n){return n=n==null?null:n.concat([e]),Xo(4,4,ts.bind(null,t,e),n)}function rs(){}function is(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function as(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function os(e,t,n){return wo&21?(Mr(n,t)||(n=Wt(),q.lanes|=n,Zc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fs=!0),e.memoizedState=n)}function ss(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=Co.transition;Co.transition={};try{e(!1),t()}finally{N=n,Co.transition=r}}function cs(){return Fo().memoizedState}function ls(e,t,n){var r=gl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ds(e))fs(t,n);else if(n=Qa(e,t,n,r),n!==null){var i=hl();_l(n,e,r,i),ps(n,t,r)}}function us(e,t,n){var r=gl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ds(e))fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o)){var c=t.interleaved;c===null?(i.next=i,Za(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Qa(e,t,i,r),n!==null&&(i=hl(),_l(n,e,r,i),ps(n,t,r))}}function ds(e){var t=e.alternate;return e===q||t!==null&&t===q}function fs(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ps(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}var ms={readContext:Ya,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useInsertionEffect:Ao,useLayoutEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useMutableSource:Ao,useSyncExternalStore:Ao,useId:Ao,unstable_isNewReconciler:!1},hs={readContext:Ya,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:Ya,useEffect:Zo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Yo(4194308,4,ts.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=Po();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Po();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ls.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:Ko,useDebugValue:rs,useDeferredValue:function(e){return Po().memoizedState=e},useTransition:function(){var e=Ko(!1),t=e[0];return e=ss.bind(null,e[1]),Po().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=q,a=Po();if(G){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Wc===null)throw Error(r(349));wo&30||Vo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Zo(Uo.bind(null,i,o,e),[e]),i.flags|=2048,qo(9,Ho.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Po(),t=Wc.identifierPrefix;if(G){var n=_a,r=ga;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Oo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=ko++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},gs={readContext:Ya,useCallback:is,useContext:Ya,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Lo,useRef:Jo,useState:function(){return Lo(Io)},useDebugValue:rs,useDeferredValue:function(e){return os(Fo(),J.memoizedState,e)},useTransition:function(){return[Lo(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1},_s={readContext:Ya,useCallback:is,useContext:Ya,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Ro,useRef:Jo,useState:function(){return Ro(Io)},useDebugValue:rs,useDeferredValue:function(e){var t=Fo();return J===null?t.memoizedState=e:os(t,J.memoizedState,e)},useTransition:function(){return[Ro(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1};function vs(e,t){if(e&&e.defaultProps){for(var n in t=k({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=ro(r,i);a.payload=t,n!=null&&(a.callback=n),t=io(e,a,i),t!==null&&(_l(t,e,i,r),ao(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=ro(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=io(e,a,i),t!==null&&(_l(t,e,i,r),ao(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hl(),r=gl(e),i=ro(n,r);i.tag=2,t!=null&&(i.callback=t),t=io(e,i,r),t!==null&&(_l(t,e,r,n),ao(t,e,r))}};function xs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Ss(e,t,n){var r=!1,i=qi,a=t.contextType;return typeof a==`object`&&a?a=Ya(a):(i=Qi(t)?Xi:Ji.current,r=t.contextTypes,a=(r=r!=null)?Zi(e,i):qi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},to(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ya(a):(a=Qi(t)?Xi:Ji.current,i.context=Zi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(ys(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&bs.enqueueReplaceState(i,i.state,null),so(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ts(e,t){try{var n=``,r=t;do n+=pe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Os=typeof WeakMap==`function`?WeakMap:Map;function ks(e,t,n){n=ro(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,ol=r),Ds(e,t)},n}function As(e,t,n){n=ro(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ds(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ds(e,t),typeof r!=`function`&&(sl===null?sl=new Set([this]):sl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Os;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vl.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ro(-1,1),t.tag=2,io(n,t,1))),n.lanes|=1),e)}var Ps=x.ReactCurrentOwner,Fs=!1;function Is(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function Ls(e,t,n,r,i){n=n.render;var a=t.ref;return Ja(t,i),r=Mo(e,t,n,r,a,i),n=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(G&&n&&ba(t),t.flags|=1,Is(e,t,r,i),t.child)}function Rs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Yl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zs(e,t,a,r,i)):(e=Ql(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return rc(e,t,i)}return t.flags|=1,e=Zl(a,r),e.ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref){if(Fs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Fs=!0);else return t.lanes=e.lanes,rc(e,t,i)}}return Hs(e,t,n,r,i)}function Bs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Jc,qc),qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Jc,qc),qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,U(Jc,qc),qc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),U(Jc,qc),qc|=r;return Is(e,t,i,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,n,r,i){var a=Qi(n)?Xi:Ji.current;return a=Zi(t,a),Ja(t,i),n=Mo(e,t,n,r,a,i),r=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(G&&r&&ba(t),t.flags|=1,Is(e,t,n,i),t.child)}function Us(e,t,n,r,i){if(Qi(n)){var a=!0;na(t)}else a=!1;if(Ja(t,i),t.stateNode===null)nc(e,t),Ss(t,n,r),ws(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ya(l):(l=Qi(n)?Xi:Ji.current,l=Zi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Cs(t,o,r,l),eo=!1;var f=t.memoizedState;o.state=f,so(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Yi.current||eo?(typeof u==`function`&&(ys(t,n,u,r),c=t.memoizedState),(s=eo||xs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,no(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:vs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ya(c):(c=Qi(n)?Xi:Ji.current,c=Zi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Cs(t,o,r,c),eo=!1,f=t.memoizedState,o.state=f,so(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Yi.current||eo?(typeof p==`function`&&(ys(t,n,p,r),m=t.memoizedState),(l=eo||xs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ws(e,t,n,r,a,i)}function Ws(e,t,n,r,i,a){Vs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&ra(t,n,!1),rc(e,t,a);r=t.stateNode,Ps.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=za(t,e.child,null,a),t.child=za(t,null,s,a)):Is(e,t,s,a),t.memoizedState=r.state,i&&ra(t,n,!0),t.child}function Gs(e){var t=e.stateNode;t.pendingContext?ea(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ea(e,t.context,!1),ho(e,t.containerInfo)}function Ks(e,t,n,r,i){return Ma(),Na(i),t.flags|=256,Is(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r=t.pendingProps,i=K.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(K,i&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=eu(o,r,0,null),e=$l(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Js(n),t.memoizedState=qs,e):Xs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=$l(a,o,n,null),a.flags|=2):a=Zl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Js(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=qs,r}return a=e.child,e=a.sibling,r=Zl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=eu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Zs(e,t,n,r){return r!==null&&Na(r),za(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Es(Error(r(422))),Zs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=eu({mode:`visible`,children:i.children},a,0,null),o=$l(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&za(t,e.child,null,s),t.child.memoizedState=Js(s),t.memoizedState=qs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Zs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Es(o,i,void 0),Zs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Fs||c){if(i=Wc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,$a(e,a),_l(i,e,a,-1))}return jl(),i=Es(Error(r(421))),Zs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Ul.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ca=ji(a.nextSibling),Sa=t,G=!0,wa=null,e!==null&&(pa[ma++]=ga,pa[ma++]=_a,pa[ma++]=ha,ga=e.id,_a=e.overflow,ha=t),t=Xs(t,i.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function ec(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Is(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ec(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ec(t,!0,n,null,a);break;case`together`:ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Zl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t,n){switch(t.tag){case 3:Gs(t),Ma();break;case 5:_o(t);break;case 1:Qi(t.type)&&na(t);break;case 4:ho(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Va,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(U(K,K.current&1),e=rc(e,t,n),e===null?null:e.sibling):Ys(e,t,n):(U(K,K.current&1),t.flags|=128,null);U(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return rc(e,t,n)}var ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mo(uo.current);var o=null;switch(n){case`input`:i=Se(e,i),r=Se(e,r),o=[];break;case`select`:i=k({},i,{value:void 0}),r=k({},r,{value:void 0}),o=[];break;case`textarea`:i=je(e,i),r=je(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=xi)}Ue(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&V(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function cc(e,t){if(!G)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uc(e,t,n){var i=t.pendingProps;switch(xa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lc(t),null;case 1:return Qi(t.type)&&$i(),lc(t),null;case 3:return i=t.stateNode,go(),H(Yi),H(Ji),xo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wa!==null&&(xl(wa),wa=null))),lc(t),null;case 5:vo(t);var o=mo(po.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return lc(t),null}if(e=mo(uo.current),Aa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Pi]=t,i[Fi]=s,e=!!(t.mode&1),n){case`dialog`:V(`cancel`,i),V(`close`,i);break;case`iframe`:case`object`:case`embed`:V(`load`,i);break;case`video`:case`audio`:for(o=0;o<ii.length;o++)V(ii[o],i);break;case`source`:V(`error`,i);break;case`img`:case`image`:case`link`:V(`error`,i),V(`load`,i);break;case`details`:V(`toggle`,i);break;case`input`:Ce(i,s),V(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},V(`invalid`,i);break;case`textarea`:A(i,s),V(`invalid`,i)}for(var c in Ue(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&bi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&bi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&V(`scroll`,i)}switch(n){case`input`:ye(i),De(i,s,!0);break;case`textarea`:ye(i),Ne(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=xi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Pe(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Pi]=t,e[Fi]=i,ac(e,t,!1,!1),t.stateNode=e;a:{switch(c=We(n,i),n){case`dialog`:V(`cancel`,e),V(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:V(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ii.length;o++)V(ii[o],e);o=i;break;case`source`:V(`error`,e),o=i;break;case`img`:case`image`:case`link`:V(`error`,e),V(`load`,e),o=i;break;case`details`:V(`toggle`,e),o=i;break;case`input`:Ce(e,i),o=Se(e,i),V(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=k({},i,{value:void 0}),V(`invalid`,e);break;case`textarea`:A(e,i),o=je(e,i),V(`invalid`,e);break;default:o=i}for(s in Ue(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ve(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&j(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Le(e,u):typeof u==`number`&&Le(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&V(`scroll`,e):u!=null&&b(e,s,u,c))}switch(n){case`input`:ye(e),De(e,i,!1);break;case`textarea`:ye(e),Ne(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+ge(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ae(e,!!i.multiple,i.defaultValue,!0):Ae(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=xi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lc(t),null;case 6:if(e&&t.stateNode!=null)sc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=mo(po.current),mo(uo.current),Aa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Pi]=t,(s=i.nodeValue!==n)&&(e=Sa,e!==null))switch(e.tag){case 3:bi(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&bi(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Pi]=t,t.stateNode=i}return lc(t),null;case 13:if(H(K),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ca!==null&&t.mode&1&&!(t.flags&128))ja(),Ma(),t.flags|=98560,s=!1;else if(s=Aa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Pi]=t}else Ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lc(t),s=!1}else wa!==null&&(xl(wa),wa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?Yc===0&&(Yc=3):jl())),t.updateQueue!==null&&(t.flags|=4),lc(t),null);case 4:return go(),e===null&&ui(t.stateNode.containerInfo),lc(t),null;case 10:return Ka(t.type._context),lc(t),null;case 17:return Qi(t.type)&&$i(),lc(t),null;case 19:if(H(K),s=t.memoizedState,s===null)return lc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)cc(s,!1);else{if(Yc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=yo(e),c!==null){for(t.flags|=128,cc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(K,K.current&1|2),t.child}e=e.sibling}s.tail!==null&&M()>rl&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=yo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!G)return lc(t),null}else 2*M()-s.renderingStartTime>rl&&n!==1073741824&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(lc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,n=K.current,U(K,i?n&1|2:n&1),t);case 22:case 23:return Dl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qc&1073741824&&(lc(t),t.subtreeFlags&6&&(t.flags|=8192)):lc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function dc(e,t){switch(xa(t),t.tag){case 1:return Qi(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return go(),H(Yi),H(Ji),xo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vo(t),null;case 13:if(H(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(K),null;case 4:return go(),null;case 10:return Ka(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var fc=!1,pc=!1,mc=typeof WeakSet==`function`?WeakSet:Set,Y=null;function hc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function gc(e,t,n){try{n()}catch(n){Z(e,t,n)}}var _c=!1;function vc(e,t){if(Si=xn,e=z(),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ci={focusedElem:e,selectionRange:n},xn=!1,Y=t;Y!==null;)if(t=Y,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:vs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Z(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return h=_c,_c=!1,h}function yc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&gc(t,n,a)}i=i.next}while(i!==r)}}function bc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Sc(e){var t=e.alternate;t!==null&&(e.alternate=null,Sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pi],delete t[Fi],delete t[Li],delete t[Ri],delete t[zi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}var Dc=null,Oc=!1;function kc(e,t,n){for(n=n.child;n!==null;)Ac(e,t,n),n=n.sibling}function Ac(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount==`function`)try{jt.onCommitFiberUnmount(At,n)}catch{}switch(n.tag){case 5:pc||hc(n,t);case 6:var r=Dc,i=Oc;Dc=null,kc(e,t,n),Dc=r,Oc=i,Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Dc.removeChild(n.stateNode));break;case 18:Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),yn(e)):Ai(Dc,n.stateNode));break;case 4:r=Dc,i=Oc,Dc=n.stateNode.containerInfo,Oc=!0,kc(e,t,n),Dc=r,Oc=i;break;case 0:case 11:case 14:case 15:if(!pc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&gc(n,t,o),i=i.next}while(i!==r)}kc(e,t,n);break;case 1:if(!pc&&(hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Z(n,t,e)}kc(e,t,n);break;case 21:kc(e,t,n);break;case 22:n.mode&1?(pc=(r=pc)||n.memoizedState!==null,kc(e,t,n),pc=r):kc(e,t,n);break;default:kc(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mc),t.forEach(function(t){var r=Wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Mc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Dc=c.stateNode,Oc=!1;break a;case 3:Dc=c.stateNode.containerInfo,Oc=!0;break a;case 4:Dc=c.stateNode.containerInfo,Oc=!0;break a}c=c.return}if(Dc===null)throw Error(r(160));Ac(o,s,a),Dc=null,Oc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Z(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mc(t,e),Pc(e),i&4){try{yc(3,e,e.return),bc(3,e)}catch(t){Z(e,e.return,t)}try{yc(5,e,e.return)}catch(t){Z(e,e.return,t)}}break;case 1:Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return);break;case 5:if(Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return),e.flags&32){var a=e.stateNode;try{Le(a,``)}catch(t){Z(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Te(a,o),We(c,s);var u=We(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ve(a,f):d===`dangerouslySetInnerHTML`?j(a,f):d===`children`?Le(a,f):b(a,d,f,u)}switch(c){case`input`:Ee(a,o);break;case`textarea`:Me(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ae(a,!!o.multiple,o.multiple?[]:``,!1):Ae(a,!!o.multiple,o.defaultValue,!0)):Ae(a,!!o.multiple,m,!1)}a[Fi]=o}catch(t){Z(e,e.return,t)}}break;case 6:if(Mc(t,e),Pc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Z(e,e.return,t)}}break;case 3:if(Mc(t,e),Pc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(t){Z(e,e.return,t)}break;case 4:Mc(t,e),Pc(e);break;case 13:Mc(t,e),Pc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(nl=M())),i&4&&jc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pc=(u=pc)||d,Mc(t,e),pc=u):Mc(t,e),Pc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(p=Y,m=p.child,p.tag){case 0:case 11:case 14:case 15:yc(4,p,p.return);break;case 1:hc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Z(i,n,e)}}break;case 5:hc(p,p.return);break;case 22:if(p.memoizedState!==null){Rc(f);continue}}m===null?Rc(f):(m.return=p,Y=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Be(`display`,s))}catch(t){Z(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Z(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mc(t,e),Pc(e),i&4&&jc(e);break;case 21:break;default:Mc(t,e),Pc(e)}}function Pc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Cc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Le(a,``),i.flags&=-33),Ec(e,wc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Tc(e,wc(e),o);break;default:throw Error(r(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fc(e,t,n){Y=e,Ic(e,t,n)}function Ic(e,t,n){for(var r=!!(e.mode&1);Y!==null;){var i=Y,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||pc;s=fc;var l=pc;if(fc=o,(pc=c)&&!l)for(Y=i;Y!==null;)o=Y,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?zc(i):(c.return=o,Y=c);for(;a!==null;)Y=a,Ic(a,t,n),a=a.sibling;Y=i,fc=s,pc=l}Lc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Y=a):Lc(e,t,n)}}function Lc(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pc||bc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!pc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:vs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&co(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}co(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}pc||t.flags&512&&xc(t)}catch(e){Z(t,t.return,e)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Rc(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function zc(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bc(4,t)}catch(e){Z(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Z(t,i,e)}}var a=t.return;try{xc(t)}catch(e){Z(t,a,e)}break;case 5:var o=t.return;try{xc(t)}catch(e){Z(t,o,e)}}}catch(e){Z(t,t.return,e)}if(t===e){Y=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Y=s;break}Y=t.return}}var Bc=Math.ceil,Vc=x.ReactCurrentDispatcher,Hc=x.ReactCurrentOwner,Uc=x.ReactCurrentBatchConfig,X=0,Wc=null,Gc=null,Kc=0,qc=0,Jc=Ki(0),Yc=0,Xc=null,Zc=0,Qc=0,$c=0,el=null,tl=null,nl=0,rl=1/0,il=null,al=!1,ol=null,sl=null,cl=!1,ll=null,ul=0,dl=0,fl=null,pl=-1,ml=0;function hl(){return X&6?M():pl===-1?pl=M():pl}function gl(e){return e.mode&1?X&2&&Kc!==0?Kc&-Kc:Pa.transition===null?(e=N,e===0?(e=window.event,e=e===void 0?16:Dn(e.type),e):e):(ml===0&&(ml=Wt()),ml):1}function _l(e,t,n,i){if(50<dl)throw dl=0,fl=null,Error(r(185));Kt(e,n,i),(!(X&2)||e!==Wc)&&(e===Wc&&(!(X&2)&&(Qc|=n),Yc===4&&Cl(e,Kc)),vl(e,i),n===1&&X===0&&!(t.mode&1)&&(rl=M()+500,W&&ca()))}function vl(e,t){var n=e.callbackNode;Ht(e,t);var r=Bt(e,e===Wc?Kc:0);if(r===0)n!==null&&xt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xt(n),t===1)e.tag===0?sa(wl.bind(null,e)):oa(wl.bind(null,e)),Oi(function(){!(X&6)&&ca()}),n=null;else{switch(Yt(r)){case 1:n=Tt;break;case 4:n=Et;break;case 16:n=Dt;break;case 536870912:n=kt;break;default:n=Dt}n=Kl(n,yl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yl(e,t){if(pl=-1,ml=0,X&6)throw Error(r(327));var n=e.callbackNode;if(zl()&&e.callbackNode!==n)return null;var i=Bt(e,e===Wc?Kc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Ml(e,i);else{t=i;var a=X;X|=2;var o=Al();(Wc!==e||Kc!==t)&&(il=null,rl=M()+500,Ol(e,t));do try{Pl();break}catch(t){kl(e,t)}while(1);Ga(),Vc.current=o,X=a,Gc===null?(Wc=null,Kc=0,t=Yc):t=0}if(t!==0){if(t===2&&(a=Ut(e),a!==0&&(i=a,t=bl(e,a))),t===1)throw n=Xc,Ol(e,0),Cl(e,i),vl(e,M()),n;if(t===6)Cl(e,i);else{if(a=e.current.alternate,!(i&30)&&!Sl(a)&&(t=Ml(e,i),t===2&&(o=Ut(e),o!==0&&(i=o,t=bl(e,o))),t===1))throw n=Xc,Ol(e,0),Cl(e,i),vl(e,M()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Ll(e,tl,il);break;case 3:if(Cl(e,i),(i&130023424)===i&&(t=nl+500-M(),10<t)){if(Bt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){hl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ti(Ll.bind(null,e,tl,il),t);break}Ll(e,tl,il);break;case 4:if(Cl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Nt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=M()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bc(i/1960))-i,10<i){e.timeoutHandle=Ti(Ll.bind(null,e,tl,il),i);break}Ll(e,tl,il);break;case 5:Ll(e,tl,il);break;default:throw Error(r(329))}}}return vl(e,M()),e.callbackNode===n?yl.bind(null,e):null}function bl(e,t){var n=el;return e.current.memoizedState.isDehydrated&&(Ol(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=tl,tl=n,t!==null&&xl(t)),e}function xl(e){tl===null?tl=e:tl.push.apply(tl,e)}function Sl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t){for(t&=~$c,t&=~Qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function wl(e){if(X&6)throw Error(r(327));zl();var t=Bt(e,0);if(!(t&1))return vl(e,M()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var i=Ut(e);i!==0&&(t=i,n=bl(e,i))}if(n===1)throw n=Xc,Ol(e,0),Cl(e,t),vl(e,M()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ll(e,tl,il),vl(e,M()),null}function Tl(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(rl=M()+500,W&&ca())}}function El(e){ll!==null&&ll.tag===0&&!(X&6)&&zl();var t=X;X|=1;var n=Uc.transition,r=N;try{if(Uc.transition=null,N=1,e)return e()}finally{N=r,Uc.transition=n,X=t,!(X&6)&&ca()}}function Dl(){qc=Jc.current,H(Jc)}function Ol(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ei(n)),Gc!==null)for(n=Gc.return;n!==null;){var r=n;switch(xa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$i();break;case 3:go(),H(Yi),H(Ji),xo();break;case 5:vo(r);break;case 4:go();break;case 13:H(K);break;case 19:H(K);break;case 10:Ka(r.type._context);break;case 22:case 23:Dl()}n=n.return}if(Wc=e,Gc=e=Zl(e.current,null),Kc=qc=t,Yc=0,Xc=null,$c=Qc=Zc=0,tl=el=null,Xa!==null){for(t=0;t<Xa.length;t++)if(n=Xa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Xa=null}return e}function kl(e,t){do{var n=Gc;try{if(Ga(),So.current=ms,Eo){for(var i=q.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Eo=!1}if(wo=0,To=J=q=null,Do=!1,Oo=0,Hc.current=null,n===null||n.return===null){Yc=1,Xc=t,Gc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Kc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ms(s);if(m!==null){m.flags&=-257,Ns(m,s,c,o,t),m.mode&1&&js(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){js(o,u,t),jl();break a}l=Error(r(426))}else if(G&&c.mode&1){var _=Ms(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ns(_,s,c,o,t),Na(Ts(l,c));break a}}o=l=Ts(l,c),Yc!==4&&(Yc=2),el===null?el=[o]:el.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=ks(o,l,t);oo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(sl===null||!sl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=As(o,c,t);oo(o,x);break a}}o=o.return}while(o!==null)}Il(n)}catch(e){t=e,Gc===n&&n!==null&&(Gc=n=n.return);continue}break}while(1)}function Al(){var e=Vc.current;return Vc.current=ms,e===null?ms:e}function jl(){(Yc===0||Yc===3||Yc===2)&&(Yc=4),Wc===null||!(Zc&268435455)&&!(Qc&268435455)||Cl(Wc,Kc)}function Ml(e,t){var n=X;X|=2;var i=Al();(Wc!==e||Kc!==t)&&(il=null,Ol(e,t));do try{Nl();break}catch(t){kl(e,t)}while(1);if(Ga(),X=n,Vc.current=i,Gc!==null)throw Error(r(261));return Wc=null,Kc=0,Yc}function Nl(){for(;Gc!==null;)Fl(Gc)}function Pl(){for(;Gc!==null&&!St();)Fl(Gc)}function Fl(e){var t=Gl(e.alternate,e,qc);e.memoizedProps=e.pendingProps,t===null?Il(e):Gc=t,Hc.current=null}function Il(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dc(n,t),n!==null){n.flags&=32767,Gc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yc=6,Gc=null;return}}else if(n=uc(n,t,qc),n!==null){Gc=n;return}if(t=t.sibling,t!==null){Gc=t;return}Gc=t=e}while(t!==null);Yc===0&&(Yc=5)}function Ll(e,t,n){var r=N,i=Uc.transition;try{Uc.transition=null,N=1,Rl(e,t,n,r)}finally{Uc.transition=i,N=r}return null}function Rl(e,t,n,i){do zl();while(ll!==null);if(X&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qt(e,o),e===Wc&&(Gc=Wc=null,Kc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Kl(Dt,function(){return zl(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Uc.transition,Uc.transition=null;var s=N;N=1;var c=X;X|=4,Hc.current=null,vc(e,n),Nc(n,e),Rr(Ci),xn=!!Si,Ci=Si=null,e.current=n,Fc(n,e,a),Ct(),X=c,N=s,Uc.transition=o}else e.current=n;if(cl&&(cl=!1,ll=e,ul=a),o=e.pendingLanes,o===0&&(sl=null),Mt(n.stateNode,i),vl(e,M()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(al)throw al=!1,e=ol,ol=null,e;return ul&1&&e.tag!==0&&zl(),o=e.pendingLanes,o&1?e===fl?dl++:(dl=0,fl=e):dl=0,ca(),null}function zl(){if(ll!==null){var e=Yt(ul),t=Uc.transition,n=N;try{if(Uc.transition=null,N=16>e?16:e,ll===null)var i=!1;else{if(e=ll,ll=null,ul=0,X&6)throw Error(r(331));var a=X;for(X|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:yc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var p=d.sibling,m=d.return;if(Sc(d),d===u){Y=null;break}if(p!==null){p.return=m,Y=p;break}Y=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else b:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Y=v;break b}Y=o.return}}var y=e.current;for(Y=y;Y!==null;){s=Y;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Y=b;else b:for(s=y;Y!==null;){if(c=Y,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:bc(9,c)}}catch(e){Z(c,c.return,e)}if(c===s){Y=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Y=x;break b}Y=c.return}}if(X=a,ca(),jt&&typeof jt.onPostCommitFiberRoot==`function`)try{jt.onPostCommitFiberRoot(At,e)}catch{}i=!0}return i}finally{N=n,Uc.transition=t}}return!1}function Bl(e,t,n){t=Ts(n,t),t=ks(e,t,1),e=io(e,t,1),t=hl(),e!==null&&(Kt(e,1,t),vl(e,t))}function Z(e,t,n){if(e.tag===3)Bl(e,e,n);else for(;t!==null;){if(t.tag===3){Bl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(sl===null||!sl.has(r))){e=Ts(n,e),e=As(t,e,1),t=io(t,e,1),e=hl(),t!==null&&(Kt(t,1,e),vl(t,e));break}}t=t.return}}function Vl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=hl(),e.pingedLanes|=e.suspendedLanes&n,Wc===e&&(Kc&n)===n&&(Yc===4||Yc===3&&(Kc&130023424)===Kc&&500>M()-nl?Ol(e,0):$c|=n),vl(e,t)}function Hl(e,t){t===0&&(e.mode&1?(t=Rt,Rt<<=1,!(Rt&130023424)&&(Rt=4194304)):t=1);var n=hl();e=$a(e,t),e!==null&&(Kt(e,t,n),vl(e,n))}function Ul(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hl(e,n)}function Wl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Hl(e,n)}var Gl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Yi.current)Fs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Fs=!1,ic(e,t,n);Fs=!!(e.flags&131072)}}else Fs=!1,G&&t.flags&1048576&&ya(t,fa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;nc(e,t),e=t.pendingProps;var a=Zi(t,Ji.current);Ja(t,n),a=Mo(null,t,i,e,a,n);var o=No();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qi(i)?(o=!0,na(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,to(t),a.updater=bs,t.stateNode=a,a._reactInternals=t,ws(t,i,e,n),t=Ws(null,t,i,!0,o,n)):(t.tag=0,G&&o&&ba(t),Is(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(nc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Xl(i),e=vs(i,e),a){case 0:t=Hs(null,t,i,e,n);break a;case 1:t=Us(null,t,i,e,n);break a;case 11:t=Ls(null,t,i,e,n);break a;case 14:t=Rs(null,t,i,vs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Hs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Us(e,t,i,a,n);case 3:a:{if(Gs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,no(e,t),so(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ts(Error(r(423)),t),t=Ks(e,t,i,n,a);break a}if(i!==a){a=Ts(Error(r(424)),t),t=Ks(e,t,i,n,a);break a}for(Ca=ji(t.stateNode.containerInfo.firstChild),Sa=t,G=!0,wa=null,n=Ba(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ma(),i===a){t=rc(e,t,n);break a}Is(e,t,i,n)}t=t.child}return t;case 5:return _o(t),e===null&&Oa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,wi(i,a)?s=null:o!==null&&wi(i,o)&&(t.flags|=32),Vs(e,t),Is(e,t,s,n),t.child;case 6:return e===null&&Oa(t),null;case 13:return Ys(e,t,n);case 4:return ho(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=za(t,null,i,n):Is(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Ls(e,t,i,a,n);case 7:return Is(e,t,t.pendingProps,n),t.child;case 8:return Is(e,t,t.pendingProps.children,n),t.child;case 12:return Is(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,U(Va,i._currentValue),i._currentValue=s,o!==null){if(Mr(o.value,s)){if(o.children===a.children&&!Yi.current){t=rc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=ro(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Is(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ja(t,n),a=Ya(a),i=i(a),t.flags|=1,Is(e,t,i,n),t.child;case 14:return i=t.type,a=vs(i,t.pendingProps),a=vs(i.type,a),Rs(e,t,i,a,n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),nc(e,t),t.tag=1,Qi(i)?(e=!0,na(t)):e=!1,Ja(t,n),Ss(t,i,a),ws(t,i,a,n),Ws(null,t,i,!0,e,n);case 19:return tc(e,t,n);case 22:return Bs(e,t,n)}throw Error(r(156,t.tag))};function Kl(e,t){return bt(e,t)}function ql(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jl(e,t,n,r){return new ql(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xl(e){if(typeof e==`function`)return+!!Yl(e);if(e!=null){if(e=e.$$typeof,e===E)return 11;if(e===D)return 14}return 2}function Zl(e,t){var n=e.alternate;return n===null?(n=Jl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Yl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case w:return $l(n.children,a,o,t);case T:s=8,a|=8;break;case ee:return e=Jl(12,n,t,a|2),e.elementType=ee,e.lanes=o,e;case re:return e=Jl(13,n,t,a),e.elementType=re,e.lanes=o,e;case ie:return e=Jl(19,n,t,a),e.elementType=ie,e.lanes=o,e;case oe:return eu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ne:s=9;break a;case E:s=11;break a;case D:s=14;break a;case ae:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Jl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function $l(e,t,n,r){return e=Jl(7,e,r,t),e.lanes=n,e}function eu(e,t,n,r){return e=Jl(22,e,r,t),e.elementType=oe,e.lanes=n,e.stateNode={isHidden:!1},e}function tu(e,t,n){return e=Jl(6,e,null,t),e.lanes=n,e}function nu(e,t,n){return t=Jl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ru(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iu(e,t,n,r,i,a,o,s,c){return e=new ru(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Jl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(a),e}function au(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return qi;e=e._reactInternals;a:{if(mt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Qi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Qi(n))return ta(e,n,t)}return t}function su(e,t,n,r,i,a,o,s,c){return e=iu(n,r,!0,e,i,a,o,s,c),e.context=ou(null),n=e.current,r=hl(),i=gl(n),a=ro(r,i),a.callback=t??null,io(n,a,i),e.current.lanes=i,Kt(e,i,r),vl(e,r),e}function cu(e,t,n,r){var i=t.current,a=hl(),o=gl(i);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=ro(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=io(i,t,o),e!==null&&(_l(e,i,o,a),ao(e,i,o)),o}function lu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function fu(){return null}var pu=typeof reportError==`function`?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}hu.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));cu(e,t,null,null)},hu.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;El(function(){cu(null,e,null,null)}),t[Ii]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&mn(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function vu(){}function yu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=lu(o);a.call(e)}}var o=su(t,r,e,0,null,!1,!1,``,vu);return e._reactRootContainer=o,e[Ii]=o.current,ui(e.nodeType===8?e.parentNode:e),El(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=lu(c);s.call(e)}}var c=iu(e,0,!1,null,null,!1,!1,``,vu);return e._reactRootContainer=c,e[Ii]=c.current,ui(e.nodeType===8?e.parentNode:e),El(function(){cu(t,c,n,r)}),c}function bu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=lu(o);s.call(e)}}cu(t,o,e,i)}else o=yu(n,t,e,i,r);return lu(o)}Xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zt(t.pendingLanes);n!==0&&(Jt(t,n|1),vl(t,M()),!(X&6)&&(rl=M()+500,ca()))}break;case 13:El(function(){var t=$a(e,1);t!==null&&_l(t,e,1,hl())}),du(e,1)}},Zt=function(e){if(e.tag===13){var t=$a(e,134217728);t!==null&&_l(t,e,134217728,hl()),du(e,134217728)}},Qt=function(e){if(e.tag===13){var t=gl(e),n=$a(e,t);n!==null&&_l(n,e,t,hl()),du(e,t)}},$t=function(){return N},en=function(e,t){var n=N;try{return N=e,t()}finally{N=n}},qe=function(e,t,n){switch(t){case`input`:if(Ee(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ui(i);if(!a)throw Error(r(90));be(i),Ee(i,a)}}}break;case`textarea`:Me(e,n);break;case`select`:t=n.value,t!=null&&Ae(e,!!n.multiple,t,!1)}},$e=Tl,et=El;var xu={usingClientEntryPoint:!1,Events:[Vi,Hi,Ui,Ze,Qe,Tl]},Su={findFiberByHostInstance:Bi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Cu={bundleType:Su.bundleType,version:Su.version,rendererPackageName:Su.rendererPackageName,rendererConfig:Su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vt(e),e===null?null:e.stateNode},findFiberByHostInstance:Su.findFiberByHostInstance||fu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{At=wu.inject(Cu),jt=wu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(r(200));return au(e,t,null,n)},e.createRoot=function(e,t){if(!gu(e))throw Error(r(299));var n=!1,i=``,a=pu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=iu(e,1,!1,null,null,n,!1,i,a),e[Ii]=t.current,ui(e.nodeType===8?e.parentNode:e),new mu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=vt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return El(e)},e.hydrate=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=pu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=su(t,null,e,1,n??null,a,!1,o,s),e[Ii]=t.current,ui(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new hu(t)},e.render=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!_u(e))throw Error(r(40));return e._reactRootContainer?(El(function(){bu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ii]=null})}),!0):!1},e.unstable_batchedUpdates=Tl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!_u(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return bu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),Ee=t(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Te()})),De=t((e=>{var t=Ee();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),Oe=class extends O{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){let r=new ne({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=ke(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=ke(e);if(typeof t==`string`){let n=this.#t.get(t);if(n){if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=ke(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}return!0}runNext(e){let t=ke(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){E.batch(()=>{this.#e.forEach(e=>{this.notify({type:`removed`,mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>ye(t,e))}findAll(e={}){return this.getAll().filter(t=>ye(e,t))}notify(e){E.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return E.batch(()=>Promise.all(e.map(e=>e.continue().catch(s))))}};function ke(e){return e.options.scope?.id}var Ae=class extends O{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,i=t.queryHash??a(r,t),o=this.get(i);return o||(o=new ve({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){E.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>x(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>x(e,t)):t}notify(e){E.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){E.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){E.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},je=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new Ae,this.#t=e.mutationCache||new Oe,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=r.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=xe.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(g(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=be(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return E.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;E.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return E.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=E.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(s).catch(s)}invalidateQueries(e,t={}){return E.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=E.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(s)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(s)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(g(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(s).catch(s)}fetchInfiniteQuery(e){return e._type=`infinite`,this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(s).catch(s)}ensureInfiniteQueryData(e){return e._type=`infinite`,this.ensureQueryData(e)}resumePausedMutations(){return xe.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(b(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{o(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(b(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{o(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=a(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===k&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},A=e(ce());Ee();var Me=e(De());function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne.apply(null,arguments)}var Pe;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(Pe||={});var Fe=`popstate`;function Ie(e){e===void 0&&(e={});function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return Be(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:Ve(t)}return Ue(t,n,null,e)}function j(e,t){if(e===!1||e==null)throw Error(t)}function Le(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function Re(){return Math.random().toString(36).substr(2,8)}function ze(e,t){return{usr:e.state,key:e.key,idx:t}}function Be(e,t,n,r){return n===void 0&&(n=null),Ne({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?He(t):t,{state:n,key:t&&t.key||r||Re()})}function Ve(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function He(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ue(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Pe.Pop,c=null,l=u();l??(l=0,o.replaceState(Ne({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=Pe.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=Pe.Push;let r=Be(h.location,e,t);n&&n(r,e),l=u()+1;let d=ze(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=Pe.Replace;let r=Be(h.location,e,t);n&&n(r,e),l=u();let i=ze(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:Ve(e);return n=n.replace(/ $/,`%20`),j(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(Fe,d),c=e,()=>{i.removeEventListener(Fe,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var We;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(We||={});function Ge(e,t,n){return n===void 0&&(n=`/`),Ke(e,t,n,!1)}function Ke(e,t,n,r){let i=lt((typeof t==`string`?He(t):t).pathname||`/`,n);if(i==null)return null;let a=qe(e);Ye(a);let o=null,s=ct(i);for(let e=0;o==null&&e<a.length;++e)o=at(a[e],s,r);return o}function qe(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(j(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=_t([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(j(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),qe(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:rt(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of Je(e.path))i(e,t,n)}),t}function Je(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=Je(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function Ye(e){e.sort((e,t)=>e.score===t.score?it(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Xe=/^:[\w-]+$/,Ze=3,Qe=2,$e=1,et=10,tt=-2,nt=e=>e===`*`;function rt(e,t){let n=e.split(`/`),r=n.length;return n.some(nt)&&(r+=tt),t&&(r+=Qe),n.filter(e=>!nt(e)).reduce((e,t)=>e+(Xe.test(t)?Ze:t===``?$e:et),r)}function it(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function at(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ot({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ot({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:_t([a,u.pathname]),pathnameBase:vt(_t([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=_t([a,u.pathnameBase]))}return o}function ot(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=st(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return e[r]=i&&!c?void 0:(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function st(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Le(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ct(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return Le(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function lt(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function ut(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?He(e):e,a;return n?(n=gt(n),a=n.startsWith(`/`)?dt(n.substring(1),`/`):dt(n,t)):a=t,{pathname:a,search:yt(r),hash:bt(i)}}function dt(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ft(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function pt(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function mt(e,t){let n=pt(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function ht(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=He(e):(i=Ne({},e),j(!i.pathname||!i.pathname.includes(`?`),ft(`?`,`pathname`,`search`,i)),j(!i.pathname||!i.pathname.includes(`#`),ft(`#`,`pathname`,`hash`,i)),j(!i.search||!i.search.includes(`#`),ft(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ut(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var gt=e=>e.replace(/\/\/+/g,`/`),_t=e=>gt(e.join(`/`)),vt=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),yt=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,bt=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function xt(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var St=[`post`,`put`,`patch`,`delete`];new Set(St);var Ct=[`get`,...St];new Set(Ct);function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(null,arguments)}var wt=A.createContext(null),Tt=A.createContext(null),Et=A.createContext(null),Dt=A.createContext(null),Ot=A.createContext({outlet:null,matches:[],isDataRoute:!1}),kt=A.createContext(null);function At(e,t){let{relative:n}=t===void 0?{}:t;!jt()&&j(!1);let{basename:r,navigator:i}=A.useContext(Et),{hash:a,pathname:o,search:s}=It(e,{relative:n}),c=o;return r!==`/`&&(c=o===`/`?r:_t([r,o])),i.createHref({pathname:c,search:s,hash:a})}function jt(){return A.useContext(Dt)!=null}function Mt(){return!jt()&&j(!1),A.useContext(Dt).location}function Nt(e){A.useContext(Et).static||A.useLayoutEffect(e)}function Pt(){let{isDataRoute:e}=A.useContext(Ot);return e?Xt():Ft()}function Ft(){!jt()&&j(!1);let e=A.useContext(wt),{basename:t,future:n,navigator:r}=A.useContext(Et),{matches:i}=A.useContext(Ot),{pathname:a}=Mt(),o=JSON.stringify(mt(i,n.v7_relativeSplatPath)),s=A.useRef(!1);return Nt(()=>{s.current=!0}),A.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=ht(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:_t([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function It(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=A.useContext(Et),{matches:i}=A.useContext(Ot),{pathname:a}=Mt(),o=JSON.stringify(mt(i,r.v7_relativeSplatPath));return A.useMemo(()=>ht(e,JSON.parse(o),a,n===`path`),[e,o,a,n])}function Lt(e,t){return Rt(e,t)}function Rt(e,t,n,r){!jt()&&j(!1);let{navigator:i}=A.useContext(Et),{matches:a}=A.useContext(Ot),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=Mt(),u;if(t){var d;let e=typeof t==`string`?He(t):t;!(c===`/`||(d=e.pathname)!=null&&d.startsWith(c))&&j(!1),u=e}else u=l;let f=u.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=Ge(e,{pathname:p}),h=Ut(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:_t([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:_t([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&h?A.createElement(Dt.Provider,{value:{location:M({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:Pe.Pop}},h):h}function zt(){let e=Yt(),t=xt(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return A.createElement(A.Fragment,null,A.createElement(`h2`,null,`Unexpected Application Error!`),A.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?A.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var Bt=A.createElement(zt,null),Vt=class extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:A.createElement(Ot.Provider,{value:this.props.routeContext},A.createElement(kt.Provider,{value:this.state.error,children:this.props.component}))}};function Ht(e){let{routeContext:t,match:n,children:r}=e,i=A.useContext(wt);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(Ot.Provider,{value:t},r)}function Ut(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&j(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||Bt,s&&(c<0&&i===0?(Qt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?A.createElement(r.route.Component,null):r.route.element?r.route.element:e,A.createElement(Ht,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?A.createElement(Vt,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Wt=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(Wt||{}),Gt=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(Gt||{});function Kt(e){let t=A.useContext(wt);return!t&&j(!1),t}function qt(e){let t=A.useContext(Tt);return!t&&j(!1),t}function Jt(e){let t=A.useContext(Ot);return!t&&j(!1),t}function N(e){let t=Jt(e),n=t.matches[t.matches.length-1];return!n.route.id&&j(!1),n.route.id}function Yt(){let e=A.useContext(kt),t=qt(Gt.UseRouteError),n=N(Gt.UseRouteError);return e===void 0?t.errors?.[n]:e}function Xt(){let{router:e}=Kt(Wt.UseNavigateStable),t=N(Gt.UseNavigateStable),n=A.useRef(!1);return Nt(()=>{n.current=!0}),A.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,M({fromRouteId:t},i)))},[e,t])}var Zt={};function Qt(e,t,n){!t&&!Zt[e]&&(Zt[e]=!0)}var $t=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function en(e,t){e?.v7_startTransition===void 0&&$t(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&$t(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&$t(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&$t(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&$t(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&$t(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function tn(e){let{to:t,replace:n,state:r,relative:i}=e;!jt()&&j(!1);let{future:a,static:o}=A.useContext(Et),{matches:s}=A.useContext(Ot),{pathname:c}=Mt(),l=Pt(),u=ht(t,mt(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return A.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function nn(e){j(!1)}function rn(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=Pe.Pop,navigator:a,static:o=!1,future:s}=e;jt()&&j(!1);let c=t.replace(/^\/*/,`/`),l=A.useMemo(()=>({basename:c,navigator:a,static:o,future:M({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=He(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=A.useMemo(()=>{let e=lt(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:A.createElement(Et.Provider,{value:l},A.createElement(Dt.Provider,{children:n,value:h}))}function an(e){let{children:t,location:n}=e;return Lt(sn(t),n)}var on=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(on||{});new Promise(()=>{}),A.Component;function sn(e,t){t===void 0&&(t=[]);let n=[];return A.Children.forEach(e,(e,r)=>{if(!A.isValidElement(e))return;let i=[...t,r];if(e.type===A.Fragment){n.push.apply(n,sn(e.props.children,i));return}e.type!==nn&&j(!1),!(!e.props.index||!e.props.children)&&j(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=sn(e.props.children,i)),n.push(a)}),n}function cn(){return cn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cn.apply(null,arguments)}function ln(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function un(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dn(e,t){return e.button===0&&(!t||t===`_self`)&&!un(e)}var fn=[`onClick`,`relative`,`reloadDocument`,`replace`,`state`,`target`,`to`,`preventScrollReset`,`viewTransition`],pn=[`aria-current`,`caseSensitive`,`className`,`end`,`style`,`to`,`viewTransition`,`children`],mn=`6`;try{window.__reactRouterVersion=mn}catch{}var hn=A.createContext({isTransitioning:!1}),gn=A.startTransition;function _n(e){let{basename:t,children:n,future:r,window:i}=e,a=A.useRef();a.current??=Ie({window:i,v5Compat:!0});let o=a.current,[s,c]=A.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=A.useCallback(e=>{l&&gn?gn(()=>c(e)):c(e)},[c,l]);return A.useLayoutEffect(()=>o.listen(u),[o,u]),A.useEffect(()=>en(r),[r]),A.createElement(rn,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var vn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,yn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bn=A.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u}=e,d=ln(e,fn),{basename:f}=A.useContext(Et),p,m=!1;if(typeof c==`string`&&yn.test(c)&&(p=c,vn))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=lt(t.pathname,f);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:m=!0}catch{}let h=At(c,{relative:r}),g=Tn(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function _(e){n&&n(e),e.defaultPrevented||g(e)}return A.createElement(`a`,cn({},d,{href:p||h,onClick:m||i?n:_,ref:t,target:s}))}),xn=A.forwardRef(function(e,t){let{"aria-current":n=`page`,caseSensitive:r=!1,className:i=``,end:a=!1,style:o,to:s,viewTransition:c,children:l}=e,u=ln(e,pn),d=It(s,{relative:u.relative}),f=Mt(),p=A.useContext(Tt),{navigator:m,basename:h}=A.useContext(Et),g=p!=null&&En(d)&&c===!0,_=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,v=f.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;r||(v=v.toLowerCase(),y=y?y.toLowerCase():null,_=_.toLowerCase()),y&&h&&(y=lt(y,h)||y);let b=_!==`/`&&_.endsWith(`/`)?_.length-1:_.length,x=v===_||!a&&v.startsWith(_)&&v.charAt(b)===`/`,S=y!=null&&(y===_||!a&&y.startsWith(_)&&y.charAt(_.length)===`/`),C={isActive:x,isPending:S,isTransitioning:g},w=x?n:void 0,T;T=typeof i==`function`?i(C):[i,x?`active`:null,S?`pending`:null,g?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof o==`function`?o(C):o;return A.createElement(bn,cn({},u,{"aria-current":w,className:T,ref:t,style:ee,to:s,viewTransition:c}),typeof l==`function`?l(C):l)}),Sn;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(Sn||={});var Cn;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(Cn||={});function wn(e){let t=A.useContext(wt);return!t&&j(!1),t}function Tn(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=Pt(),l=Mt(),u=It(e,{relative:o});return A.useCallback(t=>{if(dn(t,n)){t.preventDefault();let n=r===void 0?Ve(l)===Ve(u):r;c(e,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[l,c,u,r,i,n,e,a,o,s])}function En(e,t){t===void 0&&(t={});let n=A.useContext(hn);n??j(!1);let{basename:r}=wn(Sn.useViewTransitionState),i=It(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=lt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=lt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ot(i.pathname,o)!=null||ot(i.pathname,a)!=null}var Dn=S({id:50312,name:`Somnia Testnet`,nativeCurrency:{name:`STT`,symbol:`STT`,decimals:18},blockTime:100,rpcUrls:{default:{http:[`https://api.infra.testnet.somnia.network`,`https://dream-rpc.somnia.network`],webSocket:[`wss://api.infra.testnet.somnia.network/ws`,`wss://dream-rpc.somnia.network/ws`]}},blockExplorers:{default:{name:`Somnia Testnet Explorer`,url:`https://shannon-explorer.somnia.network`,apiUrl:`https://shannon-explorer.somnia.network/api`}},contracts:{multicall3:{address:`0x841b8199E6d3Db3C6f264f6C2bd8848b3cA64223`,blockCreated:71314235}},testnet:!0}),On=D([`function allowance(address owner, address spender) view returns (uint256)`,`function approve(address spender, uint256 amount) returns (bool)`]),kn=D([`function placeBinaryOrder(uint8 kind, uint256 price, uint256 quantity, uint64 expireTimestampNs, uint8 orderType, uint8 selfMatchingOption, address builder, uint96 builderFeeBpsTimes1k, uint64 userData) payable returns (bool success, uint128 id)`,`function placeBinaryOrderFor(address owner, uint8 kind, uint256 price, uint256 quantity, uint64 expireTimestampNs, uint8 orderType, uint8 selfMatchingOption, address builder, uint96 builderFeeBpsTimes1k, uint64 userData) payable returns (bool success, uint128 id)`,`function cancelOrder(uint128 orderId)`,`function reduceOrder(uint128 orderId, uint256 newQuantityRemaining)`,`function cancelExpiredOrders(uint128[] orderIds)`,`function sweepExpiredAtLevel(bool isBid, uint256 price, uint256 maxCount) returns (uint256 cleaned)`,`function approveBuilder(address builder, uint256 maxFeeBpsTimes1k)`,`function getBuilderApproval(address user, address builder) view returns (uint256)`,`function getEffectiveBuilderApproval(address user, address builder) view returns (uint256)`,`function getMaxBuilderFeeBpsTimes1k() view returns (uint256)`,`function mintSet(address yesTo, address noTo, uint256 amount)`,`function burnSet(uint256 amount)`]),An=D([`function placeOrder(bool isBid, uint64 userData, uint256 price, uint256 quantity, uint64 expireTimestampNs, uint8 orderType, uint8 selfMatchingOption, address builder, uint96 builderFeeBpsTimes1k) payable`,`function cancelOrder(uint128 orderId)`,`function amendOrder((uint128 oldOrderId, bool alwaysPlace, (bool isBid, uint64 userData, uint256 price, uint256 quantity, uint64 expireTimestampNs, uint8 orderType, uint8 selfMatchingOption, address builder, uint96 builderFeeBpsTimes1k) newOrder) request) returns (uint128 newOrderId)`]),jn=D([`function placeOrders((bool isBid, uint64 userData, uint256 price, uint256 quantity, uint64 expireTimestampNs, uint8 orderType, uint8 selfMatchingOption, address builder, uint96 builderFeeBpsTimes1k)[] requests) returns (bool[] successes, uint128[] ids)`,`function cancelOrders(uint128[] orderIds) returns (bool[] cancelled)`,`function reduceOrders((uint128 orderId, uint256 newQuantityRemaining)[] requests)`,`function amendOrders((uint128 oldOrderId, bool alwaysPlace, (bool isBid, uint64 userData, uint256 price, uint256 quantity, uint64 expireTimestampNs, uint8 orderType, uint8 selfMatchingOption, address builder, uint96 builderFeeBpsTimes1k) newOrder)[] requests) returns (uint128[] newOrderIds)`,`error EmptyBatch()`]),Mn=D([`function placeOrder(bool isBid, uint64 userData, uint256 price, uint256 quantity, uint64 expireTimestampNs, uint8 orderType, uint8 selfMatchingOption, address builder, uint96 builderFeeBpsTimes1k)`,`function cancelOrder(uint128 orderId)`,`function updateFunding()`,`function marginBank() view returns (address)`]),Nn=D([`function deposit(uint256 amount)`,`function withdraw(uint256 amount)`,`function setMaxLeverage(address perpPool, uint16 leverageX)`]),Pn=D([`function withdraw(address token, uint256 amount)`,`function deposit(address token, uint256 amount)`,`function depositNative() payable`,`function depositNativeFor(address owner) payable`]),Fn=D([`function setManualVaultMode(bool enabled)`,`function getManualVaultMode(address user) view returns (bool)`]),In=D([`function createPendingOrder(((bool isBid, address owner, uint64 userData, uint256 quantity) order, uint8 orderType, uint256 triggerPrice, uint8 triggerOperator, uint256 limitPrice, address builder, uint96 builderFeeBpsTimes1k) orderWithTrigger) payable returns (uint128)`,`function cancelPendingOrder(uint128 orderId)`,`function somiPaymentPerOrder() view returns (uint256)`]),Ln=D([`event PendingOrderCreated(uint128 indexed orderId, address indexed owner, bool isBid, uint256 quantity, uint256 triggerPrice, uint8 triggerOperator, uint8 orderType, address builder, uint96 builderFeeBpsTimes1k)`]),Rn=D([`function createPendingOrder(((bool isBid, address owner, uint64 userData, uint256 quantity) order, uint8 orderType, uint256 triggerPrice, uint8 triggerOperator, uint256 limitPrice, address builder, uint96 builderFeeBpsTimes1k) orderWithTrigger) payable returns (uint128 pendingOrderId)`,`function createTriggerOrder(((bool isBid, address owner, uint64 userData, uint256 quantity) order, uint8 orderType, uint256 triggerPrice, uint8 triggerOperator, uint256 limitPrice, address builder, uint96 builderFeeBpsTimes1k) orderWithTrigger, uint8 intent) payable returns (uint128 pendingOrderId)`,`function createLinkedPendingOrders(((bool isBid, address owner, uint64 userData, uint256 quantity) order, uint8 orderType, uint256 triggerPrice, uint8 triggerOperator, uint256 limitPrice, address builder, uint96 builderFeeBpsTimes1k) gteOrder, ((bool isBid, address owner, uint64 userData, uint256 quantity) order, uint8 orderType, uint256 triggerPrice, uint8 triggerOperator, uint256 limitPrice, address builder, uint96 builderFeeBpsTimes1k) lteOrder) payable returns (uint128 gteOrderId, uint128 lteOrderId)`,`function linkPendingOrders(uint128 orderIdA, uint128 orderIdB)`,`function cancelPendingOrder(uint128 orderId)`,`function cancelPendingOrders(uint128[] orderIds)`,`function getPendingOrder(uint128 orderId) view returns (bool live, (((bool isBid, address owner, uint64 userData, uint256 quantity) order, uint8 orderType, uint256 triggerPrice, uint8 triggerOperator, uint256 limitPrice, address builder, uint96 builderFeeBpsTimes1k) orderWithTrigger, uint128 orderId, uint256 somiPaid, uint128 siblingOrderId, uint8 intent) order)`,`function somiPaymentPerOrder() view returns (uint256)`,`function claimSomi()`,`function unclaimedSomi(address user) view returns (uint256)`]),zn=D([`event PendingOrderCreated(uint128 indexed orderId, address indexed owner, bool isBid, uint256 quantity, uint256 triggerPrice, uint8 triggerOperator, uint8 orderType, address builder, uint96 builderFeeBpsTimes1k)`,`event PendingOrdersLinked(uint128 indexed gteOrderId, uint128 indexed lteOrderId, address indexed owner)`]),Bn=D([`function isOperatorAuthorized(address owner, address operator, bytes4 selector) view returns (bool)`]),Vn=D([`function getAutoPullRequirement(address owner, bool isBid, uint256 price, uint256 quantity, uint96 builderFeeBpsTimes1k) view returns (address inputToken, uint256 requiredAmount, uint256 delta)`]),Hn=D([`function getOwnLockedBalance() view returns (uint256 lockedBase, uint256 lockedQuote)`,`function getLockedTokenBreakdown() view returns ((uint256 principalLocked, uint256 lockedSurplus, uint256 leftover) base, (uint256 principalLocked, uint256 lockedSurplus, uint256 leftover) quote)`,`function convertToQuoteAtPriceCeil(uint256 baseQuantity, uint256 priceQuote) view returns (uint256)`]),Un=D([`function setOperatorApprovalGlobal(address operator, bytes4[] selectors, bool approved)`,`function setOperatorApprovalForPool(address pool, address operator, bytes4[] selectors, bool approved)`,`function isGloballyApproved(address owner, address operator, bytes4 selector) view returns (bool)`,`function isApprovedForPool(address pool, address owner, address operator, bytes4 selector) view returns (bool)`]),Wn=D([`function payoutNumerators() view returns (uint256[])`,`function isResolved() view returns (bool)`,`function isVoided() view returns (bool)`,`function pool() view returns (address)`,`function outcomeToken() view returns (address)`,`function yesId() view returns (uint256)`,`function noId() view returns (uint256)`]),Gn=[{type:`function`,name:`mintCompleteSetNative`,stateMutability:`payable`,inputs:[{name:`operatorId`,type:`uint32`},{name:`venueId`,type:`bytes32`},{name:`marketId`,type:`bytes32`}],outputs:[]},{type:`function`,name:`mintCompleteSetPermit2`,stateMutability:`nonpayable`,inputs:[{name:`operatorId`,type:`uint32`},{name:`venueId`,type:`bytes32`},{name:`marketId`,type:`bytes32`},{name:`amount`,type:`uint256`},{name:`permit`,type:`tuple`,components:[{name:`permitted`,type:`tuple`,components:[{name:`token`,type:`address`},{name:`amount`,type:`uint256`}]},{name:`nonce`,type:`uint256`},{name:`deadline`,type:`uint256`}]},{name:`sig`,type:`bytes`}],outputs:[]},{type:`function`,name:`redeemNative`,stateMutability:`nonpayable`,inputs:[{name:`operatorId`,type:`uint32`},{name:`venueId`,type:`bytes32`},{name:`marketId`,type:`bytes32`},{name:`outcomeIdx`,type:`uint8`},{name:`amount`,type:`uint256`}],outputs:[]}],Kn=`@somnia-chain/markets-sdk: `,qn=class extends Error{constructor(e,t){super(e.startsWith(Kn)?e:Kn+e,t),this.name=`SomniaMarketsError`}},P=class extends qn{constructor(e,t){super(e,t),this.name=`InvalidInputError`}},F=class extends qn{what;constructor(e,t){super(`${t} — needs ${e}`),this.what=e,this.name=`NotConfiguredError`}},Jn=class extends qn{operation;constructor(e){super(`${e} is authenticated — construct SomniaMarkets with a privateKey / account / walletClient`),this.operation=e,this.name=`SignerRequiredError`}},Yn=class extends qn{operation;constructor(e,t,n){super(`indexer ${e} failed: ${t}`,n),this.operation=e,this.name=`IndexerError`}},Xn=class extends qn{operation;constructor(e,t,n){super(`rpc ${e} failed: ${t}`,n),this.operation=e,this.name=`RpcError`}},Zn=class extends qn{errorName;args;reason;data;address;functionName;constructor(e,t){super(Qn(e),t),this.name=`ContractRevertError`,this.errorName=e.errorName,this.args=e.args,this.reason=e.reason,this.data=e.data,this.address=e.address,this.functionName=e.functionName}};function Qn(e){let t=e.functionName?`${e.functionName} reverted`:`call reverted`;if(e.errorName!==void 0){let n=e.args?.length?`(${e.args.map($n).join(`, `)})`:`()`;return`${t}: ${e.errorName}${n}`}return e.reason===void 0?e.data!==void 0&&e.data!==`0x`?`${t} with unrecognized error data ${e.data}`:`${t} without error data`:`${t}: ${e.reason}`}function $n(e){return typeof e==`bigint`?e.toString():typeof e==`string`?e:JSON.stringify(e)??String(e)}var er={maxFeePerGas:60000000000n,maxPriorityFeePerGas:0n};function tr(e){let t=e.priceFeed;if(!t)throw new F(`config.priceFeed = { url } — the price-feed indexer's GraphQL endpoint`,`this price-feed read`);return{url:t.url,wsUrl:t.wsUrl??t.url.replace(/^https?/i,e=>e.length===5?`wss`:`ws`),quote:t.quote?t.quote.toUpperCase():void 0}}function nr(e,t,n={}){let r=e.privateKey?le(e.privateKey,n.nonceManager?{nonceManager:n.nonceManager}:{}):typeof e.account==`object`&&`signTransaction`in e.account?e.account:void 0,i=e.walletClient;if(!r&&!i)throw new Jn(t);let a=r??e.account??i?.account;if(!a)throw new Jn(t);let o=a;return{localAccount:r,walletClient:i,from:o,fromAddress:typeof o==`string`?o:o.address}}function rr(e){let t=e?.code??e?.cause?.code;if(t===-32601||t===-32602)return!0;let n=(e?.message??``).toLowerCase();return n.includes(`method not found`)||n.includes(`not supported`)||n.includes(`does not exist`)}async function ir(e,t,n){let r=e.request,i=e=>n.retryCount===void 0?r({method:e,params:[t]}):r({method:e,params:[t]},{retryCount:n.retryCount});if(n.isRealtimeSupported?.()??!0)try{let e=await i(`realtime_sendRawTransaction`);if(e==null)throw Error(`${n.label}: realtime_sendRawTransaction returned no receipt`);return c(e)}catch(e){if(!rr(e))throw n.onRejected?.(),n.decorateError?n.decorateError(e,`realtime_sendRawTransaction`):e;n.onRealtimeUnsupported?.()}try{let e=await i(`eth_sendRawTransaction`);return await n.waitReceipt(e)}catch(e){throw n.onRejected?.(),n.decorateError?n.decorateError(e,`eth_sendRawTransaction`):e}}async function ar(e,t){return await e.getTransactionReceipt({hash:t}).catch(()=>void 0)||new Promise((n,r)=>{let i=!1,a,o=e=>{i||(i=!0,a?.(),e())},s=async()=>{let r=await e.getTransactionReceipt({hash:t}).catch(()=>void 0);r&&o(()=>n(r))};a=e.watchBlockNumber({poll:!1,emitOnBegin:!1,onBlockNumber:s,onError:e=>o(()=>r(e))}),s()})}var or=class extends qn{constructor(e){super(`invariant violated: ${e}`),this.name=`InvariantError`}};function I(e=`expected a value to be present`){throw new or(e)}var sr=D([`function poke()`,`function voidExpired()`]),cr=D([`function resolve(address market, uint8 outcomeIdx)`,`function voidMarket(address market)`]),lr=D([`function faucet(uint256 amount)`]),ur=D([`function getBookLevels(bool isBid, uint64 numLevels) view returns ((uint256 price, uint256 quantity)[])`,`function getOrderBookParameters() view returns ((uint256 tickSize, uint256 minQuantity, uint256 lotSize))`,`function getMaxBuilderFeeBpsTimes1k() view returns (uint256)`,`function getBuilderApproval(address user, address builder) view returns (uint256)`,`function getEffectiveBuilderApproval(address user, address builder) view returns (uint256)`,`function marketNonce() view returns (uint64)`,`function settlement() view returns (address)`,`function finalized() view returns (bool)`,`function booksEmpty() view returns (bool)`,`function marketExpiryNs() view returns (uint64)`,`function setBacking() view returns (uint256)`,`function getBinaryPoolParams() view returns ((address collateralToken, address market, address outcomeToken, uint256 yesId, uint256 noId, uint256 oneCollateral, uint256 setBacking, address feeRecipient, uint256 makerFeeBpsTimes1k, uint256 takerFeeBpsTimes1k, uint256 maxBuilderFeeBpsTimes1k, uint256 settlementFeeBpsTimes1k, address settlement, uint64 marketNonce, bool finalized))`,`function getOrder(uint128 orderId) view returns ((uint128 orderId, bool isBid, address owner, uint64 userData, uint256 price, uint256 fullQuantity, uint256 quantityRemaining, uint64 expireTimestampNs))`,`function getOwnOpenOrders() view returns (uint128[])`,`function getAllOpenOrdersOffChain(bool isBid, uint256 maxCount, uint64 startCursor) view returns ((uint128 orderId, bool isBid, address owner, uint64 userData, uint256 price, uint256 fullQuantity, uint256 quantityRemaining, uint64 expireTimestampNs)[] orders, bool hasMoreOrders, uint64 nextCursor)`,`error IncorrectOrder()`]),dr=D([`function outcomeToken() view returns (address)`,`function collateralToken() view returns (address)`,`function marketNonce() view returns (uint64)`]),fr=D([`function redeem(uint256 outcomeId, uint256 amount, address to) returns (uint256 collateralOut)`,`function finalizeAndRedeem(address pool, uint256 outcomeId, uint256 amount, address to) returns (uint256 collateralOut)`,`function finalize(address pool) returns (uint256 marketKey)`,`function claimOwed(address token) returns (uint256 amount)`,`function getSettlement(uint256 marketKey) view returns ((address collateralToken, uint128 backing, bool finalized, bool voided, uint256 settlementFeeBpsTimes1k, address feeRecipient, address pool, uint64 nonce, uint256[] payoutNumerators))`,`function isFinalized(uint256 outcomeId) view returns (bool)`,`function owed(address user, address token) view returns (uint256)`,`function isPoolApproved(address pool) view returns (bool)`,`function poolRegistrar() view returns (address)`,`function outcomeToken() view returns (address)`]),pr=D([`function outcomeToken() view returns (address)`,`function yesId() view returns (uint256)`,`function noId() view returns (uint256)`,`function pool() view returns (address)`,`function collateral() view returns (address)`,`function status() view returns (uint8)`,`function backing() view returns (uint256)`,`function expiry() view returns (uint64)`,`function settlementWindow() view returns (uint64)`,`function payoutNumerators() view returns (uint256[])`,`function isResolved() view returns (bool)`,`function isVoided() view returns (bool)`]),mr=D([`function decimals() view returns (uint8)`,`function balanceOf(address account) view returns (uint256)`,`function symbol() view returns (string)`,`function name() view returns (string)`,`function allowance(address owner, address spender) view returns (uint256)`]),hr=D([`function balanceOf(address owner, uint256 id) view returns (uint256)`,`function allowance(address owner, address spender, uint256 id) view returns (uint256)`,`function isOperator(address owner, address spender) view returns (bool)`,`function approve(address spender, uint256 id, uint256 amount) returns (bool)`,`function setOperator(address spender, bool approved) returns (bool)`,`function transfer(address receiver, uint256 id, uint256 amount) returns (bool)`,`function transferFrom(address sender, address receiver, uint256 id, uint256 amount) returns (bool)`]),gr=D([`function somiPaymentPerOrder() view returns (uint256)`]),_r=D([`function marginBank() view returns (address)`,`function oracle() view returns (address)`,`function getMarkPrice() view returns (uint256)`,`function getIndexPrice() view returns (uint256 price, uint256 updatedAt)`,`function getCurrentFundingRate() view returns (int256)`,`function getCumulativeFundingPerUnit() view returns (int256)`,`function getProjectedCumulativeFundingPerUnit() view returns (int256)`,`function getOpenInterest() view returns (uint256 openInterest)`,`function getOneBase() view returns (uint256)`,`function getFundingParameters() view returns ((uint256 fundingCalculationWindowSec, uint256 fundingSettlementIntervalSec, int256 interestRatePerWindow, uint256 maxFundingRatePerWindow, uint256 dampener, uint256 emaSmoothingAlpha, uint256 maxOracleStalenessSec))`,`function getLastFundingUpdateTimestampNs() view returns (uint64)`,`function getEmaPremium() view returns (int256)`,`function tryGetMarkPrice() view returns (bool ok, uint256 price)`,`function getOrderBookParameters() view returns ((uint256 tickSize, uint256 minQuantity, uint256 lotSize))`,`function getPerpPoolParameters() view returns ((uint256 initialMarginBps, uint256 maintenanceMarginBps, uint256 closeOutMarginBps, uint256 maxOpenInterest, uint256 maxPositionSize, uint256 takerFeeBpsTimes1k, int256 makerFeeBpsTimes1k, uint256 insuranceFundShareBps))`,`function getEffectiveIMF() view returns (uint256)`,`function getHealthSnapshot() view returns ((uint256 oneBase, uint256 markPrice, int256 projectedCumulativeFunding, uint256 effectiveIMFBps, uint256 maintenanceMarginBps, uint256 closeOutMarginBps) snapshot)`,`function tryGetHealthSnapshot() view returns (bool ok, (uint256 oneBase, uint256 markPrice, int256 projectedCumulativeFunding, uint256 effectiveIMFBps, uint256 maintenanceMarginBps, uint256 closeOutMarginBps) snapshot)`,`function getReducingCapacity(address account) view returns ((int128 positionSize, uint256 pendingBidQuantity, uint256 pendingAskQuantity, uint256 pendingOppositeQuantity, uint256 effectiveReducingCapacity) capacity)`,`function isRestricted() view returns (bool)`]),vr=D([`function getPerpPools() view returns (address[])`,`function perpPoolCount() view returns (uint256)`,`function getBaseTokenForPool(address perpPool) view returns (address)`,`function getPoolForBaseToken(address baseToken) view returns (address)`,`function isDeployedByFactory(address perpPool) view returns (bool)`,`function supportsInterface(bytes4 interfaceId) view returns (bool)`,`function getPerpPoolStatuses() view returns ((address perpPool, address baseToken, bool restricted)[] statuses)`,`function getUnrestrictedPerpPools() view returns (address[] perpPools)`,`function getRestrictedPerpPools() view returns (address[] perpPools)`]),L=D(`function getSystemConfig() view returns ((address marginBank, address collateralToken, address perpPoolFactory, address liquidationEngine, address insuranceFund, address feeRecipient, uint16 maxLeverageLimit, bool fullyWired)).function getPosition(address account, address perpPool) view returns ((int128 size, uint128 avgEntryPrice, int256 entryFundingIndex, uint64 lastUpdatedTimestampNs)).function getAccountState(address account) view returns ((int256 unlockedCollateralBalance, uint256 lockedCollateral, address[] activePerpPools)).function getAccountEquity(address account) view returns (int256).function getWithdrawableCollateral(address account) view returns (uint256).function getActivePerpPools(address account) view returns (address[]).function getAccountHealth(address account) view returns (int256 equity, uint256 imReq, uint256 mmReq, uint256 cmReq).function getMarginStatus(address account) view returns (uint8).function tryGetAccountEquity(address account) view returns (bool ok, int256 equity).function getCollateralBasis(address account) view returns (uint256).function getInsuranceFundAddress() view returns (address).function isInsuranceFundCoverageEnabled(address perpPool) view returns (bool).function getPoolTier(address perpPool) view returns (uint256).function quoteMeetsIMForOrder(address account, address perpPool, uint256 additionalSize, uint256 orderPrice) view returns (bool).function meetsIMForFill(address account, address perpPool, uint256 additionalSize, uint256 orderPrice) view returns (bool).function quoteOrderTopUp(address account, address perpPool, uint256 lockAmount, uint256 feeHeadroom, uint256 increasingQuantity, uint256 orderPrice) view returns (uint256 topUp).function isolationAllowsMarket(address account, address market) view returns (bool).function isolated(address account) view returns (bool).function getMaxLeverage(address account, address perpPool) view returns (uint16).function getMaxLeverageLimit() view returns (uint16).function getCreditFloor(address account) view returns (uint256).function getVoucherLeverageCap() view returns (uint16).function isVoucherMarketAllowed(address perpPool) view returns (bool).function isPerpPoolRegistered(address perpPool) view returns (bool).function getSideHoldersPaginated(address pool, bool isLong, uint256 start, uint256 count) view returns (address[] holders).function getBankruptcyPrice(address account, address perpPool) view returns (uint256 price).error NoOpenPosition().error AdlZeroNotional()`.split(`.`)),yr=D([`function getMaxTiers() view returns (uint256)`,`function getTotalTierBalances() view returns (uint256)`,`function getTierBalance(uint256 tier) view returns (uint256)`,`function getPoolCountForTier(uint256 tier) view returns (uint256)`,`function getTierForPool(address pool) view returns (uint256)`]),br=D([`function isLiquidatable(address account) view returns (bool)`,`function getMarginBank() view returns (address)`,`function getBidderCount() view returns (uint256)`,`function getBidders() view returns (address[])`,`function getLiquidationPenaltyBps() view returns (uint256)`,`function getMinLiquidationSpreadBps() view returns (uint256)`,`function getMaxLiquidationSpreadBps() view returns (uint256)`,`function getMaxLiquidationVolumePerBlock() view returns (uint256)`,`function getLiquidationVolumeForBlock(uint256 blockNumber) view returns (uint256)`]),xr=D([`function getWithdrawableBalance(address owner, address token) view returns (uint256)`]),Sr=D([`function redeem(uint32 operatorId, bytes32 venueId, bytes32 marketId, uint8 outcomeIdx, uint256 amount)`,`function redeemMany(uint32 operatorId, bytes32 venueId, bytes32[] marketIds, uint8[] outcomeIdxs, uint256[] amounts)`,`function redeemFor(address owner, uint256 nonce, uint256 deadline, bytes sig, uint32 operatorId, bytes32 venueId, bytes32 marketId, uint8 outcomeIdx, uint256 amount)`,`function mintCompleteSet(uint32 operatorId, bytes32 venueId, bytes32 marketId, uint256 amount)`,`function mergeCompleteSet(uint32 operatorId, bytes32 venueId, bytes32 marketId, uint256 amount)`,`function finalizeMarket(bytes32 marketId)`,`function releasePool(bytes32 marketId)`,`function syncSettlement(bytes32 marketId)`,`function pokeOracle(uint256 oracleQuestionId)`]),Cr=D([`function settlement() view returns (address)`,`function poolCreator(address pool) view returns (address creator)`,`function getFreePools(address creator, address collateral) view returns (address[] pools)`,`function freePoolCount(address creator, address collateral) view returns (uint256 count)`,`function marketNonce(bytes32 marketId) view returns (uint64 nonce)`,`function markets(bytes32 marketId) view returns (uint256 oracleQuestionId, uint8 outcomeSlotCount, uint8 voidPolicy, address collateral, uint32 originOperatorId, bytes32 originVenueId, address oracleAdapter, address creator, address market, address pool, uint256 yesId, uint256 noId, uint64 tradingStart, uint64 expiry)`]);function wr(e){return e.match(/(?:query|mutation|subscription)\s+(\w+)/)?.[1]??`anonymous`}function Tr(e){let t=e.timeoutMs===void 0?void 0:AbortSignal.timeout(e.timeoutMs);return e.signal?t?{signal:typeof AbortSignal.any==`function`?AbortSignal.any([e.signal,t]):e.signal}:{signal:e.signal}:t?{signal:t}:{}}async function Er(e,t,n,r={}){let i=r.label??wr(t),a;try{a=await fetch(e,{method:`POST`,headers:{"content-type":`application/json`,...r.headers},body:JSON.stringify({query:t,variables:n}),cache:`no-store`,...Tr(r)})}catch(e){throw r.signal?.aborted?r.signal.reason:new Yn(i,e instanceof Error?e.message:String(e),{cause:e})}if(!a.ok)throw new Yn(i,`HTTP ${a.status}`);let o;try{o=await a.json()}catch(e){throw new Yn(i,`response was not JSON`,{cause:e})}let s=o.errors?.[0];if(s)throw new Yn(i,s.message);if(!o.data)throw new Yn(i,`empty response (no data)`);return o.data}var Dr=3e4,Or=new Map;function kr(e,t){let n=new WeakRef(t);return Or.set(e,n),()=>{Or.get(e)===n&&Or.delete(e)}}function Ar(e){let t=Or.get(e);if(!t)return;let n=t.deref();if(!n){Or.delete(e);return}return n}function jr(e,t,n){if(e===void 0){n.push(`${t}=undefined`);return}if(typeof e==`function`){n.push(`${t}=<client-boundary stub function>`);return}if(!(typeof e!=`object`||!e)){if(Array.isArray(e)){e.forEach((e,r)=>jr(e,`${t}[${r}]`,n));return}for(let[r,i]of Object.entries(e))jr(i,t?`${t}.${r}`:r,n)}}async function R(e,t,n,r){return Nr(e.toString(),t,n,r)}async function Mr(e,t,n,r){return Nr(e,t,n,r)}async function Nr(e,t,n,r){let i=e.match(/query\s+(\w+)/)?.[1]??`anonymous`,a=[];for(let[e,n]of Object.entries(t))jr(n,e,a);if(a.length)throw new P(`gqlRequest(${i}): unusable variable(s): ${a.join(`, `)}`);return Er(n,e,t,{headers:r,timeoutMs:Dr,signal:Ar(n)})}var Pr=1e4;async function Fr(e,t,n,r,i){try{let a=(await Mr(`query Count($where: ${t}!) { ${e}_aggregate(where: $where) { aggregate { count } } }`,{where:n},r,i))[`${e}_aggregate`];if(!a)throw new Yn(`aggregateCount`,`${e}_aggregate not found in response`);return a.aggregate.count}catch(a){let o=a instanceof Error?a.message:String(a);if(!(/aggregate/i.test(o)&&/not found/i.test(o)))throw a;return((await Mr(`query CountFallback($where: ${t}!) { ${e}(where: $where, limit: ${Pr}) { id } }`,{where:n},r,i))[e]??[]).length}}function Ir(e){return e}var z=class extends String{__apiType;value;__meta__;constructor(e,t){super(e),this.value=e,this.__meta__=t}toString(){return this.value}},Lr=new z(`
    fragment PortfolioMarketFields on Market {
  id
  marketAddress
  poolAddress
  asset
  question
  status: clobStatus
  lastPrice
  strike
  expiry
  winningOutcome
  voided
  quoteDecimals
  intervalSec
}
    `,{fragmentName:`PortfolioMarketFields`}),Rr=new z(`
    fragment ProtocolFeeFields on ProtocolFeeRecord {
  id
  orderId
  recipient
  payer
  token
  amount
  isTakerSide
  market: market_id
  pool
  timestamp
  txHash
}
    `,{fragmentName:`ProtocolFeeFields`}),zr=new z(`
    fragment BuilderFeeFields on BuilderFeeRecord {
  id
  orderId
  builder
  payer
  token
  amount
  market: market_id
  pool
  timestamp
  txHash
}
    `,{fragmentName:`BuilderFeeFields`}),Br=new z(`
    fragment SettlementFeeFields on SettlementFeeRecord {
  id
  recipient: feeRecipient
  amount: fee
  winningBacking
  market: market_id
  timestamp
  txHash
}
    `,{fragmentName:`SettlementFeeFields`}),Vr=new z(`
    fragment FillQueryFields on Fill {
  id
  market: market_id
  pool
  fillPrice
  quantity
  quoteQuantity
  maker
  makerSide
  taker
  takerSide
  kind
  takerIsBid
  timestamp
  txHash
  takerOrder {
    owner
    side
  }
}
    `,{fragmentName:`FillQueryFields`}),Hr=new z(`
    fragment SeriesFields on Series {
  id
  creatorAddress
  seriesId
  collateral
  asset
  intervalSec
  createdAtTimestamp
  updatedAtTimestamp
}
    `,{fragmentName:`SeriesFields`}),Ur=new z(`
    fragment MarketCreatorFields on MarketCreator {
  id
  owner
  policy
  core
  adapter
  operatorId
  venueId
  factory
  createdAtBlock
  createdAtTimestamp
}
    `,{fragmentName:`MarketCreatorFields`}),Wr=new z(`
    fragment OracleAdapterFields on OracleAdapter {
  id
  owner
  factory
  approved
  approvedAtTimestamp
  createdAtTimestamp
}
    `,{fragmentName:`OracleAdapterFields`}),Gr=new z(`
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}
    `,{fragmentName:`MarketFields`}),Kr=new z(`
    fragment OperatorFields on Operator {
  operatorId
  owner
  feeRecipient
  enabled
  policy
  context
  pendingOwner
  venueCount
  createdAtTimestamp
  updatedAtTimestamp
  marketCount
  cumulativeQuoteVolume
  protocolFeesCollected
  settlementFeesCollected
  builderFeesCollected
}
    `,{fragmentName:`OperatorFields`}),qr=new z(`
    fragment VenueFields on Venue {
  venueId
  operatorId
  marketType
  feeParams
  feeRecipientOverride
  policy
  signer
  creationEnabled
  context
  createdAtTimestamp
  updatedAtTimestamp
  marketCount
  cumulativeQuoteVolume
  protocolFeesCollected
  settlementFeesCollected
  builderFeesCollected
}
    `,{fragmentName:`VenueFields`}),Jr=new z(`
    fragment OracleQuestionFields on OracleQuestion {
  id
  questionKey
  scheduler
  oracleCost
  bindCount
  reuseCount
  createdAtBlock
  createdAtTimestamp
}
    `,{fragmentName:`OracleQuestionFields`}),Yr=new z(`
    fragment OperatorHubAccountFields on OperatorHubAccount {
  id
  operatorId
  earmarked
  credit
  outstanding
  createdAtBlock
  createdAtTimestamp
  updatedAtBlock
  updatedAtTimestamp
}
    `,{fragmentName:`OperatorHubAccountFields`}),Xr=new z(`
    fragment OracleBindFields on OracleBind {
  id
  oracleQuestionId
  bindIndex
  operatorId
  measuredGas
  overheadShare
  cost
  charged
  subsidy
  resolvedAt
  boundAtBlock
  boundAtTimestamp
  txHash
}
    `,{fragmentName:`OracleBindFields`}),Zr=new z(`
    fragment OracleCallbackFields on OracleCallback {
  id
  marketsResolved
  gasPrice
  measuredGas
  overheadGasAttributed
  totalCost
  totalCharged
  subsidy
  pendingRemaining
  blockNumber
  timestamp
  txHash
}
    `,{fragmentName:`OracleCallbackFields`}),Qr=new z(`
    fragment OrderMarketFields on Market {
  marketAddress
  asset
  question
  expiry
  tradingStart
  quoteDecimals
  intervalSec
}
    `,{fragmentName:`OrderMarketFields`}),$r=new z(`
    fragment PerpPortfolioMarketFields on Market {
  poolAddress
  baseSymbol
  quoteSymbol
  baseDecimals
  quoteDecimals
  tickSize
  lotSize
  minQuantity
  lastPrice
  marginBank
  initialMarginBps
  fundingRate
  indexPrice
  stopRegistry
}
    `,{fragmentName:`PerpPortfolioMarketFields`}),ei=new z(`
    fragment RouterActionFields on RouterActionRecord {
  id
  kind
  account
  market: market_id
  amount
  payout
  routedVia
  timestamp
  txHash
}
    `,{fragmentName:`RouterActionFields`}),ti=new z(`
    fragment SpotPortfolioMarketFields on Market {
  poolAddress
  baseSymbol
  quoteSymbol
  baseToken
  quoteToken
  baseDecimals
  quoteDecimals
  baseIsNative
  tickSize
  lotSize
  minQuantity
  lastPrice
  markPrice
  stopRegistry
}
    `,{fragmentName:`SpotPortfolioMarketFields`}),ni=new z(`
    fragment SpotStopOrderFields on StopOrder {
  id
  registry
  orderId: orderIdRaw
  isBid
  quantity
  triggerPrice
  triggerOperator
  orderType
  status
  placedOrderId
  createdAt
}
    `,{fragmentName:`SpotStopOrderFields`}),ri={"\n  fragment PortfolioMarketFields on Market {\n    id\n    marketAddress\n    poolAddress\n    asset\n    question\n    status: clobStatus\n    lastPrice\n    strike\n    expiry\n    winningOutcome\n    voided\n    quoteDecimals\n    intervalSec\n  }\n":Lr,'\n  query Portfolio($acct: String!, $fillWhere: Fill_bool_exp!, $ordersLimit: Int, $tradesLimit: Int) {\n    OutcomeBalance(\n      where: { account: { _eq: $acct }, balance: { _gt: "0" } }\n      order_by: { balance: desc }\n      limit: 200\n    ) {\n      outcomeIndex\n      tokenId\n      balance\n      market {\n        ...PortfolioMarketFields\n      }\n    }\n    ClobOrder: Order(\n      where: {\n        owner: { _eq: $acct }\n        status: { _eq: "Open" }\n        market: { marketType: { _eq: "BINARY" } }\n      }\n      order_by: { placedAtTimestamp: desc }\n      limit: $ordersLimit\n    ) {\n      id\n      orderId\n      side\n      price\n      quantityRemaining\n      filledQuantity\n      fullQuantity\n      placedAtTimestamp\n      placedTxHash\n      market {\n        ...PortfolioMarketFields\n      }\n    }\n    ClobFill: Fill(where: $fillWhere, order_by: { timestamp: desc }, limit: $tradesLimit) {\n      id\n      fillPrice\n      quantity\n      timestamp\n      txHash\n      maker\n      makerSide\n      takerOrder {\n        owner\n        side\n      }\n      market {\n        marketAddress\n        asset\n        quoteDecimals\n      }\n    }\n  }\n':new z(`
    query Portfolio($acct: String!, $fillWhere: Fill_bool_exp!, $ordersLimit: Int, $tradesLimit: Int) {
  OutcomeBalance(
    where: {account: {_eq: $acct}, balance: {_gt: "0"}}
    order_by: {balance: desc}
    limit: 200
  ) {
    outcomeIndex
    tokenId
    balance
    market {
      ...PortfolioMarketFields
    }
  }
  ClobOrder: Order(
    where: {owner: {_eq: $acct}, status: {_eq: "Open"}, market: {marketType: {_eq: "BINARY"}}}
    order_by: {placedAtTimestamp: desc}
    limit: $ordersLimit
  ) {
    id
    orderId
    side
    price
    quantityRemaining
    filledQuantity
    fullQuantity
    placedAtTimestamp
    placedTxHash
    market {
      ...PortfolioMarketFields
    }
  }
  ClobFill: Fill(
    where: $fillWhere
    order_by: {timestamp: desc}
    limit: $tradesLimit
  ) {
    id
    fillPrice
    quantity
    timestamp
    txHash
    maker
    makerSide
    takerOrder {
      owner
      side
    }
    market {
      marketAddress
      asset
      quoteDecimals
    }
  }
}
    fragment PortfolioMarketFields on Market {
  id
  marketAddress
  poolAddress
  asset
  question
  status: clobStatus
  lastPrice
  strike
  expiry
  winningOutcome
  voided
  quoteDecimals
  intervalSec
}`),"\n  query OutcomeBalances($acct: String!, $mkt: String!) {\n        OutcomeBalance(where: {account: {_eq: $acct}, market: {marketAddress: {_eq: $mkt}}}) { outcomeIndex balance }\n      }\n":new z(`
    query OutcomeBalances($acct: String!, $mkt: String!) {
  OutcomeBalance(
    where: {account: {_eq: $acct}, market: {marketAddress: {_eq: $mkt}}}
  ) {
    outcomeIndex
    balance
  }
}
    `),"\n  query VaultPayoutFallbacks($where: VaultPayoutFallback_bool_exp!, $limit: Int, $offset: Int) {\n         VaultPayoutFallback(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {\n           id owner token amount market: market_id timestamp txHash\n         }\n       }\n":new z(`
    query VaultPayoutFallbacks($where: VaultPayoutFallback_bool_exp!, $limit: Int, $offset: Int) {
  VaultPayoutFallback(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    owner
    token
    amount
    market: market_id
    timestamp
    txHash
  }
}
    `),"\n  query MarketResolution($id: String!) {\n         MarketResolutionEvent(where: {market_id: {_eq: $id}}, order_by: {timestamp: asc}) {\n           id market: market_id kind winningOutcome: outcomeIdx payoutNumerators payoutDenominator voided blockNumber timestamp txHash\n         }\n         MarketReferenceLink(where: {market_id: {_eq: $id}}, limit: 1) {\n           id market: market_id oracleQuestionId: referenceQuestionId pending\n         }\n         Market_by_pk(id: $id) { oracleQuestionId }\n       }\n":new z(`
    query MarketResolution($id: String!) {
  MarketResolutionEvent(
    where: {market_id: {_eq: $id}}
    order_by: {timestamp: asc}
  ) {
    id
    market: market_id
    kind
    winningOutcome: outcomeIdx
    payoutNumerators
    payoutDenominator
    voided
    blockNumber
    timestamp
    txHash
  }
  MarketReferenceLink(where: {market_id: {_eq: $id}}, limit: 1) {
    id
    market: market_id
    oracleQuestionId: referenceQuestionId
    pending
  }
  Market_by_pk(id: $id) {
    oracleQuestionId
  }
}
    `),"\n  query OracleAnswers($closingQid: String!, $openingQid: String!) {\n         closing: OracleAnswer_by_pk(id: $closingQid) { oracleQuestionId numericValue outcomeLabel voidReason resolvedAt txHash }\n         opening: OracleAnswer_by_pk(id: $openingQid) { oracleQuestionId numericValue outcomeLabel voidReason resolvedAt txHash }\n       }\n":new z(`
    query OracleAnswers($closingQid: String!, $openingQid: String!) {
  closing: OracleAnswer_by_pk(id: $closingQid) {
    oracleQuestionId
    numericValue
    outcomeLabel
    voidReason
    resolvedAt
    txHash
  }
  opening: OracleAnswer_by_pk(id: $openingQid) {
    oracleQuestionId
    numericValue
    outcomeLabel
    voidReason
    resolvedAt
    txHash
  }
}
    `),"\n  query Candles($where: Candle_bool_exp!, $limit: Int) {\n        Candle(where: $where, order_by: {bucketStart: desc}, limit: $limit) {\n          bucketStart openPrice high low closePrice baseVolume quoteVolume tradeCount\n        }\n      }\n":new z(`
    query Candles($where: Candle_bool_exp!, $limit: Int) {
  Candle(where: $where, order_by: {bucketStart: desc}, limit: $limit) {
    bucketStart
    openPrice
    high
    low
    closePrice
    baseVolume
    quoteVolume
    tradeCount
  }
}
    `),"\n  fragment ProtocolFeeFields on ProtocolFeeRecord {\n    id\n    orderId\n    recipient\n    payer\n    token\n    amount\n    isTakerSide\n    market: market_id\n    pool\n    timestamp\n    txHash\n  }\n":Rr,"\n  fragment BuilderFeeFields on BuilderFeeRecord {\n    id\n    orderId\n    builder\n    payer\n    token\n    amount\n    market: market_id\n    pool\n    timestamp\n    txHash\n  }\n":zr,"\n  fragment SettlementFeeFields on SettlementFeeRecord {\n    id\n    recipient: feeRecipient\n    amount: fee\n    winningBacking\n    market: market_id\n    timestamp\n    txHash\n  }\n":Br,"\n  query BuilderApprovals($where: BuilderApproval_bool_exp!, $limit: Int, $offset: Int) {\n         BuilderApproval(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {\n           id market_id market { poolAddress } user builder maxFeeBpsTimes1k blockNumber timestamp txHash\n         }\n       }\n":new z(`
    query BuilderApprovals($where: BuilderApproval_bool_exp!, $limit: Int, $offset: Int) {
  BuilderApproval(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    market_id
    market {
      poolAddress
    }
    user
    builder
    maxFeeBpsTimes1k
    blockNumber
    timestamp
    txHash
  }
}
    `),"\n  query ProtocolFees($where: ProtocolFeeRecord_bool_exp!, $limit: Int, $offset: Int) {\n         ProtocolFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...ProtocolFeeFields }\n       }\n":new z(`
    query ProtocolFees($where: ProtocolFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
  ProtocolFeeRecord(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...ProtocolFeeFields
  }
}
    fragment ProtocolFeeFields on ProtocolFeeRecord {
  id
  orderId
  recipient
  payer
  token
  amount
  isTakerSide
  market: market_id
  pool
  timestamp
  txHash
}`),"\n  query BuilderFees($where: BuilderFeeRecord_bool_exp!, $limit: Int, $offset: Int) {\n         BuilderFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...BuilderFeeFields }\n       }\n":new z(`
    query BuilderFees($where: BuilderFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
  BuilderFeeRecord(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...BuilderFeeFields
  }
}
    fragment BuilderFeeFields on BuilderFeeRecord {
  id
  orderId
  builder
  payer
  token
  amount
  market: market_id
  pool
  timestamp
  txHash
}`),"\n  query SettlementFees($where: SettlementFeeRecord_bool_exp!, $limit: Int, $offset: Int) {\n         SettlementFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...SettlementFeeFields }\n       }\n":new z(`
    query SettlementFees($where: SettlementFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
  SettlementFeeRecord(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...SettlementFeeFields
  }
}
    fragment SettlementFeeFields on SettlementFeeRecord {
  id
  recipient: feeRecipient
  amount: fee
  winningBacking
  market: market_id
  timestamp
  txHash
}`),"\n  fragment FillQueryFields on Fill {\n    id\n    market: market_id\n    pool\n    fillPrice\n    quantity\n    quoteQuantity\n    maker\n    makerSide\n    taker\n    takerSide\n    kind\n    takerIsBid\n    timestamp\n    txHash\n    # The taker's ORDER, not just the denormalized copy on the fill. On binary\n    # the fill's takerSide is backfilled by the PendingTakerFill bridge only\n    # once BinaryOrderPlaced lands, so it can still be null on a row whose\n    # taker is already stamped. The Order carries the authoritative side from\n    # the moment it exists, which is what the portfolio reads have always used.\n    takerOrder { owner side }\n  }\n":Vr,"\n  query Fills($where: Fill_bool_exp!, $limit: Int, $offset: Int) {\n        Fill(where: $where, order_by: [{timestamp: desc}, {blockNumber: desc}], limit: $limit, offset: $offset) {\n          ...FillQueryFields\n        }\n      }\n":new z(`
    query Fills($where: Fill_bool_exp!, $limit: Int, $offset: Int) {
  Fill(
    where: $where
    order_by: [{timestamp: desc}, {blockNumber: desc}]
    limit: $limit
    offset: $offset
  ) {
    ...FillQueryFields
  }
}
    fragment FillQueryFields on Fill {
  id
  market: market_id
  pool
  fillPrice
  quantity
  quoteQuantity
  maker
  makerSide
  taker
  takerSide
  kind
  takerIsBid
  timestamp
  txHash
  takerOrder {
    owner
    side
  }
}`),"\n  query UserFills($where: Fill_bool_exp!, $limit: Int, $offset: Int) {\n        Fill(where: $where, order_by: [{timestamp: desc}, {blockNumber: desc}], limit: $limit, offset: $offset) {\n          ...FillQueryFields\n        }\n      }\n":new z(`
    query UserFills($where: Fill_bool_exp!, $limit: Int, $offset: Int) {
  Fill(
    where: $where
    order_by: [{timestamp: desc}, {blockNumber: desc}]
    limit: $limit
    offset: $offset
  ) {
    ...FillQueryFields
  }
}
    fragment FillQueryFields on Fill {
  id
  market: market_id
  pool
  fillPrice
  quantity
  quoteQuantity
  maker
  makerSide
  taker
  takerSide
  kind
  takerIsBid
  timestamp
  txHash
  takerOrder {
    owner
    side
  }
}`),"\n  fragment SeriesFields on Series {\n    id\n    creatorAddress\n    seriesId\n    collateral\n    asset\n    intervalSec\n    createdAtTimestamp\n    updatedAtTimestamp\n  }\n":Hr,"\n  fragment MarketCreatorFields on MarketCreator {\n    id\n    owner\n    policy\n    core\n    adapter\n    operatorId\n    venueId\n    factory\n    createdAtBlock\n    createdAtTimestamp\n  }\n":Ur,"\n  fragment OracleAdapterFields on OracleAdapter {\n    id\n    owner\n    factory\n    approved\n    approvedAtTimestamp\n    createdAtTimestamp\n  }\n":Wr,"\n  query MarketCreators($where: MarketCreator_bool_exp!, $limit: Int, $offset: Int) {\n         MarketCreator(where: $where, order_by: {createdAtBlock: desc}, limit: $limit, offset: $offset) {\n           ...MarketCreatorFields\n           series(order_by: {seriesId: asc}) { ...SeriesFields }\n         }\n       }\n":new z(`
    query MarketCreators($where: MarketCreator_bool_exp!, $limit: Int, $offset: Int) {
  MarketCreator(
    where: $where
    order_by: {createdAtBlock: desc}
    limit: $limit
    offset: $offset
  ) {
    ...MarketCreatorFields
    series(order_by: {seriesId: asc}) {
      ...SeriesFields
    }
  }
}
    fragment SeriesFields on Series {
  id
  creatorAddress
  seriesId
  collateral
  asset
  intervalSec
  createdAtTimestamp
  updatedAtTimestamp
}
fragment MarketCreatorFields on MarketCreator {
  id
  owner
  policy
  core
  adapter
  operatorId
  venueId
  factory
  createdAtBlock
  createdAtTimestamp
}`),"\n  query MarketCreatorByPk($id: String!) {\n         MarketCreator_by_pk(id: $id) {\n           ...MarketCreatorFields\n           series(order_by: {seriesId: asc}) { ...SeriesFields }\n         }\n       }\n":new z(`
    query MarketCreatorByPk($id: String!) {
  MarketCreator_by_pk(id: $id) {
    ...MarketCreatorFields
    series(order_by: {seriesId: asc}) {
      ...SeriesFields
    }
  }
}
    fragment SeriesFields on Series {
  id
  creatorAddress
  seriesId
  collateral
  asset
  intervalSec
  createdAtTimestamp
  updatedAtTimestamp
}
fragment MarketCreatorFields on MarketCreator {
  id
  owner
  policy
  core
  adapter
  operatorId
  venueId
  factory
  createdAtBlock
  createdAtTimestamp
}`),"\n  query OracleAdapters($where: OracleAdapter_bool_exp!, $limit: Int, $offset: Int) {\n         OracleAdapter(where: $where, order_by: {createdAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OracleAdapterFields }\n       }\n":new z(`
    query OracleAdapters($where: OracleAdapter_bool_exp!, $limit: Int, $offset: Int) {
  OracleAdapter(
    where: $where
    order_by: {createdAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...OracleAdapterFields
  }
}
    fragment OracleAdapterFields on OracleAdapter {
  id
  owner
  factory
  approved
  approvedAtTimestamp
  createdAtTimestamp
}`),"\n  query OracleAdapterByPk($id: String!) { OracleAdapter_by_pk(id: $id) { ...OracleAdapterFields } }\n":new z(`
    query OracleAdapterByPk($id: String!) {
  OracleAdapter_by_pk(id: $id) {
    ...OracleAdapterFields
  }
}
    fragment OracleAdapterFields on OracleAdapter {
  id
  owner
  factory
  approved
  approvedAtTimestamp
  createdAtTimestamp
}`),"\n  query SeriesList($where: Series_bool_exp!, $limit: Int, $offset: Int) {\n         Series(where: $where, order_by: {createdAtTimestamp: asc}, limit: $limit, offset: $offset) { ...SeriesFields }\n       }\n":new z(`
    query SeriesList($where: Series_bool_exp!, $limit: Int, $offset: Int) {
  Series(
    where: $where
    order_by: {createdAtTimestamp: asc}
    limit: $limit
    offset: $offset
  ) {
    ...SeriesFields
  }
}
    fragment SeriesFields on Series {
  id
  creatorAddress
  seriesId
  collateral
  asset
  intervalSec
  createdAtTimestamp
  updatedAtTimestamp
}`),"\n  fragment MarketFields on Market {\n    id\n    marketType\n    poolAddress\n    lastPrice\n    lastTradeAt\n    cumulativeBaseVolume\n    cumulativeQuoteVolume\n    tradeCount\n    baseDecimals\n    quoteDecimals\n    createdAtTimestamp\n    baseToken\n    quoteToken\n    baseSymbol\n    quoteSymbol\n    baseIsNative\n    tickSize\n    lotSize\n    minQuantity\n    markPrice\n    rawMidpoint\n    markPriceUpdatedAt\n    stopRegistry\n    marginBank\n    initialMarginBps\n    fundingRate\n    cumulativeFundingPerUnit\n    indexPrice\n    fundingUpdatedAt\n    fundingWindowSec\n    fundingIntervalSec\n    openInterest\n    openInterestUpdatedAt\n    marketId\n    marketAddress\n    yesTokenId\n    noTokenId\n    collateral\n    asset\n    question\n    oracleQuestion\n    oracleQuestionId\n    status: clobStatus\n    strike\n    tradingStart\n    expiry\n    winningOutcome\n    payoutNumerators\n    payoutDenominator\n    resolvedAtBlock\n    resolvedAtTimestamp\n    createdByTx\n    creator\n    voided\n    backing\n    nonce\n    finalized\n    netBacking\n    context\n    intervalSec\n    operatorId\n    venueId\n  }\n":Gr,"\n  query RegistryMarkets($where: Market_bool_exp!, $limit: Int, $offset: Int) {\n    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit, offset: $offset) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query RegistryMarkets($where: Market_bool_exp!, $limit: Int, $offset: Int) {
  Market(
    where: $where
    order_by: {createdAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query Markets($where: Market_bool_exp!, $limit: Int, $offset: Int) {\n    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit, offset: $offset) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query Markets($where: Market_bool_exp!, $limit: Int, $offset: Int) {
  Market(
    where: $where
    order_by: {createdAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query MarketByPk($id: String!) {\n    Market_by_pk(id: $id) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query MarketByPk($id: String!) {
  Market_by_pk(id: $id) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query MarketByAddress($a: String!) {\n    Market(\n      where: { marketAddress: { _eq: $a } }\n      order_by: { createdAtTimestamp: desc }\n      limit: 1\n    ) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query MarketByAddress($a: String!) {
  Market(
    where: {marketAddress: {_eq: $a}}
    order_by: {createdAtTimestamp: desc}
    limit: 1
  ) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query BinaryMarkets($where: Market_bool_exp!, $orderBy: [Market_order_by!], $limit: Int) {\n    Market(where: $where, order_by: $orderBy, limit: $limit) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query BinaryMarkets($where: Market_bool_exp!, $orderBy: [Market_order_by!], $limit: Int) {
  Market(where: $where, order_by: $orderBy, limit: $limit) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query SpotMarkets($where: Market_bool_exp!, $limit: Int) {\n    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query SpotMarkets($where: Market_bool_exp!, $limit: Int) {
  Market(where: $where, order_by: {createdAtTimestamp: desc}, limit: $limit) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query PerpMarkets($where: Market_bool_exp!, $limit: Int) {\n    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query PerpMarkets($where: Market_bool_exp!, $limit: Int) {
  Market(where: $where, order_by: {createdAtTimestamp: desc}, limit: $limit) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query LiveBinaryMarkets(\n    $where: Market_bool_exp!\n    $orderBy: [Market_order_by!]\n    $limit: Int!\n    $offset: Int!\n  ) {\n    Market(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query LiveBinaryMarkets($where: Market_bool_exp!, $orderBy: [Market_order_by!], $limit: Int!, $offset: Int!) {
  Market(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query PastBinaryMarkets($where: Market_bool_exp!, $limit: Int!, $offset: Int!) {\n    Market(where: $where, order_by: { expiry: desc }, limit: $limit, offset: $offset) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query PastBinaryMarkets($where: Market_bool_exp!, $limit: Int!, $offset: Int!) {
  Market(where: $where, order_by: {expiry: desc}, limit: $limit, offset: $offset) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),'\n  query BinaryOriginPairs {\n         Market(\n           distinct_on: [operatorId, venueId],\n           where: {marketType: {_eq: "BINARY"}, operatorId: {_is_null: false}, venueId: {_is_null: false}},\n           order_by: [{operatorId: asc}, {venueId: asc}]\n         ) {\n           operatorId\n           venueId\n         }\n       }\n':new z(`
    query BinaryOriginPairs {
  Market(
    distinct_on: [operatorId, venueId]
    where: {marketType: {_eq: "BINARY"}, operatorId: {_is_null: false}, venueId: {_is_null: false}}
    order_by: [{operatorId: asc}, {venueId: asc}]
  ) {
    operatorId
    venueId
  }
}
    `),'\n  query BinaryAssets {\n         Market(distinct_on: asset, where: {marketType: {_eq: "BINARY"}, asset: {_is_null: false}}, order_by: {asset: asc}) {\n           asset\n         }\n       }\n':new z(`
    query BinaryAssets {
  Market(
    distinct_on: asset
    where: {marketType: {_eq: "BINARY"}, asset: {_is_null: false}}
    order_by: {asset: asc}
  ) {
    asset
  }
}
    `),"\n  query MarketFees($id: String!) {\n         MarketVenue_by_pk(id: $id) {\n           operatorId venueId feeRecipient\n           makerFeeBps takerFeeBps maxBuilderFeeBps routingFeeBps settlementFeeBps settlementFeesCollected\n         }\n       }\n":new z(`
    query MarketFees($id: String!) {
  MarketVenue_by_pk(id: $id) {
    operatorId
    venueId
    feeRecipient
    makerFeeBps
    takerFeeBps
    maxBuilderFeeBps
    routingFeeBps
    settlementFeeBps
    settlementFeesCollected
  }
}
    `),"\n  query MarketStatusHistory($id: String!) {\n         MarketStatusUpdate(where: {market_id: {_eq: $id}}, order_by: {timestamp: asc}) {\n           oldStatus newStatus blockNumber timestamp txHash\n         }\n       }\n":new z(`
    query MarketStatusHistory($id: String!) {
  MarketStatusUpdate(where: {market_id: {_eq: $id}}, order_by: {timestamp: asc}) {
    oldStatus
    newStatus
    blockNumber
    timestamp
    txHash
  }
}
    `),"\n  query OpeningAnswers($qids: [String!]) {\n         OracleAnswer(where: {id: {_in: $qids}}) { id numericValue }\n       }\n":new z(`
    query OpeningAnswers($qids: [String!]) {
  OracleAnswer(where: {id: {_in: $qids}}) {
    id
    numericValue
  }
}
    `),"\n  query OpeningRefs($ids: [String!]) {\n         MarketReferenceLink(where: {market_id: {_in: $ids}}) { market: market_id referenceQuestionId }\n       }\n":new z(`
    query OpeningRefs($ids: [String!]) {
  MarketReferenceLink(where: {market_id: {_in: $ids}}) {
    market: market_id
    referenceQuestionId
  }
}
    `),"\n  fragment OperatorFields on Operator {\n    operatorId\n    owner\n    feeRecipient\n    enabled\n    policy\n    context\n    pendingOwner\n    venueCount\n    createdAtTimestamp\n    updatedAtTimestamp\n    marketCount\n    cumulativeQuoteVolume\n    protocolFeesCollected\n    settlementFeesCollected\n    builderFeesCollected\n  }\n":Kr,"\n  fragment VenueFields on Venue {\n    venueId\n    operatorId\n    marketType\n    feeParams\n    feeRecipientOverride\n    policy\n    signer\n    creationEnabled\n    context\n    createdAtTimestamp\n    updatedAtTimestamp\n    marketCount\n    cumulativeQuoteVolume\n    protocolFeesCollected\n    settlementFeesCollected\n    builderFeesCollected\n  }\n":qr,"\n  query Operators($where: Operator_bool_exp!, $limit: Int, $offset: Int) {\n         Operator(where: $where, order_by: {operatorId: desc}, limit: $limit, offset: $offset) { ...OperatorFields }\n       }\n":new z(`
    query Operators($where: Operator_bool_exp!, $limit: Int, $offset: Int) {
  Operator(
    where: $where
    order_by: {operatorId: desc}
    limit: $limit
    offset: $offset
  ) {
    ...OperatorFields
  }
}
    fragment OperatorFields on Operator {
  operatorId
  owner
  feeRecipient
  enabled
  policy
  context
  pendingOwner
  venueCount
  createdAtTimestamp
  updatedAtTimestamp
  marketCount
  cumulativeQuoteVolume
  protocolFeesCollected
  settlementFeesCollected
  builderFeesCollected
}`),"\n  query OperatorByPk($id: String!) { Operator_by_pk(id: $id) { ...OperatorFields } }\n":new z(`
    query OperatorByPk($id: String!) {
  Operator_by_pk(id: $id) {
    ...OperatorFields
  }
}
    fragment OperatorFields on Operator {
  operatorId
  owner
  feeRecipient
  enabled
  policy
  context
  pendingOwner
  venueCount
  createdAtTimestamp
  updatedAtTimestamp
  marketCount
  cumulativeQuoteVolume
  protocolFeesCollected
  settlementFeesCollected
  builderFeesCollected
}`),"\n  query Venues($where: Venue_bool_exp!, $limit: Int, $offset: Int) {\n         Venue(where: $where, order_by: {createdAtTimestamp: asc}, limit: $limit, offset: $offset) { ...VenueFields }\n       }\n":new z(`
    query Venues($where: Venue_bool_exp!, $limit: Int, $offset: Int) {
  Venue(
    where: $where
    order_by: {createdAtTimestamp: asc}
    limit: $limit
    offset: $offset
  ) {
    ...VenueFields
  }
}
    fragment VenueFields on Venue {
  venueId
  operatorId
  marketType
  feeParams
  feeRecipientOverride
  policy
  signer
  creationEnabled
  context
  createdAtTimestamp
  updatedAtTimestamp
  marketCount
  cumulativeQuoteVolume
  protocolFeesCollected
  settlementFeesCollected
  builderFeesCollected
}`),"\n  query VenueByPk($id: String!) { Venue_by_pk(id: $id) { ...VenueFields } }\n":new z(`
    query VenueByPk($id: String!) {
  Venue_by_pk(id: $id) {
    ...VenueFields
  }
}
    fragment VenueFields on Venue {
  venueId
  operatorId
  marketType
  feeParams
  feeRecipientOverride
  policy
  signer
  creationEnabled
  context
  createdAtTimestamp
  updatedAtTimestamp
  marketCount
  cumulativeQuoteVolume
  protocolFeesCollected
  settlementFeesCollected
  builderFeesCollected
}`),"\n  fragment OracleQuestionFields on OracleQuestion {\n    id\n    questionKey\n    scheduler\n    oracleCost\n    bindCount\n    reuseCount\n    createdAtBlock\n    createdAtTimestamp\n  }\n":Jr,"\n  fragment OperatorHubAccountFields on OperatorHubAccount {\n    id\n    operatorId\n    earmarked\n    credit\n    outstanding\n    createdAtBlock\n    createdAtTimestamp\n    updatedAtBlock\n    updatedAtTimestamp\n  }\n":Yr,"\n  fragment OracleBindFields on OracleBind {\n    id\n    oracleQuestionId\n    bindIndex\n    operatorId\n    measuredGas\n    overheadShare\n    cost\n    charged\n    subsidy\n    resolvedAt\n    boundAtBlock\n    boundAtTimestamp\n    txHash\n  }\n":Xr,"\n  fragment OracleCallbackFields on OracleCallback {\n    id\n    marketsResolved\n    gasPrice\n    measuredGas\n    overheadGasAttributed\n    totalCost\n    totalCharged\n    subsidy\n    pendingRemaining\n    blockNumber\n    timestamp\n    txHash\n  }\n":Zr,"\n  query OracleQuestion($id: String!) {\n         OracleQuestion_by_pk(id: $id) { ...OracleQuestionFields }\n       }\n":new z(`
    query OracleQuestion($id: String!) {
  OracleQuestion_by_pk(id: $id) {
    ...OracleQuestionFields
  }
}
    fragment OracleQuestionFields on OracleQuestion {
  id
  questionKey
  scheduler
  oracleCost
  bindCount
  reuseCount
  createdAtBlock
  createdAtTimestamp
}`),"\n  query OracleQuestions($where: OracleQuestion_bool_exp!, $limit: Int, $offset: Int) {\n         OracleQuestion(where: $where, order_by: {createdAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OracleQuestionFields }\n       }\n":new z(`
    query OracleQuestions($where: OracleQuestion_bool_exp!, $limit: Int, $offset: Int) {
  OracleQuestion(
    where: $where
    order_by: {createdAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...OracleQuestionFields
  }
}
    fragment OracleQuestionFields on OracleQuestion {
  id
  questionKey
  scheduler
  oracleCost
  bindCount
  reuseCount
  createdAtBlock
  createdAtTimestamp
}`),"\n  query OperatorHubAccount($id: String!) {\n         OperatorHubAccount_by_pk(id: $id) { ...OperatorHubAccountFields }\n       }\n":new z(`
    query OperatorHubAccount($id: String!) {
  OperatorHubAccount_by_pk(id: $id) {
    ...OperatorHubAccountFields
  }
}
    fragment OperatorHubAccountFields on OperatorHubAccount {
  id
  operatorId
  earmarked
  credit
  outstanding
  createdAtBlock
  createdAtTimestamp
  updatedAtBlock
  updatedAtTimestamp
}`),"\n  query OperatorHubAccounts($limit: Int, $offset: Int) {\n         OperatorHubAccount(order_by: {updatedAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OperatorHubAccountFields }\n       }\n":new z(`
    query OperatorHubAccounts($limit: Int, $offset: Int) {
  OperatorHubAccount(
    order_by: {updatedAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...OperatorHubAccountFields
  }
}
    fragment OperatorHubAccountFields on OperatorHubAccount {
  id
  operatorId
  earmarked
  credit
  outstanding
  createdAtBlock
  createdAtTimestamp
  updatedAtBlock
  updatedAtTimestamp
}`),"\n  query OracleBinds($where: OracleBind_bool_exp!, $limit: Int, $offset: Int) {\n         OracleBind(where: $where, order_by: {boundAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OracleBindFields }\n       }\n":new z(`
    query OracleBinds($where: OracleBind_bool_exp!, $limit: Int, $offset: Int) {
  OracleBind(
    where: $where
    order_by: {boundAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...OracleBindFields
  }
}
    fragment OracleBindFields on OracleBind {
  id
  oracleQuestionId
  bindIndex
  operatorId
  measuredGas
  overheadShare
  cost
  charged
  subsidy
  resolvedAt
  boundAtBlock
  boundAtTimestamp
  txHash
}`),"\n  query OracleCallbacks($limit: Int, $offset: Int) {\n         OracleCallback(order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...OracleCallbackFields }\n       }\n":new z(`
    query OracleCallbacks($limit: Int, $offset: Int) {
  OracleCallback(order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
    ...OracleCallbackFields
  }
}
    fragment OracleCallbackFields on OracleCallback {
  id
  marketsResolved
  gasPrice
  measuredGas
  overheadGasAttributed
  totalCost
  totalCharged
  subsidy
  pendingRemaining
  blockNumber
  timestamp
  txHash
}`),"\n  fragment OrderMarketFields on Market {\n    marketAddress\n    asset\n    question\n    expiry\n    tradingStart\n    quoteDecimals\n    intervalSec\n  }\n":Qr,"\n  query SweepableOrders($where: Order_bool_exp!, $limit: Int, $offset: Int) {\n        Order(where: $where, order_by: [{expireTimestampNs: asc}, {id: asc}], limit: $limit, offset: $offset) {\n          id orderId owner isBid price quantityRemaining expireTimestampNs placedAtTimestamp\n          market: market_id\n          marketRow: market { poolAddress marketType ...OrderMarketFields }\n        }\n      }\n":new z(`
    query SweepableOrders($where: Order_bool_exp!, $limit: Int, $offset: Int) {
  Order(
    where: $where
    order_by: [{expireTimestampNs: asc}, {id: asc}]
    limit: $limit
    offset: $offset
  ) {
    id
    orderId
    owner
    isBid
    price
    quantityRemaining
    expireTimestampNs
    placedAtTimestamp
    market: market_id
    marketRow: market {
      poolAddress
      marketType
      ...OrderMarketFields
    }
  }
}
    fragment OrderMarketFields on Market {
  marketAddress
  asset
  question
  expiry
  tradingStart
  quoteDecimals
  intervalSec
}`),"\n  query OpenOrders($where: Order_bool_exp!, $limit: Int, $offset: Int) {\n        Order(where: $where, order_by: {placedAtTimestamp: desc}, limit: $limit, offset: $offset) {\n          id orderId side isBid price quantityRemaining\n          market: market_id\n          marketRow: market { poolAddress ...OrderMarketFields }\n        }\n      }\n":new z(`
    query OpenOrders($where: Order_bool_exp!, $limit: Int, $offset: Int) {
  Order(
    where: $where
    order_by: {placedAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    orderId
    side
    isBid
    price
    quantityRemaining
    market: market_id
    marketRow: market {
      poolAddress
      ...OrderMarketFields
    }
  }
}
    fragment OrderMarketFields on Market {
  marketAddress
  asset
  question
  expiry
  tradingStart
  quoteDecimals
  intervalSec
}`),"\n  query Orders($where: Order_bool_exp!, $limit: Int, $offset: Int) {\n        Order(where: $where, order_by: {placedAtTimestamp: desc}, limit: $limit, offset: $offset) {\n          id orderId side isBid price quantityRemaining fullQuantity filledQuantity status\n          rested expireTimestampNs placedTxHash placedAtTimestamp\n          cancelReason amendedFromOrderId amendedToOrderId\n          market: market_id\n          marketRow: market { poolAddress ...OrderMarketFields }\n        }\n      }\n":new z(`
    query Orders($where: Order_bool_exp!, $limit: Int, $offset: Int) {
  Order(
    where: $where
    order_by: {placedAtTimestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    orderId
    side
    isBid
    price
    quantityRemaining
    fullQuantity
    filledQuantity
    status
    rested
    expireTimestampNs
    placedTxHash
    placedAtTimestamp
    cancelReason
    amendedFromOrderId
    amendedToOrderId
    market: market_id
    marketRow: market {
      poolAddress
      ...OrderMarketFields
    }
  }
}
    fragment OrderMarketFields on Market {
  marketAddress
  asset
  question
  expiry
  tradingStart
  quoteDecimals
  intervalSec
}`),"\n  query BookTops($bidWhere: Order_bool_exp!, $askWhere: Order_bool_exp!) {\n         bids: Order(where: $bidWhere, distinct_on: market_id, order_by: [{market_id: desc}, {price: desc}]) {\n           market: market_id price\n         }\n         asks: Order(where: $askWhere, distinct_on: market_id, order_by: [{market_id: asc}, {price: asc}]) {\n           market: market_id price\n         }\n       }\n":new z(`
    query BookTops($bidWhere: Order_bool_exp!, $askWhere: Order_bool_exp!) {
  bids: Order(
    where: $bidWhere
    distinct_on: market_id
    order_by: [{market_id: desc}, {price: desc}]
  ) {
    market: market_id
    price
  }
  asks: Order(
    where: $askWhere
    distinct_on: market_id
    order_by: [{market_id: asc}, {price: asc}]
  ) {
    market: market_id
    price
  }
}
    `),"\n  query FundingPayments($where: FundingPayment_bool_exp!, $limit: Int, $offset: Int) {\n         FundingPayment(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {\n           id account pool amount timestamp txHash\n         }\n       }\n":new z(`
    query FundingPayments($where: FundingPayment_bool_exp!, $limit: Int, $offset: Int) {
  FundingPayment(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    account
    pool
    amount
    timestamp
    txHash
  }
}
    `),"\n  query MarginEvents($account: String!, $limit: Int, $offset: Int) {\n         MarginEvent(where: {account: {_eq: $account}}, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {\n           id account kind pool amount granter timestamp txHash\n         }\n       }\n":new z(`
    query MarginEvents($account: String!, $limit: Int, $offset: Int) {
  MarginEvent(
    where: {account: {_eq: $account}}
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    account
    kind
    pool
    amount
    granter
    timestamp
    txHash
  }
}
    `),"\n  query Liquidations($where: LiquidationEvent_bool_exp!, $limit: Int, $offset: Int) {\n         LiquidationEvent(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {\n           id account pool kind size price counterparty penalty\n           badDebt insuranceCovered deficit coverageDeclined collateralAmount equity\n           positionsProcessed stageReached marginStatusBefore marginStatusAfter\n           timestamp blockNumber txHash\n         }\n       }\n":new z(`
    query Liquidations($where: LiquidationEvent_bool_exp!, $limit: Int, $offset: Int) {
  LiquidationEvent(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    account
    pool
    kind
    size
    price
    counterparty
    penalty
    badDebt
    insuranceCovered
    deficit
    coverageDeclined
    collateralAmount
    equity
    positionsProcessed
    stageReached
    marginStatusBefore
    marginStatusAfter
    timestamp
    blockNumber
    txHash
  }
}
    `),"\n  query FundingRateHistory($where: FundingRateUpdate_bool_exp!, $orderBy: [FundingRateUpdate_order_by!], $limit: Int, $offset: Int) {\n         FundingRateUpdate(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {\n           id pool fundingRate cumulativeFundingPerUnit indexPrice markPrice\n           intervalsSettled intervalsAccrued fundingWindowSec fundingIntervalSec\n           spanStart spanEnd anchorResynced timestamp blockNumber txHash\n         }\n       }\n":new z(`
    query FundingRateHistory($where: FundingRateUpdate_bool_exp!, $orderBy: [FundingRateUpdate_order_by!], $limit: Int, $offset: Int) {
  FundingRateUpdate(
    where: $where
    order_by: $orderBy
    limit: $limit
    offset: $offset
  ) {
    id
    pool
    fundingRate
    cumulativeFundingPerUnit
    indexPrice
    markPrice
    intervalsSettled
    intervalsAccrued
    fundingWindowSec
    fundingIntervalSec
    spanStart
    spanEnd
    anchorResynced
    timestamp
    blockNumber
    txHash
  }
}
    `),"\n  query FundingRateCandles($where: FundingRateCandle_bool_exp!, $limit: Int, $offset: Int) {\n         FundingRateCandle(where: $where, order_by: {bucketStart: desc}, limit: $limit, offset: $offset) {\n           id pool intervalSeconds bucketStart\n           avgFundingRate8h minFundingRate8h maxFundingRate8h coverage\n           cumulativeFundingStart cumulativeFundingEnd\n           fundingWindowSec fundingIntervalSec paramsChangedInBucket\n           indexPriceEnd openInterestEnd updateCount\n         }\n       }\n":new z(`
    query FundingRateCandles($where: FundingRateCandle_bool_exp!, $limit: Int, $offset: Int) {
  FundingRateCandle(
    where: $where
    order_by: {bucketStart: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    pool
    intervalSeconds
    bucketStart
    avgFundingRate8h
    minFundingRate8h
    maxFundingRate8h
    coverage
    cumulativeFundingStart
    cumulativeFundingEnd
    fundingWindowSec
    fundingIntervalSec
    paramsChangedInBucket
    indexPriceEnd
    openInterestEnd
    updateCount
  }
}
    `),"\n  query PerpFees($where: PerpFeeRecord_bool_exp!, $limit: Int, $offset: Int) {\n         PerpFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {\n           id account pool amount isRebate kind insurancePortion tier fillNotional builder timestamp txHash\n         }\n       }\n":new z(`
    query PerpFees($where: PerpFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
  PerpFeeRecord(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    account
    pool
    amount
    isRebate
    kind
    insurancePortion
    tier
    fillNotional
    builder
    timestamp
    txHash
  }
}
    `),"\n  query OpenInterestHistory($pool: String!, $limit: Int, $offset: Int) {\n         OpenInterestSnapshot(where: {pool: {_eq: $pool}}, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {\n           id pool openInterest timestamp blockNumber\n         }\n       }\n":new z(`
    query OpenInterestHistory($pool: String!, $limit: Int, $offset: Int) {
  OpenInterestSnapshot(
    where: {pool: {_eq: $pool}}
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    pool
    openInterest
    timestamp
    blockNumber
  }
}
    `),"\n  fragment PerpPortfolioMarketFields on Market {\n    poolAddress\n    baseSymbol\n    quoteSymbol\n    baseDecimals\n    quoteDecimals\n    tickSize\n    lotSize\n    minQuantity\n    lastPrice\n    marginBank\n    initialMarginBps\n    fundingRate\n    indexPrice\n    stopRegistry\n  }\n":$r,'\n  query PerpPortfolio(\n    $acct: String!\n    $fillWhere: Fill_bool_exp!\n    $ordersLimit: Int\n    $tradesLimit: Int\n  ) {\n    PerpOrder: Order(\n      where: {\n        owner: { _eq: $acct }\n        status: { _eq: "Open" }\n        market: { marketType: { _eq: "PERP" } }\n      }\n      order_by: { placedAtTimestamp: desc }\n      limit: $ordersLimit\n    ) {\n      id\n      orderId\n      isBid\n      price\n      quantityRemaining\n      filledQuantity\n      fullQuantity\n      placedAtTimestamp\n      placedTxHash\n      market {\n        ...PerpPortfolioMarketFields\n      }\n    }\n    PerpFill: Fill(where: $fillWhere, order_by: { timestamp: desc }, limit: $tradesLimit) {\n      id\n      fillPrice\n      quantity\n      quoteQuantity\n      timestamp\n      txHash\n      maker\n      taker\n      takerIsBid\n      market {\n        ...PerpPortfolioMarketFields\n      }\n    }\n  }\n':new z(`
    query PerpPortfolio($acct: String!, $fillWhere: Fill_bool_exp!, $ordersLimit: Int, $tradesLimit: Int) {
  PerpOrder: Order(
    where: {owner: {_eq: $acct}, status: {_eq: "Open"}, market: {marketType: {_eq: "PERP"}}}
    order_by: {placedAtTimestamp: desc}
    limit: $ordersLimit
  ) {
    id
    orderId
    isBid
    price
    quantityRemaining
    filledQuantity
    fullQuantity
    placedAtTimestamp
    placedTxHash
    market {
      ...PerpPortfolioMarketFields
    }
  }
  PerpFill: Fill(
    where: $fillWhere
    order_by: {timestamp: desc}
    limit: $tradesLimit
  ) {
    id
    fillPrice
    quantity
    quoteQuantity
    timestamp
    txHash
    maker
    taker
    takerIsBid
    market {
      ...PerpPortfolioMarketFields
    }
  }
}
    fragment PerpPortfolioMarketFields on Market {
  poolAddress
  baseSymbol
  quoteSymbol
  baseDecimals
  quoteDecimals
  tickSize
  lotSize
  minQuantity
  lastPrice
  marginBank
  initialMarginBps
  fundingRate
  indexPrice
  stopRegistry
}`),"\n  query PerpOrderHistory($where: Order_bool_exp!, $orderBy: [Order_order_by!], $limit: Int, $offset: Int) {\n    Order(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {\n      id\n      orderId\n      isBid\n      price\n      quantityRemaining\n      filledQuantity\n      fullQuantity\n      status\n      rested\n      expireTimestampNs\n      placedAtTimestamp\n      placedTxHash\n      lastUpdatedAtTimestamp\n      market {\n        ...PerpPortfolioMarketFields\n      }\n    }\n  }\n":new z(`
    query PerpOrderHistory($where: Order_bool_exp!, $orderBy: [Order_order_by!], $limit: Int, $offset: Int) {
  Order(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
    id
    orderId
    isBid
    price
    quantityRemaining
    filledQuantity
    fullQuantity
    status
    rested
    expireTimestampNs
    placedAtTimestamp
    placedTxHash
    lastUpdatedAtTimestamp
    market {
      ...PerpPortfolioMarketFields
    }
  }
}
    fragment PerpPortfolioMarketFields on Market {
  poolAddress
  baseSymbol
  quoteSymbol
  baseDecimals
  quoteDecimals
  tickSize
  lotSize
  minQuantity
  lastPrice
  marginBank
  initialMarginBps
  fundingRate
  indexPrice
  stopRegistry
}`),"\n  query PerpPositions($where: PerpPosition_bool_exp!, $limit: Int, $offset: Int) {\n    PerpPosition(where: $where, order_by: { updatedAt: desc }, limit: $limit, offset: $offset) {\n      id\n      pool\n      account\n      size\n      isLong\n      entryPriceX18\n      realizedPnl\n      updatedAt\n      updatedAtBlock\n    }\n  }\n":new z(`
    query PerpPositions($where: PerpPosition_bool_exp!, $limit: Int, $offset: Int) {
  PerpPosition(
    where: $where
    order_by: {updatedAt: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    pool
    account
    size
    isLong
    entryPriceX18
    realizedPnl
    updatedAt
    updatedAtBlock
  }
}
    `),"\n  query PerpStopOrders($where: StopOrder_bool_exp!, $limit: Int, $offset: Int) {\n    StopOrder(where: $where, order_by: { createdAt: desc }, limit: $limit, offset: $offset) {\n      id\n      registry\n      orderIdRaw\n      owner\n      isBid\n      quantity\n      triggerPrice\n      triggerOperator\n      orderType\n      builder\n      builderFeeBpsTimes1k\n      status\n      placedOrderId\n      dropReason\n      createdAt\n      updatedAt\n      txHash\n      market {\n        poolAddress\n        baseSymbol\n        quoteSymbol\n        baseDecimals\n        quoteDecimals\n      }\n    }\n  }\n":new z(`
    query PerpStopOrders($where: StopOrder_bool_exp!, $limit: Int, $offset: Int) {
  StopOrder(
    where: $where
    order_by: {createdAt: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    registry
    orderIdRaw
    owner
    isBid
    quantity
    triggerPrice
    triggerOperator
    orderType
    builder
    builderFeeBpsTimes1k
    status
    placedOrderId
    dropReason
    createdAt
    updatedAt
    txHash
    market {
      poolAddress
      baseSymbol
      quoteSymbol
      baseDecimals
      quoteDecimals
    }
  }
}
    `),"\n  query MarketByPool($pool: String!) {\n    Market(\n      where: { poolAddress: { _eq: $pool } }\n      order_by: { createdAtTimestamp: desc }\n      limit: 1\n    ) {\n      ...MarketFields\n    }\n  }\n":new z(`
    query MarketByPool($pool: String!) {
  Market(
    where: {poolAddress: {_eq: $pool}}
    order_by: {createdAtTimestamp: desc}
    limit: 1
  ) {
    ...MarketFields
  }
}
    fragment MarketFields on Market {
  id
  marketType
  poolAddress
  lastPrice
  lastTradeAt
  cumulativeBaseVolume
  cumulativeQuoteVolume
  tradeCount
  baseDecimals
  quoteDecimals
  createdAtTimestamp
  baseToken
  quoteToken
  baseSymbol
  quoteSymbol
  baseIsNative
  tickSize
  lotSize
  minQuantity
  markPrice
  rawMidpoint
  markPriceUpdatedAt
  stopRegistry
  marginBank
  initialMarginBps
  fundingRate
  cumulativeFundingPerUnit
  indexPrice
  fundingUpdatedAt
  fundingWindowSec
  fundingIntervalSec
  openInterest
  openInterestUpdatedAt
  marketId
  marketAddress
  yesTokenId
  noTokenId
  collateral
  asset
  question
  oracleQuestion
  oracleQuestionId
  status: clobStatus
  strike
  tradingStart
  expiry
  winningOutcome
  payoutNumerators
  payoutDenominator
  resolvedAtBlock
  resolvedAtTimestamp
  createdByTx
  creator
  voided
  backing
  nonce
  finalized
  netBacking
  context
  intervalSec
  operatorId
  venueId
}`),"\n  query PoolBindings($pool: String!) {\n         PoolBinding(where: {poolAddress: {_eq: $pool}}, order_by: {nonce: desc}) {\n           id poolAddress marketId nonce fromBlock fromLogIndex fromTimestamp\n           toBlock toLogIndex toTimestamp closedBy\n         }\n       }\n":new z(`
    query PoolBindings($pool: String!) {
  PoolBinding(where: {poolAddress: {_eq: $pool}}, order_by: {nonce: desc}) {
    id
    poolAddress
    marketId
    nonce
    fromBlock
    fromLogIndex
    fromTimestamp
    toBlock
    toLogIndex
    toTimestamp
    closedBy
  }
}
    `),"\n  query PoolByPk($id: String!) {\n         Pool_by_pk(id: $id) {\n           id address collateral creator currentMarketId currentNonce generationCount\n           createdAtTimestamp updatedAtTimestamp\n         }\n       }\n":new z(`
    query PoolByPk($id: String!) {
  Pool_by_pk(id: $id) {
    id
    address
    collateral
    creator
    currentMarketId
    currentNonce
    generationCount
    createdAtTimestamp
    updatedAtTimestamp
  }
}
    `),"\n  fragment RouterActionFields on RouterActionRecord {\n    id\n    kind\n    account\n    market: market_id\n    amount\n    payout\n    routedVia\n    timestamp\n    txHash\n  }\n":ei,"\n  query RouterActions($where: RouterActionRecord_bool_exp!, $limit: Int, $offset: Int) {\n         RouterActionRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...RouterActionFields }\n       }\n":new z(`
    query RouterActions($where: RouterActionRecord_bool_exp!, $limit: Int, $offset: Int) {
  RouterActionRecord(
    where: $where
    order_by: {timestamp: desc}
    limit: $limit
    offset: $offset
  ) {
    ...RouterActionFields
  }
}
    fragment RouterActionFields on RouterActionRecord {
  id
  kind
  account
  market: market_id
  amount
  payout
  routedVia
  timestamp
  txHash
}`),"\n  fragment SpotPortfolioMarketFields on Market {\n    poolAddress\n    baseSymbol\n    quoteSymbol\n    baseToken\n    quoteToken\n    baseDecimals\n    quoteDecimals\n    baseIsNative\n    tickSize\n    lotSize\n    minQuantity\n    lastPrice\n    markPrice\n    stopRegistry\n  }\n":ti,'\n  query SpotPortfolio(\n    $acct: String!\n    $fillWhere: Fill_bool_exp!\n    $ordersLimit: Int\n    $tradesLimit: Int\n  ) {\n    SpotOrder: Order(\n      where: {\n        owner: { _eq: $acct }\n        status: { _eq: "Open" }\n        market: { marketType: { _eq: "SPOT" } }\n      }\n      order_by: { placedAtTimestamp: desc }\n      limit: $ordersLimit\n    ) {\n      id\n      orderId\n      isBid\n      price\n      quantityRemaining\n      filledQuantity\n      fullQuantity\n      placedAtTimestamp\n      placedTxHash\n      market {\n        ...SpotPortfolioMarketFields\n      }\n    }\n    SpotStopOrder: StopOrder(\n      where: { owner: { _eq: $acct }, status: { _eq: "PENDING" } }\n      order_by: { createdAt: desc }\n      limit: $ordersLimit\n    ) {\n      ...SpotStopOrderFields\n      market {\n        ...SpotPortfolioMarketFields\n      }\n    }\n    SpotFill: Fill(where: $fillWhere, order_by: { timestamp: desc }, limit: $tradesLimit) {\n      id\n      fillPrice\n      quantity\n      quoteQuantity\n      timestamp\n      txHash\n      maker\n      taker\n      takerIsBid\n      market {\n        ...SpotPortfolioMarketFields\n      }\n    }\n  }\n':new z(`
    query SpotPortfolio($acct: String!, $fillWhere: Fill_bool_exp!, $ordersLimit: Int, $tradesLimit: Int) {
  SpotOrder: Order(
    where: {owner: {_eq: $acct}, status: {_eq: "Open"}, market: {marketType: {_eq: "SPOT"}}}
    order_by: {placedAtTimestamp: desc}
    limit: $ordersLimit
  ) {
    id
    orderId
    isBid
    price
    quantityRemaining
    filledQuantity
    fullQuantity
    placedAtTimestamp
    placedTxHash
    market {
      ...SpotPortfolioMarketFields
    }
  }
  SpotStopOrder: StopOrder(
    where: {owner: {_eq: $acct}, status: {_eq: "PENDING"}}
    order_by: {createdAt: desc}
    limit: $ordersLimit
  ) {
    ...SpotStopOrderFields
    market {
      ...SpotPortfolioMarketFields
    }
  }
  SpotFill: Fill(
    where: $fillWhere
    order_by: {timestamp: desc}
    limit: $tradesLimit
  ) {
    id
    fillPrice
    quantity
    quoteQuantity
    timestamp
    txHash
    maker
    taker
    takerIsBid
    market {
      ...SpotPortfolioMarketFields
    }
  }
}
    fragment SpotPortfolioMarketFields on Market {
  poolAddress
  baseSymbol
  quoteSymbol
  baseToken
  quoteToken
  baseDecimals
  quoteDecimals
  baseIsNative
  tickSize
  lotSize
  minQuantity
  lastPrice
  markPrice
  stopRegistry
}
fragment SpotStopOrderFields on StopOrder {
  id
  registry
  orderId: orderIdRaw
  isBid
  quantity
  triggerPrice
  triggerOperator
  orderType
  status
  placedOrderId
  createdAt
}`),"\n  fragment SpotStopOrderFields on StopOrder {\n    id\n    registry\n    orderId: orderIdRaw\n    isBid\n    quantity\n    triggerPrice\n    triggerOperator\n    orderType\n    status\n    placedOrderId\n    createdAt\n  }\n":ni,"\n  query SpotStopOrders($where: StopOrder_bool_exp!, $limit: Int) {\n    StopOrder(where: $where, order_by: { createdAt: desc }, limit: $limit) {\n      ...SpotStopOrderFields\n      market {\n        ...SpotPortfolioMarketFields\n      }\n    }\n  }\n":new z(`
    query SpotStopOrders($where: StopOrder_bool_exp!, $limit: Int) {
  StopOrder(where: $where, order_by: {createdAt: desc}, limit: $limit) {
    ...SpotStopOrderFields
    market {
      ...SpotPortfolioMarketFields
    }
  }
}
    fragment SpotPortfolioMarketFields on Market {
  poolAddress
  baseSymbol
  quoteSymbol
  baseToken
  quoteToken
  baseDecimals
  quoteDecimals
  baseIsNative
  tickSize
  lotSize
  minQuantity
  lastPrice
  markPrice
  stopRegistry
}
fragment SpotStopOrderFields on StopOrder {
  id
  registry
  orderId: orderIdRaw
  isBid
  quantity
  triggerPrice
  triggerOperator
  orderType
  status
  placedOrderId
  createdAt
}`),"\n  query SyncStatus($chainId: Int!) {\n    chain_metadata(where: { chain_id: { _eq: $chainId } }) {\n      chain_id\n      latest_processed_block\n      block_height\n      num_events_processed\n    }\n  }\n":new z(`
    query SyncStatus($chainId: Int!) {
  chain_metadata(where: {chain_id: {_eq: $chainId}}) {
    chain_id
    latest_processed_block
    block_height
    num_events_processed
  }
}
    `)};function B(e){return ri[e]??{}}var ii=[`Listed`,`Trading`,`Locked`,`Settling`,`Resolved`,`Voided`],ai=400,oi=500,si=[`BUY_YES`,`SELL_YES`,`BUY_NO`,`SELL_NO`];function V(e){return si[Number(e)]??`BUY_YES`}function ci(e,t){return e===`BUY_YES`&&t===`SELL_YES`||e===`SELL_YES`&&t===`BUY_YES`?`DIRECT_YES`:e===`BUY_NO`&&t===`SELL_NO`||e===`SELL_NO`&&t===`BUY_NO`?`DIRECT_NO`:e===`BUY_YES`&&t===`BUY_NO`||e===`BUY_NO`&&t===`BUY_YES`?`MINT_A_PAIR`:e===`SELL_YES`&&t===`SELL_NO`||e===`SELL_NO`&&t===`SELL_YES`?`BURN_A_PAIR`:`DIRECT_YES`}function li(e,t){return`${e.toLowerCase()}_${t}`}function ui(e,t){return`${e}_${t}`}function di(e,t){let n=BigInt(e);return n!==0n&&t>n}var fi=class{markets=new Map;fills=new Map;orders=new Map;fundingUpdates=new Map;poolToMarket=new Map;addressToMarket=new Map;pendingKinds=new Map;status={mode:`init`,snapshotBlock:0,lastBlock:0,headBlock:0,wsConnected:!1,watchCount:0};version=0;listeners=new Set;cache=new Map;getVersion(){return this.version}subscribe=e=>(this.listeners.add(e),()=>this.listeners.delete(e));commit(){this.version++;for(let e of this.listeners)e()}setStatus(e){this.status={...this.status,...e},this.commit()}select(e,t){let n=this.cache.get(e);if(n&&n.v===this.version)return n.val;let r=t();return this.cache.set(e,{v:this.version,val:r}),r}mergeSnapshot(e){for(let t of e.markets)this.indexMarket(t);for(let t of e.fills)this.fills.set(t.id,t);for(let t of e.orders)this.orders.set(li(t.pool,t.orderId),t);this.prunePerPool()}purgePool(e){let t=e.toLowerCase();for(let[e,n]of this.fills)n.pool===t&&this.fills.delete(e);for(let[e,n]of this.orders)n.pool===t&&this.orders.delete(e);for(let[e,n]of this.fundingUpdates)n.pool===t&&this.fundingUpdates.delete(e)}indexMarket(e){this.markets.set(e.id,e),this.poolToMarket.set(e.poolAddress.toLowerCase(),e.id),e.marketType===`BINARY`&&this.addressToMarket.set(e.marketAddress.toLowerCase(),e.id)}prunePerPool(){let e=new Map;for(let t of this.fills.values()){let n=e.get(t.pool)??[];n.push(t),e.set(t.pool,n)}for(let t of e.values())if(!(t.length<=ai)){t.sort(pi);for(let e of t.slice(ai))this.fills.delete(e.id)}let t=new Map;for(let e of this.fundingUpdates.values()){let n=t.get(e.pool)??[];n.push(e),t.set(e.pool,n)}for(let e of t.values())if(!(e.length<=oi)){e.sort(mi);for(let t of e.slice(oi))this.fundingUpdates.delete(t.id)}}enrichFill(e){if(e.maker&&e.makerSide&&e.taker&&e.takerSide&&e.kind&&e.takerIsBid!==void 0)return e;let t=this.orders.get(e.makerOrder_id),n=this.orders.get(e.takerOrder_id);if(!t&&!n)return e;let r=e.makerSide??t?.side,i=e.takerSide??n?.side;return{...e,maker:e.maker??t?.owner,makerSide:r,taker:e.taker??n?.owner,takerSide:i,takerIsBid:e.takerIsBid??n?.isBid,kind:e.kind??(r&&i?ci(i,r):void 0)}}recentFills(e,t){let n=e.toLowerCase();return this.select(`fills:${n}:${t}`,()=>[...this.fills.values()].filter(e=>e.pool===n).sort(pi).slice(0,t).map(e=>this.enrichFill(e)))}userFills(e,t,n){let r=t.toLowerCase(),i=e?.toLowerCase()??null;return this.select(`ufills:${i??`*`}:${r}:${n}`,()=>[...this.fills.values()].filter(e=>(i===null||e.pool===i)&&(e.maker?.toLowerCase()===r||e.taker?.toLowerCase()===r||this.orders.get(e.takerOrder_id)?.owner.toLowerCase()===r)).sort(pi).slice(0,n).map(e=>this.enrichFill(e)))}fundingUpdatesFor(e,t=500){let n=e.toLowerCase();return this.select(`funding:${n}:${t}`,()=>[...this.fundingUpdates.values()].filter(e=>e.pool===n).sort((e,t)=>e.blockNumber===t.blockNumber?e.logIndex-t.logIndex:Number(BigInt(e.blockNumber)-BigInt(t.blockNumber))).slice(-t))}allMarkets(){return this.select(`markets:all`,()=>[...this.markets.values()])}marketByPool(e){let t=this.poolToMarket.get(e.toLowerCase());return this.select(`mpool:${e.toLowerCase()}`,()=>t?this.markets.get(t)??null:null)}marketByAddress(e){let t=this.addressToMarket.get(e.toLowerCase());return this.select(`maddr:${e.toLowerCase()}`,()=>{let e=t?this.markets.get(t):void 0;return e&&e.marketType===`BINARY`?e:null})}userOrders(e,t,n){let r=e.toLowerCase(),i=t.toLowerCase();return this.select(`uorders:${r}:${i}:${n}`,()=>[...this.orders.values()].filter(e=>e.pool===r&&e.owner.toLowerCase()===i).sort((e,t)=>Number(t.createdAt)-Number(e.createdAt)).slice(0,n))}bookLevels(e,t){let n=e.toLowerCase(),r=this.marketByPool(n)?.id;return this.select(`book:${n}:${t}`,()=>{if(r==null)return{bids:[],asks:[]};let e=BigInt(Math.floor(Date.now()/1e3))*1000000000n,i=new Map,a=new Map;for(let t of this.orders.values()){if(t.pool!==n||t.market_id!==r||t.status!==`Open`||!t.rested||di(t.expireTimestampNs,e))continue;let o=BigInt(t.quantityRemaining);if(o<=0n)continue;let s=t.isBid?i:a;s.set(t.price,(s.get(t.price)??0n)+o)}let o=(e,n)=>[...e.entries()].map(([e,t])=>({price:BigInt(e),quantity:t})).sort((e,t)=>n(e.price,t.price)).slice(0,t);return{bids:o(i,(e,t)=>e===t?0:e>t?-1:1),asks:o(a,(e,t)=>e===t?0:e<t?-1:1)}})}bookLevelsByMarket(e,t){let n=e.toLowerCase(),r=this.markets.get(n)?.poolAddress?.toLowerCase();return!r||this.poolToMarket.get(r)!==n?null:this.bookLevels(r,t)}getStatus(){return this.select(`status`,()=>this.status)}};function pi(e,t){let n=Number(t.timestamp)-Number(e.timestamp);return n===0?t.logIndex-e.logIndex:n}function mi(e,t){return e.blockNumber===t.blockNumber?t.logIndex-e.logIndex:Number(BigInt(t.blockNumber)-BigInt(e.blockNumber))}var hi=8n,gi=64n,_i=72n;(1n<<hi)-1n;var vi=(1n<<gi)-1n;function yi(e,t,n){let r=BigInt(t);return BigInt(e)<<_i|(r&vi)<<hi|BigInt(n)}function bi(e){return e>>hi}function xi(e){let t=e.intervalSec==null?NaN:Number(e.intervalSec);if(Number.isFinite(t)&&t>0)return t;if(e.tradingStart!=null&&e.expiry!=null){let t=Number(e.expiry)-Number(e.tradingStart);if(Number.isFinite(t)&&t>0)return t}return null}function Si(e,t=2){if(!Number.isFinite(e)||e<=0)return 0;if(e<60)return Math.max(1,Math.round(e));let n=e<3600?60:e<86400?3600:86400,r=Math.round(e/n)*n;return Math.abs(r-e)<=t?r:Math.round(e)}function Ci(e){return!Number.isFinite(e)||e<=0?null:e%3600==0?`${e/3600}h`:e%60==0?`${e/60}m`:`${e}s`}function wi(e){let t=xi(e);return t==null?null:Ci(Si(t))}function Ti(e,t=6){if(typeof e==`number`&&!Number.isFinite(e))throw new P(`amount must be a finite number, got ${e}`);return i(typeof e==`number`?Ei(e,t):e,t)}function Ei(e,t){let n=String(e);return!n.includes(`e`)&&!n.includes(`E`)&&(n.split(`.`)[1]?.length??0)<=t?n:e.toFixed(t)}function Di(e,t){let{bestBid:n,bestAsk:r}=e;if(n!=null&&r!=null)return(n+r)/2n;let i=t==null?null:BigInt(t);return i==null?r??n??null:n!=null&&i<n?n:r!=null&&i>r?r:i}function Oi(e,t){switch(t){case`BUY_YES`:return e.yesAsks;case`SELL_YES`:return e.yesBids;case`BUY_NO`:return e.noAsks;case`SELL_NO`:return e.noBids}}function ki(e,t){let n=t===`BUY_NO`||t===`SELL_NO`,r=n?e.noBids:e.yesBids,i=n?e.noAsks:e.yesAsks,a=r[0]?.price,o=i[0]?.price;return a==null||o==null?null:(a+o)/2n}function Ai(e,t,n,r){let i=Oi(e,t),a=n>0n?n:0n,o=0n,s=0n,c=0;for(let e of i){if(a<=0n)break;let t=e.quantity<a?e.quantity:a;t<=0n||(o+=t*e.price/r,s+=t,a-=t,c++)}let l=s>0n?o*r/s:0n,u=ki(e,t),d=u!=null&&s>0n?t===`BUY_YES`||t===`BUY_NO`?l-u:u-l:0n;return{avgPrice:l,cost:o,filledQuantity:s,wouldRest:n>s?n-s:0n,levelsConsumed:c,slippageVsMid:d}}function ji(e,t){let n=t-86400,r=e.filter(e=>Number(e.bucketStart)>=n),i=r[0],a=r[r.length-1];if(i===void 0||a===void 0)return{volume24h:0n,baseVolume24h:0n,trades24h:0,priceChange24h:0n,high24h:null,low24h:null,openPrice24h:null};let o=0n,s=0n,c=0,l=BigInt(i.high),u=BigInt(i.low);for(let e of r){o+=BigInt(e.quoteVolume),s+=BigInt(e.baseVolume),c+=e.tradeCount;let t=BigInt(e.high),n=BigInt(e.low);t>l&&(l=t),n<u&&(u=n)}let d=BigInt(i.openPrice),f=BigInt(a.closePrice);return{volume24h:o,baseVolume24h:s,trades24h:c,priceChange24h:f-d,high24h:l,low24h:u,openPrice24h:d}}function Mi(e,t,n){let r=e.toLowerCase(),i=[];for(let e of t){let t=(e.maker??``).toLowerCase()===r,n=(e.taker??``).toLowerCase()===r||(e.takerOrder?.owner??``).toLowerCase()===r;if(!t&&!n)continue;let a=t?e.makerSide:e.takerOrder?.side??e.takerSide;if(a==null)continue;let o=+(a===`BUY_NO`||a===`SELL_NO`),s=a===`BUY_YES`||a===`BUY_NO`;i.push({kind:s?`buy`:`sell`,outcomeIndex:o,quantity:BigInt(e.quantity),price:BigInt(e.fillPrice),ts:Number(e.timestamp)})}for(let e of n)e.account.toLowerCase()===r&&(e.kind===`MintCompleteSet`?i.push({kind:`mint`,outcomeIndex:0,quantity:BigInt(e.amount),price:0n,ts:Number(e.timestamp)}):e.kind===`MergeCompleteSet`&&i.push({kind:`merge`,outcomeIndex:0,quantity:BigInt(e.amount),price:0n,ts:Number(e.timestamp)}));return i.sort((e,t)=>e.ts-t.ts),i.map(({ts:e,...t})=>t)}function Ni(e,t,n,r,i){let a=[{qty:0n,cost:0n,realized:0n},{qty:0n,cost:0n,realized:0n}],o=(e,t,n)=>{a[e].qty+=t,a[e].cost+=t*n/r},s=(e,t,n)=>{let i=a[e],o=i.qty>0n?i.cost*r/i.qty:0n,s=t<i.qty?t:i.qty,c=s*n/r,l=s*o/r;i.realized+=c-l,i.qty-=s,i.cost-=l};for(let t of e){if(t.kind===`mint`){let e=r/2n;o(0,t.quantity,e),o(1,t.quantity,e);continue}if(t.kind===`merge`){let e=r/2n;s(0,t.quantity,e),s(1,t.quantity,e);continue}let e=t.outcomeIndex===1?r-t.price:t.price;t.kind===`buy`?o(t.outcomeIndex,t.quantity,e):s(t.outcomeIndex,t.quantity,e)}let c=[t.balanceYes,t.balanceNo],l=Di(i?.bookTop??{},n.lastPrice)??0n,u=e=>n.voided?r/2n:n.winningOutcome==null?e===0?l:r-l:n.winningOutcome===e?r:0n,d=0n,f=0n,p=0n;for(let e of[0,1]){let t=a[e];p+=t.realized;let n=t.qty>0n?t.cost*r/t.qty:0n,i=c[e]*n/r;d+=i,f+=c[e]*u(e)/r}let m=c[0]+c[1],h=m>0n?d*r/m:0n;return{balanceYes:t.balanceYes,balanceNo:t.balanceNo,costBasis:d,avgCost:h,markValue:f,unrealizedPnl:f-d,realizedPnl:p}}function Pi(e){if(e.voided)return e.amount/2n;if(e.winningOutcome!=null&&e.winningOutcome===e.outcomeIdx){let t=e.settlementFeeBps<0n?0n:e.settlementFeeBps;return e.amount*(10000n-t)/10000n}return 0n}function Fi(e){let t=[];for(let n of e){if(n.amount<=0n)continue;let e=n.winningOutcome!=null&&n.winningOutcome===n.outcomeIdx;!n.voided&&!e||t.push({marketId:n.marketId,pool:n.pool.toLowerCase(),outcomeIdx:n.outcomeIdx,amount:n.amount,estPayout:Pi(n),status:n.status})}return t}var Ii=10000n;function Li(e,t,n){let r=n?.slippageBps??300n,i=n?.slippageMinTicks??10n,a=e*r/Ii,o=i*t;return a>o?a:o}function Ri(e,t,n,r,i){let{tickSize:a,lotSize:o}=i;if(a<=0n||o<=0n||r<=0n||n<=0n)return null;let s=t===`BUY_YES`?e.yesAsks:e.noAsks,c=0n,l=0n;for(let e of s){let{price:t,quantity:i}=e;if(t<=0n||t>=r||i<=0n)continue;let a=n*r/t;if(a<=c)break;let o=a-c,s=i<o?i:o;if(c+=s,l=t,s<i)break}if(c<=0n||l<=0n)return null;let u=r-a,d=(l+Li(l,a,i)+a-1n)/a*a,f=d>u?u:d;if(f<=0n)return null;let p=n*r/f,m=(p<c?p:c)/o*o;return m<=0n||m<(i.minQuantity??0n)?null:{side:t,yesPrice:t===`BUY_YES`?f:r-f,limitPrice:f,quantity:m,escrow:(m*f+r-1n)/r}}function zi(e,t,n,r,i){let{tickSize:a,lotSize:o}=i;if(a<=0n||o<=0n||r<=0n||n<=0n)return null;let s=(t===`SELL_YES`?e.yesBids:e.noBids)[0]?.price;if(s==null||s<=0n)return null;let c=Li(s,a,i),l=(s>c?s-c:a)/a*a,u=l<a?a:l,d=t===`SELL_YES`?u:r-u;if(d<=0n||d>=r)return null;let f=n/o*o;if(f<=0n||f<(i.minQuantity??0n))return null;let p=t===`SELL_YES`?e.yesBids:e.noBids,m=0n,h=0n;for(let{price:e,quantity:t}of p){if(e<u)break;if(e>=r||t<=0n)continue;let n=f-m;if(n<=0n)break;let i=t<n?t:n;m+=i,h+=i*e/r}return{side:t,yesPrice:d,limitPrice:u,quantity:f,fillableQuantity:m,estProceeds:h}}async function Bi(e,t,n){let r=await R(H,{acct:e.toLowerCase(),mkt:t.toLowerCase()},n);return{yes:r.OutcomeBalance.find(e=>e.outcomeIndex===0)?.balance??`0`,no:r.OutcomeBalance.find(e=>e.outcomeIndex===1)?.balance??`0`}}function Vi(e,t,n,r,i){if(t.length===0)return[];let a=new Map,o=new Map;for(let e of t){a.set(e.market.id,e.market);let t=o.get(e.market.id)??{yes:0n,no:0n};e.outcomeIndex===0?t.yes=BigInt(e.balance):t.no=BigInt(e.balance),o.set(e.market.id,t)}let s=new Map;for(let e of n){let t=s.get(e.pool);t?t.push(e):s.set(e.pool,[e])}let c=new Map;for(let e of r){if(e.market==null)continue;let t=c.get(e.market);t?t.push(e):c.set(e.market,[e])}let l=[];for(let[t,n]of a){let r=Mi(e,s.get(n.poolAddress.toLowerCase())??[],c.get(t.toLowerCase())??[]),a=o.get(t)??{yes:0n,no:0n},u=10n**BigInt(n.quoteDecimals),d=i[t.toLowerCase()],f=d?{bestBid:d.bestBid==null?void 0:BigInt(d.bestBid),bestAsk:d.bestAsk==null?void 0:BigInt(d.bestAsk)}:void 0,p=Ni(r,{balanceYes:a.yes,balanceNo:a.no},{quoteDecimals:n.quoteDecimals,lastPrice:n.lastPrice,winningOutcome:n.winningOutcome??null,voided:n.voided},u,f?{bookTop:f}:void 0);l.push({market:n,...p})}return l}async function Hi(e,t={},n){let r=e.toLowerCase(),i={market:{marketType:{_eq:`BINARY`}},_or:[{maker:{_eq:r}},{takerOrder:{owner:{_eq:r}}}]};t.since!=null&&(i.timestamp={_gte:t.since});let a=await R(Ki,{acct:r,fillWhere:i,ordersLimit:t.ordersLimit??200,tradesLimit:t.tradesLimit??50},n),o=Ir(a.ClobFill.map(e=>{let t=(e.maker??``).toLowerCase()===r;return{id:e.id,fillPrice:e.fillPrice,quantity:e.quantity,timestamp:e.timestamp,txHash:e.txHash,asMaker:t,side:t?e.makerSide:e.takerOrder?.side??null,counterparty:t?e.takerOrder?.owner??null:e.maker??null,market:e.market}}));return{account:r,positions:Ir(a.OutcomeBalance.map(e=>({...e,market:e.market?{...e.market,interval:wi(e.market)}:null}))),openOrders:Ir(a.ClobOrder.map(e=>({...e,market:e.market?{...e.market,interval:wi(e.market)}:null}))),trades:o}}B(`
  fragment PortfolioMarketFields on Market {
    id
    marketAddress
    poolAddress
    asset
    question
    status: clobStatus
    lastPrice
    strike
    expiry
    winningOutcome
    voided
    quoteDecimals
    intervalSec
  }
`);async function Ui(e,t){return t.readContract({address:e.vault,abi:xr,functionName:`getWithdrawableBalance`,args:[e.owner,e.token]})}async function Wi(e,t){return t.readContract({address:e.outcomeToken,abi:hr,functionName:`balanceOf`,args:[e.account,e.id]})}async function Gi(e,t={},n){let r={owner:{_eq:e.toLowerCase()}};return t.token!=null&&(r.token={_eq:t.token.toLowerCase()}),(await R(U,{where:r,limit:t.limit??50,offset:t.offset??0},n)).VaultPayoutFallback}var Ki=B(`
  query Portfolio($acct: String!, $fillWhere: Fill_bool_exp!, $ordersLimit: Int, $tradesLimit: Int) {
    OutcomeBalance(
      where: { account: { _eq: $acct }, balance: { _gt: "0" } }
      order_by: { balance: desc }
      limit: 200
    ) {
      outcomeIndex
      tokenId
      balance
      market {
        ...PortfolioMarketFields
      }
    }
    ClobOrder: Order(
      where: {
        owner: { _eq: $acct }
        status: { _eq: "Open" }
        market: { marketType: { _eq: "BINARY" } }
      }
      order_by: { placedAtTimestamp: desc }
      limit: $ordersLimit
    ) {
      id
      orderId
      side
      price
      quantityRemaining
      filledQuantity
      fullQuantity
      placedAtTimestamp
      placedTxHash
      market {
        ...PortfolioMarketFields
      }
    }
    ClobFill: Fill(where: $fillWhere, order_by: { timestamp: desc }, limit: $tradesLimit) {
      id
      fillPrice
      quantity
      timestamp
      txHash
      maker
      makerSide
      takerOrder {
        owner
        side
      }
      market {
        marketAddress
        asset
        quoteDecimals
      }
    }
  }
`),H=B(`
  query OutcomeBalances($acct: String!, $mkt: String!) {
        OutcomeBalance(where: {account: {_eq: $acct}, market: {marketAddress: {_eq: $mkt}}}) { outcomeIndex balance }
      }
`),U=B(`
  query VaultPayoutFallbacks($where: VaultPayoutFallback_bool_exp!, $limit: Int, $offset: Int) {
         VaultPayoutFallback(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
           id owner token amount market: market_id timestamp txHash
         }
       }
`);async function qi(e,t,n){return n.readContract({address:e,abi:mr,functionName:`balanceOf`,args:[t]})}async function Ji(e,t){let n={address:e,abi:mr},[r,i,a]=await Promise.all([t.readContract({...n,functionName:`symbol`}),t.readContract({...n,functionName:`name`}),t.readContract({...n,functionName:`decimals`})]);return{symbol:r,name:i,decimals:Number(a)}}async function Yi(e,t,n,r){return r.readContract({address:e,abi:mr,functionName:`allowance`,args:[t,n]})}async function Xi(e,t,n){return Promise.all(e.map(e=>e.id===void 0?qi(e.token,t,n):Wi({outcomeToken:e.token,account:t,id:e.id},n)))}async function Zi(e,t,n){let r=Qi.get(t);r||(r=new Map,Qi.set(t,r));let i=e.toLowerCase(),a=r.get(i);if(a!==void 0)return a;try{let n=Number(await t.readContract({address:e,abi:mr,functionName:`decimals`}));return r.set(i,n),n}catch{return n}}var Qi=new WeakMap;function $i(e){return e.marketType===`BINARY`}function ea(e){return e.marketType===`SPOT`}function ta(e){return e.marketType===`PERP`}var na=B(`
  fragment MarketFields on Market {
    id
    marketType
    poolAddress
    lastPrice
    lastTradeAt
    cumulativeBaseVolume
    cumulativeQuoteVolume
    tradeCount
    baseDecimals
    quoteDecimals
    createdAtTimestamp
    baseToken
    quoteToken
    baseSymbol
    quoteSymbol
    baseIsNative
    tickSize
    lotSize
    minQuantity
    markPrice
    rawMidpoint
    markPriceUpdatedAt
    stopRegistry
    marginBank
    initialMarginBps
    fundingRate
    cumulativeFundingPerUnit
    indexPrice
    fundingUpdatedAt
    fundingWindowSec
    fundingIntervalSec
    openInterest
    openInterestUpdatedAt
    marketId
    marketAddress
    yesTokenId
    noTokenId
    collateral
    asset
    question
    oracleQuestion
    oracleQuestionId
    status: clobStatus
    strike
    tradingStart
    expiry
    winningOutcome
    payoutNumerators
    payoutDenominator
    resolvedAtBlock
    resolvedAtTimestamp
    createdByTx
    creator
    voided
    backing
    nonce
    finalized
    netBacking
    context
    intervalSec
    operatorId
    venueId
  }
`).toString().replace(/^\s*fragment MarketFields on Market \{|\}\s*$/g,``),ra=e=>e,ia=e=>e,W=e=>e.toLowerCase(),aa=e=>e==null?null:ra(e),oa=e=>e==null?null:ia(e);function sa(e){let t={id:e.id,poolAddress:ra(e.poolAddress),lastPrice:e.lastPrice,lastTradeAt:e.lastTradeAt,cumulativeBaseVolume:e.cumulativeBaseVolume,cumulativeQuoteVolume:e.cumulativeQuoteVolume,tradeCount:e.tradeCount,baseDecimals:e.baseDecimals,quoteDecimals:e.quoteDecimals,createdAtTimestamp:e.createdAtTimestamp};switch(e.marketType){case`BINARY`:return{...t,marketType:`BINARY`,marketId:ia(e.marketId??I(`BINARY row missing marketId`)),marketAddress:ra(e.marketAddress??I(`BINARY row missing marketAddress`)),yesTokenId:e.yesTokenId??I(`BINARY row missing yesTokenId`),noTokenId:e.noTokenId??I(`BINARY row missing noTokenId`),collateral:ra(e.collateral??I(`BINARY row missing collateral`)),asset:e.asset??I(`BINARY row missing asset`),question:e.question??I(`BINARY row missing question`),status:e.status??I(`BINARY row missing status`),oracleQuestion:e.oracleQuestion,oracleQuestionId:e.oracleQuestionId,strike:e.strike??I(`BINARY row missing strike`),tradingStart:e.tradingStart??I(`BINARY row missing tradingStart`),expiry:e.expiry??I(`BINARY row missing expiry`),winningOutcome:e.winningOutcome,payoutNumerators:e.payoutNumerators,payoutDenominator:e.payoutDenominator,resolvedAtBlock:e.resolvedAtBlock,resolvedAtTimestamp:e.resolvedAtTimestamp,createdByTx:oa(e.createdByTx),creator:aa(e.creator),voided:e.voided,backing:e.backing,nonce:e.nonce,finalized:e.finalized,netBacking:e.netBacking,context:oa(e.context),intervalSec:e.intervalSec,interval:wi(e),operatorId:e.operatorId,venueId:oa(e.venueId)};case`SPOT`:return{...t,marketType:`SPOT`,baseToken:ra(e.baseToken??I(`SPOT row missing baseToken`)),quoteToken:ra(e.quoteToken??I(`SPOT row missing quoteToken`)),baseSymbol:e.baseSymbol,quoteSymbol:e.quoteSymbol,baseIsNative:e.baseIsNative??I(`SPOT row missing baseIsNative`),tickSize:e.tickSize??I(`SPOT row missing tickSize`),lotSize:e.lotSize??I(`SPOT row missing lotSize`),minQuantity:e.minQuantity??I(`SPOT row missing minQuantity`),markPrice:e.markPrice,rawMidpoint:e.rawMidpoint,markPriceUpdatedAt:e.markPriceUpdatedAt,stopRegistry:aa(e.stopRegistry)};case`PERP`:return{...t,marketType:`PERP`,baseToken:ra(e.baseToken??I(`PERP row missing baseToken`)),quoteToken:ra(e.quoteToken??I(`PERP row missing quoteToken`)),baseSymbol:e.baseSymbol,quoteSymbol:e.quoteSymbol,baseIsNative:e.baseIsNative??I(`PERP row missing baseIsNative`),tickSize:e.tickSize??I(`PERP row missing tickSize`),lotSize:e.lotSize??I(`PERP row missing lotSize`),minQuantity:e.minQuantity??I(`PERP row missing minQuantity`),marginBank:ra(e.marginBank??I(`PERP row missing marginBank`)),initialMarginBps:e.initialMarginBps??I(`PERP row missing initialMarginBps`),stopRegistry:aa(e.stopRegistry),markPrice:e.markPrice,markPriceUpdatedAt:e.markPriceUpdatedAt,fundingRate:e.fundingRate,cumulativeFundingPerUnit:e.cumulativeFundingPerUnit,indexPrice:e.indexPrice,fundingUpdatedAt:e.fundingUpdatedAt,fundingWindowSec:e.fundingWindowSec,fundingIntervalSec:e.fundingIntervalSec,openInterest:e.openInterest,openInterestUpdatedAt:e.openInterestUpdatedAt};default:return I(`unknown marketType ${String(e.marketType)}`)}}function ca(e){let t=[];for(let n of e)try{t.push(sa(n))}catch(e){if(!(e instanceof or))throw e}return t}async function la(e={},t){let n={};return e.marketType&&(n.marketType={_eq:e.marketType}),ca((await R(ja,{where:n,limit:e.limit??50,offset:e.offset??0},t)).Market)}var ua=B(`
  query RegistryMarkets($where: Market_bool_exp!, $limit: Int, $offset: Int) {
    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit, offset: $offset) {
      ...MarketFields
    }
  }
`);async function da(e){let t={_or:[{marketType:{_neq:`BINARY`}},{finalized:{_eq:!1}}]},n=[];for(let r=0;;r+=500){let i=await R(ua,{where:t,limit:500,offset:r},e);if(n.push(...ca(i.Market)),i.Market.length<500)break}return n}async function fa(e={},t,n){let r={};return e.marketType&&(r.marketType={_eq:e.marketType}),Fr(`Market`,`Market_bool_exp`,r,t,n)}async function pa(e,t){let n=await R(Ma,{id:e},t);return n.Market_by_pk?sa(n.Market_by_pk):null}async function ma(e,t){let n=await R(Na,{a:e.toLowerCase()},t);return n.Market?.[0]?sa(n.Market[0]):null}async function ha(e,t){let n=await ma(e,t);return n&&$i(n)?n:null}async function ga(e={},t){return ca((await R(Pa,{where:Aa({marketType:{_eq:`BINARY`}},e),orderBy:ka(e.orderBy,{createdAtTimestamp:`desc`}),limit:e.limit??50},t)).Market).filter($i)}async function _a(e){return(await R(za,{},e)).Market.filter(e=>e.venueId!=null&&e.operatorId!=null)}async function va(e){return(await R(Ba,{},e)).Market.map(e=>e.asset).filter(e=>e!=null&&e.length>0)}async function ya(e,t,n){let r=String(e.nowSec??Math.floor(Date.now()/1e3));return Fr(`Market`,`Market_bool_exp`,Aa({marketType:{_eq:`BINARY`},expiry:e.phase===`live`?{_gt:r}:{_lte:r}},e),t,n)}async function ba(e,t){let n=await pa(e,t);return n&&$i(n)?n:null}async function xa(e,t){return(await R(Va,{id:e.toLowerCase()},t)).MarketVenue_by_pk}async function Sa(e={},t){let n={marketType:{_eq:`SPOT`}};return e.baseSymbol!=null&&(n.baseSymbol={_eq:e.baseSymbol}),e.quoteSymbol!=null&&(n.quoteSymbol={_eq:e.quoteSymbol}),ca((await R(Fa,{where:n,limit:e.limit??50},t)).Market).filter(ea)}async function Ca(e,t){let n=await pa(e.toLowerCase(),t);return n&&ea(n)?n:null}async function G(e,t){return(await R(Ha,{id:e.toLowerCase()},t)).MarketStatusUpdate}async function wa(e={},t){let n={marketType:{_eq:`PERP`}};return e.baseSymbol!=null&&(n.baseSymbol={_eq:e.baseSymbol}),e.quoteSymbol!=null&&(n.quoteSymbol={_eq:e.quoteSymbol}),ca((await R(Ia,{where:n,limit:e.limit??50},t)).Market).filter(ta)}async function Ta(e,t){let n=await pa(e.toLowerCase(),t);return n&&ta(n)?n:null}async function Ea(e={},t){return ca((await R(La,{where:Aa({marketType:{_eq:`BINARY`},expiry:{_gt:String(e.nowSec??Math.floor(Date.now()/1e3))}},e),orderBy:ka(e.orderBy,{expiry:`asc`}),limit:e.limit??50,offset:e.offset??0},t)).Market).filter($i)}async function Da(e={},t){return ca((await R(Ra,{where:Aa({marketType:{_eq:`BINARY`},expiry:{_lte:String(e.nowSec??Math.floor(Date.now()/1e3))}},e),limit:e.limit??50,offset:e.offset??0},t)).Market).filter($i)}async function Oa(e,t){let n={},r=e.map(e=>e.toLowerCase());if(r.length===0)return n;let i=await R(Wa,{ids:r},t),a=new Map,o=new Set;for(let e of i.MarketReferenceLink)a.set(e.market.toLowerCase(),String(e.referenceQuestionId)),o.add(String(e.referenceQuestionId));if(o.size===0)return n;let s=await R(Ua,{qids:[...o]},t),c=new Map;for(let e of s.OracleAnswer)c.set(String(e.id),e.numericValue);for(let[e,t]of a)n[e]=c.get(t)??null;return n}function ka(e,t){switch(e){case`newest`:return{createdAtTimestamp:`desc`};case`closingSoon`:return{expiry:`asc`};case`volume`:return{cumulativeQuoteVolume:`desc`};case`tradeCount`:return{tradeCount:`desc`};default:return t}}function Aa(e,t){t.operatorId!=null&&(e.operatorId={_eq:t.operatorId}),t.venueId!=null&&(e.venueId={_eq:t.venueId.toLowerCase()}),t.asset!=null&&(e.asset={_eq:t.asset}),t.intervalSec!=null&&(e.intervalSec={_eq:String(t.intervalSec)}),t.status!=null&&(e.clobStatus={_eq:t.status}),t.creator!=null&&(e.creator={_eq:t.creator.toLowerCase()});let n=t.search?.trim();if(n){let t=`%${n}%`;e._or=[{asset:{_ilike:t}},{question:{_ilike:t}}]}return e}var ja=B(`
  query Markets($where: Market_bool_exp!, $limit: Int, $offset: Int) {
    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit, offset: $offset) {
      ...MarketFields
    }
  }
`),Ma=B(`
  query MarketByPk($id: String!) {
    Market_by_pk(id: $id) {
      ...MarketFields
    }
  }
`),Na=B(`
  query MarketByAddress($a: String!) {
    Market(
      where: { marketAddress: { _eq: $a } }
      order_by: { createdAtTimestamp: desc }
      limit: 1
    ) {
      ...MarketFields
    }
  }
`),Pa=B(`
  query BinaryMarkets($where: Market_bool_exp!, $orderBy: [Market_order_by!], $limit: Int) {
    Market(where: $where, order_by: $orderBy, limit: $limit) {
      ...MarketFields
    }
  }
`),Fa=B(`
  query SpotMarkets($where: Market_bool_exp!, $limit: Int) {
    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit) {
      ...MarketFields
    }
  }
`),Ia=B(`
  query PerpMarkets($where: Market_bool_exp!, $limit: Int) {
    Market(where: $where, order_by: { createdAtTimestamp: desc }, limit: $limit) {
      ...MarketFields
    }
  }
`),La=B(`
  query LiveBinaryMarkets(
    $where: Market_bool_exp!
    $orderBy: [Market_order_by!]
    $limit: Int!
    $offset: Int!
  ) {
    Market(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
      ...MarketFields
    }
  }
`),Ra=B(`
  query PastBinaryMarkets($where: Market_bool_exp!, $limit: Int!, $offset: Int!) {
    Market(where: $where, order_by: { expiry: desc }, limit: $limit, offset: $offset) {
      ...MarketFields
    }
  }
`),za=B(`
  query BinaryOriginPairs {
         Market(
           distinct_on: [operatorId, venueId],
           where: {marketType: {_eq: "BINARY"}, operatorId: {_is_null: false}, venueId: {_is_null: false}},
           order_by: [{operatorId: asc}, {venueId: asc}]
         ) {
           operatorId
           venueId
         }
       }
`),Ba=B(`
  query BinaryAssets {
         Market(distinct_on: asset, where: {marketType: {_eq: "BINARY"}, asset: {_is_null: false}}, order_by: {asset: asc}) {
           asset
         }
       }
`),Va=B(`
  query MarketFees($id: String!) {
         MarketVenue_by_pk(id: $id) {
           operatorId venueId feeRecipient
           makerFeeBps takerFeeBps maxBuilderFeeBps routingFeeBps settlementFeeBps settlementFeesCollected
         }
       }
`),Ha=B(`
  query MarketStatusHistory($id: String!) {
         MarketStatusUpdate(where: {market_id: {_eq: $id}}, order_by: {timestamp: asc}) {
           oldStatus newStatus blockNumber timestamp txHash
         }
       }
`),Ua=B(`
  query OpeningAnswers($qids: [String!]) {
         OracleAnswer(where: {id: {_in: $qids}}) { id numericValue }
       }
`),Wa=B(`
  query OpeningRefs($ids: [String!]) {
         MarketReferenceLink(where: {market_id: {_in: $ids}}) { market: market_id referenceQuestionId }
       }
`);async function Ga(e,t,n){if(!/^0x[0-9a-fA-F]{64}$/.test(e))throw new P(`getMarketOnchain now takes the bytes32 marketId (0.13.0 breaking change) — got a non-32-byte value. Resolve the id via listBinaryMarkets / the indexer instead of passing a contract address.`);let r=n,[i,a]=await Promise.all([r.readContract({address:t.module,abi:Cr,functionName:`markets`,args:[e]}),r.readContract({address:t.module,abi:Cr,functionName:`marketNonce`,args:[e]})]),o=i[3],s=i[8],c=i[9],l=i[10],u=i[11],d=i[13];if(/^0x0{40}$/.test(s))throw new P(`unknown marketId ${e} on the module`);let f={address:s,abi:pr},[p,m,h,g,_,v,y]=await Promise.all([r.readContract({...f,functionName:`outcomeToken`}),r.readContract({...f,functionName:`status`}),r.readContract({...f,functionName:`backing`}),r.readContract({...f,functionName:`payoutNumerators`}),r.readContract({...f,functionName:`isResolved`}),r.readContract({...f,functionName:`isVoided`}),Zi(o,r,6)]),b=g??[],x=0;for(let e=1;e<b.length;e++)(b[e]??0n)>(b[x]??0n)&&(x=e);let S=h,C=!1;if(t.settlement){let e=await r.readContract({address:t.settlement,abi:fr,functionName:`getSettlement`,args:[bi(l)]});e.finalized&&(C=!0,S=e.backing)}return{marketAddress:s,outcomeToken:p,yesId:l,noId:u,pool:c,nonce:a,collateral:o,status:Number(m),backing:S,finalized:C,expiry:d,decimals:y,winningOutcome:Number(x),isResolved:_,isVoided:v}}async function Ka(e,t,n){return n.readContract({address:t,abi:Cr,functionName:`poolCreator`,args:[e]})}async function qa(e,t,n){let[r,i,a]=await Promise.all([n.readContract({address:e,abi:Ja,functionName:`owner`}).catch(()=>null),t.proxy?n.getStorageAt({address:e,slot:Ya}).then(e=>{if(!e||e.length<42)return null;let t=`0x${e.slice(-40)}`;return t.toLowerCase()===`0x0000000000000000000000000000000000000000`?null:t}).catch(()=>null):Promise.resolve(null),n.getBalance({address:e}).catch(()=>0n)]);return{owner:r,impl:i,balance:a}}var Ja=[{type:`function`,name:`owner`,stateMutability:`view`,inputs:[],outputs:[{type:`address`}]}],Ya=`0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`;function Xa(e){let t=new Set;for(let r of e)r.type===`event`&&t.add(n(r));return t}function Za(e,t){let n=t?.[0];return n!==void 0&&e.has(n)}var Qa=[{type:`error`,name:`AccessControlBadConfirmation`,inputs:[]},{type:`error`,name:`AccessControlUnauthorizedAccount`,inputs:[{name:`account`,type:`address`},{name:`neededRole`,type:`bytes32`}]},{type:`error`,name:`AccountNotFlat`,inputs:[]},{type:`error`,name:`AdapterNotApproved`,inputs:[]},{type:`error`,name:`AddressEmptyCode`,inputs:[{name:`target`,type:`address`}]},{type:`error`,name:`AddressIsRegisteredBidder`,inputs:[]},{type:`error`,name:`AdlBadBankruptcyPrice`,inputs:[]},{type:`error`,name:`AdlCounterpartySameSide`,inputs:[]},{type:`error`,name:`AdlFlipNotAllowed`,inputs:[]},{type:`error`,name:`AdlRankerInvalidPrice`,inputs:[]},{type:`error`,name:`AdlRankerNotSet`,inputs:[]},{type:`error`,name:`AdlSelfSettle`,inputs:[]},{type:`error`,name:`AdlSessionWindowNotSet`,inputs:[]},{type:`error`,name:`AdlZeroNotional`,inputs:[]},{type:`error`,name:`AllocatorAlreadyInitialised`,inputs:[]},{type:`error`,name:`AllocatorNotAtZeroIndex`,inputs:[]},{type:`error`,name:`AllocatorZeroFree`,inputs:[]},{type:`error`,name:`AlreadyArmed`,inputs:[]},{type:`error`,name:`AlreadyFinalized`,inputs:[]},{type:`error`,name:`AlreadyInitialised`,inputs:[]},{type:`error`,name:`AlreadySubscribed`,inputs:[]},{type:`error`,name:`AmendOldOrderGone`,inputs:[{name:`oldOrderId`,type:`uint128`}]},{type:`error`,name:`AmendReplacementFailed`,inputs:[]},{type:`error`,name:`AmendReplacementRejected`,inputs:[{name:`requestIndex`,type:`uint256`},{name:`reason`,type:`uint8`}]},{type:`error`,name:`ArrayLengthMismatch`,inputs:[]},{type:`error`,name:`BackingMismatch`,inputs:[{name:`expected`,type:`uint256`},{name:`received`,type:`uint256`}]},{type:`error`,name:`BackingOverflow`,inputs:[]},{type:`error`,name:`BaseTokenAlreadyHasPool`,inputs:[{name:`baseToken`,type:`address`}]},{type:`error`,name:`BatchLiquidationDisabled`,inputs:[]},{type:`error`,name:`BatchTooLarge`,inputs:[]},{type:`error`,name:`BidderAddressReserved`,inputs:[]},{type:`error`,name:`BidderAlreadyRegistered`,inputs:[]},{type:`error`,name:`BidderCannotBeIsolated`,inputs:[]},{type:`error`,name:`BidderNotAContract`,inputs:[]},{type:`error`,name:`BidderNotRegistered`,inputs:[]},{type:`error`,name:`BinaryClobFactoryNotSet`,inputs:[]},{type:`error`,name:`BinaryPoolImplNotSet`,inputs:[]},{type:`error`,name:`BlockInPast`,inputs:[]},{type:`error`,name:`BooksNotEmpty`,inputs:[]},{type:`error`,name:`BoundaryNotAligned`,inputs:[]},{type:`error`,name:`BoundaryNotFuture`,inputs:[]},{type:`error`,name:`BuilderAddressReserved`,inputs:[]},{type:`error`,name:`BuilderCodesNotSupported`,inputs:[]},{type:`error`,name:`BuilderFeeExceedsApproval`,inputs:[]},{type:`error`,name:`BuilderFeeExceedsCap`,inputs:[]},{type:`error`,name:`BuilderNotApproved`,inputs:[]},{type:`error`,name:`CallerInManualVaultMode`,inputs:[{name:`legIndex`,type:`uint256`},{name:`pool`,type:`address`}]},{type:`error`,name:`CannotStoreZeroOrder`,inputs:[]},{type:`error`,name:`ChainStillTriggerable`,inputs:[]},{type:`error`,name:`ChargeableExceedsDeficit`,inputs:[]},{type:`error`,name:`ChargeableExceedsLosses`,inputs:[]},{type:`error`,name:`CircuitBandExceedsInitialMargin`,inputs:[]},{type:`error`,name:`CircuitBreakerTriggered`,inputs:[]},{type:`error`,name:`CloseOutMarginExceedsBalance`,inputs:[]},{type:`error`,name:`CollateralNotWNative`,inputs:[]},{type:`error`,name:`CollateralTokenMismatch`,inputs:[]},{type:`error`,name:`ContextTooLong`,inputs:[]},{type:`error`,name:`CreditRecipientInDebt`,inputs:[]},{type:`error`,name:`DeadlineExpired`,inputs:[{name:`deadline`,type:`uint64`},{name:`currentTs`,type:`uint64`}]},{type:`error`,name:`DryRunDifference`,inputs:[]},{type:`error`,name:`DuplicateTier`,inputs:[]},{type:`error`,name:`EMANotInitialized`,inputs:[]},{type:`error`,name:`EmptyBatch`,inputs:[]},{type:`error`,name:`EmptyCallData`,inputs:[]},{type:`error`,name:`EmptyFilter`,inputs:[]},{type:`error`,name:`EmptyOrderBatch`,inputs:[]},{type:`error`,name:`EmptySelectors`,inputs:[]},{type:`error`,name:`ERC1967InvalidImplementation`,inputs:[{name:`implementation`,type:`address`}]},{type:`error`,name:`ERC1967NonPayable`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`},{name:`allowance`,type:`uint256`},{name:`needed`,type:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`},{name:`balance`,type:`uint256`},{name:`needed`,type:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`}]},{type:`error`,name:`EthRefundFailed`,inputs:[]},{type:`error`,name:`ExceedsBalance`,inputs:[]},{type:`error`,name:`ExceedsWithdrawableBalance`,inputs:[]},{type:`error`,name:`ExcessiveInput`,inputs:[{name:`spent`,type:`uint256`},{name:`maxAllowed`,type:`uint256`}]},{type:`error`,name:`ExpiredOrderMustBeCancelled`,inputs:[{name:`orderId`,type:`uint128`}]},{type:`error`,name:`FailedCall`,inputs:[]},{type:`error`,name:`FailedDeployment`,inputs:[]},{type:`error`,name:`FaucetCapExceeded`,inputs:[]},{type:`error`,name:`FeeParamsTooLong`,inputs:[]},{type:`error`,name:`FeeRecipientNotSet`,inputs:[]},{type:`error`,name:`FeeRecipientRequired`,inputs:[]},{type:`error`,name:`FeeTooHigh`,inputs:[]},{type:`error`,name:`FillOrKillNotFillable`,inputs:[]},{type:`error`,name:`FillPriceOutsideBand`,inputs:[]},{type:`error`,name:`FillPriceOverflow`,inputs:[]},{type:`error`,name:`FinalTokenMismatch`,inputs:[{name:`expected`,type:`address`},{name:`actual`,type:`address`}]},{type:`error`,name:`FirstRollAlreadyArmed`,inputs:[]},{type:`error`,name:`FreshMarketRequired`,inputs:[]},{type:`error`,name:`FundingCapExceedsMarginBand`,inputs:[]},{type:`error`,name:`GasLimitExceeded`,inputs:[]},{type:`error`,name:`GasLimitZero`,inputs:[]},{type:`error`,name:`HandlerZeroAddress`,inputs:[]},{type:`error`,name:`ImmediateOrCancelNoFill`,inputs:[]},{type:`error`,name:`InconsistentMinQuantityAndLotSize`,inputs:[]},{type:`error`,name:`IncorrectDryRun`,inputs:[]},{type:`error`,name:`IncorrectOrder`,inputs:[]},{type:`error`,name:`IncorrectSender`,inputs:[{name:`sender`,type:`address`},{name:`expected`,type:`address`}]},{type:`error`,name:`IndexOutOfBounds`,inputs:[]},{type:`error`,name:`InputEqualsOutput`,inputs:[]},{type:`error`,name:`InsufficientActivationBalance`,inputs:[]},{type:`error`,name:`InsufficientBacking`,inputs:[]},{type:`error`,name:`InsufficientBalance`,inputs:[]},{type:`error`,name:`InsufficientBalance`,inputs:[{name:`balance`,type:`uint256`},{name:`needed`,type:`uint256`}]},{type:`error`,name:`InsufficientCollateral`,inputs:[]},{type:`error`,name:`InsufficientCreateValue`,inputs:[]},{type:`error`,name:`InsufficientCredit`,inputs:[]},{type:`error`,name:`InsufficientGasForPayout`,inputs:[{name:`gasLeft`,type:`uint256`}]},{type:`error`,name:`InsufficientLegInput`,inputs:[{name:`legIndex`,type:`uint256`},{name:`available`,type:`uint256`},{name:`required`,type:`uint256`}]},{type:`error`,name:`InsufficientMargin`,inputs:[]},{type:`error`,name:`InsufficientMarginAfterWithdrawal`,inputs:[]},{type:`error`,name:`InsufficientMarginAtCreation`,inputs:[]},{type:`error`,name:`InsufficientMarginForOrder`,inputs:[]},{type:`error`,name:`InsufficientOperatorDeposit`,inputs:[{name:`operatorId`,type:`uint32`},{name:`required`,type:`uint256`},{name:`available`,type:`uint256`}]},{type:`error`,name:`InsufficientOutput`,inputs:[{name:`received`,type:`uint256`},{name:`minRequired`,type:`uint256`}]},{type:`error`,name:`InsufficientPermission`,inputs:[]},{type:`error`,name:`InsufficientSomiPayment`,inputs:[]},{type:`error`,name:`InsufficientVaultBalance`,inputs:[]},{type:`error`,name:`InsuranceFundCandidateHasDebt`,inputs:[]},{type:`error`,name:`InsuranceFundCandidateHasPositions`,inputs:[]},{type:`error`,name:`InsuranceFundCannotTrade`,inputs:[]},{type:`error`,name:`InsuranceFundFeeRecipientConflict`,inputs:[]},{type:`error`,name:`InsuranceFundNotSet`,inputs:[]},{type:`error`,name:`InvalidAdapter`,inputs:[]},{type:`error`,name:`InvalidAddress`,inputs:[]},{type:`error`,name:`InvalidAdlRankerContract`,inputs:[]},{type:`error`,name:`InvalidAmount`,inputs:[]},{type:`error`,name:`InvalidBaseToken`,inputs:[]},{type:`error`,name:`InvalidBidderAddress`,inputs:[]},{type:`error`,name:`InvalidBuilder`,inputs:[]},{type:`error`,name:`InvalidCircuitBreakerParameters`,inputs:[]},{type:`error`,name:`InvalidConfig`,inputs:[]},{type:`error`,name:`InvalidCreditGranterContract`,inputs:[]},{type:`error`,name:`InvalidDepositOrWithdrawal`,inputs:[]},{type:`error`,name:`InvalidDynamicIMFParameters`,inputs:[]},{type:`error`,name:`InvalidFeeRecipient`,inputs:[]},{type:`error`,name:`InvalidFundingParameters`,inputs:[]},{type:`error`,name:`InvalidGasBufferBps`,inputs:[]},{type:`error`,name:`InvalidGasParameters`,inputs:[]},{type:`error`,name:`InvalidInitialization`,inputs:[]},{type:`error`,name:`InvalidInsuranceFundContract`,inputs:[]},{type:`error`,name:`InvalidIntervalSeconds`,inputs:[]},{type:`error`,name:`InvalidLegQuantity`,inputs:[{name:`legIndex`,type:`uint256`}]},{type:`error`,name:`InvalidLeverage`,inputs:[]},{type:`error`,name:`InvalidLimitPrice`,inputs:[]},{type:`error`,name:`InvalidLiquidationEngineContract`,inputs:[]},{type:`error`,name:`InvalidLotSize`,inputs:[]},{type:`error`,name:`InvalidMarginBank`,inputs:[]},{type:`error`,name:`InvalidMarginParameters`,inputs:[]},{type:`error`,name:`InvalidMarketExpiry`,inputs:[]},{type:`error`,name:`InvalidMaxFeePerGas`,inputs:[]},{type:`error`,name:`InvalidMaxLegs`,inputs:[]},{type:`error`,name:`InvalidMidpointEmaParameters`,inputs:[]},{type:`error`,name:`InvalidMinQuantity`,inputs:[]},{type:`error`,name:`InvalidMinStopDistance`,inputs:[]},{type:`error`,name:`InvalidMsgValue`,inputs:[{name:`expected`,type:`uint256`},{name:`actual`,type:`uint256`}]},{type:`error`,name:`InvalidOperator`,inputs:[]},{type:`error`,name:`InvalidOperatorPermissionsRegistry`,inputs:[]},{type:`error`,name:`InvalidOrderOwner`,inputs:[]},{type:`error`,name:`InvalidOrderPair`,inputs:[]},{type:`error`,name:`InvalidOutcomeIndex`,inputs:[]},{type:`error`,name:`InvalidOutcomeToken`,inputs:[]},{type:`error`,name:`InvalidOwner`,inputs:[]},{type:`error`,name:`InvalidParameter`,inputs:[]},{type:`error`,name:`InvalidParameters`,inputs:[]},{type:`error`,name:`InvalidPaymasterData`,inputs:[]},{type:`error`,name:`InvalidPayoutVector`,inputs:[]},{type:`error`,name:`InvalidPerpPool`,inputs:[]},{type:`error`,name:`InvalidPerpPoolFactory`,inputs:[]},{type:`error`,name:`InvalidPerpPoolFactoryContract`,inputs:[]},{type:`error`,name:`InvalidPolicy`,inputs:[]},{type:`error`,name:`InvalidPool`,inputs:[]},{type:`error`,name:`InvalidPrice`,inputs:[]},{type:`error`,name:`InvalidPrice`,inputs:[{name:`price`,type:`uint256`},{name:`tickSize`,type:`uint256`}]},{type:`error`,name:`InvalidQuantity`,inputs:[{name:`quantity`,type:`uint256`},{name:`constraint`,type:`uint256`}]},{type:`error`,name:`InvalidReceiver`,inputs:[]},{type:`error`,name:`InvalidSeriesConfig`,inputs:[]},{type:`error`,name:`InvalidSettlement`,inputs:[]},{type:`error`,name:`InvalidSettlementWindow`,inputs:[]},{type:`error`,name:`InvalidSlippageTolerance`,inputs:[]},{type:`error`,name:`InvalidSomiPaymentPerOrder`,inputs:[]},{type:`error`,name:`InvalidSpotPool`,inputs:[]},{type:`error`,name:`InvalidSpotPoolRegistry`,inputs:[]},{type:`error`,name:`InvalidTakerSide`,inputs:[]},{type:`error`,name:`InvalidTickSize`,inputs:[]},{type:`error`,name:`InvalidTier`,inputs:[]},{type:`error`,name:`InvalidTokenAddress`,inputs:[{name:`token`,type:`address`}]},{type:`error`,name:`InvalidTradingWindow`,inputs:[]},{type:`error`,name:`InvalidTriggerPrice`,inputs:[]},{type:`error`,name:`InvalidVenueFeeParams`,inputs:[]},{type:`error`,name:`InvalidVenueSignature`,inputs:[]},{type:`error`,name:`IsolatedMarketBlocked`,inputs:[]},{type:`error`,name:`IsolatedSpansMultipleMarkets`,inputs:[]},{type:`error`,name:`KickoffOutOfRange`,inputs:[{name:`seriesId`,type:`uint32`}]},{type:`error`,name:`LegFillFailed`,inputs:[{name:`legIndex`,type:`uint256`}]},{type:`error`,name:`LegInputOverflow`,inputs:[{name:`legIndex`,type:`uint256`},{name:`runningInputAmount`,type:`uint256`}]},{type:`error`,name:`LegPlacementRejected`,inputs:[{name:`legIndex`,type:`uint256`},{name:`reason`,type:`bytes`}]},{type:`error`,name:`LegPlacementRevertedWithoutReason`,inputs:[{name:`legIndex`,type:`uint256`}]},{type:`error`,name:`LengthMismatch`,inputs:[]},{type:`error`,name:`LimitPriceIncompatibleWithTrigger`,inputs:[]},{type:`error`,name:`LinkedListCorrupted`,inputs:[]},{type:`error`,name:`LinkedListEmptyKey`,inputs:[]},{type:`error`,name:`LinkedListNodeAlreadyExists`,inputs:[]},{type:`error`,name:`LiquidationEngineNotSet`,inputs:[]},{type:`error`,name:`MarginBankNotSet`,inputs:[]},{type:`error`,name:`MarketDeployFailed`,inputs:[]},{type:`error`,name:`MarketExpiryInPast`,inputs:[]},{type:`error`,name:`MarketNotFinalizedYet`,inputs:[]},{type:`error`,name:`MarketNotSettled`,inputs:[]},{type:`error`,name:`MarketNotSettled`,inputs:[{name:`marketId`,type:`bytes32`}]},{type:`error`,name:`MarketRestricted`,inputs:[]},{type:`error`,name:`MarketTypeMismatch`,inputs:[{name:`expected`,type:`bytes4`},{name:`actual`,type:`bytes4`}]},{type:`error`,name:`MarketTypeReserved`,inputs:[]},{type:`error`,name:`MarkPriceUnavailable`,inputs:[]},{type:`error`,name:`MaxPositionSizeExceeded`,inputs:[]},{type:`error`,name:`MaxTiersAboveCeiling`,inputs:[]},{type:`error`,name:`MaxTiersBelowActive`,inputs:[]},{type:`error`,name:`MetadataAlreadySet`,inputs:[]},{type:`error`,name:`ModuleTypeMismatch`,inputs:[{name:`expected`,type:`bytes4`},{name:`actual`,type:`bytes4`}]},{type:`error`,name:`MustBeSentFromZeroAddress`,inputs:[]},{type:`error`,name:`NativeAmountMismatch`,inputs:[]},{type:`error`,name:`NativeInputNotSupportedInAutoPullMode`,inputs:[]},{type:`error`,name:`NativeIntermediateUnsupported`,inputs:[{name:`legIndex`,type:`uint256`}]},{type:`error`,name:`NativePayoutFailed`,inputs:[]},{type:`error`,name:`NativeRefundExceedsInput`,inputs:[{name:`refund`,type:`uint256`},{name:`forwarded`,type:`uint256`}]},{type:`error`,name:`NativeRefundFailed`,inputs:[]},{type:`error`,name:`NativeTokenTransferFailed`,inputs:[]},{type:`error`,name:`NativeTransferFailed`,inputs:[]},{type:`error`,name:`NativeWithdrawFailed`,inputs:[]},{type:`error`,name:`NoActiveSubscription`,inputs:[]},{type:`error`,name:`NoBadDebt`,inputs:[]},{type:`error`,name:`NoCreditToReclaim`,inputs:[]},{type:`error`,name:`NoOpenPosition`,inputs:[]},{type:`error`,name:`NoPrecompile`,inputs:[]},{type:`error`,name:`NoReducingPositionAtCreation`,inputs:[]},{type:`error`,name:`NoSponsorSigner`,inputs:[{name:`operatorId`,type:`uint32`}]},{type:`error`,name:`NoStateChange`,inputs:[]},{type:`error`,name:`NotArmed`,inputs:[]},{type:`error`,name:`NotASideHolder`,inputs:[]},{type:`error`,name:`NotASpotPool`,inputs:[{name:`pool`,type:`address`}]},{type:`error`,name:`NotAuthorizedAdapter`,inputs:[]},{type:`error`,name:`NotEntryPoint`,inputs:[]},{type:`error`,name:`NotFinalized`,inputs:[]},{type:`error`,name:`NothingOwed`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]},{type:`error`,name:`NotIdPool`,inputs:[]},{type:`error`,name:`NotInitializing`,inputs:[]},{type:`error`,name:`NotLiquidatable`,inputs:[]},{type:`error`,name:`NotModule`,inputs:[]},{type:`error`,name:`NotOperatorOwner`,inputs:[]},{type:`error`,name:`NotOperatorOwner`,inputs:[{name:`operatorId`,type:`uint32`},{name:`caller`,type:`address`}]},{type:`error`,name:`NotOracle`,inputs:[]},{type:`error`,name:`NotOwner`,inputs:[]},{type:`error`,name:`NotReactivity`,inputs:[]},{type:`error`,name:`NotReceiver`,inputs:[]},{type:`error`,name:`NotRegistrar`,inputs:[]},{type:`error`,name:`NotSettlement`,inputs:[]},{type:`error`,name:`OnlyAdmin`,inputs:[]},{type:`error`,name:`OnlyApprovedContracts`,inputs:[]},{type:`error`,name:`OnlyCreditGranter`,inputs:[]},{type:`error`,name:`OnlyLiquidationEngine`,inputs:[]},{type:`error`,name:`OnlyMarginBank`,inputs:[]},{type:`error`,name:`OnlyPerpPool`,inputs:[]},{type:`error`,name:`OnlyPrecompile`,inputs:[]},{type:`error`,name:`OnlyReactivityPrecompile`,inputs:[]},{type:`error`,name:`OnlySelf`,inputs:[]},{type:`error`,name:`OpeningOrderRequiresQuantity`,inputs:[]},{type:`error`,name:`OpenInterestCapExceeded`,inputs:[]},{type:`error`,name:`OperatorDisabled`,inputs:[]},{type:`error`,name:`OperatorIdReserved`,inputs:[]},{type:`error`,name:`OperatorNotActive`,inputs:[{name:`operatorId`,type:`uint32`}]},{type:`error`,name:`OracleNotAnswered`,inputs:[]},{type:`error`,name:`OracleNotInitialized`,inputs:[]},{type:`error`,name:`OraclePriceStale`,inputs:[]},{type:`error`,name:`OrderAlreadyExpired`,inputs:[]},{type:`error`,name:`OrderAlreadyLinked`,inputs:[]},{type:`error`,name:`OrderDoesNotExist`,inputs:[]},{type:`error`,name:`OrderExpiryBeyondMarket`,inputs:[]},{type:`error`,name:`OrderIdMismatch`,inputs:[]},{type:`error`,name:`OrderInfoIdMismatch`,inputs:[]},{type:`error`,name:`OutcomeCountMismatch`,inputs:[]},{type:`error`,name:`OutcomeTokenNotSet`,inputs:[]},{type:`error`,name:`OutcomeTransferFailed`,inputs:[]},{type:`error`,name:`OwnableInvalidOwner`,inputs:[{name:`owner`,type:`address`}]},{type:`error`,name:`OwnableUnauthorizedAccount`,inputs:[{name:`account`,type:`address`}]},{type:`error`,name:`PendingOwnerOnly`,inputs:[]},{type:`error`,name:`PermitTokenMismatch`,inputs:[]},{type:`error`,name:`PerpPoolAlreadyRegistered`,inputs:[]},{type:`error`,name:`PerpPoolHasActivePositions`,inputs:[]},{type:`error`,name:`PerpPoolNotFromFactory`,inputs:[]},{type:`error`,name:`PerpPoolNotRegistered`,inputs:[]},{type:`error`,name:`PerpPoolWrongMarginBank`,inputs:[]},{type:`error`,name:`PerUserOrderIndexInconsistency`,inputs:[]},{type:`error`,name:`PlacementRevertedWithoutReason`,inputs:[{name:`isBid`,type:`bool`},{name:`quoteIndex`,type:`uint256`}]},{type:`error`,name:`PlacementRevertedWithoutReason`,inputs:[{name:`isBid`,type:`bool`},{name:`userData`,type:`uint64`}]},{type:`error`,name:`PoolAlreadyReleased`,inputs:[]},{type:`error`,name:`PoolBooksNotEmpty`,inputs:[]},{type:`error`,name:`PoolIndexOutOfBounds`,inputs:[]},{type:`error`,name:`PoolNotApproved`,inputs:[]},{type:`error`,name:`PoolNotRegistered`,inputs:[{name:`legIndex`,type:`uint256`},{name:`pool`,type:`address`}]},{type:`error`,name:`PoolStateUnchanged`,inputs:[]},{type:`error`,name:`PostOnlyWouldCross`,inputs:[]},{type:`error`,name:`PriceNotAlignedToTickSize`,inputs:[]},{type:`error`,name:`PriceOutOfBounds`,inputs:[]},{type:`error`,name:`PriceOverflow`,inputs:[]},{type:`error`,name:`PriceTooLarge`,inputs:[]},{type:`error`,name:`QuantityBelowMinimum`,inputs:[]},{type:`error`,name:`QuantityBelowMinimum`,inputs:[{name:`quantity`,type:`uint256`},{name:`minimum`,type:`uint256`}]},{type:`error`,name:`QuantityNotAlignedToLotSize`,inputs:[]},{type:`error`,name:`QuestionNotFinal`,inputs:[]},{type:`error`,name:`QueueEmpty`,inputs:[]},{type:`error`,name:`RecoveryAmountInvalid`,inputs:[{name:`amount`,type:`uint256`},{name:`balance`,type:`uint256`}]},{type:`error`,name:`RecoveryDestinationZero`,inputs:[]},{type:`error`,name:`RecoveryTokenIsNative`,inputs:[]},{type:`error`,name:`RedeemAuthExpired`,inputs:[]},{type:`error`,name:`RedeemNonceUsed`,inputs:[]},{type:`error`,name:`RedeemSignatureInvalid`,inputs:[]},{type:`error`,name:`ReentrancyGuardReentrantCall`,inputs:[]},{type:`error`,name:`RefundFailed`,inputs:[]},{type:`error`,name:`RegistryNotApprovedByOwner`,inputs:[]},{type:`error`,name:`ReviveTooSoon`,inputs:[]},{type:`error`,name:`RouteEmpty`,inputs:[]},{type:`error`,name:`RouterBuilderCodesNotSupportedOnPool`,inputs:[{name:`legIndex`,type:`uint256`},{name:`pool`,type:`address`}]},{type:`error`,name:`RouterBuilderFeeExceedsPoolCap`,inputs:[{name:`legIndex`,type:`uint256`},{name:`pool`,type:`address`},{name:`builderFeeBpsTimes1k`,type:`uint96`},{name:`maxBuilderFeeBpsTimes1k`,type:`uint256`}]},{type:`error`,name:`RouterBuilderFeeWithoutBuilder`,inputs:[{name:`builderFeeBpsTimes1k`,type:`uint96`}]},{type:`error`,name:`RouterBuilderIsPool`,inputs:[{name:`legIndex`,type:`uint256`},{name:`pool`,type:`address`}]},{type:`error`,name:`RouterBuilderIsRouter`,inputs:[]},{type:`error`,name:`RouterBuilderNotApproved`,inputs:[{name:`legIndex`,type:`uint256`},{name:`pool`,type:`address`},{name:`builderFeeBpsTimes1k`,type:`uint96`},{name:`approved`,type:`uint256`}]},{type:`error`,name:`RouterInvalidLegPrice`,inputs:[{name:`legIndex`,type:`uint256`},{name:`priceLimit`,type:`uint256`},{name:`tickSize`,type:`uint256`}]},{type:`error`,name:`RouterMarketQuoteInvalidPriceLimit`,inputs:[{name:`legIndex`,type:`uint256`},{name:`providedPriceLimit`,type:`uint256`}]},{type:`error`,name:`RouterNotApprovedAsOperator`,inputs:[{name:`legIndex`,type:`uint256`},{name:`pool`,type:`address`}]},{type:`error`,name:`RouterQuantityBelowMinimum`,inputs:[{name:`legIndex`,type:`uint256`},{name:`quantity`,type:`uint256`},{name:`minQuantity`,type:`uint256`}]},{type:`error`,name:`RouterQuantityNotLotAligned`,inputs:[{name:`legIndex`,type:`uint256`},{name:`quantity`,type:`uint256`},{name:`lotSize`,type:`uint256`}]},{type:`error`,name:`RouterQuoteInputZero`,inputs:[]},{type:`error`,name:`RouterQuoteOutputZero`,inputs:[]},{type:`error`,name:`RouteTokenMismatch`,inputs:[{name:`legIndex`,type:`uint256`},{name:`expected`,type:`address`},{name:`actualBase`,type:`address`},{name:`actualQuote`,type:`address`}]},{type:`error`,name:`RouteTooLong`,inputs:[{name:`maxLegs`,type:`uint256`}]},{type:`error`,name:`SafeCastOverflowedIntDowncast`,inputs:[{name:`bits`,type:`uint8`},{name:`value`,type:`int256`}]},{type:`error`,name:`SafeCastOverflowedUintDowncast`,inputs:[{name:`bits`,type:`uint8`},{name:`value`,type:`uint256`}]},{type:`error`,name:`SafeERC20FailedOperation`,inputs:[{name:`token`,type:`address`}]},{type:`error`,name:`SelfMatchCancelTaker`,inputs:[]},{type:`error`,name:`SeriesAlreadyLive`,inputs:[]},{type:`error`,name:`SeriesIdOutOfRange`,inputs:[{name:`seriesId`,type:`uint32`}]},{type:`error`,name:`SettlementAlreadySet`,inputs:[]},{type:`error`,name:`SettlementNotSet`,inputs:[]},{type:`error`,name:`SettlementWindowOpen`,inputs:[]},{type:`error`,name:`SideHolderIndexOutOfBounds`,inputs:[]},{type:`error`,name:`StalePrice`,inputs:[]},{type:`error`,name:`SubscriptionAlreadyActive`,inputs:[]},{type:`error`,name:`SubscriptionStillActive`,inputs:[]},{type:`error`,name:`TakeoverPriceOutOfRange`,inputs:[]},{type:`error`,name:`TakeoverPriceOverflow`,inputs:[]},{type:`error`,name:`TakerFillWouldMintBadDebt`,inputs:[]},{type:`error`,name:`TierBalanceInsufficient`,inputs:[]},{type:`error`,name:`TimestampInPast`,inputs:[]},{type:`error`,name:`TokenZero`,inputs:[]},{type:`error`,name:`TooManyMarketsForQuestion`,inputs:[]},{type:`error`,name:`TooManyRestingOrders`,inputs:[]},{type:`error`,name:`TradingNotActive`,inputs:[]},{type:`error`,name:`TransferRecipientReserved`,inputs:[]},{type:`error`,name:`TransferSourceAndDestinationSame`,inputs:[]},{type:`error`,name:`TriggerTooCloseToEma`,inputs:[]},{type:`error`,name:`Unauthorized`,inputs:[]},{type:`error`,name:`UnderpaidScheduleFee`,inputs:[]},{type:`error`,name:`UnderpaidSchedulingCost`,inputs:[]},{type:`error`,name:`UnexpectedFillPair`,inputs:[{name:`takerKind`,type:`uint8`},{name:`makerKind`,type:`uint8`}]},{type:`error`,name:`UnexpectedNativeDeposit`,inputs:[]},{type:`error`,name:`UnknownFire`,inputs:[]},{type:`error`,name:`UnknownMarket`,inputs:[]},{type:`error`,name:`UnknownMarketType`,inputs:[{name:`marketType`,type:`bytes4`}]},{type:`error`,name:`UnknownOperator`,inputs:[]},{type:`error`,name:`UnknownOracleQuestion`,inputs:[]},{type:`error`,name:`UnknownSeries`,inputs:[]},{type:`error`,name:`UnknownSeriesSelector`,inputs:[{name:`selector`,type:`bytes4`}]},{type:`error`,name:`UnknownVenue`,inputs:[]},{type:`error`,name:`UnsponsoredSelector`,inputs:[{name:`selector`,type:`bytes4`}]},{type:`error`,name:`UnsubscribeFailed`,inputs:[]},{type:`error`,name:`UnsupportedFeeParamsVersion`,inputs:[{name:`version`,type:`uint8`}]},{type:`error`,name:`UseBinaryPlacement`,inputs:[]},{type:`error`,name:`UseDepositNative`,inputs:[]},{type:`error`,name:`UseFundNative`,inputs:[]},{type:`error`,name:`UUPSUnauthorizedCallContext`,inputs:[]},{type:`error`,name:`UUPSUnsupportedProxiableUUID`,inputs:[{name:`slot`,type:`bytes32`}]},{type:`error`,name:`VenueAuthExpired`,inputs:[]},{type:`error`,name:`VenueCreationDisabled`,inputs:[]},{type:`error`,name:`VenueFeeAboveHardCap`,inputs:[]},{type:`error`,name:`VenueIdRequired`,inputs:[]},{type:`error`,name:`VenueNonceUsed`,inputs:[]},{type:`error`,name:`VenuePolicyDenied`,inputs:[]},{type:`error`,name:`VenueSignerUnset`,inputs:[]},{type:`error`,name:`VoucherAccountLeverageLocked`,inputs:[]},{type:`error`,name:`VoucherLeverageCapNotSet`,inputs:[]},{type:`error`,name:`VoucherMarketNotAllowed`,inputs:[]},{type:`error`,name:`VwapOverflow`,inputs:[]},{type:`error`,name:`WithdrawalBelowCreditFloor`,inputs:[]},{type:`error`,name:`WithdrawalExceedsDeposit`,inputs:[{name:`operatorId`,type:`uint32`},{name:`requested`,type:`uint256`},{name:`available`,type:`uint256`}]},{type:`error`,name:`WithdrawalFailed`,inputs:[]},{type:`error`,name:`WithdrawFailed`,inputs:[]},{type:`error`,name:`WrongEmitter`,inputs:[]},{type:`error`,name:`WrongEvent`,inputs:[]},{type:`error`,name:`WrongReserveAttached`,inputs:[]},{type:`error`,name:`WrongStatus`,inputs:[{name:`expected`,type:`uint8`},{name:`actual`,type:`uint8`}]},{type:`error`,name:`ZeroAddress`,inputs:[]},{type:`error`,name:`ZeroAmount`,inputs:[]},{type:`error`,name:`ZeroCollateralFillsAllowed`,inputs:[]},{type:`error`,name:`ZeroDeposit`,inputs:[]},{type:`error`,name:`ZeroEntryPoint`,inputs:[]},{type:`error`,name:`ZeroImpl`,inputs:[]},{type:`error`,name:`ZeroModule`,inputs:[]},{type:`error`,name:`ZeroOrder`,inputs:[]},{type:`error`,name:`ZeroOrderIndex`,inputs:[]},{type:`error`,name:`ZeroOwner`,inputs:[]},{type:`error`,name:`ZeroPriority`,inputs:[]},{type:`error`,name:`ZeroQuoteFillsAllowed`,inputs:[]}];function $a(e){let t=new Set,n=e;for(let e=0;n!=null&&e<10&&!t.has(n);e+=1){t.add(n);let e=n;for(let t of[`data`,`raw`]){let n=e[t];if(me(n))return n;if(typeof n==`object`&&n){let e=n.data;if(me(e))return e}}n=e.cause??e.error}}function eo(e){let t=new Set,n=e;for(let e=0;n!=null&&e<10&&!t.has(n);e+=1){t.add(n);let e=n;for(let t of[`reason`,`shortMessage`,`message`]){let n=e[t];if(typeof n!=`string`||n.length===0)continue;let r=to(n);if(r.length>0&&r.toLowerCase()!==`execution reverted`)return r}n=e.cause??e.error}}function to(e){return e.replace(/^\s*(execution\s+)?reverted:?\s*/i,``).trim()}function no(e){if($a(e)!==void 0)return!0;let t=new Set,n=e;for(let e=0;n!=null&&e<10&&!t.has(n);e+=1){t.add(n);let e=n,r=typeof e.name==`string`?e.name:``;if(r===`ContractFunctionRevertedError`||r===`RawContractError`)return!0;for(let t of[`message`,`shortMessage`,`reason`]){let n=e[t];if(typeof n==`string`&&/revert/i.test(n))return!0}n=e.cause??e.error}return!1}function ro(e,t={}){if(e instanceof Zn)return t.address===void 0&&t.functionName===void 0?e:new Zn({errorName:e.errorName,args:e.args,reason:e.reason,data:e.data,address:e.address??t.address,functionName:e.functionName??t.functionName},{cause:e.cause});let n=$a(e);if(n!==void 0&&n!==`0x`)try{let r=ee({abi:Qa,data:n});return new Zn({errorName:r.errorName,args:r.args??[],data:n,address:t.address,functionName:t.functionName},{cause:e})}catch{}return new Zn({reason:eo(e),data:n,address:t.address,functionName:t.functionName},{cause:e})}function io(e,t,n={}){return e instanceof Zn||e instanceof Xn?e:no(e)?ro(e,n):new Xn(t,e?.shortMessage??e?.message??String(e),{cause:e})}var ao=4e3;function oo(e,t){let n=Se({chain:e,transport:p(t,{timeout:ao})});return{raw:n,decorated:so(n)}}function so(e){let t={};if(typeof e.readContract==`function`){let n=e.readContract.bind(e);t.readContract=async e=>{try{return await n(e)}catch(t){let{address:n,functionName:r}=e;throw io(t,`readContract ${r??`?`}`,{address:n,functionName:r})}}}if(typeof e.call==`function`){let n=e.call.bind(e);t.call=async e=>{try{return await n(e)}catch(t){throw io(t,`eth_call`,{address:e.to})}}}if(typeof e.multicall==`function`){let n=e.multicall.bind(e);t.multicall=async e=>{try{return await n(e)}catch(t){throw t instanceof T?t:io(t,`multicall`,{address:e.contracts?.[0]?.address})}}}return{...e,...t}}var co={id:0,name:``};function lo(e){if(!e)return{enabled:!1,log:()=>{},warn:()=>{},span:(e,t)=>t(co),annotate:()=>{},traced:(e,t)=>(...e)=>t(co,...e),tracedObject:(e,t)=>t};let t=1,n=t=>{try{e(t)}catch{}};function r(e,r,i,a){let o=t++;n({kind:`span`,phase:`start`,id:o,...i&&i.id!==0?{parentId:i.id}:{},name:e,...a?{data:a}:{}});let s=performance.now(),c=t=>n({kind:`span`,phase:`end`,id:o,name:e,durationMs:performance.now()-s,...t===void 0?{}:{error:t}});try{let t=r({id:o,name:e});return t instanceof Promise?t.then(e=>(c(),e),e=>{throw c(e??Error(`rejected`)),e}):(c(),t)}catch(e){throw c(e??Error(`thrown`)),e}}let i=(...e)=>{if(e.length===0)return;let[t]=e;return typeof t==`object`&&t?{params:t}:{args:e}},a=(e,t,n)=>(...i)=>r(e,e=>t(e,...i),void 0,n?.(...i));function o(e,t){let n=new Map;return new Proxy(t,{get(t,r,o){let s=Reflect.get(t,r,o);if(typeof r!=`string`||typeof s!=`function`)return s;let c=n.get(r);return c||(c=a(`${e}.${r}`,(e,...n)=>Reflect.apply(s,t,n),i),n.set(r,c)),c}})}return{enabled:!0,log:(e,t,r)=>n({kind:`log`,level:`debug`,scope:e,message:t,...r?{data:r}:{}}),warn:(e,t,r)=>n({kind:`log`,level:`warn`,scope:e,message:t,...r?{data:r}:{}}),span:r,annotate:(e,t)=>{e.id!==0&&n({kind:`span`,phase:`annotate`,id:e.id,name:e.name,data:t})},traced:a,tracedObject:o}}var uo=[{type:`event`,name:`OrderPlaced`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0},{name:`placedOrder`,type:`tuple`,indexed:!1,components:[{name:`orderId`,type:`uint128`},{name:`isBid`,type:`bool`},{name:`owner`,type:`address`},{name:`userData`,type:`uint64`},{name:`price`,type:`uint256`},{name:`fullQuantity`,type:`uint256`},{name:`quantityRemaining`,type:`uint256`},{name:`expireTimestampNs`,type:`uint64`}]}],anonymous:!1},{type:`event`,name:`OrderRested`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0}],anonymous:!1},{type:`event`,name:`OrderCancelled`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0}],anonymous:!1},{type:`event`,name:`OrderExpired`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0}],anonymous:!1},{type:`event`,name:`OrderReduced`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0},{name:`newQuantity`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`OrderFilled`,inputs:[{name:`takerOrderId`,type:`uint128`,indexed:!0},{name:`makerOrderId`,type:`uint128`,indexed:!0},{name:`quantityFilled`,type:`uint256`,indexed:!1},{name:`takerRemainingQuantity`,type:`uint256`,indexed:!1},{name:`makerRemainingQuantity`,type:`uint256`,indexed:!1},{name:`fillPrice`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`OrderCancelledSelfMatch`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0}],anonymous:!1},{type:`event`,name:`MakerOrderCancelledExceedsPosition`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0}],anonymous:!1}],fo=[{type:`event`,name:`MarkPriceUpdated`,inputs:[{name:`asset`,type:`address`,indexed:!0},{name:`markPrice`,type:`uint256`,indexed:!1},{name:`rawMidpoint`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`OrderBookParametersUpdated`,inputs:[{name:`newParameters`,type:`tuple`,indexed:!1,components:[{name:`tickSize`,type:`uint256`},{name:`minQuantity`,type:`uint256`},{name:`lotSize`,type:`uint256`}]}],anonymous:!1}],po=[{type:`event`,name:`FundingUpdated`,inputs:[{name:`fundingRate`,type:`int256`,indexed:!1},{name:`cumulativeFundingPerUnit`,type:`int256`,indexed:!1},{name:`indexPrice`,type:`uint256`,indexed:!1},{name:`intervalsSettled`,type:`uint64`,indexed:!1},{name:`markPrice`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`OpenInterestUpdated`,inputs:[{name:`openInterest`,type:`uint256`,indexed:!1}],anonymous:!1}],mo=[{type:`event`,name:`MarketCreated`,inputs:[{name:`marketId`,type:`bytes32`,indexed:!0},{name:`market`,type:`address`,indexed:!0},{name:`pool`,type:`address`,indexed:!0},{name:`yesId`,type:`uint256`,indexed:!1},{name:`noId`,type:`uint256`,indexed:!1},{name:`collateral`,type:`address`,indexed:!1},{name:`asset`,type:`string`,indexed:!1},{name:`strike`,type:`uint256`,indexed:!1},{name:`tradingStart`,type:`uint64`,indexed:!1},{name:`expiry`,type:`uint64`,indexed:!1},{name:`oracleQuestionId`,type:`uint256`,indexed:!1},{name:`question`,type:`string`,indexed:!1},{name:`intervalSec`,type:`uint64`,indexed:!1}],anonymous:!1}],ho=[{type:`event`,name:`MarketCreated`,inputs:[{name:`marketId`,type:`bytes32`,indexed:!0},{name:`market`,type:`address`,indexed:!0},{name:`pool`,type:`address`,indexed:!0},{name:`oracleQuestionId`,type:`uint256`,indexed:!1},{name:`operatorId`,type:`uint32`,indexed:!1},{name:`venueId`,type:`bytes32`,indexed:!1},{name:`creator`,type:`address`,indexed:!1},{name:`collateral`,type:`address`,indexed:!1},{name:`yesId`,type:`uint256`,indexed:!1},{name:`noId`,type:`uint256`,indexed:!1},{name:`nonce`,type:`uint64`,indexed:!1},{name:`outcomeSlotCount`,type:`uint8`,indexed:!1},{name:`marketType`,type:`uint8`,indexed:!1},{name:`tradingStart`,type:`uint64`,indexed:!1},{name:`expiry`,type:`uint64`,indexed:!1},{name:`voidPolicy`,type:`uint8`,indexed:!1},{name:`asset`,type:`string`,indexed:!1},{name:`strike`,type:`uint256`,indexed:!1},{name:`question`,type:`string`,indexed:!1},{name:`context`,type:`bytes`,indexed:!1}],anonymous:!1},{type:`event`,name:`MarketFinalized`,inputs:[{name:`marketId`,type:`bytes32`,indexed:!0},{name:`pool`,type:`address`,indexed:!0},{name:`marketKey`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`PoolReleased`,inputs:[{name:`marketId`,type:`bytes32`,indexed:!0},{name:`pool`,type:`address`,indexed:!0},{name:`creator`,type:`address`,indexed:!0}],anonymous:!1}],go=[{type:`event`,name:`BinaryOrderPlaced`,inputs:[{name:`orderId`,type:`uint128`,indexed:!0},{name:`kind`,type:`uint8`,indexed:!1}],anonymous:!1},{type:`event`,name:`PoolFinalized`,inputs:[{name:`marketNonce`,type:`uint64`,indexed:!0},{name:`backing`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`PoolRecycled`,inputs:[{name:`marketNonce`,type:`uint64`,indexed:!0},{name:`market`,type:`address`,indexed:!0}],anonymous:!1}],_o=[{type:`event`,name:`MarketFinalized`,inputs:[{name:`marketKey`,type:`uint256`,indexed:!0},{name:`pool`,type:`address`,indexed:!0},{name:`nonce`,type:`uint64`,indexed:!1},{name:`collateralToken`,type:`address`,indexed:!1},{name:`netBacking`,type:`uint256`,indexed:!1},{name:`voided`,type:`bool`,indexed:!1},{name:`winningOutcome`,type:`uint8`,indexed:!1}],anonymous:!1},{type:`event`,name:`SettlementFeeCharged`,inputs:[{name:`marketKey`,type:`uint256`,indexed:!0},{name:`feeRecipient`,type:`address`,indexed:!0},{name:`grossBacking`,type:`uint256`,indexed:!1},{name:`fee`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`Redeemed`,inputs:[{name:`marketKey`,type:`uint256`,indexed:!0},{name:`holder`,type:`address`,indexed:!0},{name:`to`,type:`address`,indexed:!0},{name:`outcomeIdx`,type:`uint8`,indexed:!1},{name:`amountBurned`,type:`uint256`,indexed:!1},{name:`collateralOut`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`PayoutOwed`,inputs:[{name:`owner`,type:`address`,indexed:!0},{name:`token`,type:`address`,indexed:!0},{name:`amount`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`OwedClaimed`,inputs:[{name:`owner`,type:`address`,indexed:!0},{name:`token`,type:`address`,indexed:!0},{name:`amount`,type:`uint256`,indexed:!1}],anonymous:!1}],vo=[{type:`event`,name:`StatusChanged`,inputs:[{name:`oldStatus`,type:`uint8`,indexed:!0},{name:`newStatus`,type:`uint8`,indexed:!0}],anonymous:!1},{type:`event`,name:`Resolved`,inputs:[{name:`payoutDenominator`,type:`uint32`,indexed:!1},{name:`payoutNumerators`,type:`uint256[]`,indexed:!1}],anonymous:!1},{type:`event`,name:`Voided`,inputs:[],anonymous:!1},{type:`event`,name:`SetMinted`,inputs:[{name:`payer`,type:`address`,indexed:!0},{name:`yesTo`,type:`address`,indexed:!0},{name:`noTo`,type:`address`,indexed:!0},{name:`amount`,type:`uint256`,indexed:!1}],anonymous:!1},{type:`event`,name:`SetBurned`,inputs:[{name:`holder`,type:`address`,indexed:!0},{name:`amount`,type:`uint256`,indexed:!1}],anonymous:!1}],K=[...uo,...fo,...po,...mo,...ho,...vo,...go,..._o];function yo(){return BigInt(Math.floor(Date.now()/1e3)+15768e5)*1000000000n}var bo=`0x0000000000000000000000000000000000000000`,xo={BUY_YES:0,SELL_YES:1,BUY_NO:2,SELL_NO:3};function So(e,t){return{to:e.address,data:te({abi:e.abi,functionName:e.functionName,args:e.args}),value:e.value??0n,description:t}}function Co(e,t,n){return So({address:e,abi:On,functionName:`approve`,args:[t,f],gas:0n},n)}var wo=Xa(uo),q=new Map(uo.map(e=>[n(e),e]));function J(e,t){let n=t.toLowerCase(),r=[];for(let t of e.logs){if(t.address.toLowerCase()!==n)continue;let e=q.get(t.topics[0]);if(e!==void 0)try{r.push(w({abi:[e],data:t.data,topics:t.topics}))}catch{continue}}return r}function To(e){return{takerOrderId:e.takerOrderId,makerOrderId:e.makerOrderId,quantityFilled:e.quantityFilled,takerRemainingQuantity:e.takerRemainingQuantity,makerRemainingQuantity:e.makerRemainingQuantity,fillPrice:e.fillPrice}}function Eo({hash:e,receipt:t},{pool:n,amendmentCount:r}){let i=[],a=[];for(let{eventName:e,args:r}of J(t,n))e===`OrderPlaced`?i.push(r.orderId):e===`OrderFilled`&&a.push(To(r));let o=Array(r).fill(0n);for(let e=0;e<r;e++){let t=i[e];if(t===void 0)break;o[e]=t}return{hash:e,receipt:t,newOrderIds:o,fills:a}}function Do({hash:e,receipt:t},{pool:n}){let r=0n,i=[];for(let{eventName:e,args:a}of J(t,n))e===`OrderPlaced`&&r===0n?r=a.orderId:e===`OrderFilled`&&i.push(To(a));return{hash:e,receipt:t,newOrderId:r,fills:i}}function Oo(e,t){let n=t.dbg??lo(),r=e.decimals??6,i=10n**BigInt(r),a=e.gas??10000000n,{chain:o}=t.getConfig(),s=t.getConfig().fees??er,c=()=>t.getConfig().addresses??{},{localAccount:u,walletClient:d,from:p,fromAddress:m}=nr(e,`createTrader`,{nonceManager:l}),h=()=>d??I(`no external wallet client after signer validation`),g=e.publicClient?so(e.publicClient):t.getClient(),_=u?.nonceManager??l,v=e=>ar(g,e);async function y(e){return{hash:e,receipt:await v(e)}}async function b(e,t,n,r,i){let a=await _.consume({address:m,chainId:o.id,client:g});return e.signTransaction({type:`eip1559`,chainId:o.id,to:t,data:n,gas:r,nonce:a,maxFeePerGas:s.maxFeePerGas,maxPriorityFeePerGas:s.maxPriorityFeePerGas,...i===void 0?{}:{value:i}})}let x=!0;async function S(e,t){let n={address:t?.address,functionName:t?.functionName};return ir(g,e,{label:`@somnia-chain/markets-sdk`,retryCount:0,isRealtimeSupported:()=>x,onRealtimeUnsupported:()=>{x=!1},onRejected:()=>_.reset({address:m,chainId:o.id}),decorateError:(e,t)=>io(e,t,n),waitReceipt:v})}async function C(e,t){let n={address:t.address,functionName:t.functionName};try{await g.call({to:t.address,data:te({abi:t.abi,functionName:t.functionName,args:t.args}),account:p,blockNumber:e.blockNumber,...t.value===void 0?{}:{value:t.value}})}catch(e){let t=ro(e,n);if(t.errorName!==void 0||t.reason!==void 0)return t}return new Zn({...n,reason:`transaction ${e.transactionHash} reverted (no revert data recoverable)`})}let T=n.traced(`trade.execute`,async(e,t)=>{if(u){let r=te({abi:t.abi,functionName:t.functionName,args:t.args}),i=await n.span(`trade.signCall`,()=>b(u,t.address,r,t.gas??a,t.value),e),o=await n.span(`trade.broadcast`,()=>S(i,t),e);if(n.annotate(e,{hash:o.transactionHash}),o.status===`reverted`)throw await C(o,t);return{hash:o.transactionHash,receipt:o}}let r=await(async()=>{try{return await h().writeContract({address:t.address,abi:t.abi,functionName:t.functionName,args:t.args,account:p,chain:o,gas:t.gas??a,maxFeePerGas:s.maxFeePerGas,maxPriorityFeePerGas:s.maxPriorityFeePerGas,...t.value===void 0?{}:{value:t.value}})}catch(e){throw io(e,`writeContract`,{address:t.address,functionName:t.functionName})}})();n.annotate(e,{hash:r});let i=await n.span(`trade.confirm`,()=>y(r),e);if(i.receipt.status===`reverted`)throw await C(i.receipt,t);return i},e=>({functionName:e.functionName,address:e.address}));function ee({hash:e,receipt:t}){let n,r=[];for(let e of t.logs){if(!Za(wo,e.topics))continue;let t;try{t=w({abi:uo,data:e.data,topics:e.topics})}catch{continue}t.eventName===`OrderPlaced`?n=t.args.orderId:t.eventName===`OrderFilled`&&r.push({takerOrderId:t.args.takerOrderId,makerOrderId:t.args.makerOrderId,quantityFilled:t.args.quantityFilled,takerRemainingQuantity:t.args.takerRemainingQuantity,makerRemainingQuantity:t.args.makerRemainingQuantity,fillPrice:t.args.fillPrice})}return{hash:e,receipt:t,orderId:n,fills:r}}async function ne(e){return ee(await T(e))}let E=new Map;async function re(e,t){let n={address:e,abi:dr},r=t??await g.readContract({...n,functionName:`marketNonce`}),i=`${e.toLowerCase()}:${r}`,a=E.get(i);if(a)return a;let[o,s]=await Promise.all([g.readContract({...n,functionName:`outcomeToken`}),g.readContract({...n,functionName:`collateralToken`})]),c={outcomeToken:o,yesId:yi(e,r,0),noId:yi(e,r,1),collateral:s};return E.set(i,c),c}async function ie(e){if(e.outcomeToken&&e.yesId!==void 0&&e.noId!==void 0&&e.collateral)return{outcomeToken:e.outcomeToken,yesId:e.yesId,noId:e.noId,collateral:e.collateral};let t=await re(e.pool);return{outcomeToken:e.outcomeToken??t.outcomeToken,yesId:e.yesId??t.yesId,noId:e.noId??t.noId,collateral:e.collateral??t.collateral}}async function D(e){return await g.readContract({address:e,abi:ur,functionName:`marketExpiryNs`})}function ae(e,{outcomeToken:t,yesId:n,noId:r,collateral:a}){switch(e.side){case`BUY_YES`:return{kind:`erc20`,token:a,amount:(e.quantity*e.price+i-1n)/i};case`BUY_NO`:return{kind:`erc20`,token:a,amount:(e.quantity*(i-e.price)+i-1n)/i};case`SELL_YES`:return{kind:`erc6909`,outcomeToken:t,id:n,amount:e.quantity};case`SELL_NO`:return{kind:`erc6909`,outcomeToken:t,id:r,amount:e.quantity}}}let oe=new Set,se=(e,t)=>`${e.toLowerCase()}:${t.toLowerCase()}`;async function ce(e,t,n,r){if(n===0n)return;let i=se(e,t);if(!oe.has(i)){if(await g.readContract({address:e,abi:On,functionName:`allowance`,args:[m,t]})>=n){oe.add(i);return}await T({address:e,abi:On,functionName:`approve`,args:[t,f],gas:r}),oe.add(i)}}let O=new Set;async function k(e,t,n){let r=se(e,t);if(!O.has(r)){if(await g.readContract({address:e,abi:hr,functionName:`isOperator`,args:[m,t]})){O.add(r);return}await T({address:e,abi:hr,functionName:`setOperator`,args:[t,!0],gas:n}),O.add(r)}}function le(e,t){e&&t?(oe.delete(se(e,t)),O.delete(se(e,t))):(oe.clear(),O.clear())}async function ue(e,t){return t??(await re(e)).collateral}let de=new Map,fe=new Map;async function pe(e){if(e.marginBank)return e.marginBank;if(!e.pool)throw new P(`pass marginBank or pool (PerpMarket.marginBank has it)`);let t=e.pool.toLowerCase(),n=de.get(t);if(n)return n;let r=await g.readContract({address:e.pool,abi:Mn,functionName:`marginBank`});return de.set(t,r),r}async function me(e,t){if(t)return t;let n=e.toLowerCase(),r=fe.get(n);if(r)return r;let i=await g.readContract({address:e,abi:L,functionName:`getSystemConfig`});return fe.set(n,i.collateralToken),i.collateralToken}function he(e){let t=e??c().collateralRouter;if(!t||t===`0x0000000000000000000000000000000000000000`)throw new F(`a deployed CollateralRouter`,`this environment`);return t}function ge(e){let t=e??c().binaryModule;if(!t||t===`0x0000000000000000000000000000000000000000`)throw new F(`addresses.binaryModule`,`this write`);return t}function _e(e){let t=e??c().binarySettlement;if(!t||t===`0x0000000000000000000000000000000000000000`)throw new F(`addresses.binarySettlement`,`this settlement call (absent on pre-v2 deploys)`);return t}function ve(e,t=`an operator grant`){let n=e??c().operatorPermissionsRegistry;if(!n||n===`0x0000000000000000000000000000000000000000`)throw new F(`operatorRegistry or addresses.operatorPermissionsRegistry`,t);return n}let ye;async function be(e){return ye||(ye=await g.readContract({address:e,abi:fr,functionName:`outcomeToken`}),ye)}return{execute:T,executeOrder:ne,poolTokens:re,tokens:ie,marketExpiryNs:D,escrow:ae,approveIfNeeded:ce,ensureOperator:k,clearApprovalCache:le,poolCollateral:ue,resolveMarginBank:pe,bankCollateral:me,resolveRouter:he,resolveModule:ge,resolveSettlement:_e,resolveOperatorRegistry:ve,settlementOutcomeToken:be,publicClient:g,addresses:c,from:p,fromAddress:m,localAccount:u,wallet:h,chain:o,defaultGas:a,oneBase:i,decimals:r,dbg:n}}async function ko(e,t){if(t.amount<=0n)throw new P(`amount must be > 0`);return e.execute({address:t.vault,abi:Pn,functionName:`withdraw`,args:[t.token,t.amount],gas:t.gas??e.defaultGas})}async function Ao(e,t){let n=t.gas??e.defaultGas,r=e.resolveModule(t.module),i;if(t.outcomeIdx!==void 0)i=t.outcomeIdx;else if(t.market){let n=await e.publicClient.readContract({address:t.market,abi:Wn,functionName:`payoutNumerators`}),r=0;for(let e=1;e<n.length;e++)(n[e]??0n)>(n[r]??0n)&&(r=e);i=r}else throw new P(`redeem needs outcomeIdx or market to look it up`);if(t.autoApprove!==!1){let i=t.outcomeToken??(t.market?await e.publicClient.readContract({address:t.market,abi:Wn,functionName:`outcomeToken`}):await e.settlementOutcomeToken(e.resolveSettlement()));await e.ensureOperator(i,r,n)}return e.execute({address:r,abi:Sr,functionName:`redeem`,args:[t.operatorId??0,t.venueId??`0x0000000000000000000000000000000000000000000000000000000000000000`,t.marketId,i,t.amount],gas:n})}async function jo(e,t){let n=e.resolveModule(t.module),r=t.owner??e.fromAddress,i=t.operatorId??0,a=t.venueId??`0x0000000000000000000000000000000000000000000000000000000000000000`,o={name:`SomniaMarkets`,version:`1`,chainId:e.chain.id,verifyingContract:n},s={RedeemAuthorization:[{name:`owner`,type:`address`},{name:`operatorId`,type:`uint32`},{name:`venueId`,type:`bytes32`},{name:`marketId`,type:`bytes32`},{name:`outcomeIdx`,type:`uint8`},{name:`amount`,type:`uint256`},{name:`nonce`,type:`uint256`},{name:`deadline`,type:`uint256`}]},c={owner:r,operatorId:i,venueId:a,marketId:t.marketId,outcomeIdx:t.outcomeIdx,amount:t.amount,nonce:t.nonce,deadline:t.deadline},l=e.localAccount?await e.localAccount.signTypedData({domain:o,types:s,primaryType:`RedeemAuthorization`,message:c}):await e.wallet().signTypedData({account:e.from,domain:o,types:s,primaryType:`RedeemAuthorization`,message:c});return{owner:r,operatorId:i,venueId:a,marketId:t.marketId,outcomeIdx:t.outcomeIdx,amount:t.amount,nonce:t.nonce,deadline:t.deadline,signature:l}}async function Mo(e,t){let n=e.resolveModule(t.module),r=t.authorization;return e.execute({address:n,abi:Sr,functionName:`redeemFor`,args:[r.owner,r.nonce,r.deadline,r.signature,r.operatorId,r.venueId,r.marketId,r.outcomeIdx,r.amount],gas:t.gas??e.defaultGas})}async function No(e,t){let n=t.gas??e.defaultGas,r=e.resolveModule(t.module);if(t.entries.length===0)throw new P(`redeemMany needs at least one entry`);if(t.autoApprove!==!1){let i=t.outcomeToken??await e.settlementOutcomeToken(e.resolveSettlement());await e.ensureOperator(i,r,n)}let i=t.entries.map(e=>e.marketId),a=t.entries.map(e=>e.outcomeIdx),o=t.entries.map(e=>e.amount);return e.execute({address:r,abi:Sr,functionName:`redeemMany`,args:[t.operatorId??0,t.venueId??`0x0000000000000000000000000000000000000000000000000000000000000000`,i,a,o],gas:n})}async function Po(e,t){let n=t.gas??e.defaultGas,r=e.resolveSettlement(t.settlement),i=t.to??e.fromAddress;if(t.autoApprove!==!1){let i=t.outcomeToken??await e.settlementOutcomeToken(r);await e.ensureOperator(i,r,n)}return e.execute({address:r,abi:fr,functionName:`redeem`,args:[t.outcomeId,t.amount,i],gas:n})}async function Fo(e,t){return e.execute({address:e.resolveSettlement(t.settlement),abi:fr,functionName:`claimOwed`,args:[t.token],gas:t.gas??e.defaultGas})}async function Io(e,t){return e.execute({address:e.resolveModule(t.module),abi:Sr,functionName:`finalizeMarket`,args:[t.marketId],gas:t.gas??e.defaultGas})}async function Lo(e,t){return e.execute({address:e.resolveModule(t.module),abi:Sr,functionName:`syncSettlement`,args:[t.marketId],gas:t.gas??e.defaultGas})}async function Ro(e,t){return e.execute({address:e.resolveModule(t.module),abi:Sr,functionName:`releasePool`,args:[t.marketId],gas:t.gas??e.defaultGas})}async function zo(e,t){return e.execute({address:e.resolveModule(t.module),abi:Sr,functionName:`pokeOracle`,args:[t.oracleQuestionId],gas:t.gas??e.defaultGas})}async function Bo(e,t){let n=e.publicClient,r=await Ga(t.marketId,{module:e.resolveModule(t.module)},n);if(!t.skipPreflight){if(r.isResolved||r.isVoided)throw new P(`voidExpired: market ${t.marketId} is already ${r.isVoided?`voided`:`resolved`} — nothing to void`);let[e,i]=await Promise.all([n.readContract({address:r.marketAddress,abi:pr,functionName:`settlementWindow`}),n.getBlock()]),a=r.expiry+e,o=i.timestamp;if(o<a)throw new P(`voidExpired: market ${t.marketId} is still inside its settlement window — callable at unix ${a} (${new Date(Number(a)*1e3).toISOString()}), ${a-o}s away by the chain's clock (block ts ${o}). Try pokeOracle first.`)}return e.execute({address:r.marketAddress,abi:sr,functionName:`voidExpired`,args:[],gas:t.gas??e.defaultGas})}async function Vo(e,t){let n=e.resolveRouter(t.router);return e.execute({address:n,abi:Gn,functionName:`redeemNative`,args:[t.operatorId,t.venueId,t.marketId,t.outcomeIdx,t.amount],gas:t.gas??e.defaultGas})}async function Ho(e,t){let n=await R(Uo,{id:e.toLowerCase()},t),r=n.MarketReferenceLink[0]??null,i=await R(Wo,{closingQid:n.Market_by_pk?.oracleQuestionId??``,openingQid:r?.oracleQuestionId??``},t),a=i.closing,o=i.opening;return{events:n.MarketResolutionEvent,reference:r,closingAnswer:a,openingAnswer:o,oracleAnswer:a}}var Uo=B(`
  query MarketResolution($id: String!) {
         MarketResolutionEvent(where: {market_id: {_eq: $id}}, order_by: {timestamp: asc}) {
           id market: market_id kind winningOutcome: outcomeIdx payoutNumerators payoutDenominator voided blockNumber timestamp txHash
         }
         MarketReferenceLink(where: {market_id: {_eq: $id}}, limit: 1) {
           id market: market_id oracleQuestionId: referenceQuestionId pending
         }
         Market_by_pk(id: $id) { oracleQuestionId }
       }
`),Wo=B(`
  query OracleAnswers($closingQid: String!, $openingQid: String!) {
         closing: OracleAnswer_by_pk(id: $closingQid) { oracleQuestionId numericValue outcomeLabel voidReason resolvedAt txHash }
         opening: OracleAnswer_by_pk(id: $openingQid) { oracleQuestionId numericValue outcomeLabel voidReason resolvedAt txHash }
       }
`);B(`
  fragment PerpPortfolioMarketFields on Market {
    poolAddress
    baseSymbol
    quoteSymbol
    baseDecimals
    quoteDecimals
    tickSize
    lotSize
    minQuantity
    lastPrice
    marginBank
    initialMarginBps
    fundingRate
    indexPrice
    stopRegistry
  }
`);async function Go(e,t={},n){let r=e.toLowerCase(),i={market:{marketType:{_eq:`PERP`}},_or:[{maker:{_eq:r}},{taker:{_eq:r}}]};t.since!=null&&(i.timestamp={_gte:t.since});let a=await R(Ko,{acct:r,fillWhere:i,ordersLimit:t.ordersLimit??200,tradesLimit:t.tradesLimit??50},n),o=Ir(a.PerpFill.map(e=>{let t=(e.maker??``).toLowerCase()===r,n=e.takerIsBid??!1;return{id:e.id,fillPrice:e.fillPrice,quantity:e.quantity,quoteQuantity:e.quoteQuantity,timestamp:e.timestamp,txHash:e.txHash,isBid:t?!n:n,asMaker:t,counterparty:t?e.taker??null:e.maker??null,market:e.market}}));return{account:r,openOrders:Ir(a.PerpOrder),trades:o}}var Ko=B(`
  query PerpPortfolio(
    $acct: String!
    $fillWhere: Fill_bool_exp!
    $ordersLimit: Int
    $tradesLimit: Int
  ) {
    PerpOrder: Order(
      where: {
        owner: { _eq: $acct }
        status: { _eq: "Open" }
        market: { marketType: { _eq: "PERP" } }
      }
      order_by: { placedAtTimestamp: desc }
      limit: $ordersLimit
    ) {
      id
      orderId
      isBid
      price
      quantityRemaining
      filledQuantity
      fullQuantity
      placedAtTimestamp
      placedTxHash
      market {
        ...PerpPortfolioMarketFields
      }
    }
    PerpFill: Fill(where: $fillWhere, order_by: { timestamp: desc }, limit: $tradesLimit) {
      id
      fillPrice
      quantity
      quoteQuantity
      timestamp
      txHash
      maker
      taker
      takerIsBid
      market {
        ...PerpPortfolioMarketFields
      }
    }
  }
`),qo=B(`
  query PerpOrderHistory($where: Order_bool_exp!, $orderBy: [Order_order_by!], $limit: Int, $offset: Int) {
    Order(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
      id
      orderId
      isBid
      price
      quantityRemaining
      filledQuantity
      fullQuantity
      status
      rested
      expireTimestampNs
      placedAtTimestamp
      placedTxHash
      lastUpdatedAtTimestamp
      market {
        ...PerpPortfolioMarketFields
      }
    }
  }
`);async function Jo(e,t={},n){let r={owner:{_eq:e.toLowerCase()},market:{marketType:{_eq:`PERP`}}},i=(t.status??[]).filter(e=>e!==`Open`);return r.status=i.length>0?{_in:i}:{_neq:`Open`},t.pool!=null&&(r.market={marketType:{_eq:`PERP`},poolAddress:{_eq:t.pool.toLowerCase()}}),Ir((await R(qo,{where:r,orderBy:t.orderBy===`placed`?[{placedAtTimestamp:`desc`},{id:`desc`}]:[{lastUpdatedAtTimestamp:`desc`},{id:`desc`}],limit:t.limit??100,offset:t.offset??0},n)).Order)}async function Yo(e,t={},n){let r={account:{_eq:e.toLowerCase()}};return t.pool!=null&&(r.pool={_eq:t.pool.toLowerCase()}),(await R(rs,{where:r,limit:t.limit??50,offset:t.offset??0},n)).FundingPayment}async function Xo(e,t={},n){return(await R(is,{account:e.toLowerCase(),limit:t.limit??50,offset:t.offset??0},n)).MarginEvent}async function Zo(e={},t){let n={};return e.account!=null&&(n.account={_eq:e.account.toLowerCase()}),e.pool!=null&&(n.pool={_eq:e.pool.toLowerCase()}),(await R(as,{where:n,limit:e.limit??50,offset:e.offset??0},t)).LiquidationEvent}async function Qo(e,t={},n){let r={};t.from!=null&&(r._gte=t.from.toString()),t.to!=null&&(r._lt=t.to.toString());let i={pool:{_eq:e.toLowerCase()}};return Object.keys(r).length>0&&(i.timestamp=r),(await R(os,{where:i,orderBy:[{timestamp:t.order??`desc`}],limit:t.limit??100,offset:t.offset??0},n)).FundingRateUpdate}async function $o(e,t,n={},r){let i={};n.from!=null&&(i._gte=n.from.toString()),n.to!=null&&(i._lt=n.to.toString());let a={pool:{_eq:e.toLowerCase()},intervalSeconds:{_eq:t}};return Object.keys(i).length>0&&(a.bucketStart=i),(await R(ss,{where:a,limit:n.limit??500,offset:n.offset??0},r)).FundingRateCandle}async function es(e,t={},n){return Qo(e,t,n)}async function ts(e={},t){let n={};return e.account!=null&&(n.account={_eq:e.account.toLowerCase()}),e.pool!=null&&(n.pool={_eq:e.pool.toLowerCase()}),e.builder!=null&&(n.builder={_eq:e.builder.toLowerCase()}),e.kind!=null&&(n.kind={_eq:e.kind}),(await R(cs,{where:n,limit:e.limit??50,offset:e.offset??0},t)).PerpFeeRecord}async function ns(e,t={},n){return(await R(ls,{pool:e.toLowerCase(),limit:t.limit??100,offset:t.offset??0},n)).OpenInterestSnapshot}var rs=B(`
  query FundingPayments($where: FundingPayment_bool_exp!, $limit: Int, $offset: Int) {
         FundingPayment(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
           id account pool amount timestamp txHash
         }
       }
`),is=B(`
  query MarginEvents($account: String!, $limit: Int, $offset: Int) {
         MarginEvent(where: {account: {_eq: $account}}, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
           id account kind pool amount granter timestamp txHash
         }
       }
`),as=B(`
  query Liquidations($where: LiquidationEvent_bool_exp!, $limit: Int, $offset: Int) {
         LiquidationEvent(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
           id account pool kind size price counterparty penalty
           badDebt insuranceCovered deficit coverageDeclined collateralAmount equity
           positionsProcessed stageReached marginStatusBefore marginStatusAfter
           timestamp blockNumber txHash
         }
       }
`),os=B(`
  query FundingRateHistory($where: FundingRateUpdate_bool_exp!, $orderBy: [FundingRateUpdate_order_by!], $limit: Int, $offset: Int) {
         FundingRateUpdate(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
           id pool fundingRate cumulativeFundingPerUnit indexPrice markPrice
           intervalsSettled intervalsAccrued fundingWindowSec fundingIntervalSec
           spanStart spanEnd anchorResynced timestamp blockNumber txHash
         }
       }
`),ss=B(`
  query FundingRateCandles($where: FundingRateCandle_bool_exp!, $limit: Int, $offset: Int) {
         FundingRateCandle(where: $where, order_by: {bucketStart: desc}, limit: $limit, offset: $offset) {
           id pool intervalSeconds bucketStart
           avgFundingRate8h minFundingRate8h maxFundingRate8h coverage
           cumulativeFundingStart cumulativeFundingEnd
           fundingWindowSec fundingIntervalSec paramsChangedInBucket
           indexPriceEnd openInterestEnd updateCount
         }
       }
`),cs=B(`
  query PerpFees($where: PerpFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
         PerpFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
           id account pool amount isRebate kind insurancePortion tier fillNotional builder timestamp txHash
         }
       }
`),ls=B(`
  query OpenInterestHistory($pool: String!, $limit: Int, $offset: Int) {
         OpenInterestSnapshot(where: {pool: {_eq: $pool}}, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
           id pool openInterest timestamp blockNumber
         }
       }
`);function us(e){return e.markPriceOk&&e.markPrice>0n?{price:e.markPrice,fromIndex:!1}:{price:e.indexPrice,fromIndex:!0}}var ds=[`tryGetMarkPrice`,`getIndexPrice`,`getCurrentFundingRate`,`getCumulativeFundingPerUnit`,`getProjectedCumulativeFundingPerUnit`,`getOpenInterest`,`getFundingParameters`,`getLastFundingUpdateTimestampNs`,`getEmaPremium`];async function fs(e,t){let n={address:e,abi:_r},r=t,i=await r.getBlockNumber(),a=()=>Promise.all(ds.map(e=>r.readContract({...n,functionName:e,blockNumber:i}))),o;if(typeof r.multicall==`function`&&r.chain?.contracts?.multicall3)try{o=await r.multicall({contracts:ds.map(e=>({...n,functionName:e})),allowFailure:!1,blockNumber:i})}catch(e){if(!(e instanceof T))throw e;o=await a()}else o=await a();if(o.length!==ds.length)throw Error(`getPerpState(${e}): expected ${ds.length} reads, got ${o.length}`);let[[s,c],[l,u],d,f,p,m,h,g,_]=o,v=Number(h.fundingCalculationWindowSec),y=Number(h.fundingSettlementIntervalSec),b=BigInt(g)/1000000000n;return{markPrice:c,markPriceOk:s,indexPrice:l,indexUpdatedAt:u,fundingRate:d,cumulativeFundingPerUnit:f,projectedCumulativeFundingPerUnit:p,openInterest:m,fundingWindowSec:v,fundingIntervalSec:y,lastFundingUpdateAt:b,nextFundingAt:b+BigInt(y),emaPremium:_}}async function ps(e,t){let n=await t.readContract({address:e.marginBank,abi:L,functionName:`getPosition`,args:[e.account,e.pool]});return{size:n.size,avgEntryPrice:n.avgEntryPrice,entryFundingIndex:n.entryFundingIndex,lastUpdatedTimestampNs:n.lastUpdatedTimestampNs}}var ms=B(`
  query PerpPositions($where: PerpPosition_bool_exp!, $limit: Int, $offset: Int) {
    PerpPosition(where: $where, order_by: { updatedAt: desc }, limit: $limit, offset: $offset) {
      id
      pool
      account
      size
      isLong
      entryPriceX18
      realizedPnl
      updatedAt
      updatedAtBlock
    }
  }
`);async function hs(e,t={},n){let r={account:{_eq:e.toLowerCase()}};return t.pool!=null&&(r.pool={_eq:t.pool.toLowerCase()}),t.includeFlat!==!0&&(r.size={_gt:`0`}),(await R(ms,{where:r,limit:t.limit??100,offset:t.offset??0},n)).PerpPosition.map(e=>({id:e.id,pool:e.pool,account:e.account,size:e.isLong?e.size:(-BigInt(e.size)).toString(),avgEntryPrice:e.entryPriceX18??null,lastUpdateRealizedPnl:e.realizedPnl??null,updatedAt:e.updatedAt,updatedAtBlock:e.updatedAtBlock??null}))}async function gs(e,t){return e.execute({address:t.pool,abi:Mn,functionName:`updateFunding`,args:[],gas:t.gas??e.defaultGas})}async function _s(e,t){return e.execute({address:t.market,abi:sr,functionName:`poke`,args:[],gas:t.gas??e.defaultGas})}var vs=1000000000000000000n,ys=28800;function bs(e,t,n){return Ss(t),e*BigInt(Math.trunc(n))/BigInt(Math.trunc(t))}function xs(e,t){return bs(e,t,ys)}function Ss(e){if(!Number.isFinite(e)||e<=0)throw RangeError(`fundingWindowSec must be positive, got ${e} — it is the rate's denominator and cannot be defaulted`)}var Cs=[`Healthy`,`MarginCall`,`PartialLiquidation`,`CloseOut`];async function ws(e,t,n){let r={address:e,abi:L},i=n,[a,o,s,c]=await Promise.all([i.readContract({...r,functionName:`getAccountState`,args:[t]}),i.readContract({...r,functionName:`getWithdrawableCollateral`,args:[t]}),i.readContract({...r,functionName:`getAccountHealth`,args:[t]}),i.readContract({...r,functionName:`getMarginStatus`,args:[t]})]),l=a,[u,d,f,p]=s;return{unlockedCollateralBalance:l.unlockedCollateralBalance,lockedCollateral:l.lockedCollateral,activePerpPools:[...l.activePerpPools],equity:u,withdrawable:o,imReq:d,mmReq:f,cmReq:p,marginStatus:Cs[Number(c)]??`Healthy`}}async function Ts(e,t,n){let r={address:e,abi:L},[i,a]=await Promise.all([n.readContract({...r,functionName:`getAccountHealth`,args:[t]}),n.readContract({...r,functionName:`getMarginStatus`,args:[t]})]),[o,s,c,l]=i;return{equity:o,imReq:s,mmReq:c,cmReq:l,marginStatus:Cs[Number(a)]??`Healthy`}}async function Es(e,t){let n=await t.readContract({address:e,abi:_r,functionName:`getPerpPoolParameters`});return{initialMarginBps:n.initialMarginBps,maintenanceMarginBps:n.maintenanceMarginBps,closeOutMarginBps:n.closeOutMarginBps,maxOpenInterest:n.maxOpenInterest,maxPositionSize:n.maxPositionSize,takerFeeBpsTimes1k:n.takerFeeBpsTimes1k,makerFeeBpsTimes1k:n.makerFeeBpsTimes1k,insuranceFundShareBps:n.insuranceFundShareBps}}async function Ds(e,t){let[n,r]=await t.readContract({address:e,abi:_r,functionName:`tryGetHealthSnapshot`});return n?{priceable:!0,oneBase:r.oneBase,markPrice:r.markPrice,projectedCumulativeFunding:r.projectedCumulativeFunding,effectiveImfBps:r.effectiveIMFBps,maintenanceMarginBps:r.maintenanceMarginBps,closeOutMarginBps:r.closeOutMarginBps}:{priceable:!1}}async function Os(e,t){return t.readContract({address:e,abi:_r,functionName:`getEffectiveIMF`})}var ks=10000n,As=10000000n;function js(e,t){return e===0n?0n:(e-1n)/t+1n}function Ms(e,t){let n=e/t;return e%t!==0n&&e<0n!=t<0n?n-1n:n}function Ns(e,t){let n=e/t;return e%t!==0n&&e<0n==t<0n?n+1n:n}function Ps(e){return e<0n?-e:e}function Fs(e){if(e.size===0n)return null;let t=e.size>0n,n=t?ks-e.maintenanceMarginBps:ks+e.maintenanceMarginBps;if(n===0n)return null;let r=Ms((e.equity-e.mmReq)*e.oneBase*ks,Ps(e.size)*n),i=t?e.markPrice-r:e.markPrice+r;return i>0n?i:0n}async function Is(e,t){let n=await t.getBlockNumber(),r={address:e.marginBank,abi:L,blockNumber:n},[i,a,o]=await Promise.all([t.readContract({...r,functionName:`getPosition`,args:[e.account,e.pool]}),t.readContract({address:e.pool,abi:_r,functionName:`tryGetHealthSnapshot`,blockNumber:n}),t.readContract({...r,functionName:`getAccountHealth`,args:[e.account]})]);if(i.size===0n)return null;let[s,c]=a;s||I(`a non-flat position's pool cannot be unpriceable once getAccountHealth has resolved`);let[l,,u]=o;return Fs({equity:l,mmReq:u,size:i.size,markPrice:c.markPrice,maintenanceMarginBps:c.maintenanceMarginBps,oneBase:c.oneBase})}async function Ls(e,t){let n=await t.getBlockNumber(),r={address:e.marginBank,abi:L,blockNumber:n},i={address:e.pool,abi:_r,blockNumber:n},[a,o,s,c,l,u,d,f,p]=await Promise.all([t.readContract({...r,functionName:`getPosition`,args:[e.account,e.pool]}),t.readContract({...i,functionName:`tryGetHealthSnapshot`}),t.readContract({...r,functionName:`getAccountHealth`,args:[e.account]}),t.readContract({...r,functionName:`getAccountState`,args:[e.account]}),t.readContract({...r,functionName:`getMaxLeverage`,args:[e.account,e.pool]}),t.readContract({...r,functionName:`getMaxLeverageLimit`}),t.readContract({...r,functionName:`getCreditFloor`,args:[e.account]}),t.readContract({...r,functionName:`getVoucherLeverageCap`}),t.readContract({...r,functionName:`isVoucherMarketAllowed`,args:[e.pool]})]),[m,h]=o;if(!m)throw new P(`perp pool ${e.pool} has no fresh mark price; leverage is not defined`);let{oneBase:g,markPrice:_,effectiveIMFBps:v}=h,[y]=s,b=Ps(a.size)*_/g,x=e.pool.toLowerCase(),S=c.activePerpPools.filter(e=>e.toLowerCase()!==x),C=(await Promise.all(S.map(async i=>{let[a,o]=await Promise.all([t.readContract({address:i,abi:_r,functionName:`tryGetHealthSnapshot`,blockNumber:n}),t.readContract({...r,functionName:`getPosition`,args:[e.account,i]})]),[s,c]=a;return s||I(`active pool ${i} unpriceable after getAccountHealth resolved at block ${n}`),Ps(o.size)*c.markPrice/c.oneBase}))).reduce((e,t)=>e+t,b);return v<=0n&&I(`a pool's effective IMF is >= initialMarginBps, which the pool keeps > 0`),{asOfBlock:n,size:a.size,markPrice:_,positionNotional:b,accountNotional:C,equity:y,positionLeverageBps:y>0n?b*ks/y:null,accountLeverageBps:y>0n?C*ks/y:null,marketMaxLeverageBps:ks*ks/v,accountMaxLeverageX:l,protocolMaxLeverageX:u,creditFloor:d,voucherLeverageCapX:f,voucherMarketAllowed:p}}function Rs(e){let t=Ps(e.size)*e.markPrice/e.oneBase,n=e.size===0n?0n:(e.markPrice-e.avgEntryPrice)*e.size/e.oneBase,r=e.projectedCumulativeFunding-e.entryFundingIndex,i=Ns(e.size*r,vs*e.oneBase),a=n-i,o=js(t*e.effectiveImfBps,ks);return{size:e.size,notional:t,unrealizedPnl:n,accruedFunding:i,equityContribution:a,initialMarginRequirement:o,maintenanceMarginRequirement:js(t*e.maintenanceMarginBps,ks),closeOutMarginRequirement:js(t*e.closeOutMarginBps,ks),returnOnMarginBps:o===0n?null:Ms(a*ks,o)}}async function zs(e,t){let n=await t.getBlockNumber(),[r,i]=await Promise.all([t.readContract({address:e.marginBank,abi:L,functionName:`getPosition`,args:[e.account,e.pool],blockNumber:n}),t.readContract({address:e.pool,abi:_r,functionName:`tryGetHealthSnapshot`,blockNumber:n})]),[a,o]=i;return a?{priceable:!0,asOfBlock:n,pool:e.pool,avgEntryPrice:r.avgEntryPrice,markPrice:o.markPrice,...Rs({size:r.size,avgEntryPrice:r.avgEntryPrice,entryFundingIndex:r.entryFundingIndex,markPrice:o.markPrice,projectedCumulativeFunding:o.projectedCumulativeFunding,oneBase:o.oneBase,effectiveImfBps:o.effectiveIMFBps,maintenanceMarginBps:o.maintenanceMarginBps,closeOutMarginBps:o.closeOutMarginBps})}:{priceable:!1,asOfBlock:n,pool:e.pool}}async function Bs(e,t){let n=await t.getBlockNumber(),r=await t.readContract({address:e.marginBank,abi:L,functionName:`getAccountState`,args:[e.account],blockNumber:n});return Promise.all(r.activePerpPools.map(async r=>{let[i,a]=await Promise.all([t.readContract({address:e.marginBank,abi:L,functionName:`getPosition`,args:[e.account,r],blockNumber:n}),t.readContract({address:r,abi:_r,functionName:`tryGetHealthSnapshot`,blockNumber:n})]),[o,s]=a;return o?{priceable:!0,asOfBlock:n,pool:r,avgEntryPrice:i.avgEntryPrice,markPrice:s.markPrice,...Rs({size:i.size,avgEntryPrice:i.avgEntryPrice,entryFundingIndex:i.entryFundingIndex,markPrice:s.markPrice,projectedCumulativeFunding:s.projectedCumulativeFunding,oneBase:s.oneBase,effectiveImfBps:s.effectiveIMFBps,maintenanceMarginBps:s.maintenanceMarginBps,closeOutMarginBps:s.closeOutMarginBps})}:{priceable:!1,asOfBlock:n,pool:r}}))}async function Vs(e,t,n){let r=t.pageSize??1e3;if(!Number.isInteger(r)||r<=0)throw new P(`pageSize must be a positive integer, got ${r}`);let i=t.blockNumber??await n.getBlockNumber(),a=BigInt(r),o=[];for(let t=0n;;t+=a){let s=await n.readContract({address:e.marginBank,abi:L,functionName:`getSideHoldersPaginated`,args:[e.pool,e.isLong,t,a],blockNumber:i});if(o.push(...s),s.length<r)break}return{holders:o,asOfBlock:i}}function Hs(e){if(!(e instanceof Zn)||e.errorName!==void 0||!me(e.data))return e;try{let t=ee({abi:L,data:e.data});return new Zn({errorName:t.errorName,args:t.args??[],data:e.data,address:e.address,functionName:e.functionName},{cause:e})}catch{return e}}async function Us(e,t,n){try{return await n.readContract({address:e.marginBank,abi:L,functionName:`getBankruptcyPrice`,args:[e.account,e.pool],blockNumber:t.blockNumber})}catch(e){throw Hs(e)}}function Ws(e,t,n){return{address:t,abi:Nn,functionName:`deposit`,args:[n.amount],gas:n.gas??e.defaultGas}}function Gs(e){if(e.amount<=0n)throw new P(`amount must be > 0`)}function Ks(e,t,n){return{address:t,abi:Nn,functionName:`withdraw`,args:[n.amount],gas:n.gas??e.defaultGas}}async function qs(e,t){Gs(t);let n=t.gas??e.defaultGas,r=await e.resolveMarginBank(t),i=Ws(e,r,t);if(t.autoApprove!==!1){let i=await e.bankCollateral(r,t.collateral);await e.approveIfNeeded(i,r,t.amount,n)}return e.execute(i)}async function Js(e,t){let n=await e.resolveMarginBank(t);return e.execute(Ks(e,n,t))}async function Ys(e,t){Gs(t);let n=await e.resolveMarginBank(t),r=So(Ws(e,n,t),`Deposit ${t.amount} collateral into MarginBank ${n}`);if(t.autoApprove===!1)return{deposit:r};let i=await e.bankCollateral(n,t.collateral);return{deposit:r,approval:Co(i,n,`Approve collateral ${i} for MarginBank ${n}`)}}async function Xs(e,t){let n=await e.resolveMarginBank(t);return So(Ks(e,n,t),`Withdraw ${t.amount} collateral from MarginBank ${n}`)}async function Zs(e,t){let n=await e.resolveMarginBank(t);return e.execute({address:n,abi:Nn,functionName:`setMaxLeverage`,args:[t.pool,t.leverageX],gas:t.gas??e.defaultGas})}function Qs(e){let t=e.positionSize===0n||e.isBid===e.positionSize>0n?e.quantity:e.quantity<=e.effectiveReducingCapacity?0n:e.quantity-e.effectiveReducingCapacity,n=e.quantity-t,r=js(t*e.price*e.effectiveImfBps,e.oneBase*ks),i=js(t*(e.isBid?e.price>e.markPrice?e.price-e.markPrice:0n:e.markPrice>e.price?e.markPrice-e.price:0n),e.oneBase),a=r+i,o=t>0n&&e.creditFloor>0n,s=o&&(!e.voucherMarketAllowed||e.voucherLeverageCapX===0),c=o&&!s&&(e.accountMaxLeverageX===0||e.accountMaxLeverageX>e.voucherLeverageCapX)?e.voucherLeverageCapX:e.accountMaxLeverageX,l=e.protocolMaxLeverageX>0&&c>e.protocolMaxLeverageX?e.protocolMaxLeverageX:c,u=l===0?0n:js(ks,BigInt(l)),d=u>e.effectiveImfBps?u:e.effectiveImfBps,f=Ps(e.positionSize)*e.markPrice/e.oneBase,p=t*e.price/e.oneBase,m=d>e.effectiveImfBps&&t>0n?js((f+p)*(d-e.effectiveImfBps),ks):0n,h=e.takerFeeBpsTimes1k??0n,g=e.makerFeeBpsTimes1k??0n,_=g>0n?g:0n,v=(h>_?h:_)+(e.builderFeeBpsTimes1k??0n),y=js(e.quantity*e.price/e.oneBase*v,As),b=e.restricted===!0&&t>0n,x=e.isolationAllowsMarket===!1,S=a+y+m,C=e.wallet==null||t===0n||s||e.unlockedCollateral<0n?0n:S>e.unlockedCollateral?S-e.unlockedCollateral:0n,w=C===0n||e.wallet!=null&&e.wallet.balance>=C&&e.wallet.allowance>=C,T=a===0n||e.unlockedCollateral+C>=a,ee=t===0n||e.equity+C-a>=e.imRequirement+m;return{increasingQuantity:t,reducingQuantity:n,lockAmount:a,initialMarginPortion:r,adverseGapPortion:i,leverageSurcharge:m,feeHeadroom:y,topUpRequired:C,walletCoversTopUp:w,hasCollateralForLock:T,meetsInitialMargin:ee,voucherBlocked:s,restrictedBlocked:b,isolationBlocked:x,sufficient:T&&ee&&w&&!s&&!b&&!x}}async function $s(e,t,n){let r={address:e.pool,abi:_r,blockNumber:n},i={address:e.marginBank,abi:L,blockNumber:n},[a,o]=await t.readContract({...r,functionName:`tryGetHealthSnapshot`});if(!a)return null;let[s,c,l,u,d,f,p,m,h,g,_,v]=await Promise.all([t.readContract({...r,functionName:`getReducingCapacity`,args:[e.account]}),t.readContract({...i,functionName:`getAccountState`,args:[e.account]}),t.readContract({...i,functionName:`getAccountHealth`,args:[e.account]}),t.readContract({...i,functionName:`getMaxLeverage`,args:[e.account,e.pool]}),t.readContract({...i,functionName:`getMaxLeverageLimit`}),t.readContract({...i,functionName:`getCreditFloor`,args:[e.account]}),t.readContract({...i,functionName:`getVoucherLeverageCap`}),t.readContract({...i,functionName:`isVoucherMarketAllowed`,args:[e.pool]}),t.readContract({...r,functionName:`isRestricted`}),t.readContract({...i,functionName:`isolationAllowsMarket`,args:[e.account,e.pool]}),t.readContract({...r,functionName:`getPerpPoolParameters`}),e.autoPull===!0?t.readContract({...i,functionName:`getSystemConfig`}):void 0]),y=null;if(v!==void 0){let r={address:v.collateralToken,abi:mr,blockNumber:n},[i,a]=await Promise.all([t.readContract({...r,functionName:`balanceOf`,args:[e.account]}),t.readContract({...r,functionName:`allowance`,args:[e.account,e.marginBank]})]);y={balance:i,allowance:a}}let[b,x]=l;return{oneBase:o.oneBase,markPrice:o.markPrice,effectiveImfBps:o.effectiveIMFBps,positionSize:s.positionSize,effectiveReducingCapacity:s.effectiveReducingCapacity,equity:b,imRequirement:x,unlockedCollateral:c.unlockedCollateralBalance,accountMaxLeverageX:u,protocolMaxLeverageX:d,creditFloor:f,voucherLeverageCapX:p,voucherMarketAllowed:m,restricted:h,isolationAllowsMarket:g,takerFeeBpsTimes1k:_.takerFeeBpsTimes1k,makerFeeBpsTimes1k:_.makerFeeBpsTimes1k,wallet:y,params:_}}async function ec(e,t){let n=await t.getBlockNumber(),r=await $s(e,t,n);if(r===null)return{priceable:!1,asOfBlock:n};let{params:i,...a}=r;return{priceable:!0,asOfBlock:n,effectiveImfBps:r.effectiveImfBps,markPrice:r.markPrice,unlockedCollateral:r.unlockedCollateral,equity:r.equity,imRequirement:r.imRequirement,wallet:r.wallet,...Qs({...a,wallet:r.wallet??void 0,isBid:e.isBid,quantity:e.quantity,price:e.price,builderFeeBpsTimes1k:e.builderFeeBpsTimes1k})}}async function tc(e,t){return t.readContract({address:e.marginBank,abi:L,functionName:`meetsIMForFill`,args:[e.account,e.pool,e.additionalSize,e.price]})}async function nc(e,t){if(e.price<=0n)throw new P(`price must be > 0`);let n=await t.getBlockNumber(),[r,i]=await Promise.all([$s(e,t,n),t.readContract({address:e.pool,abi:_r,functionName:`getOrderBookParameters`,blockNumber:n})]);if(r===null)return{priceable:!1,asOfBlock:n};let{params:a,wallet:o,...s}=r,c=r.positionSize,l=Ps(c),u={...s,wallet:o??void 0,isBid:e.isBid,price:e.price,builderFeeBpsTimes1k:e.builderFeeBpsTimes1k},d=e=>Qs({...u,quantity:e}),f=t=>{let n=Ps(c+(e.isBid?t:-t));return n<=a.maxPositionSize||n<=l},p=a.maxPositionSize+l+1n,m=e=>d(e).topUpRequired===0n,h=p;if(!m(p)){let e=0n,t=p;for(;t-e>1n;){let n=e+(t-e)/2n;m(n)?e=n:t=n}h=e}let g=d(h).meetsInitialMargin,_=e=>e<=0n||f(e)&&(e<=h||g)&&d(e).sufficient,v=0n,y=p;for(;y-v>1n;){let e=v+(y-v)/2n;_(e)?v=e:y=e}let b=i.lotSize>0n?i.lotSize:1n,x=v/b*b,S=d(x),C=x+b,w=d(C),T=w.isolationBlocked?`isolated`:w.restrictedBlocked?`restricted`:w.voucherBlocked?`voucherBlocked`:f(C)?w.walletCoversTopUp?w.hasCollateralForLock?`initialMargin`:`collateral`:w.topUpRequired>(o?.balance??0n)?`walletBalance`:`walletAllowance`:`maxPositionSize`;return{priceable:!0,asOfBlock:n,maxQuantity:x,unalignedMaxQuantity:v,increasingQuantity:S.increasingQuantity,reducingQuantity:S.reducingQuantity,lockAmount:S.lockAmount,topUpRequired:S.topUpRequired,wallet:o,placeable:x>=i.minQuantity&&x>0n,limitedBy:T,lotSize:b,minQuantity:i.minQuantity,maxPositionSize:a.maxPositionSize,positionSize:c,markPrice:r.markPrice,effectiveImfBps:r.effectiveImfBps}}async function rc(e,t){return t.readContract({address:e.marginBank,abi:L,functionName:`quoteMeetsIMForOrder`,args:[e.account,e.pool,e.additionalSize,e.price]})}async function ic(e,t){return t.readContract({address:e.marginBank,abi:L,functionName:`quoteOrderTopUp`,args:[e.account,e.pool,e.lockAmount,e.feeHeadroom,e.increasingQuantity,e.price]})}async function ac(e,t){if(e.quantity<=0n)throw new P(`quantity must be > 0`);if(e.price<=0n)throw new P(`price must be > 0`);let n=await t.getBlockNumber(),r={address:e.pool,abi:_r,blockNumber:n},i={address:e.marginBank,abi:L,blockNumber:n},[a,o]=await t.readContract({...r,functionName:`tryGetHealthSnapshot`});if(!a)return{priceable:!1,asOfBlock:n};let[s,c,l]=await Promise.all([t.readContract({...i,functionName:`getPosition`,args:[e.account,e.pool]}),t.readContract({...i,functionName:`getAccountHealth`,args:[e.account]}),t.readContract({...r,functionName:`getPerpPoolParameters`})]),{oneBase:u,markPrice:d,maintenanceMarginBps:f}=o,[p,,m]=c,h=s.size,g=s.avgEntryPrice,_=Ps(h),v=e.isBid?e.quantity:-e.quantity,y,b,x=0n;if(h===0n)y=v,b=e.price;else if(h>0n==v>0n)y=h+v,b=(_*g+e.quantity*e.price)/(_+e.quantity);else{let t=h>0n?1n:-1n,n=e.quantity<=_?e.quantity:_;x=Ms((e.price-g)*t*n,u),y=h+v,b=e.quantity>_?e.price:y===0n?0n:g}let S=e.quantity*e.price/u,C=e.asMaker===!0?l.makerFeeBpsTimes1k:l.takerFeeBpsTimes1k,w=C>=0n?S*C/As:-(S*-C/As),T=(d-g)*h/u,ee=(d-b)*y/u,te=p-T+ee+x-w,ne=_*d/u,E=Ps(y)*d/u,re=js(ne*f,ks),ie=js(E*f,ks),D=m-re+ie;return{priceable:!0,asOfBlock:n,markPrice:d,currentSize:h,currentLiquidationPrice:Fs({equity:p,mmReq:m,size:h,markPrice:d,maintenanceMarginBps:f,oneBase:u}),projectedSize:y,projectedEntryPrice:b,realizedPnl:x,fee:w,projectedEquity:te,projectedMmReq:D,projectedLiquidationPrice:Fs({equity:te,mmReq:D,size:y,markPrice:d,maintenanceMarginBps:f,oneBase:u}),projectedPositionLeverageBps:te>0n?E*ks/te:null}}async function oc(e,t){if(e.quantity!=null&&e.quantity<0n)throw new P(`quantity must be >= 0`);if(e.price!=null&&e.price<=0n)throw new P(`price must be > 0`);let n=await t.getBlockNumber(),r={address:e.pool,abi:_r,blockNumber:n},[i,a,o,s]=await Promise.all([t.readContract({address:e.marginBank,abi:L,functionName:`getPosition`,args:[e.account,e.pool],blockNumber:n}),t.readContract({...r,functionName:`tryGetHealthSnapshot`}),t.readContract({...r,functionName:`getOrderBookParameters`}),t.readContract({...r,functionName:`getPerpPoolParameters`})]),[c,l]=a;if(!c)return{priceable:!1,asOfBlock:n};let{oneBase:u,markPrice:d}=l,f=e.price??d,p=i.size,m=Ps(p),h=e.quantity==null||e.quantity===0n?m:e.quantity,g=h>m?m:h,_=o.lotSize>0n?o.lotSize:1n,v=g/_*_,y=p>0n?1n:-1n,b=v===0n||p===0n?0n:Ms((f-i.avgEntryPrice)*y*v,u),x=p===0n?0n:Ns(p*(l.projectedCumulativeFunding-i.entryFundingIndex),vs*u),S=v*f/u,C=e.asMaker===!0?s.makerFeeBpsTimes1k:s.takerFeeBpsTimes1k,w=C>=0n?S*C/As:-(S*-C/As),T=p===0n?0n:p-y*v;return{priceable:!0,asOfBlock:n,requestedQuantity:h,closedQuantity:v,remainingSize:T,fullClose:p!==0n&&T===0n,realizedPnl:b,fundingSettled:x,fee:w,netProceeds:b-x-w,placeable:v>=o.minQuantity&&v>0n,fillPrice:f,markPrice:d,avgEntryPrice:i.avgEntryPrice,lotSize:_,minQuantity:o.minQuantity}}async function sc(e,t){let n=await t.readContract({address:e,abi:L,functionName:`getSystemConfig`});return{marginBank:n.marginBank,collateralToken:n.collateralToken,perpPoolFactory:n.perpPoolFactory,liquidationEngine:n.liquidationEngine,insuranceFund:n.insuranceFund,feeRecipient:n.feeRecipient,maxLeverageLimit:n.maxLeverageLimit,fullyWired:n.fullyWired}}async function cc(e,t){let n={address:e,abi:yr},[r,i]=await Promise.all([t.readContract({...n,functionName:`getMaxTiers`}),t.readContract({...n,functionName:`getTotalTierBalances`})]),a=Array.from({length:Number(r)+1},(e,t)=>BigInt(t));return{address:e,maxTiers:r,totalBalance:i,tiers:await Promise.all(a.map(async e=>{let[r,i]=await Promise.all([t.readContract({...n,functionName:`getTierBalance`,args:[e]}),t.readContract({...n,functionName:`getPoolCountForTier`,args:[e]})]);return{tier:Number(e),balance:r,poolCount:i}}))}}async function lc(e,t){let n={address:e,abi:br},[r,i,a,o,s,c]=await Promise.all([t.readContract({...n,functionName:`getMarginBank`}),t.readContract({...n,functionName:`getLiquidationPenaltyBps`}),t.readContract({...n,functionName:`getMinLiquidationSpreadBps`}),t.readContract({...n,functionName:`getMaxLiquidationSpreadBps`}),t.readContract({...n,functionName:`getMaxLiquidationVolumePerBlock`}),t.readContract({...n,functionName:`getBidderCount`})]);return{address:e,marginBank:r,penaltyBps:i,minSpreadBps:a,maxSpreadBps:o,maxVolumePerBlock:s,bidderCount:c}}async function uc(e,t,n){let[r,i]=await n.readContract({address:e,abi:L,functionName:`tryGetAccountEquity`,args:[t]});return r?i:null}async function dc(e,t,n){return n.readContract({address:e,abi:L,functionName:`getCollateralBasis`,args:[t]})}var fc=[`None`,`ReduceOnlyNoPosition`,`ReduceOnlyWrongSide`,`ReduceOnlyBelowMinQty`,`PlacementFailed`,`NoFill`],pc=B(`
  query PerpStopOrders($where: StopOrder_bool_exp!, $limit: Int, $offset: Int) {
    StopOrder(where: $where, order_by: { createdAt: desc }, limit: $limit, offset: $offset) {
      id
      registry
      orderIdRaw
      owner
      isBid
      quantity
      triggerPrice
      triggerOperator
      orderType
      builder
      builderFeeBpsTimes1k
      status
      placedOrderId
      dropReason
      createdAt
      updatedAt
      txHash
      market {
        poolAddress
        baseSymbol
        quoteSymbol
        baseDecimals
        quoteDecimals
      }
    }
  }
`);async function mc(e={},t){let n={market:{marketType:{_eq:`PERP`}}};return e.pool!=null&&(n.market={marketType:{_eq:`PERP`},poolAddress:{_eq:e.pool.toLowerCase()}}),e.account!=null&&(n.owner={_eq:e.account.toLowerCase()}),n.status={_in:e.status!=null&&e.status.length>0?e.status:[`PENDING`]},Ir((await R(pc,{where:n,limit:e.limit??200,offset:e.offset??0},t)).StopOrder.map(e=>({...e,dropReason:e.dropReason==null?null:fc[e.dropReason]??null})))}var Y=`0x80054449`,hc={reduceOnly:0,opening:1};async function gc(e,t){return t.readContract({address:e,abi:Rn,functionName:`somiPaymentPerOrder`})}async function _c(e,t){let[n,r]=await t.readContract({address:e.registry,abi:Rn,functionName:`getPendingOrder`,args:[BigInt(e.orderId)]});if(!n)return null;let i=r.orderWithTrigger;return{isBid:i.order.isBid,owner:i.order.owner,quantity:i.order.quantity,triggerPrice:i.triggerPrice,triggerOperator:i.triggerOperator,orderType:i.orderType,limitPrice:i.limitPrice,builder:i.builder,builderFeeBpsTimes1k:i.builderFeeBpsTimes1k,somiPaid:r.somiPaid,siblingOrderId:r.siblingOrderId,intent:r.intent===hc.opening?`opening`:`reduceOnly`}}function vc(e,t){return{order:{isBid:e.isBid,owner:t,userData:0n,quantity:e.quantity},orderType:e.stopOrderType,triggerPrice:e.triggerPrice,triggerOperator:e.triggerOperator,limitPrice:e.limitPrice??0n,builder:e.builder??`0x0000000000000000000000000000000000000000`,builderFeeBpsTimes1k:e.builderFeeBpsTimes1k??0n}}function yc(e,t,n){if(e.triggerPrice<=0n)throw new P(`${n}: triggerPrice must be > 0`);if(e.quantity<0n)throw new P(`${n}: quantity cannot be negative`);if(e.quantity===0n&&t===`opening`)throw new P(`${n}: an opening stop needs a non-zero quantity`);if(e.stopOrderType===0&&(e.limitPrice??0n)<=0n)throw new P(`${n}: a LIMIT stop needs limitPrice > 0`);if(e.stopOrderType===1&&(e.limitPrice??0n)!==0n)throw new P(`${n}: a MARKET stop must not set limitPrice`);if(e.builder==null&&(e.builderFeeBpsTimes1k??0n)>0n)throw new P(`${n}: builderFeeBpsTimes1k needs a builder`)}function bc(e){let t={address:e.registry,abi:Rn,gas:e.gas,value:e.somi};return e.intent===`reduceOnly`?{...t,functionName:`createPendingOrder`,args:[e.leg]}:{...t,functionName:`createTriggerOrder`,args:[e.leg,hc.opening]}}function xc(e){let[t,n]=e.selfIsGte?[e.self,e.other]:[e.other,e.self];return{address:e.registry,abi:Rn,functionName:`createLinkedPendingOrders`,args:[t,n],gas:e.gas,value:e.somi*2n}}function Sc(e,t,n){yc(t,n.intent,`stop order`);let r=vc(t,e.fromAddress);if(t.pair==null)return bc({registry:t.registry,leg:r,intent:n.intent,somi:n.somi,gas:n.gas});if(n.intent===`opening`)throw new P(`a linked pair must be reduce-only on both legs`);if(yc(t.pair,`reduceOnly`,`paired leg`),t.triggerOperator===t.pair.triggerOperator)throw new P(`a linked pair needs opposite trigger operators (one GTE, one LTE)`);if(t.isBid!==t.pair.isBid)throw new P(`a linked pair must be the same side — both legs reduce one position`);return xc({registry:t.registry,self:r,other:vc(t.pair,e.fromAddress),selfIsGte:t.triggerOperator===0,somi:n.somi,gas:n.gas})}function Cc(e,t,n){let r=t.operatorRegistry??e.addresses().operatorPermissionsRegistry;if(!r)throw new F(`operatorRegistry or addresses.operatorPermissionsRegistry`,`a perp stop order`);return{address:r,abi:Un,functionName:`setOperatorApprovalGlobal`,args:[t.registry,[Y],!0],gas:n}}function wc(e,t){let n=[];for(let r of e)if(r.address.toLowerCase()===t.toLowerCase())try{let e=w({abi:zn,data:r.data,topics:r.topics});e.eventName===`PendingOrderCreated`&&n.push(e.args.orderId)}catch{}return n}async function Tc(e,t){let n=t.intent??`reduceOnly`,r=t.gas??e.defaultGas,i=Sc(e,t,{intent:n,somi:t.somiPayment??await gc(t.registry,e.publicClient),gas:r});t.skipOperatorApproval!==!0&&(await e.publicClient.readContract({address:t.pool,abi:Bn,functionName:`isOperatorAuthorized`,args:[e.fromAddress,t.registry,Y]})||await e.execute(Cc(e,t,r)));let a=await e.execute(i),o=wc(a.receipt.logs,t.registry);if(t.pair==null)return{...a,stopOrderId:o[0]};let s=t.triggerOperator===0,[c,l]=o,u=s?c:l,d=s?l:c;return{...a,stopOrderId:u,pairedStopOrderId:d}}async function Ec(e,t){return e.execute({address:t.registry,abi:Rn,functionName:`linkPendingOrders`,args:[BigInt(t.orderIdA),BigInt(t.orderIdB)],gas:t.gas??e.defaultGas})}async function Dc(e,t){return e.execute(Oc(e,t))}function Oc(e,t){return{address:t.registry,abi:Rn,functionName:`cancelPendingOrder`,args:[BigInt(t.orderId)],gas:t.gas??e.defaultGas}}async function kc(e,t){return e.execute(Ac(e,t))}function Ac(e,t){if(t.orderIds.length===0)throw new P(`orderIds must not be empty`);return{address:t.registry,abi:Rn,functionName:`cancelPendingOrders`,args:[t.orderIds.map(e=>BigInt(e))],gas:t.gas??e.defaultGas}}async function jc(e,t){let n=t.intent??`reduceOnly`,r=t.gas??e.defaultGas,i=So(Sc(e,t,{intent:n,somi:t.somiPayment??await gc(t.registry,e.publicClient),gas:r}),`Place ${t.pair==null?`a ${n===`opening`?`opening`:`reduce-only`} stop`:`a linked TP/SL pair`} on perp registry ${t.registry}`);return t.skipOperatorApproval===!0?{stopOrder:i}:{stopOrder:i,operatorApproval:So(Cc(e,t,r),`Approve perp stop registry ${t.registry} to place orders on pool ${t.pool}`)}}function Mc(e,t){return So(Oc(e,t),`Cancel perp stop order ${t.orderId} on registry ${t.registry}`)}function Nc(e,t){return So(Ac(e,t),`Cancel ${t.orderIds.length} perp stop orders on registry ${t.registry}`)}async function Pc(e,t){return e.execute({address:t.registry,abi:Rn,functionName:`claimSomi`,args:[],gas:t.gas??e.defaultGas})}async function Fc(e,t){return t.readContract({address:e.registry,abi:Rn,functionName:`unclaimedSomi`,args:[e.account]})}function Ic(e){return e instanceof de&&!!e.walk(e=>e instanceof d||e instanceof pe)}async function Lc(e,t){let n=await t.getBlockNumber(),r={address:e.factory,abi:vr,blockNumber:n},i=await t.readContract({...r,functionName:`supportsInterface`,args:[`0xa874fb70`]}).catch(e=>{if(Ic(e))return!1;throw e})?(await t.readContract({...r,functionName:`getPerpPoolStatuses`})).map(e=>({pool:e.perpPool,baseToken:e.baseToken,restricted:e.restricted})):await Rc(e.factory,t,n);return Promise.all(i.map(async e=>{let r=await t.readContract({address:e.pool,abi:_r,functionName:`marginBank`,blockNumber:n}),i=await t.readContract({address:r,abi:L,functionName:`isPerpPoolRegistered`,args:[e.pool],blockNumber:n}).catch(e=>{if(Ic(e))return null;throw e});return{...e,marginBank:r,registered:i,tradeable:i===null?null:!e.restricted&&i}}))}async function Rc(e,t,n){let r=await t.readContract({address:e,abi:vr,functionName:`getPerpPools`,blockNumber:n});return Promise.all(r.map(async r=>{let[i,a]=await Promise.all([t.readContract({address:e,abi:vr,functionName:`getBaseTokenForPool`,args:[r],blockNumber:n}),t.readContract({address:r,abi:_r,functionName:`isRestricted`,blockNumber:n})]);return{pool:r,baseToken:i,restricted:a}}))}async function zc(e,t){let n=await Lc(e,t),r=n.filter(e=>e.tradeable===null);if(r.length>0)throw Error(`cannot determine tradeability for ${r.length} of ${n.length} perp markets: their MarginBank predates isPerpPoolRegistered. Pools: ${r.map(e=>e.pool).join(`, `)}`);return n.filter(e=>e.tradeable).map(e=>e.pool)}async function Bc(e,t){return t.readContract({address:e.marginBank,abi:L,functionName:`isPerpPoolRegistered`,args:[e.pool]})}B(`
  fragment SpotPortfolioMarketFields on Market {
    poolAddress
    baseSymbol
    quoteSymbol
    baseToken
    quoteToken
    baseDecimals
    quoteDecimals
    baseIsNative
    tickSize
    lotSize
    minQuantity
    lastPrice
    markPrice
    stopRegistry
  }
`);async function Vc(e,t={},n){let r=e.toLowerCase(),i={market:{marketType:{_eq:`SPOT`}},_or:[{maker:{_eq:r}},{taker:{_eq:r}}]};t.since!=null&&(i.timestamp={_gte:t.since});let a=await R(Hc,{acct:r,fillWhere:i,ordersLimit:t.ordersLimit??200,tradesLimit:t.tradesLimit??50},n),o=Ir(a.SpotFill.map(e=>{let t=(e.maker??``).toLowerCase()===r,n=e.takerIsBid??!1;return{id:e.id,fillPrice:e.fillPrice,quantity:e.quantity,quoteQuantity:e.quoteQuantity,timestamp:e.timestamp,txHash:e.txHash,isBid:t?!n:n,asMaker:t,counterparty:t?e.taker??null:e.maker??null,market:e.market}}));return{account:r,openOrders:Ir(a.SpotOrder),stopOrders:Ir(a.SpotStopOrder),trades:o}}var Hc=B(`
  query SpotPortfolio(
    $acct: String!
    $fillWhere: Fill_bool_exp!
    $ordersLimit: Int
    $tradesLimit: Int
  ) {
    SpotOrder: Order(
      where: {
        owner: { _eq: $acct }
        status: { _eq: "Open" }
        market: { marketType: { _eq: "SPOT" } }
      }
      order_by: { placedAtTimestamp: desc }
      limit: $ordersLimit
    ) {
      id
      orderId
      isBid
      price
      quantityRemaining
      filledQuantity
      fullQuantity
      placedAtTimestamp
      placedTxHash
      market {
        ...SpotPortfolioMarketFields
      }
    }
    SpotStopOrder: StopOrder(
      where: { owner: { _eq: $acct }, status: { _eq: "PENDING" } }
      order_by: { createdAt: desc }
      limit: $ordersLimit
    ) {
      ...SpotStopOrderFields
      market {
        ...SpotPortfolioMarketFields
      }
    }
    SpotFill: Fill(where: $fillWhere, order_by: { timestamp: desc }, limit: $tradesLimit) {
      id
      fillPrice
      quantity
      quoteQuantity
      timestamp
      txHash
      maker
      taker
      takerIsBid
      market {
        ...SpotPortfolioMarketFields
      }
    }
  }
`);async function Uc(e,t){let[n,r,i]=await t.readContract({address:e.pool,abi:Vn,functionName:`getAutoPullRequirement`,args:[e.owner,e.isBid,e.price,e.quantity,e.builderFeeBpsTimes1k??0n]});return{inputToken:n,requiredAmount:r,delta:i}}async function X(e,t){return t.readContract({address:e.pool,abi:Bn,functionName:`isOperatorAuthorized`,args:[e.owner,e.operator,e.selector]})}async function Wc(e,t){let[n,r]=await t.readContract({address:e.pool,abi:Hn,functionName:`getOwnLockedBalance`,account:e.owner});return{lockedBase:n,lockedQuote:r}}async function Gc(e,t){let[n,r]=await t.readContract({address:e,abi:Hn,functionName:`getLockedTokenBreakdown`});return{base:n,quote:r}}async function Kc(e,t){return t.readContract({address:e.pool,abi:Hn,functionName:`convertToQuoteAtPriceCeil`,args:[e.baseQuantity,e.price]})}var qc=`0x80054449`;function Jc(e,t){if(!ge(e,{strict:!1}))throw new P(`operator must be an address (got ${String(e)})`);if(e.toLowerCase()===`0x0000000000000000000000000000000000000000`)throw new P(`operator must not be the zero address`);if(t.length===0)throw new P(`selectors must not be empty — pass at least one 4-byte selector to grant or revoke`);let n=t.find(e=>!/^0x[0-9a-fA-F]{8}$/.test(e));if(n!==void 0)throw new P(`selector must be 4 bytes of hex (got ${String(n)})`)}async function Yc(e,t){Jc(t.operator,t.selectors);let n=e.resolveOperatorRegistry(t.operatorRegistry);return e.execute({address:n,abi:Un,functionName:`setOperatorApprovalGlobal`,args:[t.operator,[...t.selectors],t.approved],gas:t.gas??e.defaultGas})}async function Xc(e,t){Jc(t.operator,t.selectors);let n=e.resolveOperatorRegistry(t.operatorRegistry);return e.execute({address:n,abi:Un,functionName:`setOperatorApprovalForPool`,args:[t.pool,t.operator,[...t.selectors],t.approved],gas:t.gas??e.defaultGas})}function Zc(e){if(!e||e.toLowerCase()===`0x0000000000000000000000000000000000000000`)throw new F(`addresses.operatorPermissionsRegistry`,`an operator grant read`);return e}async function Qc(e,t,n){return t.readContract({address:Zc(n),abi:Un,functionName:`isGloballyApproved`,args:[e.owner,e.operator,e.selector]})}async function $c(e,t,n){return t.readContract({address:Zc(n),abi:Un,functionName:`isApprovedForPool`,args:[e.pool,e.owner,e.operator,e.selector]})}B(`
  fragment SpotStopOrderFields on StopOrder {
    id
    registry
    orderId: orderIdRaw
    isBid
    quantity
    triggerPrice
    triggerOperator
    orderType
    status
    placedOrderId
    createdAt
  }
`);async function el(e,t={},n){let r={owner:{_eq:e.toLowerCase()},status:{_eq:t.status??`PENDING`}};return t.pool!=null&&(r.market={poolAddress:{_eq:t.pool.toLowerCase()}}),Ir((await R(tl,{where:r,limit:t.limit??200},n)).StopOrder)}var tl=B(`
  query SpotStopOrders($where: StopOrder_bool_exp!, $limit: Int) {
    StopOrder(where: $where, order_by: { createdAt: desc }, limit: $limit) {
      ...SpotStopOrderFields
      market {
        ...SpotPortfolioMarketFields
      }
    }
  }
`);async function nl(e,t){return t.readContract({address:e,abi:gr,functionName:`somiPaymentPerOrder`})}async function rl(e,t){if(t.quantity<=0n||t.triggerPrice<=0n)throw new P(`quantity and triggerPrice must be > 0`);if(t.stopOrderType===0&&(t.limitPrice??0n)<=0n)throw new P(`a LIMIT stop order needs limitPrice > 0`);let n=t.gas??e.defaultGas,r=t.somiPayment??await e.publicClient.readContract({address:t.registry,abi:In,functionName:`somiPaymentPerOrder`});t.skipOperatorApproval!==!0&&(await X({pool:t.pool,owner:e.fromAddress,operator:t.registry,selector:`0x80054449`},e.publicClient)||(e.resolveOperatorRegistry(t.operatorRegistry,`a stop order`),await Yc(e,{operator:t.registry,selectors:[qc],approved:!0,operatorRegistry:t.operatorRegistry,gas:n})));let i=t.stopOrderType===0?t.limitPrice??0n:t.triggerPrice,{requiredAmount:a,delta:o}=await Uc({pool:t.pool,owner:e.fromAddress,isBid:t.isBid,price:i,quantity:t.quantity},e.publicClient),s=r;if(!t.isBid&&t.baseIsNative===!0)s=r+o;else if(t.autoApprove!==!1){let r=t.isBid?t.quoteToken:t.baseToken;await e.approveIfNeeded(r,t.pool,a,n)}let c=await e.execute({address:t.registry,abi:In,functionName:`createPendingOrder`,args:[{order:{isBid:t.isBid,owner:e.fromAddress,userData:0n,quantity:t.quantity},orderType:t.stopOrderType,triggerPrice:t.triggerPrice,triggerOperator:t.triggerOperator,limitPrice:t.limitPrice??0n,builder:bo,builderFeeBpsTimes1k:0n}],gas:n,value:s}),l;for(let e of c.receipt.logs)if(e.address.toLowerCase()===t.registry.toLowerCase())try{let t=w({abi:Ln,data:e.data,topics:e.topics});if(t.eventName===`PendingOrderCreated`){l=t.args.orderId;break}}catch{}return{...c,stopOrderId:l}}async function il(e,t){return e.execute({address:t.registry,abi:In,functionName:`cancelPendingOrder`,args:[BigInt(t.orderId)],gas:t.gas??e.defaultGas})}async function al(e,t){return e.execute({address:t.pool,abi:Fn,functionName:`setManualVaultMode`,args:[t.enabled],gas:t.gas??e.defaultGas})}async function ol(e,t){return t.readContract({address:e.pool,abi:Fn,functionName:`getManualVaultMode`,args:[e.user]})}B(`
  fragment ProtocolFeeFields on ProtocolFeeRecord {
    id
    orderId
    recipient
    payer
    token
    amount
    isTakerSide
    market: market_id
    pool
    timestamp
    txHash
  }
`),B(`
  fragment BuilderFeeFields on BuilderFeeRecord {
    id
    orderId
    builder
    payer
    token
    amount
    market: market_id
    pool
    timestamp
    txHash
  }
`),B(`
  fragment SettlementFeeFields on SettlementFeeRecord {
    id
    recipient: feeRecipient
    amount: fee
    winningBacking
    market: market_id
    timestamp
    txHash
  }
`);async function sl(e={},t){let n={};return e.recipient!=null&&(n.recipient={_eq:e.recipient.toLowerCase()}),e.market!=null&&(n.market_id={_eq:e.market.toLowerCase()}),e.pool!=null&&(n.pool={_eq:e.pool.toLowerCase()}),e.payer!=null&&(n.payer={_eq:e.payer.toLowerCase()}),(await R(fl,{where:n,limit:e.limit??50,offset:e.offset??0},t)).ProtocolFeeRecord}async function cl(e={},t){let n={};return e.builder!=null&&(n.builder={_eq:e.builder.toLowerCase()}),e.market!=null&&(n.market_id={_eq:e.market.toLowerCase()}),e.payer!=null&&(n.payer={_eq:e.payer.toLowerCase()}),(await R(pl,{where:n,limit:e.limit??50,offset:e.offset??0},t)).BuilderFeeRecord}async function ll(e={},t){let n={};return e.market!=null&&(n.market_id={_eq:e.market.toLowerCase()}),e.recipient!=null&&(n.feeRecipient={_eq:e.recipient.toLowerCase()}),(await R(ml,{where:n,limit:e.limit??50,offset:e.offset??0},t)).SettlementFeeRecord}async function ul(e={},t){let n={};return e.user!=null&&(n.user={_eq:e.user.toLowerCase()}),e.builder!=null&&(n.builder={_eq:e.builder.toLowerCase()}),(await R(dl,{where:n,limit:e.limit??100,offset:e.offset??0},t)).BuilderApproval.map(({market_id:e,market:t,...n})=>({...n,market:e,pool:t?.poolAddress??``}))}var dl=B(`
  query BuilderApprovals($where: BuilderApproval_bool_exp!, $limit: Int, $offset: Int) {
         BuilderApproval(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) {
           id market_id market { poolAddress } user builder maxFeeBpsTimes1k blockNumber timestamp txHash
         }
       }
`),fl=B(`
  query ProtocolFees($where: ProtocolFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
         ProtocolFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...ProtocolFeeFields }
       }
`),pl=B(`
  query BuilderFees($where: BuilderFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
         BuilderFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...BuilderFeeFields }
       }
`),ml=B(`
  query SettlementFees($where: SettlementFeeRecord_bool_exp!, $limit: Int, $offset: Int) {
         SettlementFeeRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...SettlementFeeFields }
       }
`);async function hl(e,t){return t.readContract({address:e,abi:ur,functionName:`getMaxBuilderFeeBpsTimes1k`})}async function gl(e,t){return t.readContract({address:e.pool,abi:ur,functionName:`getBuilderApproval`,args:[e.user,e.builder]})}async function _l(e,t){return t.readContract({address:e.pool,abi:ur,functionName:`getEffectiveBuilderApproval`,args:[e.user,e.builder]})}async function vl(e,t){return e.execute({address:t.pool,abi:kn,functionName:`approveBuilder`,args:[t.builder,t.maxFeeBpsTimes1k],gas:t.gas??e.defaultGas})}var yl=class{map=new Map;getOrCreate(e,t){let n=this.map.get(e);return n||(n=t(),this.map.set(e,n),n.catch(()=>{this.map.get(e)===n&&this.map.delete(e)})),n}delete(e){this.map.delete(e)}values(){return this.map.values()}clear(){this.map.clear()}};function bl(e){if(e==null)return null;let{marketAddress:t,asset:n,question:r,expiry:i,tradingStart:a,quoteDecimals:o,intervalSec:s}=e;return{marketAddress:t,asset:n,question:r,expiry:i,tradingStart:a,quoteDecimals:o,intervalSec:s,interval:wi(e)}}async function xl(e,t={},n){return(await R(Rl,{where:Il(e,t,`Open`),limit:t.limit??1e3,offset:t.offset??0},n)).Order.map(e=>({id:e.id,orderId:e.orderId,market:e.market,marketInfo:bl(e.marketRow),pool:(e.marketRow?.poolAddress??``).toLowerCase(),side:e.side,isBid:e.isBid,price:e.price,quantityRemaining:e.quantityRemaining}))}async function Sl(e,t={},n){return(await R(zl,{where:Il(e,t),limit:t.limit??200,offset:t.offset??0},n)).Order.map(e=>({id:e.id,orderId:e.orderId,market:e.market,marketInfo:bl(e.marketRow),pool:(e.marketRow?.poolAddress??``).toLowerCase(),side:e.side,isBid:e.isBid,price:e.price,quantityRemaining:e.quantityRemaining,status:e.status,fullQuantity:e.fullQuantity,filledQuantity:e.filledQuantity,rested:e.rested,expireTimestampNs:e.expireTimestampNs,placedTxHash:e.placedTxHash,placedAtTimestamp:e.placedAtTimestamp,cancelReason:e.cancelReason,amendedFromOrderId:e.amendedFromOrderId,amendedToOrderId:e.amendedToOrderId}))}async function Cl(e,t={},n,r){return Fr(`Order`,`Order_bool_exp`,Il(e,t),n,r)}async function wl(e,t){let n={},r=e.map(e=>e.toLowerCase());if(r.length===0)return n;let i=(BigInt(Math.floor(Date.now()/1e3))*1000000000n).toString(),a=e=>({market_id:{_in:r},status:{_eq:`Open`},rested:{_eq:!0},quantityRemaining:{_gt:`0`},expireTimestampNs:{_gt:i},isBid:{_eq:e}}),o=await R(Bl,{bidWhere:a(!0),askWhere:a(!1)},t);for(let e of o.bids)n[e.market.toLowerCase()]={bestBid:e.price,bestAsk:null,mid:null};for(let e of o.asks){let t=e.market.toLowerCase(),r=n[t]??={bestBid:null,bestAsk:null,mid:null};r.bestAsk=e.price}for(let e of Object.values(n))e.bestBid!=null&&e.bestAsk!=null&&(e.mid=((BigInt(e.bestBid)+BigInt(e.bestAsk))/2n).toString());return n}function Tl(e,t,n){return{yesBids:e,yesAsks:t,noBids:t.map(e=>({price:n-e.price,quantity:e.quantity})).sort((e,t)=>e.price>t.price?-1:1),noAsks:e.map(e=>({price:n-e.price,quantity:e.quantity})).sort((e,t)=>e.price>t.price?1:-1)}}async function El(e,t){let n=await t.readContract({address:e,abi:ur,functionName:`getOrderBookParameters`});return{tickSize:n.tickSize,minQuantity:n.minQuantity,lotSize:n.lotSize}}var Dl=v(`IncorrectOrder()`);function Ol(e){return{orderId:e.orderId,isBid:e.isBid,owner:e.owner,userData:e.userData,price:e.price,fullQuantity:e.fullQuantity,quantityRemaining:e.quantityRemaining,expireTimestampNs:e.expireTimestampNs}}async function kl(e,t,n){try{return Ol(await n.readContract({address:e,abi:ur,functionName:`getOrder`,args:[t]}))}catch(e){if(e instanceof Zn&&e.data?.startsWith(Dl))return null;throw e}}async function Al(e,t,n){return[...await n.readContract({address:e,abi:ur,functionName:`getOwnOpenOrders`,account:t})]}async function jl(e,t,n){let[r,i,a]=await n.readContract({address:e,abi:ur,functionName:`getAllOpenOrdersOffChain`,args:[t.isBid,BigInt(t.maxCount??100),t.cursor??0n]});return{orders:r.map(Ol),hasMore:i,nextCursor:a}}async function Ml(e,t,n){let r=10n**BigInt(t?.decimals??6),{bids:i,asks:a}=await Z(e,t?.depth??10,n);return Tl(i,a,r)}async function Nl(e,t,n){return Z(e,t?.depth??12,n)}async function Pl(e){return Number(await e.getBlockNumber())}async function Fl(e={},t){let n=e.asOfSec??Math.floor(Date.now()/1e3),r={status:{_eq:`Open`},expireTimestampNs:{_lt:(BigInt(n)*1000000000n).toString()}};e.owner!=null&&(r.owner={_eq:e.owner.toLowerCase()});let i={};return e.pool!=null&&(i.poolAddress={_eq:e.pool.toLowerCase()}),e.marketType!=null&&(i.marketType={_eq:e.marketType}),Object.keys(i).length>0&&(r.market=i),(await R(Ll,{where:r,limit:e.limit??200,offset:e.offset??0},t)).Order.map(e=>({id:e.id,orderId:e.orderId,market:e.market,marketInfo:bl(e.marketRow),pool:(e.marketRow?.poolAddress??``).toLowerCase(),marketType:e.marketRow?.marketType??`SPOT`,owner:e.owner,isBid:e.isBid,price:e.price,quantityRemaining:e.quantityRemaining,expireTimestampNs:e.expireTimestampNs,placedAtTimestamp:e.placedAtTimestamp}))}function Il(e,t,n){let r={owner:{_eq:e.toLowerCase()}},i=n??t.status;return i!=null&&(r.status={_eq:i}),t.side!=null&&(r.side={_eq:t.side}),t.pool!=null&&(r.market={poolAddress:{_eq:t.pool.toLowerCase()}}),r}B(`
  fragment OrderMarketFields on Market {
    marketAddress
    asset
    question
    expiry
    tradingStart
    quoteDecimals
    intervalSec
  }
`);var Ll=B(`
  query SweepableOrders($where: Order_bool_exp!, $limit: Int, $offset: Int) {
        Order(where: $where, order_by: [{expireTimestampNs: asc}, {id: asc}], limit: $limit, offset: $offset) {
          id orderId owner isBid price quantityRemaining expireTimestampNs placedAtTimestamp
          market: market_id
          marketRow: market { poolAddress marketType ...OrderMarketFields }
        }
      }
`),Rl=B(`
  query OpenOrders($where: Order_bool_exp!, $limit: Int, $offset: Int) {
        Order(where: $where, order_by: {placedAtTimestamp: desc}, limit: $limit, offset: $offset) {
          id orderId side isBid price quantityRemaining
          market: market_id
          marketRow: market { poolAddress ...OrderMarketFields }
        }
      }
`),zl=B(`
  query Orders($where: Order_bool_exp!, $limit: Int, $offset: Int) {
        Order(where: $where, order_by: {placedAtTimestamp: desc}, limit: $limit, offset: $offset) {
          id orderId side isBid price quantityRemaining fullQuantity filledQuantity status
          rested expireTimestampNs placedTxHash placedAtTimestamp
          cancelReason amendedFromOrderId amendedToOrderId
          market: market_id
          marketRow: market { poolAddress ...OrderMarketFields }
        }
      }
`),Bl=B(`
  query BookTops($bidWhere: Order_bool_exp!, $askWhere: Order_bool_exp!) {
         bids: Order(where: $bidWhere, distinct_on: market_id, order_by: [{market_id: desc}, {price: desc}]) {
           market: market_id price
         }
         asks: Order(where: $askWhere, distinct_on: market_id, order_by: [{market_id: asc}, {price: asc}]) {
           market: market_id price
         }
       }
`);async function Z(e,t,n){let r=BigInt(t),[i,a]=await Promise.all([n.readContract({address:e,abi:ur,functionName:`getBookLevels`,args:[!0,r]}),n.readContract({address:e,abi:ur,functionName:`getBookLevels`,args:[!1,r]})]);return{bids:[...i],asks:[...a]}}async function Vl(e,t){if(t.price<=0n||t.quantity<=0n)throw new P(`price and quantity must be > 0`);let n=xo[t.side],r=t.orderType??0,i=t.expireTimestampNs??await e.marketExpiryNs(t.pool),a=t.userData??0n;return{address:t.pool,abi:kn,functionName:`placeBinaryOrder`,args:[n,t.price,t.quantity,i,r,0,t.builder??`0x0000000000000000000000000000000000000000`,t.builderFeeBpsTimes1k??0n,a],gas:t.gas??e.defaultGas}}async function Hl(e,t){let n=await Vl(e,t);if(t.autoApprove!==!1){let n=t.gas??e.defaultGas,r=e.escrow(t,await e.tokens(t));r.kind===`erc20`?await e.approveIfNeeded(r.token,t.pool,r.amount,n):await e.ensureOperator(r.outcomeToken,t.pool,n)}return e.executeOrder(n)}async function Ul(e,t){return e.execute({address:t.pool,abi:kn,functionName:`cancelOrder`,args:[BigInt(t.orderId)],gas:t.gas??e.defaultGas})}async function Wl(e,t){return e.execute({address:t.pool,abi:kn,functionName:`reduceOrder`,args:[BigInt(t.orderId),t.newQuantityRemaining],gas:t.gas??e.defaultGas})}async function Gl(e,t){return e.execute({address:t.pool,abi:kn,functionName:`cancelExpiredOrders`,args:[t.orderIds.map(e=>BigInt(e))],gas:t.gas??e.defaultGas})}async function Kl(e,t){return e.execute({address:t.pool,abi:kn,functionName:`sweepExpiredAtLevel`,args:[t.isBid,t.price,t.maxCount],gas:t.gas??e.defaultGas})}function ql(e){let t=10n**BigInt(e.baseDecimals);return e.isBid?{token:e.quoteToken,amount:(e.price*e.quantity+t-1n)/t}:e.baseIsNative?{native:e.quantity}:{token:e.baseToken,amount:e.quantity}}function Jl(e,t){if(t.price<=0n||t.quantity<=0n)throw new P(`price and quantity must be > 0`);let n=ql(t);return{address:t.pool,abi:An,functionName:`placeOrder`,args:[t.isBid,0n,t.price,t.quantity,t.expireTimestampNs??yo(),t.orderType??0,0,t.builder??`0x0000000000000000000000000000000000000000`,t.builderFeeBpsTimes1k??0n],gas:t.gas??e.defaultGas,value:`native`in n?n.native:0n}}async function Yl(e,t){let n=ql(t);return t.autoApprove!==!1&&`token`in n&&await e.approveIfNeeded(n.token,t.pool,n.amount,t.gas??e.defaultGas),e.executeOrder(Jl(e,t))}function Xl(e,t){let n=[],r=new Set,i=[];for(let a of e.logs){if(a.address.toLowerCase()!==t.toLowerCase())continue;let e;try{e=w({abi:uo,data:a.data,topics:a.topics})}catch{continue}if(e.eventName===`OrderPlaced`){let t=e.args.placedOrder;n.push({orderId:t.orderId,isBid:t.isBid,price:t.price,quantity:t.fullQuantity,userData:t.userData,expireTimestampNs:t.expireTimestampNs})}else e.eventName===`OrderCancelled`||e.eventName===`OrderExpired`?r.add(e.args.orderId):e.eventName===`OrderFilled`&&i.push({takerOrderId:e.args.takerOrderId,makerOrderId:e.args.makerOrderId,quantityFilled:e.args.quantityFilled,takerRemainingQuantity:e.args.takerRemainingQuantity,makerRemainingQuantity:e.args.makerRemainingQuantity,fillPrice:e.args.fillPrice})}return{placed:n,terminated:r,fills:i}}async function Zl(e,t){if(t.orders.length===0)throw new P(`orders must not be empty`);for(let[e,n]of t.orders.entries())if(n.price<=0n||n.quantity<=0n)throw new P(`orders[${e}]: price and quantity must be > 0`);let n=t.gas??e.defaultGas,r=10n**BigInt(t.baseDecimals),i=t.orders.map(e=>({isBid:e.isBid,userData:e.userData??0n,price:e.price,quantity:e.quantity,expireTimestampNs:e.expireTimestampNs??yo(),orderType:e.orderType??0,selfMatchingOption:0,builder:bo,builderFeeBpsTimes1k:0n}));if(t.autoApprove!==!1){let i=0n,a=0n;for(let e of t.orders)e.isBid?i+=(e.price*e.quantity+r-1n)/r:a+=e.quantity;i>0n&&await e.approveIfNeeded(t.quoteToken,t.pool,i,n),a>0n&&!t.baseIsNative&&await e.approveIfNeeded(t.baseToken,t.pool,a,n)}let a=await e.execute({address:t.pool,abi:jn,functionName:`placeOrders`,args:[i],gas:n}),{placed:o,fills:s}=Xl(a.receipt,t.pool),c=0,l=i.map(e=>{let t=o[c];return t&&t.isBid===e.isBid&&t.price===e.price&&t.quantity===e.quantity&&t.userData===e.userData&&t.expireTimestampNs===e.expireTimestampNs?(c+=1,{success:!0,orderId:t.orderId}):{success:!1}});return{...a,outcomes:l,fills:s}}async function Ql(e,t){if(t.orderIds.length===0)throw new P(`orderIds must not be empty`);let n=t.orderIds.map(e=>BigInt(e)),r=await e.execute({address:t.pool,abi:jn,functionName:`cancelOrders`,args:[n],gas:t.gas??e.defaultGas}),{terminated:i}=Xl(r.receipt,t.pool);return{...r,outcomes:n.map(e=>({orderId:e,cancelled:i.has(e)}))}}async function $l(e,t){if(t.reductions.length===0)throw new P(`reductions must not be empty`);return e.execute({address:t.pool,abi:jn,functionName:`reduceOrders`,args:[t.reductions.map(e=>({orderId:BigInt(e.orderId),newQuantityRemaining:e.newQuantityRemaining}))],gas:t.gas??e.defaultGas})}function eu(e,t){if(e.length===0)throw new P(`${t} must not be empty`)}function tu(e,t){if(e<=0n||t<=0n)throw new P(`price and quantity must be > 0`)}function nu(e){return{isBid:e.isBid,userData:e.userData??0n,price:e.price,quantity:e.quantity,expireTimestampNs:e.expireTimestampNs??yo(),orderType:e.orderType??0,selfMatchingOption:e.selfMatchingOption??0,builder:e.builder??`0x0000000000000000000000000000000000000000`,builderFeeBpsTimes1k:e.builderFeeBpsTimes1k??0n}}async function ru(e,t){return tu(t.newOrder.price,t.newOrder.quantity),Do(await e.execute({address:t.pool,abi:An,functionName:`amendOrder`,args:[{oldOrderId:BigInt(t.oldOrderId),alwaysPlace:t.alwaysPlace??!1,newOrder:nu(t.newOrder)}],gas:t.gas??e.defaultGas}),{pool:t.pool})}async function iu(e,t){eu(t.amendments,`amendments`);for(let e of t.amendments)tu(e.newOrder.price,e.newOrder.quantity);return Eo(await e.execute({address:t.pool,abi:jn,functionName:`amendOrders`,args:[t.amendments.map(e=>({oldOrderId:BigInt(e.oldOrderId),alwaysPlace:e.alwaysPlace??!1,newOrder:nu(e.newOrder)}))],gas:t.gas??e.defaultGas}),{pool:t.pool,amendmentCount:t.amendments.length})}function au(e,t){if(t.price<=0n||t.quantity<=0n)throw new P(`price and quantity must be > 0`);return{address:t.pool,abi:Mn,functionName:`placeOrder`,args:[t.isBid,0n,t.price,t.quantity,t.expireTimestampNs??yo(),t.orderType??0,0,t.builder??`0x0000000000000000000000000000000000000000`,t.builderFeeBpsTimes1k??0n],gas:t.gas??e.defaultGas}}async function ou(e,t){return e.executeOrder(au(e,t))}async function su(e,t){let n=So(await Vl(e,t),`Place ${t.side} order on binary pool ${t.pool}`);if(t.autoApprove===!1)return{order:n};let r=e.escrow(t,await e.tokens(t));return{order:n,approval:r.kind===`erc20`?Co(r.token,t.pool,`Approve collateral ${r.token} for binary pool ${t.pool}`):So({address:r.outcomeToken,abi:hr,functionName:`setOperator`,args:[t.pool,!0],gas:0n},`Approve binary pool ${t.pool} as operator on outcome tokens ${r.outcomeToken}`)}}async function cu(e,t){let n=So(Jl(e,t),`Place spot ${t.isBid?`buy`:`sell`} order on pool ${t.pool}`),r=ql(t);return`native`in r||t.autoApprove===!1?{order:n}:{order:n,approval:Co(r.token,t.pool,`Approve ${r.token} for spot pool ${t.pool}`)}}async function lu(e,t){return{order:So(au(e,t),`Place perp ${t.isBid?`long`:`short`} order on pool ${t.pool}`)}}var uu=B(`
  query SyncStatus($chainId: Int!) {
    chain_metadata(where: { chain_id: { _eq: $chainId } }) {
      chain_id
      latest_processed_block
      block_height
      num_events_processed
    }
  }
`);async function du(e,t){let n=(await R(uu,{chainId:e},t)).chain_metadata[0];return n?{chainId:e,latestProcessedBlock:n.latest_processed_block,blockHeight:n.block_height,numEventsProcessed:n.num_events_processed}:null}B(`
  fragment RouterActionFields on RouterActionRecord {
    id
    kind
    account
    market: market_id
    amount
    payout
    routedVia
    timestamp
    txHash
  }
`);async function fu(e,t={},n){let r={account:{_eq:e.toLowerCase()}};return t.market!=null&&(r.market_id={_eq:t.market.toLowerCase()}),t.kind!=null&&(r.kind={_eq:t.kind}),Ir((await R(pu,{where:r,limit:t.limit??50,offset:t.offset??0},n)).RouterActionRecord)}var pu=B(`
  query RouterActions($where: RouterActionRecord_bool_exp!, $limit: Int, $offset: Int) {
         RouterActionRecord(where: $where, order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...RouterActionFields }
       }
`);async function mu(e,t){let n=(await R(hu,{pool:e.toLowerCase()},t)).Market[0];return n?sa(n):null}var hu=B(`
  query MarketByPool($pool: String!) {
    Market(
      where: { poolAddress: { _eq: $pool } }
      order_by: { createdAtTimestamp: desc }
      limit: 1
    ) {
      ...MarketFields
    }
  }
`);async function gu(e,t){return Ir((await R(vu,{pool:e.toLowerCase()},t)).PoolBinding)}async function _u(e,t){return(await R(yu,{id:e.toLowerCase()},t)).Pool_by_pk??null}var vu=B(`
  query PoolBindings($pool: String!) {
         PoolBinding(where: {poolAddress: {_eq: $pool}}, order_by: {nonce: desc}) {
           id poolAddress marketId nonce fromBlock fromLogIndex fromTimestamp
           toBlock toLogIndex toTimestamp closedBy
         }
       }
`),yu=B(`
  query PoolByPk($id: String!) {
         Pool_by_pk(id: $id) {
           id address collateral creator currentMarketId currentNonce generationCount
           createdAtTimestamp updatedAtTimestamp
         }
       }
`);async function bu(e,t,n,r){return[...await r.readContract({address:n,abi:Cr,functionName:`getFreePools`,args:[e,t]})]}async function xu(e,t,n={},r){let i={pool:{_eq:e.toLowerCase()},intervalSeconds:{_eq:t}},a={};return n.from!=null&&(a._gte=n.from),n.to!=null&&(a._lte=n.to),Object.keys(a).length&&(i.bucketStart=a),(await R(Su,{where:i,limit:n.limit??500},r)).Candle.slice().reverse()}var Su=B(`
  query Candles($where: Candle_bool_exp!, $limit: Int) {
        Candle(where: $where, order_by: {bucketStart: desc}, limit: $limit) {
          bucketStart openPrice high low closePrice baseVolume quoteVolume tradeCount
        }
      }
`);function Cu(e,t){switch(e.eventName){case`OrderFilled`:ju(e,t);break;case`OrderPlaced`:Du(e,t);break;case`BinaryOrderPlaced`:Eu(e,t);break;case`OrderRested`:Ou(e,t);break;case`OrderCancelled`:ku(e,t,`Cancelled`);break;case`OrderCancelledSelfMatch`:case`MakerOrderCancelledExceedsPosition`:ku(e,t,`Cancelled`);break;case`OrderExpired`:ku(e,t,`Expired`);break;case`OrderReduced`:Au(e,t);break;case`MarkPriceUpdated`:Nu(e,t);break;case`OrderBookParametersUpdated`:Pu(e,t);break;case`FundingUpdated`:Fu(e,t);break;case`OpenInterestUpdated`:Iu(e,t);break;case`MarketCreated`:Lu(e,t);break;case`PoolReleased`:Bu(e,t);break;case`MarketFinalized`:Vu(e,t);break;case`SetMinted`:Mu(e,t,e.args.amount,`add`);break;case`SetBurned`:Mu(e,t,e.args.amount,`sub`);break;case`PoolFinalized`:zu(e,t);break;case`Redeemed`:Hu(e,t);break;case`StatusChanged`:Uu(e,t);break;case`Resolved`:Wu(e,t);break;case`Voided`:Gu(e,t)}}function wu(e,t){let n=e.poolToMarket.get(t);return n?e.markets.get(n):void 0}function Tu(e,t){let n=e.addressToMarket.get(t),r=n?e.markets.get(n):void 0;return r&&r.marketType===`BINARY`?r:void 0}function Eu(e,t){let n=li(e.address,e.args.orderId),r=V(e.args.kind),i=t.orders.get(n);i?(t.orders.set(n,{...i,side:r}),t.pendingKinds.delete(n)):t.pendingKinds.set(n,r)}function Du(e,t){let n=wu(t,e.address);if(!n)return;let r=e.args.placedOrder,i=r.orderId,a=r.isBid,o=r.userData,s=r.fullQuantity,c=r.quantityRemaining,l=r.expireTimestampNs,u=n.marketType===`BINARY`,d=li(e.address,i),f=u?t.pendingKinds.get(d):void 0;f&&t.pendingKinds.delete(d);let p={id:d,market_id:n.id,pool:e.address,orderId:i.toString(),owner:W(r.owner),side:f,isBid:a,userData:o.toString(),price:r.price.toString(),fullQuantity:s.toString(),quantityRemaining:c.toString(),filledQuantity:(s-c).toString(),expireTimestampNs:l.toString(),status:c===0n?`Filled`:u?`Open`:`Closed`,rested:!1,createdAt:e.timestampSec.toString(),txHash:e.txHash};t.orders.set(d,p)}function Ou(e,t){let n=li(e.address,e.args.orderId),r=t.orders.get(n);r&&t.orders.set(n,{...r,rested:!0,status:r.status===`Closed`?`Open`:r.status})}function ku(e,t,n){let r=li(e.address,e.args.orderId),i=t.orders.get(r);i&&t.orders.set(r,{...i,status:n})}function Au(e,t){let n=li(e.address,e.args.orderId),r=t.orders.get(n);if(!r)return;let i=BigInt(r.quantityRemaining)-e.args.newQuantity;t.orders.set(n,{...r,fullQuantity:(BigInt(r.fullQuantity)-i).toString(),quantityRemaining:e.args.newQuantity.toString()})}function ju(e,t){let n=wu(t,e.address);if(!n)return;let r=li(e.address,e.args.makerOrderId),i=t.orders.get(r),a=i?.side,o=i?.owner,s=e.args.quantityFilled,c=e.args.fillPrice,l=s*c/10n**BigInt(n.baseDecimals??6),u=ui(e.blockNumber,e.logIndex),d={id:u,market_id:n.id,pool:e.address,taker:void 0,maker:o,takerSide:void 0,makerSide:a,takerIsBid:i?!i.isBid:void 0,kind:void 0,fillPrice:c.toString(),quantity:s.toString(),quoteQuantity:l.toString(),takerRemainingQuantity:e.args.takerRemainingQuantity.toString(),makerRemainingQuantity:e.args.makerRemainingQuantity.toString(),timestamp:e.timestampSec.toString(),blockNumber:e.blockNumber,logIndex:e.logIndex,txHash:e.txHash,takerOrder_id:li(e.address,e.args.takerOrderId),makerOrder_id:r};if(t.fills.set(u,d),i){let n=e.args.makerRemainingQuantity;t.orders.set(r,{...i,quantityRemaining:n.toString(),filledQuantity:(BigInt(i.fullQuantity)-n).toString(),status:n===0n&&i.status===`Open`?`Filled`:i.status})}let f={...n,lastPrice:c.toString(),lastTradeAt:e.timestampSec.toString(),cumulativeBaseVolume:(BigInt(n.cumulativeBaseVolume)+s).toString(),cumulativeQuoteVolume:(BigInt(n.cumulativeQuoteVolume)+l).toString(),tradeCount:(BigInt(n.tradeCount)+1n).toString()};t.markets.set(n.id,f)}function Mu(e,t,n,r){let i=wu(t,e.address);if(!i||i.marketType!==`BINARY`)return;let a=BigInt(i.backing),o=r===`add`?a+n:a>n?a-n:0n;t.markets.set(i.id,{...i,backing:o.toString()})}function Nu(e,t){let n=wu(t,e.address);!n||n.marketType!==`SPOT`||t.markets.set(n.id,{...n,markPrice:e.args.markPrice.toString()})}function Pu(e,t){let n=wu(t,e.address);if(!n||n.marketType===`BINARY`)return;let r=e.args.newParameters;t.markets.set(n.id,{...n,tickSize:r.tickSize.toString(),minQuantity:r.minQuantity.toString(),lotSize:r.lotSize.toString()})}function Fu(e,t){let n=wu(t,e.address);if(!n||n.marketType!==`PERP`)return;let r=e.args.markPrice,i=r!=null&&r!==0n;t.markets.set(n.id,{...n,fundingRate:e.args.fundingRate.toString(),cumulativeFundingPerUnit:e.args.cumulativeFundingPerUnit.toString(),indexPrice:e.args.indexPrice.toString(),fundingUpdatedAt:e.timestampSec.toString(),...i?{markPrice:r.toString(),markPriceUpdatedAt:e.timestampSec.toString()}:{}});let a=`${e.blockNumber}_${e.logIndex}`;t.fundingUpdates.set(a,{id:`${e.address.toLowerCase()}_${e.blockNumber}_${e.logIndex}`,pool:e.address.toLowerCase(),fundingRate:e.args.fundingRate.toString(),cumulativeFundingPerUnit:e.args.cumulativeFundingPerUnit.toString(),indexPrice:e.args.indexPrice.toString(),markPrice:i?r.toString():null,intervalsSettled:(e.args.intervalsSettled??0n).toString(),fundingWindowSec:n.fundingWindowSec,fundingIntervalSec:n.fundingIntervalSec,timestamp:e.timestampSec.toString(),blockNumber:e.blockNumber.toString(),logIndex:e.logIndex})}function Iu(e,t){let n=wu(t,e.address);!n||n.marketType!==`PERP`||t.markets.set(n.id,{...n,openInterest:e.args.openInterest.toString(),openInterestUpdatedAt:e.timestampSec.toString()})}function Lu(e,t){let n=W(e.args.marketId);if(t.markets.has(n))return;let r=Number(e.args.tradingStart),i=Number(e.args.expiry),a=`intervalSec`in e.args?e.args.intervalSec.toString():String(i-r),o={id:n,marketType:`BINARY`,poolAddress:W(e.args.pool),lastPrice:null,lastTradeAt:null,cumulativeBaseVolume:`0`,cumulativeQuoteVolume:`0`,tradeCount:`0`,baseDecimals:6,quoteDecimals:6,createdAtTimestamp:e.timestampSec.toString(),marketId:n,marketAddress:W(e.args.market),yesTokenId:e.args.yesId.toString(),noTokenId:e.args.noId.toString(),collateral:W(e.args.collateral),asset:e.args.asset,question:e.args.question,status:e.timestampSec>=r&&e.timestampSec<i?`Trading`:e.timestampSec>=i?`Settling`:`Listed`,oracleQuestion:null,strike:e.args.strike.toString(),tradingStart:r.toString(),expiry:i.toString(),winningOutcome:null,resolvedAtBlock:null,resolvedAtTimestamp:null,createdByTx:null,voided:!1,backing:`0`,nonce:`nonce`in e.args?e.args.nonce.toString():null,finalized:!1,netBacking:null,intervalSec:a,interval:wi({intervalSec:a}),operatorId:`operatorId`in e.args?Number(e.args.operatorId):null,venueId:`venueId`in e.args?W(e.args.venueId):null,context:`context`in e.args?W(e.args.context):null};t.indexMarket(o)}function Ru(e,t){let n=`0x${(t>>64n).toString(16).padStart(40,`0`)}`,r=(t&(1n<<64n)-1n).toString(),i=wu(e,n);if(i&&i.marketType===`BINARY`&&(i.nonce==null||i.nonce===r))return i;for(let t of e.markets.values())if(t.marketType===`BINARY`&&t.poolAddress===n&&t.nonce===r)return t}function zu(e,t){let n=wu(t,e.address);!n||n.marketType!==`BINARY`||t.markets.set(n.id,{...n,backing:`0`,finalized:!0})}function Bu(e,t){let n=e.args.marketId.toLowerCase(),r=e.args.pool.toLowerCase();t.poolToMarket.get(r)===n&&t.poolToMarket.delete(r)}function Vu(e,t){if(`marketId`in e.args){let n=e.args.marketId.toLowerCase(),r=t.markets.get(n);r&&r.marketType===`BINARY`&&t.markets.set(n,{...r,finalized:!0,status:`Finalized`});return}let n=Ru(t,e.args.marketKey);n&&t.markets.set(n.id,{...n,finalized:!0,status:`Finalized`,backing:`0`,netBacking:e.args.netBacking.toString()})}function Hu(e,t){let n=Ru(t,e.args.marketKey);if(!n||n.netBacking==null)return;let r=e.args.collateralOut,i=BigInt(n.netBacking);t.markets.set(n.id,{...n,netBacking:(i>r?i-r:0n).toString()})}function Uu(e,t){let n=Tu(t,e.address);if(!n)return;let r=ii[Number(e.args.newStatus)];r&&t.markets.set(n.id,{...n,status:r})}function Wu(e,t){let n=Tu(t,e.address);if(!n)return;let r=e.args.payoutNumerators??[],i=0;for(let e=1;e<r.length;e++)(r[e]??0n)>(r[i]??0n)&&(i=e);t.markets.set(n.id,{...n,status:`Resolved`,winningOutcome:i})}function Gu(e,t){let n=Tu(t,e.address);n&&t.markets.set(n.id,{...n,status:`Voided`,voided:!0})}async function Ku(e,t,n){return Er(e,t,n)}var qu=`
  id market { id poolAddress } maker makerSide takerIsBid
  takerOrder_id makerOrder_id
  fillPrice quantity quoteQuantity takerRemainingQuantity makerRemainingQuantity
  timestamp blockNumber txHash
`,Ju=`
  id market { id poolAddress } orderId owner side isBid userData price
  fullQuantity quantityRemaining filledQuantity status rested expireTimestampNs
  placedAtTimestamp placedTxHash
`,Yu=`chain_metadata(where: {chain_id: {_eq: $chainId}}) { latest_processed_block block_height }`;function Xu(e){let t=e?.latest_processed_block??0;return{snapshotBlock:t,headBlock:e?.block_height??t}}function Zu(e){let t=Number(e.split(`_`)[1]);return Number.isFinite(t)?t:0}function Qu(e){return{id:e.id,market_id:e.market.id,pool:W(ra(e.market.poolAddress)),taker:void 0,maker:e.maker?W(ra(e.maker)):void 0,takerSide:void 0,makerSide:e.makerSide??void 0,takerIsBid:e.takerIsBid??void 0,kind:void 0,takerOrder_id:e.takerOrder_id,makerOrder_id:e.makerOrder_id,fillPrice:e.fillPrice,quantity:e.quantity,quoteQuantity:e.quoteQuantity,takerRemainingQuantity:e.takerRemainingQuantity,makerRemainingQuantity:e.makerRemainingQuantity,timestamp:e.timestamp,blockNumber:Number(e.blockNumber),logIndex:Zu(e.id),txHash:e.txHash}}function $u(e){return{id:e.id,market_id:e.market.id,pool:W(ra(e.market.poolAddress)),orderId:e.orderId,owner:W(ra(e.owner)),side:e.side??void 0,isBid:e.isBid,userData:e.userData,price:e.price,fullQuantity:e.fullQuantity,quantityRemaining:e.quantityRemaining,filledQuantity:e.filledQuantity,status:e.status,rested:e.rested,expireTimestampNs:e.expireTimestampNs,createdAt:e.placedAtTimestamp,txHash:e.placedTxHash}}async function ed(e,t,n){let r=t!==`all`,i=r?t.map(e=>e.toLowerCase()):[],a=r?`where: {poolAddress: {_in: $pools}}, `:``,o=r?`pool: {_in: $pools}`:``,s=`expireTimestampNs: {_gte: "${(BigInt(Math.floor(Date.now()/1e3))*1000000000n).toString()}"}`,c=r?`{status: {_eq: "Open"}, ${s}, market: {poolAddress: {_in: $pools}}}`:`{status: {_eq: "Open"}, ${s}}`,l=await Ku(n.indexerUrl,`query MarketsSnapshot($chainId: Int!, ${r?`$pools: [String!]!, `:``}$marketLimit: Int!, $fillLimit: Int!, $orderLimit: Int!) {
      ${Yu}
      Market(${a}order_by: {createdAtTimestamp: desc}, limit: $marketLimit) { ${na} }
      Fill(${o?`where: {${o}}, `:``}order_by: [{timestamp: desc}, {blockNumber: desc}], limit: $fillLimit) { ${qu} }
      openOrders: Order(where: ${c}, order_by: {placedAtTimestamp: desc}, limit: $orderLimit) { ${Ju} }
    }`,{chainId:e,...r?{pools:i}:{},marketLimit:r?i.length:500,fillLimit:r?200*Math.max(1,i.length):300,orderLimit:r?2e3*Math.max(1,i.length):4e3}),u=ca(l.Market);return n.store.mergeSnapshot({markets:u,fills:l.Fill.map(Qu),orders:(l.openOrders??[]).map($u)}),{...Xu(l.chain_metadata[0]),pools:u.map(e=>e.poolAddress.toLowerCase()),marketAddresses:u.flatMap(e=>e.marketType===`BINARY`?[e.marketAddress.toLowerCase()]:[])}}async function td(e,t,n){let r=await Ku(n.indexerUrl,`query UserSnapshot($chainId: Int!, $user: String!, $userLimit: Int!) {
      ${Yu}
      userFills: Fill(
        where: {_or: [{takerOrder: {owner: {_eq: $user}}}, {maker: {_eq: $user}}]},
        order_by: [{timestamp: desc}, {blockNumber: desc}], limit: $userLimit
      ) { ${qu} }
      userOrders: Order(
        where: {owner: {_eq: $user}},
        order_by: {placedAtTimestamp: desc}, limit: $userLimit
      ) { ${Ju} }
    }`,{chainId:e,user:t.toLowerCase(),userLimit:200});return n.store.mergeSnapshot({markets:[],fills:r.userFills.map(Qu),orders:r.userOrders.map($u)}),Xu(r.chain_metadata[0])}var nd=Xa(K),rd=1e3,id=500,ad=8e3,od=15e3,sd=3e4;function cd(e,t){return`${e}_${t}`}var ld=class{deps;client=null;unwatchHeads=null;unwatchLogs=null;retryTimer=null;retryDelay=id;poolRefs=new Map;allRefs=0;discoverRefs=0;userRefs=new Map;allPools=new Set;hydratedPools=new Set;hydratedUsers=new Set;lingers=new Map;hydrations=new Map;pendingPools=new Set;live=!1;reconnecting=!1;lastBlock=0;lastHeadAt=0;headsWatchdog=null;probingHeads=!1;watchAddresses=[];watchSet=new Set;blockTs=new Map;processed=new Set;inbox=new Map;constructor(e){this.deps=e}get chainId(){return this.deps.getConfig().chain.id}get discoverySources(){if(this.discoverRefs===0)return[];let e=this.deps.getConfig().addresses,t=[];return e?.marketCreator&&t.push(e.marketCreator.toLowerCase()),e?.binaryModule&&t.push(e.binaryModule.toLowerCase()),t}activePools(){let e=new Set(this.poolRefs.keys());if(this.allRefs>0)for(let t of this.allPools)e.add(t);for(let t of this.pendingPools)e.add(t);return e}async watchMarket(e){let t=e.toLowerCase();this.acquire(this.poolRefs,t,`pool:${t}`);try{this.hydratedPools.has(t)||await this.ensureHydration(`pool:${t}`,()=>this.hydratePools([t]))}catch(e){throw this.releaseNow(this.poolRefs,t),this.ensureSubscriptions(),e}return this.handle(()=>this.release(this.poolRefs,t,`pool:${t}`,()=>this.teardownPool(t)))}async watchAllMarkets(e){this.cancelLinger(`all`),this.allRefs++,e&&this.discoverRefs++;try{this.allPools.size===0?await this.ensureHydration(`all`,()=>this.hydrateAll()):this.ensureSubscriptions()}catch(t){throw this.allRefs--,e&&this.discoverRefs--,t}return this.handle(()=>{e&&this.discoverRefs--,this.allRefs--,this.allRefs===0?this.linger(`all`,()=>this.teardownAll()):this.ensureSubscriptions()})}async watchUser(e){let t=e.toLowerCase();this.acquire(this.userRefs,t,`user:${t}`);try{this.hydratedUsers.has(t)||await this.ensureHydration(`user:${t}`,async()=>{await td(this.chainId,t,{indexerUrl:this.deps.getConfig().indexerUrl,store:this.deps.store}),this.hydratedUsers.add(t),this.deps.store.commit()})}catch(e){throw this.releaseNow(this.userRefs,t),e}return this.handle(()=>this.release(this.userRefs,t,`user:${t}`,()=>{this.userRefs.delete(t),this.hydratedUsers.delete(t)}))}getWatchStatus(e){let t=e.toLowerCase();return this.pendingPools.has(t)?`hydrating`:this.poolRefs.has(t)||this.allRefs>0&&this.allPools.has(t)?this.live?`live`:`hydrating`:`unwatched`}stopLive(){for(let e of this.lingers.values())clearTimeout(e);this.lingers.clear(),this.poolRefs.clear(),this.userRefs.clear(),this.allRefs=this.discoverRefs=0,this.allPools.clear(),this.hydratedPools.clear(),this.hydratedUsers.clear(),this.pendingPools.clear(),this.hydrations.clear(),this.unwatchHeads?.(),this.unwatchLogs?.(),this.unwatchHeads=this.unwatchLogs=null,this.retryTimer&&clearTimeout(this.retryTimer),this.retryTimer=null,this.live=!1,this.watchAddresses=[],this.watchSet.clear(),this.inbox.clear(),this.deps.store.setStatus({mode:`init`,wsConnected:!1,watchCount:0})}acquire(e,t,n){this.cancelLinger(n),e.set(t,(e.get(t)??0)+1)}release(e,t,n,r){let i=(e.get(t)??0)-1;if(i>0){e.set(t,i);return}e.set(t,0),this.linger(n,r)}releaseNow(e,t){let n=(e.get(t)??0)-1;n>0?e.set(t,n):e.delete(t)}handle(e){let t=!1;return{stop:()=>{t||(t=!0,e())}}}linger(e,t){this.cancelLinger(e),this.lingers.set(e,setTimeout(()=>{this.lingers.delete(e),t()},sd))}cancelLinger(e){let t=this.lingers.get(e);t&&(clearTimeout(t),this.lingers.delete(e))}teardownPool(e){this.poolRefs.delete(e),this.hydrations.delete(`pool:${e}`),this.allRefs>0&&this.allPools.has(e)||(this.deps.store.purgePool(e),this.hydratedPools.delete(e)),this.ensureSubscriptions(),this.deps.store.commit()}teardownAll(){this.hydrations.delete(`all`);for(let e of this.allPools)this.poolRefs.has(e)||(this.deps.store.purgePool(e),this.hydratedPools.delete(e));this.allPools.clear(),this.ensureSubscriptions(),this.deps.store.commit()}async ensureHydration(e,t){let n=this.hydrations.get(e);if(n)return n;let r=this.deps.dbg.span(`liveTail.hydrate:${e}`,()=>t()).finally(()=>this.hydrations.delete(e));return this.hydrations.set(e,r),r}async hydratePools(e){for(let t of e)this.pendingPools.add(t);try{this.ensureSubscriptions();let t=await ed(this.chainId,e,{indexerUrl:this.deps.getConfig().indexerUrl,store:this.deps.store});this.ensureSubscriptions(),await this.sealSeam(t.snapshotBlock,t.headBlock,e);for(let t of e)this.hydratedPools.add(t)}finally{for(let t of e)this.pendingPools.delete(t)}this.markLive()}async hydrateAll(){let e=await ed(this.chainId,`all`,{indexerUrl:this.deps.getConfig().indexerUrl,store:this.deps.store});for(let t of e.pools)this.allPools.add(t),this.pendingPools.add(t);try{this.ensureSubscriptions(),await this.sealSeam(e.snapshotBlock,e.headBlock,e.pools);for(let t of e.pools)this.hydratedPools.add(t)}finally{for(let t of e.pools)this.pendingPools.delete(t)}this.markLive()}async sealSeam(e,t,n){let r=Math.max(t,this.deps.store.status.headBlock,...this.blockTs.keys()),i=this.addressesFor(new Set(n));i.length>0&&r>=e+1&&await this.backfill(e+1,r,i),this.lastBlock=Math.max(this.lastBlock,r,e),await this.replayInbox(e,new Set(i)),this.deps.store.setStatus({snapshotBlock:e,lastBlock:this.lastBlock})}markLive(){this.live=!0,this.retryDelay=id,this.deps.store.setStatus({mode:`tailing`,lastBlock:this.lastBlock,watchCount:this.activePools().size})}addressesFor(e){let t=new Set(e);for(let n of e){let e=this.deps.store.poolToMarket.get(n),r=e?this.deps.store.markets.get(e):void 0;r?.marketType===`BINARY`&&t.add(r.marketAddress.toLowerCase())}return[...t]}ensureSubscriptions(){let e=this.activePools(),t=new Set(this.addressesFor(e));for(let e of this.discoverySources)t.add(e);if(e.size>0){let e=this.deps.getConfig().addresses;e?.binaryModule&&t.add(e.binaryModule.toLowerCase()),e?.binarySettlement&&t.add(e.binarySettlement.toLowerCase())}let n=[...t].sort(),r=n.length===this.watchAddresses.length&&n.every((e,t)=>e===this.watchAddresses[t]);if(this.deps.store.setStatus({watchCount:e.size}),!(r&&(this.unwatchLogs||n.length===0))){if(this.unwatchLogs?.(),this.unwatchLogs=null,this.watchAddresses=n,this.watchSet=new Set(n),n.length===0){this.unwatchHeads?.(),this.unwatchHeads=null,this.stopHeadsWatchdog();return}this.client??=this.deps.getClient(),this.unwatchHeads??=this.client.watchBlocks({emitMissed:!0,includeTransactions:!1,onBlock:e=>void this.onHead(e),onError:()=>this.onWsError()}),this.startHeadsWatchdog(),this.unwatchLogs=this.client.watchEvent({address:n,onLogs:e=>this.onLogs(e),onError:()=>this.onWsError()})}}async onHead(e){if(this.lastHeadAt=Date.now(),!e||e.number===null)return;let t=Number(e.number);this.deps.store.setStatus({wsConnected:!0,headBlock:Math.max(t,this.deps.store.status.headBlock)}),this.blockTs.set(t,Number(e.timestamp)),this.pruneMaps(t),this.live&&(this.lastBlock=Math.max(this.lastBlock,t),this.deps.store.setStatus({lastBlock:this.lastBlock}))}onLogs(e){let t=[];for(let n of e){if(n.blockNumber===null||n.logIndex===null)continue;let e=n.address.toLowerCase();!this.live||this.pendingPools.has(e)||this.pendingMarketOf(e)?this.inbox.set(cd(Number(n.blockNumber),n.logIndex),n):t.push(n)}if(t.length===0)return;let n=t.map(e=>this.decode(e)).filter(e=>e!==null&&!this.processed.has(cd(e.blockNumber,e.logIndex))).sort((e,t)=>e.blockNumber-t.blockNumber||e.logIndex-t.logIndex),r=n[0],i=n[n.length-1];if(r!==void 0&&i!==void 0){this.deps.dbg.log(`liveTail`,`applying logs`,{received:e.length,applied:n.length,buffered:e.length-t.length,fromBlock:r.blockNumber,toBlock:i.blockNumber});for(let e of n)Cu(e,this.deps.store),this.processed.add(cd(e.blockNumber,e.logIndex));this.deps.store.prunePerPool(),this.deps.store.commit(),this.afterApply(n)}}pendingMarketOf(e){if(this.pendingPools.size===0)return!1;let t=this.deps.store.addressToMarket.get(e),n=t?this.deps.store.markets.get(t):void 0;return!!n&&this.pendingPools.has(n.poolAddress.toLowerCase())}afterApply(e){let t=e.filter(e=>e.eventName===`MarketCreated`);if(t.length===0||this.allRefs===0)return;for(let e of t){let t=e.args.pool.toLowerCase();this.allPools.add(t),this.hydratedPools.add(t)}this.ensureSubscriptions();let n=Math.min(...t.map(e=>e.blockNumber)),r=Math.max(this.lastBlock,this.deps.store.status.headBlock,n);this.backfill(n,r,this.watchAddresses).catch(()=>this.onWsError())}async backfill(e,t,n){if(n.length===0||t<e)return;this.client??=this.deps.getClient();let r=[];for(let i=e;i<=t;i+=rd){let e=Math.min(i+rd-1,t),a=await this.client.getLogs({address:n,fromBlock:BigInt(i),toBlock:BigInt(e)});r.push(...a)}await this.applyLogs(r)}async replayInbox(e,t){let n=[];for(let[r,i]of this.inbox){let a=i.address.toLowerCase();t&&!t.has(a)||(this.inbox.delete(r),i.blockNumber!==null&&Number(i.blockNumber)>e&&n.push(i))}await this.applyLogs(n)}async applyLogs(e){if(e.length===0)return;let t=new Set;for(let n of e){let e=n.blockNumber===null?null:Number(n.blockNumber);e!==null&&!this.blockTs.has(e)&&t.add(e)}let n=this.client??=this.deps.getClient();await Promise.all([...t].map(async e=>{let t=await n.getBlock({blockNumber:BigInt(e),includeTransactions:!1});this.blockTs.set(e,Number(t.timestamp))}));let r=e.map(e=>this.decode(e)).filter(e=>e!==null&&!this.processed.has(cd(e.blockNumber,e.logIndex))).sort((e,t)=>e.blockNumber-t.blockNumber||e.logIndex-t.logIndex);for(let e of r)Cu(e,this.deps.store),this.processed.add(cd(e.blockNumber,e.logIndex));this.deps.store.prunePerPool(),this.deps.store.commit(),this.afterApply(r)}decode(e){if(e.blockNumber===null||e.logIndex===null)return null;let t=W(e.address);if(!this.watchSet.has(t)||!Za(nd,e.topics))return null;let n;try{n=w({abi:K,data:e.data,topics:e.topics})}catch{return null}let r=Number(e.blockNumber);return{...n,address:t,blockNumber:r,logIndex:e.logIndex,timestampSec:this.blockTs.get(r)??Math.floor(Date.now()/1e3),txHash:e.transactionHash??``}}onWsError(){this.deps.store.setStatus({wsConnected:!1}),this.live=!1,this.scheduleReconnect()}startHeadsWatchdog(){this.headsWatchdog||=(this.lastHeadAt=Date.now(),setInterval(()=>void this.checkHeadsStall(),od))}stopHeadsWatchdog(){this.headsWatchdog&&clearInterval(this.headsWatchdog),this.headsWatchdog=null}async checkHeadsStall(){if(!(!this.live||this.reconnecting||this.probingHeads||!this.client)&&!(Date.now()-this.lastHeadAt<od)){this.probingHeads=!0;try{Number(await this.client.getBlockNumber())>this.lastBlock&&this.onWsError()}catch{this.onWsError()}finally{this.probingHeads=!1}}}scheduleReconnect(){if(this.retryTimer||this.activePools().size===0)return;let e=this.retryDelay;this.retryDelay=Math.min(this.retryDelay*2,ad),this.retryTimer=setTimeout(()=>{this.retryTimer=null,this.reconnect()},e)}async reconnect(){if(!(this.reconnecting||this.activePools().size===0)){this.reconnecting=!0;try{try{this.unwatchHeads?.()}catch{}try{this.unwatchLogs?.()}catch{}this.unwatchHeads=null,this.unwatchLogs=null,this.ensureSubscriptions();let e=this.client??=this.deps.getClient(),t=Number(await e.getBlockNumber());this.deps.store.setStatus({wsConnected:!0,headBlock:Math.max(t,this.deps.store.status.headBlock)}),await this.backfill(this.lastBlock+1,t,this.watchAddresses),this.lastBlock=Math.max(this.lastBlock,t),await this.replayInbox(this.lastBlock),this.markLive()}catch{this.scheduleReconnect()}finally{this.reconnecting=!1}}}pruneMaps(e){let t=e-200;if(this.blockTs.size>250)for(let e of this.blockTs.keys())e<t&&this.blockTs.delete(e);if(this.processed.size>4e3)for(let e of this.processed)Number(e.split(`_`)[0])<t&&this.processed.delete(e)}};B(`
  fragment FillQueryFields on Fill {
    id
    market: market_id
    pool
    fillPrice
    quantity
    quoteQuantity
    maker
    makerSide
    taker
    takerSide
    kind
    takerIsBid
    timestamp
    txHash
    # The taker's ORDER, not just the denormalized copy on the fill. On binary
    # the fill's takerSide is backfilled by the PendingTakerFill bridge only
    # once BinaryOrderPlaced lands, so it can still be null on a row whose
    # taker is already stamped. The Order carries the authoritative side from
    # the moment it exists, which is what the portfolio reads have always used.
    takerOrder { owner side }
  }
`);async function ud(e,t={},n){return(await R(hd,{where:md({pool:{_eq:e.toLowerCase()}},t),limit:t.limit??50,offset:t.offset??0},n)).Fill}async function dd(e,t={},n){let r={_or:pd(e.toLowerCase())};return t.pool!=null&&(r.pool={_eq:t.pool.toLowerCase()}),md(r,t),(await R(gd,{where:r,limit:t.limit??50,offset:t.offset??0},n)).Fill}async function fd(e,t={},n,r){let i={_or:pd(e.toLowerCase())};return t.pool!=null&&(i.pool={_eq:t.pool.toLowerCase()}),md(i,t),Fr(`Fill`,`Fill_bool_exp`,i,n,r)}function pd(e){return[{maker:{_eq:e}},{taker:{_eq:e}},{takerOrder:{owner:{_eq:e}}}]}function md(e,t){let n={};return t.since!=null&&(n._gte=t.since),t.until!=null&&(n._lte=t.until),Object.keys(n).length&&(e.timestamp=n),e}var hd=B(`
  query Fills($where: Fill_bool_exp!, $limit: Int, $offset: Int) {
        Fill(where: $where, order_by: [{timestamp: desc}, {blockNumber: desc}], limit: $limit, offset: $offset) {
          ...FillQueryFields
        }
      }
`),gd=B(`
  query UserFills($where: Fill_bool_exp!, $limit: Int, $offset: Int) {
        Fill(where: $where, order_by: [{timestamp: desc}, {blockNumber: desc}], limit: $limit, offset: $offset) {
          ...FillQueryFields
        }
      }
`),_d=D([`function clobFactory() view returns (address)`,`function settlement() view returns (address)`]),vd=D([`function binaryMarketImpl() view returns (address)`]),yd=D([`function marketCount() view returns (uint256)`,`function owner() view returns (address)`,`function reactivityGasLimit() view returns (uint64)`,`function reactivityMaxFeePerGas() view returns (uint64)`,`function reactivityPriorityFeePerGas() view returns (uint64)`,`function operatorId() view returns (uint32)`,`function venueId() view returns (bytes32)`]),bd=D([`function owner() view returns (address)`,`function RECEIVER() view returns (address)`]),xd=D([`function decimals() view returns (uint8)`,`function symbol() view returns (string)`]);async function Sd(e){try{return await e}catch{return null}}async function Cd(e,t){let n=t,r=e,i=n.binaryModule?await Sd(r.readContract({address:n.binaryModule,abi:_d,functionName:`clobFactory`})):null,a=i??n.clobFactory??null,o=!!i&&!!n.clobFactory&&i.toLowerCase()!==n.clobFactory.toLowerCase(),s=n.binaryModule?await Sd(r.readContract({address:n.binaryModule,abi:_d,functionName:`settlement`})):null,c=s&&!/^0x0{40}$/.test(s)?s:null,l=c??n.binarySettlement??null,u=!!c&&!!n.binarySettlement&&c.toLowerCase()!==n.binarySettlement.toLowerCase(),d=(a?await Sd(r.readContract({address:a,abi:vd,functionName:`binaryMarketImpl`})):null)??null,f=null;if(n.marketCreator){let e={address:n.marketCreator,abi:yd},[t,i,a,o,s,c,l]=await Promise.all([Sd(r.readContract({...e,functionName:`marketCount`})),Sd(r.readContract({...e,functionName:`owner`})),Sd(r.readContract({...e,functionName:`reactivityGasLimit`})),Sd(r.readContract({...e,functionName:`reactivityMaxFeePerGas`})),Sd(r.readContract({...e,functionName:`reactivityPriorityFeePerGas`})),Sd(r.readContract({...e,functionName:`operatorId`})),Sd(r.readContract({...e,functionName:`venueId`}))]);f={marketCount:t??0n,owner:i??null,reactivityGasLimit:a??0n,reactivityMaxFeePerGas:o??0n,reactivityPriorityFeePerGas:s??0n,operatorId:Number(c??0),venueId:(l??`0x${`00`.repeat(32)}`).toLowerCase()}}let p=null;if(n.fakeOracle){let e={address:n.fakeOracle,abi:bd},[t,i]=await Promise.all([Sd(r.readContract({...e,functionName:`owner`})),Sd(r.readContract({...e,functionName:`RECEIVER`}))]);p={owner:t??null,binaryModule:i??null}}let m=null,h=n.collateral??n.testUsdc;if(h){let e={address:h,abi:xd},[t,n]=await Promise.all([Sd(r.readContract({...e,functionName:`symbol`})),Sd(r.readContract({...e,functionName:`decimals`}))]);m={symbol:t??null,decimals:n==null?null:Number(n)}}return{clobFactory:a,binaryMarketImpl:d,factoryMismatch:o,settlement:l,settlementMismatch:u,marketCreator:f,oracle:p,usdc:m}}async function wd(e,t){return t.getBalance({address:e})}async function Td(e,t){let n=t.fakeOracle??e.addresses().fakeOracle;if(!n)throw new F(`w.addresses.fakeOracle`,`resolve()`);return e.execute({address:n,abi:cr,functionName:`resolve`,args:[t.market,t.outcomeIdx],gas:t.gas??e.defaultGas})}async function Ed(e,t){let n=t.fakeOracle??e.addresses().fakeOracle;if(!n)throw new F(`w.addresses.fakeOracle`,`voidMarket()`);return e.execute({address:n,abi:cr,functionName:`voidMarket`,args:[t.market],gas:t.gas??e.defaultGas})}async function Dd(e,t={}){let n=e.addresses(),r=t.testUsdc??n.collateral??n.testUsdc;if(!r)throw new F(`w.addresses.collateral (or testUsdc)`,`faucet()`);let i=t.amount??10000n*e.oneBase;return e.execute({address:r,abi:lr,functionName:`faucet`,args:[i],gas:t.gas??e.defaultGas})}async function Od(e,t){if(t.amount<=0n)throw new P(`amount must be > 0`);if(t.token.toLowerCase()===`0x28f34defd2b4cb48d9ee6d89f2be4bc601694c00`)throw new P(`deposit does not take the native sentinel — use depositVaultNative (the vault reverts UseDepositNative)`);let n=t.gas??e.defaultGas;return await e.approveIfNeeded(t.token,t.vault,t.amount,n),e.execute({address:t.vault,abi:Pn,functionName:`deposit`,args:[t.token,t.amount],gas:n})}async function kd(e,t){if(t.amount<=0n)throw new P(`amount must be > 0`);let n=t.gas??e.defaultGas,r=await e.publicClient.readContract({address:t.vault,abi:dr,functionName:`collateralToken`}).catch(()=>void 0);if(r!==void 0&&r.toLowerCase()!==`0x28f34defd2b4cb48d9ee6d89f2be4bc601694c00`)throw new P(`pool ${t.vault} does not accept native deposits — its vault token is ${r}. Use depositVault with that token, or a pool whose base/quote is native.`);return e.execute({address:t.vault,abi:Pn,...t.owner?{functionName:`depositNativeFor`,args:[t.owner]}:{functionName:`depositNative`,args:[]},value:t.amount,gas:n})}async function Ad(e,t){let n=t.gas??e.defaultGas,r=await e.poolCollateral(t.pool,t.collateral);return t.autoApprove!==!1&&await e.approveIfNeeded(r,t.pool,t.amount,n),e.execute({address:t.pool,abi:kn,functionName:`mintSet`,args:[e.fromAddress,e.fromAddress,t.amount],gas:n})}async function jd(e,t){let n=t.gas??e.defaultGas;if(t.autoApprove!==!1){let r=t.outcomeToken??(await e.poolTokens(t.pool)).outcomeToken;await e.ensureOperator(r,t.pool,n)}return e.execute({address:t.pool,abi:kn,functionName:`burnSet`,args:[t.amount],gas:n})}async function Md(e,t){let n=e.resolveRouter(t.router);return e.execute({address:n,abi:Gn,functionName:`mintCompleteSetNative`,args:[t.operatorId,t.venueId,t.marketId],gas:t.gas??e.defaultGas,value:t.amount})}async function Nd(e,t){let n=e.resolveRouter(t.router);return e.execute({address:n,abi:Gn,functionName:`mintCompleteSetPermit2`,args:[t.operatorId,t.venueId,t.marketId,t.amount,{permitted:{token:t.permit.permitted.token,amount:t.permit.permitted.amount},nonce:t.permit.nonce,deadline:t.permit.deadline},t.signature],gas:t.gas??e.defaultGas})}var Pd={LIMIT:0,FILL_OR_KILL:1,MARKET:2,POST_ONLY:3};function Fd(e,t){let n=Oo(e,t),{clearApprovalCache:r,resolveModule:i,resolveSettlement:a,publicClient:o,dbg:s}=n,c={placeOrder:e=>Hl(n,e),approveBuilder:e=>vl(n,e),getBuilderApproval:e=>gl(e,o),getEffectiveBuilderApproval:e=>_l(e,o),async getMaxBuilderFeeBpsTimes1k(e){return await o.readContract({address:e,abi:kn,functionName:`getMaxBuilderFeeBpsTimes1k`})},cancelOrder:e=>Ul(n,e),reduceOrder:e=>Wl(n,e),cancelExpiredOrders:e=>Gl(n,e),sweepExpiredAtLevel:e=>Kl(n,e),placeSpotOrder:e=>Yl(n,e),placeSpotOrders:e=>Zl(n,e),cancelOrders:e=>Ql(n,e),reduceOrders:e=>$l(n,e),placePerpOrder:e=>ou(n,e),buildPlaceOrder:e=>su(n,e),buildPlaceSpotOrder:e=>cu(n,e),buildPlacePerpOrder:e=>lu(n,e),amendOrder:e=>ru(n,e),amendOrders:e=>iu(n,e),depositMargin:e=>qs(n,e),withdrawMargin:e=>Js(n,e),withdrawVault:e=>ko(n,e),depositVault:e=>Od(n,e),depositVaultNative:e=>kd(n,e),depositVaultNativeFor:e=>kd(n,e),setManualVaultMode:e=>al(n,e),setOperatorApprovalForPool:e=>Xc(n,e),setOperatorApprovalGlobal:e=>Yc(n,e),setPerpLeverage:e=>Zs(n,e),pokeFunding:e=>gs(n,e),placeSpotStopOrder:e=>rl(n,e),cancelStopOrder:e=>il(n,e),placePerpStopOrder:e=>Tc(n,e),linkPerpStopOrders:e=>Ec(n,e),cancelPerpStopOrder:e=>Dc(n,e),cancelPerpStopOrders:e=>kc(n,e),claimPerpStopSomi:e=>Pc(n,e),buildPlacePerpStopOrder:e=>jc(n,e),buildCancelPerpStopOrder:e=>Mc(n,e),buildCancelPerpStopOrders:e=>Nc(n,e),buildDepositMargin:e=>Ys(n,e),buildWithdrawMargin:e=>Xs(n,e),mintSet:e=>Ad(n,e),burnSet:e=>jd(n,e),redeem:e=>Ao(n,e),signRedeemAuth:e=>jo(n,e),redeemFor:e=>Mo(n,e),redeemMany:e=>No(n,e),redeemDirect:e=>Po(n,e),claimOwed:e=>Fo(n,e),pokeOracle:e=>zo(n,e),voidExpired:e=>Bo(n,e),finalizeMarket:e=>Io(n,e),syncSettlement:e=>Lo(n,e),releasePool:e=>Ro(n,e),async getSettlement(e,t){let n=i(t?.module),r=a(t?.settlement),s=(await o.readContract({address:n,abi:Cr,functionName:`markets`,args:[e]}))[10];if(s===0n)return null;let c=bi(s),l=await o.readContract({address:r,abi:fr,functionName:`getSettlement`,args:[c]});if(!l.finalized)return null;let u=[...l.payoutNumerators],d=0;for(let e=1;e<u.length;e++)(u[e]??0n)>(u[d]??0n)&&(d=e);return{collateralToken:l.collateralToken,backing:l.backing,finalized:l.finalized,voided:l.voided,winningOutcome:d,payoutNumerators:u,settlementFeeBpsTimes1k:l.settlementFeeBpsTimes1k,feeRecipient:l.feeRecipient,pool:l.pool,nonce:l.nonce}},async getFreePools(e,t,n){return[...await o.readContract({address:i(n?.module),abi:Cr,functionName:`getFreePools`,args:[e,t]})]},async poolCreator(e,t){return await o.readContract({address:i(t?.module),abi:Cr,functionName:`poolCreator`,args:[e]})},mintSetNative:e=>Md(n,e),mintSetPermit2:e=>Nd(n,e),redeemNative:e=>Vo(n,e),faucet:(e={})=>Dd(n,e),resolve:e=>Td(n,e),voidMarket:e=>Ed(n,e),poke:e=>_s(n,e),clearApprovalCache:r};return s.tracedObject(`trader`,c)}function Id(e,t,n){let r=e.gas??10000000n,{chain:i}=t.getConfig(),a=t.getConfig().fees,{localAccount:o,walletClient:s,from:c}=nr(e,n),l=()=>s??I(`no external wallet client after signer validation`),u=e.publicClient??t.getClient(),d=e=>ar(u,e);async function f(e){let t=e.gas??r,n=e.value??0n,s=e.abi&&e.functionName?te({abi:e.abi,functionName:e.functionName,args:e.args??[]}):void 0,f;if(o){let r=await u.getTransactionCount({address:o.address,blockTag:`pending`}),c=await o.signTransaction({type:`eip1559`,chainId:i.id,to:e.to,value:n,...s?{data:s}:{},gas:t,nonce:r,maxFeePerGas:a?.maxFeePerGas??er.maxFeePerGas,maxPriorityFeePerGas:a?.maxPriorityFeePerGas??er.maxPriorityFeePerGas}),l=await ir(u,c,{label:`@somnia-chain/markets-sdk`,retryCount:0,waitReceipt:d});return{hash:l.transactionHash,receipt:l}}f=s?await l().writeContract({address:e.to,abi:e.abi,functionName:e.functionName,args:e.args??[],account:c,chain:i,gas:t,value:n,...a?{maxFeePerGas:a.maxFeePerGas,maxPriorityFeePerGas:a.maxPriorityFeePerGas}:{}}):await l().sendTransaction({to:e.to,value:n,account:c,chain:i,gas:t,...a?{maxFeePerGas:a.maxFeePerGas,maxPriorityFeePerGas:a.maxPriorityFeePerGas}:{}});let p=await d(f);return{hash:f,receipt:p}}return{from:c,execute:f,publicClient:u}}var Ld=D([`function registerOperator(address feeRecipient, bool enabled, address policy, bytes context) returns (uint32 operatorId)`,`function updateOperator(uint32 operatorId, address feeRecipient, bool enabled, address policy, bytes context)`,`function setOperatorEnabled(uint32 operatorId, bool enabled)`,`function transferOperatorOwnership(uint32 operatorId, address newOwner)`,`function acceptOperatorOwnership(uint32 operatorId)`,`function createVenue(uint32 operatorId, bytes4 marketType, (bytes feeParams, address feeRecipientOverride, address policy, address signer, bool creationEnabled, bytes context) config) returns (bytes32 venueId)`,`function updateVenue(uint32 operatorId, bytes32 venueId, (bytes feeParams, address feeRecipientOverride, address policy, address signer, bool creationEnabled, bytes context) config)`,`function setVenueEnabled(uint32 operatorId, bytes32 venueId, bool creationEnabled)`]),Rd=D([`event OperatorRegistered(uint32 indexed operatorId, address indexed owner, address indexed feeRecipient, bool enabled, address policy, bytes context)`,`event OperatorOwnershipTransferred(uint32 indexed operatorId, address indexed oldOwner, address indexed newOwner)`,`event VenueCreated(uint32 indexed operatorId, bytes32 indexed venueId, bytes4 indexed marketType, bytes feeParams, address feeRecipientOverride, address policy, address signer, bool creationEnabled, bytes context)`]),zd=D([`function encodeVenueFeeParams((uint64 makerFeeBps, uint64 takerFeeBps, uint64 maxBuilderFeeBps, uint64 routingFeeBps, uint64 settlementFeeBps) vp) pure returns (bytes)`,`function FEE_PARAMS_VERSION() view returns (uint8)`,`function MAX_FEE_BPS() view returns (uint256)`]);function Bd(e,t){let n=e.marketsCore??t.getConfig().addresses?.marketsCore;if(!n)throw new F(`marketsCore or config.addresses.marketsCore`,`createOperatorAdmin`);let r=Id(e,t,`createOperatorAdmin`),i=e=>r.execute({to:n,abi:Ld,functionName:e.functionName,args:e.args,gas:e.gas});function a(e){for(let t of e.logs)try{let e=w({abi:Rd,data:t.data,topics:t.topics});if(e.eventName===`OperatorRegistered`)return Number(e.args.operatorId)}catch{continue}throw new Xn(`registerOperator`,`the receipt carried no OperatorRegistered event`)}function o(e){for(let t of e.logs)try{let e=w({abi:Rd,data:t.data,topics:t.topics});if(e.eventName===`VenueCreated`)return e.args.venueId}catch{continue}throw new Xn(`createVenue`,`the receipt carried no VenueCreated event`)}let s=e=>[e.feeParams,e.feeRecipientOverride,e.policy,e.signer,e.creationEnabled,e.context??`0x`];return{async registerOperator(e){let t=await i({functionName:`registerOperator`,args:[e.feeRecipient,e.enabled,e.policy,e.context??`0x`],gas:e.gas});return{...t,operatorId:a(t.receipt)}},async updateOperator(e){return i({functionName:`updateOperator`,args:[e.operatorId,e.feeRecipient,e.enabled,e.policy,e.context??`0x`],gas:e.gas})},async setOperatorEnabled(e){return i({functionName:`setOperatorEnabled`,args:[e.operatorId,e.enabled],gas:e.gas})},async transferOperatorOwnership(e){return i({functionName:`transferOperatorOwnership`,args:[e.operatorId,e.newOwner],gas:e.gas})},async acceptOperatorOwnership(e){return i({functionName:`acceptOperatorOwnership`,args:[e.operatorId],gas:e.gas})},async createVenue(e){let t=await i({functionName:`createVenue`,args:[e.operatorId,e.marketType,s(e.config)],gas:e.gas});return{...t,venueId:o(t.receipt)}},async updateVenue(e){return i({functionName:`updateVenue`,args:[e.operatorId,e.venueId,s(e.config)],gas:e.gas})},async setVenueEnabled(e){return i({functionName:`setVenueEnabled`,args:[e.operatorId,e.venueId,e.creationEnabled],gas:e.gas})}}}B(`
  fragment OperatorFields on Operator {
    operatorId
    owner
    feeRecipient
    enabled
    policy
    context
    pendingOwner
    venueCount
    createdAtTimestamp
    updatedAtTimestamp
    marketCount
    cumulativeQuoteVolume
    protocolFeesCollected
    settlementFeesCollected
    builderFeesCollected
  }
`),B(`
  fragment VenueFields on Venue {
    venueId
    operatorId
    marketType
    feeParams
    feeRecipientOverride
    policy
    signer
    creationEnabled
    context
    createdAtTimestamp
    updatedAtTimestamp
    marketCount
    cumulativeQuoteVolume
    protocolFeesCollected
    settlementFeesCollected
    builderFeesCollected
  }
`);async function Vd(e={},t){return(await R(Jd,{where:qd(e),limit:e.limit??20,offset:e.offset??0},t)).Operator}async function Hd(e,t,n){return Fr(`Operator`,`Operator_bool_exp`,qd(e),t,n)}async function Ud(e,t){return(await R(Yd,{id:String(e)},t)).Operator_by_pk}async function Wd(e={},t){let n={};return e.operatorId!=null&&(n.operatorId={_eq:e.operatorId}),e.marketType!=null&&(n.marketType={_eq:e.marketType.toLowerCase()}),e.creationEnabled!=null&&(n.creationEnabled={_eq:e.creationEnabled}),(await R(Xd,{where:n,limit:e.limit??100,offset:e.offset??0},t)).Venue}async function Gd(e,t,n){let r={};return e.operatorId!=null&&(r.operatorId={_eq:e.operatorId}),e.marketType!=null&&(r.marketType={_eq:e.marketType.toLowerCase()}),Fr(`Venue`,`Venue_bool_exp`,r,t,n)}async function Kd(e,t){return(await R(Zd,{id:e.toLowerCase()},t)).Venue_by_pk}function qd(e){let t={};return e.owner!=null&&(t.owner={_eq:e.owner.toLowerCase()}),e.enabled!=null&&(t.enabled={_eq:e.enabled}),t}var Jd=B(`
  query Operators($where: Operator_bool_exp!, $limit: Int, $offset: Int) {
         Operator(where: $where, order_by: {operatorId: desc}, limit: $limit, offset: $offset) { ...OperatorFields }
       }
`),Yd=B(`
  query OperatorByPk($id: String!) { Operator_by_pk(id: $id) { ...OperatorFields } }
`),Xd=B(`
  query Venues($where: Venue_bool_exp!, $limit: Int, $offset: Int) {
         Venue(where: $where, order_by: {createdAtTimestamp: asc}, limit: $limit, offset: $offset) { ...VenueFields }
       }
`),Zd=B(`
  query VenueByPk($id: String!) { Venue_by_pk(id: $id) { ...VenueFields } }
`),Qd=D(`function scheduleQuestion((string questionText, (uint8 sourceType, bytes params)[] sources, (uint8 answerType, string[] discreteOutcomes, (int256 low, int256 high)[] numericIntervals, uint64 numericDecimals) validAnswers, uint256 resolutionTime, uint256 minAgreement, uint256 subcommitteeSize, uint256 subcommitteeThreshold) def) payable returns (uint256 oracleQuestionId).function getSchedulingCost((string questionText, (uint8 sourceType, bytes params)[] sources, (uint8 answerType, string[] discreteOutcomes, (int256 low, int256 high)[] numericIntervals, uint64 numericDecimals) validAnswers, uint256 resolutionTime, uint256 minAgreement, uint256 subcommitteeSize, uint256 subcommitteeThreshold) def) view returns (uint256 cost).function questionKeyOf((string questionText, (uint8 sourceType, bytes params)[] sources, (uint8 answerType, string[] discreteOutcomes, (int256 low, int256 high)[] numericIntervals, uint64 numericDecimals) validAnswers, uint256 resolutionTime, uint256 minAgreement, uint256 subcommitteeSize, uint256 subcommitteeThreshold) def) pure returns (bytes32 key).function withdraw(uint32 operatorId, uint256 amount, address to).function resolveReserve() view returns (uint256 reserve).function earmarkedOf(uint32 operatorId) view returns (uint256 locked).function creditOf(uint32 operatorId) view returns (uint256 balance).function outstandingOf(uint32 operatorId) view returns (uint256 count).function withdrawableOf(uint32 operatorId) view returns (uint256 amount).function payerCreditOf(address payer) view returns (uint256 amount).function payerOf(bytes32 marketId) view returns (address payer).function withdrawMyCredit(uint256 amount, address to).function operatorOf(bytes32 marketId) view returns (uint32 operatorId).function reservedFor(bytes32 marketId) view returns (uint256 reserve).function bindCount(uint256 oracleQuestionId) view returns (uint32 count).function marketsForQuestion(uint256 oracleQuestionId) view returns (bytes32[] markets).function questionIdByKey(bytes32 questionKey) view returns (uint256 oracleQuestionId).function pendingResolves() view returns (uint256 remaining).function continuationSubId() view returns (uint256).function MAX_BINDS_PER_QUESTION() view returns (uint32).function getSlotCount(uint256 oracleQuestionId) view returns (uint8 slotCount).function pullAnswer(uint256 oracleQuestionId) view returns (uint8 outcomeIdx, bool voided).function pullNumericAnswer(uint256 oracleQuestionId) view returns (int256 numericValue, bool voided).function setGasParams(uint64 priorityFeePerGas, uint64 maxFeePerGas, uint64 gasLimit).function setDrainParams(uint64 perMarketResolveGas, uint64 callbackBaseGas, uint32 maxResolvesPerCallback, uint64 resolveGasReserve).function enableReactivity() returns (uint256 subId).function migrateSubscription() returns (uint256 subId).function subscriptionId() view returns (uint256).function priorityFeePerGas() view returns (uint64).function maxFeePerGas() view returns (uint64).function gasLimit() view returns (uint64).function perMarketResolveGas() view returns (uint64).function callbackBaseGas() view returns (uint64).function maxResolvesPerCallback() view returns (uint32).function resolveGasReserve() view returns (uint64).function owner() view returns (address)`.split(`.`)),$d=D([`event QuestionScheduled(uint256 indexed oracleQuestionId, bytes32 indexed questionKey, address indexed scheduler, uint256 oracleCost)`,`event QuestionReused(uint256 indexed oracleQuestionId, bytes32 indexed questionKey, address indexed scheduler)`,`event QuestionCapSplit(bytes32 indexed questionKey, uint256 indexed supersededQuestionId, uint256 indexed newQuestionId)`,`event ReserveEarmarked(uint32 indexed operatorId, bytes32 indexed marketId, uint256 amount)`,`event SurplusCredited(uint32 indexed operatorId, bytes32 indexed marketId, uint256 amount)`,`event CreditWithdrawn(uint32 indexed operatorId, address indexed to, uint256 amount)`,`event PayerSurplusCredited(address indexed payer, bytes32 indexed marketId, uint256 amount)`,`event PayerCreditWithdrawn(address indexed payer, address indexed to, uint256 amount)`,`event MarketBound(uint256 indexed oracleQuestionId, bytes32 indexed marketId, uint32 indexed operatorId, uint32 bindCount)`,`event MarketResolveCharged(bytes32 indexed marketId, uint32 indexed operatorId, uint256 measuredGas, uint256 overheadShare, uint256 cost, uint256 charged)`,`event AnswerDelivered(uint256 indexed oracleQuestionId, bytes32 indexed marketId, uint32 payoutDenominator, uint256[] payoutNumerators, bool voided)`,`event CallbackAccounted(uint256 marketsResolved, uint256 gasPrice, uint256 measuredGas, uint256 overheadGasAttributed, uint256 totalCost, uint256 totalCharged, uint256 subsidy, uint256 pendingRemaining)`,`event DrainContinuation(uint256 subscriptionId, uint256 pendingRemaining)`,`event Deposited(address indexed from, uint256 indexed amount)`,`event GasParamsUpdated(uint64 indexed priorityFeePerGas, uint64 indexed maxFeePerGas, uint64 indexed gasLimit)`,`event DrainParamsUpdated(uint64 perMarketResolveGas, uint64 callbackBaseGas, uint32 maxResolvesPerCallback, uint64 resolveGasReserve)`]),ef=D([`function createMarketCreator(address owner, address core, address adapter, uint32 operatorId, bytes32 venueId, (uint256 tickSize, uint256 minQuantity, uint256 lotSize) defaultBookParams) returns (address creator, address policy)`,`function creators(uint256 index) view returns (address)`,`function creatorCount() view returns (uint256)`,`function creatorsPaged(uint256 offset, uint256 limit) view returns (address[])`]),tf=D([`event MarketCreatorCreated(address indexed creator, address indexed owner, uint32 indexed operatorId, bytes32 venueId, address policy, address core, address adapter)`]),nf=D([`function registerSeries(uint32 seriesId, (address collateral, string asset, uint64 numericDecimals, uint64 intervalSec, uint64 settlementWindow) s)`,`function triggerRoll(uint32 seriesId)`,`function armFirstRoll(uint32 seriesId, uint256 firesAtSec)`,`function reclaimOracleCredit() returns (uint256 reclaimed)`,`function withdrawNative(address to, uint256 amount)`,`function cancelSubscription(uint256 firesAtSec)`,`function firstRollArmed(uint32 seriesId) view returns (bool armed)`,`function latestExpiryBySeriesId(uint32 seriesId) view returns (uint64 expiry)`,`function armedBoundary() view returns (uint256)`,`function marketCount() view returns (uint256)`,`function setReactivityGasParams(uint64 priorityFeePerGas, uint64 maxFeePerGas, uint64 gasLimit)`,`function seriesById(uint32 seriesId) view returns (address collateral, string asset, uint64 numericDecimals, uint64 intervalSec, uint64 settlementWindow)`,`function core() view returns (address)`,`function adapter() view returns (address)`,`function operatorId() view returns (uint32)`,`function venueId() view returns (bytes32)`,`function defaultBookParams() view returns (uint256 tickSize, uint256 minQuantity, uint256 lotSize)`,`function owner() view returns (address)`]);D([`function approved(address creator) view returns (bool)`,`function setCreator(address creator, bool allowed)`,`function owner() view returns (address)`]);var rf=D([`function setAdapterApproved(address adapter, bool approved)`,`function approvedAdapters(address adapter) view returns (bool)`,`function owner() view returns (address)`]);D([`event AdapterApproved(address indexed adapter, bool indexed approved)`]);function af(e){return{questionText:e.questionText,sources:e.sources.map(e=>({sourceType:e.sourceType,params:e.params})),validAnswers:{answerType:e.validAnswers.answerType,discreteOutcomes:e.validAnswers.discreteOutcomes,numericIntervals:e.validAnswers.numericIntervals.map(e=>({low:e.low,high:e.high})),numericDecimals:e.validAnswers.numericDecimals},resolutionTime:e.resolutionTime,minAgreement:e.minAgreement,subcommitteeSize:e.subcommitteeSize,subcommitteeThreshold:e.subcommitteeThreshold}}async function of(e,t,n){return n.readContract({address:t,abi:Qd,functionName:`getSchedulingCost`,args:[af(e)]})}async function sf(e,t,n){return n.readContract({address:t,abi:Qd,functionName:`earmarkedOf`,args:[e]})}async function cf(e,t,n){return n.readContract({address:t,abi:Qd,functionName:`creditOf`,args:[e]})}async function lf(e,t,n){return n.readContract({address:t,abi:Qd,functionName:`outstandingOf`,args:[e]})}async function uf(e,t,n){return n.readContract({address:t,abi:Qd,functionName:`withdrawableOf`,args:[e]})}async function df(e,t,n){return n.readContract({address:t,abi:Qd,functionName:`payerCreditOf`,args:[e]})}async function ff(e,t,n){return n.readContract({address:t,abi:Qd,functionName:`payerOf`,args:[e]})}async function pf(e,t){return t.readContract({address:e,abi:Qd,functionName:`resolveReserve`})}async function mf(e,t,n){let[r,i]=await Promise.all([of(e,t,n),pf(t,n)]);return r+i}function hf(e,t){let n=t.getConfig().addresses?.oracleHub,r=t.getConfig().addresses?.binaryModule,i=Id(e,t,`createOracleHubAdmin`),a=()=>t.getClient();function o(){if(!n)throw new F(`config.addresses.oracleHub`,`createOracleHubAdmin`);return n}function s(){if(!r)throw new F(`config.addresses.binaryModule`,`hub-approval reads`);return r}function c(e){for(let t of e.logs)try{let e=w({abi:$d,data:t.data,topics:t.topics});if(e.eventName===`QuestionScheduled`)return{oracleQuestionId:e.args.oracleQuestionId,reused:!1};if(e.eventName===`QuestionReused`)return{oracleQuestionId:e.args.oracleQuestionId,reused:!0}}catch{continue}throw new Xn(`scheduleQuestion`,`the receipt carried no QuestionScheduled/QuestionReused event`)}async function l(){return await a().readContract({address:s(),abi:rf,functionName:`approvedAdapters`,args:[o()]})}return{getSchedulingCost:e=>of(e,o(),a()),earmarkedOf:e=>sf(e,o(),a()),creditOf:e=>cf(e,o(),a()),outstandingOf:e=>lf(e,o(),a()),withdrawableOf:e=>uf(e,o(),a()),payerCreditOf:e=>df(e,o(),a()),payerOf:e=>ff(e,o(),a()),resolveReserve:()=>pf(o(),a()),quoteCreateMarketValue:e=>mf(e,o(),a()),async getQuestionState(e){let t={address:o(),abi:Qd},n=await a().readContract({...t,functionName:`questionKeyOf`,args:[af(e)]}),r=await a().readContract({...t,functionName:`questionIdByKey`,args:[n]});if(r===0n)return{questionKey:n,oracleQuestionId:r,bindCount:0,markets:[]};let[i,s]=await Promise.all([a().readContract({...t,functionName:`bindCount`,args:[r]}),a().readContract({...t,functionName:`marketsForQuestion`,args:[r]})]);return{questionKey:n,oracleQuestionId:r,bindCount:Number(i),markets:[...s]}},async getQuestionIdByKey(e){return a().readContract({address:o(),abi:Qd,functionName:`questionIdByKey`,args:[e]})},async getBindCount(e){let t=await a().readContract({address:o(),abi:Qd,functionName:`bindCount`,args:[e]});return Number(t)},async getMarketsForQuestion(e){return[...await a().readContract({address:o(),abi:Qd,functionName:`marketsForQuestion`,args:[e]})]},isHubApproved:l,async getHubStatus(){let e=o(),t={address:e,abi:Qd},[n,r,i,s,c,u,d,f,p,m,h,g,_]=await Promise.all([a().readContract({...t,functionName:`owner`}),a().getBalance({address:e}),l(),a().readContract({...t,functionName:`subscriptionId`}),a().readContract({...t,functionName:`priorityFeePerGas`}),a().readContract({...t,functionName:`maxFeePerGas`}),a().readContract({...t,functionName:`gasLimit`}),a().readContract({...t,functionName:`perMarketResolveGas`}),a().readContract({...t,functionName:`callbackBaseGas`}),a().readContract({...t,functionName:`maxResolvesPerCallback`}),a().readContract({...t,functionName:`resolveGasReserve`}),a().readContract({...t,functionName:`resolveReserve`}),a().readContract({...t,functionName:`pendingResolves`})]);return{owner:n,balanceWei:r,approved:i,subscriptionId:s,priorityFeePerGas:BigInt(c),maxFeePerGas:BigInt(u),gasLimit:BigInt(d),perMarketResolveGas:BigInt(f),callbackBaseGas:BigInt(p),maxResolvesPerCallback:BigInt(m),resolveGasReserve:BigInt(h),resolveReserveWei:g,pendingResolves:_}},async scheduleQuestion(e){let t=o(),n=e.valueWei??await of(e.def,t,a()),r=await i.execute({to:t,abi:Qd,functionName:`scheduleQuestion`,args:[af(e.def)],value:n,gas:e.gas});return{...r,...c(r.receipt)}},async withdraw(e){return i.execute({to:o(),abi:Qd,functionName:`withdraw`,args:[e.operatorId,e.amountWei,e.to],gas:e.gas})},async withdrawMyCredit(e){return i.execute({to:o(),abi:Qd,functionName:`withdrawMyCredit`,args:[e.amountWei,e.to],gas:e.gas})},async fundHub(e){return i.execute({to:o(),value:e.amountWei,gas:e.gas})},async setGasParams(e){return i.execute({to:o(),abi:Qd,functionName:`setGasParams`,args:[e.priorityFeePerGas,e.maxFeePerGas,e.gasLimit],gas:e.gas})},async setDrainParams(e){return i.execute({to:o(),abi:Qd,functionName:`setDrainParams`,args:[e.perMarketResolveGas,e.callbackBaseGas,e.maxResolvesPerCallback,e.resolveGasReserve],gas:e.gas})},async enableReactivity(e){return i.execute({to:o(),abi:Qd,functionName:`enableReactivity`,args:[],gas:e?.gas})},async migrateSubscription(e){return i.execute({to:o(),abi:Qd,functionName:`migrateSubscription`,args:[],gas:e?.gas})}}}B(`
  fragment OracleQuestionFields on OracleQuestion {
    id
    questionKey
    scheduler
    oracleCost
    bindCount
    reuseCount
    createdAtBlock
    createdAtTimestamp
  }
`),B(`
  fragment OperatorHubAccountFields on OperatorHubAccount {
    id
    operatorId
    earmarked
    credit
    outstanding
    createdAtBlock
    createdAtTimestamp
    updatedAtBlock
    updatedAtTimestamp
  }
`),B(`
  fragment OracleBindFields on OracleBind {
    id
    oracleQuestionId
    bindIndex
    operatorId
    measuredGas
    overheadShare
    cost
    charged
    subsidy
    resolvedAt
    boundAtBlock
    boundAtTimestamp
    txHash
  }
`),B(`
  fragment OracleCallbackFields on OracleCallback {
    id
    marketsResolved
    gasPrice
    measuredGas
    overheadGasAttributed
    totalCost
    totalCharged
    subsidy
    pendingRemaining
    blockNumber
    timestamp
    txHash
  }
`);async function gf(e,t){return(await R(Sf,{id:String(e)},t)).OracleQuestion_by_pk}async function _f(e={},t){let n={};return e.scheduler!=null&&(n.scheduler={_eq:e.scheduler.toLowerCase()}),e.questionKey!=null&&(n.questionKey={_eq:e.questionKey.toLowerCase()}),(await R(Cf,{where:n,limit:e.limit??50,offset:e.offset??0},t)).OracleQuestion}async function vf(e,t){return(await R(wf,{id:String(e)},t)).OperatorHubAccount_by_pk}async function yf(e={},t){return(await R(Tf,{limit:e.limit??50,offset:e.offset??0},t)).OperatorHubAccount}async function bf(e={},t){let n={};return e.operatorId!=null&&(n.operatorId={_eq:e.operatorId}),e.oracleQuestionId!=null&&(n.oracleQuestionId={_eq:String(e.oracleQuestionId)}),e.resolved!=null&&(n.resolvedAt=e.resolved?{_is_null:!1}:{_is_null:!0}),(await R(Ef,{where:n,limit:e.limit??50,offset:e.offset??0},t)).OracleBind}async function xf(e={},t){return(await R(Df,{limit:e.limit??50,offset:e.offset??0},t)).OracleCallback}var Sf=B(`
  query OracleQuestion($id: String!) {
         OracleQuestion_by_pk(id: $id) { ...OracleQuestionFields }
       }
`),Cf=B(`
  query OracleQuestions($where: OracleQuestion_bool_exp!, $limit: Int, $offset: Int) {
         OracleQuestion(where: $where, order_by: {createdAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OracleQuestionFields }
       }
`),wf=B(`
  query OperatorHubAccount($id: String!) {
         OperatorHubAccount_by_pk(id: $id) { ...OperatorHubAccountFields }
       }
`),Tf=B(`
  query OperatorHubAccounts($limit: Int, $offset: Int) {
         OperatorHubAccount(order_by: {updatedAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OperatorHubAccountFields }
       }
`),Ef=B(`
  query OracleBinds($where: OracleBind_bool_exp!, $limit: Int, $offset: Int) {
         OracleBind(where: $where, order_by: {boundAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OracleBindFields }
       }
`),Df=B(`
  query OracleCallbacks($limit: Int, $offset: Int) {
         OracleCallback(order_by: {timestamp: desc}, limit: $limit, offset: $offset) { ...OracleCallbackFields }
       }
`);function Of(e,t){let n=t.getConfig().addresses?.binaryModule,r=Id(e,t,`createGovernanceAdmin`),i=()=>t.getClient();function a(){if(!n)throw new F(`config.addresses.binaryModule`,`createGovernanceAdmin`);return n}async function o(){return await i().readContract({address:a(),abi:rf,functionName:`owner`})}return{async setAdapterApproved(e){return r.execute({to:a(),abi:rf,functionName:`setAdapterApproved`,args:[e.adapter,e.approved],gas:e.gas})},getModuleOwner:o,async isModuleOwner(e){return(await o()).toLowerCase()===e.toLowerCase()}}}var kf=e=>({tickSize:e.tickSize,minQuantity:e.minQuantity,lotSize:e.lotSize});function Af(e,t){let n=t.getConfig().addresses?.marketCreatorFactory,r=t.getConfig().addresses?.binaryModule,i=Id(e,t,`createMarketCreatorAdmin`),a=()=>t.getClient();function o(){if(!n)throw new F(`config.addresses.marketCreatorFactory`,`createMarketCreatorAdmin`);return n}function s(e){let t=e??r;if(!t)throw new F(`core or config.addresses.binaryModule`,`createMarketCreator`);return t}function c(e){let n=e??t.getConfig().addresses?.oracleHub;if(!n)throw new F(`adapter or config.addresses.oracleHub`,`createMarketCreator`);return n}function l(e){for(let t of e.logs)try{let e=w({abi:tf,data:t.data,topics:t.topics});if(e.eventName===`MarketCreatorCreated`)return{creator:e.args.creator,policy:e.args.policy}}catch{continue}throw new Xn(`createMarketCreator`,`the receipt carried no MarketCreatorCreated event`)}async function u(e){return i.execute({to:e.creator,abi:nf,functionName:`registerSeries`,args:[e.seriesId,{collateral:e.collateral,asset:e.asset,numericDecimals:BigInt(e.numericDecimals),intervalSec:BigInt(e.intervalSec),settlementWindow:BigInt(e.settlementWindow)}],gas:e.gas})}return{async createMarketCreator(e){let t=await i.execute({to:o(),abi:ef,functionName:`createMarketCreator`,args:[e.owner,s(e.core),c(e.adapter),e.operatorId,e.venueId,kf(e.defaultBookParams)],gas:e.gas});return{...t,...l(t.receipt)}},async fundMarketCreator(e){return i.execute({to:e.creator,value:e.amountWei,gas:e.gas})},registerSeries:u,updateSeries:u,async triggerRoll(e){return i.execute({to:e.creator,abi:nf,functionName:`triggerRoll`,args:[e.seriesId],gas:e.gas})},async armFirstRoll(e){return i.execute({to:e.creator,abi:nf,functionName:`armFirstRoll`,args:[e.seriesId,e.firesAtSec],gas:e.gas})},async reclaimOracleCredit(e){return i.execute({to:e.creator,abi:nf,functionName:`reclaimOracleCredit`,args:[],gas:e.gas})},async setReactivityGasParams(e){return i.execute({to:e.creator,abi:nf,functionName:`setReactivityGasParams`,args:[e.priorityFeePerGas,e.maxFeePerGas,e.gasLimit],gas:e.gas})},async getMarketCreatorOnchain(e){let t={address:e,abi:nf},[n,r,i,o,s,c]=await Promise.all([a().readContract({...t,functionName:`core`}),a().readContract({...t,functionName:`adapter`}),a().readContract({...t,functionName:`operatorId`}),a().readContract({...t,functionName:`venueId`}),a().readContract({...t,functionName:`owner`}),a().readContract({...t,functionName:`defaultBookParams`})]);return{core:n,adapter:r,operatorId:Number(i),venueId:o,owner:s,defaultBookParams:{tickSize:c[0],minQuantity:c[1],lotSize:c[2]}}},async getSeriesOnchain(e,t){let n=await a().readContract({address:e,abi:nf,functionName:`seriesById`,args:[t]});return{collateral:n[0],asset:n[1],numericDecimals:Number(n[2]),intervalSec:Number(n[3]),settlementWindow:Number(n[4])}}}}B(`
  fragment SeriesFields on Series {
    id
    creatorAddress
    seriesId
    collateral
    asset
    intervalSec
    createdAtTimestamp
    updatedAtTimestamp
  }
`),B(`
  fragment MarketCreatorFields on MarketCreator {
    id
    owner
    policy
    core
    adapter
    operatorId
    venueId
    factory
    createdAtBlock
    createdAtTimestamp
  }
`),B(`
  fragment OracleAdapterFields on OracleAdapter {
    id
    owner
    factory
    approved
    approvedAtTimestamp
    createdAtTimestamp
  }
`);async function jf(e={},t){return(await R(Lf,{where:If(e),limit:e.limit??20,offset:e.offset??0},t)).MarketCreator}async function Mf(e,t){return(await R(Rf,{id:e.toLowerCase()},t)).MarketCreator_by_pk}async function Nf(e={},t){let n={};return e.owner!=null&&(n.owner={_eq:e.owner.toLowerCase()}),e.approved!=null&&(n.approved={_eq:e.approved}),(await R(zf,{where:n,limit:e.limit??20,offset:e.offset??0},t)).OracleAdapter}async function Pf(e,t){return(await R(Bf,{id:e.toLowerCase()},t)).OracleAdapter_by_pk}async function Ff(e={},t){let n={};return e.creator!=null&&(n.creatorAddress={_eq:e.creator.toLowerCase()}),(await R(Vf,{where:n,limit:e.limit??100,offset:e.offset??0},t)).Series}function If(e){let t={};return e.owner!=null&&(t.owner={_eq:e.owner.toLowerCase()}),e.operatorId!=null&&(t.operatorId={_eq:e.operatorId}),e.venueId!=null&&(t.venueId={_eq:e.venueId.toLowerCase()}),t}var Lf=B(`
  query MarketCreators($where: MarketCreator_bool_exp!, $limit: Int, $offset: Int) {
         MarketCreator(where: $where, order_by: {createdAtBlock: desc}, limit: $limit, offset: $offset) {
           ...MarketCreatorFields
           series(order_by: {seriesId: asc}) { ...SeriesFields }
         }
       }
`),Rf=B(`
  query MarketCreatorByPk($id: String!) {
         MarketCreator_by_pk(id: $id) {
           ...MarketCreatorFields
           series(order_by: {seriesId: asc}) { ...SeriesFields }
         }
       }
`),zf=B(`
  query OracleAdapters($where: OracleAdapter_bool_exp!, $limit: Int, $offset: Int) {
         OracleAdapter(where: $where, order_by: {createdAtTimestamp: desc}, limit: $limit, offset: $offset) { ...OracleAdapterFields }
       }
`),Bf=B(`
  query OracleAdapterByPk($id: String!) { OracleAdapter_by_pk(id: $id) { ...OracleAdapterFields } }
`),Vf=B(`
  query SeriesList($where: Series_bool_exp!, $limit: Int, $offset: Int) {
         Series(where: $where, order_by: {createdAtTimestamp: asc}, limit: $limit, offset: $offset) { ...SeriesFields }
       }
`);async function Hf(e,t,n){if(!n)throw new F(`binaryModule or config.addresses.binaryModule`,`this operator read`);return await t.readContract({address:n,abi:zd,functionName:`encodeVenueFeeParams`,args:[{makerFeeBps:BigInt(e.makerFeeBps),takerFeeBps:BigInt(e.takerFeeBps),maxBuilderFeeBps:BigInt(e.maxBuilderFeeBps),routingFeeBps:BigInt(e.routingFeeBps),settlementFeeBps:BigInt(e.settlementFeeBps)}]})}async function Uf(e,t){if(!t)throw new F(`binaryModule or config.addresses.binaryModule`,`this operator read`);return Number(await e.readContract({address:t,abi:zd,functionName:`MAX_FEE_BPS`}))}var Wf=D([`function supply(address asset, uint256 amount, address onBehalfOf, uint16 referralCode)`,`function withdraw(address asset, uint256 amount, address to) returns (uint256)`,`function borrow(address asset, uint256 amount, uint256 interestRateMode, uint16 referralCode, address onBehalfOf)`,`function repay(address asset, uint256 amount, uint256 interestRateMode, address onBehalfOf) returns (uint256)`,`function repayWithATokens(address asset, uint256 amount, uint256 interestRateMode) returns (uint256)`,`function setUserUseReserveAsCollateral(address asset, bool useAsCollateral)`,`function getUserAccountData(address user) view returns (uint256, uint256, uint256, uint256, uint256, uint256)`,`function getReservesList() view returns (address[])`,`function getReserveData(address asset) view returns (((uint256 data) configuration, uint128 liquidityIndex, uint128 currentLiquidityRate, uint128 variableBorrowIndex, uint128 currentVariableBorrowRate, uint128 currentStableBorrowRate, uint40 lastUpdateTimestamp, uint16 id, address aTokenAddress, address stableDebtTokenAddress, address variableDebtTokenAddress, address interestRateStrategyAddress, uint128 accruedToTreasury, uint128 unbacked, uint128 isolationModeTotalDebt))`]),Gf=D([`function getReservesData(address provider) view returns ((address underlyingAsset, string name, string symbol, uint256 decimals, uint256 baseLTVasCollateral, uint256 reserveLiquidationThreshold, uint256 reserveLiquidationBonus, uint256 reserveFactor, bool usageAsCollateralEnabled, bool borrowingEnabled, bool stableBorrowRateEnabled, bool isActive, bool isFrozen, uint128 liquidityIndex, uint128 variableBorrowIndex, uint128 liquidityRate, uint128 variableBorrowRate, uint128 stableBorrowRate, uint40 lastUpdateTimestamp, address aTokenAddress, address stableDebtTokenAddress, address variableDebtTokenAddress, address interestRateStrategyAddress, uint256 availableLiquidity, uint256 totalPrincipalStableDebt, uint256 averageStableRate, uint256 stableDebtLastUpdateTimestamp, uint256 totalScaledVariableDebt, uint256 priceInMarketReferenceCurrency, address priceOracle, uint256 variableRateSlope1, uint256 variableRateSlope2, uint256 stableRateSlope1, uint256 stableRateSlope2, uint256 baseStableBorrowRate, uint256 baseVariableBorrowRate, uint256 optimalUsageRatio, bool isPaused, bool isSiloedBorrowing, uint128 accruedToTreasury, uint128 unbacked, uint128 isolationModeTotalDebt, bool flashLoanEnabled, uint256 debtCeiling, uint256 debtCeilingDecimals, uint8 eModeCategoryId, uint256 borrowCap, uint256 supplyCap, uint16 eModeLtv, uint16 eModeLiquidationThreshold, uint16 eModeLiquidationBonus, address eModePriceSource, string eModeLabel, bool borrowableInIsolation)[], (uint256 marketReferenceCurrencyUnit, int256 marketReferenceCurrencyPriceInUsd, int256 networkBaseTokenPriceInUsd, uint8 networkBaseTokenPriceDecimals))`,`function getUserReservesData(address provider, address user) view returns ((address underlyingAsset, uint256 scaledATokenBalance, bool usageAsCollateralEnabledOnUser, uint256 stableBorrowRate, uint256 scaledVariableDebt, uint256 principalStableDebt, uint256 stableBorrowLastUpdateTimestamp)[], uint8)`]),Kf=D([`function depositETH(address pool, address onBehalfOf, uint16 referralCode) payable`,`function withdrawETH(address pool, uint256 amount, address to)`,`function borrowETH(address pool, uint256 amount, uint256 interestRateMode, uint16 referralCode)`,`function repayETH(address pool, uint256 amount, uint256 interestRateMode, address onBehalfOf) payable`,`function getWETHAddress() view returns (address)`]),qf=D([`function approveDelegation(address delegatee, uint256 amount)`,`function borrowAllowance(address fromUser, address toUser) view returns (uint256)`]),Jf=2n,Yf=0;function Xf(e,t){let n=Id(e,t,`createLender`),r=typeof n.from==`string`?n.from:n.from.address;async function i(e){let t=await n.execute(e);if(t.receipt.status!==`success`)throw new Zn({functionName:String(e.functionName??`call`),address:e.to,reason:`transaction ${t.hash} reverted (no revert data recoverable)`});return t}let a=()=>{let e=t.addresses.pool;if(!e)throw new F("`pool` in config.addresses.lend",`this lend write`);return e},o=()=>{let e=t.addresses.wrappedTokenGateway;if(!e)throw new F("`wrappedTokenGateway` in config.addresses.lend",`native lend flows`);return e},s=f/2n,c=new Set;async function l(e,t,a,o){let l=`${e.toLowerCase()}:${t.toLowerCase()}`;if(c.has(l))return;let u=await n.publicClient.readContract({address:e,abi:mr,functionName:`allowance`,args:[r,t]});if(u<a){await i({to:e,abi:On,functionName:`approve`,args:[t,f],gas:o}),c.add(l);return}u>=s&&c.add(l)}async function u(e,t,a,o){let l=`delegate:${e.toLowerCase()}:${t.toLowerCase()}`;if(c.has(l))return;let u=await n.publicClient.readContract({address:e,abi:qf,functionName:`borrowAllowance`,args:[r,t]});if(u<a){await i({to:e,abi:qf,functionName:`approveDelegation`,args:[t,f],gas:o}),c.add(l);return}u>=s&&c.add(l)}let d;function p(){return d??=(async()=>{let e=o(),t=a(),r=await n.publicClient.readContract({address:e,abi:Kf,functionName:`getWETHAddress`}),i=await n.publicClient.readContract({address:t,abi:Wf,functionName:`getReserveData`,args:[r]});return{aToken:i.aTokenAddress,variableDebtToken:i.variableDebtTokenAddress}})().catch(e=>{throw d=void 0,e}),d}return{account:r,async supply(e,t,n){let o=a();return n?.approve!==!1&&await l(e,o,t,n?.gas),i({to:o,abi:Wf,functionName:`supply`,args:[e,t,n?.onBehalfOf??r,Yf],gas:n?.gas})},async withdraw(e,t,n){return i({to:a(),abi:Wf,functionName:`withdraw`,args:[e,t,n?.to??r],gas:n?.gas})},async borrow(e,t,n){return i({to:a(),abi:Wf,functionName:`borrow`,args:[e,t,Jf,Yf,r],gas:n?.gas})},async repay(e,t,n){let o=a();return n?.approve!==!1&&await l(e,o,t,n?.gas),i({to:o,abi:Wf,functionName:`repay`,args:[e,t,Jf,n?.onBehalfOf??r],gas:n?.gas})},async setUseAsCollateral(e,t,n){return i({to:a(),abi:Wf,functionName:`setUserUseReserveAsCollateral`,args:[e,t],gas:n?.gas})},async supplyNative(e,t){return i({to:o(),abi:Kf,functionName:`depositETH`,args:[a(),t?.onBehalfOf??r,Yf],value:e,gas:t?.gas})},async withdrawNative(e,t){let n=o(),{aToken:s}=await p();return t?.approve!==!1&&await l(s,n,e,t?.gas),i({to:n,abi:Kf,functionName:`withdrawETH`,args:[a(),e,t?.to??r],gas:t?.gas})},async borrowNative(e,t){let n=o(),{variableDebtToken:r}=await p();return t?.approve!==!1&&await u(r,n,e,t?.gas),i({to:n,abi:Kf,functionName:`borrowETH`,args:[a(),e,Jf,Yf],gas:t?.gas})},async repayNative(e,t){return i({to:o(),abi:Kf,functionName:`repayETH`,args:[a(),e,Jf,t?.onBehalfOf??r],value:e,gas:t?.gas})},clearApprovalCache(){c.clear()}}}var Zf=10n**27n,Qf=Zf/2n,$f=31536000n;function ep(e,t){return(e*t+Qf)/Zf}function tp(e,t,n,r){let i=BigInt(Math.max(0,r-n));return i===0n?e:ep(e,Zf+t*i/$f)}function np(e,t,n,r){let i=BigInt(Math.max(0,r-n));if(i===0n)return e;let a=i>1n?i-1n:0n,o=i>2n?i-2n:0n,s=ep(t,t)/($f*$f),c=ep(s,t)/$f,l=i*a*s/2n,u=i*a*o*c/6n;return ep(e,Zf+t*i/$f+l+u)}function rp(e){let t=e.toString();return/^10*$/.test(t)?t.length-1:8}async function ip(e,t){let[n,r]=await t.readContract({address:e.uiPoolDataProvider,abi:Gf,functionName:`getReservesData`,args:[e.poolAddressesProvider]});return{raw:[...n],baseCurrencyDecimals:rp(r.marketReferenceCurrencyUnit)}}function ap(e,t,n){let r=tp(e.liquidityIndex,e.liquidityRate,e.lastUpdateTimestamp,n),i=np(e.variableBorrowIndex,e.variableBorrowRate,e.lastUpdateTimestamp,n),a=ep(e.totalScaledVariableDebt,i);return{underlying:e.underlyingAsset,symbol:e.symbol,name:e.name,decimals:Number(e.decimals),aToken:e.aTokenAddress,variableDebtToken:e.variableDebtTokenAddress,ltvBps:Number(e.baseLTVasCollateral),liquidationThresholdBps:Number(e.reserveLiquidationThreshold),liquidationBonusBps:Number(e.reserveLiquidationBonus),reserveFactorBps:Number(e.reserveFactor),usageAsCollateralEnabled:e.usageAsCollateralEnabled,borrowingEnabled:e.borrowingEnabled,isActive:e.isActive,isFrozen:e.isFrozen,isPaused:e.isPaused,flashLoanEnabled:e.flashLoanEnabled,borrowCap:e.borrowCap,supplyCap:e.supplyCap,availableLiquidity:e.availableLiquidity,totalVariableDebt:a,totalSupplied:e.availableLiquidity+a,liquidityRateRay:e.liquidityRate,variableBorrowRateRay:e.variableBorrowRate,liquidityIndexRay:r,variableBorrowIndexRay:i,lastUpdateTimestamp:Number(e.lastUpdateTimestamp),priceInBaseCurrency:e.priceInMarketReferenceCurrency,baseCurrencyDecimals:t}}async function op(e,t){let{raw:n,baseCurrencyDecimals:r}=await ip(e,t),i=Math.floor(Date.now()/1e3);return n.map(e=>ap(e,r,i))}async function sp(e,t,n){let[r,i,a]=await Promise.all([n.readContract({address:t.pool,abi:Wf,functionName:`getUserAccountData`,args:[e]}),n.readContract({address:t.uiPoolDataProvider,abi:Gf,functionName:`getUserReservesData`,args:[t.poolAddressesProvider,e]}).then(e=>[...e[0]]),ip(t,n)]),o=Math.floor(Date.now()/1e3),s=new Map(a.raw.map(e=>[e.underlyingAsset.toLowerCase(),e])),c=[];for(let e of i){if(e.scaledATokenBalance===0n&&e.scaledVariableDebt===0n)continue;let t=s.get(e.underlyingAsset.toLowerCase());t&&c.push({underlying:e.underlyingAsset,symbol:t.symbol,decimals:Number(t.decimals),aTokenBalance:ep(e.scaledATokenBalance,tp(t.liquidityIndex,t.liquidityRate,t.lastUpdateTimestamp,o)),variableDebt:ep(e.scaledVariableDebt,np(t.variableBorrowIndex,t.variableBorrowRate,t.lastUpdateTimestamp,o)),usageAsCollateralEnabled:e.usageAsCollateralEnabledOnUser})}let[l,u,d,f,p,m]=r;return{totalCollateralBase:l,totalDebtBase:u,availableBorrowsBase:d,currentLiquidationThresholdBps:Number(f),ltvBps:Number(p),healthFactor:m,baseCurrencyDecimals:a.baseCurrencyDecimals,positions:c}}function cp(e,t){let{getConfig:n,getClient:r}=e,i=()=>{if(!t.pool||!t.poolAddressesProvider||!t.uiPoolDataProvider)throw new F(`config.addresses.lend { pool, poolAddressesProvider, uiPoolDataProvider } (SOMNIA_MAINNET_LEND has the published mainnet deployment)`,`this lend read`);return{pool:t.pool,poolAddressesProvider:t.poolAddressesProvider,uiPoolDataProvider:t.uiPoolDataProvider}};return{listReserves:async()=>op(i(),r()),getAccount:async e=>sp(e,i(),r()),createLender:e=>Xf(e,{getConfig:n,getClient:r,addresses:t})}}var lp={pool:`0x7Cb9df1bc191B16BeFF9fdEC2cd1ef91Cac18176`,poolAddressesProvider:`0xEbf503eD254014C152965C52006A34f7Ab3d28f1`,uiPoolDataProvider:`0xfAb035cAFe664497a9476d3b11904e284Df758c6`,wrappedTokenGateway:`0x29edCCDB3aE8CDF0ea6077cd3E682BfA6dD53f19`},up=500,dp=8e3,fp=`graphql-transport-ws`,pp=class{url;onStatus;ws=null;acked=!1;closed=!1;nextId=1;subs=new Map;reconnectTimer=null;reconnectDelay=up;constructor(e,t){this.url=e,this.onStatus=t}subscribe(e,t,n,r){let i=String(this.nextId++);return this.subs.set(i,{payload:{query:e,variables:t},onNext:n,onError:r,started:!1}),this.ensureSocket(),this.acked&&this.start(i),()=>this.stop(i)}close(){this.closed=!0,this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.subs.clear(),this.teardownSocket(),this.onStatus?.(!1)}start(e){let t=this.subs.get(e);!t||t.started||!this.ws||this.ws.readyState!==WebSocket.OPEN||(t.started=!0,this.send({id:e,type:`subscribe`,payload:t.payload}))}stop(e){let t=this.subs.get(e);t&&(this.subs.delete(e),t.started&&this.ws?.readyState===WebSocket.OPEN&&this.send({id:e,type:`complete`}),this.subs.size===0&&(this.closed=!1,this.teardownSocket()))}ensureSocket(){if(this.ws||this.closed)return;let e=globalThis.WebSocket;if(!e)throw new P(`price-feed subscriptions need a global WebSocket (browser, or Node ≥ 21). Provide one via globalThis.WebSocket.`);let t=new e(this.url,fp);this.ws=t,t.onopen=()=>{this.ws===t&&this.send({type:`connection_init`})},t.onmessage=e=>{this.ws===t&&this.onMessage(e.data)},t.onclose=()=>this.onDisconnect(t),t.onerror=()=>this.onDisconnect(t)}onMessage(e){let t;try{t=JSON.parse(typeof e==`string`?e:String(e))}catch{return}switch(t.type){case`connection_ack`:this.acked=!0,this.reconnectDelay=up,this.onStatus?.(!0);for(let[e,t]of this.subs)t.started=!1,this.start(e);break;case`next`:(t.id?this.subs.get(t.id):void 0)?.onNext(t.payload?.data);break;case`error`:(t.id?this.subs.get(t.id):void 0)?.onError?.(t.payload);break;case`ping`:this.send({type:`pong`})}}onDisconnect(e){if(this.ws!==e||(this.detach(e),this.ws=null,this.acked=!1,this.onStatus?.(!1),this.closed||this.subs.size===0))return;let t=this.reconnectDelay;this.reconnectDelay=Math.min(this.reconnectDelay*2,dp),this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.ensureSocket()},t)}teardownSocket(){let e=this.ws;if(this.ws=null,this.acked=!1,e){this.detach(e);try{e.close()}catch{}}}detach(e){e.onopen=e.onmessage=e.onclose=e.onerror=null}send(e){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}},mp=3e4;async function hp(e,t,n={}){return Er(e,t,n,{timeoutMs:mp,label:`price-feed ${wr(t)}`})}var gp=`symbol base quote decimals description latestSpot latestMark latestBlockNumber latestBlockTimestamp latestUpdatedAtMs latestSourceUpdatedAtMs latestResynced`,_p=`id base requestId spot mark blockNumber blockTimestamp txHash`,vp=`resolution bucketStart open high low close markClose count`;function yp(e){return e?{where:`base: {_eq: $base}, quote: {_eq: $quote}`,varDecl:`, $quote: String!`}:{where:`base: {_eq: $base}`,varDecl:``}}function bp(e){let{where:t,varDecl:n}=yp(e);return`subscription LiveFeed($base: String!${n}) { Feed(where: {${t}}) { ${gp} } }`}function xp(e){let{where:t,varDecl:n}=yp(e);return`subscription LiveTicks($base: String!, $limit: Int!${n}) { PricePoint(where: {${t}}, order_by: {blockTimestamp: desc}, limit: $limit) { ${_p} } }`}function Sp(e,t){return e===null?0:Number(e)/10**t}function Cp(e){return e===null?0:Number(e)}function wp(e){if(e==null)return null;let t=Number(e);return Number.isFinite(t)?t:null}function Tp(e,t){return(e??t??``).toUpperCase()}function Ep(e,t){let n=Tp(e?.base,t),r=e?.decimals??18,i=e&&e.latestSpot!==null?{asset:n,price:Sp(e.latestSpot,r),ema:Sp(e.latestMark,r),blockNumber:Cp(e.latestBlockNumber),blockTimestamp:Cp(e.latestBlockTimestamp),decimals:r,raw:{price:e.latestSpot??`0`,ema:e.latestMark??`0`}}:null;return{asset:n,decimals:r,symbol:e?.symbol??null,base:e?.base??null,quote:e?.quote??null,description:e?.description??null,updatedAtMs:wp(e?.latestUpdatedAtMs),sourceUpdatedAtMs:wp(e?.latestSourceUpdatedAtMs),resynced:e?.latestResynced??null,latest:i}}function Dp(e,t,n){return{id:e.id,asset:Tp(e.base,n),price:Sp(e.spot,t),ema:Sp(e.mark,t),requestId:e.requestId,blockNumber:Number(e.blockNumber),blockTimestamp:Number(e.blockTimestamp),txHash:e.txHash,raw:{price:e.spot,ema:e.mark}}}function Op(e,t,n){return{asset:e,resolution:t.resolution,bucketStart:Number(t.bucketStart),open:Sp(t.open,n),high:Sp(t.high,n),low:Sp(t.low,n),close:Sp(t.close,n),emaClose:Sp(t.markClose,n),count:Number(t.count)}}async function kp(e,t,n,r){let{where:i,varDecl:a}=yp(r),o=await hp(e,`query PriceSnapshot($base: String!, $limit: Int!${a}) {
      Feed(where: {${i}}) { ${gp} }
      PricePoint(where: {${i}}, order_by: {blockTimestamp: desc}, limit: $limit) { ${_p} }
    }`,{base:t.toUpperCase(),limit:n,...r?{quote:r}:{}}),s=Ep(o.Feed[0],t);return{info:s,points:o.PricePoint.map(e=>Dp(e,s.decimals,t))}}async function Ap(e,t,n){let{where:r,varDecl:i}=yp(n);return Ep((await hp(e,`query PriceFeed($base: String!${i}) { Feed(where: {${r}}) { ${gp} } }`,{base:t.toUpperCase(),...n?{quote:n}:{}})).Feed[0],t)}async function jp(e,t,n){if(t&&t.length===0)return[];let r=t!==void 0,i=[r?`$bases: [String!]!`:null,n?`$quote: String!`:null].filter(Boolean).join(`, `),a=[r?`base: {_in: $bases}`:null,n?`quote: {_eq: $quote}`:null].filter(Boolean).join(`, `),o=a?`where: {${a}}, `:``;return(await hp(e,`query PriceFeeds${i?`(${i})`:``} { Feed(${o}order_by: {base: asc}) { ${gp} } }`,{...r?{bases:t.map(e=>e.toUpperCase())}:{},...n?{quote:n}:{}})).Feed.map(e=>Ep(e))}async function Mp(e,t,n){return(await jp(e,t,n)).map(e=>e.latest).filter(e=>e!==null)}async function Np(e,t,n,r){let i=[`{base: {_eq: $base}}`];return r&&i.push(`{quote: {_eq: $quote}}`),n?.from!==void 0&&i.push(`{blockTimestamp: {_gte: "${Math.floor(n.from)}"}}`),n?.to!==void 0&&i.push(`{blockTimestamp: {_lte: "${Math.floor(n.to)}"}}`),(await hp(e,`query PriceHistory($base: String!, $limit: Int!${r?`, $quote: String!`:``}) {
      PricePoint(where: {_and: [${i.join(`, `)}]}, order_by: {blockTimestamp: desc}, limit: $limit) { ${_p} }
    }`,{base:t.toUpperCase(),limit:n?.limit??500,...r?{quote:r}:{}})).PricePoint.map(e=>Dp(e,18,t))}async function Pp(e,t,n,r,i){let a=[`{base: {_eq: $base}}`,`{resolution: {_eq: ${n}}}`];return i&&a.push(`{quote: {_eq: $quote}}`),r?.from!==void 0&&a.push(`{bucketStart: {_gte: "${Math.floor(r.from)}"}}`),r?.to!==void 0&&a.push(`{bucketStart: {_lte: "${Math.floor(r.to)}"}}`),(await hp(e,`query PriceCandles($base: String!, $limit: Int!${i?`, $quote: String!`:``}) {
      Candle(where: {_and: [${a.join(`, `)}]}, order_by: {bucketStart: desc}, limit: $limit) { ${vp} }
    }`,{base:t.toUpperCase(),limit:r?.limit??500,...i?{quote:i}:{}})).Candle.reverse().map(e=>Op(t.toUpperCase(),e,18))}var Fp=200,Ip=100,Lp=3e4,Rp=class{deps;refs=new Map;tails=new Map;hydrations=new Map;lingers=new Map;constructor(e){this.deps=e}async watchPrice(e){let t=this.keyOf(e);this.acquire(t);try{this.tails.has(t)||await this.ensureHydration(t,()=>this.hydrate(e,t))}catch(e){throw this.releaseNow(t),e}return this.handle(()=>this.release(t))}getStatus(e){return this.deps.store.getStatus(this.keyOf(e))}stopAll(){for(let e of this.lingers.values())clearTimeout(e);this.lingers.clear();for(let e of[...this.tails.keys()])this.teardown(e);this.refs.clear(),this.hydrations.clear(),this.deps.store.setGlobalStatus({wsConnected:!1,watchCount:0}),this.deps.store.commit()}async hydrate(e,t){let n=tr(this.deps.getConfig()),r=e.toUpperCase();this.deps.store.setStatus(t,`hydrating`),this.deps.store.commit();let{info:i,points:a}=await kp(n.url,r,Fp,n.quote);this.deps.store.setInfo(r,i),this.deps.store.mergeTicks(r,a),(this.refs.get(t)??0)>0&&this.subscribe(r,t,n.url,n.wsUrl,n.quote),this.deps.store.setStatus(t,`live`),this.deps.store.setGlobalStatus({watchCount:this.tails.size}),this.deps.store.commit()}subscribe(e,t,n,r,i){if(this.tails.has(t))return;let a=new pp(r,e=>this.onConnStatus(t,e)),o={ws:a,unsubscribes:[],connected:!1};this.tails.set(t,o);let s=i?{quote:i}:{};o.unsubscribes.push(a.subscribe(bp(i),{base:e,...s},t=>{let n=t?.Feed?.[0];n&&(this.deps.store.setInfo(e,Ep(n,e)),this.deps.store.commit())})),o.unsubscribes.push(a.subscribe(xp(i),{base:e,limit:Ip,...s},t=>{let n=t?.PricePoint;if(!n?.length)return;let r=this.deps.store.getInfo(e)?.decimals??18;this.deps.store.mergeTicks(e,n.map(t=>Dp(t,r,e))),this.deps.store.commit()}))}onConnStatus(e,t){let n=this.tails.get(e);if(!n)return;n.connected=t;let r=[...this.tails.values()].some(e=>e.connected);this.deps.store.setGlobalStatus({wsConnected:r}),this.deps.store.commit()}acquire(e){this.cancelLinger(e),this.refs.set(e,(this.refs.get(e)??0)+1)}release(e){let t=(this.refs.get(e)??0)-1;if(t>0){this.refs.set(e,t);return}this.refs.set(e,0),this.linger(e,()=>this.teardown(e))}releaseNow(e){let t=(this.refs.get(e)??0)-1;t>0?this.refs.set(e,t):this.refs.delete(e)}teardown(e){this.refs.delete(e),this.hydrations.delete(e);let t=this.tails.get(e);if(t){for(let e of t.unsubscribes)e();t.ws.close(),this.tails.delete(e)}this.deps.store.purgeAsset(e),this.deps.store.setGlobalStatus({watchCount:this.tails.size,wsConnected:[...this.tails.values()].some(e=>e.connected)}),this.deps.store.commit()}handle(e){let t=!1;return{stop:()=>{t||(t=!0,e())}}}linger(e,t){this.cancelLinger(e),this.lingers.set(e,setTimeout(()=>{this.lingers.delete(e),t()},Lp))}cancelLinger(e){let t=this.lingers.get(e);t&&(clearTimeout(t),this.lingers.delete(e))}async ensureHydration(e,t){let n=this.hydrations.get(e);if(n)return n;let r=t().finally(()=>this.hydrations.delete(e));return this.hydrations.set(e,r),r}keyOf(e){return e.toUpperCase()}},zp=1e3;function Bp(e){return e.toUpperCase()}var Vp=class{assets=new Map;status={wsConnected:!1,watchCount:0};version=0;listeners=new Set;cache=new Map;getVersion(){return this.version}subscribe=e=>(this.listeners.add(e),()=>this.listeners.delete(e));commit(){this.version++;for(let e of this.listeners)e()}select(e,t){let n=this.cache.get(e);if(n&&n.v===this.version)return n.val;let r=t();return this.cache.set(e,{v:this.version,val:r}),r}state(e){let t=Bp(e),n=this.assets.get(t);return n||(n={latest:null,info:null,ticks:new Map,status:`unwatched`},this.assets.set(t,n)),n}setStatus(e,t){this.state(e).status=t}setLatest(e,t){let n=this.state(e);n.latest&&t.blockNumber<n.latest.blockNumber||(n.latest=t,n.info&&={...n.info,latest:t})}setInfo(e,t){this.state(e).info=t,t.latest&&this.setLatest(e,t.latest)}mergeTicks(e,t){let n=this.state(e);for(let e of t)n.ticks.set(e.id,e);if(n.ticks.size>zp){let e=[...n.ticks.values()].sort(Up);for(let t of e.slice(zp))n.ticks.delete(t.id)}}setGlobalStatus(e){this.status={...this.status,...e}}purgeAsset(e){this.assets.delete(Bp(e))}getLatest(e){let t=Bp(e);return this.select(`latest:${t}`,()=>this.assets.get(t)?.latest??null)}getInfo(e){let t=Bp(e);return this.select(`info:${t}`,()=>this.assets.get(t)?.info??null)}getStatus(e){return this.assets.get(Bp(e))?.status??`unwatched`}getTicks(e,t){let n=Bp(e);return this.select(`ticks:${n}:${t}`,()=>{let e=this.assets.get(n);return e?[...e.ticks.values()].sort(Up).slice(0,t):Hp})}getGlobalStatus(){return this.select(`global`,()=>this.status)}},Hp=[];function Up(e,t){return t.blockTimestamp-e.blockTimestamp||t.blockNumber-e.blockNumber}var Wp={yesBids:[],yesAsks:[],noBids:[],noAsks:[]};function Gp(e){if(!e.indexerUrl)throw new F(`indexerUrl`,`createClient`);let t=e.indexerUrl,n=e.indexerHeaders;e.signal&&kr(t,e.signal);let r=new fi,i=()=>e,a=lo(e.debug),o,s=()=>{if(!o){let t=e.wsRpcUrl??e.chain.rpcUrls.default.webSocket?.[0];if(!t)throw new F(`wsRpcUrl in createClient (or a chain whose rpcUrls carry a webSocket endpoint)`,`this operation needs chain access`);o=oo(e.chain,t)}return o},c=()=>s().decorated,l=new ld({getConfig:i,store:r,getClient:c,dbg:a}),u=()=>{let t=e.addresses?.oracleHub;if(!t)throw new F(`config.addresses.oracleHub`,`this read needs the OracleHub`);return t},d=new Vp,f=new Rp({getConfig:i,store:d}),p=()=>tr(e).url,m=()=>tr(e).quote,h=async e=>{if(e.pool!=null)return{pool:e.pool.toLowerCase()};if(e.marketId!=null){let n=await ba(e.marketId,t);if(!n)throw new P(`no binary market ${e.marketId}`);return{pool:n.poolAddress.toLowerCase()}}throw new P(`needs a pool or marketId`)},g=new yl,_=e=>{let t=e.toLowerCase();return g.getOrCreate(t,()=>El(t,c()))},v=(e,t)=>{if(e.marketId!=null){let n=e.marketId.toLowerCase();return{book:b.getLiveBinaryOrderBookByMarket(n,{depth:t}),market:r.markets.get(n)??null}}if(e.pool!=null)return{book:b.getLiveBinaryOrderBook(e.pool,{depth:t}),market:r.marketByPool(e.pool)};throw new P(`needs a pool or marketId`)},y,b={config:e,getViemClient:()=>s().raw,get lend(){return y??=cp({getConfig:i,getClient:c},e.addresses?.lend??{}),y},watchMarket:e=>l.watchMarket(e),watchMarkets:e=>l.watchAllMarkets(e?.discover??!1),watchUser:e=>l.watchUser(e),getWatchStatus:e=>l.getWatchStatus(e),stopLive:()=>{l.stopLive(),f.stopAll()},subscribeLive:e=>r.subscribe(e),getLiveStatus:()=>r.getStatus(),isTailing:()=>r.getStatus().mode===`tailing`,getLiveMarkets:()=>r.allMarkets(),getLiveMarketByPool:e=>r.marketByPool(e),getLiveMarketByAddress:e=>r.marketByAddress(e),getLiveFills:(e,t)=>r.recentFills(e,t?.limit??40),getLiveFundingUpdates:(e,t)=>r.fundingUpdatesFor(e,t?.limit??500),getLiveUserFills:(e,t,n)=>r.userFills(e,t,n?.limit??50),getLiveUserOrders:(e,t,n)=>r.userOrders(e,t,n?.limit??100),getLiveBinaryOrderBook:(e,t)=>{let n=t?.depth??10;return r.select(`bookyn:${e.toLowerCase()}:${n}`,()=>{let{bids:t,asks:i}=r.bookLevels(e,n),a=r.marketByPool(e);return Tl(t,i,10n**BigInt(a?.quoteDecimals??6))})},getLiveBinaryOrderBookByMarket:(e,t)=>{let n=t?.depth??10,i=e.toLowerCase();return r.select(`bookynm:${i}:${n}`,()=>{let e=r.bookLevelsByMarket(i,n);if(!e)return Wp;let t=10n**BigInt(r.markets.get(i)?.quoteDecimals??6);return Tl(e.bids,e.asks,t)})},getLiveSpotOrderBook:(e,t)=>r.bookLevels(e,t?.depth??12),quoteBinaryOrder:e=>{let t=e.depth??10,n,i;if(e.marketId!=null){let a=e.marketId.toLowerCase();n=b.getLiveBinaryOrderBookByMarket(a,{depth:t}),i=r.markets.get(a)??null}else if(e.pool!=null)n=b.getLiveBinaryOrderBook(e.pool,{depth:t}),i=r.marketByPool(e.pool);else throw new P(`quoteBinaryOrder needs a pool or marketId`);let a=10n**BigInt(i?.quoteDecimals??6);return Ai(n,e.side,e.quantity,a)},getBinaryBookParams:e=>_(e),quoteBinaryStake:async e=>{let{book:t,market:n}=v(e,e.depth??10),r=e.pool??n?.poolAddress??(await h(e)).pool,i=await _(r),a=10n**BigInt(n?.quoteDecimals??6);return Ri(t,e.side,e.stake,a,{...i,slippageBps:e.slippageBps,slippageMinTicks:e.slippageMinTicks})},quoteBinarySell:async e=>{let{book:t,market:n}=v(e,e.depth??10),r=e.pool??n?.poolAddress??(await h(e)).pool,i=await _(r),a=10n**BigInt(n?.quoteDecimals??6);return zi(t,e.side,e.quantity,a,{...i,slippageBps:e.slippageBps,slippageMinTicks:e.slippageMinTicks})},getMarketStats24h:async e=>{let{pool:n}=await h(e),r=Math.floor(Date.now()/1e3);return ji(await xu(n,3600,{from:r-86400,to:r},t),r)},getBinaryPositionPnL:async(e,n)=>{let r=await ba(n,t);if(!r)throw new P(`getBinaryPositionPnL — no binary market ${n}`);let i=10n**BigInt(r.quoteDecimals??6),[a,o,s,l]=await Promise.all([dd(e,{pool:r.poolAddress,limit:1e3},t),fu(e,{market:n,limit:1e3},t),Bi(e,r.marketAddress,t),(async()=>{try{let e=await Ml(r.poolAddress,{decimals:r.quoteDecimals??6,depth:1},c());return{bestBid:e.yesBids[0]?.price,bestAsk:e.yesAsks[0]?.price}}catch{return}})()]);return Ni(Mi(e,a,o),{balanceYes:BigInt(s.yes),balanceNo:BigInt(s.no)},r,i,{bookTop:l})},getOpenPositionsWithPnL:async e=>{let{positions:n}=await Hi(e,{ordersLimit:0,tradesLimit:0},t);if(n.length===0)return[];let r=[...new Set(n.map(e=>e.market.id))],[i,a,o]=await Promise.all([dd(e,{limit:1e3},t),fu(e,{limit:1e3},t),wl(r,t)]);return Vi(e,n,i,a,o)},getClaimable:async e=>{let n=(await Hi(e,{ordersLimit:0,tradesLimit:0},t)).positions.filter(e=>e.market.voided||e.market.winningOutcome!=null),r=new Map,i=async e=>{let n=r.get(e);if(n!=null)return n;let i=await xa(e,t),a=i?.settlementFeeBps==null?0n:BigInt(i.settlementFeeBps);return r.set(e,a),a},a=[];for(let e of n){let t=!e.market.voided&&e.market.winningOutcome===e.outcomeIndex;a.push({marketId:e.market.id,pool:e.market.poolAddress,outcomeIdx:+(e.outcomeIndex===1),amount:BigInt(e.balance),winningOutcome:e.market.winningOutcome??null,voided:e.market.voided,status:e.market.status,settlementFeeBps:t?await i(e.market.id):0n})}return Fi(a)},watchPrice:e=>f.watchPrice(e),watchPrices:async e=>{let t=await Promise.allSettled(e.map(e=>f.watchPrice(e))),n=t.filter(e=>e.status===`fulfilled`).map(e=>e.value),r=t.find(e=>e.status===`rejected`);if(r)throw n.forEach(e=>e.stop()),r.reason;return{stop:()=>n.forEach(e=>e.stop())}},getPriceStatus:e=>f.getStatus(e),subscribePrices:e=>d.subscribe(e),getLivePrice:e=>d.getLatest(e),getLivePrices:e=>e.map(e=>d.getLatest(e)),getLivePriceTicks:(e,t)=>d.getTicks(e,t?.limit??100),getLivePriceFeedInfo:e=>d.getInfo(e),fetchPriceFeedInfo:e=>Ap(p(),e,m()),fetchPrice:e=>Ap(p(),e,m()).then(e=>e.latest),fetchPrices:e=>Mp(p(),e,m()),listPriceFeeds:()=>jp(p(),void 0,m()),fetchPriceHistory:(e,t)=>Np(p(),e,t,m()),fetchPriceCandles:(e,t,n)=>Pp(p(),e,t,n,m()),listMarkets:e=>la(e,t),listRegistryMarkets:()=>da(t),countMarkets:e=>fa(e??{},t,n),getMarket:e=>pa(e,t),listBinaryMarkets:e=>ga(e,t),listLiveBinaryMarkets:e=>Ea(e,t),listBinaryVenueIds:()=>_a(t),listBinaryAssets:()=>va(t),countBinaryMarkets:e=>ya(e,t,n),listPastBinaryMarkets:e=>Da(e,t),getBinaryMarket:e=>ba(e,t),getBinaryMarketByAddress:e=>ha(e,t),getMarketFees:e=>xa(e,t),listSpotMarkets:e=>Sa(e,t),getSpotMarket:e=>Ca(e,t),getMarketStatusHistory:e=>G(e,t),listPerpMarkets:e=>wa(e,t),getPerpMarket:e=>Ta(e,t),getCandles:(e,n,r)=>xu(e,n,r,t),getFills:(e,n)=>ud(e,n,t),getUserFills:(e,n)=>dd(e,n,t),getOpenOrders:(e,n)=>xl(e,n,t),getOrders:(e,n)=>Sl(e,n,t),listSweepableOrders:e=>Fl(e??{},t),getOutcomeBalances:(e,n)=>Bi(e,n,t),getPortfolio:(e,n)=>Hi(e,n,t),getSpotPortfolio:(e,n)=>Vc(e,n,t),getSpotStopOrders:(e,n)=>el(e,n,t),getPerpPortfolio:(e,n)=>Go(e,n,t),listPerpStopOrders:e=>mc(e??{},t),getPerpStopOrder:e=>_c(e,c()),getPerpStopOrderSomiPayment:e=>gc(e,c()),getUnclaimedPerpStopSomi:e=>Fc(e,c()),listPerpOrderHistory:(e,n)=>Jo(e,n??{},t),getSyncStatus:e=>du(e,t),getMarketByPool:e=>mu(e,t),countOrders:(e,r)=>Cl(e,r??{},t,n),countUserFills:(e,r)=>fd(e,r??{},t,n),getRouterActions:(e,n)=>fu(e,n??{},t),getMarketResolution:e=>Ho(e,t),getOpeningPrices:e=>Oa(e,t),getBookTops:e=>wl(e,t),listProtocolFees:e=>sl(e??{},t),listBuilderFees:e=>cl(e??{},t),listSettlementFees:e=>ll(e??{},t),listBuilderApprovals:e=>ul(e??{},t),getVaultPayoutFallbacks:(e,n)=>Gi(e,n??{},t),getFundingPayments:(e,n)=>Yo(e,n??{},t),getMarginEvents:(e,n)=>Xo(e,n??{},t),getLiquidations:e=>Zo(e??{},t),getFundingRateHistory:(e,n)=>es(e,n??{},t),listFundingRateHistory:(e,n)=>Qo(e,n??{},t),listFundingRateCandles:(e,n,r)=>$o(e,n,r??{},t),getOpenInterestHistory:(e,n)=>ns(e,n??{},t),listPerpFees:e=>ts(e??{},t),listPerpPositions:(e,n)=>hs(e,n??{},t),getBinaryOrderBook:(e,t)=>Ml(e,t,c()),getSpotOrderBook:(e,t)=>Nl(e,t,c()),getOrderOnchain:(e,t)=>kl(e,t,c()),getOwnOpenOrdersOnchain:(e,t)=>Al(e,t,c()),getAllOpenOrdersOnchain:(e,t)=>jl(e,t,c()),getPerpState:e=>fs(e,c()),getPerpPosition:e=>ps(e,c()),getMarginAccount:(e,t)=>ws(e,t,c()),getAccountHealth:(e,t)=>Ts(e,t,c()),getLiquidationPrice:e=>Is(e,c()),getPerpLeverage:e=>Ls(e,c()),getPerpPositionAnalytics:e=>zs(e,c()),listPerpPositionAnalytics:e=>Bs(e,c()),getMaxPerpOrderSize:e=>nc(e,c()),previewPerpClosePnl:e=>oc(e,c()),previewPerpLiquidationPrice:e=>ac(e,c()),getPerpSideHolders:(e,t)=>Vs(e,t??{},c()),getBankruptcyPrice:(e,t)=>Us(e,t??{},c()),getPerpSystemConfig:e=>sc(e,c()),getInsuranceFundState:e=>cc(e,c()),getLiquidationEngineConfig:e=>lc(e,c()),tryGetPerpAccountEquity:(e,t)=>uc(e,t,c()),getPerpCollateralBasis:(e,t)=>dc(e,t,c()),listPerpPoolStatuses:e=>Lc(e,c()),listTradeablePerpPools:e=>zc(e,c()),isPerpPoolRegistered:e=>Bc(e,c()),getPerpRiskParams:e=>Es(e,c()),previewPerpOrderMargin:e=>ec(e,c()),meetsPerpImForFill:e=>tc(e,c()),quoteMeetsPerpImForOrder:e=>rc(e,c()),quotePerpOrderTopUp:e=>ic(e,c()),getPerpHealthSnapshot:e=>Ds(e,c()),getEffectiveImfBps:e=>Os(e,c()),getVaultBalance:e=>Ui(e,c()),getManualVaultMode:e=>ol(e,c()),getAutoPullRequirement:e=>Uc(e,c()),isOperatorAuthorized:e=>X(e,c()),isGloballyApproved:t=>Qc(t,c(),e.addresses?.operatorPermissionsRegistry),isApprovedForPool:t=>$c(t,c(),e.addresses?.operatorPermissionsRegistry),getOwnLockedBalance:e=>Wc(e,c()),getLockedTokenBreakdown:e=>Gc(e,c()),convertToQuoteAtPriceCeil:e=>Kc(e,c()),getMarketOnchain:t=>{let n=e.addresses?.binaryModule;if(!n)throw new F(`addresses.binaryModule`,`getMarketOnchain (v2 resolves markets by marketId through the module)`);return Ga(t,{module:n,settlement:e.addresses?.binarySettlement},c())},getPoolCreator:t=>{let n=e.addresses?.binaryModule;if(!n)throw new F(`addresses.binaryModule`,`getPoolCreator`);return Ka(t,n,c())},getFreePools:(t,n)=>{let r=e.addresses?.binaryModule;if(!r)throw new F(`addresses.binaryModule`,`getFreePools`);return bu(t,n,r,c())},getPoolBindings:e=>gu(e,t),getPool:e=>_u(e,t),getErc20Balance:(e,t)=>qi(e,t,c()),getErc20Metadata:e=>Ji(e,c()),getErc20Allowance:(e,t,n)=>Yi(e,t,n,c()),getOutcomeBalance:e=>Wi(e,c()),getBalances:(e,t)=>Xi(e,t,c()),getStopOrderSomiPayment:e=>nl(e,c()),getMaxBuilderFeeBpsTimes1k:e=>hl(e,c()),getBuilderApproval:e=>gl(e,c()),getEffectiveBuilderApproval:e=>_l(e,c()),getContractMeta:(e,t)=>qa(e,t??{},c()),getNativeBalance:e=>wd(e,c()),getHeadBlock:()=>Pl(c()),getSystemInfo:()=>Cd(c(),e.addresses??{}),listOperators:e=>Vd(e??{},t),countOperators:e=>Hd(e??{},t,n),getOperator:e=>Ud(e,t),listVenues:e=>Wd(e??{},t),countVenues:e=>Gd(e??{},t,n),getVenue:e=>Kd(e,t),encodeBinaryVenueFeeParams:t=>Hf(t,c(),e.addresses?.binaryModule),getMaxVenueFeeBps:()=>Uf(c(),e.addresses?.binaryModule),listMarketCreators:e=>jf(e??{},t),getMarketCreator:e=>Mf(e,t),listOracleAdapters:e=>Nf(e??{},t),getOracleAdapter:e=>Pf(e,t),listSeries:e=>Ff(e??{},t),getSchedulingCost:e=>of(e,u(),c()),earmarkedOf:e=>sf(e,u(),c()),creditOf:e=>cf(e,u(),c()),outstandingOf:e=>lf(e,u(),c()),withdrawableOf:e=>uf(e,u(),c()),payerCreditOf:e=>df(e,u(),c()),payerOf:e=>ff(e,u(),c()),resolveReserve:()=>pf(u(),c()),quoteCreateMarketValue:e=>mf(e,u(),c()),getOracleQuestion:e=>gf(e,t),listOracleQuestions:e=>_f(e??{},t),getOperatorHubAccount:e=>vf(e,t),listOperatorHubAccounts:e=>yf(e??{},t),listOracleBinds:e=>bf(e??{},t),listOracleCallbacks:e=>xf(e??{},t),createTrader:e=>Fd(e,{getConfig:i,getClient:c,dbg:a}),createOperatorAdmin:e=>Bd(e,{getConfig:i,getClient:c}),createOracleHubAdmin:e=>hf(e,{getConfig:i,getClient:c}),createGovernanceAdmin:e=>Of(e,{getConfig:i,getClient:c}),createMarketCreatorAdmin:e=>Af(e,{getConfig:i,getClient:c})};return b}var Kp=[`JAN`,`FEB`,`MAR`,`APR`,`MAY`,`JUN`,`JUL`,`AUG`,`SEP`,`OCT`,`NOV`,`DEC`];function qp(e){return e.replace(/[^A-Za-z0-9.]+/g,``)}function Jp(e){let t=new Date(e*1e3),n=`${String(t.getUTCDate()).padStart(2,`0`)}${Kp[t.getUTCMonth()]}${String(t.getUTCFullYear()%100).padStart(2,`0`)}`;return e%86400==0?n:`${n}-${String(t.getUTCHours()).padStart(2,`0`)}${String(t.getUTCMinutes()).padStart(2,`0`)}`}function Yp(e){return e.includes(`.`)?e.replace(/\.?0+$/,``):e}function Xp(e,t){if(e.marketType===`SPOT`)return`${e.baseSymbol?qp(e.baseSymbol):t(e.baseToken)}/${e.quoteSymbol?qp(e.quoteSymbol):t(e.quoteToken)}`;if(e.marketType===`PERP`){let n=e.baseSymbol?qp(e.baseSymbol):t(e.baseToken),r=e.quoteSymbol?qp(e.quoteSymbol):t(e.quoteToken);return`${n}/${r}:${r}`}let n=e,r=qp(n.asset)||`MKT`,i=qp(Yp(n.strike)),a=t(n.collateral);return`${r}-${i}-${Jp(Number(n.expiry))}/${a}`}function Zp(e,t){let n=`-${t.id.replace(/^0x/,``).slice(-4).toUpperCase()}`,r=e.lastIndexOf(`/`);return r===-1?`${e}${n}`:`${e.slice(0,r)}${n}${e.slice(r)}`}function Qp(e){return e.marketType===`BINARY`?[{label:`YES`,index:0},{label:`NO`,index:1}]:[]}function $p(e,t){return t?`${e}#${t}`:e}function em(e){let t=e.indexOf(`#`);return t===-1?{marketSymbol:e}:{marketSymbol:e.slice(0,t),outcome:e.slice(t+1).toUpperCase()||void 0}}function tm(e){return/^0x[0-9a-fA-F]{40}$/.test(e)||/^0x[0-9a-fA-F]{64}$/.test(e)}var nm=class{bySymbol=new Map;byRef=new Map;build(e,t){this.bySymbol.clear(),this.byRef.clear();let n=new Map;for(let r of e){let e=Xp(r,t),i=n.get(e)??[];i.push(r),n.set(e,i)}let r=new Map;for(let[e,t]of n)for(let n of t){let i=t.length===1?e:Zp(e,n);r.set(n.id,i),this.bySymbol.set(i,n),this.byRef.set(n.id.toLowerCase(),i),this.byRef.set(n.poolAddress.toLowerCase(),i),n.marketType===`BINARY`&&this.byRef.set(n.marketAddress.toLowerCase(),i)}return r}resolve(e){let t,n;if(tm(e)){let n=this.byRef.get(e.toLowerCase());if(!n)throw new P(`unknown market ref ${e} — call loadMarkets() first`);t=n}else({marketSymbol:t,outcome:n}=em(e));let r=this.bySymbol.get(t);if(!r)throw new P(`unknown symbol ${e} — call loadMarkets() first`);let i=Qp(r);if(i.length===0){if(n)throw new P(`${t} is a ${r.marketType} market — it has no outcomes`);return{market:r,marketSymbol:t,symbol:t,pool:r.poolAddress}}let a=n?i.find(e=>e.label===n):i[0];if(!a)throw new P(`${t} has no outcome "${n}" (has: ${i.map(e=>e.label).join(`, `)})`);return{market:r,marketSymbol:t,symbol:$p(t,a.label),outcome:a.label,outcomeIndex:a.index,pool:r.poolAddress}}},rm={"1m":60,"5m":300,"15m":900,"1h":3600,"4h":14400,"1d":86400};function im(e,t){return am(e),Ti(e,t)}function am(e){if(!Number.isFinite(e)||e<0)throw new P(`invalid amount/price ${e}`)}function om(e,t){am(e);let n=Math.min(t+20,100),r=e.toFixed(n);if(r.includes(`e`)||r.includes(`E`))throw new P(`amount/price ${e} is too large to convert exactly at ${t} decimals`);let[i,a=``]=r.split(`.`);return BigInt(i+a.padEnd(t,`0`).slice(0,t))}function sm(e,t,n,r={}){if(t<=0n)throw new P(`invalid grid step ${t}`);let{clamp:i=!1,strict:a=!1,direction:o=`down`}=r;if(a&&o===`up`)throw new P(`snapToGrid cannot combine strict with direction "up"`);let s=10n**BigInt(n);if(i&&t*2n>s)throw new P(`grid step ${t} exceeds half of one unit (${s})`);let c=a?om(e,n):im(e,n),l=c%t,u=t-l,d=l!==0n&&(o===`up`||!a&&u<=c/2n**52n)?c+u:c-l;if(!i)return Q(d,n);if(d<t)return Q(t,n);let f=(s-t)/t*t;return Q(d>f?f:d,n)}function Q(e,t){return e==null?0:Number(C(BigInt(e),t))}function cm(e){return new Date(e).toISOString()}function lm(e){switch(e){case`Open`:return`open`;case`Filled`:return`closed`;case`Cancelled`:return`canceled`;case`Expired`:return`expired`;default:return`closed`}}function um(e,t){let n=Number(e??`1`);if(!Number.isFinite(n)||n<=0)return t;let r=n/10**t,i=Math.ceil(-Math.log10(r));return Math.min(t,Math.max(0,i))}var dm={"24h":864e5,"7d":6048e5,"30d":2592e6},fm={"24h":36e5,"7d":144e5,"30d":864e5,all:864e5},pm=.01;function mm(e,t,n){if(!e||e.length===0)return n;let r;for(let[n,i]of e){if(n>t)break;r=i}return r??e[0]?.[1]??n}function hm(e,t){let{timeframe:n,asOf:r,marks:i}=t,a=t.cexRateBps??10,o=[...e].sort((e,t)=>e.timestamp-t.timestamp),s=n===`all`?o[0]?.timestamp??r:r-dm[n],c=fm[n],l=new Map,u=e=>{let t=l.get(e);return t||(t={qty:0,cost:0},l.set(e,t)),t},d=e=>{let t=u(e.market);if(e.side===`buy`)return t.qty+=e.baseAmount,t.cost+=e.quoteAmount,0;let n=t.qty>0?t.cost/t.qty:0,r=Math.min(e.baseAmount,t.qty),i=n*r;return t.qty-=r,t.cost-=i,(e.baseAmount>0?e.quoteAmount*r/e.baseAmount:0)-i},f=e=>{let t=0;for(let[n,r]of l){if(r.qty<=0)continue;let a=mm(i.series.get(n),e,i.lastPrice.get(n)??0);t+=r.qty*a-r.cost}return t},p=0;for(;p<o.length&&o[p].timestamp<s;)d(o[p]),p+=1;let m=0;for(let[e,t]of l)t.qty>0&&(m+=t.qty*mm(i.series.get(e),s,i.lastPrice.get(e)??0));let h=f(s),g=[{t:s,valueUsd:0}],_=0,v=0,y=0,b=0;for(let e=s+c;;e+=c){let t=Math.min(e,r);for(;p<o.length&&o[p].timestamp<=t;){let e=o[p];_+=d(e),b+=e.quoteAmount,e.side===`buy`?v+=e.quoteAmount:y+=e.quoteAmount,p+=1}if(g.push({t,valueUsd:_+f(t)-h}),t>=r)break}let x=[];for(let e=1;e<g.length;e+=1){let t=g[e-1],n=g[e];x.push({t:n.t,pnlUsd:n.valueUsd-t.valueUsd})}let S=g[g.length-1].valueUsd,C=m+v-y,w=0,T=0;for(let e of o)w+=e.quoteAmount,t.sessionSince!==void 0&&e.timestamp>=t.sessionSince&&(T+=e.quoteAmount);let ee=a/1e4;return{timeframe:n,asOf:r,equity:g,pnl:{totalUsd:S,buckets:x},mwrr:{return:C<pm?null:S/C,gainUsd:S,depositedUsd:C},volume:{periodUsd:b,lifetimeUsd:w,...t.sessionSince===void 0?{}:{sessionUsd:T}},feesSaved:{cexRateBps:a,periodUsd:b*ee,lifetimeUsd:w*ee}}}var gm=Symbol(`unset`),_m={"1m":`M1`,"1h":`H1`,"1d":`D1`},vm=new Set([`M1`,`H1`,`D1`]),ym=200,bm=20,xm=class{client;markets={};symbols=[];has={fetchMarkets:!0,fetchOrderBook:!0,fetchTrades:!0,fetchOHLCV:!0,fetchBalance:!0,fetchOpenOrders:!0,fetchMyTrades:!0,fetchStatus:!0,createOrder:!0,cancelOrder:!0,watchOrderBook:!0,watchTrades:!0,watchOrders:!0,watchMyTrades:!0,fetchPositions:!0,fetchFundingRate:!0,fetchFundingRateHistory:!0,watchPrice:!0,fetchPrice:!0,fetchPriceOHLCV:!0};registry=new nm;signerConfig;traderInstance=null;currencies=new Map;bookParams=new Map;watches=new yl;priceWatches=new yl;channels=new Map;unsubscribe=null;unsubscribePrices=null;constructor(e){let{privateKey:t,account:n,walletClient:r,...i}=e;this.client=Gp(i),this.signerConfig={privateKey:t,account:n,walletClient:r}}get trader(){return this.traderInstance??=this.client.createTrader(this.signerConfig),this.traderInstance}setSigner(e){this.signerConfig={account:e.account,privateKey:e.privateKey,walletClient:e.walletClient},this.traderInstance=null}get walletAddress(){let{privateKey:e,account:t,walletClient:n}=this.signerConfig;if(n?.account)return n.account.address;if(typeof t==`object`)return t.address;if(typeof t==`string`)return t;if(e)return le(e).address}requireAddress(e){let t=this.walletAddress;if(!t)throw new Jn(e);return t}async loadMarkets(e=!1){if(!e&&this.symbols.length>0)return this.markets;let t=await this.client.listRegistryMarkets(),n=new Set;for(let e of t)e.marketType===`BINARY`?n.add(W(e.collateral)):(!e.baseSymbol&&!e.baseIsNative&&n.add(W(e.baseToken)),e.quoteSymbol||n.add(W(e.quoteToken)));for(let e of this.currencies.keys())n.delete(e);await Promise.all([...n].map(async e=>{let t=this.client.getViemClient(),[n,r]=await Promise.all([t.readContract({address:e,abi:mr,functionName:`symbol`}).then(e=>String(e)).catch(()=>e.slice(2,8).toUpperCase()),t.readContract({address:e,abi:mr,functionName:`decimals`}).then(e=>Number(e)).catch(()=>18)]);this.currencies.set(e,{code:n,decimals:r})}));let r=e=>this.currencies.get(W(e))?.code??e.slice(2,8).toUpperCase(),i=new Set;for(let e of t)e.marketType===`BINARY`&&i.add(W(e.poolAddress));e&&this.bookParams.clear();for(let e of this.bookParams.keys())i.delete(e);await Promise.all([...i].map(async e=>{let t=await this.client.getBinaryBookParams(e).catch(()=>null);t&&this.bookParams.set(e,t)}));let a=this.registry.build(t,r);this.markets={};for(let e of t){let t=a.get(e.id)??I(`registry.build omitted market ${e.id}`);this.markets[t]=this.toUnifiedMarket(e,t,r),e.marketType===`BINARY`?this.currencies.set(W(e.collateral),{code:r(e.collateral),decimals:e.quoteDecimals}):(e.baseIsNative||this.currencies.set(W(e.baseToken),{code:e.baseSymbol??r(e.baseToken),decimals:e.baseDecimals}),this.currencies.set(W(e.quoteToken),{code:e.quoteSymbol??r(e.quoteToken),decimals:e.quoteDecimals}))}return this.symbols=Object.keys(this.markets).sort(),this.markets}toUnifiedMarket(e,t,n){if(e.marketType===`SPOT`){let r=e;return{id:e.id,symbol:t,type:`spot`,base:r.baseSymbol??n(r.baseToken),quote:r.quoteSymbol??n(r.quoteToken),active:!0,contract:!1,precision:{price:um(r.tickSize,r.quoteDecimals),amount:um(r.lotSize,r.baseDecimals)},limits:{amount:{min:r.minQuantity?Q(r.minQuantity,r.baseDecimals):void 0}},info:e}}if(e.marketType===`PERP`){let r=e,i=r.quoteSymbol??n(r.quoteToken);return{id:e.id,symbol:t,type:`swap`,base:r.baseSymbol??n(r.baseToken),quote:i,settle:i,active:!0,contract:!0,precision:{price:um(r.tickSize,r.quoteDecimals),amount:um(r.lotSize,r.baseDecimals)},limits:{amount:{min:r.minQuantity?Q(r.minQuantity,r.baseDecimals):void 0}},info:e}}let r=e,i=Math.floor(Date.now()/1e3),a=Number(r.tradingStart)<=i&&i<Number(r.expiry),o=this.bookParams.get(W(r.poolAddress));return{id:e.id,symbol:t,type:`binary`,base:t.split(`/`)[0]??t,quote:n(r.collateral),settle:n(r.collateral),active:a&&r.status!==`Resolved`&&r.status!==`Voided`,contract:!1,precision:{price:o?um(o.tickSize.toString(),r.quoteDecimals):r.quoteDecimals,amount:o?um(o.lotSize.toString(),r.baseDecimals):r.baseDecimals},limits:{amount:{min:o?Q(o.minQuantity,r.baseDecimals):void 0}},outcomes:Qp(e).map(e=>({symbol:$p(t,e.label),label:e.label,index:e.index})),info:e}}market(e){return this.registry.resolve(e)}priceToPrecision(e,t){let n=this.market(e),r=this.decimalsOf(n).price;return sm(t,this.tickOf(n,`priceToPrecision`),r,{clamp:n.market.marketType===`BINARY`})}amountToPrecision(e,t){let n=this.market(e);return sm(t,this.lotOf(n,`amountToPrecision`),this.decimalsOf(n).amount,{strict:!0})}async fetchMarkets(){return await this.loadMarkets(),Object.values(this.markets)}tickOf(e,t){if(e.market.marketType===`BINARY`)return this.requireBookParams(e,t).tickSize;let n=this.decimalsOf(e).price;return e.market.tickSize?BigInt(e.market.tickSize):10n**BigInt(n-3)}lotOf(e,t){if(e.market.marketType===`BINARY`)return this.requireBookParams(e,t).lotSize;let n=this.decimalsOf(e).amount;return e.market.lotSize?BigInt(e.market.lotSize):10n**BigInt(n)}decimalsOf(e){return{price:e.market.quoteDecimals,amount:e.market.baseDecimals}}requireBookParams(e,t){let n=this.bookParams.get(W(e.pool));if(!n)throw new P(`${t}: no book parameters for binary market ${e.symbol} (pool ${e.pool}). The pool's getOrderBookParameters read failed during loadMarkets(); retry with loadMarkets(true).`);return n}bookView(e,t){let n=this.decimalsOf(e),r=e=>[Q(e.price,n.price),Q(e.quantity,n.amount)];if(e.market.marketType===`BINARY`){let n=t;return e.outcomeIndex===1?{bids:n.noBids.map(r),asks:n.noAsks.map(r)}:{bids:n.yesBids.map(r),asks:n.yesAsks.map(r)}}let i=t;return{bids:i.bids.map(r),asks:i.asks.map(r)}}sideView(e,t){if(!t)return;let n=t===`BUY_YES`||t===`SELL_NO`;return e.market.marketType===`BINARY`&&e.outcomeIndex===1?n?`sell`:`buy`:n?`buy`:`sell`}toNativePrice(e,t){let n=this.decimalsOf(e),r=im(t,n.price);return e.market.marketType===`BINARY`&&e.outcomeIndex===1?10n**BigInt(n.price)-r:r}priceView(e,t,n){let r=Q(t,n);return e.market.marketType===`BINARY`&&e.outcomeIndex===1?1-r:r}ohlcView(e,t,n){let r=this.priceView(e,t.open,n),i=this.priceView(e,t.close,n),a=this.priceView(e,t.high,n),o=this.priceView(e,t.low,n);return{open:r,close:i,high:Math.max(a,o),low:Math.min(a,o)}}async fetchOrderBook(e,t=10){let n=this.market(e),r=n.market.marketType===`BINARY`?await this.client.getBinaryOrderBook(n.pool,{depth:t,decimals:n.market.quoteDecimals}):await this.client.getSpotOrderBook(n.pool,{depth:t});return{symbol:n.symbol,...this.bookView(n,r),timestamp:Date.now(),info:r}}async fetchTrades(e,t,n=50){let r=this.market(e),i=this.decimalsOf(r);return(await this.client.getFills(r.pool,{limit:n})).map(e=>{let t=this.priceView(r,e.fillPrice,i.price),n=Q(e.quantity,i.amount),a=Number(e.timestamp)*1e3,o=e.takerIsBid??void 0,s=o===void 0?void 0:o?`buy`:`sell`;return r.market.marketType===`BINARY`&&r.outcomeIndex===1&&s&&(s=s===`buy`?`sell`:`buy`),{id:e.id,symbol:r.symbol,price:t,amount:n,cost:t*n,side:s,txHash:e.txHash,timestamp:a,datetime:cm(a),info:e}}).filter(e=>t===void 0||e.timestamp>=t)}async fetchOHLCV(e,t=`5m`,n,r=500){let i=this.market(e),a=rm[t];if(!a)throw new P(`unknown timeframe ${t} (have: ${Object.keys(rm).join(` `)})`);let o=this.decimalsOf(i);return(await this.client.getCandles(i.pool,a,{limit:r})).map(e=>{let t=this.ohlcView(i,{open:e.openPrice,high:e.high,low:e.low,close:e.closePrice},o.price);return[Number(e.bucketStart)*1e3,t.open,t.high,t.low,t.close,Q(e.baseVolume,o.amount)]}).filter(e=>n===void 0||e[0]>=n)}async fetchTicker(e){let t=this.market(e),n=this.decimalsOf(t),r=Math.floor(Date.now()/1e3),i=await this.client.getCandles(t.pool,3600,{from:r-86400,limit:25}),a=ji(i,r),o=a.openPrice24h!==null&&a.high24h!==null&&a.low24h!==null?this.ohlcView(t,{open:a.openPrice24h,high:a.high24h,low:a.low24h,close:a.openPrice24h},n.price):void 0,s=o?.open,c=o?.high,l=o?.low,u=i[i.length-1],d=u?u.closePrice:t.market.lastPrice,f=d==null?void 0:this.priceView(t,d,n.price),p=f!==void 0&&s!==void 0?f-s:void 0,m=p!==void 0&&s?p/s:void 0,h=ta(t.market)?await this.client.getPerpState(t.pool).catch(()=>void 0):void 0,g=Date.now();return{symbol:t.symbol,timestamp:g,datetime:cm(g),...s===void 0?{}:{open:s},...c===void 0?{}:{high:c},...l===void 0?{}:{low:l},...f===void 0?{}:{last:f},...p===void 0?{}:{change:p},...m===void 0?{}:{percentage:m},baseVolume:Q(a.baseVolume24h,n.amount),quoteVolume:Q(a.volume24h,n.price),...h?{...h.markPriceOk&&h.markPrice>0n?{markPrice:Q(h.markPrice,n.price)}:{},indexPrice:Q(h.indexPrice,n.price),fundingRate:Number(xs(h.fundingRate,h.fundingWindowSec))/0xde0b6b3a7640000,fundingTimestamp:Number(h.nextFundingAt)*1e3,openInterest:Q(h.openInterest,n.amount)}:{},info:h?{...a,perp:h}:a}}async fetchBalance(){let e=this.requireAddress(`fetchBalance`);await this.loadMarkets();let t={},n=[...this.currencies.entries()].map(async([n,{code:r,decimals:i}])=>{let a=Q(await this.client.getErc20Balance(n,e).catch(()=>0n),i);t[r]={free:a,used:0,total:a}}),r=this.client.config.chain.nativeCurrency,i=this.client.getNativeBalance(e).then(e=>{let n=Q(e,r.decimals);t[r.symbol]={free:n,used:0,total:n}}).catch(()=>void 0),a=this.client.getPortfolio(e).then(e=>{for(let n of e.positions){let e=n.outcomeIndex===1?`BUY_NO`:`BUY_YES`,r=this.tryResolvePool(n.market.poolAddress,e);if(!r)continue;let i=Q(n.balance,n.market.quoteDecimals);t[r.symbol]={free:i,used:0,total:i}}}).catch(()=>void 0);return await Promise.all([...n,i,a]),t}async fetchOpenOrders(e,t){let n=this.requireAddress(`fetchOpenOrders`),r=e?this.market(e):void 0,i=t===void 0?{}:{ordersLimit:t},a=[];if(!r||r.market.marketType===`BINARY`){let e=await this.client.getPortfolio(n,i);for(let t of e.openOrders)a.push(...this.mapPortfolioOrder(t,r))}if(!r||r.market.marketType===`SPOT`){let e=await this.client.getSpotPortfolio(n,i);for(let t of e.openOrders)a.push(...this.mapSpotPortfolioOrder(t,r))}if(!r||r.market.marketType===`PERP`){let e=await this.client.getPerpPortfolio(n,i);for(let t of e.openOrders)a.push(...this.mapSpotPortfolioOrder(t,r))}return a}async fetchOrders(e,t,n=100,r={}){let i=this.requireAddress(`fetchOrders`),a=e?this.market(e):void 0,o=await this.client.getOrders(i,{limit:n,offset:r.offset??0,...a?{pool:a.pool}:{}}),s=[];for(let e of o){let n=this.tryResolvePool(e.pool,e.side??void 0);if(!n||a?.outcome&&n.outcome!==a.outcome)continue;let r=this.decimalsOf(n),i=Number(e.placedAtTimestamp)*1e3;t!==void 0&&i<t||s.push({id:e.orderId,symbol:n.symbol,type:`limit`,side:n.market.marketType===`BINARY`?this.sideView(n,e.side??(e.isBid?`BUY_YES`:`SELL_YES`)):e.isBid?`buy`:`sell`,price:this.priceView(n,e.price,r.price),amount:Q(e.fullQuantity,r.amount),filled:Q(e.filledQuantity,r.amount),remaining:Q(e.quantityRemaining,r.amount),status:lm(e.status),txHash:e.placedTxHash,timestamp:i,datetime:cm(i),info:e})}return s}mapPortfolioOrder(e,t){if(t&&e.market.poolAddress.toLowerCase()!==t.pool.toLowerCase())return[];let n=this.tryResolvePool(e.market.poolAddress,e.side??void 0);if(!n||t?.outcome&&n.outcome!==t.outcome)return[];let r=this.decimalsOf(n),i=Number(e.placedAtTimestamp)*1e3;return[{id:e.orderId,symbol:n.symbol,type:`limit`,side:this.sideView(n,e.side??void 0)??`buy`,price:this.priceView(n,e.price,r.price),amount:Q(e.fullQuantity,r.amount),filled:Q(e.filledQuantity,r.amount),remaining:Q(e.quantityRemaining,r.amount),status:`open`,txHash:e.placedTxHash,timestamp:i,datetime:cm(i),info:e}]}mapSpotPortfolioOrder(e,t){if(t&&e.market.poolAddress.toLowerCase()!==t.pool.toLowerCase())return[];let n=this.tryResolvePool(e.market.poolAddress);if(!n)return[];let r=this.decimalsOf(n),i=Number(e.placedAtTimestamp)*1e3;return[{id:e.orderId,symbol:n.symbol,type:`limit`,side:e.isBid?`buy`:`sell`,price:Q(e.price,r.price),amount:Q(e.fullQuantity,r.amount),filled:Q(e.filledQuantity,r.amount),remaining:Q(e.quantityRemaining,r.amount),status:`open`,txHash:e.placedTxHash,timestamp:i,datetime:cm(i),info:e}]}async fetchPortfolioAnalytics(e,t={}){let n=this.requireAddress(`fetchOrders`),r=n.toLowerCase(),i=Date.now(),a=1e3,o=[];for(let e=0;;e+=a){let t=await this.client.getUserFills(n,{limit:a,offset:e});if(o.push(...t),t.length<a)break}let s=[],c=new Map;for(let e of o){let t=this.tryResolvePool(e.pool);if(!t||t.market.marketType!==`SPOT`||e.takerIsBid==null)continue;let n=e.takerIsBid,i=(e.taker??``).toLowerCase()===r,a=(e.maker??``).toLowerCase()===r;if(!i&&!a)continue;let o=this.decimalsOf(t);c.set(t.symbol,t),s.push({kind:`trade`,timestamp:Number(e.timestamp)*1e3,market:t.symbol,side:(i?n:!n)?`buy`:`sell`,baseAmount:Q(e.quantity,o.amount),quoteAmount:Q(e.quoteQuantity,o.price)})}let l=e===`24h`?3600:e===`7d`?14400:86400,u=s.length>0?Math.min(...s.map(e=>e.timestamp)):i,d=e===`all`?u:i-{"24h":864e5,"7d":6048e5,"30d":2592e6}[e],f=new Map,p=new Map;return await Promise.all([...c.values()].map(async e=>{let t=this.decimalsOf(e),n=await this.client.getCandles(e.pool,l,{from:Math.floor(d/1e3)-l,limit:1e3});f.set(e.symbol,n.map(n=>[Number(n.bucketStart)*1e3,this.priceView(e,n.closePrice,t.price)])),e.market.lastPrice!=null&&p.set(e.symbol,this.priceView(e,e.market.lastPrice,t.price))})),hm(s,{timeframe:e,asOf:i,marks:{series:f,lastPrice:p},...t.sessionSince===void 0?{}:{sessionSince:t.sessionSince},cexRateBps:t.cexRateBps??10})}async fetchMyTrades(e,t,n=50){let r=this.requireAddress(`fetchMyTrades`);await this.loadMarkets();let i=e?this.market(e):void 0,a=i?.pool,o=t===void 0?void 0:Math.floor(t/1e3),s=[],c=Math.max(n,ym);for(let e=0,t=0;s.length<n&&t<bm;t++){let t=await this.client.getUserFills(r,{...a?{pool:a}:{},...o===void 0?{}:{since:o},limit:c,offset:e});for(let e of t){if(s.length>=n)break;let t=this.fillToUnifiedTrade(e,i);t&&s.push(t)}if(t.length<c)break;e+=t.length}return s}fillToUnifiedTrade(e,t){let n=this.walletAddress?.toLowerCase(),r=(e.maker??``).toLowerCase()===n,i=r?e.makerSide:e.takerOrder?.side??e.takerSide,a=this.tryResolvePool(e.pool,i??void 0);if(!a||t&&a.pool.toLowerCase()!==t.pool.toLowerCase()||t?.outcome&&a.outcome!==t.outcome)return null;let o=this.decimalsOf(a),s=a.market.marketType===`BINARY`,c=s?this.priceView(a,e.fillPrice,o.price):Q(e.fillPrice,o.price),l=Q(e.quantity,o.amount),u=s?c*l:Q(e.quoteQuantity,o.price),d=Number(e.timestamp)*1e3;return{id:e.id,symbol:a.symbol,price:c,amount:l,cost:u,side:s?this.sideView(a,i??void 0):this.takerSideView(e,r),txHash:e.txHash,timestamp:d,datetime:cm(d),info:e}}takerSideView(e,t){if(e.takerIsBid!=null)return(t?!e.takerIsBid:e.takerIsBid)?`buy`:`sell`}async fetchStatus(){let e=this.client.getLiveStatus();return{status:e.watchCount>0&&!e.wsConnected?e.headBlock>0?`error`:`connecting`:`ok`,updated:Date.now(),info:e}}tryResolvePool(e,t){try{let n=this.registry.resolve(e);if(n.market.marketType!==`BINARY`||!t)return n;let r=t===`BUY_YES`||t===`SELL_YES`?`YES`:`NO`;return this.registry.resolve(`${n.marketSymbol}#${r}`)}catch{return null}}tryResolveByMarketAddress(e,t,n){try{let r=this.registry.resolve(e);if(n&&r.pool.toLowerCase()!==n.pool.toLowerCase())return null;let i=t?this.tryResolvePool(r.pool,t):r;return!i||n?.outcome&&i.outcome!==n.outcome?null:i}catch{return null}}async ensureWatch(e){await this.watches.getOrCreate(e.marketSymbol,()=>this.client.watchMarket(e.pool))}nextTick(e,t,n){this.ensureListener();let r=this.channels.get(e),i=r??{last:gm,waiters:[],getNative:t,map:n};r||this.channels.set(e,i);let a=t();return i.last===gm||!Object.is(a,i.last)?(i.last=a,Promise.resolve(n(a))):new Promise(e=>i.waiters.push({resolve:e}))}ensureListener(){let e=()=>{for(let e of this.channels.values()){if(e.waiters.length===0)continue;let t=e.getNative();if(Object.is(t,e.last))continue;e.last=t;let n=e.map(t);for(let t of e.waiters.splice(0))t.resolve(n)}};this.unsubscribe??=this.client.subscribeLive(e),this.unsubscribePrices??=this.client.subscribePrices(e)}async watchOrderBook(e,t=10){let n=this.market(e);return await this.ensureWatch(n),this.nextTick(`ob:${n.symbol}:${t}`,()=>n.market.marketType===`BINARY`?this.client.getLiveBinaryOrderBook(n.pool,{depth:t}):this.client.getLiveSpotOrderBook(n.pool,{depth:t}),e=>({symbol:n.symbol,...this.bookView(n,e),timestamp:Date.now(),info:e}))}async watchTrades(e,t=50){let n=this.market(e);await this.ensureWatch(n);let r=this.decimalsOf(n);return this.nextTick(`tr:${n.symbol}:${t}`,()=>this.client.getLiveFills(n.pool,{limit:t}),e=>e.map(e=>{let t=this.priceView(n,e.fillPrice,r.price),i=Q(e.quantity,r.amount),a=Number(e.timestamp)*1e3,o=n.market.marketType===`BINARY`?this.sideView(n,e.takerSide):e.takerIsBid===void 0?void 0:e.takerIsBid?`buy`:`sell`;return{id:e.id,symbol:n.symbol,price:t,amount:i,cost:t*i,side:o,txHash:e.txHash,timestamp:a,datetime:cm(a),info:e}}))}async watchOrders(e,t=100){let n=this.market(e),r=this.requireAddress(`watchOrders`);await this.ensureWatch(n);let i=this.decimalsOf(n);return this.nextTick(`ord:${n.symbol}:${r}`,()=>this.client.getLiveUserOrders(n.pool,r,{limit:t}),e=>e.filter(e=>n.market.marketType!==`BINARY`||!n.outcome||!e.side||(e.side===`BUY_YES`||e.side===`SELL_YES`?`YES`:`NO`)===n.outcome).map(e=>{let t=Number(e.createdAt)*1e3;return{id:e.orderId,symbol:n.symbol,type:`limit`,side:(n.market.marketType===`BINARY`?this.sideView(n,e.side):e.isBid?`buy`:`sell`)??`buy`,price:this.priceView(n,e.price,i.price),amount:Q(e.fullQuantity,i.amount),filled:Q(e.filledQuantity,i.amount),remaining:Q(e.quantityRemaining,i.amount),status:lm(e.status),timestamp:t,datetime:cm(t),info:e}}))}async watchMyTrades(e,t=50){let n=this.market(e),r=this.requireAddress(`watchMyTrades`);await this.ensureWatch(n);let i=this.decimalsOf(n),a=r.toLowerCase();return this.nextTick(`mytr:${n.symbol}:${r}`,()=>this.client.getLiveUserFills(n.pool,r,{limit:t}),e=>e.map(e=>{let t=this.priceView(n,e.fillPrice,i.price),r=Q(e.quantity,i.amount),o=Number(e.timestamp)*1e3,s=e.taker?.toLowerCase()===a?e.takerSide:e.maker?.toLowerCase()===a?e.makerSide:void 0;return{id:e.id,symbol:n.symbol,price:t,amount:r,cost:t*r,side:this.sideView(n,s),timestamp:o,datetime:cm(o),info:e}}))}async ensurePriceWatch(e){let t=e.toUpperCase();await this.priceWatches.getOrCreate(t,()=>this.client.watchPrice(t))}toUnifiedPrice(e,t){if(!t)return null;let n=t.blockTimestamp*1e3;return{symbol:e.toUpperCase(),price:t.price,ema:t.ema,timestamp:n,datetime:cm(n),info:t}}async watchPrice(e){let t=e.toUpperCase();return await this.ensurePriceWatch(t),this.nextTick(`px:${t}`,()=>this.client.getLivePrice(t),e=>this.toUnifiedPrice(t,e)??{symbol:t,price:0,ema:0,timestamp:Date.now(),datetime:cm(Date.now()),info:null})}async fetchPrice(e){let t=await this.client.fetchPrice(e);return this.toUnifiedPrice(e,t)}async fetchPriceOHLCV(e,t=`1m`,n,r=500){let i=_m[t]??t;if(!vm.has(i))throw new P(`unknown price timeframe ${t} (have: ${Object.keys(_m).join(` `)})`);return(await this.client.fetchPriceCandles(e,i,{limit:r,from:n?Math.floor(n/1e3):void 0})).map(e=>[e.bucketStart*1e3,e.open,e.high,e.low,e.close,e.count])}async createOrder(e,t,n,r,i,a={}){let o=this.market(e),s=this.decimalsOf(o),c=this.lotOf(o,`createOrder`),l=im(r,s.amount)/c*c;if(l<=0n)throw new P(`amount ${r} is below one lot on ${o.symbol} (lot ${Q(c,s.amount)}) — it would place a zero-quantity order`);let u=i;if(t===`market`&&(u=await this.crossingPrice(o,n,a.slippage??.01)),u===void 0)throw new P(`a limit order needs a price`);u=sm(u,this.tickOf(o,`createOrder`),s.price,{direction:n===`buy`?`down`:`up`,clamp:o.market.marketType===`BINARY`});let d=t===`market`?Pd.MARKET:a.postOnly||a.timeInForce===`PO`?Pd.POST_ONLY:a.timeInForce===`FOK`?Pd.FILL_OR_KILL:a.timeInForce===`IOC`?Pd.MARKET:Pd.LIMIT,f;if(o.market.marketType===`BINARY`){let e=o.outcomeIndex===1?n===`buy`?`BUY_NO`:`SELL_NO`:n===`buy`?`BUY_YES`:`SELL_YES`;f=await this.trader.placeOrder({pool:o.pool,side:e,price:this.toNativePrice(o,u),quantity:l,orderType:d,builder:a.builder,builderFeeBpsTimes1k:a.builderFeeBpsTimes1k})}else if(o.market.marketType===`PERP`)f=await this.trader.placePerpOrder({pool:o.pool,isBid:n===`buy`,price:im(u,s.price),quantity:l,orderType:d,builder:a.builder,builderFeeBpsTimes1k:a.builderFeeBpsTimes1k});else{let e=o.market;f=await this.trader.placeSpotOrder({pool:o.pool,isBid:n===`buy`,price:im(u,s.price),quantity:l,baseDecimals:e.baseDecimals,quoteToken:e.quoteToken,baseToken:e.baseToken,baseIsNative:e.baseIsNative,orderType:d,builder:a.builder,builderFeeBpsTimes1k:a.builderFeeBpsTimes1k})}let p=Q(f.fills.reduce((e,t)=>e+t.quantityFilled,0n),s.amount),m=Q(l,s.amount),h=Math.max(0,m-p),g=d===Pd.LIMIT||d===Pd.POST_ONLY,_=Date.now();return{id:f.orderId?.toString()??f.hash,symbol:o.symbol,type:t,side:n,price:u,amount:m,filled:p,remaining:h,status:h<=0?`closed`:g&&f.orderId!==void 0?`open`:`canceled`,txHash:f.hash,timestamp:_,datetime:cm(_),info:f}}async crossingPrice(e,t,n){let r=this.client.getWatchStatus(e.pool)===`live`?{symbol:e.symbol,...this.bookView(e,e.market.marketType===`BINARY`?this.client.getLiveBinaryOrderBook(e.pool,{depth:1}):this.client.getLiveSpotOrderBook(e.pool,{depth:1}))}:await this.fetchOrderBook(e.symbol,1),i=t===`buy`?r.asks[0]?.[0]:r.bids[0]?.[0];if(i===void 0)throw new P(`cannot price a market ${t} on ${e.symbol} — the opposite side of the book is empty`);return sm(t===`buy`?i*(1+n):i*(1-n),this.tickOf(e,`createOrder`),this.decimalsOf(e).price,{direction:t===`buy`?`up`:`down`,clamp:e.market.marketType===`BINARY`})}async cancelOrder(e,t){let n=this.market(t),r=await this.trader.cancelOrder({pool:n.pool,orderId:e});return{id:e,symbol:n.symbol,status:`canceled`,info:r}}requireStopVenue(e){let t=this.market(e);if(t.market.marketType!==`SPOT`)throw new P(`stop orders are not available on ${t.market.marketType} markets yet`);let n=t.market.stopRegistry;if(!n)throw new P(`${t.symbol} has no stop-order registry`);return{t,registry:n}}async createStopOrder(e,t,n,r,i,a,o={}){let{t:s,registry:c}=this.requireStopVenue(e),l=s.market,u=this.decimalsOf(s);if(t===`limit`&&a===void 0)throw new P(`a limit stop order needs a price`);let d=o.triggerDirection;if(!d){let e=await this.client.getMarketByPool(s.pool).catch(()=>null),t=e?.markPrice??e?.lastPrice,n=t==null?void 0:Q(t,u.price);if(n===void 0||n===i)throw new P(`cannot infer the trigger direction — pass params.triggerDirection`);d=i>n?`above`:`below`}let f=this.tickOf(s,`createStopOrder`),p=this.lotOf(s,`createStopOrder`),m=n===`buy`?`down`:`up`,h=a===void 0?void 0:im(sm(a,f,u.price,{direction:m}),u.price),g=im(r,u.amount)/p*p;if(g<=0n)throw new P(`amount ${r} is below one lot on ${s.symbol} (lot ${Q(p,u.amount)}) — it would place a zero-quantity stop order`);let _=sm(i,f,u.price,{direction:d===`above`?`up`:`down`}),v=await this.trader.placeSpotStopOrder({registry:c,pool:s.pool,isBid:n===`buy`,quantity:g,triggerPrice:im(_,u.price),triggerOperator:d===`above`?0:1,stopOrderType:+(t===`market`),...h===void 0?{}:{limitPrice:h},quoteToken:l.quoteToken,baseToken:l.baseToken,baseIsNative:l.baseIsNative});if(v.stopOrderId===void 0)throw new Xn(`createStopOrder`,`stop order tx ${v.hash} landed but PendingOrderCreated was not in the receipt (ABI/deployment drift?) — registry id unknown; recover via the registry directly`);let y=Date.now();return{id:v.stopOrderId.toString(),symbol:s.symbol,type:t,side:n,amount:Q(g,u.amount),triggerPrice:_,triggerDirection:d,...h===void 0?{}:{price:Q(h,u.price)},status:`pending`,timestamp:y,datetime:cm(y),txHash:v.hash,info:v}}async fetchOpenStopOrders(e){let t=this.requireAddress(`fetchOrders`),n=e?this.market(e):void 0,r=await this.client.getSpotStopOrders(t,{status:`PENDING`,...n?{pool:n.pool}:{}}),i=[];for(let e of r){let t=this.tryResolvePool(e.market.poolAddress);if(!t)continue;let n=this.decimalsOf(t),r=Number(e.createdAt)*1e3;i.push({id:e.orderId,symbol:t.symbol,type:e.orderType===1?`market`:`limit`,side:e.isBid?`buy`:`sell`,amount:Q(e.quantity,n.amount),triggerPrice:Q(e.triggerPrice,n.price),triggerDirection:e.triggerOperator===0?`above`:`below`,status:`pending`,...e.placedOrderId==null?{}:{triggeredOrderId:e.placedOrderId},timestamp:r,datetime:cm(r),info:e})}return i}async cancelStopOrder(e,t){let{t:n,registry:r}=this.requireStopVenue(t),i=await this.trader.cancelStopOrder({registry:r,orderId:e});return{id:e,symbol:n.symbol,status:`canceled`,info:i}}async fetchFundingRate(e){let t=this.requirePerpMarket(e),n=t.market,r=await this.client.getPerpState(t.pool),i=Date.now();return{symbol:t.symbol,markPrice:r.markPriceOk&&r.markPrice>0n?Q(r.markPrice,n.quoteDecimals):void 0,indexPrice:Q(r.indexPrice,n.quoteDecimals),fundingRate:Number(xs(r.fundingRate,r.fundingWindowSec))/0xde0b6b3a7640000,fundingTimestamp:Number(r.nextFundingAt)*1e3,timestamp:i,datetime:cm(i),info:r}}async fetchFundingRateHistory(e,t,n){let r=this.requirePerpMarket(e),i=r.market,a=await this.client.listFundingRateHistory(r.pool,{limit:n??100,...t==null?{}:{from:Math.floor(t/1e3),order:`asc`}});return(t==null?a.slice().reverse():a).map(e=>{let t=Number(e.timestamp)*1e3;return{symbol:r.symbol,markPrice:e.markPrice==null?void 0:Q(BigInt(e.markPrice),i.quoteDecimals),indexPrice:Q(BigInt(e.indexPrice),i.quoteDecimals),fundingRate:Number(xs(BigInt(e.fundingRate),e.fundingWindowSec))/0xde0b6b3a7640000,fundingTimestamp:t,timestamp:t,datetime:cm(t),info:e}})}async fetchPositions(e){let t=this.requireAddress(`fetchPositions`);await this.loadMarkets();let n=e?e.map(e=>this.requirePerpMarket(e)):Object.values(this.markets).filter(e=>e.type===`swap`).map(e=>this.market(e.symbol));return(await Promise.all(n.map(async e=>{let n=e.market,[r,i]=await Promise.all([this.client.getPerpPosition({marginBank:n.marginBank,account:t,pool:e.pool}),this.client.getPerpState(e.pool)]);if(r.size===0n)return null;let a=r.size>0n,o=Q(a?r.size:-r.size,n.baseDecimals),s=Q(r.avgEntryPrice,n.quoteDecimals),c=us(i),l=Q(c.price,n.quoteDecimals),u=Number(r.lastUpdatedTimestampNs/1000000n),d=await this.client.getLiquidationPrice({marginBank:n.marginBank,account:t,pool:e.pool}).catch(()=>null);return{symbol:e.symbol,side:a?`long`:`short`,contracts:o,entryPrice:s,markPrice:l,unrealizedPnl:(l-s)*(a?o:-o),liquidationPrice:d==null?void 0:Q(d,n.quoteDecimals),timestamp:u,datetime:cm(u),info:{position:r,state:i,markFromIndex:c.fromIndex}}}))).filter(e=>e!==null)}async depositMargin(e,t){let n=this.requirePerpMarket(e).market,r=await this.trader.depositMargin({marginBank:n.marginBank,amount:im(t,n.quoteDecimals)});return{hash:r.hash,info:r}}async withdrawMargin(e,t){let n=this.requirePerpMarket(e).market,r=await this.trader.withdrawMargin({marginBank:n.marginBank,amount:im(t,n.quoteDecimals)});return{hash:r.hash,info:r}}requirePerpMarket(e){let t=this.market(e);if(t.market.marketType!==`PERP`)throw new P(`${t.marketSymbol} is not a perp market`);return t}async mintSet(e,t){let n=this.requireOutcomeMarket(e),r=await this.trader.mintSet({pool:n.pool,amount:im(t,n.market.baseDecimals)});return{hash:r.hash,info:r}}async burnSet(e,t){let n=this.requireOutcomeMarket(e),r=await this.trader.burnSet({pool:n.pool,amount:im(t,n.market.baseDecimals)});return{hash:r.hash,info:r}}async redeem(e,t){let n=this.requireOutcomeMarket(e),r=n.market,i=await this.trader.redeem({marketId:r.marketId,market:r.marketAddress,outcomeIdx:r.winningOutcome==null?void 0:r.winningOutcome,amount:im(t,n.market.baseDecimals)});return{hash:i.hash,info:i}}requireOutcomeMarket(e){let t=this.market(e);if(t.market.marketType!==`BINARY`)throw new P(`${t.marketSymbol} is not an outcome market`);return t}async close(){for(let e of this.watches.values())await e.then(e=>e.stop()).catch(()=>void 0);this.watches.clear();for(let e of this.priceWatches.values())await e.then(e=>e.stop()).catch(()=>void 0);this.priceWatches.clear(),this.unsubscribe?.(),this.unsubscribe=null,this.unsubscribePrices?.(),this.unsubscribePrices=null,this.channels.clear(),this.client.stopLive()}},Sm={binaryModule:`0x3ecC694Cef705358864a646142ac17A90E29e388`,binaryPoolImpl:`0x82A1FcdaA2daC2fC7D5f9909D43E68021eE966FD`,binarySettlement:`0xbF4a49e0Dfd092e5FBE8E5761064C49533e6Ed23`,clobFactory:`0xb2BE8EE02F96379DB75f01802384593EBa9bfF04`,collateral:`0x70a86D8842FB63C4Ad2b7cdddF530eBf1BB25d8E`,collateralRouter:`0xbC0C9834B15ACE38bB50dDaa7d7f7C7CC4DC183C`,marketCreator:`0x138CfA6b80475b8c03d7E468b2442278E51e645a`,marketCreatorFactory:`0xE6bEE93cE87c9E6e62aCb621caa7832EE47b4F6B`,marketsCore:`0x2802504314685D89bF6C992CA5a8e7cC78bc0294`,oracleHub:`0xe40db387cC98601Dd11bd634fF2f3AD5686dE32b`,testUsdc:`0x70a86D8842FB63C4Ad2b7cdddF530eBf1BB25d8E`,lend:lp},Cm=BigInt(2**53-1);function wm(e){if(typeof e==`bigint`)return e;if(typeof e==`number`&&!Number.isSafeInteger(e))throw Error(`Unsafe numeric token value`);return BigInt(e)}function Tm(e,t,n=9){if(!Number.isInteger(t)||t<0||t>255)throw Error(`Invalid token decimals`);let r=wm(e),i=r<0n,a=i?-r:r,o=10n**BigInt(t),s=a/o;if(s>Cm)return i?-1/0:1/0;let c=Math.max(0,Math.min(n,t)),l=10n**BigInt(c),u=c===0?0n:a%o*l/o,d=Number(s)+Number(u)/Number(l);return i?-d:d}function Em(e,t,n=4){let r=wm(e),i=r<0n,a=i?-r:r,o=10n**BigInt(t),s=(a/o).toString().replace(/\B(?=(\d{3})+(?!\d))/g,`,`),c=(a%o).toString().padStart(t,`0`).slice(0,Math.max(0,n)).replace(/0+$/,``);return`${i?`-`:``}${s}${c?`.${c}`:``}`}var Dm=`https://dev.smk.somnia.host/v1/graphql`,Om=`https://api.infra.testnet.somnia.network`,km=[Om,`https://dream-rpc.somnia.network`],Am=`wss://dream-rpc.somnia.network/ws`,jm=50312,Mm=`https://shannon-explorer.somnia.network`,Nm=`https://testnet.somnia.network/`,Pm=new xm({indexerUrl:Dm,chain:Dn,wsRpcUrl:Am,addresses:Sm});function Fm(e,t){return[...e].sort((e,n)=>Number(t(n))-Number(t(e)))}function Im(e,t){let n=new Map;for(let e of t){let t=e.market.toLowerCase(),r=Number(e.placedAtTimestamp);Number.isFinite(r)&&r>(n.get(t)??-1/0)&&n.set(t,r)}return e.map((e,t)=>({position:e,index:t,latest:n.get(e.market.id.toLowerCase())??-1/0})).sort((e,t)=>t.latest-e.latest||e.index-t.index).map(({position:e})=>e)}function Lm(e,t){return e.voided?{label:`VOID / REFUNDABLE`,tone:`void`}:e.winningOutcome==null?{label:`PENDING`,tone:`pending`}:t===e.winningOutcome?{label:`WON`,tone:`win`}:{label:`LOST`,tone:`loss`}}async function Rm(){return(await Pm.client.listLiveBinaryMarkets({limit:100,orderBy:`closingSoon`})).map(e=>({...e,live:e.status===`Trading`}))}function zm(e){let t=`${e.asset} ${e.question||``}`.toLowerCase();return/\b(btc|bitcoin|eth|ethereum|sol|solana|crypto|token|usdc|xrp|doge)\b/.test(t)?`CRYPTO`:/\b(nba|wnba|nfl|football|soccer|basketball|baseball|tennis|ufc|f1|formula 1|champions league|premier league)\b/.test(t)?`SPORTS`:/\b(election|president|senate|congress|parliament|minister|governor|vote|politic)\b/.test(t)?`POLITICS`:/\b(oscar|grammy|film|movie|music|album|celebrity|box office|television|tv)\b/.test(t)?`CULTURE`:`OTHER`}async function Bm(e){return Vm(e,await Pm.client.getBinaryOrderBook(e.poolAddress,{depth:8,decimals:e.quoteDecimals}))}function Vm(e,t){return{symbol:`${e.marketId}#YES`,bids:t.yesBids.map(t=>[Tm(t.price,e.quoteDecimals),Tm(t.quantity,e.baseDecimals)]),asks:t.yesAsks.map(t=>[Tm(t.price,e.quoteDecimals),Tm(t.quantity,e.baseDecimals)]),timestamp:Date.now(),info:t}}async function Hm(e,t){let n=!1,r=await Pm.client.watchMarket(e.poolAddress);if(n)return r.stop(),()=>void 0;let i=()=>{n||t(Vm(e,Pm.client.getLiveBinaryOrderBook(e.poolAddress,{depth:8})))},a=Pm.client.subscribeLive(i);return i(),()=>{n||(n=!0,a(),r.stop())}}async function Um(e,t=24){return Pm.client.getCandles(e.poolAddress,3600,{limit:t})}function Wm(e,t){return e.reduce((e,n)=>e+Tm(n.quoteVolume,t),0)}async function Gm(e,t){let n=t,[r,i]=await Promise.all([Pm.client.getMarketOnchain(e.marketId),Pm.client.getPortfolio(t,{ordersLimit:0,tradesLimit:0})]),[a,o,s,c,l]=await Promise.all([Pm.client.getErc20Balance(r.collateral,n),Pm.client.getErc20Allowance(r.collateral,n,r.pool),Pm.client.getOutcomeBalance({outcomeToken:r.outcomeToken,account:n,id:r.yesId}),Pm.client.getOutcomeBalance({outcomeToken:r.outcomeToken,account:n,id:r.noId}),Pm.client.getErc20Metadata(r.collateral)]),u=Tm(s+c,r.decimals),d=i.positions.filter(t=>t.market.id.toLowerCase()===e.marketId.toLowerCase()).reduce((e,t)=>e+Tm(t.balance,t.market.quoteDecimals),0),f=i.positions.reduce((e,t)=>e+Tm(t.balance,t.market.quoteDecimals),0),p=Tm(a,l.decimals),m=Tm(o,l.decimals);return{marketShares:u,totalPortfolioShares:Math.max(0,f-d+u),sellBalance:Tm(s,r.decimals),collateralBalance:p,collateralAllowance:m,collateralSymbol:l.symbol,readAt:Date.now()}}function Km(e){return e.question||`${e.asset} event contract`}function qm(e){return new Date(Number(e)*1e3).toLocaleString([],{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})}function Jm(e){return Math.max(0,Math.round((Number(e)*1e3-Date.now())/6e4))}function Ym(e){let t=e.bids[0]?.[0],n=e.asks[0]?.[0];return t==null&&n==null?.5:t==null?n:n==null?t:(t+n)/2}function Xm(e){return`${(e*100).toFixed(2)}%`}function Zm(e,t,n,r,i,a,o={}){let s=[],c=0,l=0,u=0,d=0,f=0,p=0,m=i===`buy`?t?.asks||[]:t?.bids||[],h=t?.bids?.[0]?.[0]??null,g=t?.asks?.[0]?.[0]??null,_=i===`buy`?g:h,v=h!=null&&g!=null?(g-h)/((g+h)/2)*1e4:null,y=Math.max(0,n||0),b=0,x=0;for(let[e,t]of m)if((i===`buy`?e<=r:e>=r)&&(x+=t,y>0)){let n=Math.min(y,t);b+=n*e,y-=n}let S=n>0&&y<=1e-9?b/n:null,C=S==null?null:S*n,w=S!=null&&_!=null?Math.abs(S-_)/_*1e4:null;!e.live||e.status!==`Trading`?(c+=100,l+=100,s.push({label:`Market status`,status:`block`,detail:`Market is ${e.status}, not Trading`})):s.push({label:`Market status`,status:`pass`,detail:`Trading on Somnia Shannon`});let T=t?.timestamp==null?1/0:Date.now()-t.timestamp;if(!t||!Number.isFinite(T)||T>2e4?(c+=100,u+=100,s.push({label:`Book freshness`,status:`block`,detail:`Order book is older than 20 seconds or has no timestamp`})):s.push({label:`Book freshness`,status:`pass`,detail:`Snapshot age ${Math.max(0,Math.round(T/1e3))}s`}),n>25||n<=0?(c+=55,d+=55,s.push({label:`Position size`,status:`block`,detail:n>25?`Hard limit is 25 shares`:`Enter a positive share amount`})):s.push({label:`Position size`,status:`pass`,detail:`${n.toFixed(3)} shares within 25-share limit`}),_==null||m.length===0?(c+=100,u+=100,s.push({label:`Book liquidity`,status:`block`,detail:`No executable liquidity on the selected side`})):S==null?(c+=40,u+=40,s.push({label:`Book liquidity`,status:`block`,detail:`Only ${x.toFixed(3)} shares available at this limit`})):s.push({label:`Book liquidity`,status:`pass`,detail:`${x.toFixed(3)} visible shares, estimated fill ${Xm(S)}`}),v==null?(c+=20,u+=20,s.push({label:`Spread`,status:`warn`,detail:`Spread unavailable until both sides quote`})):v>500?(c+=25,u+=25,s.push({label:`Spread`,status:`warn`,detail:`${v.toFixed(0)} bps wide`})):s.push({label:`Spread`,status:`pass`,detail:`${v.toFixed(0)} bps`}),w!=null&&w>150?(c+=25,u+=25,s.push({label:`Price impact`,status:`block`,detail:`${w.toFixed(0)} bps expected impact`})):w!=null&&s.push({label:`Price impact`,status:`pass`,detail:`${w.toFixed(0)} bps from top of book`}),i===`buy`&&o.maxCost!=null&&(!Number.isFinite(o.maxCost)||o.maxCost<=0?(c+=100,l+=100,s.push({label:`Maximum downside`,status:`block`,detail:`Enter a positive tUSDC loss budget`})):C!=null&&C>o.maxCost+1e-9?(c+=100,l+=100,s.push({label:`Maximum downside`,status:`block`,detail:`${C.toFixed(3)} tUSDC cost exceeds the ${o.maxCost.toFixed(3)} tUSDC budget`})):C!=null&&s.push({label:`Maximum downside`,status:`pass`,detail:`${C.toFixed(3)} tUSDC worst-case entry cost within budget`})),Jm(e.expiry)<3?(c+=30,l+=30,s.push({label:`Time to expiry`,status:`block`,detail:`Less than 3 minutes remaining`})):s.push({label:`Time to expiry`,status:`pass`,detail:`${Jm(e.expiry)} minutes remaining`}),r<=.08||r>=.92?(c+=20,l+=20,s.push({label:`Tail pricing`,status:`warn`,detail:`Extreme probabilities require review`})):s.push({label:`Tail pricing`,status:`pass`,detail:`Probability is inside the review band`}),a===null)c+=100,p+=100,s.push({label:`Wallet feasibility`,status:`block`,detail:`Wallet balances could not be verified`});else if(a){let e=i===`buy`?a.marketShares+n:Math.max(0,a.marketShares-n),t=i===`buy`?a.totalPortfolioShares+n:Math.max(0,a.totalPortfolioShares-n);i===`buy`&&e>25?(c+=55,d+=55,s.push({label:`Market exposure`,status:`block`,detail:`Projected ${e.toFixed(3)} shares exceeds the 25-share market limit`})):s.push({label:`Market exposure`,status:`pass`,detail:`Projected ${e.toFixed(3)} shares in this market`}),i===`buy`&&t>100?(c+=55,d+=55,s.push({label:`Portfolio exposure`,status:`block`,detail:`Projected ${t.toFixed(3)} shares exceeds the 100-share portfolio limit`})):s.push({label:`Portfolio exposure`,status:`pass`,detail:`Projected ${t.toFixed(3)} shares across markets`}),i===`sell`&&a.sellBalance+1e-9<n?(c+=100,f+=100,s.push({label:`UP balance`,status:`block`,detail:`Only ${a.sellBalance.toFixed(3)} UP shares available`})):i===`sell`&&s.push({label:`UP balance`,status:`pass`,detail:`${a.sellBalance.toFixed(3)} UP shares available`}),i===`buy`&&C!=null&&a.collateralBalance+1e-9<C?(c+=100,f+=100,s.push({label:`Collateral`,status:`block`,detail:`${a.collateralBalance.toFixed(3)} ${a.collateralSymbol} available; ${C.toFixed(3)} required`})):i===`buy`&&C!=null&&s.push({label:`Collateral`,status:`pass`,detail:`${a.collateralBalance.toFixed(3)} ${a.collateralSymbol} available`}),i===`buy`&&C!=null&&a.collateralAllowance+1e-9<C?s.push({label:`Token approval`,status:`warn`,detail:`DreamDEX will request a maximum collateral approval before this order`}):i===`sell`?s.push({label:`Operator approval`,status:`warn`,detail:`DreamDEX may request a one-time pool operator approval for outcome tokens`}):s.push({label:`Token approval`,status:`pass`,detail:`Existing collateral allowance covers this order`})}return{allowed:c<70&&s.every(e=>e.status!==`block`),score:Math.min(100,c),checks:s,dimensions:$m(s,[l,u,d,f,p]),bestPrice:_,estimatedFill:S,estimatedCost:C,slippageBps:w,spreadBps:v,visibleDepth:x}}var Qm={"Market status":`market`,"Time to expiry":`market`,"Tail pricing":`market`,"Book freshness":`liquidity`,"Book liquidity":`liquidity`,Spread:`liquidity`,"Price impact":`liquidity`,"Position size":`exposure`,"Market exposure":`exposure`,"Portfolio exposure":`exposure`,"UP balance":`collateral`,Collateral:`collateral`,"Token approval":`collateral`,"Operator approval":`collateral`,"Wallet feasibility":`control`,"Maximum downside":`market`};function $m(e,t){let[n,r,i,a,o]=t,s={market:[],liquidity:[],exposure:[],collateral:[],control:[]};for(let t of e)s[Qm[t.label]??`control`].push(t);let c=(e,t,n)=>({name:n,score:Math.min(100,e),status:t}),l=e=>e.some(e=>e.status===`block`)?`block`:e.some(e=>e.status===`warn`)?`warn`:`pass`;return{market:c(n,l(s.market),`Market`),liquidity:c(r,l(s.liquidity),`Liquidity`),exposure:c(i,l(s.exposure),`Exposure`),collateral:c(a,l(s.collateral),`Collateral`),control:c(o,l(s.control),`Control`)}}function eh(e,t){let n=t===`buy`?e?.asks||[]:e?.bids||[],r=t===`buy`?[...n].reverse():[...n],i=0,a=[];for(let[e,t]of r)i+=t,a.push({price:e,quantity:t,cumulative:i});return{side:t,levels:a}}function th(e,t,n,r,i,a={}){let o=Math.min(25,a.shareCap??25),s=a.maxCost;if(!t||!Number.isFinite(n)||n<=0||!Number.isFinite(o)||o<=0)return 0;let c=a=>Zm(e,t,a,n,r,i,{maxCost:s}).allowed;if(!c(.001))return 0;let l=1,u=Math.floor(o*1e3),d=1;for(;l<=u;){let e=Math.floor((l+u)/2);c(e/1e3)?(d=e,l=e+1):u=e-1}return d/1e3}function nh(e,t,n,r,i,a,o){if(n<=0||!t)return null;let s=Zm(e,t,n+.001,r,i,a,o).checks.filter(e=>e.status===`block`),c=e=>({market:`Market`,liquidity:`Liquidity`,exposure:`Exposure`,collateral:`Collateral`,control:`Control`})[Qm[e]??`control`];if(!s.length){let n=Zm(e,t,25.001,r,i,a,o).checks.filter(e=>e.status===`block`);if(!n.length)return{dimension:`Exposure`,reason:`At the 25-share hard cap`};let s=n[0];return{dimension:c(s.label),reason:`At the 25-share hard cap (${s.label} blocks)`}}let l=s[0];return l.label===`Book liquidity`?{dimension:`Liquidity`,reason:`Only ${(i===`buy`?t?.asks||[]:t?.bids||[]).filter(([e])=>i===`buy`?e<=r:e>=r).reduce((e,[,t])=>e+t,0).toFixed(3)} shares visible at the ${r.toFixed(3)} limit; ${l.detail}`}:l.label===`Position size`?{dimension:`Exposure`,reason:`Share amount ${n.toFixed(3)} exceeds the 25-share hard cap`}:l.label===`Market exposure`||l.label===`Portfolio exposure`?{dimension:`Exposure`,reason:l.detail}:l.label===`Collateral`||l.label===`UP balance`?{dimension:`Collateral`,reason:l.detail}:l.label===`Maximum downside`?{dimension:`Market`,reason:l.detail}:{dimension:c(l.label),reason:l.detail}}var rh=[u(),he({appName:`Sluice`,preference:`all`})],ih=_({chains:[Dn,re],connectors:rh,transports:{[Dn.id]:y(Om),[re.id]:y()}}),ah=`dreamdex-theme`;function oh(){try{let e=window.localStorage.getItem(ah);if(e===`light`||e===`dark`)return e}catch{}return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function sh(){return document.documentElement.dataset.theme===`dark`?`dark`:`light`}function ch(e){document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e}function lh(e){try{window.localStorage.setItem(ah,e)}catch{}ch(e)}var $=oe();function uh(){let[e,t]=(0,A.useState)(()=>sh()),n=e===`dark`?`light`:`dark`;function r(){lh(n),t(n)}return(0,$.jsx)(`button`,{className:`theme-toggle`,type:`button`,onClick:r,"aria-label":`Switch to ${n} mode`,title:`Switch to ${n} mode`,children:(0,$.jsx)(`span`,{"aria-hidden":`true`,children:`🌙`})})}function dh(e){return e?e.slice(0,6)+`…`+e.slice(-4):` -`}function fh(){let{address:e,isConnected:t}=m(),{connectAsync:n,connectors:r}=fe(),{disconnect:i}=ae(),{switchChainAsync:a}=ie(),o=ue(),[s,c]=(0,A.useState)(!1),l={chainId:`0x${jm.toString(16)}`,chainName:`Somnia Shannon Testnet`,nativeCurrency:{name:`STT`,symbol:`STT`,decimals:18},rpcUrls:[...km],blockExplorerUrls:[Mm]};async function u(){let e=window.ethereum;if(e)try{await e.request({method:`wallet_switchEthereumChain`,params:[{chainId:l.chainId}]})}catch(t){if(t?.code!==4902)throw t;await e.request({method:`wallet_addEthereumChain`,params:[l]})}}let d=(0,A.useCallback)(async e=>{try{await n({connector:e}),await u()}catch(e){console.error(`Wallet connection/network switch failed`,e)}finally{c(!1)}},[n,r]);async function f(){try{a?await a({chainId:jm}):await u()}catch(e){if(e?.code===4902)try{await u();return}catch(e){console.error(`Somnia network add failed`,e)}console.error(`Wallet network switch failed`,e)}}async function p(e){try{await a({chainId:e})}catch(e){console.error(`Wallet network switch failed`,e)}}let h=t&&o!==50312;return(0,A.useEffect)(()=>{if(!s)return;let e=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[s]),t?(0,$.jsxs)(`div`,{className:`wallet`,children:[(0,$.jsx)(`span`,{className:`addr`,children:dh(e)}),(0,$.jsxs)(`select`,{className:`network-select`,"aria-label":`Wallet network`,value:o===1||o===50312?o:``,onChange:e=>p(Number(e.target.value)),children:[o!==1&&o!==50312&&(0,$.jsx)(`option`,{value:``,children:`Unsupported network`}),(0,$.jsx)(`option`,{value:jm,children:`Somnia Shannon`}),(0,$.jsx)(`option`,{value:1,children:`Ethereum`})]}),h&&(0,$.jsx)(`button`,{className:`ghost network-warning`,onClick:f,children:`Switch to Shannon`}),(0,$.jsx)(`button`,{className:`ghost`,onClick:()=>i(),children:`Disconnect`})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{className:`primary`,onClick:()=>c(!0),children:`Connect Wallet`}),s&&(0,$.jsx)(`div`,{className:`wallet-picker-overlay`,onClick:()=>c(!1),role:`presentation`,children:(0,$.jsxs)(`div`,{className:`wallet-picker`,role:`dialog`,"aria-modal":`true`,"aria-label":`Connect a wallet`,onClick:e=>e.stopPropagation(),children:[(0,$.jsxs)(`div`,{className:`wallet-picker-head`,children:[(0,$.jsx)(`strong`,{children:`Connect a wallet`}),(0,$.jsx)(`button`,{className:`wallet-picker-close`,"aria-label":`Close`,onClick:()=>c(!1),children:`×`})]}),(0,$.jsx)(`p`,{className:`wallet-picker-sub`,children:`Choose how you want to connect.`}),(0,$.jsx)(`div`,{className:`wallet-picker-list`,children:r.map(e=>{let t=e.id===`injected`?`Browser Wallet`:e.name;return(0,$.jsxs)(`button`,{className:`wallet-picker-option`,onClick:()=>d(e),children:[e.icon?(0,$.jsx)(`img`,{src:e.icon,alt:``,className:`wallet-picker-icon`}):(0,$.jsx)(`span`,{className:`wallet-picker-icon wallet-picker-icon--fallback`}),(0,$.jsx)(`span`,{className:`wallet-picker-name`,children:t})]},e.uid)})}),r.length===0&&(0,$.jsx)(`p`,{className:`wallet-picker-sub`,children:`No wallet found. Install a browser wallet extension, or configure a WalletConnect projectId to connect from mobile.`})]})})]})}function ph(){let[e,t]=(0,A.useState)(!1),n=()=>t(!1);return(0,A.useEffect)(()=>{if(!e)return;let t=document.body.style.overflow,r=e=>{e.key===`Escape`&&n()};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,r),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,r)}},[e]),(0,$.jsxs)(`header`,{className:`hero ${e?`menu-open`:``}`,children:[(0,$.jsxs)(bn,{to:`/`,className:`brand`,children:[(0,$.jsxs)(`span`,{className:`logo-mark`,"aria-hidden":`true`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsx)(`span`,{className:`logo`,children:`SLUICE MARKETS`})]}),(0,$.jsxs)(`nav`,{className:`nav`,"aria-label":`Primary navigation`,children:[(0,$.jsx)(xn,{onClick:n,to:`/`,end:!0,className:({isActive:e})=>e?`navlink on`:`navlink`,children:`Home`}),(0,$.jsx)(xn,{onClick:n,to:`/markets`,className:({isActive:e})=>e?`navlink on`:`navlink`,children:`Markets`}),(0,$.jsx)(xn,{onClick:n,to:`/portfolio`,className:({isActive:e})=>e?`navlink on`:`navlink`,children:`Portfolio`}),(0,$.jsx)(xn,{onClick:n,to:`/how`,className:({isActive:e})=>e?`navlink on`:`navlink`,children:`Architecture`})]}),(0,$.jsxs)(`div`,{className:`nav-actions`,children:[(0,$.jsx)(uh,{}),(0,$.jsx)(fh,{})]}),(0,$.jsxs)(`button`,{className:`menu-toggle`,type:`button`,"aria-label":e?`Close menu`:`Open menu`,"aria-expanded":e,"aria-controls":`mobile-nav`,onClick:()=>t(e=>!e),children:[(0,$.jsx)(`span`,{"aria-hidden":`true`}),(0,$.jsx)(`span`,{"aria-hidden":`true`}),(0,$.jsx)(`span`,{"aria-hidden":`true`})]}),e&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{className:`menu-scrim`,type:`button`,onClick:n,"aria-label":`Close menu`}),(0,$.jsxs)(`aside`,{id:`mobile-nav`,className:`mobile-nav`,"aria-label":`Mobile navigation`,children:[(0,$.jsxs)(`div`,{className:`mobile-nav-head`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsxs)(`span`,{className:`logo-mark`,"aria-hidden":`true`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),`SLUICE MARKETS`]}),(0,$.jsx)(`button`,{type:`button`,className:`mobile-close`,onClick:n,"aria-label":`Close menu`,children:`×`})]}),(0,$.jsxs)(`nav`,{className:`mobile-nav-links`,"aria-label":`Mobile primary navigation`,children:[(0,$.jsxs)(xn,{onClick:n,to:`/`,end:!0,children:[`Home `,(0,$.jsx)(`span`,{children:`01`})]}),(0,$.jsxs)(xn,{onClick:n,to:`/markets`,children:[`Markets `,(0,$.jsx)(`span`,{children:`02`})]}),(0,$.jsxs)(xn,{onClick:n,to:`/portfolio`,children:[`Portfolio `,(0,$.jsx)(`span`,{children:`03`})]}),(0,$.jsxs)(xn,{onClick:n,to:`/how`,children:[`How it works `,(0,$.jsx)(`span`,{children:`04`})]})]}),(0,$.jsxs)(`div`,{className:`mobile-nav-tools`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Wallet & network`}),(0,$.jsx)(fh,{})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Appearance`}),(0,$.jsx)(uh,{})]})]})]})]})]})}function mh(){return(0,$.jsxs)(`div`,{className:`splash`,children:[(0,$.jsx)(`div`,{className:`bg`,"aria-hidden":`true`}),(0,$.jsxs)(`section`,{className:`hero-splash`,children:[(0,$.jsxs)(`div`,{className:`hero-copy`,children:[(0,$.jsxs)(`div`,{className:`eyebrow`,children:[(0,$.jsx)(`span`,{children:`Prediction market execution`}),(0,$.jsx)(`span`,{children:`DreamDEX · Somnia`})]}),(0,$.jsxs)(`h1`,{children:[`Trade the signal.`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`em`,{children:`Control the risk.`})]}),(0,$.jsx)(`p`,{className:`lede`,children:`Set the most tUSDC you can lose. Sluice converts that downside budget into the largest DreamDEX order your wallet and the live market can support.`}),(0,$.jsxs)(`div`,{className:`category-chips`,"aria-label":`Product capabilities`,children:[(0,$.jsx)(`span`,{children:`Downside-capped sizing`}),(0,$.jsx)(`span`,{children:`Live order books`}),(0,$.jsx)(`span`,{children:`On-chain settlement`})]}),(0,$.jsxs)(`div`,{className:`cta-row`,children:[(0,$.jsxs)(bn,{to:`/markets`,className:`primary big`,children:[`Open live markets `,(0,$.jsx)(`span`,{children:`↗`})]}),(0,$.jsx)(bn,{to:`/portfolio`,className:`ghost big`,children:`View portfolio`}),(0,$.jsxs)(`a`,{href:`https://youtu.be/5AdKiUbXddY?si=OZHcCCkT89VLRpC6`,target:`_blank`,rel:`noreferrer`,className:`ghost big`,children:[`Watch demo `,(0,$.jsx)(`span`,{children:`↗`})]})]})]}),(0,$.jsxs)(`div`,{className:`hero-diagram`,"aria-label":`Sluice Markets execution sequence`,children:[(0,$.jsxs)(`div`,{className:`diagram-head`,children:[(0,$.jsx)(`span`,{children:`EVENT ORDER / SHANNON`}),(0,$.jsx)(`b`,{children:`POLICY-CONTROLLED`})]}),(0,$.jsxs)(`div`,{className:`diagram-route`,children:[(0,$.jsxs)(`div`,{className:`diagram-node`,children:[(0,$.jsx)(`span`,{children:`01`}),(0,$.jsx)(`b`,{children:`DISCOVER`}),(0,$.jsx)(`small`,{children:`Live DreamDEX book`})]}),(0,$.jsx)(`div`,{className:`diagram-line`,children:(0,$.jsx)(`i`,{})}),(0,$.jsxs)(`div`,{className:`diagram-node active`,children:[(0,$.jsx)(`span`,{children:`02`}),(0,$.jsx)(`b`,{children:`CHECK`}),(0,$.jsx)(`small`,{children:`Depth + execution risk`})]}),(0,$.jsx)(`div`,{className:`diagram-line`,children:(0,$.jsx)(`i`,{})}),(0,$.jsxs)(`div`,{className:`diagram-node`,children:[(0,$.jsx)(`span`,{children:`03`}),(0,$.jsx)(`b`,{children:`EXECUTE`}),(0,$.jsx)(`small`,{children:`IOC order on Somnia`})]})]}),(0,$.jsxs)(`div`,{className:`diagram-result`,children:[(0,$.jsx)(`span`,{children:`DATA INFORMS`}),(0,$.jsx)(`b`,{children:`POLICY DECIDES`})]})]})]}),(0,$.jsxs)(`section`,{className:`proof-strip`,children:[(0,$.jsx)(`span`,{children:`LIVE EVENT CONTRACTS`}),(0,$.jsx)(`span`,{children:`DETERMINISTIC HARD BLOCKS`}),(0,$.jsx)(`span`,{children:`WALLET-SIGNED IOC ORDERS`}),(0,$.jsx)(`span`,{children:`ON-CHAIN SETTLEMENT`})]}),(0,$.jsxs)(`section`,{className:`pillars`,children:[(0,$.jsx)(hh,{k:`01`,t:`See the real market`,d:`Discover active binary markets, probability, expiry, spread, depth, and liquidity directly through the DreamDEX SDK.`}),(0,$.jsx)(hh,{k:`02`,t:`Cap the downside`,d:`State a maximum tUSDC loss and get the largest order that also passes wallet, liquidity, impact, and exposure limits.`}),(0,$.jsx)(hh,{k:`03`,t:`Keep execution honest`,d:`Market data informs the decision but cannot override hard limits. Approved orders execute on DreamDEX and settle through Event Contracts.`})]}),(0,$.jsxs)(`section`,{className:`band`,children:[(0,$.jsx)(`div`,{className:`band-index`,children:`WHY / 01`}),(0,$.jsxs)(`h2`,{children:[`One interface.`,(0,$.jsx)(`br`,{}),`Trading plus analytics.`]}),(0,$.jsx)(`p`,{children:`Users can discover opportunities, measure execution quality, bound the downside, and verify the resulting position on-chain without leaving the product.`}),(0,$.jsxs)(bn,{to:`/markets`,className:`text-link`,children:[`Inspect live Event Contracts `,(0,$.jsx)(`span`,{children:`→`})]})]}),(0,$.jsx)(`section`,{className:`trust-band`,children:(0,$.jsxs)(`div`,{className:`trust-inner`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`SLUICE / SOMNIA SHANNON`}),(0,$.jsxs)(`h2`,{children:[`Markets people can`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`em`,{children:`verify before they trade.`})]}),(0,$.jsx)(`p`,{children:`Every quote, policy decision, wallet signature, and fill has a place in the trail. Explore the live book and see what the protocol will accept before you commit.`}),(0,$.jsxs)(`div`,{className:`cta-row`,children:[(0,$.jsxs)(bn,{to:`/markets`,className:`primary big`,children:[`Launch live terminal `,(0,$.jsx)(`span`,{children:`→`})]}),(0,$.jsxs)(`a`,{href:`https://youtu.be/5AdKiUbXddY?si=OZHcCCkT89VLRpC6`,target:`_blank`,rel:`noreferrer`,className:`ghost big trust-ghost`,children:[`Watch demo `,(0,$.jsx)(`span`,{children:`→`})]})]})]})}),(0,$.jsxs)(`footer`,{className:`site-footer`,children:[(0,$.jsxs)(`div`,{className:`site-footer-top`,children:[(0,$.jsxs)(`div`,{className:`site-footer-brand`,children:[(0,$.jsxs)(`div`,{className:`footer-brandline`,children:[(0,$.jsxs)(`span`,{className:`logo-mark`,"aria-hidden":`true`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsx)(`span`,{children:`SLUICE MARKETS`})]}),(0,$.jsx)(`p`,{children:`Policy-controlled trading for DreamDEX Event Contracts on Somnia Shannon.`})]}),(0,$.jsxs)(`div`,{className:`site-footer-links`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Product`}),(0,$.jsx)(bn,{to:`/markets`,children:`Live markets`}),(0,$.jsx)(bn,{to:`/portfolio`,children:`Portfolio`}),(0,$.jsx)(bn,{to:`/how`,children:`How it works`}),(0,$.jsx)(`a`,{href:`https://github.com/Tajudeeen/sluice/blob/main/docs/BUILD.md`,target:`_blank`,rel:`noreferrer`,children:`Build docs`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`small`,{children:`Network`}),(0,$.jsx)(`a`,{href:`https://shannon-explorer.somnia.network`,target:`_blank`,rel:`noreferrer`,children:`Shannon explorer`}),(0,$.jsx)(`span`,{children:`Chain 50312`}),(0,$.jsx)(`span`,{children:`DreamDEX SDK`})]})]})]}),(0,$.jsxs)(`div`,{className:`site-footer-bottom`,children:[(0,$.jsx)(`span`,{children:`© 2026 Sluice Markets`}),(0,$.jsx)(`span`,{children:`Market data is context. Somnia is the authority.`})]})]})]})}function hh({k:e,t,d:n}){return(0,$.jsxs)(`div`,{className:`pillar`,children:[(0,$.jsx)(`div`,{className:`pillar-k`,children:e}),(0,$.jsx)(`div`,{className:`pillar-t`,children:t}),(0,$.jsx)(`div`,{className:`pillar-d`,children:n})]})}function gh(){return(0,$.jsxs)(`div`,{className:`app how`,children:[(0,$.jsx)(`div`,{className:`bg`,"aria-hidden":`true`}),(0,$.jsxs)(`section`,{className:`pitch`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`DREAMDEX / SYSTEM ARCHITECTURE`}),(0,$.jsxs)(`h1`,{children:[`Markets move.`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`em`,{children:`Policy controls.`})]}),(0,$.jsx)(`p`,{children:`Sluice Markets turns a trader's maximum downside into a policy-valid DreamDEX order without replacing DreamDEX as the trading or settlement authority.`}),(0,$.jsxs)(`div`,{className:`console-status`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{}),` Somnia Shannon`]}),(0,$.jsx)(`span`,{children:`Event Contracts SDK`}),(0,$.jsx)(`span`,{children:`Wallet-authorized execution`})]})]}),(0,$.jsxs)(`main`,{className:`grid how-grid`,children:[(0,$.jsxs)(`section`,{className:`card`,children:[(0,$.jsx)(`div`,{className:`card-label`,children:`ORDER FLOW`}),(0,$.jsxs)(`ol`,{className:`flow`,children:[(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`Discover.`}),` Load active binary Event Contracts and their lifecycle metadata from the DreamDEX indexer.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`Inspect.`}),` Read the current UP/Down order book, probability, spread, depth, liquidity, and expiry.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`Budget.`}),` The trader sets the maximum tUSDC they are willing to lose if the selected outcome resolves against them.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`Size.`}),` Safe Size finds the largest three-decimal order within that budget, live depth, impact, exposure, and collateral limits.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`Control.`}),` The same limits run again against fresh market and wallet state immediately before the signature.`]}),(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`b`,{children:`Execute.`}),` Approved orders are signed by the connected wallet and submitted as DreamDEX IOC orders on Somnia.`]})]})]}),(0,$.jsxs)(`section`,{className:`card`,children:[(0,$.jsx)(`div`,{className:`card-label`,children:`CONTROL MODEL`}),(0,$.jsx)(`p`,{className:`muted`,children:`Live book data provides context. It cannot override a deterministic block or create a transaction without the wallet.`}),(0,$.jsxs)(`div`,{className:`bands`,children:[(0,$.jsxs)(`div`,{className:`band-row`,children:[(0,$.jsx)(`span`,{className:`badge s1`,children:`PASS`}),` Order can reach the wallet signer`]}),(0,$.jsxs)(`div`,{className:`band-row`,children:[(0,$.jsx)(`span`,{className:`badge s0`,children:`REVIEW`}),` User sees elevated risk before signing`]}),(0,$.jsxs)(`div`,{className:`band-row`,children:[(0,$.jsx)(`span`,{className:`badge s2`,children:`BLOCK`}),` Execution control remains disabled`]})]}),(0,$.jsx)(`p`,{className:`muted small`,children:`The final transaction, position accounting, market resolution, and redemption state are all sourced from DreamDEX Event Contracts.`})]}),(0,$.jsxs)(`section`,{className:`card wide`,children:[(0,$.jsx)(`div`,{className:`card-label`,children:`WHY SOMNIA + DREAMDEX`}),(0,$.jsxs)(`div`,{className:`invariants`,children:[(0,$.jsx)(_h,{t:`Bounded downside`,d:`A tUSDC loss budget is compiled into an executable order size.`}),(0,$.jsx)(_h,{t:`Live constraints`,d:`Depth, impact, collateral, and exposure determine the current maximum.`}),(0,$.jsx)(_h,{t:`Fresh preflight`,d:`Safe Size is recalculated by the authoritative checks before signing.`}),(0,$.jsx)(_h,{t:`On-chain authority`,d:`DreamDEX owns order matching, positions, resolution, and redemption.`})]}),(0,$.jsx)(bn,{to:`/markets`,className:`primary`,children:`Open Event Contracts`})]})]}),(0,$.jsx)(`footer`,{className:`foot`,children:`Powered by DreamDEX Event Contracts on Somnia Shannon.`})]})}function _h({t:e,d:t}){return(0,$.jsxs)(`div`,{className:`inv`,children:[(0,$.jsx)(`div`,{className:`inv-t`,children:e}),(0,$.jsx)(`div`,{className:`inv-d`,children:t})]})}function vh({dimensions:e}){let t=[{key:`market`,label:`Market`,dim:e.market},{key:`liquidity`,label:`Liquidity`,dim:e.liquidity},{key:`exposure`,label:`Exposure`,dim:e.exposure},{key:`collateral`,label:`Collateral`,dim:e.collateral},{key:`control`,label:`Control`,dim:e.control}];return(0,$.jsx)(`div`,{className:`risk-breakdown-inner`,children:t.map(({key:e,label:t,dim:n})=>(0,$.jsxs)(`div`,{className:`dim-row dim-${n.status}`,children:[(0,$.jsx)(`span`,{className:`dim-label`,children:t}),(0,$.jsx)(`div`,{className:`dim-bar`,"aria-label":`${t} risk: ${n.score}/100`,children:(0,$.jsx)(`div`,{className:`dim-fill`,style:{width:`${n.score}%`,backgroundColor:yh(n.status)}})}),(0,$.jsx)(`span`,{className:`dim-score`,children:n.score})]},e))})}function yh(e){switch(e){case`pass`:return`hsl(140 60% 45%)`;case`warn`:return`hsl(40 90% 50%)`;case`block`:return`hsl(0 80% 55%)`}}function bh({ladder:e,requestedPrice:t,onPriceChange:n}){let r=Math.max(e.levels.length?e.levels[e.levels.length-1].cumulative:1,1),i=e.levels.length>0?e.levels:[{price:t,quantity:0,cumulative:0}];return(0,$.jsxs)(`div`,{className:`depth-ladder`,children:[(0,$.jsxs)(`div`,{className:`ladder-header`,children:[(0,$.jsx)(`span`,{children:e.side===`buy`?`Bids (buy)`:`Asks (sell)`}),(0,$.jsx)(`span`,{children:`cumulative`})]}),i.slice(0,8).map((i,a)=>{let o=e.side===`buy`?i.price<=t:i.price>=t;return(0,$.jsxs)(`div`,{className:`ladder-level ${o?`at-limit`:``}`,onClick:()=>n(i.price),role:`button`,tabIndex:0,onKeyDown:e=>e.key===`Enter`&&n(i.price),"aria-label":`Price ${(i.price*100).toFixed(1)}%, depth ${i.quantity.toFixed(3)}, cumulative ${i.cumulative.toFixed(3)}`,children:[(0,$.jsxs)(`span`,{className:`ladder-price`,children:[(i.price*100).toFixed(1),`%`]}),(0,$.jsx)(`span`,{className:`ladder-qty`,children:i.quantity.toFixed(3)}),(0,$.jsx)(`div`,{className:`ladder-bar`,children:(0,$.jsx)(`div`,{className:`ladder-fill ${e.side===`buy`?`bids`:`asks`}`,style:{width:`${i.cumulative/r*100}%`}})}),(0,$.jsx)(`span`,{className:`ladder-cum`,children:i.cumulative.toFixed(3)})]},`level-${a}-${i.price}`)})]})}var xh={market:{name:`Market`,score:0,status:`pass`},liquidity:{name:`Liquidity`,score:0,status:`pass`},exposure:{name:`Exposure`,score:0,status:`pass`},collateral:{name:`Collateral`,score:0,status:`pass`},control:{name:`Control`,score:0,status:`pass`}},Sh=e=>Intl.NumberFormat(`en`,{notation:`compact`,maximumFractionDigits:1}).format(e);function Ch({candles:e,decimals:t}){let n=e.map(e=>Tm(e.closePrice,t)).filter(Number.isFinite);if(n.length<2)return(0,$.jsx)(`div`,{className:`chart-empty`,children:`Price history appears after the first indexed fills.`});let r=Math.min(...n),i=Math.max(...n),a=Math.max(i-r,.02),o=n.map((e,t)=>`${t===0?`M`:`L`}${(t/(n.length-1)*100).toFixed(1)},${(44-(e-r)/a*40).toFixed(1)}`).join(` `);return(0,$.jsxs)(`div`,{className:`probability-chart`,children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 100 48`,preserveAspectRatio:`none`,role:`img`,"aria-label":`24 hour probability history`,children:[(0,$.jsx)(`path`,{className:`chart-area`,d:`${o} L100,48 L0,48 Z`}),(0,$.jsx)(`path`,{className:`chart-line`,d:o})]}),(0,$.jsx)(`span`,{children:`24H HISTORY`}),(0,$.jsxs)(`b`,{children:[(n.at(-1)*100).toFixed(1),`%`]})]})}function wh(){let[e,t]=(0,A.useState)([]),[n,r]=(0,A.useState)(null),[i,a]=(0,A.useState)(null),[o,s]=(0,A.useState)([]),[c,l]=(0,A.useState)(void 0),[u,d]=(0,A.useState)(`idle`),[f,p]=(0,A.useState)(5),[h,g]=(0,A.useState)(10),[_,v]=(0,A.useState)(.5),[y,b]=(0,A.useState)(`buy`),[x,S]=(0,A.useState)(`Loading live Event Contracts...`),[C,w]=(0,A.useState)(`connecting`),[T,ee]=(0,A.useState)(``),[te,ne]=(0,A.useState)([]),[E,re]=(0,A.useState)(`ALL`),{address:D}=m(),ae=ue(),{switchChainAsync:oe}=ie(),{data:se}=_e();function ce(e,t,n){let r=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,second:`2-digit`});ne(i=>[{at:r,state:e,label:t,detail:n},...i].slice(0,8))}(0,A.useEffect)(()=>{let e=!0,n=()=>Rm().then(n=>{e&&(t(n),r(e=>n.find(t=>t.marketId===e?.marketId)||n[0]||null),S(`${n.length} live markets from Shannon`))}).catch(t=>e&&S(`Indexer unavailable: ${t.message}`));n();let i=window.setInterval(n,15e3);return()=>{e=!1,window.clearInterval(i)}},[]),(0,A.useEffect)(()=>{if(!n)return;let e=!0,t=!1,r=null,i=null,o=n=>{e&&(a(n),t||=(v((y===`buy`?n.asks[0]?.[0]:n.bids[0]?.[0])??Ym(n)),!0))},c=()=>Bm(n).then(t=>{e&&(o(t),ce(`info`,`Book refreshed`,`${t.bids.length} bid and ${t.asks.length} ask levels loaded from DreamDEX`))}).catch(t=>{e&&(a({symbol:n.marketId,bids:[],asks:[],timestamp:Date.now(),info:{}}),ce(`block`,`Market snapshot`,t?.message||`Order book unavailable`))}),l=()=>Um(n).then(t=>e&&s(t)).catch(()=>e&&ce(`info`,`History unavailable`,`Live book remains authoritative; candles are not indexed for this pool yet`));a(null),s([]),w(`connecting`),l(),Hm(n,e=>{o(e),w(`live`),S(`Live Somnia book connected; Safe Size updates with liquidity`)}).then(t=>{if(!e){t();return}r=t,ce(`pass`,`Live book connected`,`Safe Size now recalculates from Somnia stream updates`)}).catch(()=>{e&&(w(`fallback`),S(`Live stream unavailable; using a 10-second market snapshot fallback`),ce(`info`,`Live stream unavailable`,`Using a 10-second DreamDEX snapshot fallback`),c(),i=window.setInterval(c,1e4))});let u=window.setInterval(l,6e4);return()=>{e=!1,r?.(),i!=null&&window.clearInterval(i),window.clearInterval(u)}},[n?.marketId]),(0,A.useEffect)(()=>{if(!n||!D){l(void 0),d(`idle`);return}let e=!0;return d(`loading`),l(null),Gm(n,D).then(t=>{e&&(l(t),d(`ready`))}).catch(t=>{e&&(l(null),d(`error`),ce(`block`,`Wallet checks unavailable`,t?.message||`Could not read collateral or outcome balances`))}),()=>{e=!1}},[n?.marketId,D]),(0,A.useEffect)(()=>{if(!i)return;let e=y===`buy`?i.asks[0]?.[0]:i.bids[0]?.[0];e!=null&&v(e)},[y]);let O=(0,A.useMemo)(()=>n?Zm(n,i,f,_,y,D?c:void 0,{maxCost:y===`buy`?h:void 0}):null,[n,i,f,_,y,D,c,h]),k=(0,A.useMemo)(()=>n&&c?th(n,i,_,y,c,{maxCost:y===`buy`?h:void 0}):0,[n,i,_,y,c,h]),le=(0,A.useMemo)(()=>!n||!c||k<=0?null:nh(n,i,k,_,y,c,{maxCost:y===`buy`?h:void 0}),[n,i,k,_,y,c,h]),de=O?.checks.filter(e=>e.status===`block`)||[],fe=de[0],pe=(0,A.useMemo)(()=>eh(i,y),[i,y]),me=de.length===1&&fe?.label===`Collateral`,he=D?ae===50312?se?u===`loading`?`Checking collateral and position balances on Shannon.`:u===`error`||c===null?`Wallet balances could not be verified. Check the wallet's Shannon RPC and refresh.`:de.length?de.map(e=>e.detail).join(` `):O?.allowed?null:`This order does not pass the execution policy.`:`The connected wallet signer is unavailable.`:null:`Connect a wallet to continue.`,ge=D?ae===50312?u===`loading`?`Verifying wallet state`:me?`Add tUSDC collateral`:he?de.length>1?`Blocked: ${de.length} checks`:`Blocked: ${fe?.label||`wallet check`}`:`Sign & execute IOC`:`Switch to Shannon`:`Connect wallet to execute`,ve=i?Ym(i):.5,ye=n?Wm(o,n.quoteDecimals):0,be=[`ALL`,`CRYPTO`,`SPORTS`,`POLITICS`,`CULTURE`,`OTHER`],xe=t=>t===`ALL`?e.length:e.filter(e=>zm(e)===t).length,Se=E===`ALL`?e:e.filter(e=>zm(e)===E);function Ce(t){let i=t===`ALL`?e:e.filter(e=>zm(e)===t);re(t),i.length&&!i.some(e=>e.marketId===n?.marketId)&&r(i[0])}async function we(){if(ae!==50312){try{await oe?.({chainId:jm})}catch(e){S(e?.shortMessage||`Switch to Shannon in your wallet to continue.`)}return}if(!n||!O||!se)return;S(`Refreshing market and wallet state before signature...`);let e,t;try{e=await Bm(n),t=D?await Gm(n,D):void 0}catch(e){S(`Preflight failed. Refresh the market and try again.`),ce(`block`,`Preflight failed`,e?.message||`Could not refresh live execution state`);return}a(e),t&&l(t);let r=Zm(n,e,f,_,y,D?t:void 0,{maxCost:y===`buy`?h:void 0});if(!r.allowed){S(`Fresh market or wallet state failed policy checks.`),ce(`block`,`Policy blocked`,r.checks.find(e=>e.status===`block`)?.detail||`Risk limit exceeded`);return}ce(`pass`,`Policy approved`,`Fresh score ${r.score}/100; estimated fill ${((r.estimatedFill||0)*100).toFixed(2)}%`),ce(`info`,`Wallet signature`,`IOC order requested on Somnia Shannon`),S(`Awaiting DreamDEX wallet signature...`);try{Pm.setSigner({walletClient:se}),await Pm.loadMarkets(!0);let e=Object.values(Pm.markets).find(e=>e.id.toLowerCase()===n.marketId.toLowerCase())?.outcomes?.[0]?.symbol;if(!e)throw Error(`Market symbol is still indexing. Refresh and try again.`);let t=await Pm.createOrder(e,`limit`,y,f,_,{timeInForce:`IOC`,slippage:.03}),r=t.txHash||``;ee(r),S(`Order ${t.status}: ${t.filled} shares filled`),ce(`pass`,`Order receipt confirmed`,`${t.status}; ${t.filled} shares filled${r?`; ${r.slice(0,10)}...`:``}`),r&&ce(`info`,`View on-chain`,`Transaction ${r.slice(0,10)}... on Somnia explorer; portfolio auto-syncs`),window.localStorage.setItem(`sluice:last-order`,String(Date.now())),window.dispatchEvent(new Event(`sluice:order-confirmed`)),a(await Bm(n)),ce(`info`,`Position sync`,`Book refreshed; portfolio indexer will reflect the confirmed fill`)}catch(e){S(e?.shortMessage||e?.message||`Order rejected`),ce(`block`,`Execution rejected`,e?.shortMessage||e?.message||`Wallet or protocol rejected the order`)}}return(0,$.jsxs)(`div`,{className:`app dreamdex-app`,children:[(0,$.jsx)(`div`,{className:`bg`,"aria-hidden":`true`}),(0,$.jsxs)(`section`,{className:`pitch dream-pitch`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`SLUICE MARKETS / DREAMDEX EVENT CONTRACTS`}),(0,$.jsxs)(`h1`,{children:[`Trade the event.`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`em`,{children:`Know the limits.`})]}),(0,$.jsx)(`p`,{children:`Inspect the live order book, choose a limit, and review every execution check before the order reaches DreamDEX on Somnia.`}),(0,$.jsxs)(`div`,{className:`console-status`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{}),` `,x]}),(0,$.jsxs)(`span`,{className:`book-state ${C}`,children:[(0,$.jsx)(`i`,{}),` `,C===`live`?`LIVE BOOK`:C===`fallback`?`SNAPSHOT FALLBACK`:`CONNECTING`]}),(0,$.jsxs)(`span`,{children:[`Shannon / `,jm]}),(0,$.jsx)(`span`,{children:(0,$.jsx)(`a`,{href:Mm,target:`_blank`,rel:`noreferrer`,children:`Explorer ↗`})})]})]}),(0,$.jsxs)(`main`,{className:`grid dream-grid`,children:[(0,$.jsxs)(`section`,{className:`card market-board`,children:[(0,$.jsx)(`div`,{className:`card-label`,children:`LIVE EVENT CONTRACTS`}),(0,$.jsx)(`div`,{className:`market-filters`,"aria-label":`Market categories`,children:be.map(e=>(0,$.jsxs)(`button`,{className:E===e?`active`:``,disabled:xe(e)===0,onClick:()=>Ce(e),children:[e,(0,$.jsx)(`span`,{children:xe(e)})]},e))}),(0,$.jsxs)(`div`,{className:`market-list`,children:[Se.map(e=>(0,$.jsxs)(`button`,{className:`market-row ${n?.marketId===e.marketId?`selected`:``}`,onClick:()=>r(e),children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:e.asset}),(0,$.jsx)(`small`,{children:Km(e)})]}),(0,$.jsxs)(`strong`,{children:[Jm(e.expiry),`m`]}),(0,$.jsx)(`i`,{children:e.status})]},e.marketId)),!Se.length&&(0,$.jsx)(`p`,{className:`muted`,children:`No live markets in this category yet.`})]}),(0,$.jsx)(`p`,{className:`market-source`,children:`The current Shannon index is crypto-only. Sports, politics, and culture filters activate automatically when DreamDEX publishes those contracts.`})]}),(0,$.jsx)(`section`,{className:`card market-detail`,children:n?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`card-label`,children:[`LIVE MARKET INTELLIGENCE / `,n.asset]}),(0,$.jsx)(`h2`,{children:Km(n)}),(0,$.jsxs)(`p`,{className:`muted`,children:[`Expires `,qm(n.expiry),` · `,n.interval||`rolling`,` cadence · DreamDEX indexed`]}),(0,$.jsxs)(`div`,{className:`probability`,children:[(0,$.jsx)(`span`,{children:`UP probability`}),(0,$.jsxs)(`b`,{children:[Math.round(ve*100),`%`]}),(0,$.jsx)(`small`,{children:`midpoint from the live DreamDEX order book`})]}),(0,$.jsxs)(`div`,{className:`market-metrics`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Spread`}),(0,$.jsx)(`b`,{children:O?.spreadBps==null?`—`:`${O.spreadBps.toFixed(0)} bps`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`24H volume`}),(0,$.jsx)(`b`,{children:Sh(ye)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Trades`}),(0,$.jsx)(`b`,{children:Sh(Number(n.tradeCount||0))})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Visible depth`}),(0,$.jsx)(`b`,{children:O?O.visibleDepth.toFixed(2):`—`})]})]}),(0,$.jsx)(Ch,{candles:o,decimals:n.quoteDecimals}),(0,$.jsxs)(`div`,{className:`book`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{children:`BIDS / BUYERS`}),(i?.bids||[]).slice(0,5).map(([e,t])=>(0,$.jsxs)(`p`,{children:[(0,$.jsxs)(`span`,{children:[(e*100).toFixed(1),`%`]}),(0,$.jsx)(`b`,{children:t.toFixed(2)})]},`${e}-${t}`))]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`label`,{children:`ASKS / SELLERS`}),(i?.asks||[]).slice(0,5).map(([e,t])=>(0,$.jsxs)(`p`,{children:[(0,$.jsxs)(`span`,{children:[(e*100).toFixed(1),`%`]}),(0,$.jsx)(`b`,{children:t.toFixed(2)})]},`${e}-${t}`))]})]})]}):(0,$.jsx)(`p`,{className:`muted`,children:`Select a market.`})}),(0,$.jsxs)(`section`,{className:`card trade-ticket`,children:[(0,$.jsx)(`div`,{className:`card-label`,children:`EXECUTION POLICY / IOC ORDER`}),(0,$.jsxs)(`div`,{className:`segmented`,children:[(0,$.jsx)(`button`,{className:y===`buy`?`active`:``,onClick:()=>b(`buy`),children:`Buy UP`}),(0,$.jsx)(`button`,{className:y===`sell`?`active`:``,onClick:()=>b(`sell`),children:`Sell UP`})]}),(0,$.jsx)(bh,{ladder:pe,requestedPrice:_,onPriceChange:e=>{v(e)}}),(0,$.jsx)(`div`,{className:`risk-breakdown-inner`,children:(0,$.jsx)(vh,{dimensions:O?.dimensions??xh})}),(0,$.jsxs)(`label`,{children:[`Shares`,(0,$.jsx)(`input`,{type:`number`,min:`0.001`,max:`25`,step:`0.001`,value:f,onChange:e=>p(Number(e.target.value))})]}),(0,$.jsxs)(`label`,{children:[`Limit probability`,(0,$.jsx)(`input`,{type:`number`,min:`0.001`,max:`0.999`,step:`0.001`,value:_,onChange:e=>v(Number(e.target.value))})]}),y===`buy`&&(0,$.jsxs)(`label`,{children:[`Maximum downside (tUSDC)`,(0,$.jsx)(`input`,{type:`number`,min:`0.001`,step:`0.001`,value:h,onChange:e=>g(Math.max(0,Number(e.target.value)))})]}),k>0&&(0,$.jsxs)(`div`,{className:`safe-size`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:y===`buy`?`DOWNSIDE-CAPPED SAFE SIZE`:`SAFE EXIT SIZE`}),(0,$.jsxs)(`b`,{children:[k.toFixed(3),` shares`]}),(0,$.jsxs)(`small`,{children:[le?`→ bounded by ${le.dimension}: ${le.reason} `:``,`Rechecked against the live book before signing.`]})]}),(0,$.jsx)(`button`,{className:`ghost`,type:`button`,onClick:()=>p(k),children:`Use safe size`})]}),O&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`execution-estimate`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Expected fill`}),(0,$.jsx)(`b`,{children:O.estimatedFill==null?`NOT FILLABLE`:`${(O.estimatedFill*100).toFixed(2)}%`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Estimated cost`}),(0,$.jsx)(`b`,{children:O.estimatedCost==null?`—`:O.estimatedCost.toFixed(3)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:`Price impact`}),(0,$.jsx)(`b`,{children:O.slippageBps==null?`—`:`${O.slippageBps.toFixed(0)} bps`})]})]}),(0,$.jsxs)(`div`,{className:`decision ${O.allowed?`allow`:`block`}`,children:[(0,$.jsx)(`strong`,{children:O.allowed?`APPROVED`:`BLOCKED`}),(0,$.jsxs)(`span`,{children:[`Risk score `,O.score,`/100`]}),O.checks.map(e=>(0,$.jsxs)(`small`,{className:`check-${e.status}`,children:[(0,$.jsx)(`i`,{children:e.status===`pass`?`✓`:e.status===`warn`?`!`:`×`}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:e.label}),e.detail]})]},e.label))]})]}),(0,$.jsxs)(`p`,{className:`muted small approval-note`,children:[y===`buy`?`DreamDEX may request a maximum ERC-20 collateral allowance before this order.`:`DreamDEX may request a one-time ERC-6909 outcome-token operator approval before this order.`,` Review the spender and permissions in your wallet.`]}),(0,$.jsxs)(`p`,{className:`testnet-assets`,children:[`Need Shannon gas? `,(0,$.jsx)(`a`,{href:Nm,target:`_blank`,rel:`noreferrer`,children:`Open the official Somnia faucet ↗`}),(0,$.jsx)(`small`,{children:`Buy orders also require DreamDEX tUSDC in this wallet.`})]}),he&&ae===50312&&(0,$.jsx)(`p`,{className:`trade-block-reason`,role:`status`,children:he}),(0,$.jsx)(`button`,{className:`primary big`,disabled:!D||ae===50312&&!!he,onClick:we,children:ge}),T&&(0,$.jsxs)(`span`,{className:`trade-proof-links`,children:[(0,$.jsx)(`a`,{className:`text-link`,href:`https://shannon-explorer.somnia.network/tx/${T}`,target:`_blank`,rel:`noreferrer`,children:`View confirmed transaction ↗`}),(0,$.jsx)(bn,{className:`text-link`,to:`/portfolio`,children:`Open portfolio ↗`})]})]}),(0,$.jsxs)(`section`,{className:`card execution-trail`,children:[(0,$.jsx)(`div`,{className:`card-label`,children:`VERIFIABLE EXECUTION TRAIL`}),(0,$.jsx)(`h2`,{children:`From market snapshot to on-chain result`}),te.length?(0,$.jsx)(`div`,{className:`trail-list`,children:te.map((e,t)=>(0,$.jsxs)(`div`,{className:`trail-item ${e.state}`,children:[(0,$.jsx)(`i`,{}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:e.label}),(0,$.jsx)(`small`,{children:e.detail})]}),(0,$.jsx)(`time`,{children:e.at}),e.state===`pass`&&T&&e.label===`View on-chain`&&(0,$.jsx)(`a`,{className:`trail-link`,href:`https://shannon-explorer.somnia.network/tx/${T}`,target:`_blank`,rel:`noreferrer`,children:`Explorer ↗`})]},`${e.at}-${t}`))}):(0,$.jsx)(`p`,{className:`muted`,children:`Select a market to begin the live audit trail. Policy decisions and wallet outcomes appear here.`})]})]}),(0,$.jsxs)(`footer`,{className:`foot`,children:[(0,$.jsx)(bn,{className:`primary`,to:`/portfolio`,children:`Open portfolio`}),` · Market context is advisory; deterministic policy and Somnia transactions are authoritative.`]})]})}var Th=(e,t=6)=>e==null?`0`:Em(e,t,4),Eh=(e,t=6)=>e==null?`—`:`${(Tm(e,t)*100).toFixed(2)}%`,Dh=e=>`${Mm.replace(/\/$/,``)}/tx/${e}`;function Oh(e){return e.voided?`VOID / REDEEMABLE`:e.winningOutcome==null?e.status===`Trading`?`TRADING`:String(e.status||`SETTLING`).toUpperCase():`FINALIZED`}var kh=`0x1e717a091ba9650d7b31220d83d9999960de6266058435718b6279caf819a8b9`,Ah=`0x3ec7c594f86ddffa7e302851e00b4da47f75d887bc37c2172ee2025afd39dcfa`;function jh(){return(0,$.jsxs)(`div`,{className:`verified-example`,children:[(0,$.jsxs)(`div`,{className:`example-head`,children:[(0,$.jsx)(`span`,{children:`Verified example`}),(0,$.jsx)(`small`,{children:`No wallet required — real on-chain proof replay`})]}),(0,$.jsxs)(`div`,{className:`example-trail`,children:[(0,$.jsxs)(`div`,{className:`trail-item pass`,children:[(0,$.jsx)(`i`,{}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:`Order signed`}),(0,$.jsx)(`small`,{children:`Downside-capped IOC on Somnia Shannon`})]}),(0,$.jsx)(`time`,{children:`demo`})]}),(0,$.jsxs)(`div`,{className:`trail-item pass`,children:[(0,$.jsx)(`i`,{}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:`Policy approved`}),(0,$.jsx)(`small`,{children:`All execution checks passed`})]}),(0,$.jsx)(`time`,{children:`demo`})]}),(0,$.jsxs)(`div`,{className:`trail-item pass`,children:[(0,$.jsx)(`i`,{}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`b`,{children:`Transaction confirmed`}),(0,$.jsx)(`small`,{children:`On-chain settlement`})]}),(0,$.jsx)(`time`,{children:`demo`}),(0,$.jsx)(`a`,{href:`${Mm}/tx/${kh}`,target:`_blank`,rel:`noreferrer`,className:`trail-link`,children:`Explorer ↗`}),(0,$.jsx)(`a`,{href:`${Mm}/tx/${Ah}`,target:`_blank`,rel:`noreferrer`,className:`trail-link`,children:`Block tx ↗`})]})]}),(0,$.jsx)(`p`,{className:`example-note`,children:`Connects a Shannon wallet to see live positions, order history, and fills.`})]})}function Mh(){let{address:e}=m(),[t,n]=(0,A.useState)(null),[r,i]=(0,A.useState)([]),[a,o]=(0,A.useState)(`Connect a Shannon wallet to load your on-chain activity.`),[s,c]=(0,A.useState)(`idle`),[l,u]=(0,A.useState)(`positions`),d=(0,A.useRef)([]),f=(0,A.useCallback)(()=>{if(!e){n(null),i([]),c(`idle`),o(`Connect a Shannon wallet to load your on-chain activity.`);return}c(`loading`),o(`Syncing positions, order history, and fills from DreamDEX...`),Promise.all([Pm.client.getPortfolio(e,{ordersLimit:0,tradesLimit:50}),Pm.client.getOrders(e,{limit:50})]).then(([t,r])=>{n(t),i(Fm(r,e=>e.placedAtTimestamp)),c(`connected`),o(`Portfolio synced for ${e.slice(0,6)}...${e.slice(-4)}.`)}).catch(e=>{c(`error`),o(e.message||`DreamDEX indexer unavailable.`)})},[e]);(0,A.useEffect)(()=>{f()},[f]),(0,A.useEffect)(()=>{let e=e=>{e.key===`sluice:last-order`&&f()},t=()=>{f(),d.current.forEach(e=>window.clearTimeout(e)),d.current=[window.setTimeout(f,2e3),window.setTimeout(f,5e3)]};return window.addEventListener(`storage`,e),window.addEventListener(`sluice:order-confirmed`,t),()=>{window.removeEventListener(`storage`,e),window.removeEventListener(`sluice:order-confirmed`,t),d.current.forEach(e=>window.clearTimeout(e)),d.current=[]}},[f]);let p=t?Fm(t.trades,e=>e.timestamp):[],h=t?Im(t.positions,r):[],g=l===`positions`?t?.positions.length||0:l===`orders`?r.length:p.length;return(0,$.jsxs)(`div`,{className:`app dreamdex-app`,children:[(0,$.jsx)(`div`,{className:`bg`,"aria-hidden":`true`}),(0,$.jsxs)(`section`,{className:`pitch`,children:[(0,$.jsx)(`div`,{className:`section-kicker`,children:`DREAMDEX PORTFOLIO / SOMNIA SETTLEMENT`}),(0,$.jsxs)(`h1`,{children:[`Every position has`,(0,$.jsx)(`br`,{}),(0,$.jsx)(`em`,{children:`a chain-sourced state.`})]}),(0,$.jsx)(`p`,{children:a}),(0,$.jsxs)(`div`,{className:`console-status`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`i`,{}),` `,s===`connected`?`Indexer connected`:s===`loading`?`Syncing indexer`:s===`error`?`Indexer error`:`Wallet required`]}),(0,$.jsxs)(`span`,{children:[t?.positions.length||0,` positions`]}),(0,$.jsxs)(`span`,{children:[t?.trades.length||0,` indexed fills`]})]})]}),(0,$.jsx)(`main`,{className:`grid`,children:(0,$.jsxs)(`section`,{className:`card wide portfolio-card`,children:[(0,$.jsxs)(`div`,{className:`portfolio-head`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`card-label`,children:`ACCOUNT ACTIVITY`}),(0,$.jsx)(`h2`,{children:`Positions, order history, and execution history`})]}),(0,$.jsx)(`button`,{className:`ghost`,onClick:f,disabled:!e,children:`Refresh indexer`})]}),!e&&(0,$.jsx)(jh,{}),(0,$.jsxs)(`div`,{className:`portfolio-tabs`,children:[(0,$.jsxs)(`button`,{className:l===`positions`?`active`:``,onClick:()=>u(`positions`),children:[`Positions `,(0,$.jsx)(`i`,{children:t?.positions.length||0})]}),(0,$.jsxs)(`button`,{className:l===`orders`?`active`:``,onClick:()=>u(`orders`),children:[`Order history `,(0,$.jsx)(`i`,{children:r.length})]}),(0,$.jsxs)(`button`,{className:l===`fills`?`active`:``,onClick:()=>u(`fills`),children:[`Recent fills `,(0,$.jsx)(`i`,{children:p.length})]})]}),l===`positions`&&h.map(e=>{let t=Lm(e.market,e.outcomeIndex),n=r.find(t=>t.market.toLowerCase()===e.market.id.toLowerCase());return(0,$.jsxs)(`div`,{className:`activity-row position-activity`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsxs)(`b`,{children:[e.market.asset,` · `,e.outcomeIndex===0?`UP`:`DOWN`]}),(0,$.jsx)(`small`,{children:e.market.question}),(0,$.jsx)(`em`,{children:n?`Last order ${new Date(Number(n.placedAtTimestamp)*1e3).toLocaleString()}`:`Expires ${qm(e.market.expiry)} · ${e.market.interval||`event`}`})]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`Balance`}),(0,$.jsx)(`strong`,{children:Th(e.balance,e.market.quoteDecimals)})]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`State`}),(0,$.jsx)(`i`,{className:`state-pill ${e.market.status===`Trading`?`live`:`settled`}`,children:Oh(e.market)}),(0,$.jsxs)(`em`,{className:`outcome-result ${t.tone}`,children:[`Outcome: `,t.label]}),e.market.winningOutcome!=null&&(0,$.jsxs)(`em`,{children:[`Winner: `,e.market.winningOutcome===0?`UP`:`DOWN`]})]})]},`${e.market.id}-${e.outcomeIndex}`)}),l===`orders`&&r.map(e=>{let t=e.marketInfo,n=t?.quoteDecimals??6,r=t?.asset||`DreamDEX`,i=t?.question||`Historical order`,a=e.isBid?`BUY`:`SELL`;return(0,$.jsxs)(`div`,{className:`activity-row`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsxs)(`b`,{children:[r,` · `,a]}),(0,$.jsx)(`small`,{children:i}),(0,$.jsxs)(`em`,{children:[`Placed `,new Date(Number(e.placedAtTimestamp)*1e3).toLocaleString()]})]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`Remaining / filled`}),(0,$.jsxs)(`strong`,{children:[Th(e.quantityRemaining,n),` / `,Th(e.filledQuantity,n)]})]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`Status · Limit`}),(0,$.jsx)(`i`,{className:`state-pill ${e.status===`Open`?`live`:`settled`}`,children:e.status}),(0,$.jsx)(`strong`,{children:Eh(e.price,n)}),(0,$.jsx)(`a`,{href:Dh(e.placedTxHash),target:`_blank`,rel:`noreferrer`,children:`Transaction ↗`})]})]},e.id)}),l===`fills`&&p.map(e=>(0,$.jsxs)(`div`,{className:`activity-row`,children:[(0,$.jsxs)(`span`,{children:[(0,$.jsxs)(`b`,{children:[e.market.asset,` · `,String(e.side||`fill`).toUpperCase()]}),(0,$.jsxs)(`small`,{children:[e.asMaker?`Maker execution`:`Taker execution`,` · `,e.market.interval||`event contract`]}),(0,$.jsx)(`em`,{children:new Date(Number(e.timestamp)*1e3).toLocaleString()})]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`Quantity`}),(0,$.jsx)(`strong`,{children:Th(e.quantity,e.market.quoteDecimals)})]}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`small`,{children:`Fill probability`}),(0,$.jsx)(`strong`,{children:Eh(e.fillPrice,e.market.quoteDecimals)}),(0,$.jsx)(`a`,{href:Dh(e.txHash),target:`_blank`,rel:`noreferrer`,children:`Proof ↗`})]})]},e.id)),!g&&(0,$.jsxs)(`div`,{className:`portfolio-empty`,children:[(0,$.jsx)(`b`,{children:e?`No ${l} indexed yet`:`Wallet not connected`}),(0,$.jsx)(`p`,{children:e?`Execute a small IOC order from the terminal, then refresh once DreamDEX indexes the transaction.`:`A verified on-chain proof is shown above. Connect your Somnia Shannon wallet from the navigation to inspect live account activity.`})]}),(0,$.jsx)(bn,{className:`primary`,to:`/markets`,children:`Back to live markets`})]})}),(0,$.jsx)(`footer`,{className:`foot`,children:`DreamDEX Event Contracts · fills, lifecycle, settlement, and transaction proof sourced from Somnia.`})]})}function Nh(){let[e,t]=(0,A.useState)(!0);return(0,A.useEffect)(()=>{let e=window.setTimeout(()=>t(!1),3e3);return()=>window.clearTimeout(e)},[]),(0,$.jsxs)($.Fragment,{children:[e&&(0,$.jsx)(`div`,{className:`launch-screen`,role:`status`,"aria-label":`Loading Sluice Markets`,children:(0,$.jsxs)(`div`,{className:`launch-card`,children:[(0,$.jsxs)(`span`,{className:`launch-mark`,"aria-hidden":`true`,children:[(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{}),(0,$.jsx)(`i`,{})]}),(0,$.jsx)(`strong`,{children:`SLUICE MARKETS`}),(0,$.jsx)(`small`,{children:`EVENT CONTRACT EXECUTION`}),(0,$.jsx)(`span`,{className:`launch-line`})]})}),(0,$.jsx)(ph,{}),(0,$.jsxs)(an,{children:[(0,$.jsx)(nn,{path:`/`,element:(0,$.jsx)(mh,{})}),(0,$.jsx)(nn,{path:`/how`,element:(0,$.jsx)(gh,{})}),(0,$.jsx)(nn,{path:`/markets`,element:(0,$.jsx)(wh,{})}),(0,$.jsx)(nn,{path:`/portfolio`,element:(0,$.jsx)(Mh,{})}),(0,$.jsx)(nn,{path:`*`,element:(0,$.jsx)(tn,{to:`/`,replace:!0})})]})]})}var Ph=new je;ch(oh());function Fh(){return(0,$.jsx)(h,{config:ih,children:(0,$.jsx)(se,{client:Ph,children:(0,$.jsx)(_n,{basename:`/sluice/`,children:(0,$.jsx)(Nh,{})})})})}Me.createRoot(document.getElementById(`root`)).render((0,$.jsx)(A.StrictMode,{children:(0,$.jsx)(Fh,{})}));