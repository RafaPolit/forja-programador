'use strict';

module.exports = function(baby_cries) {

  var action_options = [
    { attend: /Gua-Bua-Mua/g, with: '(Chupón Alimentar Pañal)', takes: 75 },
    { attend: /Mua-Bua/g, with: '(Pañal Alimentar)', takes: 75 },
    { attend: /Bua-Gua/g, with: '(Alimentar Chupón)', takes: 65 },
    { attend: /Bua/g, with: 'Alimentar', takes: 60 },
    { attend: /Mua/g, with: 'Pañal', takes: 30 },
    { attend: /Gua/g, with: 'Chupón', takes: 10 }
  ];

  var programmer = {
    actions: '',
    sleep_time: 480,
    lost_sleep: 0
  };

  programmer.attend_to_baby = function() {
    var resolved_cries = resolve_cries();
    programmer.actions = resolved_cries.actions;
    determine_sleep_time(resolved_cries.time_spent);
  };

  function resolve_cries() {
    var resolved_cries = { actions: baby_cries, time_spent: baby_cries };
    action_options.forEach(function(action) {
      resolved_cries.actions = resolved_cries.actions.replace(action.attend, action.with);
      resolved_cries.time_spent = resolved_cries.time_spent.replace(action.attend, action.takes);
    });
    return resolved_cries;
  }

  function determine_sleep_time(time_spent) {
    var time_spent_array = time_spent.split('-');
    time_spent_array.forEach(function(time) {
      programmer.sleep_time -= Number(time);
      programmer.lost_sleep += Number(time);
    });
  }

  return programmer;
};