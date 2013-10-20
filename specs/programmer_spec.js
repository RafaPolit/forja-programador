'use strict';

describe('The Programmer', function() {

  var programmer;

  it('should have actions, sleep_time and lost_sleep values exposed with correct defaults', function() {
    instantiate_programmer();
    expect(programmer.actions).toBe('');
    expect(programmer.sleep_time).toBe(480);
    expect(programmer.lost_sleep).toBe(0);
  });

  describe('Actions', function() {
    describe('Combined Actions', function() {
      it('should detrmine Gua-Bua-Mua as triple_combo (biggest time saver first)', function() {
        instantiate_programmer('Gua-Bua-Mua');
        programmer.attend_to_baby();
        expect(programmer.actions).toBe('(Chupón Alimentar Pañal)');
      });

      it('should determine Mua-Bua as double combo (next in line of time saving options)', function() {
        instantiate_programmer('Mua-Bua');
        programmer.attend_to_baby();
        expect(programmer.actions).toBe('(Pañal Alimentar)');
      });

      it('should determine Bua-Gua as double combo (third in line of time saving options)', function() {
        instantiate_programmer('Bua-Gua');
        programmer.attend_to_baby();
        expect(programmer.actions).toBe('(Alimentar Chupón)');
      });
    });

    describe('Simple Actions', function() {
      it('should replace the remaining non-combinable cries to the respective actions', function() {
        instantiate_programmer('Gua-Mua-Gua-Bua');
        programmer.attend_to_baby();
        expect(programmer.actions).toBe('Chupón-Pañal-Chupón-Alimentar');
      });
    });

    describe('Mixed actions', function() {
      it('should replace both combo and normal actions of the entire string', function() {
        instantiate_programmer('Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua');
        programmer.attend_to_baby();
        expect(programmer.actions).toBe('(Pañal Alimentar)-(Alimentar Chupón)-(Pañal Alimentar)-Chupón-Alimentar');
      });
    });
  });

  describe('Lost sleep', function() {
    it('should have a string of lost sleep time for each action taken during the night', function() {
      instantiate_programmer('Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua-Bua-Mua-Gua-Bua-Mua');
      programmer.attend_to_baby();
      expect(programmer.sleep_time).toBe(30);
      expect(programmer.lost_sleep).toBe(450);
    });
  });

  function instantiate_programmer(cries) {
    programmer = require('../forge/programmer.js')(cries);
  }

});