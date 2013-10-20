Forja del Programador
=====================

Prueba de Codigo 2 - Levelap
19 Octubre, 2013


Requisitos
----------
* nodejs

Instalación
-----------
`$ npm install`

Testing
-------
`$ npm test`

Utilización
===========
Existen dos maneras de utilizar la Forja:
* Desde un navegador de internet
* Desde una consola de comando

=====================================================================================
Desde un Navegador de Internet
------------------------------
Para utilizar la aplicación desde consola debe primero levantar el servidor de Node

`$ npm start`

Una vez levantado el servidor, navegue en el Navegador a:
* http://localhost:3000  -  Para ver los casos de ejemplo planteados.
* http://localhost:3000/forge  -  Para ingresar nuevos casos.

Utilice los botones de cada tipo de llanto para agregarlo.  Puede eliminar el úlitmo
llanto o limpiar completamente el input y empezar de nuevo.  Cuando tenga la cadena
deseada, seleccione el botón 'Calcular!' para ver el resultado.

=====================================================================================
Desde la Consola
----------------
`$ node forge_command.js 'Bua-Gua-Mua'`

(Remplace la cadena de caracteres con los llantos deseados)

=====================================================================================

Estructura
----------
* Los scripts principales de la Aplicación se ecuentran dentro de la carpeta /forge
* Un pequeño script de utilidades para la Aplicación se ecuentra en la carpeta /utils
* Cada uno de ellos tiene su respectivo test dentro de la carpeta /specs 
* Hay un test adicional llamado test_cases_spec que demuestra cada uno de los casos
  ejemplo descritos en la prueba de código
* Hay una fixture con los casos ejemplo en la carpeta /fixtures
* Hay un archivo de utilidades para la forma de entrada de datos en /public/javascripts
  que no está testeado pues solo representa funcionalidad para entrada automatizada de
  datos, no tiene ninguna funcionalidad dentro de la aplicación.

Notas
-----
* La aplicación recibe un solo input como parámetro del módulo principal y calcula todos
  los output necesarios en las distintas propiedades del objeto como 'programmer' y 
  'followers'.
* Si bien no hay control de errores del input desde la aplicación de consola, la aplicación
  desde formulario WEB está diseñada de tal manera que no haya como ingresar datos 
  mal formados. (El control de errores no estaba descrito en la descripción de la prueba).
* La aplicación calcula correctamente las horas que ha dormido el programador y, si las
  acciones requieren más de las 8 horas, todavía reporta como que ha dormido 0 minutos,
  en lugar de reportar sueño 'negativo'.
* La aplicación calcula correctamente los followers perdidos inclusive pasadas las 8 
  horas de sueño.  Es decir, se puede perder más de 1200 seguidores si el programador sigue
  atendiendo al niño por encima de las 8 horas de sueño.
* Se uilizó bootstrap solamente como template CSS y no se utilizó ninguna funcionalidad JS
  de la librería ni de ninguna otra como está estipulado en los requerimientos de la prueba.
* Las rutas no están testeadas.
* Las vistas no tienen ninguna lógica más allá del aspecto de los objetos.