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
		cmd: 'bibtex main.aux ; pdflatex main.tex'
	},
	bibtex: {
		cmd: 'cp bibliography/referenzen.txt bibliography/referenzen.bib'
	}
    },
    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['exec:latex']
      },
      bibtex: {
	files: 'bibliography/referenzen.txt',
	tasks: ['exec:bibtex']
	}
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
