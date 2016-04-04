module.exports = function (grunt) {
    "use strict";

    // Project configuration
    grunt.initConfig({
        bowercopy: {
            css: {
                options: {
                    destPrefix: 'css'
                },
                files: {
                    'font-awesome.css': 'font-awesome/css/font-awesome.min.css',
                    'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap.css.map': 'bootstrap/dist/css/bootstrap.min.css.map',
                    'jqtree.css': 'jqtree/jqtree.css',
                    'codemirror.css': 'codemirror/lib/codemirror.css',
                    'codemirror/theme': 'codemirror/theme',
                    'codemirror/addon/scroll/simplescrollbars.css': 'codemirror/addon/scroll/simplescrollbars.css'
                },
            },
            libs: {
                options: {
                    destPrefix: 'js/libs'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.min.js',
                    'bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js',
                    'jqueryui.js': 'jquery-ui/jquery-ui.min.js',
                    'codemirror.js': 'codemirror/lib/codemirror.js'
                }
            },
            codemirror: {
                options: {
                    destPrefix: 'js/plugins/codemirror'
                },
                files: {
                    'addon/edit/matchbrackets.js': 'codemirror/addon/edit/matchbrackets.js',
                    'addon/selection/active-line.js': 'codemirror/addon/selection/active-line.js',
                    'addon/scroll/simplescrollbars.js': 'codemirror/addon/scroll/simplescrollbars.js',
                    'mode/htmlmixed/htmlmixed.js': 'codemirror/mode/htmlmixed/htmlmixed.js',
                    'mode/css/css.js': 'codemirror/mode/css/css.js',
                    'mode/clike/clike.js': 'codemirror/mode/clike/clike.js',
                    'mode/xml/xml.js': 'codemirror/mode/xml/xml.js',
                    'mode/php/php.js': 'codemirror/mode/php/php.js',
                    'keymap/sublime.js': 'codemirror/keymap/sublime.js'
                }
            },
            plugins: {
                options: {
                    destPrefix: 'js/plugins'
                },
                files: {
                    'jquery.jqtree.js': 'jqTree/tree.jquery.js'
                }
            },
            fonts: {
                options: {
                    destPrefix: 'fonts'
                },
                files: {
                    'fontawesome-webfont.eot': 'font-awesome/fonts/fontawesome-webfont.eot',
                    'fontawesome-webfont.svg': 'font-awesome/fonts/fontawesome-webfont.svg',
                    'fontawesome-webfont.ttf': 'font-awesome/fonts/fontawesome-webfont.ttf',
                    'fontawesome-webfont.woff': 'font-awesome/fonts/fontawesome-webfont.woff',
                    'fontawesome-webfont.woff2': 'font-awesome/fonts/fontawesome-webfont.woff2',
                    'FontAwesome.otf': 'font-awesome/fonts/FontAwesome.otf',

                    'glyphicons-halflings-regular.eot': 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                    'glyphicons-halflings-regular.svg': 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                    'glyphicons-halflings-regular.ttf': 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                    'glyphicons-halflings-regular.woff': 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
                    'glyphicons-halflings-regular.woff2': 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');

    // Default task
    grunt.registerTask('default');
};

