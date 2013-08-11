/*
 * sjpsega-grunt-contrib-stylus
 * https://github.com/apple/grunt-test
 *
 * Copyright (c) 2013 sjpsega
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    fd_grunt_jade: {
        compile: {
            options: {
                pretty: true,
                charset:{
                    from:"utf-8",
                    to:"gbk"
                }
            },
            files: [{
                src:"jade/**/*.jade",
                dest:"html/**/*.html"
            }]
        }
    },
    // Configuration to be run (and then tested).
    fd_grunt_stylus: {
        compile: {
              options: {
                  compress: false,
                  charset:{
                      from:"utf-8",
                      to:"gbk"
                  }
              },
              files: [{
                  src:"styl/**/*.styl",
                  dest:"css/**/*.css"
              }]
        }
    },
    watch: {
        jade: {
          files: ['jade/*.jade','jade/**/*.jade',"Gruntfile.js"],
          tasks: 'fd_grunt_jade'
        },
          fd_grunt_stylus: {
          files: ['styl/**/*.styl',"Gruntfile.js"],
          tasks: 'fd_grunt_stylus'
        }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('default', ['fd_grunt_jade','fd_grunt_stylus','watch']);

};
