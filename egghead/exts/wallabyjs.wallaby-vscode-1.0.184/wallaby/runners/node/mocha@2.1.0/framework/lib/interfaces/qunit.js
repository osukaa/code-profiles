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
var Suite=require("../suite"),Test=require("../test"),escapeRe=require("escape-string-regexp"),utils=require("../utils");module.exports=function(e){var t=[e];e.on("pre-require",function(e,n,r){e.before=function(e,n){t[0].beforeAll(e,n)},e.after=function(e,n){t[0].afterAll(e,n)},e.beforeEach=function(e,n){t[0].beforeEach(e,n)},e.afterEach=function(e,n){t[0].afterEach(e,n)},e.suite=function(e){t.length>1&&t.shift();var r=Suite.create(t[0],e);return r.file=n,t.unshift(r),r},e.suite.only=function(t,n){var i=e.suite(t,n);r.grep(i.fullTitle())},e.test=function(e,r){var i=new Test(e,r);return i.file=n,t[0].addTest(i),i},e.test.only=function(t,n){var i=e.test(t,n),o="^"+escapeRe(i.fullTitle())+"$";r.grep(new RegExp(o))},e.test.skip=function(t){e.test(t)}})};