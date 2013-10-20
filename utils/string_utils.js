'use strict';

module.exports = function() {
  
  var utils = {
    format_hours_minutes: function(minutes) {
      var horas = (Math.floor(minutes/60) > 0)? Math.floor(minutes/60) + ' horas':undefined;
      var minutos = ((minutes % 60) > 0)?(minutes % 60) + ' minutos':undefined;
      if(!horas && !minutos) { minutos = '0 minutos'; }

      return [horas, minutos].join(' ').trim();
    },
    add_dash_spaces: function(string) {
      return string.replace(/-/g, ' - ');
    }
  };

  return utils;
};