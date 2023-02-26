const {src, dest, watch, series, parallel} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// import imagemin from 'gulp-imagemin'
// const imagemin = 
// require('gulp-imagemin');


function css(done) {
    // // .pipe(sass({outputStyle:'compressed'}))
    src('src/scss/app.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('build/css'));

    done();
}
function imagenes() {
    return src('src/img/**/*')
    // .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest('build/img'))

    
}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    watch('src/img/**/*', imagenes);
    done();
}


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev)