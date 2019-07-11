// ==UserScript==
// @name         yohoho.io hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        */yohoho.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var moola = prompt("how much money do you want");
    localStorage.setItem("coinsOwned",moola);
    localStorage.setItem("playerPet","9");
    localStorage.setItem("unlockedSkins","[35]");
    localStorage.setItem("unlockedPets","[9]");
    localStorage.setItem("playerPetLevel","12");
    localStorage.setItem("playerSkin","35");
    alert("reload tab");
})();
