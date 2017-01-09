const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const minifyCSS = require('gulp-minify-css')
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const historyApiFallback = require('connect-history-api-fallback');
const cacheBuster = require('gulp-cache-bust');
const ngAnnotate = require('gulp-ng-annotate');

// process JS files and return the stream.

gulp.task('copyHtml', function() {
    return gulp.src(['app/**/!(*.js)'])
        .pipe(gulp.dest('dist/app'));
});

gulp.task('css', function() {
    gulp.src('*.css')
        .pipe(minifyCSS())
        .pipe($.concat('app.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return gulp.src('index.html')
        .pipe(wiredep())
        .pipe($.useref())
        .pipe($.if('*.js', ngAnnotate()))
        .pipe($.if('*.js', $.uglify()))
        .pipe(gulp.dest('dist'));
});


gulp.task('serve', () => {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.'],
            middleware: [historyApiFallback()],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch([
        'app/**/*.html',
        'app/scripts/**/*.js'
    ]).on('change', reload);

});

gulp.task('build', ['copyHtml', 'js', 'css'], function() {
    return gulp.src('dist/index.html')
        .pipe(cacheBuster({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('dist'));
});