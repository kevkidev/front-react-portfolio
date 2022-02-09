"use strict";(self.webpackChunkfront_react_portfolio=self.webpackChunkfront_react_portfolio||[]).push([[871],{1108:function(e,n,t){t.d(n,{Z:function(){return o}});t(5636);var r=t(184);function o(e){var n=e.urls;return(0,r.jsx)("div",{className:"common-external-links",children:(0,r.jsxs)("a",{className:"common-external-link",href:n[0],target:"__blank",children:[(0,r.jsx)("i",{className:"bi bi-arrow-return-right "}),"\xa0\xa0See source code ",(0,r.jsx)("i",{className:"bi bi-github"})]})})}},912:function(e,n,t){t.d(n,{Z:function(){return c}});t(5636);var r=t(3504),o=t(1726),i=t(184);function c(){return(0,i.jsxs)("div",{className:"common-return-links",children:[(0,i.jsxs)(r.rU,{className:"common-return-link",to:o.sz,children:["See more projects\xa0\xa0",(0,i.jsx)("i",{className:"bi bi-arrow-return-left "})]}),(0,i.jsxs)(r.rU,{className:"common-return-link",to:o.Tu,children:["Go to home\xa0\xa0",(0,i.jsx)("i",{className:"bi bi-arrow-return-left "})]})]})}},3871:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(5671),o=t(3144),i=t(7326),c=t(136),u=t(3668),a=t(2791),s=t(1108),l=t(912),f=t(184),d=function(e){var n=e.name,t=e.audioId,r=e.clickAction,o="/front-react-portfolio"+"/sound/".concat(t);return(0,f.jsxs)("button",{id:"btn-"+n,className:"drum-pad",onClick:function(){return r(n)},children:[n,(0,f.jsx)("audio",{id:n,src:o,className:"clip"})]})},m={Q:{name:"2Pac Snare3",id:"2Pac Snare3.wav"},W:{name:"50 dre kick",id:"50 dre kick.wav"},E:{name:"50 dre snare",id:"50 dre snare.wav"},A:{name:"50 Synth",id:"50 Synth.wav"},S:{name:"808kick8",id:"808kick8.wav"},D:{name:"808LONG_",id:"808LONG_.WAV"},Z:{name:"BARYHAT1",id:"BARYHAT1.WAV"},X:{name:"01 HHclosed08",id:"01 HHclosed08.wav"},C:{name:"CKS Dre 1 SD",id:"CKS Dre 1 SD.wav"}},p=function(e){(0,c.Z)(t,e);var n=(0,u.Z)(t);function t(e){var o;return(0,r.Z)(this,t),(o=n.call(this,e)).state={soundName:"--"},o.keyAction=o.keyAction.bind((0,i.Z)(o)),o.clickAction=o.clickAction.bind((0,i.Z)(o)),o.select=function(e){var n=m[e].name;o.setState({soundName:n});var t=document.getElementById(e);t&&t.play()},o}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){document.getElementById("drum-machine").focus()}},{key:"clickAction",value:function(e){this.select(e)}},{key:"keyAction",value:function(e){var n=e.key.toUpperCase();Object.keys(m).filter((function(e){return e.toUpperCase()==n})).length>0&&this.select(n)}},{key:"render",value:function(){var e=this;return(0,f.jsxs)("div",{id:"project-drum-machine",className:"container-fluid drum-machine-container",children:[(0,f.jsx)(l.Z,{}),(0,f.jsx)(s.Z,{urls:["https://github.com/kevkidev/front-react-portfolio/tree/develop/src/drum-machine"]}),(0,f.jsx)("div",{className:"parent",onKeyPress:this.keyAction,children:(0,f.jsxs)("div",{id:"drum-machine",tabIndex:0,children:[(0,f.jsx)("div",{className:"controls",children:(0,f.jsx)("div",{id:"display",children:this.state.soundName})}),(0,f.jsx)("div",{className:"pads",children:Object.keys(m).map((function(n){return(0,f.jsx)(d,{name:n.toUpperCase(),audioId:m[n].id,clickAction:e.clickAction},m[n].id)}))})]})})]})}}]),t}(a.Component)},5636:function(){},7326:function(e,n,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},5671:function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},3144:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}t.d(n,{Z:function(){return o}})},3668:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(1120),o=t(8814);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var c=t(7326);function u(e,n){if(n&&("object"===i(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(e)}function a(e){var n=(0,o.Z)();return function(){var t,o=(0,r.Z)(e);if(n){var i=(0,r.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return u(this,t)}}},1120:function(e,n,t){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},136:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9611);function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),n&&(0,r.Z)(e,n)}},8814:function(e,n,t){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}t.d(n,{Z:function(){return r}})},9611:function(e,n,t){function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=871.9a7f0573.chunk.js.map