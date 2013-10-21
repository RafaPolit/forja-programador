'use strict';

module.exports = function() {

  var acceptable_sleep_time = 240;

  var followers = {};

  followers.determine_followers = function(lost_sleep) {
    followers.lost_followers = 0;
    var sleep_lost_above_acceptable = lost_sleep - acceptable_sleep_time;
    assess_if_followers_lost(sleep_lost_above_acceptable);
  };

  function assess_if_followers_lost(sleep_lost_above_acceptable) {
    if(sleep_lost_above_acceptable > 0) {
      var groups_of_30_minutes = Math.ceil(sleep_lost_above_acceptable / 30);
      determime_lost_followers(groups_of_30_minutes);
    }
  }

  function determime_lost_followers(groups_of_30_minutes) {
    for(var group = 0; group < groups_of_30_minutes; group ++) {
      var lost_followers = (group < 4)?100:200;
      followers.lost_followers += lost_followers;
    }
  }
  
  return followers;

};