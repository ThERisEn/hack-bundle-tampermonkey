
// ==UserScript==
// @name         arras.io hack
// @namespace    arras.io
// @version      1.0.0
// @description  arras hack in dev
// @author       unknown
// @match        *://arras.io/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
main();
   
})();
function main(){
initUi();
  function initUi(){
    var playername = document.getElementById("PlayerNameInput").value();
    var isInjected = false;
    if(!isInjected){
    alert("ARRAS INJECTED");
     isInjected = true;
    }
    function adblock(){
document.getElementById("arras-io_336x280").remove();
}
adblock();
  }
}
