'use strict';

module.exports = function(sleep_lost) {

  var followers = {};

  followers.lost_followers = 0;

  var sleep_lost_above_4_hours = sleep_lost - 240;

  if(sleep_lost_above_4_hours > 0) {
    var groups_of_30_minutes = Math.ceil(sleep_lost_above_4_hours / 30);
    determine_lost_followers(groups_of_30_minutes);
  }

  function determine_lost_followers(groups_of_30_minutes) {
    for(var group = 0; group < groups_of_30_minutes; group ++) {
      var lost_followers = (group < 4)?100:200;
      followers.lost_followers += lost_followers;
    }
  }
  
  return followers;

};