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
function Progress(e,t){Base.call(this,e);var n=this,t=t||{},r=(this.stats,.5*Base.window.width|0),i=e.total,o=0,s=(Math.max,-1);t.open=t.open||"[",t.complete=t.complete||"▬",t.incomplete=t.incomplete||Base.symbols.dot,t.close=t.close||"]",t.verbose=!1,e.on("start",function(){console.log(),cursor.hide()}),e.on("test end",function(){o++;var e=o/i,n=r*e|0,a=r-n;(s!==n||t.verbose)&&(s=n,cursor.CR(),process.stdout.write("[J"),process.stdout.write(color("progress","  "+t.open)),process.stdout.write(Array(n).join(t.complete)),process.stdout.write(Array(a).join(t.incomplete)),process.stdout.write(color("progress",t.close)),t.verbose&&process.stdout.write(color("progress"," "+o+" of "+i)))}),e.on("end",function(){cursor.show(),console.log(),n.epilogue()})}var Base=require("./base"),cursor=Base.cursor,color=Base.color;exports=module.exports=Progress,Base.colors.progress=90,Progress.prototype.__proto__=Base.prototype;