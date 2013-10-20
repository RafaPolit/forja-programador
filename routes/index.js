
'use strict';

exports.index = function(req, res){
  var test_cases_fixture = require('../fixtures/test_cases_fixture.js');

  var test_cases = [];

  test_cases_fixture.forEach(function(test_case) {
    test_cases.push(require('../forge/forge.js')(test_case.input));
  });

  res.render('index', {
    title: 'Forja del Programador',
    test_cases: test_cases
  });
};