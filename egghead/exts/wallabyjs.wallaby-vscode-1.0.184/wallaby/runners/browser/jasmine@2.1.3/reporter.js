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
var JasmineReporter=function(e){var t=e.initialSpecId(),n=[],r={},i=function(t){if(t&&t.failedExpectations&&t.failedExpectations.length)for(var n=0;n<t.failedExpectations.length;n++){var r=t.failedExpectations[n];r&&!r.matcherName&&"string"==typeof r.message&&"string"==typeof r.stack&&e.reportDeclarationError({message:r.message,stack:r.stack})}};this.jasmineStarted=function(t){e.started({total:t.totalSpecsDefined})},this.jasmineDone=function(t){i(t),e.complete()},this.suiteStarted=function(e){n.push(e.description)},this.suiteDone=function(e){i(e),n.pop()},this.specStarted=function(n){var i=++t,o=r[n.id]={id:i};e.specStart(i,n.description),o.time=(new e._Date).getTime()},this.specDone=function(i){var o=r[i.id]||{id:t};i._id=o.id,i._time=o.time,delete r[i.id];var s=e.specEnd(),a="disabled"===i.status||"pending"===i.status||"excluded"===i.status,l={id:i._id,timeRange:s,name:i.description,suite:n.slice(),success:"passed"===i.status,skipped:a,time:a?0:(new e._Date).getTime()-i._time,log:[],testFile:i._testFile};if(!l.success&&!l.skipped)for(var c=i.failedExpectations,u=0;u<c.length;u++){var h=c[u];h.showDiff=h.showDiff||"toEqual"===h.matcherName,l.log.push(e.setAssertionData(h,{message:h.message,stack:h.stack}))}l.log.length||delete l.log,e.result(l)}},jasmineEnv=jasmine.getEnv(),tracer=window.$_$tracer,adapter=new JasmineReporter(tracer);jasmineEnv.addReporter(adapter);