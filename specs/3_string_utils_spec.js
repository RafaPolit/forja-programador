'use strict';

describe('The String Utils', function() {

  var utils;

  beforeEach(function() {
    utils = require('../utils/string_utils.js')();
  });

  describe('format_hours_minutes', function() {
    it('should receive minutes and returns hours and minutes', function() {
      var expected_string = utils.format_hours_minutes(285);
      expect(expected_string).toBe('4 horas 45 minutos');
    });

    it('should not include the minutes part if 0 minutes', function() {
      var expected_string = utils.format_hours_minutes(120);
      expect(expected_string).toBe('2 horas');
    });
      
    it('should not include the hours part if 0 hours', function() {
      var expected_string = utils.format_hours_minutes(20);
      expect(expected_string).toBe('20 minutos');
    });

    it('should list 0 minutos if both hours and minutes are 0', function() {
      var expected_string = utils.format_hours_minutes(0);
      expect(expected_string).toBe('0 minutos');
    });
  });

  describe('add_dash_spaces', function() {
    it('should receive a dashed string and inserts spaces between them', function() {
      var expected_string = utils.add_dash_spaces('a-b-bc-d-e');
      expect(expected_string).toBe('a - b - bc - d - e');
    });
  });

});