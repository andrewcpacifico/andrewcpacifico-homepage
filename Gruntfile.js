module.exports = function(grunt) {

    require('./grunt/uglify.js')(grunt);
    require('./grunt/cssmin.js')(grunt);
    require('./grunt/htmlmin.js')(grunt);
    require('./grunt/workflow.js')(grunt);

};
