!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue"),require("element-ui")):"function"==typeof define&&define.amd?define(["vue","element-ui"],e):(t=t||self).VueLogics=e(t.Vue,t.ElementUI)}(this,(function(t,e){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?d(t):e}function u(t){return function(){var e,n=s(t);if(l()){var i=s(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return p(this,e)}}function f(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function h(t,e,n,i){n&&Object.defineProperty(t,e,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}function v(t,e,n,i,o){var r={};return Object.keys(i).forEach((function(t){r[t]=i[t]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce((function(n,i){return i(t,e,n)||n}),r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}
/*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
/*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
function m(t){return!0==(null!=(e=t)&&"object"==typeof e&&!1===Array.isArray(e))&&"[object Object]"===Object.prototype.toString.call(t);var e}function y(t){var e,n;return!1!==m(t)&&("function"==typeof(e=t.constructor)&&(!1!==m(n=e.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")))}
/**
    * vue-class-component v7.2.3
    * (c) 2015-present Evan You
    * @license MIT
    */function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function _(t,e){E(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){E(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){E(t,e,n)}))}function E(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(i){var o=n?Reflect.getOwnMetadata(i,e,n):Reflect.getOwnMetadata(i,e);n?Reflect.defineMetadata(i,o,t,n):Reflect.defineMetadata(i,o,t)}))}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var C={__proto__:[]}instanceof Array;function O(t){"undefined"!=typeof console&&console.warn("[vue-class-component] "+t)}function L(e,n){var i=n.prototype._init;n.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var i in e.$options.props)e.hasOwnProperty(i)||n.push(i);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var o=new n;n.prototype._init=i;var r={};return Object.keys(o).forEach((function(t){void 0!==o[t]&&(r[t]=o[t])})),"production"!==process.env.NODE_ENV&&!(n.prototype instanceof t)&&Object.keys(r).length>0&&O("Component class must inherit Vue or its descendant class when class property is used."),r}var D=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function R(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.name=n.name||e._componentTag||e.name;var i=e.prototype;Object.getOwnPropertyNames(i).forEach((function(t){if("constructor"!==t)if(D.indexOf(t)>-1)n[t]=i[t];else{var e=Object.getOwnPropertyDescriptor(i,t);void 0!==e.value?"function"==typeof e.value?(n.methods||(n.methods={}))[t]=e.value:(n.mixins||(n.mixins=[])).push({data:function(){return w({},t,e.value)}}):(e.get||e.set)&&((n.computed||(n.computed={}))[t]={get:e.get,set:e.set})}})),(n.mixins||(n.mixins=[])).push({data:function(){return L(this,e)}});var o=e.__decorators__;o&&(o.forEach((function(t){return t(n)})),delete e.__decorators__);var r=Object.getPrototypeOf(e.prototype),a=r instanceof t?r.constructor:t,s=a.extend(n);return T(s,e,a),x()&&_(s,e),s}var S=["cid","super","options","superOptions","extendOptions","sealedOptions","component","directive","filter"],B={prototype:!0,arguments:!0,callee:!0,caller:!0};function T(t,e,n){Object.getOwnPropertyNames(e).forEach((function(i){if(!B[i]){var o=Object.getOwnPropertyDescriptor(t,i);if(!o||o.configurable){var r,a,s=Object.getOwnPropertyDescriptor(e,i);if(!C){if("cid"===i)return;var c=Object.getOwnPropertyDescriptor(n,i);if(r=s.value,a=b(r),null!=r&&("object"===a||"function"===a)&&c&&c.value===s.value)return}"production"!==process.env.NODE_ENV&&S.indexOf(i)>=0&&O("Static property name '".concat(i,"' declared on class '").concat(e.name,"' ")+"conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property."),Object.defineProperty(t,i,s)}}}))}function j(t){return"function"==typeof t?R(t):function(e){return R(e,t)}}j.registerHooks=function(t){D.push.apply(D,k(t))};var P="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function A(t){return void 0===t&&(t={}),function(e,n){var i;!function(t,e,n){if(P&&!Array.isArray(t)&&"function"!=typeof t&&void 0===t.type){var i=Reflect.getMetadata("design:type",e,n);i!==Object&&(t.type=i)}}(t,e,n),(i=function(e,n){(e.props||(e.props={}))[n]=t},function(t,e,n){var o="function"==typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(t){return i(t,e,n)}))})(e,n)}}var X=function t(e,n){var o=this;i(this,t),this.blockElement=void 0,this.node=void 0,this.window=void 0,this.document=void 0,this.html=function(t){return void 0!==t&&(o.node.innerHTML=t),o.node.innerHTML},this.position=function(){var t=o.node.getBoundingClientRect(),e=t.top,n=t.left;return{top:e+o.window.scrollY,left:n+o.window.scrollX}},this.styles=function(t){return Object.assign(o.node.style,t)},this.remove=function(){o.node.remove()},this.blockElement=e,this.node=n,this.window=e.window,this.document=e.document};X.find=function(t){var e=t.window.document.querySelector(".arrowid[value='".concat(t.id,"']"));return null!==e?new X(t,e.parentNode):null};var Y=function t(e,n,o){var r=this,a=o.window;i(this,t),this.id=void 0,this.node=void 0,this.window=void 0,this.position=function(){var t=r.node.getBoundingClientRect(),e=t.top,n=t.left,i=r.window.getComputedStyle(r.node),o=i.height,a=i.width;return{top:e+r.window.scrollY,left:n+r.window.scrollX,height:o?parseInt(o,10):0,width:a?parseInt(a,10):0}},this.styles=function(t){return Object.assign(r.node.style,t)},this.arrow=function(){return X.find(r)},this.id=parseInt(e,10),this.node=n,this.window=a};Y.find=function(t,e){var n=e.window,i=n.document.querySelector(".blockid[value='".concat(t,"']"));return null!==i?new Y(t,i.parentNode,{window:n}):null},Y.fromElement=function(t,e){var n=e.window,i=t.querySelector(".blockid");return null!==i?new Y(parseInt(i.value,10),t,{window:n}):null};var M,N=function t(e){var n=this,o=e.parent,r=e.childWidth,a=e.id,s=e.x,c=e.y,l=e.width,d=e.height;i(this,t),this.parent=void 0,this.childWidth=void 0,this.id=void 0,this.x=void 0,this.y=void 0,this.width=void 0,this.height=void 0,this.maxWidth=function(){return Math.max(n.childWidth,n.width)},Object.assign(this,{parent:o,childWidth:r,id:a,x:s,y:c,width:l,height:d})},I=function t(e){var n=this,o=e.window,r=e.document,a=e.node,s=e.spacingX,c=void 0===s?20:s,l=e.spacingY,d=void 0===l?80:l;i(this,t),this.window=void 0,this.document=void 0,this.node=void 0,this.spacingX=void 0,this.spacingY=void 0,this.state=void 0,this.blocks=void 0,this.isInitialized=void 0,this.isDragging=void 0,this.isDraggingBlock=void 0,this.isRearranging=void 0,this.isLastEvent=void 0,this.grabbedNode=void 0,this.draggedElement=void 0,this.draggedTree=void 0,this.initialize=function(){n.isInitialized||(n.isInitialized=!0,n.reset())},this.position=function(){var t=n.node.getBoundingClientRect(),e=t.top,i=t.left;return{top:e+n.window.scrollY,left:i+n.window.scrollX,scrollTop:n.node.scrollTop,scrollLeft:n.node.scrollLeft}},this.html=function(t){return void 0!==t&&(n.node.innerHTML=t),n.node.innerHTML},this.appendHtml=function(t){return n.node.innerHTML+=t},this.appendChild=function(){for(var t=arguments,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=t[o];i.forEach((function(t){return n.node.appendChild(t)}))},this.findBlockElement=function(t){return Y.find(t,{window:n.window})},this.import=function(t){var e=t.html,i=t.blockarr;n.html(e),n.replaceBlocks(i)},this.pageX=function(t){return"logics-sidebar"!==t.id?t.offsetLeft+n.pageX(t.offsetParent):t.offsetLeft},this.pageY=function(t){return"logics-sidebar"!==t.id?t.offsetTop+n.pageY(t.offsetParent):t.offsetTop},this.grab=function(t){var e=n.state,i=e.mouseX,o=e.mouseY,r=t.cloneNode(!0),a=n.nextBlockID();if(r.classList.remove("create-flowy"),r.innerHTML+="<input type='hidden' name='blockid' class='blockid' value='".concat(a,"'>"),n.document.getElementById("logics-temp-area").appendChild(r),n.grabbedNode=t,n.registerDragger(r),i&&o){var s=n.setState({dragX:i-n.pageX(t),dragY:o-n.pageY(t)}),c=s.dragX,l=s.dragY;n.draggedElement.styles({left:"".concat(i-c,"px"),top:"".concat(o-l,"px")})}return n.toggleDragger(!0),r},this.registerDragger=function(t){n.draggedElement=Y.fromElement(t,{window:n.window})},this.toggleDragger=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.remove,o=void 0!==i&&i,r=n.draggedElement;r&&n.grabbedNode&&(t?(n.grabbedNode.classList.add("dragnow"),r.node.classList.add("dragging"),r.node.classList.add("block")):(n.grabbedNode.classList.remove("dragnow"),r.node.classList.remove("dragging"),o&&r.node.remove()))},this.nextBlockID=function(){return 0===n.blocks.length?0:Math.max.apply(Math,f(n.blocks.map((function(t){return t.id}))))+1},this.addBlockForElement=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.parent,o=void 0===i?-1:i,r=e.childWidth,a=void 0===r?0:r,s=n.position(),c=s.scrollLeft,l=s.scrollTop;n.blocks.push(new N({parent:o,childWidth:a,id:t.id,x:t.position().left+t.position().width/2+c,y:t.position().top+t.position().height/2+l,width:t.position().width,height:t.position().height}))},this.findBlock=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.tree,o=void 0!==i&&i;return(o?n.draggedTree:n.blocks).find((function(e){return e.id===t}))},this.replaceBlocks=function(t){var e;return(e=n.blocks).splice.apply(e,[0,n.blocks.length].concat(f(t)))},this.appendBlocks=function(t){var e;return(e=n.blocks).push.apply(e,f(t))},this.removeBlock=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.removeArrow,o=void 0!==i&&i;if(n.replaceBlocks(n.blocks.filter((function(e){return e.id!==t.id}))),o){var r=n.findBlockElement(t.id);if(r){var a=r.arrow();a&&a.remove()}}},this.findChildBlocks=function(t){return n.blocks.filter((function(e){return e.parent===t}))},this.output=function(){var t=n.blocks;return 0===t.length?null:{html:n.html(),blockarr:t.slice(),blocks:t.map((function(t){var e=t.id,i=t.parent,o=n.findBlockElement(e).node;return{id:e,parent:i,data:f(o.querySelectorAll("input")).map((function(t){return{name:t.name,value:t.value}})),attr:f(o.attributes).map((function(t){return{name:t.name,value:t.value}}))}}))}},this.reset=function(){n.html('<div class="indicator invisible"></div>'),n.blocks.splice(0)},this.groupDraggedTree=function(){var t=n.draggedElement,e=t.position(),i=e.top,o=e.left,r=n.findBlock(t.id);n.draggedTree.push(r),n.removeBlock(r,{removeArrow:!0});var a=n.findChildBlocks(r.id),s=a,c=[],l=function(){var e=s.map((function(t){return t.id}));s.forEach((function(e){n.draggedTree.push(e);var r=n.findBlockElement(e.id),a=r.arrow();r.styles({left:"".concat(r.position().left-o,"px"),top:"".concat(r.position().top-i,"px")}),a.styles({left:"".concat(a.position().left-o,"px"),top:"".concat(a.position().top-i,"px")}),t.node.appendChild(r.node),t.node.appendChild(a.node)})),c.push.apply(c,f(s)),s=n.blocks.filter((function(t){var n=t.parent;return e.includes(n)}))};do{l()}while(s.length);a.forEach((function(t){return n.removeBlock(t)})),c.forEach((function(t){return n.removeBlock(t)}))},this.ungroupDraggedTree=function(){var t=n.draggedElement;n.draggedTree.forEach((function(e){if(e.id!==t.id){var i=n.findBlockElement(e.id),o=i.arrow(),r=n.position(),a=r.left,s=r.top,c=r.scrollLeft,l=r.scrollTop;i.styles({left:"".concat(i.position().left-a+c,"px"),top:"".concat(i.position().top-s+l,"px")}),o.styles({left:"".concat(o.position().left-a+c,"px"),top:"".concat(o.position().top-(s+l),"px")}),n.appendChild(i.node,o.node),e.x=i.position().left+i.node.offsetWidth/2+c,e.y=i.position().top+i.node.offsetHeight/2+l}}));var e=n.draggedTree.find((function(t){return 0===t.id}));e&&(e.x=t.position().left+t.position().width/2,e.y=t.position().top+t.position().height/2),n.appendBlocks(n.draggedTree),n.draggedTree.splice(0)},this.inSnapZoneFor=function(t){var e=t.x,i=t.y,o=t.width,r=t.height,a=n.draggedElement.position(),s=a.left,c=a.top,l=a.width,d=n.position(),p=s+l/2+d.scrollLeft,u=c+d.scrollTop;return p>=e-o/2-n.spacingX&&p<=e+o/2+n.spacingX&&u>=i-r/2&&u<=i+r},this.inDropZone=function(){var t=n.draggedElement.position(),e=t.top,i=t.left;return e>n.position().top&&i>n.position().left},this.drop=function(){var t=n.draggedElement,e=n.position(),i=e.top,o=e.left,r=e.scrollTop,a=e.scrollLeft;t.styles({top:"".concat(t.position().top-i+r,"px"),left:"".concat(t.position().left-o+a,"px")}),n.appendChild(t.node),n.addBlockForElement(t)},this.cancelDrop=function(){n.appendChild(n.indicator()),n.toggleDragger(!1,{remove:!0})},this.indicator=function(){return n.document.querySelector(".indicator")},this.showIndicator=function(t,e){var i=n.indicator();if(i)if(t){if(e){var o=n.findBlockElement(e.id);o.node.appendChild(i),i.style.left="".concat(n.draggedElement.position().width/2-5,"px"),i.style.top="".concat(o.position().height,"px")}i.classList.remove("invisible")}else i.classList.contains("invisible")||i.classList.add("invisible")},this.updateDragPosition=function(){var t=n.state,e=t.mouseX,i=t.mouseY,o=t.dragX,r=t.dragY;e&&i&&o&&r&&n.draggedElement.styles({left:e<o?"0px":"".concat(e-o,"px"),top:i<r?"0px":"".concat(i-r,"px")})},this.updateRearrangePosition=function(){var t=n.state,e=t.mouseX,i=t.mouseY,o=t.dragX,r=t.dragY,a=n.position(),s=a.left,c=a.top,l=a.scrollLeft,d=a.scrollTop;e&&i&&o&&r&&n.draggedElement.styles({left:e-o-s+l<0?"0px":"".concat(e-o-s+l,"px"),top:i-r-c+d<0?"0px":"".concat(i-r-c+d,"px")})},this.setState=function(t){return Object.assign(n.state,t)},this.getState=function(t){return n.state[t]},this.toggleDragging=function(t){return n.isDragging=t},this.toggleDraggingBlock=function(t){return n.isDraggingBlock=t},this.toggleRearranging=function(t){return n.isRearranging=t},this.toggleLastEvent=function(t){return n.isLastEvent=t},this.window=o,this.document=r,this.node=a,this.spacingX=c,this.spacingY=d,this.state={mouseX:0,mouseY:0,dragX:0,dragY:0,currentOffsetLeft:0,previousOffsetLeft:0},this.blocks=[],this.isInitialized=!1,this.isDragging=!1,this.isDraggingBlock=!1,this.isRearranging=!1,this.isLastEvent=!1,this.grabbedNode=null,this.draggedElement=null,this.draggedTree=[]},W=!1,z=function t(e,n,o,r,a,s){var c=this;i(this,t),this.id=void 0,this.node=void 0,this.window=void 0,this.onGrab=void 0,this.onRelease=void 0,this.onSnap=void 0,this.import=void 0,this.output=void 0,this.deleteBlocks=void 0,this.engine=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,r=c;if(c.onGrab=n,c.onRelease=i,c.onSnap=o,!W){W=!0,e.initialize(),e.setState({currentOffsetLeft:0,previousOffsetLeft:0}),c.import=e.import,c.output=e.output,c.deleteBlocks=e.reset;var a=function(t){var n=t.targetTouches?t.targetTouches[0]:t,i=n.clientX,o=n.clientY;return e.setState({mouseX:i,mouseY:o})};t.addEventListener("mousedown",l,!1),t.addEventListener("touchstart",l,!1),t.addEventListener("mousedown",d),t.addEventListener("touchstart",d),t.addEventListener("mouseup",v,!1),t.addEventListener("mouseup",h,!1),t.addEventListener("touchend",h,!1),t.addEventListener("mousemove",y,!1),t.addEventListener("touchmove",y,!1)}function s(t,e){return!!(t.className&&t.className.split(" ").indexOf(e)>=0)||t.parentNode&&s(t.parentNode,e)}function l(t){if(e.toggleDraggingBlock(!1),s(t.target,"block")){var n=t.target.closest(".block"),i=a(t),o=i.mouseX,r=i.mouseY;if("mouseup"!==t.type&&s(t.target,"block")&&3!==t.which&&!e.isDragging&&!e.isRearranging){e.toggleDraggingBlock(!0),e.registerDragger(n);var c=e.draggedElement;o&&r&&e.setState({dragX:o-c.position().left,dragY:r-c.position().top})}}}function d(t){a(t);var n=t.target,i=t.which,o=n.closest(".create-flowy");3!==i&&null!==o&&(e.grab(o),e.toggleDragging(!0),r.onGrab&&r.onGrab(o))}function p(){for(var t=e.blocks.map((function(t){return t.parent})),n=function(n){-1===t[n]&&(n+=1);var o=0,r=e.findBlock(t[n]),a=e.findChildBlocks(t[n]),s=a.reduce((function(t,o,r){0===e.findChildBlocks(o.id).length&&(o.childWidth=0);var a=t;return 0!==r&&(a+=e.spacingX),i=n,a+o.maxWidth()}),0);-1!==t[n]&&(r.childWidth=s);var c=e.position(),l=c.left,d=c.top;a.forEach((function(t){var n=e.findBlockElement(t.id),i=n.arrow();t.childWidth>t.width?n.styles({left:"".concat(r.x-s/2+o+t.childWidth/2-t.width/2-l,"px")}):n.styles({left:"".concat(r.x-s/2+o-l,"px")}),t.x=r.x-s/2+o+t.maxWidth()/2,o+=t.maxWidth()+e.spacingX;var a=e.findBlock(t.parent),c=a.x,p=a.y,u=a.height,f=e.blocks.find((function(e){return e.id===t.id})),g=f.x,h=g-c+20,v=f.y-f.height/2-(p+u/2);i.styles({top:"".concat(p+u/2-d,"px")}),h<0?(i.styles({left:"".concat(g-5-l,"px")}),i.html('\n              <input type="hidden" class="arrowid" value="'.concat(t.id,'">\n              <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="\n                  M ').concat(c-g+5," 0\n                  L ").concat(a.x-g+5," ").concat(e.spacingY/2,"\n                  L 5 ").concat(e.spacingY/2,"\n                  L 5 ").concat(v,'" stroke="#C5CCD0" stroke-width="2px"/>\n                <path d="\n                  M 0 ').concat(v-5,"\n                  H 10\n                  L 5 ").concat(v,"\n                  L 0 ").concat(v-5,'\n                  Z" fill="#C5CCD0"/>\n              </svg>\n            '))):(i.styles({left:"".concat(c-20-l,"px")}),i.html('\n              <input type="hidden" class="arrowid" value="'.concat(t.id,'">\n              <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="\n                  M 20 0\n                  L 20 ').concat(e.spacingY/2,"\n                  L ").concat(h," ").concat(e.spacingY/2,"\n                  L ").concat(h," ").concat(v,'" stroke="#C5CCD0" stroke-width="2px"/>\n                <path d="\n                  M ').concat(h-5," ").concat(v-5,"\n                  H ").concat(h+5,"\n                  L ").concat(h," ").concat(v,"\n                  L ").concat(h-5," ").concat(v-5,'\n                  Z" fill="#C5CCD0"/>\n              </svg>\n            ')))})),i=n},i=0;i<t.length;i+=1)n(i)}function u(){var t=e.blocks.map((function(t){return t.width})),n=Math.min.apply(Math,f(e.blocks.map((function(e,n){return e.x-t[n]/2}))));e.setState({currentOffsetLeft:n}),n<e.position().left&&(e.toggleLastEvent(!0),e.blocks.forEach((function(t){var i=t.id,o=t.x,r=t.width,a=t.parent,s=e.findBlockElement(i);if(s.styles({left:"".concat(o-r/2-n+20,"px")}),-1!==a){var c=s.arrow(),l=e.blocks.find((function(t){return t.id===a})).x,d=o-l;c.styles({left:"".concat(d<0?o-n+20-5:l-20-n+20,"px")})}})),e.blocks.forEach((function(t){var n=e.findBlockElement(t.id);t.x=n.position().left+(e.position().left+e.position().scrollLeft)-e.draggedElement.position().width/2-40})),e.setState({previousOffsetLeft:n}))}function g(t){var n=e.draggedElement;e.isRearranging||e.appendChild(n.node);var i=0,o=e.findChildBlocks(t.id),r=o.reduce((function(t,n){return t+(0,n.maxWidth)()+e.spacingX}),e.draggedElement.position().width);o.forEach((function(n){var o=n.id,a=n.childWidth,s=n.width,c=n.maxWidth,l=e.findBlockElement(o),d=t.x-r/2+i;n.x=d+c()/2+200,i+=c()+e.spacingX,a>s&&(d+=a/2-s/2),l&&l.styles({left:"".concat(d,"px")})}));var a=e.position(),s=a.top,c=a.left,l=a.scrollTop,d=a.scrollLeft;if(e.draggedElement.styles({left:"".concat(t.x-r/2+i-c+d,"px"),top:"".concat(t.y+t.height/2+e.spacingY-s,"px")}),e.isRearranging){var f=n.position(),g=f.height,h=f.width,v=e.findBlock(n.id,{tree:!0});v&&(v.x=n.position().left+h/2+2*d,v.y=n.position().top+g/2+l,v.parent=t.id),e.draggedTree.forEach((function(t){if(t.id!==n.id){var i=e.findBlockElement(t.id),o=i.arrow(),r=i.node,a=o.node;i.styles({left:"".concat(i.position().left-c+d,"px"),top:"".concat(i.position().top-s+l,"px")}),o.styles({left:"".concat(o.position().left-c+d+20,"px"),top:"".concat(o.position().top-s+l,"px")}),e.appendChild(r,a),t.x=i.position().left+h/2+d,t.y=i.position().top+g/2+l}})),e.appendBlocks(e.draggedTree),e.draggedTree.splice(0)}else e.addBlockForElement(n,{parent:t.id});var m=e.findBlock(n.id),y=m.x,b=m.y,w=m.height,k=y-t.x+20,x=parseFloat("".concat(b-w/2-(e.blocks.find((function(e){return e.parent===t.id})).y+e.blocks.find((function(e){return e.parent===t.id})).height/2)+l));k<0?(e.appendHtml('\n          <div class="arrowblock">\n            <input type="hidden" class="arrowid" value="'.concat(n.id,'">\n            <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="\n                M ').concat(t.x-y+5," 0\n                L ").concat(t.x-y+5," ").concat(e.spacingY/2,"\n                L 5 ").concat(e.spacingY/2,"\n                L 5 ").concat(x,'" stroke="#C5CCD0" stroke-width="2px"/>\n              <path d="\n                M 0 ').concat(x-5,"\n                H 10\n                L 5 ").concat(x,"\n                L 0 ").concat(x-5,'\n                Z" fill="#C5CCD0"/>\n            </svg>\n          </div>\n        ')),n.arrow().styles({left:"".concat(y-5-c+d,"px")})):(e.appendHtml('\n          <div class="arrowblock">\n            <input type="hidden" class="arrowid" value="'.concat(n.id,'">\n            <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="\n                M 20 0\n                L 20 ').concat(e.spacingY/2,"\n                L ").concat(k," ").concat(e.spacingY/2,"\n                L ").concat(k," ").concat(x,'" stroke="#C5CCD0" stroke-width="2px"/>\n              <path d="\n                M ').concat(k-5," ").concat(x-5,"\n                H ").concat(k+5,"\n                L ").concat(k," ").concat(x,"\n                L ").concat(k-5," ").concat(x-5,'\n                Z" fill="#C5CCD0"/>\n            </svg>\n          </div>\n        ')),n.arrow().styles({left:"".concat(t.x-20-c+d,"px")})),n.arrow().styles({top:"".concat(t.y+t.height/2,"px")}),-1!==t.parent&&function(){var n=t;do{var i=e.blocks.filter((function(t){return t.parent===n.id}));n.childWidth=i.reduce((function(t,n,i){var o=n.maxWidth,r=t;return 0!==i&&(r+=e.spacingX),r+o()}),0),n=e.blocks.find((function(t){return t.id===n.parent}))}while(-1!==n.parent);n.childWidth=r}(),e.isRearranging&&(e.toggleRearranging(!1),e.toggleDragger(!1)),p(),u()}function h(t){if(3!==t.which&&(e.isDragging||e.isRearranging)){e.toggleDraggingBlock(!1),r.onRelease&&r.onRelease(),e.showIndicator(!1);var n=e.draggedElement;if(e.isDragging&&e.toggleDragger(!1),0===n.id&&e.isRearranging)e.toggleDragger(!1),e.toggleRearranging(!1),e.ungroupDraggedTree();else if(e.isDragging&&0===e.blocks.length)e.inDropZone()?(r.onSnap&&r.onSnap(n.node,!0,void 0),e.toggleDragging(!1),e.drop()):e.cancelDrop();else if(e.isDragging||e.isRearranging){e.blocks.find((function(t){return!!e.inSnapZoneFor(t)&&(e.toggleDragging(!1),e.isRearranging||r.onSnap&&r.onSnap(n.node,!1,t),g(t),!0)}))||(e.isRearranging&&(e.toggleRearranging(!1),e.draggedTree.splice(0)),e.toggleDragging(!1),e.cancelDrop())}}}function v(){e.toggleDraggingBlock(!1)}function m(){var t=e.state.previousOffsetLeft;if(t){if(t>=e.position().left)return;e.toggleLastEvent(!1),e.blocks.forEach((function(n){var i=n.id,o=n.x,r=n.width,a=n.parent,s=e.findBlockElement(i),c=s.arrow();if(s.styles({left:"".concat(o-r/2-t-20,"px")}),n.x=s.position().left+r/2,-1!==a){var l=e.blocks.find((function(t){return t.id===a})).x,d=o-l;c.styles({left:"".concat(d<0?o-5-e.position().left:l-20-e.position().left,"px")})}})),e.setState({previousOffsetLeft:0})}}function y(t){(a(t),e.isDraggingBlock&&(e.toggleRearranging(!0),e.toggleDragger(!0),e.groupDraggedTree(),e.blocks.length>1&&p(),e.isLastEvent&&m(),e.toggleDraggingBlock(!1)),e.isDragging?e.updateDragPosition():e.isRearranging&&e.updateRearrangePosition(),e.isDragging||e.isRearranging)&&(e.blocks.find((function(t){return!!e.inSnapZoneFor(t)&&(e.showIndicator(!0,t),!0)}))||e.showIndicator(!1))}},this.engine(document,new I({spacingX:a,spacingY:s,window:window,document:document,node:e}),n,o,r)};function F(t,e,n,i,o,r,a,s,c,l){"boolean"!=typeof a&&(c=s,s=a,a=!1);var d,p="function"==typeof n?n.options:n;if(t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=d):e&&(d=a?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),d)if(p.functional){var u=p.render;p.render=function(t,e){return d.call(e),u(t,e)}}else{var f=p.beforeCreate;p.beforeCreate=f?[].concat(f,d):[d]}return n}var H=j({components:{"el-col":e.Col,"el-row":e.Row}})(M=function(t){a(n,t);var e=u(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(t))||M,$=function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"handle"},[e("el-col",[e("div",{staticClass:"blockelem create-flowy"},[e("div",{staticClass:"blockin"},[this._t("icon",[e("i",{staticClass:"blockico el-icon-menu"})]),this._v(" "),e("div",{staticClass:"blocktext"},[this._t("title",[e("div",{staticClass:"blocktitle"},[this._v("New visitor")])]),this._v(" "),this._t("desc",[e("div",{staticClass:"blockdesc"},[this._v("Actions when somebody visits a specified page")])])],2)],2)])])],1)};$._withStripped=!0;var V,Z=F({render:$,staticRenderFns:[]},void 0,H,void 0,!1,void 0,!1,void 0,void 0,void 0),q=j({components:{"el-col":e.Col,"el-row":e.Row}})(V=function(t){a(n,t);var e=u(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(t))||V,U=function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"handle"},[e("el-col",[e("div",{staticClass:"blockelem create-flowy"},[e("div",{staticClass:"blockin"},[this._t("icon",[e("i",{staticClass:"blockico el-icon-menu"})]),this._v(" "),e("div",{staticClass:"blocktext"},[this._t("title",[e("div",{staticClass:"blocktitle"},[this._v("New visitor")])]),this._v(" "),this._t("desc",[e("div",{staticClass:"blockdesc"},[this._v("Conditions when somebody visits a specified page")])])],2)],2)])])],1)};U._withStripped=!0;var G,K=F({render:U,staticRenderFns:[]},void 0,q,void 0,!1,void 0,!1,void 0,void 0,void 0),J=j({components:{"el-col":e.Col,"el-row":e.Row}})(G=function(t){a(n,t);var e=u(n);function n(){return i(this,n),e.apply(this,arguments)}return n}(t))||G,Q=function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"handle"},[e("el-col",[e("div",{staticClass:"blockelem create-flowy"},[e("div",{staticClass:"blockin"},[this._t("icon",[e("i",{staticClass:"blockico el-icon-menu"})]),this._v(" "),e("div",{staticClass:"blocktext"},[this._t("title",[e("div",{staticClass:"blocktitle"},[this._v("New visitor")])]),this._v(" "),this._t("desc",[e("div",{staticClass:"blockdesc"},[this._v("Triggers when somebody visits a specified page")])])],2)],2)])])],1)};Q._withStripped=!0;var tt,et=j({components:{Action:Z,Condition:K,Trigger:F({render:Q,staticRenderFns:[]},void 0,J,void 0,!1,void 0,!1,void 0,void 0,void 0),"el-tabs":e.Tabs,"el-tab-pane":e.TabPane}})(tt=function(t){a(n,t);var e=u(n);function n(){var t,o=arguments;i(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=o[s];return(t=e.call.apply(e,[this].concat(a))).flowy=void 0,t}return r(n,[{key:"onSnap",value:function(t,e,n){return!0}},{key:"mounted",value:function(){!0!==window.VueLogicsTest&&(this.flowy=new z(document.getElementById("logics-canvas"),void 0,void 0,this.onSnap,40,40))}}]),n}(t))||tt,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-tabs",{attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"Triggers"}},[n("trigger",[n("template",{slot:"icon"},[n("i",{staticClass:"blockico el-icon-user-solid"})]),t._v(" "),n("template",{slot:"title"},[n("div",{staticClass:"blocktitle"},[t._v("New visitor")])])],2),t._v(" "),n("trigger",[n("template",{slot:"icon"},[n("i",{staticClass:"blockico el-icon-s-promotion"})]),t._v(" "),n("template",{slot:"title"},[n("div",{staticClass:"blocktitle"},[t._v("Action is performed")])])],2)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"Actions"}},[n("action",[n("template",{slot:"icon"},[n("i",{staticClass:"blockico el-icon-document-add"})]),t._v(" "),n("template",{slot:"title"},[n("div",{staticClass:"blocktitle"},[t._v("Clone the webpage")])])],2)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"Conditions"}},[n("action",[n("template",{slot:"icon"},[n("i",{staticClass:"blockico el-icon-check"})]),t._v(" "),n("template",{slot:"title"},[n("div",{staticClass:"blocktitle"},[t._v("If it's true")])])],2)],1)],1)],1)};nt._withStripped=!0;var it,ot,rt,at,st,ct,lt,dt=(it=j({name:"vue-logics-view",components:{Sidebar:F({render:nt,staticRenderFns:[]},void 0,et,void 0,!1,void 0,!1,void 0,void 0,void 0)}}),ot=A({default:"740px"}),rt=A({default:"400px"}),it((ct=v((st=function(t){a(n,t);var e=u(n);function n(){var t,o=arguments;i(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=o[s];return h(t=e.call.apply(e,[this].concat(a)),"width",ct,d(t)),h(t,"height",lt,d(t)),t}return n}(t)).prototype,"width",[ot],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),lt=v(st.prototype,"height",[rt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),at=st))||at),pt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-logics",style:{width:this.width}},[e("sidebar",{ref:"sidebar",attrs:{id:"logics-sidebar"}}),this._v(" "),e("div",{style:{height:this.height},attrs:{id:"logics-container"}},[e("div",{style:{height:this.height},attrs:{id:"logics-canvas"}}),this._v(" "),e("div",{attrs:{id:"logics-temp-area"}})])],1)};pt._withStripped=!0;var ut=F({render:pt,staticRenderFns:[]},void 0,dt,void 0,!1,void 0,!1,void 0,void 0,void 0);return new(function(){function t(){i(this,t),this.defaults=void 0,this.flowy=void 0,this.options=void 0,this.defaults={components:{VueLogics:ut}},this.options=void 0}return r(t,[{key:"install",value:function(t,e){if(t.prototype.$logics=this,this.options=this.defaults,this.extend(e||{}),this.options)for(var n in this.options.components)t.component(n,this.options.components[n])}},{key:"extend",value:function(t){if("object"===n(t))return this.options=this.merge(this.options,t),this;throw new Error("VueFormulate extend() should be passed an object (was ".concat(n(t),")"))}},{key:"merge",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={};for(var o in t)e.hasOwnProperty(o)?y(e[o])&&y(t[o])?i[o]=this.merge(t[o],e[o],n):n&&Array.isArray(t[o])&&Array.isArray(e[o])?i[o]=t[o].concat(e[o]):i[o]=e[o]:i[o]=t[o];for(var r in e)i.hasOwnProperty(r)||(i[r]=e[r]);return i}}]),t}())}));
