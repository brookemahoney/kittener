// ==UserScript==
// @name       Make America Kittener Again
// @version    0.1
// @description  :)
// @include      htt*://*
// ==/UserScript==

var trumpereplace = function() {
  document.body.innerHTML = document.body.innerHTML.replace(/trump/ig, 'The Douchebag Cat');
};

document.addEventListener('DOMContentLoaded', trumpereplace());
