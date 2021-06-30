/*depende cias conectadas*/ 
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

/* dirrecionamiento para app.scss para enlazar*/
function css(){
    return gulp
    .src('scss/app.scss')
    .pipe(autoprefixer({
        overrideBrowserslist : ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass({
        outputStyle: 'expanded', // nested, compact, compressed = comprimri el codigo
    }))
    // se almacena y se genera automaticamente abajo se registra como tarea
    .pipe(gulp.dest('css'));

}

// funcion para ejecutar  cambios de archivos
function watchFiles(){
    gulp.watch('scss/*.scss', css);
    //funciones para correr en paralelo y estar atento html
    gulp.watch('index.html');

}

// Registara Funciones Tareas, se agrega y se registra como css
gulp.task('css', css);
//modificacion para correr las funciones en paralelo
gulp.task('watch', gulp.parallel(watchFiles));

