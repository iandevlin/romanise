module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            min: {
                files: {
                    "romanise.min.js": "romanise.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("js", [ "uglify" ]);

};