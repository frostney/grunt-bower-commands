/*
 * grunt-bower-commands
 * https://github.com/Stoney-FD/grunt-bower-commands
 *
 * Copyright (c) 2013 Johannes Stein
 * Licensed under the MIT license.
 */

'use strict';

var bower = require('bower');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('bower_uninstall', 'Uninstall bower packages', function() {
    var done = this.async();
    
    var options = this.options({
      names: [],
      opts: {},
      config: {},
      done: null
    });
    
    bower.commands.install(optios.names, options.opts, options.config).on('end', function() {
      if (typeof options.done === 'function') {
        options.done.apply(this, arguments);
      }
      
      done();
    });
  });

};
