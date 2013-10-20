'use strict';

describe('The String Utils', function() {

  var utils;

  beforeEach(function() {
    utils = require('../forge/string_utils.js')();
  });

  it('should have a format_hours_miuntes function that receives minutes and returns hours and minutes', function() {
    var expected_string = utils.format_hours_minutes(285);
    expect(expected_string).toBe('4 horas 45 minutos');
  });

  it('should have a add_dash_spaces function that receives a dashed string and inserts spaces between them', function() {
    var expected_string = utils.add_dash_spaces('a-b-bc-d-e');
    expect(expected_string).toBe('a - b - bc - d - e');
  });

});