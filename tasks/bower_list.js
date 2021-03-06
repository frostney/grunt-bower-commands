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

  grunt.registerMultiTask('bower_list', 'List all bower packages', function() {
    var done = this.async();
    
    var options = this.options({
      paths: false,
      offline: false,
      config: {},
      done: null
    });
    
    var smallOptions = {
      paths: options.paths,
      offline: options.offline
    };
    
    bower.commands.list(smallOptions, options.config).on('end', function() {
      if (typeof options.done === 'function') {
        options.done.apply(this, arguments);
      }
      
      done();
    });
  });

};
