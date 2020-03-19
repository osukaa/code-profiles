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
function Base(e){var t=this.stats={suites:0,tests:0,passes:0,pending:0,failures:0},n=this.failures=[];e&&(this.runner=e,e.stats=t,e.on("start",function(){t.start=new Date}),e.on("suite",function(e){t.suites=t.suites||0,e.root||t.suites++}),e.on("test end",function(e){t.tests=t.tests||0,t.tests++}),e.on("pass",function(e){t.passes=t.passes||0;var n=e.slow()/2;e.speed=e.duration>e.slow()?"slow":e.duration>n?"medium":"fast",t.passes++}),e.on("fail",function(e,r){t.failures=t.failures||0,t.failures++,e.err=r,n.push(e)}),e.on("end",function(){t.end=new Date,t.duration=new Date-t.start}),e.on("pending",function(){t.pending++}))}function pad(e,t){return e=String(e),Array(t-e.length+1).join(" ")+e}function inlineDiff(e,t){var n=errorDiff(e,"WordsWithSpace",t),r=n.split("\n");if(r.length>4){var i=String(r.length).length;n=r.map(function(e,t){return pad(++t,i)+" | "+e}).join("\n")}return n="\n"+color("diff removed","actual")+" "+color("diff added","expected")+"\n\n"+n+"\n",n=n.replace(/^/gm,"      ")}function unifiedDiff(e,t){function n(e){return t&&(e=escapeInvisibles(e)),"+"===e[0]?i+colorLines("diff added",e):"-"===e[0]?i+colorLines("diff removed",e):e.match(/\@\@/)?null:e.match(/\\ No newline/)?null:i+e}function r(e){return null!=e}var i="      ";msg=diff.createPatch("string",e.actual,e.expected);var o=msg.split("\n").splice(4);return"\n      "+colorLines("diff added","+ expected")+" "+colorLines("diff removed","- actual")+"\n\n"+o.map(n).filter(r).join("\n")}function errorDiff(e,t,n){var r=n?escapeInvisibles(e.actual):e.actual,i=n?escapeInvisibles(e.expected):e.expected;return diff["diff"+t](r,i).map(function(e){return e.added?colorLines("diff added",e.value):e.removed?colorLines("diff removed",e.value):e.value}).join("")}function escapeInvisibles(e){return e.replace(/\t/g,"<tab>").replace(/\r/g,"<CR>").replace(/\n/g,"<LF>\n")}function colorLines(e,t){return t.split("\n").map(function(t){return color(e,t)}).join("\n")}function sameType(e,t){return e=Object.prototype.toString.call(e),t=Object.prototype.toString.call(t),e==t}var tty=require("tty"),diff=require("diff"),ms=require("../ms"),utils=require("../utils"),Date=global.Date,setTimeout=global.setTimeout,setInterval=global.setInterval,clearTimeout=global.clearTimeout,clearInterval=global.clearInterval,isatty=tty.isatty(1)&&tty.isatty(2);exports=module.exports=Base,exports.useColors=isatty||void 0!==process.env.MOCHA_COLORS,exports.inlineDiffs=!1,exports.colors={pass:90,fail:31,"bright pass":92,"bright fail":91,"bright yellow":93,pending:36,suite:0,"error title":0,"error message":31,"error stack":90,checkmark:32,fast:90,medium:33,slow:31,green:32,light:90,"diff gutter":90,"diff added":42,"diff removed":41},exports.symbols={ok:"✓",err:"✖",dot:"․"},"win32"==process.platform&&(exports.symbols.ok="√",exports.symbols.err="×",exports.symbols.dot=".");var color=exports.color=function(e,t){return exports.useColors?"["+exports.colors[e]+"m"+t+"[0m":String(t)};exports.window={width:isatty?process.stdout.getWindowSize?process.stdout.getWindowSize(1)[0]:tty.getWindowSize()[1]:75},exports.cursor={hide:function(){isatty&&process.stdout.write("[?25l")},show:function(){isatty&&process.stdout.write("[?25h")},deleteLine:function(){isatty&&process.stdout.write("[2K")},beginningOfLine:function(){isatty&&process.stdout.write("[0G")},CR:function(){isatty?(exports.cursor.deleteLine(),exports.cursor.beginningOfLine()):process.stdout.write("\r")}},exports.list=function(e){console.log(),e.forEach(function(e,t){var n=color("error title","  %s) %s:\n")+color("error message","     %s")+color("error stack","\n%s\n"),r=e.err,i=r.message||"",o=r.stack||i,s=o.indexOf(i)+i.length,a=o.slice(0,s),l=r.actual,c=r.expected,u=!0;if(r.uncaught&&(a="Uncaught "+a),r.showDiff&&sameType(l,c)){"string"!=typeof l&&(u=!1,r.actual=l=utils.stringify(l),r.expected=c=utils.stringify(c)),n=color("error title","  %s) %s:\n%s")+color("error stack","\n%s\n");var h=i.match(/^([^:]+): expected/);a="\n      "+color("error message",h?h[1]:a),a+=exports.inlineDiffs?inlineDiff(r,u):unifiedDiff(r,u)}o=o.slice(s?s+1:s).replace(/^/gm,"  "),console.log(n,t+1,e.fullTitle(),a,o)})},Base.prototype.epilogue=function(){var e,t=this.stats;console.log(),e=color("bright pass"," ")+color("green"," %d passing")+color("light"," (%s)"),console.log(e,t.passes||0,ms(t.duration)),t.pending&&(e=color("pending"," ")+color("pending"," %d pending"),console.log(e,t.pending)),t.failures&&(e=color("fail","  %d failing"),console.log(e,t.failures),Base.list(this.failures),console.log()),console.log()};