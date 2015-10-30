module.exports = function(grunt) {
    grunt.config('htmlmin', {
        dist: {

            options: {
                removeComments: true,
                collapseWhitespace: true
            },

            files: {
                '_site/index.html': ['_site/index.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
