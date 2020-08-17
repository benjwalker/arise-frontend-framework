var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

//Compile SCSS
gulp.task('compile-scss', function () {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('compiled'))
});

//Compile JS
gulp.task('compile-js', function () {
    return gulp.src([
        /*Scripts loaded via NPM*/
        'node_modules/jquery-cycle-2/src/jquery.cycle.all.js',
        'node_modules/jquery-easing/jquery.easing.1.3.js',
        /*Scripts in directories*/
        'js/includes/*.js',
        'js/*.js'
    ]).pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('compiled'))
});

//Run tasks
gulp.task('default', gulp.series('compile-scss', 'compile-js'));

//Define watcher
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('compile-scss'));
    gulp.watch('js/**/*.js', gulp.series('compile-js'));
})