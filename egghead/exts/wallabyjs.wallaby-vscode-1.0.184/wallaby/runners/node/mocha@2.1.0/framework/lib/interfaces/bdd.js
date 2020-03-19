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
var Suite=require("../suite"),Test=require("../test"),utils=require("../utils"),escapeRe=require("escape-string-regexp");module.exports=function(e){var t=[e];e.on("pre-require",function(e,n,r){e.before=function(e,n){t[0].beforeAll(e,n)},e.after=function(e,n){t[0].afterAll(e,n)},e.beforeEach=function(e,n){t[0].beforeEach(e,n)},e.afterEach=function(e,n){t[0].afterEach(e,n)},e.describe=e.context=function(e,r){var i=Suite.create(t[0],e);return i.file=n,t.unshift(i),r.call(i),t.shift(),i},e.xdescribe=e.xcontext=e.describe.skip=function(e,n){var r=Suite.create(t[0],e);r.pending=!0,t.unshift(r),n.call(r),t.shift()},e.describe.only=function(t,n){var i=e.describe(t,n);return r.grep(i.fullTitle()),i},e.it=e.specify=function(e,r){var i=t[0];i.pending&&(r=null);var o=new Test(e,r);return o.file=n,i.addTest(o),o},e.it.only=function(t,n){var i=e.it(t,n),o="^"+escapeRe(i.fullTitle())+"$";return r.grep(new RegExp(o)),i},e.xit=e.xspecify=e.it.skip=function(t){e.it(t)}})};