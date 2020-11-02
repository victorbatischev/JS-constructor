(()=>{"use strict";var n={756:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(645),a=t.n(i)()((function(n){return n[1]}));a.push([n.id,"#app {\n  position: relative;\n}\n\n.content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 200px;\n  background: linear-gradient(17deg, #d3d3d3, #696969),\n    linear-gradient(127deg, #d3d3d3, #bdbdbd),\n    linear-gradient(336deg, #9e9e9e, #7d7d7d);\n}\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 200px;\n  z-index: 100;\n  padding: 10px;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n}\n\n#leaves {\n  position: absolute;\n  top: -50px;\n  width: 100%;\n  text-align: right;\n  z-index: 4000;\n}\n\n#leaves i {\n  display: inline-block;\n  width: 200px;\n  height: 150px;\n  background: linear-gradient(to bottom right, #309900, #005600);\n  transform: skew(20deg);\n  border-radius: 5% 40% 70%;\n  box-shadow: inset 0px 0px 1px #222;\n  border: 1px solid #333;\n  z-index: 1;\n  animation: falling 5s 0s infinite;\n}\n\n#leaves i:nth-of-type(2n) {\n  animation: falling2 5s 0s infinite;\n}\n#leaves i:nth-of-type(3n) {\n  animation: falling3 5s 0s infinite;\n}\n\n#leaves i:before {\n  position: absolute;\n  content: '';\n  top: 117px;\n  right: 9px;\n  height: 27px;\n  width: 32px;\n  transform: rotate(49deg);\n  border-radius: 0% 15% 15% 0%;\n  border-top: 1px solid #222;\n  border-bottom: 1px solid #222;\n  border-left: 0px solid #222;\n  border-right: 1px solid #222;\n  background: linear-gradient(to right, rgba(0, 100, 0, 1), #005600);\n  z-index: 1;\n}\n\n#leaves i:after {\n  content: '';\n  height: 125px;\n  width: 10px;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));\n  display: block;\n  transform: rotate(125deg);\n  position: absolute;\n  left: 85px;\n  border-radius: 50%;\n}\n\n#leaves i:nth-of-type(n) {\n  height: 23px;\n  width: 30px;\n}\n#leaves i:nth-of-type(n):before {\n  width: 7px;\n  height: 5px;\n  top: 17px;\n  right: 1px;\n}\n#leaves i:nth-of-type(n):after {\n  width: 2px;\n  height: 17px;\n  left: 12px;\n  top: 0px;\n}\n\n#leaves i:nth-of-type(2n + 1) {\n  height: 11px;\n  width: 16px;\n}\n#leaves i:nth-of-type(2n + 1):before {\n  width: 4px;\n  height: 3px;\n  top: 7px;\n  right: 0px;\n}\n#leaves i:nth-of-type(2n + 1):after {\n  width: 2px;\n  height: 6px;\n  left: 5px;\n  top: 1px;\n}\n\n#leaves i:nth-of-type(3n + 2) {\n  height: 17px;\n  width: 23px;\n}\n#leaves i:nth-of-type(3n + 2):before {\n  height: 4px;\n  width: 4px;\n  top: 12px;\n  right: 1px;\n}\n#leaves i:nth-of-type(3n + 2):after {\n  height: 10px;\n  width: 2px;\n  top: 1px;\n  left: 8px;\n}\n\n#leaves i:nth-of-type(n) {\n  animation-delay: 1.9s;\n}\n#leaves i:nth-of-type(2n) {\n  animation-delay: 3.9s;\n}\n#leaves i:nth-of-type(3n) {\n  animation-delay: 2.3s;\n}\n#leaves i:nth-of-type(4n) {\n  animation-delay: 4.4s;\n}\n#leaves i:nth-of-type(5n) {\n  animation-delay: 5s;\n}\n#leaves i:nth-of-type(6n) {\n  animation-delay: 3.5s;\n}\n#leaves i:nth-of-type(7n) {\n  animation-delay: 2.8s;\n}\n#leaves i:nth-of-type(8n) {\n  animation-delay: 1.5s;\n}\n#leaves i:nth-of-type(9n) {\n  animation-delay: 3.3s;\n}\n#leaves i:nth-of-type(10n) {\n  animation-delay: 2.5s;\n}\n#leaves i:nth-of-type(11n) {\n  animation-delay: 1.2s;\n}\n#leaves i:nth-of-type(12n) {\n  animation-delay: 4.1s;\n}\n#leaves i:nth-of-type(13n) {\n  animation-delay: 1s;\n}\n#leaves i:nth-of-type(14n) {\n  animation-delay: 4.7s;\n}\n#leaves i:nth-of-type(15n) {\n  animation-delay: 3s;\n}\n\n#leaves i:nth-of-type(n) {\n  background: linear-gradient(to bottom right, #309900, #005600);\n}\n#leaves i:nth-of-type(2n + 2) {\n  background: linear-gradient(to bottom right, #5e9900, #2b5600);\n}\n#leaves i:nth-of-type(4n + 1) {\n  background: linear-gradient(to bottom right, #990, #564500);\n}\n\n#leaves i:nth-of-type(n) {\n  opacity: 0.7;\n}\n#leaves i:nth-of-type(3n + 1) {\n  opacity: 0.5;\n}\n#leaves i:nth-of-type(3n + 2) {\n  opacity: 0.3;\n}\n\n#leaves i:nth-of-type(n) {\n  transform: rotate(180deg);\n}\n\n#leaves i:nth-of-type(n) {\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes falling {\n  0% {\n    transform: translate3d(300, 0, 0) rotate(0deg);\n  }\n\n  100% {\n    transform: translate3d(-350px, 700px, 0) rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes falling3 {\n  0% {\n    transform: translate3d(0, 0, 0) rotate(-20deg);\n  }\n\n  100% {\n    transform: translate3d(-230px, 640px, 0) rotate(-70deg);\n    opacity: 0;\n  }\n}\n\n@keyframes falling2 {\n  0% {\n    transform: translate3d(0, 0, 0) rotate(90deg);\n  }\n\n  100% {\n    transform: translate3d(-400px, 680px, 0) rotate(0deg);\n    opacity: 0;\n  }\n}\n",""]);const o=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:(n,e,t)=>{var i,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function r(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},i=[],a=0;a<n.length;a++){var s=n[a],l=e.base?s[0]+e.base:s[0],p=t[l]||0,d="".concat(l," ").concat(p);t[l]=p+1;var c=r(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(o[c].references++,o[c].updater(f)):o.push({identifier:d,updater:g(f,e),references:1}),i.push(d)}return i}function l(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var p,d=(p=[],function(n,e){return p[n]=e,p.filter(Boolean).join("\n")});function c(n,e,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=d(e,a);else{var o=document.createTextNode(a),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(o,r[e]):n.appendChild(o)}}function f(n,e,t){var i=t.css,a=t.media,o=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var h=null,u=0;function g(n,e){var t,i,a;if(e.singleton){var o=u++;t=h||(h=l(e)),i=c.bind(null,t,o,!1),a=c.bind(null,t,o,!0)}else t=l(e),i=f.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var a=r(t[i]);o[a].references--}for(var l=s(n,e),p=0;p<t.length;p++){var d=r(t[p]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=l}}}}},e={};function t(i){if(e[i])return e[i].exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),i=t(756);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=(n,e="")=>`<div class="row" style="margin: 0; ${e}">${n}</div>`,o=n=>`<div class="col-sm">${n}</div>`,r=(n={})=>Object.keys(n).map((e=>`${e}: ${n[e]}`)).join(";");class s{constructor(n,e){this.value=n,this.options=e}toHTML(){throw new Error("Для данного блока не найден подходящий метод для генерации HTML кода!")}}class l extends s{constructor(n,e){super(n,e)}toHTML(){const{options:n,value:e}=this;return a(o(`<${n.tag}>${e}</${n.tag}>`),n.styles)}}class p extends s{constructor(n,e){super(n,e)}toHTML(){const{options:n,value:e}=this;return a(o(`<p style="margin-bottom: 0;">${e}</p>`),n.styles)}}const d=[new class extends s{constructor(n,e){super(n,e)}toHTML(){return a(this.value)}}('<div id="leaves">\n      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n      <i></i><i></i><i></i><i></i><i></i><i></i>\n    </div>'),new l("Алексей Плещеев",{styles:r({color:"#fff","text-align":"center","font-family":"Georgia, serif","font-size":"25px","letter-spacing":"2px","word-spacing":"2px","font-variant":"small-caps","padding-top":"50px"}),tag:"h2"}),new p("Осень наступила, высохли цветы",{styles:r({"text-align":"center","font-family":"Arial, Helvetica, sans-serif","font-size":"20px","font-weight":"700","padding-top":"20px"})}),new class extends s{constructor(n,e){super(n,e)}toHTML(){const{alt:n,styles:e}=this.options;return a(o(`<img src="./src/assets/${this.value}" alt="${n}" height="250">`),e)}}("golden_autumn.jpg",{styles:r({"text-align":"center","padding-top":"20px"}),alt:"Иван Иванович Шишкин – Ранняя осень 1889"}),new class extends s{constructor(n,e){super(n,e)}toHTML(){const{options:n,value:e}=this;return a(e.map((n=>o(n))).join(""),n.styles)}}(["      Осень наступила,\n      Высохли цветы,\n      И глядят уныло\n      Голые кусты.","      Вянет и желтеет\n      Травка на лугах,\n      Только зеленеет\n      Озимь на полях.","      Туча небо кроет,\n      Солнце не блестит,\n      Ветер в поле воет,\n      Дождик моросит..","      Зашумели воды\n      Быстрого ручья,\n      Птички улетели\n      В теплые края."],{styles:r({"white-space":"pre-wrap","text-align":"justify","padding-top":"50px","font-family":"Verdana","font-size":"16px","font-weight":"700","padding-bottom":"200px","padding-left":"150px","padding-right":"100px"})})];function c(n){return`\n    <form name="${n}">\n      <h5>${n}</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  `}const f=new class{constructor(n){this.$el=document.querySelector(n)}render(n){this.$el.innerHTML="",n.forEach((n=>{this.$el.insertAdjacentHTML("beforeend",n.toHTML())}))}}("#site");f.render(d),new class{constructor(n,e){this.$el=document.querySelector(n),this.update=e,this.init()}init(){this.$el.addEventListener("submit",this.addBlock.bind(this)),this.$el.innerHTML=this.template}get template(){return[c("text"),c("title")].join("")}addBlock(n){n.preventDefault();const e=n.target.name,t=n.target.value.value,i=n.target.styles.value,a=new("text"===e?p:l)(t,{styles:i});this.update(a),n.target.value.value="",n.target.styles.value=""}}("#panel",(n=>{d.push(n),f.render(d)}))})()})();