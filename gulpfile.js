var gulp = require('gulp');  
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var paths = {
    scss: './sass/*.scss'
};
gulp.task('sass', function () {  
    gulp.src('scss/app.scss')
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
});
gulp.task('browser-sync', function() {  
    browserSync.init(["stylesheets/*.css", "js/*.js", "*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {  
    //gulp.watch(["scss/*.scss"], ['sass']);
});

