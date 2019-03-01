"use strict";

function openNav() {
  /*  let hamburger = document.getElementById("id-hamburger");
    hamburger.classList.toggle("open"); */
    /*Udacity:
    or ease of use you can use it as
     document.getElementById("id-hamburger").classList.toggle("open");*/
  document.getElementById("id-sidenav").classList.toggle("open");
  document.getElementById("id-hamburger").classList.toggle("open");
}

function closeNav() {
  document.getElementById("id-sidenav").classList.toggle("open");
  document.getElementById("id-hamburger").classList.toggle("open");
}
