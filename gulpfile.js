(function() {
  'use strict';
 
  var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    // notify = require('gulp-notify'),
    _paths = ['/models/*.js', '/routes/*.js'];
 
 
  //register nodemon task
  gulp.task('nodemon', function() {
    nodemon({
      script: './bin/www',
      env: {
        'NODE_ENV': 'development'
      }
    })
      .on('restart', function() {
          // when the app has restarted, run livereload.
          console.log('app restarted');
          // gulp.src('./bin/www')
          //   .pipe(livereload())
          //   .pipe(notify('Done reloading the backend...'));
      });
  });
 
  // Rerun the task when a file changes
  gulp.task('watch', function() {
    livereload.listen();
    gulp.src(_paths, {
      read: false
    })
      .pipe(watch({
        emit: 'all'
      }))
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
    watch(_paths, livereload.changed);
  });
 
  //lint js files
  gulp.task('lint', function() {
    gulp.src(_paths)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });
 
 
  // The default task (called when you run `gulp` from cli)
  gulp.task('default', ['lint', 'nodemon', 'watch']);
 
}());

// Dependencies
// var gulp = require('gulp');
// var nodemon = require('gulp-nodemon');
// var notify = require('gulp-notify');
// var livereload = require('gulp-livereload');
 
// // Task
// gulp.task('default', function() {
// 	// listen for changes
// 	livereload.listen();
// 	// configure nodemon
// 	nodemon({
// 		// the script to run the app
// 		script: './bin/www',
// 		ext: ''
// 	}).on('restart', function(){
// 		// when the app has restarted, run livereload.
// 		gulp.src('app.js')
// 			.pipe(livereload())
// 			.pipe(notify('Reloading page, please wait...'));
// 	})
// })