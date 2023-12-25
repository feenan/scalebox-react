!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.lib=t(require("react")):e.lib=t(e.react)}(self,(e=>(()=>{"use strict";var t={156:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{n.d(o,{default:()=>f});var e=n(156),t=n.n(e);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var i=["isFullScreen","container","width","height","children"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:String(t)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}const f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(h,e);var n,o,s,f,p=(s=h,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(s);if(f){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function h(e){var t,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=p.call(this,e)).state={scale:1,boxObserver:null},t.changeScale=(r=function(e){var r=t.getScale(e);t.setState({scale:r})},500,function(){var e=this,t=arguments;n&&clearTimeout(n),n=setTimeout((function(){n=null,r.apply(e,t)}),500)}),t}return n=h,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.container,r=e.isFullScreen;if(t){var n=new ResizeObserver(this.changeScale);n.observe(t),this.setState({boxObserver:n})}else r&&(this.changeScale(),window.addEventListener("resize",this.changeScale))}},{key:"componentDidUpdate",value:function(e){var t=e.container,r=e.isFullScreen,n=this.props,o=n.container,i=n.isFullScreen;if(!t&&o){var c=new ResizeObserver(this.changeScale);return c.observe(o),this.setState({boxObserver:c}),void window.removeEventListener("resize",this.changeScale)}r&&!i&&window.removeEventListener("resize",this.changeScale),r||!i||o||(this.changeScale(),window.addEventListener("resize",this.changeScale))}},{key:"componentWillUnmount",value:function(){var e=this.props.isFullScreen,t=this.state.boxObserver;e?window.removeEventListener("resize",this.changeScale):t&&t.unobserve()}},{key:"getScale",value:function(e){var t,r,n=this.props,o=n.width,i=n.height;if(!e||e&&e.constructor===Event)t=window.innerWidth/o,r=window.innerHeight/i;else{var c=e[0].contentRect;t=c.width/o,r=c.height/i}return t<r?t:r}},{key:"render",value:function(){var e=this.props,r=(e.isFullScreen,e.container),n=e.width,o=e.height,a=e.children,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),u=this.state.scale;return t().createElement("div",c({className:"ry-scale-box",style:{position:r?"relative":"fixed",transform:"scale(".concat(u,") translate(-50%, -50%)"),WebkitTransform:"scale(".concat(u,") translate(-50%, -50%)"),width:n,height:o}},s),a||null)}}])&&a(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),h}(t().Component)})(),o.default})()));
//# sourceMappingURL=index.js.map