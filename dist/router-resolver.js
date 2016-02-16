!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("react-router")):"function"==typeof define&&define.amd?define(["react","react-router"],r):"object"==typeof exports?exports.RouterResolver=r(require("react"),require("react-router")):e.RouterResolver=r(e.React,e.ReactRouter)}(this,function(e,r){return function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),s=o(n),u=t(5),a=o(u);r.RouterResolver=s["default"],r.RouterResolverContainer=a["default"],r["default"]=s["default"]},function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),p=function(e,r,t){for(var o=!0;o;){var n=e,s=r,u=t;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,s);if(void 0!==a){if("value"in a)return a.value;var p=a.get;if(void 0===p)return;return p.call(u)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,r=s,t=u,o=!0,a=i=void 0}},i=t(2),l=o(i),c=t(3),f=t(4),v=o(f),d=function(e){return e.pathname+e.search+e.hash},y=function(e,r){var t=d(e),o=d(r);return t!==o},m=function(e){var r=[],t=function(e){e.resolve&&r.push(e)};return e.forEach(function(e){if("object"==typeof e)for(var r in e)t(e[r]);else t(e)}),r},h=function(e,r){for(var t=[],o=0;o<r.length;o++)-1===e.indexOf(r[o])&&t.push(r[o]);return t},b=function(e,r){var t=void 0,o=0,n=0;for(t in e){if(e.hasOwnProperty(t)&&e[t]!==r[t])return!1;o++}for(t in r)r.hasOwnProperty(t)&&n++;return o===n},P=function(e){return e[e.length-1]},O=function(e,r){e.components=e.components||[],e.responses=e.responses||[],r.components=r.components||[],r.responses=r.responses||[];for(var t=0;t<r.components.length;t++){var o=r.components[t],n=e.components.indexOf(o);-1===n?(e.components.push(r.components[t]),e.responses.push(r.responses[t])):e.responses[n]=r.responses[t]}return e},g=function(e){function r(){n(this,r),p(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments),this.state={resolving:!1,resolveError:!1,prevProps:null,componentsResponses:null}}return s(r,e),a(r,[{key:"getChildContext",value:function(){return{resolver:{componentsResponses:this.state.componentsResponses}}}},{key:"componentDidMount",value:function(){var e=this.props,r=e.components,t=e.params;this.resolve(r,t)}},{key:"componentWillReceiveProps",value:function(e){if(y(e.location,this.props.location)){var r=m(this.props.components),t=m(e.components),o=h(r,t);if(0!==t.length&&0===o.length){var n=b(r,t);if(n){var s=!b(e.params,this.props.params);s&&(o=[P(t)])}}this.resolve(o,e.params)}}},{key:"resolve",value:function(e,r){var t=this;this.setState({resolving:!0,prevProps:this.props});var o=this.state.componentsResponses||{},n=m(e),s=n.map(function(e){return e.resolve(r)});Promise.all(s).then(function(e){var r={components:n,responses:e};o=O(o,r),t.setState({resolving:!1,resolveError:!1,prevProps:null,componentsResponses:o})},function(e){t.setState({resolving:!1,resolveError:!0}),t.props.onError(e)})}},{key:"render",value:function(){var e=this.state,r=e.componentsResponses,t=e.resolving,o=e.resolveError,n=e.prevProps;if(!r)return this.props.renderInitial();var s=t||o?n:this.props;return s.router.resolving=t,this.props.render(s)}}],[{key:"propTypes",value:{components:l["default"].PropTypes.array.isRequired,params:l["default"].PropTypes.object.isRequired,location:l["default"].PropTypes.object.isRequired,renderInitial:l["default"].PropTypes.func,render:l["default"].PropTypes.func,onError:l["default"].PropTypes.func},enumerable:!0},{key:"defaultProps",value:{renderInitial:function(){return null},render:function(e){return l["default"].createElement(c.RouterContext,u({},e,{createElement:v["default"]}))},onError:function(e){throw e}},enumerable:!0},{key:"childContextTypes",value:{resolver:l["default"].PropTypes.object},enumerable:!0}]),r}(l["default"].Component);r["default"]=g,e.exports=r["default"]},function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=t(2),s=o(n),u=t(5),a=o(u),p=function(e,r){return s["default"].createElement(a["default"],{Component:e,routerProps:r})};r["default"]=p,e.exports=r["default"]},function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),p=function(e,r,t){for(var o=!0;o;){var n=e,s=r,u=t;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,s);if(void 0!==a){if("value"in a)return a.value;var p=a.get;if(void 0===p)return;return p.call(u)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,r=s,t=u,o=!0,a=i=void 0}},i=t(2),l=o(i),c=function(e,r){var t=r.components,o=r.responses,n=t.indexOf(e);return o[n]},f=function(e){function r(){n(this,r),p(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return s(r,e),a(r,[{key:"render",value:function(){var e=this.props,r=e.Component,t=e.routerProps,o=this.context.resolver.componentsResponses,n=c(r,o);return r.resolve&&void 0===n?null:l["default"].createElement(r,u({},t,{response:n}))}}],[{key:"propTypes",value:{Component:l["default"].PropTypes.func.isRequired,routerProps:l["default"].PropTypes.object.isRequired},enumerable:!0},{key:"contextTypes",value:{resolver:l["default"].PropTypes.object.isRequired},enumerable:!0}]),r}(l["default"].Component);r["default"]=f,e.exports=r["default"]}])});