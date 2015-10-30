module.exports = function( grunt ) {

    grunt.registerTask('build', ['uglify', 'cssmin', 'htmlmin']);

};

