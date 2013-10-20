'use strict';

describe('The Test Cases', function() {

  var test_cases = require('../fixtures/test_cases_fixture.js');

  it('should correctly resolve case 1 (Bua-Bua-Bua-Bua)', function() {
    assess_case(0);
  });

  it('should correctly resolve case 2 (Mua-Gua-Mua-Gua)', function() {
    assess_case(1);
  });

  it('should correctly resolve case 3 (Bua-Mua-Bua-Bua)', function() {
    assess_case(2);
  });

  it('should correctly resolve case 4 (Bua-Mua-Bua-Mua-Bua)', function() {
    assess_case(3);
  });

  it('should correctly resolve case 5 (Mua-Bua-Gua)', function() {
    assess_case(4);
  });

  it('should correctly resolve case 6 (Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua)', function() {
    assess_case(5);
  });

  it('should correctly resolve case 7 (Bua-Gua-Bua-Mua)', function() {
    assess_case(6);
  });

  it('should correctly resolve case 8 (Bua-Mua-Gua-Bua-Mua-Bua-Bua)', function() {
    assess_case(7);
  });

  it('should correctly resolve case 9 (Bua-Mua-Gua-Bua-Mua-Bua-Bua-Mua-Gua-Bua)', function() {
    assess_case(8);
  });

  it('should correctly resolve case 10 (Bua-Bua-Bua-Bua-Bua-Bua-Bua-Bua)', function() {
    assess_case(9);
  });

  /* -------------------------------------------------------- */

  function assess_case(case_number) {
    var forge = require('../forge/forge.js')(test_cases[case_number].input);
    expect(forge.programmer.sleep_time_str).toBe(test_cases[case_number].expected_sleep_time);
    expect(forge.programmer.actions_str).toBe(test_cases[case_number].expected_actions);
    expect(forge.followers.lost_followers).toBe(test_cases[case_number].expected_lost_followers);
  }
});