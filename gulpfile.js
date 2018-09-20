'use strict';

// npm init to create package.json file
// don't forget to install gulp as a dev dependency for this project, and also globally

var   gulp = require('gulp'),
    concat = require('gulp-concat'),
       del = require('del'),
livereload = require('gulp-livereload'),
      sass = require('gulp-sass');
var webserver = require('gulp-webserver');
    
 

gulp.task("concatIndex", function() {
  gulp.src(['partials/header.html', 'partials/indexbody.html', 'partials/footer.html'])
  .pipe(concat("index.html"))
  .pipe(gulp.dest("public"))
  .pipe(livereload());
});

 

 

gulp.task("watch", function() {
  livereload.listen();
  return gulp.watch(['partials/*.html', 'scss/*', 'img/*', 'js/*'], ['build'])
  
})

gulp.task('clean', function() {
  del(['public'])
});

gulp.task("build", [ 'concatIndex' ], function() {
  return gulp.src(["css/*", "images/*", "js/*", "fonts/*"], { base: './'})
  .pipe(gulp.dest('public'))
  .pipe(livereload());
            
});

gulp.task('serve', [ 'build' ],  function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task("default", ["watch"]);

