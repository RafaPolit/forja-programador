'use strict';

module.exports = function() {

  var programmer = {};

  programmer.actions = [
    { attend: /Gua-Bua-Mua/g, with: '(Chupón Alimentar Pañal)', takes: 75 },
    { attend: /Mua-Bua/g, with: '(Pañal Alimentar)', takes: 75 },
    { attend: /Bua-Gua/g, with: '(Alimentar Chupón)', takes: 65 },
    { attend: /Gua/g, with: 'Chupón', takes: 10 },
    { attend: /Mua/g, with: 'Pañal', takes: 30 },
    { attend: /Bua/g, with: 'Alimentar', takes: 60 }
  ];

  return programmer;
};
