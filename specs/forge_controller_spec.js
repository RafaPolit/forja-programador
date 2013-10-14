'use strict';

describe('The Forge', function() {

  var forge;

  beforeEach(function() {
    forge = require('../forge/forge_controller.js')();
  });

  it('should have a string of the cries and an array of cries which starts empty', function() {
    expect(forge.baby_cries_string).toBe('');
  });

  describe('set_cries funciton', function() {
    it('should store the original cries string', function() {
      var initial_string = 'Mua-Gua-Bua-Gua';
      forge.set_baby_cries(initial_string);
      expect(forge.baby_cries_string).toBe(initial_string);
    });
  });

  describe('combinable cries', function() {
    it('should detrmine Gua-Bua-Mua as triple_combo (biggest time saver first)', function() {
      forge.set_baby_cries('Mua-Gua-Bua-Mua-Mua');
      forge.combine_baby_cries();
      expect(forge.combined_baby_cries).toBe('Mua-Gua_Bua_Mua_combo-Mua');
    });

    it('should determine Mua-Bua as double combo (next in line of time saving options)', function() {
      forge.set_baby_cries('Mua-Bua-Gua');
      forge.combine_baby_cries();
      expect(forge.combined_baby_cries).toBe('Mua_Bua_combo-Gua');
    });

    it('should determine Bua-Gua as double combo (third in line of time saving options)', function() {
      forge.set_baby_cries('Mua-Mua-Gua-Bua-Gua');
      forge.combine_baby_cries();
      expect(forge.combined_baby_cries).toBe('Mua-Mua-Gua-Bua_Gua_combo');
    });
  });


});