/*
 * <%= projectName %>
 * <%= projectUrl %>
 * Licensed under <%= license %> License
 */
module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    
    exec: {
      latex: {
		cmd: 'pdflatex main.tex'
	}
    },
    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['exec:latex']
      },
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    grunt.config('shell.figs.src', filepath);
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  // Default task
  grunt.registerTask('default', ['watch']);
};
