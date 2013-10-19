'use strict';

module.exports = function(baby_cries_string) {

  var actions_array = [
    { attend: /Gua-Bua-Mua/g, with: '(Chupón Alimentar Pañal)', takes: 75 },
    { attend: /Mua-Bua/g, with: '(Pañal Alimentar)', takes: 75 },
    { attend: /Bua-Gua/g, with: '(Alimentar Chupón)', takes: 65 },
    { attend: /Gua/g, with: 'Chupón', takes: 10 },
    { attend: /Mua/g, with: 'Pañal', takes: 30 },
    { attend: /Bua/g, with: 'Alimentar', takes: 60 }
  ];

  var forge = {};

  forge.baby_cries_string = baby_cries_string || '';
  forge.actions_string = '';

  forge.attend_to_baby = function() {
    var resolved_cries = resolve_cries();
    forge.actions_string = resolved_cries.actions;
    determine_lost_sleep(resolved_cries.time_spent);
  };

  function resolve_cries() {
    var resolved_cries = { actions: forge.baby_cries_string, time_spent: forge.baby_cries_string }
    actions_array.forEach(function(action) {
      resolved_cries.actions = resolve_cry(resolved_cries.actions, action);
      resolved_cries.time_spent = determine_lost_sleep_sequence(resolved_cries.time_spent, action);
    });
    return resolved_cries;
  }

  function determine_lost_sleep(time_spent) {
    forge.lost_sleep = 0;
    var time_spent_array = time_spent.split('-');
    time_spent_array.forEach(function(time) {
      forge.lost_sleep += Number(time);
    });
  }

  function resolve_cry(str, action_options) {
    return str.replace(action_options.attend, action_options.with);
  }

  function determine_lost_sleep_sequence(str, action_options) {
    return str.replace(action_options.attend, action_options.takes);
  }
  
  return forge;

};