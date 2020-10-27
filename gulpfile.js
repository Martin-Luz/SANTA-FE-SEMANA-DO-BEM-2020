const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
var connect = require('gulp-connect-php');
var reload = browserSync.reload;


function compilaSass() {
    return gulp
        .src('./assets/scss/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream()); // atualiza os arquivos, sem que seja necessário um reload do browser
}


function browser() {
    connect.server({}, function() {
        browserSync({
            proxy: 'http://localhost/'
        });
    });

    /*
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
        */
}

function watch() {
    gulp.watch('./assets/scss/*.scss', compilaSass);
    gulp.watch("./assets/scss/*.scss").on("change", reload);
    gulp.watch(['*.php']).on('change', browserSync.reload);
}

gulp.task('sass', compilaSass);
gulp.task('browser-sync', browser);
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));