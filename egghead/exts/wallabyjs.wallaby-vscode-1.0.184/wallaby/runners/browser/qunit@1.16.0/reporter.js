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
!function(e){var t,n=e.$_$tracer,r=n.initialSpecId();QUnit.begin(function(e){n.started({total:e.totalTests})}),QUnit.done(function(){n.complete()}),QUnit.testStart(function(e){var i=QUnit.config;if(n.hasSpecFilter()){var o,s=e.name,a=e.name.replace(/\s\s*$/,""),l=[a];if(s!==a&&(o=[s]),e.module&&(l.unshift(e.module),o&&o.unshift(e.module)),!(n.specFilter(l)||o&&n.specFilter(o))){for(;i.queue.length;){var c=i.queue.shift();if(c&&~c.toString().indexOf(".finish();"))return}return}}i.current.run=function(){var e;n.needToNotifySingleTestRun()&&i.queue.unshift(function(){n.notifySingleTestAfterEach(function(){i.current&&QUnit.start()}),QUnit.stop()}),i.current=this,delete i.current.stack,this.async&&QUnit.stop(),this.callbackStarted=(new Date).getTime();try{n.specSyncStart(),e=this.callback.call(this.testEnvironment,this.assert),this.resolvePromise(e)}catch(t){this.pushFailure(t.message,t.stack),i.blocking&&i.current&&QUnit.start()}finally{n.specSyncEnd()}},t={success:!0,errors:[],id:++r,start:(new n._Date).getTime()},n.specStart(t.id,e.name)}),QUnit.log(function(e){if(!e.result){var r="",i=e.expected,o=e.actual;e.message&&(r+=e.message),t.success=!1,e.showDiff=!0;var s=n.setAssertionData(e,{message:r,stack:e.source});delete e.showDiff,t.errors.push(s),(!e.message||"undefined"!=typeof e.expected&&s.expected)&&(s.message+=(e.message?"\n":"")+"Expected: "+n._inspect(i,3)+"\nActual: "+n._inspect(o,3))}}),QUnit.testDone(function(e){var r=n.specEnd(),i={id:t.id,timeRange:r,name:e.name,suite:e.module&&[e.module]||[],success:t.success,skipped:!1,time:(new n._Date).getTime()-t.start,log:t.errors||[]};i.log.length||delete i.log,n.result(i)})}(window);