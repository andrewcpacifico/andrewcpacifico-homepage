module.exports = function( grunt ) {

    grunt.config('uglify', {
        dist: {
            files: {
                '_site/js/grayscale.js': ['_site/js/grayscale.js'],
                '_site/js/bootstrap.min.js': ['_site/js/bootstrap.min.js'],
                '_site/js/jquery.js': ['_site/js/jquery.js'],
                '_site/js/jquery.easing.min.js': ['_site/js/jquery.easing.min.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};

