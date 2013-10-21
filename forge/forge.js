'use strict';

module.exports = function(baby_cries) {

  var forge = set_up_forge(baby_cries || '');

  forge.programmer.attend_to_baby();
  forge.followers.determine_followers(forge.programmer.lost_sleep);

  format_output();

  function set_up_forge(baby_cries) {
    return {
      baby_cries_string: baby_cries,
      programmer: require('../forge/programmer.js')(baby_cries),
      followers: require('../forge/twitter_followers.js')()
    };
  }

  function format_output() {
    var utils = require('../utils/string_utils.js')();
    forge.programmer.sleep_time_str = utils.format_hours_minutes(forge.programmer.sleep_time);
    forge.programmer.actions_str = utils.add_dash_spaces(forge.programmer.actions);
  }

  return forge;

};