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
function JSONReporter(e){var t=this;Base.call(this,e);var n=[],r=[],i=[],o=[];e.on("test end",function(e){n.push(e)}),e.on("pass",function(e){o.push(e)}),e.on("fail",function(e){i.push(e)}),e.on("pending",function(e){r.push(e)}),e.on("end",function(){var s={stats:t.stats,tests:n.map(clean),pending:r.map(clean),failures:i.map(clean),passes:o.map(clean)};e.testResults=s,process.stdout.write(JSON.stringify(s,null,2))})}function clean(e){return{title:e.title,fullTitle:e.fullTitle(),duration:e.duration,err:errorJSON(e.err||{})}}function errorJSON(e){var t={};return Object.getOwnPropertyNames(e).forEach(function(n){t[n]=e[n]},e),t}var Base=require("./base"),cursor=Base.cursor,color=Base.color;exports=module.exports=JSONReporter;