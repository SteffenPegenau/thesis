/*
 * <%= projectName %>
 * <%= projectUrl %>
 * Licensed under <%= license %> License
 */

var pdfLatex = "pdflatex -interaction=nonstopmode main.tex ; "
var latex = "latex -interaction=nonstopmode main.tex ; ";
var bibtex = "bibtex main.aux ; "


var recompile = bibtex + pdfLatex + bibtex + pdfLatex;

module.exports = function(grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({

    exec: {
      latex: {
        cmd: recompile
      },
      bibtex: {
        cmd: 'cp bibliography/referenzen.txt bibliography/referenzen.bib ; ' +
          recompile
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
