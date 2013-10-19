'use strict';

describe('The Forge', function() {

  var forge;

  beforeEach(function() {
    forge = require('../forge/forge_controller.js')();
  });

  it('should have a string of the cries passed as a parameter to the forge or empty if none provided', function() {
    expect(forge.baby_cries_string).toBe('');
    forge = require('../forge/forge_controller.js')('Bua-Gua');
    expect(forge.baby_cries_string).toBe('Bua-Gua');
  });

  it('should have an actions string which starts empty', function() {
    expect(forge.actions_string).toBe('');
  });

  describe('Actions', function() {
    describe('Combined Actions', function() {
      it('should detrmine Gua-Bua-Mua as triple_combo (biggest time saver first)', function() {
        forge.baby_cries_string = 'Gua-Bua-Mua';
        forge.attend_to_baby();
        expect(forge.actions_string).toBe('(Chupón Alimentar Pañal)');
      });

      it('should determine Mua-Bua as double combo (next in line of time saving options)', function() {
        forge.baby_cries_string = 'Mua-Bua';
        forge.attend_to_baby();
        expect(forge.actions_string).toBe('(Pañal Alimentar)');
      });

      it('should determine Bua-Gua as double combo (third in line of time saving options)', function() {
        forge.baby_cries_string = 'Bua-Gua';
        forge.attend_to_baby();
        expect(forge.actions_string).toBe('(Alimentar Chupón)');
      });
    });

    describe('Simple Actions', function() {
      it('should replace the remaining non-combinable cries to the respective actions', function() {
        forge.baby_cries_string = 'Gua-Mua-Gua-Bua';
        forge.attend_to_baby();
        expect(forge.actions_string).toBe('Chupón-Pañal-Chupón-Alimentar');
      });
    });

    describe('Mixed actions', function() {
      it('should replace both combo and normal actions of the entire string', function() {
        forge.baby_cries_string = 'Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua';
        forge.attend_to_baby();
        expect(forge.actions_string).toBe('(Pañal Alimentar)-(Alimentar Chupón)-(Pañal Alimentar)-Chupón-Alimentar');
      });
    });
  });

describe('Lost sleep', function() {
  it('should have a string of lost sleep time for each action taken during the night', function() {
    forge.baby_cries_string = 'Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua-Bua-Mua-Gua-Bua-Mua';
    forge.attend_to_baby();
    expect(forge.lost_sleep).toBe(450);
  });
});

});