var cries = [];
var input = document.getElementById('input');
var input_display = document.getElementById('input-display');

preload_previous_cries();

function preload_previous_cries() {
  if (input.value !== '') {
    cries = input.value.split('-');
  }
}

function add_cry(cry) { cries.push(cry); update_input(); }

function remove_last_cry() { cries.pop(); update_input(); }

function remove_all() { cries = []; update_input(); }

function update_input() {
  input.value = cries.join('-');
  input_display.value = cries.join('-');
}
