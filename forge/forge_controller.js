'use strict';

module.exports = function() {

  var forge = {};

  forge.baby_cries_string = '';

  var combinable_cries = [
    { replace: 'Gua-Bua-Mua', replace_with: 'Gua_Bua_Mua_combo' },
    { replace: 'Mua-Bua', replace_with: 'Mua_Bua_combo' },
    { replace: 'Bua-Gua', replace_with: 'Bua_Gua_combo' }
  ];

  forge.set_baby_cries = function(cries_string) {
    forge.baby_cries_string = cries_string;
  };

  forge.combine_baby_cries = function() {
    forge.combined_baby_cries = forge.baby_cries_string;
    for(var index=0; index < combinable_cries.length; index++) {
      forge.combined_baby_cries = replace_cries(forge.combined_baby_cries, combinable_cries[index]);
    }
  };

  function replace_cries(str, replace_options) {
    return str.replace(replace_options.replace, replace_options.replace_with);
  }


  
  return forge;

};