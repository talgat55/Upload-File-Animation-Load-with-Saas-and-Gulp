var gulp = require('gulp'); 
var del = require('del');  
var sass = require('gulp-sass'); 
var cleanCSS = require('gulp-clean-css');
gulp.task('clean:build', function() {
    del('./css/*')
})

gulp.task("build", function(){
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));

})
