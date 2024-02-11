const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const clean = require('gulp-clean');
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");

const scripts = () => {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/scripts'));
}

const styles = () => {
    return gulp.src('./src/styles/*.scss')
        , pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed' }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./dist/styles'));
}

const compressImg = () => {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

const compressHtml = () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

const clear = () => {
    return gulp.src('./dev', { read: false })
        .pipe(clean());
}

// ------------------------------------------------------


const scriptDev = () => {
    return gulp.src('./src/scripts/*.js')
        .pipe(plumber())
        .pipe(
            babel({
                presets: [
                    [
                        "@babel/env",
                        {
                            modules: false,
                        },
                    ],
                ],
            })
        )
        .pipe(uglify())
        .pipe(gulp.dest('./dev/scripts'));

}

const compressImgDev = () => {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dev/images'));
}

const stylesDev = () => {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dev/styles'));
}

const compressHtmlDev = () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dev'));
}



exports.default = gulp.parallel(compressHtml);

exports.default = function () {
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.parallel(scriptDev));
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.parallel(compressImgDev));
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.parallel(stylesDev));
    gulp.watch('./src/index.html', { ignoreInitial: false }, gulp.parallel(compressHtmlDev));
}