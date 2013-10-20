'use strict';

module.exports = function() {
  
  var utils = {
    format_hours_minutes: function(minutes) {
      return Math.floor(minutes/60) + ' horas ' + (minutes % 60) + ' minutos';
    },
    add_dash_spaces: function(string) {
      return string.replace(/-/g, ' - ');
    }
  };

  return utils;
};