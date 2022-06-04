// ==UserScript==
// @name         break-copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  csdn代码复制!
// @author       san
// @match        https://blog.csdn.net/*
// @updateURL    https://github.com/santounn/tampermonkey-script/break-copy.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.debug('tempermonkey hello world.');

    document.body.contentEditable=true

})();
