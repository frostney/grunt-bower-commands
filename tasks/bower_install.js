/*
 * grunt-bower-commands
 * https://github.com/Stoney-FD/grunt-bower-commands
 *
 * Copyright (c) 2013 Johannes Stein
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('bower_install', 'Install bower dependencies', function() {
    var done = this.async();
    
    var options = this.options({});
    
    bower.commands.install();
  });

};
