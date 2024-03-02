const cable = document.querySelector(".pick");
const connect = document.querySelector(".connect");

const WALLET = document.querySelector("#pack");
const hideNav = document.querySelector("#hide");

cable.addEventListener("click", function () {
  WALLET.classList.toggle("hidden");
});
connect.addEventListener("click", function () {
  WALLET.classList.toggle("hidden");
});
hideNav.addEventListener("click", function () {
  WALLET.classList.toggle("hidden");
});

const pressHarvestAll = document.querySelector(".harvest");
const confirm = document.querySelector(".holdTight");

pressHarvestAll.addEventListener("click", function () {
  confirm.classList.toggle("hidden");
});

const pressRubyAll = document.querySelector(".ruby");
const cancelRubyAll = document.querySelector(".understood");
const intact = document.querySelector(".submit");

cancelRubyAll.addEventListener("click", function () {
  intact.classList.toggle('hidden');
});

pressRubyAll.addEventListener("click", function () {
  intact.classList.toggle("hidden");
});

const navToggler = document.querySelector(".navToggler");
const smNav = document.querySelector("#smNav");


navToggler.addEventListener("click", function () {
  smNav.classList.toggle("hidden");
});


