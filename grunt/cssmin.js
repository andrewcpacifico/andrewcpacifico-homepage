module.exports = function( grunt ) {

    grunt.config('cssmin', {
        dist: {
            options: {
                keepSpecialComments: 0
            },

            files: {
                '_site/css/bootstrap.min.css': ['_site/css/bootstrap.min.css'],
                '_site/css/grayscale.css': ['_site/css/grayscale.css'],
                '_site/css/timeline.css': ['_site/css/timeline.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};

