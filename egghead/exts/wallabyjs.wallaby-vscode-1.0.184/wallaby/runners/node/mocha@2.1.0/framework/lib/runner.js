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
function Runner(e){var t=this;this._globals=[],this._abort=!1,this.suite=e,this.total=e.total(),this.failures=0,this.on("test end",function(e){t.checkGlobals(e)}),this.on("hook end",function(e){t.checkGlobals(e)}),this.grep(/.*/),this.globals(this.globalProps().concat(extraGlobals()))}function filterLeaks(e,t){return filter(t,function(t){if(/^d+/.test(t))return!1;if(global.navigator&&/^getInterface/.test(t))return!1;if(global.navigator&&/^\d+/.test(t))return!1;if(/^mocha-/.test(t))return!1;var n=filter(e,function(e){return~e.indexOf("*")?0==t.indexOf(e.split("*")[0]):t==e});return 0==n.length&&(!global.navigator||"onerror"!==t)})}function extraGlobals(){if("object"==typeof process&&"string"==typeof process.version){var e=process.version.split(".").reduce(function(e,t){return e<<8|t});if(e<2315)return["errno"]}return[]}var EventEmitter=require("events").EventEmitter,debug=require("debug")("mocha:runner"),Test=require("./test"),utils=require("./utils"),filter=utils.filter,keys=utils.keys,globals=["setTimeout","clearTimeout","setInterval","clearInterval","XMLHttpRequest","Date","setImmediate","clearImmediate"];module.exports=Runner,Runner.immediately=global.setImmediate||process.nextTick,Runner.prototype.__proto__=EventEmitter.prototype,Runner.prototype.grep=function(e,t){return debug("grep %s",e),this._grep=e,this._invert=t,this.total=this.grepTotal(this.suite),this},Runner.prototype.grepTotal=function(e){var t=this,n=0;return e.eachTest(function(e){var r=t._grep.test(e.fullTitle());t._invert&&(r=!r),r&&n++}),n},Runner.prototype.globalProps=function(){for(var e=utils.keys(global),t=0;t<globals.length;++t)~utils.indexOf(e,globals[t])||e.push(globals[t]);return e},Runner.prototype.globals=function(e){return 0==arguments.length?this._globals:(debug("globals %j",e),this._globals=this._globals.concat(e),this)},Runner.prototype.checkGlobals=function(e){if(!this.ignoreLeaks){var t,n=this._globals,r=this.globalProps();e&&(n=n.concat(e._allowedGlobals||[])),this.prevGlobalsLength!=r.length&&(this.prevGlobalsLength=r.length,t=filterLeaks(n,r),this._globals=this._globals.concat(t),t.length>1?this.fail(e,new Error("global leaks detected: "+t.join(", "))):t.length&&this.fail(e,new Error("global leak detected: "+t[0])))}},Runner.prototype.fail=function(e,t){++this.failures,e.state="failed","string"==typeof t&&(t=new Error('the string "'+t+'" was thrown, throw an Error :)')),this.emit("fail",e,t)},Runner.prototype.failHook=function(e,t){this.fail(e,t),this.suite.bail()&&this.emit("end")},Runner.prototype.hook=function(e,t){function n(e){var r=i[e];return r?(o.currentRunnable=r,r.ctx.currentTest=o.test,o.emit("hook",r),r.on("error",function(e){o.failHook(r,e)}),void r.run(function(i){r.removeAllListeners("error");var s=r.error();return s&&o.fail(o.test,s),i?(o.failHook(r,i),t(i)):(o.emit("hook end",r),delete r.ctx.currentTest,void n(++e))})):t()}var r=this.suite,i=r["_"+e],o=this;Runner.immediately(function(){n(0)})},Runner.prototype.hooks=function(e,t,n){function r(s){return i.suite=s,s?void i.hook(e,function(e){if(e){var s=i.suite;return i.suite=o,n(e,s)}r(t.pop())}):(i.suite=o,n())}var i=this,o=this.suite;r(t.pop())},Runner.prototype.hookUp=function(e,t){var n=[this.suite].concat(this.parents()).reverse();this.hooks(e,n,t)},Runner.prototype.hookDown=function(e,t){var n=[this.suite].concat(this.parents());this.hooks(e,n,t)},Runner.prototype.parents=function(){for(var e=this.suite,t=[];e=e.parent;)t.push(e);return t},Runner.prototype.runTest=function(e){var t=this.test,n=this;this.asyncOnly&&(t.asyncOnly=!0);try{t.on("error",function(e){n.fail(t,e)}),t.run(e)}catch(r){e(r)}},Runner.prototype.runTests=function(e,t){function n(e,r,i){var s=o.suite;o.suite=i?r.parent:r,o.suite?o.hookUp("afterEach",function(e,i){return o.suite=s,e?n(e,i,!0):void t(r)}):(o.suite=s,t(r))}function r(a,l){if(o.failures&&e._bail)return t();if(o._abort)return t();if(a)return n(a,l,!0);if(i=s.shift(),!i)return t();var c=o._grep.test(i.fullTitle());return o._invert&&(c=!c),c?i.pending?(o.emit("pending",i),o.emit("test end",i),r()):(o.emit("test",o.test=i),void o.hookDown("beforeEach",function(e,t){return e?n(e,t,!1):(o.currentRunnable=o.test,void o.runTest(function(e){return i=o.test,e?(o.fail(i,e),o.emit("test end",i),o.hookUp("afterEach",r)):(i.state="passed",o.emit("pass",i),o.emit("test end",i),void o.hookUp("afterEach",r))}))})):r()}var i,o=this,s=e.tests.slice();this.next=r,r()},Runner.prototype.runSuite=function(e,t){function n(t){if(t)return t==e?r():r(t);if(o._abort)return r();var i=e.suites[s++];return i?void o.runSuite(i,n):r()}function r(n){o.suite=e,o.hook("afterAll",function(){o.emit("suite end",e),t(n)})}var i=this.grepTotal(e),o=this,s=0;return debug("run suite %s",e.fullTitle()),i?(this.emit("suite",this.suite=e),void this.hook("beforeAll",function(t){return t?r():void o.runTests(e,n)})):t()},Runner.prototype.uncaught=function(e){e?debug("uncaught exception %s",e!==function(){return this}.call(e)?e:e.message||e):(debug("uncaught undefined exception"),e=utils.undefinedError()),e.uncaught=!0;var t=this.currentRunnable;if(t){var n=t.state;if(this.fail(t,e),t.clearTimeout(),!n)return"test"==t.type?(this.emit("test end",t),void this.hookUp("afterEach",this.next)):void this.emit("end")}},Runner.prototype.run=function(e){function t(e){n.uncaught(e)}var n=this,e=e||function(){};return debug("start"),this.on("end",function(){debug("end"),process.removeListener("uncaughtException",t),e(n.failures)}),this.emit("start"),this.runSuite(this.suite,function(){debug("finished running"),n.emit("end")}),process.on("uncaughtException",t),this},Runner.prototype.abort=function(){debug("aborting"),this._abort=!0};