'use strict';

describe('The Followers', function() {

  var followers;

  beforeEach(function() {
    followers = require('../forge/twitter_followers.js')();
  });

  it('should default to 0 lost followers', function() {
    followers.determine_followers();
    expect(followers.lost_followers).toBe(0);
  });

  describe('Lost Followers', function() {
    it('should calculate 0 lost followers if lost_sleep is 4 hours or less', function() {
      followers.determine_followers(20);
      expect(followers.lost_followers).toBe(0);
      followers.determine_followers(240);
      expect(followers.lost_followers).toBe(0);
    });

    it('should calculate 100 for each 30 minutes of sleep lost from 241 to 360 (4 groups of 30 minutes)', function() {
      followers.determine_followers(241);
      expect(followers.lost_followers).toBe(100);
      followers.determine_followers(271);
      expect(followers.lost_followers).toBe(200);
      followers.determine_followers(360);
      expect(followers.lost_followers).toBe(400);
    });

    it('should calculate 200 for each 30 minutes of sleep lost from 361 to 480 (after 4 groups of 30 minutes)', function() {
      followers.determine_followers(361);
      expect(followers.lost_followers).toBe(600);
      followers.determine_followers(391);
      expect(followers.lost_followers).toBe(800);
      followers.determine_followers(480);
      expect(followers.lost_followers).toBe(1200);
    });
  });

});