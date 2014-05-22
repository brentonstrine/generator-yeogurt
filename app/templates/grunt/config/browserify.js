/**
 * browserify.js
 * Configuration for browserify task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('browserify', {
        server: {
            options: {<% if (jsFramework === 'Backbone + React') { %>
                transform:  [ require('grunt-react').browserify ],
                <% } %>bundleOptions: {
                    debug: true
                }
            },
            files: {
                '<%%= yeogurt.server %>/scripts/main.js': ['<%%= yeogurt.dev %>/scripts/main.js']
            }
        },
        dist: {
            options: {<% if (jsFramework === 'Backbone + React') { %>
                transform:  [ require('grunt-react').browserify ],
                <% } %>bundleOptions: {
                    debug: true
                }
            },
            files: {
                '<%%= yeogurt.dist %>/scripts/main.js': ['<%%= yeogurt.dev %>/scripts/main.js']
            }
        }
    });

    // grunt.loadNpmTasks('grunt-browserify');
};