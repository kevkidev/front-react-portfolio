"use strict";(self.webpackChunkfront_react_portfolio=self.webpackChunkfront_react_portfolio||[]).push([[871],{1108:function(n,e,t){t.d(e,{Z:function(){return o}});t(5636);var r=t(184);function o(n){var e=n.urls;return(0,r.jsx)("div",{className:"common-external-links",children:(0,r.jsxs)("a",{className:"common-external-link",href:e[0],target:"__blank",children:[(0,r.jsx)("i",{className:"bi bi-arrow-return-right "}),"\xa0\xa0See source code ",(0,r.jsx)("i",{className:"bi bi-github"})]})})}},912:function(n,e,t){t.d(e,{Z:function(){return c}});t(5636);var r=t(3504),o=t(1726),i=t(184);function c(){return(0,i.jsxs)("div",{className:"common-return-links",children:[(0,i.jsxs)(r.rU,{className:"common-return-link",to:o.sz,children:["See more projects\xa0\xa0",(0,i.jsx)("i",{className:"bi bi-arrow-return-left "})]}),(0,i.jsxs)(r.rU,{className:"common-return-link",to:o.Tu,children:["Go to home\xa0\xa0",(0,i.jsx)("i",{className:"bi bi-arrow-return-left "})]})]})}},3871:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(5671),o=t(3144),i=t(7326),c=t(136),u=t(3668),a=t(2791),s=t(1108),f=t(912),l=t(184),d=function(n){var e=n.name,t=n.audioId,r=n.clickAction,o="/front-react-portfolio"+"/sound/".concat(t);return(0,l.jsxs)("button",{id:"btn-"+e,className:"drum-pad",onClick:function(){return r(e)},children:[e,(0,l.jsx)("audio",{id:e,src:o,className:"clip"})]})},m={Q:{name:"2Pac Snare3",id:"2Pac Snare3.wav"},W:{name:"50 dre kick",id:"50 dre kick.wav"},E:{name:"50 dre snare",id:"50 dre snare.wav"},A:{name:"50 Synth",id:"50 Synth.wav"},S:{name:"808kick8",id:"808kick8.wav"},D:{name:"808LONG_",id:"808LONG_.WAV"},Z:{name:"BARYHAT1",id:"BARYHAT1.WAV"},X:{name:"01 HHclosed08",id:"01 HHclosed08.wav"},C:{name:"CKS Dre 1 SD",id:"CKS Dre 1 SD.wav"}},p=function(n){(0,c.Z)(t,n);var e=(0,u.Z)(t);function t(n){var o;return(0,r.Z)(this,t),(o=e.call(this,n)).state={soundName:"--"},o.keyAction=o.keyAction.bind((0,i.Z)(o)),o.clickAction=o.clickAction.bind((0,i.Z)(o)),o.select=function(n){var e=m[n].name;o.setState({soundName:e});var t=document.getElementById(n);t&&t.play()},o}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){document.getElementById("drum-machine").focus()}},{key:"clickAction",value:function(n){this.select(n)}},{key:"keyAction",value:function(n){var e=n.key.toUpperCase();Object.keys(m).filter((function(n){return n.toUpperCase()==e})).length>0&&this.select(e)}},{key:"render",value:function(){var n=this;return(0,l.jsxs)("div",{id:"project-drum-machine",className:"container-fluid drum-machine-container",children:[(0,l.jsx)(f.Z,{}),(0,l.jsx)(s.Z,{urls:[{NODE_ENV:"production",PUBLIC_URL:"/front-react-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NAME:"front-react-portfolio",REACT_APP_URL_GITHUB_APP:"https://github.com/kevkidev"}.REACT_APP_URL_GITHUB_DRUM]}),(0,l.jsx)("div",{className:"parent",onKeyPress:this.keyAction,children:(0,l.jsxs)("div",{id:"drum-machine",tabIndex:0,children:[(0,l.jsx)("div",{className:"controls",children:(0,l.jsx)("div",{id:"display",children:this.state.soundName})}),(0,l.jsx)("div",{className:"pads",children:Object.keys(m).map((function(e){return(0,l.jsx)(d,{name:e.toUpperCase(),audioId:m[e].id,clickAction:n.clickAction},m[e].id)}))})]})})]})}}]),t}(a.Component)},5636:function(){},7326:function(n,e,t){function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return r}})},5671:function(n,e,t){function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,{Z:function(){return r}})},3144:function(n,e,t){function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}t.d(e,{Z:function(){return o}})},3668:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(1120),o=t(8814);function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}var c=t(7326);function u(n,e){if(e&&("object"===i(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(n)}function a(n){var e=(0,o.Z)();return function(){var t,o=(0,r.Z)(n);if(e){var i=(0,r.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return u(this,t)}}},1120:function(n,e,t){function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}t.d(e,{Z:function(){return r}})},136:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(9611);function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(n,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),writable:!1}),e&&(0,r.Z)(n,e)}},8814:function(n,e,t){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}t.d(e,{Z:function(){return r}})},9611:function(n,e,t){function r(n,e){return r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},r(n,e)}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=871.705cf90a.chunk.js.map