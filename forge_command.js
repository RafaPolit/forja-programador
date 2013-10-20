'use strict';

var forge = require('./forge/forge.js')(process.argv[2]);
console.log('-----------------------------------------');
console.log('               Para: ', forge.baby_cries_string);
console.log('    Tiempo de Sueño: ', forge.programmer.sleep_time_str);
console.log('   Acciones Tomadas: ', forge.programmer.actions_str);
console.log(' Followers Perdidos: ', forge.followers.lost_followers);
console.log('-----------------------------------------');