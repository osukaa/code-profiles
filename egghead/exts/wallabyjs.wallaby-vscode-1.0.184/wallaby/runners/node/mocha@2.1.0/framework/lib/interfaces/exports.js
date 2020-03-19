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
var Suite=require("../suite"),Test=require("../test");module.exports=function(e){function t(e,r){var i;for(var o in e)if("function"==typeof e[o]){var s=e[o];switch(o){case"before":n[0].beforeAll(s);break;case"after":n[0].afterAll(s);break;case"beforeEach":n[0].beforeEach(s);break;case"afterEach":n[0].afterEach(s);break;default:var a=new Test(o,s);a.file=r,n[0].addTest(a)}}else i=Suite.create(n[0],o),n.unshift(i),t(e[o]),n.shift()}var n=[e];e.on("require",t)};