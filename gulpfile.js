var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('./dist/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./dist/*.scss',['styles']);
});