'use strict';

describe('The Forge', function() {

  var forge;

  it('should have a string of the cries passed as a parameter to the forge or empty if none provided', function() {
    instantiate_forge();
    expect(forge.baby_cries_string).toBe('');
    instantiate_forge('Bua-Gua');
    expect(forge.baby_cries_string).toBe('Bua-Gua');
  });

  describe('Programmer', function() {
    it('should have the attend_to_baby function exposed, ', function() {
      instantiate_forge();
      expect(forge.programmer.attend_to_baby).toBeDefined();
    });

    it('should report the actions taken for the cries,the time spent on it and the time he slept', function() {
      instantiate_forge('Mua-Gua-Mua-Gua');
      expect(forge.programmer.actions).toBe('Pañal-Chupón-Pañal-Chupón');
      expect(forge.programmer.lost_sleep).toBe(80);
      expect(forge.programmer.sleep_time).toBe(400);
    });
  });

  describe('Twitter Followers', function() {
    it('should have the Twitter Followers controller instanced', function() {
      instantiate_forge();
      expect(forge.followers.lost_followers).toBeDefined();
    });
    it('should report the lost followers acording to the actions and the time it took', function() {
      instantiate_forge('Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua');
      expect(forge.followers.lost_followers).toBe(200);
    });
  });

  describe('Output', function() {
    it('should format the actions to have spaces between the dashes', function() {

    });

    it('should format programmer sleep_time to hours and minutes', function() {
      forge = require('../forge/forge.js')('Mua-Bua-Gua');
      expect(forge.programmer.actions_str).toBe('(Pañal Alimentar) - Chupón');
    });
  });

  /* ----------------------------------------------------------------------- */

  function instantiate_forge(initial_cry) {
    forge = require('../forge/forge.js')(initial_cry);
  }

});