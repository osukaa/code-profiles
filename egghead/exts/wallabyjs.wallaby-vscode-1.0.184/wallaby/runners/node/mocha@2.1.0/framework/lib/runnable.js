/*
 * Wallaby.js - v1.0.869
 * https://wallabyjs.com
 * Copyright (c) 2014-2020 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
function Runnable(e,t){this.title=e,this.fn=t,this.async=t&&t.length,this.sync=!this.async,this._timeout=2e3,this._slow=75,this._enableTimeouts=!0,this.timedOut=!1,this._trace=new Error("done() called multiple times")}var EventEmitter=require("events").EventEmitter,debug=require("debug")("mocha:runnable"),milliseconds=require("./ms"),utils=require("./utils"),Date=global.Date,setTimeout=global.setTimeout,setInterval=global.setInterval,clearTimeout=global.clearTimeout,clearInterval=global.clearInterval,toString=Object.prototype.toString;module.exports=Runnable,Runnable.prototype.__proto__=EventEmitter.prototype,Runnable.prototype.timeout=function(e){return 0==arguments.length?this._timeout:(0===e&&(this._enableTimeouts=!1),"string"==typeof e&&(e=milliseconds(e)),debug("timeout %d",e),this._timeout=e,this.timer&&this.resetTimeout(),this)},Runnable.prototype.slow=function(e){return 0===arguments.length?this._slow:("string"==typeof e&&(e=milliseconds(e)),debug("timeout %d",e),this._slow=e,this)},Runnable.prototype.enableTimeouts=function(e){return 0===arguments.length?this._enableTimeouts:(debug("enableTimeouts %s",e),this._enableTimeouts=e,this)},Runnable.prototype.fullTitle=function(){return this.parent.fullTitle()+" "+this.title},Runnable.prototype.clearTimeout=function(){clearTimeout(this.timer)},Runnable.prototype.inspect=function(){return JSON.stringify(this,function(e,t){if("_"!=e[0])return"parent"==e?"#<Suite>":"ctx"==e?"#<Context>":t},2)},Runnable.prototype.resetTimeout=function(){var e=this,t=this.timeout()||1e9;this._enableTimeouts&&(this.clearTimeout(),this.timer=setTimeout(function(){e._enableTimeouts&&(e.callback(new Error("timeout of "+t+"ms exceeded")),e.timedOut=!0)},t))},Runnable.prototype.globals=function(e){this._allowedGlobals=e},Runnable.prototype.run=function(e){function t(e){o||(o=!0,s.emit("error",e||new Error("done() called multiple times; stacktrace may be inaccurate")))}function n(n){var r=s.timeout();if(!s.timedOut){if(i)return t(n||s._trace);s.clearTimeout(),s.duration=new Date-a,i=!0,!n&&s.duration>r&&s._enableTimeouts&&(n=new Error("timeout of "+r+"ms exceeded")),e(n)}}function r(e){var t=e.call(l);t&&"function"==typeof t.then?(s.resetTimeout(),t.then(function(){n()},function(e){n(e||new Error("Promise rejected with no or falsy reason"))})):n()}var i,o,s=this,a=new Date,l=this.ctx;if(l&&l.runnable&&l.runnable(this),this.callback=n,this.async){this.resetTimeout();try{this.fn.call(l,function(e){return e instanceof Error||"[object Error]"===toString.call(e)?n(e):null!=e?n("[object Object]"===Object.prototype.toString.call(e)?new Error("done() invoked with non-Error: "+JSON.stringify(e)):new Error("done() invoked with non-Error: "+e)):void n()})}catch(c){n(utils.getError(c))}}else{if(this.asyncOnly)return n(new Error("--async-only option in use without declaring `done()`"));try{this.pending?n():r(this.fn)}catch(c){n(utils.getError(c))}}};