import './polyfills.server.mjs';
import{a as we}from"./chunk-BLDDQ52H.mjs";import"./chunk-UIRJGLYL.mjs";import{a as ke}from"./chunk-YL3ASPCP.mjs";import{a as je}from"./chunk-PJO2HVFA.mjs";import"./chunk-VLSTHS6H.mjs";import{j as he}from"./chunk-7MK4VVFR.mjs";import{q as ye}from"./chunk-UIUNPF42.mjs";import{Ga as pe,Ja as C,Ka as ne,X as oe,Ya as Y,Za as me,_a as se,bb as ve,cb as be,db as ge,eb as $,fb as K,gb as G,ka as le,nb as ie,ob as re,pa as fe,pb as ae}from"./chunk-WJILESQA.mjs";import{e as _e,g as Pe}from"./chunk-5XUXGTUW.mjs";var Oe=_e((ee,de)=>{"use strict";(function(u,c){typeof ee=="object"&&typeof de=="object"?de.exports=c():typeof define=="function"&&define.amd?define([],c):typeof ee=="object"?ee.AOS=c():u.AOS=c()})(ee,function(){return function(u){function c(t){if(n[t])return n[t].exports;var o=n[t]={exports:{},id:t,loaded:!1};return u[t].call(o.exports,o,o.exports,c),o.loaded=!0,o.exports}var n={};return c.m=u,c.c=n,c.p="dist/",c(0)}([function(u,c,n){"use strict";function t(r){return r&&r.__esModule?r:{default:r}}var o=Object.assign||function(r){for(var k=1;k<arguments.length;k++){var E=arguments[k];for(var N in E)Object.prototype.hasOwnProperty.call(E,N)&&(r[N]=E[N])}return r},v=n(1),w=(t(v),n(6)),a=t(w),m=n(7),s=t(m),l=n(8),d=t(l),b=n(9),x=t(b),M=n(10),R=t(M),J=n(11),Q=t(J),X=n(14),U=t(X),_=[],V=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},z=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(V=!0),V)return _=(0,Q.default)(_,g),(0,R.default)(_,g.once),_},I=function(){_=(0,U.default)(),z()},i=function(){_.forEach(function(r,k){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&x.default.mobile()||r==="phone"&&x.default.phone()||r==="tablet"&&x.default.tablet()||typeof r=="function"&&r()===!0},f=function(r){g=o(g,r),_=(0,U.default)();var k=document.all&&!window.atob;return e(g.disable)||k?i():(g.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?z(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){z(!0)}):document.addEventListener(g.startEvent,function(){z(!0)}),window.addEventListener("resize",(0,s.default)(z,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(z,g.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,R.default)(_,g.once)},g.throttleDelay)),g.disableMutationObserver||d.default.ready("[data-aos]",I),_)};u.exports={init:f,refresh:z,refreshHard:I}},function(u,c){},,,,,function(u,c){(function(n){"use strict";function t(e,f,r){function k(p){var O=S,F=A;return S=A=void 0,L=p,j=e.apply(F,O)}function E(p){return L=p,h=setTimeout(B,f),H?k(p):j}function N(p){var O=p-P,F=p-L,ue=f-O;return q?I(ue,D-F):ue}function W(p){var O=p-P,F=p-L;return P===void 0||O>=f||O<0||q&&F>=D}function B(){var p=i();return W(p)?te(p):void(h=setTimeout(B,N(p)))}function te(p){return h=void 0,y&&S?k(p):(S=A=void 0,j)}function ce(){h!==void 0&&clearTimeout(h),L=0,S=P=A=h=void 0}function Z(){return h===void 0?j:te(i())}function T(){var p=i(),O=W(p);if(S=arguments,A=this,P=p,O){if(h===void 0)return E(P);if(q)return h=setTimeout(B,f),k(P)}return h===void 0&&(h=setTimeout(B,f)),j}var S,A,D,j,h,P,L=0,H=!1,q=!1,y=!0;if(typeof e!="function")throw new TypeError(l);return f=m(f)||0,v(r)&&(H=!!r.leading,q="maxWait"in r,D=q?z(m(r.maxWait)||0,f):D,y="trailing"in r?!!r.trailing:y),T.cancel=ce,T.flush=Z,T}function o(e,f,r){var k=!0,E=!0;if(typeof e!="function")throw new TypeError(l);return v(r)&&(k="leading"in r?!!r.leading:k,E="trailing"in r?!!r.trailing:E),t(e,f,{leading:k,maxWait:f,trailing:E})}function v(e){var f=typeof e>"u"?"undefined":s(e);return!!e&&(f=="object"||f=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":s(e))=="object"}function a(e){return(typeof e>"u"?"undefined":s(e))=="symbol"||w(e)&&g.call(e)==b}function m(e){if(typeof e=="number")return e;if(a(e))return d;if(v(e)){var f=typeof e.valueOf=="function"?e.valueOf():e;e=v(f)?f+"":f}if(typeof e!="string")return e===0?e:+e;e=e.replace(x,"");var r=R.test(e);return r||J.test(e)?Q(e.slice(2),r?2:8):M.test(e)?d:+e}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,b="[object Symbol]",x=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,J=/^0o[0-7]+$/i,Q=parseInt,X=(typeof n>"u"?"undefined":s(n))=="object"&&n&&n.Object===Object&&n,U=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,_=X||U||Function("return this")(),V=Object.prototype,g=V.toString,z=Math.max,I=Math.min,i=function(){return _.Date.now()};u.exports=o}).call(c,function(){return this}())},function(u,c){(function(n){"use strict";function t(i,e,f){function r(y){var p=T,O=S;return T=S=void 0,P=y,D=i.apply(O,p)}function k(y){return P=y,j=setTimeout(W,e),L?r(y):D}function E(y){var p=y-h,O=y-P,F=e-p;return H?z(F,A-O):F}function N(y){var p=y-h,O=y-P;return h===void 0||p>=e||p<0||H&&O>=A}function W(){var y=I();return N(y)?B(y):void(j=setTimeout(W,E(y)))}function B(y){return j=void 0,q&&T?r(y):(T=S=void 0,D)}function te(){j!==void 0&&clearTimeout(j),P=0,T=h=S=j=void 0}function ce(){return j===void 0?D:B(I())}function Z(){var y=I(),p=N(y);if(T=arguments,S=this,h=y,p){if(j===void 0)return k(h);if(H)return j=setTimeout(W,e),r(h)}return j===void 0&&(j=setTimeout(W,e)),D}var T,S,A,D,j,h,P=0,L=!1,H=!1,q=!0;if(typeof i!="function")throw new TypeError(s);return e=a(e)||0,o(f)&&(L=!!f.leading,H="maxWait"in f,A=H?g(a(f.maxWait)||0,e):A,q="trailing"in f?!!f.trailing:q),Z.cancel=te,Z.flush=ce,Z}function o(i){var e=typeof i>"u"?"undefined":m(i);return!!i&&(e=="object"||e=="function")}function v(i){return!!i&&(typeof i>"u"?"undefined":m(i))=="object"}function w(i){return(typeof i>"u"?"undefined":m(i))=="symbol"||v(i)&&V.call(i)==d}function a(i){if(typeof i=="number")return i;if(w(i))return l;if(o(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=o(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=i.replace(b,"");var f=M.test(i);return f||R.test(i)?J(i.slice(2),f?2:8):x.test(i)?l:+i}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},s="Expected a function",l=NaN,d="[object Symbol]",b=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,R=/^0o[0-7]+$/i,J=parseInt,Q=(typeof n>"u"?"undefined":m(n))=="object"&&n&&n.Object===Object&&n,X=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,U=Q||X||Function("return this")(),_=Object.prototype,V=_.toString,g=Math.max,z=Math.min,I=function(){return U.Date.now()};u.exports=t}).call(c,function(){return this}())},function(u,c){"use strict";function n(m){var s=void 0,l=void 0,d=void 0;for(s=0;s<m.length;s+=1)if(l=m[s],l.dataset&&l.dataset.aos||(d=l.children&&n(l.children)))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!t()}function v(m,s){var l=window.document,d=t(),b=new d(w);a=s,b.observe(l.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(m){m&&m.forEach(function(s){var l=Array.prototype.slice.call(s.addedNodes),d=Array.prototype.slice.call(s.removedNodes),b=l.concat(d);if(n(b))return a()})}Object.defineProperty(c,"__esModule",{value:!0});var a=function(){};c.default={isSupported:o,ready:v}},function(u,c){"use strict";function n(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(c,"__esModule",{value:!0});var o=function(){function l(d,b){for(var x=0;x<b.length;x++){var M=b[x];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(d,M.key,M)}}return function(d,b,x){return b&&l(d.prototype,b),x&&l(d,x),d}}(),v=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function l(){n(this,l)}return o(l,[{key:"phone",value:function(){var d=t();return!(!v.test(d)&&!w.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=t();return!(!a.test(d)&&!m.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),l}();c.default=new s},function(u,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var n=function(o,v,w){var a=o.node.getAttribute("data-aos-once");v>o.position?o.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!w&&a!=="true")&&o.node.classList.remove("aos-animate")},t=function(o,v){var w=window.pageYOffset,a=window.innerHeight;o.forEach(function(m,s){n(m,a+w,v)})};c.default=t},function(u,c,n){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(c,"__esModule",{value:!0});var o=n(12),v=t(o),w=function(a,m){return a.forEach(function(s,l){s.node.classList.add("aos-init"),s.position=(0,v.default)(s.node,m.offset)}),a};c.default=w},function(u,c,n){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(c,"__esModule",{value:!0});var o=n(13),v=t(o),w=function(a,m){var s=0,l=0,d=window.innerHeight,b={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(l=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(a=document.querySelectorAll(b.anchor)[0]),s=(0,v.default)(a).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":s+=a.offsetHeight/2;break;case"bottom-bottom":s+=a.offsetHeight;break;case"top-center":s+=d/2;break;case"bottom-center":s+=d/2+a.offsetHeight;break;case"center-center":s+=d/2+a.offsetHeight/2;break;case"top-top":s+=d;break;case"bottom-top":s+=a.offsetHeight+d;break;case"center-top":s+=a.offsetHeight/2+d}return b.anchorPlacement||b.offset||isNaN(m)||(l=m),s+l};c.default=w},function(u,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var n=function(t){for(var o=0,v=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)o+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),v+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:v,left:o}};c.default=n},function(u,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(o){return{node:o}})};c.default=n}])})});var xe=(()=>{class u{project=le.required();static \u0275fac=function(t){return new(t||u)};static \u0275cmp=oe({type:u,selectors:[["project-card"]],inputs:{project:[1,"project"]},standalone:!0,features:[ae],decls:12,vars:13,consts:[[1,"project"],[1,"header"],[1,"status"],[3,"src","alt"],[1,"title"],[1,"body"],[1,"overview",3,"title"],[1,"footer"],["text","Ver Detalles","icon","info",3,"link"]],template:function(t,o){t&1&&($(0,"div",0)(1,"div",1)(2,"span",2),ie(3),K(),G(4,"img",3),$(5,"h2",4),ie(6),K()(),$(7,"div",5)(8,"p",6),ie(9),K()(),$(10,"div",7),G(11,"app-button",8),K()()),t&2&&(C(2),me("green",o.project().status=="Finalizado"),C(),re(o.project().status),C(),se("view-transition-name: project-img-"+o.project().id+";"),Y("src",o.project().poster,pe)("alt","Imagen de "+o.project().title),C(2),re(o.project().title),C(),se("view-transition-name: project-header-"+o.project().id),C(),Y("title",o.project().overview),C(),re(o.project().overview),C(2),Y("link","/project/"+o.project().id))},dependencies:[we],styles:[".project[_ngcontent-%COMP%]{display:grid;gap:.5rem;padding:1rem;border-radius:var(--borderrMid);background-color:var(--bgColor)}.project[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{scale:1.05}.header[_ngcontent-%COMP%]{position:relative;display:grid;gap:1rem;overflow:hidden}.status[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;padding:.2rem .5rem;border-radius:var(--borderrMid);font-size:.8rem;background-color:var(--textLightColor);color:var(--bgColor)}.status.green[_ngcontent-%COMP%]{background-color:var(--greenColor)}.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--borderrMid);max-width:400px;justify-self:center;height:12rem;object-fit:cover;background-color:var(--bgCardColorAlpha);mix-blend-mode:soft-light;transition:var(--transitionMid)}.title[_ngcontent-%COMP%]{display:inline-block;font-size:1.2rem}.overview[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-moz-box-orient:vertical;-webkit-line-clamp:2;-moz-line-clamp:2;line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:3rem}"]})}return u})();var Me=Pe(Oe());function Ce(u,c){if(u&1&&G(0,"project-card",3),u&2){let n=c.$implicit;Y("project",n)}}var We=(()=>{class u{title;dataService;plataformId;projects=[];constructor(n,t,o){this.title=n,this.dataService=t,this.plataformId=o,t.getProjects().subscribe({next:v=>{this.projects=v.projects}})}ngOnInit(){ye(this.plataformId)&&Me.init()}static \u0275fac=function(t){return new(t||u)(ne(he),ne(ke),ne(fe))};static \u0275cmp=oe({type:u,selectors:[["app-portfolio-page"]],standalone:!0,features:[ae],decls:5,vars:1,consts:[[1,"portfolio"],[3,"title"],[1,"body"],["data-aos","zoom-in",3,"project"]],template:function(t,o){t&1&&($(0,"div",0),G(1,"app-title",1),$(2,"article",2),be(3,Ce,1,1,"project-card",3,ve),K()()),t&2&&(C(),Y("title",o.title.getTitle()),C(2),ge(o.projects))},dependencies:[je,xe],styles:[".portfolio[_ngcontent-%COMP%]{display:grid;gap:1rem}.body[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1rem}"]})}return u})();export{We as PortfolioPageComponent};