import gulp from 'gulp';
import clean_css from 'gulp-clean-css';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';

const { src, dest, series } = gulp;

function concatCSS() {
    return src([
        'src/css/base.css',
        'src/css/content.css',
        'src/css/icon.css',
        'src/css/media.css',
        'src/css/nav.css'
    ]).pipe(concat('all.css'))
    .pipe(dest('src/css/'));
}

function cssMinifier() {
    return src('src/css/all.css')
    .pipe(clean_css())
    .pipe(dest('dist/css'));
}

function concatJS() {
    return src([
        'src/js/nav.js',
        'src/js/translation.js'
    ]).pipe(concat('all.js'))
    .pipe(dest('src/js'));
}

function jsMinifier() {
    return src('src/js/all.js')
    .pipe(terser())
    .pipe(dest('dist/js'));
}

function pngMinifier() {
    return src('src/assets/images/*.png')
    .pipe(imagemin())
    .pipe(dest('dist/assets/images'));
}

export default series(concatCSS, cssMinifier, concatJS, jsMinifier, pngMinifier);