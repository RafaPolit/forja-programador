'use strict';

var cries = [];
preload_previous_cries();

function preload_previous_cries() {
  var input = document.getElementById('input');
  cries = input.value.split('-');
  if (cries.length === 1 && cries[0] === "") {
    cries = [];
  }
}

function add_cry(cry) {
  cries.push(cry);
  update_input();
}

function remove_last_cry() {
  cries.pop();
  update_input();
}

function remove_all() {
  cries = [];
  update_input();
}

function update_input() {
  var input = document.getElementById('input');
  var input_display = document.getElementById('input-display');
  input.value = cries.join('-');
  input_display.value = cries.join('-');
}