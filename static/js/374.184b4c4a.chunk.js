"use strict";(self.webpackChunkfront_react_portfolio=self.webpackChunkfront_react_portfolio||[]).push([[374],{1108:function(t,e,n){n.d(e,{Z:function(){return i}});n(5636);var r=n(184);function i(t){var e=t.urls;return(0,r.jsx)("div",{className:"common-external-links",children:(0,r.jsxs)("a",{className:"common-external-link",href:e[0],target:"__blank",children:[(0,r.jsx)("i",{className:"bi bi-arrow-return-right "}),"\xa0\xa0See source code on GitHub"]})})}},912:function(t,e,n){n.d(e,{Z:function(){return o}});n(5636);var r=n(3504),i=n(1726),s=n(184);function o(){return(0,s.jsxs)("div",{className:"common-return-links",children:[(0,s.jsxs)(r.rU,{className:"common-return-link",to:i.sz,children:["See more projects\xa0\xa0",(0,s.jsx)("i",{className:"bi bi-arrow-return-left "})]}),(0,s.jsxs)(r.rU,{className:"common-return-link",to:i.Tu,children:["Go to home\xa0\xa0",(0,s.jsx)("i",{className:"bi bi-arrow-return-left "})]})]})}},1374:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(5671),i=n(3144),s=n(136),o=n(3668),c=n(2791),u=n(912),a=n(1108),l=n(184),f="break",h="session",d="start",m="beep",b=function(t){(0,s.Z)(n,t);var e=(0,o.Z)(n);function n(t){var i;return(0,r.Z)(this,n),(i=e.call(this,t)).state=i._getDefaultState(),i}return(0,i.Z)(n,[{key:"_getDefaultState",value:function(){return{breakLength:5,sessionLength:25,minuteCount:25,secondCount:0,currentCount:h,interval:null,status:""}}},{key:"increaseLength",value:function(t){var e=Object.create(this.state);f===t&&this.state.breakLength<60?(e.breakLength++,this.setState((function(){return e}))):h===t&&this.state.sessionLength<60&&(e.sessionLength++,e.minuteCount=e.sessionLength,this.setState((function(){return e})))}},{key:"decreaseLength",value:function(t){var e=Object.create(this.state);f===t&&this.state.breakLength>1?(e.breakLength--,this.setState((function(){return e}))):h===t&&this.state.sessionLength>1&&(e.sessionLength--,e.minuteCount=e.sessionLength,this.setState((function(){return e})))}},{key:"updateLength",value:function(t,e){var n=Math.floor(t.target.value),r=Object.create(this.state);!isNaN(n)&&n>0&&n<=60&&(f===e?r.breakLength=n:h===e&&(r.sessionLength=n,r.minuteCount=r.sessionLength),this.setState((function(){return r})))}},{key:"_countTime",value:function(){var t=Object.create(this.state);t.secondCount>0?t.secondCount--:t.minuteCount>0&&0==t.secondCount?(t.minuteCount--,t.secondCount=59):(document.getElementById(m).play(),clearInterval(t.interval),t.secondCount=0,f===t.currentCount?(t.currentCount=h,t.minuteCount=t.sessionLength):h===t.currentCount&&(t.currentCount=f,t.minuteCount=t.breakLength),this._startTimer()),this.setState((function(){return t}))}},{key:"_startTimer",value:function(){var t=this,e=Object.create(this.state);e.status=d,e.interval=setInterval((function(){return t._countTime()}),1e3),this.setState((function(){return e}))}},{key:"_stopTimer",value:function(){var t=Object.create(this.state);t.status="stop",clearInterval(t.interval),t.interval=null,this.setState((function(){return t}))}},{key:"startStopTimer",value:function(){d===this.state.status?this._stopTimer():this._startTimer()}},{key:"resetTimer",value:function(){var t=this;document.getElementById(m).pause(),document.getElementById(m).currentTime=0;var e=Object.create(this.state);e.status="",clearInterval(e.interval),this.setState((function(){return t._getDefaultState()}))}},{key:"render",value:function(){var t=this,e=this.state.minuteCount<10?"0".concat(this.state.minuteCount):this.state.minuteCount,n=this.state.secondCount<10?"0".concat(this.state.secondCount):this.state.secondCount,r=this.state.currentCount.charAt(0).toUpperCase().concat(this.state.currentCount.slice(1));return(0,l.jsx)(c.Fragment,{children:(0,l.jsxs)("div",{className:"chrono-container",children:[(0,l.jsx)(u.Z,{}),(0,l.jsx)(a.Z,{urls:[{NODE_ENV:"production",PUBLIC_URL:"/front-react-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_URL_GITHUB_CHRONO]}),(0,l.jsxs)("div",{id:"chrono",children:[(0,l.jsx)("audio",{id:m,src:{NODE_ENV:"production",PUBLIC_URL:"/front-react-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SERVER_PREFIX+"11eGZHLeYjikqghM8v2fPkZkQYMzaFM08"}),(0,l.jsx)("h1",{children:"Interval Clock"}),(0,l.jsxs)("div",{className:"display",children:[(0,l.jsx)("p",{id:"timer-label",children:r}),(0,l.jsxs)("div",{id:"time-left",children:[e,":",n]})]}),(0,l.jsxs)("div",{className:"settings",children:[(0,l.jsxs)("div",{className:"settings-item",children:[(0,l.jsx)("p",{id:"break-label",children:"Break Length"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("i",{id:"break-decrement",className:"bi bi-arrow-down-circle-fill",onClick:function(){return t.decreaseLength(f)}}),(0,l.jsx)("input",{id:"break-length",type:"number",min:"1",max:"60",step:"1",value:this.state.breakLength,onChange:function(e){return t.updateLength(e,f)},onClick:function(t){return t.target.select()}}),(0,l.jsx)("i",{id:"break-increment",className:"bi bi-arrow-up-circle-fill",onClick:function(){return t.increaseLength(f)}})]})]}),(0,l.jsxs)("div",{className:"settings-item",children:[(0,l.jsx)("p",{id:"session-label",children:"Session Length"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("i",{id:"session-decrement",className:"bi bi-arrow-down-circle-fill",onClick:function(){return t.decreaseLength(h)}}),(0,l.jsx)("input",{id:"session-length",type:"number",min:"1",max:"60",step:"1",value:this.state.sessionLength,onChange:function(e){return t.updateLength(e,h)},onClick:function(t){return t.target.select()}}),(0,l.jsx)("i",{id:"session-increment",className:"bi bi-arrow-up-circle-fill",onClick:function(){return t.increaseLength(h)}})]})]})]}),(0,l.jsxs)("div",{className:"commands",children:[(0,l.jsxs)("div",{id:"start_stop",onClick:this.startStopTimer.bind(this),children:[(0,l.jsx)("i",{className:"bi bi-play-circle-fill "}),(0,l.jsx)("i",{className:"bi bi-pause-circle-fill"})]}),(0,l.jsx)("i",{id:"reset",className:"bi bi-stop-circle-fill",onClick:this.resetTimer.bind(this)})]})]})]})})}}]),n}(c.Component)},5636:function(){},7326:function(t,e,n){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},5671:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return i}})},3668:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(1120),i=n(8814);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var o=n(7326);function c(t,e){if(e&&("object"===s(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}function u(t){var e=(0,i.Z)();return function(){var n,i=(0,r.Z)(t);if(e){var s=(0,r.Z)(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return c(this,n)}}},1120:function(t,e,n){function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},136:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(9611);function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&(0,r.Z)(t,e)}},8814:function(t,e,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(e,{Z:function(){return r}})},9611:function(t,e,n){function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=374.184b4c4a.chunk.js.map