
'use strict';

module.exports = function() {
  return {
    forge: function(req, res){
      var forge = require('../forge/forge.js')((req.session.submit)?req.session.data.input:'');

      res.render('forge', {
        title: 'Forja del Programador',
        forge: forge
      });
    },

    forge_post: function(req, res){
      req.session.data = req.body;
      req.session.submit = true;
      res.redirect('/forge');
    }
  };
};