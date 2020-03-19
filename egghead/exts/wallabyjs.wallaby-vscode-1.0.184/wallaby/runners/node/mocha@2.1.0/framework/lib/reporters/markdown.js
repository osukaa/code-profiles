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
function Markdown(e){function t(e){return Array(o).join("#")+" "+e}function n(e,t){var r=t,i=SUITE_PREFIX+e.title;return t=t[i]=t[i]||{suite:e},e.suites.forEach(function(e){n(e,t)}),r}function r(e,t){++t;var n,i="";for(var o in e)"suite"!=o&&(o!==SUITE_PREFIX&&(n=" - ["+o.substring(1)+"]",n+="(#"+utils.slug(e[o].suite.fullTitle())+")\n",i+=Array(t).join("  ")+n),i+=r(e[o],t));return i}function i(e){var t=n(e,{});return r(t,0)}Base.call(this,e);var o=(this.stats,0),s="";i(e.suite),e.on("suite",function(e){++o;var n=utils.slug(e.fullTitle());s+='<a name="'+n+'"></a>\n',s+=t(e.title)+"\n"}),e.on("suite end",function(e){--o}),e.on("pass",function(e){var t=utils.clean(e.fn.toString());s+=e.title+".\n",s+="\n```js\n",s+=t+"\n",s+="```\n\n"}),e.on("end",function(){process.stdout.write("# TOC\n"),process.stdout.write(i(e.suite)),process.stdout.write(s)})}var Base=require("./base"),utils=require("../utils"),SUITE_PREFIX="$";exports=module.exports=Markdown;