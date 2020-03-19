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
function Landing(e){function t(){var e=Array(r).join("-");return"  "+color("runway",e)}Base.call(this,e);var n=this,r=(this.stats,.75*Base.window.width|0),i=e.total,o=process.stdout,s=color("plane","✈"),a=-1,l=0;e.on("start",function(){o.write("\n\n\n  "),cursor.hide()}),e.on("test end",function(e){var n=-1==a?r*++l/i|0:a;"failed"==e.state&&(s=color("plane crash","✈"),a=n),o.write("["+(r+1)+"D[2A"),o.write(t()),o.write("\n  "),o.write(color("runway",Array(n).join("⋅"))),o.write(s),o.write(color("runway",Array(r-n).join("⋅")+"\n")),o.write(t()),o.write("[0m")}),e.on("end",function(){cursor.show(),console.log(),n.epilogue()})}var Base=require("./base"),cursor=Base.cursor,color=Base.color;exports=module.exports=Landing,Base.colors.plane=0,Base.colors["plane crash"]=31,Base.colors.runway=90,Landing.prototype.__proto__=Base.prototype;