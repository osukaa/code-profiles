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
var Suite=require("../suite"),Test=require("../test"),escapeRe=require("escape-string-regexp"),utils=require("../utils");module.exports=function(e){var t=[e];e.on("pre-require",function(e,n,r){e.setup=function(e,n){t[0].beforeEach(e,n)},e.teardown=function(e,n){t[0].afterEach(e,n)},e.suiteSetup=function(e,n){t[0].beforeAll(e,n)},e.suiteTeardown=function(e,n){t[0].afterAll(e,n)},e.suite=function(e,r){var i=Suite.create(t[0],e);return i.file=n,t.unshift(i),r.call(i),t.shift(),i},e.suite.skip=function(e,n){var r=Suite.create(t[0],e);r.pending=!0,t.unshift(r),n.call(r),t.shift()},e.suite.only=function(t,n){var i=e.suite(t,n);r.grep(i.fullTitle())},e.test=function(e,r){var i=t[0];i.pending&&(r=null);var o=new Test(e,r);return o.file=n,i.addTest(o),o},e.test.only=function(t,n){var i=e.test(t,n),o="^"+escapeRe(i.fullTitle())+"$";r.grep(new RegExp(o))},e.test.skip=function(t){e.test(t)}})};