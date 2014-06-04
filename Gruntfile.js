module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Code minifying
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['js/*.js','js/vendor/*.js'], //input
        dest: 'js/build/main.min.js' //output
      }
    },

    // Handles LESS compiling
    less: {
      development: {
        options: {
            paths: ["css"],
            yuicompress: true
          }
        },
        src:{
          expand: true,
          cwd: "css",
          src: "custom.less",
          dest: "css",
          ext: ".css"
        }
      }, 

    // Recompile on change
    watch: {
      files: ['css/*.less'],
      tasks: ['less']
    },

    // Localhost server
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true
        }
      }
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('server', ['connect',]);

};