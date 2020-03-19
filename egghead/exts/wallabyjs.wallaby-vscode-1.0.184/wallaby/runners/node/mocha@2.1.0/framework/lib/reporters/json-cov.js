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
function JSONCov(e,t){var n=this,t=1==arguments.length||t;Base.call(this,e);var r=[],i=[],o=[];e.on("test end",function(e){r.push(e)}),e.on("pass",function(e){o.push(e)}),e.on("fail",function(e){i.push(e)}),e.on("end",function(){var e=global._$jscoverage||{},s=n.cov=map(e);s.stats=n.stats,s.tests=r.map(clean),s.failures=i.map(clean),s.passes=o.map(clean),t&&process.stdout.write(JSON.stringify(s,null,2))})}function map(e){var t={instrumentation:"node-jscoverage",sloc:0,hits:0,misses:0,coverage:0,files:[]};for(var n in e){var r=coverage(n,e[n]);t.files.push(r),t.hits+=r.hits,t.misses+=r.misses,t.sloc+=r.sloc}return t.files.sort(function(e,t){return e.filename.localeCompare(t.filename)}),t.sloc>0&&(t.coverage=t.hits/t.sloc*100),t}function coverage(e,t){var n={filename:e,coverage:0,hits:0,misses:0,sloc:0,source:{}};return t.source.forEach(function(e,r){r++,0===t[r]?(n.misses++,n.sloc++):void 0!==t[r]&&(n.hits++,n.sloc++),n.source[r]={source:e,coverage:void 0===t[r]?"":t[r]}}),n.coverage=n.hits/n.sloc*100,n}function clean(e){return{title:e.title,fullTitle:e.fullTitle(),duration:e.duration}}var Base=require("./base");exports=module.exports=JSONCov;