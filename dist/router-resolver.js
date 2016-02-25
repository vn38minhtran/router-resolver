!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-router")):"function"==typeof define&&define.amd?define(["react","react-router"],t):"object"==typeof exports?exports.RouterResolver=t(require("react"),require("react-router")):e.RouterResolver=t(e.React,e.ReactRouter)}(this,function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=o(n),u=r(4),a=o(u),p=r(5),i=o(p);t.RouterResolver=s["default"],t.createElement=a["default"],t.RouterResolverContainer=i["default"],t["default"]=s["default"]},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=function(e,t,r){for(var o=!0;o;){var n=e,s=t,u=r;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,s);if(void 0!==a){if("value"in a)return a.value;var p=a.get;if(void 0===p)return;return p.call(u)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,t=s,r=u,o=!0,a=i=void 0}},i=r(2),l=o(i),c=r(3),f=r(4),v=o(f),d=function(e){return e.pathname+e.search+e.hash},y=function(e,t){var r=d(e),o=d(t);return r!==o},m=function(e){var t=[],r=function(e){e.resolve&&t.push(e)};return e.forEach(function(e){if("object"==typeof e)for(var t in e)r(e[t]);else r(e)}),t},h=function(e,t){for(var r=[],o=0;o<t.length;o++)-1===e.indexOf(t[o])&&r.push(t[o]);return r},b=function(e,t){var r=void 0,o=0,n=0;for(r in e){if(e.hasOwnProperty(r)&&e[r]!==t[r])return!1;o++}for(r in t)t.hasOwnProperty(r)&&n++;return o===n},P=function(e){return e[e.length-1]},O=function(e,t){e.components=e.components||[],e.responses=e.responses||[],t.components=t.components||[],t.responses=t.responses||[];for(var r=0;r<t.components.length;r++){var o=t.components[r],n=e.components.indexOf(o);-1===n?(e.components.push(t.components[r]),e.responses.push(t.responses[r])):e.responses[n]=t.responses[r]}return e},g=function(e){function t(){n(this,t),p(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.state={resolving:!1,resolveError:!1,prevProps:null,componentsResponses:null}}return s(t,e),a(t,[{key:"getChildContext",value:function(){return{resolver:{componentsResponses:this.state.componentsResponses}}}},{key:"componentDidMount",value:function(){var e=this.props,t=e.components,r=e.params;this.resolve(t,r)}},{key:"componentWillReceiveProps",value:function(e){if(y(e.location,this.props.location)){var t=m(this.props.components),r=m(e.components),o=h(t,r);if(0!==r.length&&0===o.length){var n=b(t,r);if(n){var s=!b(e.params,this.props.params);s&&(o=[P(r)])}}this.resolve(o,e.params)}}},{key:"resolve",value:function(e,t){var r=this;this.setState({resolving:!0,prevProps:this.props});var o=this.state.componentsResponses||{},n=m(e),s=n.map(function(e){return e.resolve(t)});Promise.all(s).then(function(e){var t={components:n,responses:e};o=O(o,t),r.setState({resolving:!1,resolveError:!1,prevProps:null,componentsResponses:o})},function(e){r.setState({resolving:!1,resolveError:!0}),r.props.onError(e)})}},{key:"render",value:function(){var e=this.state,t=e.componentsResponses,r=e.resolving,o=e.resolveError,n=e.prevProps;if(!t)return this.props.renderInitial();var s=r||o?n:this.props;return s.router.resolving=r,this.props.render(s)}}],[{key:"propTypes",value:{components:l["default"].PropTypes.array.isRequired,params:l["default"].PropTypes.object.isRequired,location:l["default"].PropTypes.object.isRequired,renderInitial:l["default"].PropTypes.func,render:l["default"].PropTypes.func,onError:l["default"].PropTypes.func},enumerable:!0},{key:"defaultProps",value:{renderInitial:function(){return null},render:function(e){return l["default"].createElement(c.RouterContext,u({},e,{createElement:v["default"]}))},onError:function(e){throw e}},enumerable:!0},{key:"childContextTypes",value:{resolver:l["default"].PropTypes.object},enumerable:!0}]),t}(l["default"].Component);t["default"]=g,e.exports=t["default"]},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),s=o(n),u=r(5),a=o(u),p=function(e,t){return s["default"].createElement(a["default"],{Component:e,routerProps:t})};t["default"]=p,e.exports=t["default"]},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=function(e,t,r){for(var o=!0;o;){var n=e,s=t,u=r;o=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,s);if(void 0!==a){if("value"in a)return a.value;var p=a.get;if(void 0===p)return;return p.call(u)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,t=s,r=u,o=!0,a=i=void 0}},i=r(2),l=o(i),c=function(e,t){var r=t.components,o=t.responses,n=r.indexOf(e);return o[n]},f=function(e){function t(){n(this,t),p(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return s(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.routerProps,o=this.context.resolver.componentsResponses,n=c(t,o);return t.resolve&&void 0===n?null:l["default"].createElement(t,u({},r,{response:n}))}}],[{key:"propTypes",value:{Component:l["default"].PropTypes.func.isRequired,routerProps:l["default"].PropTypes.object.isRequired},enumerable:!0},{key:"contextTypes",value:{resolver:l["default"].PropTypes.object.isRequired},enumerable:!0}]),t}(l["default"].Component);t["default"]=f,e.exports=t["default"]}])});