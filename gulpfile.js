// Importamos las dependencias
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	historyApiFallback = require('connect-history-api-fallback');

// Creamos objeto con las rutas utilizadas en gulfile.js
var paths = {
	html: './app/**/*.html'
};

// Creamos el servidor con la opcion livereload activada y con
// el historial activado para app SPA
gulp.task('server', function (){
	connect.server({
		root: './app',
		port: 3000,
		livereload: true,
		middleware: function (connect, opt){
			return [historyApiFallback({})];
		}
	});
});

// Recargamos el navegador cuando hay cambios en el html
gulp.task('html', function (){
	gulp.src(paths.html)
	.pipe(connect.reload());
});

// Dejamos en escucha las siguientes tareas
gulp.task('watch', function (){
	gulp.watch([paths.html], ['html']);
});

gulp.task('default', ['server', 'watch']);