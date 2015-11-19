// Importamos las dependencias
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	historyApiFallback = require('connect-history-api-fallback'),
	inject = require('gulp-inject'),
	wiredep = require('wiredep').stream;

// Creamos objeto con las rutas utilizadas en gulfile.js
var paths = {
	html: './app/**/*.html',
	js: './app/scripts/**/*.js',
	css: './app/styles/**/*.css',
	bower: './bower.json'
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

// Inyectamos los archivos propios (js y css) al index.html
gulp.task('inject', ['wiredep'], function (){
	var sources = gulp.src([paths.js, paths.css]);

	return gulp.src('index.html', {
		cwd: './app'
	})
	.pipe(inject(sources, {
		read: false,
		ignorePath: '/app'
	}))
	.pipe(gulp.dest('./app'));
});

// Inyectamos las dependencias que instalemos con bower
gulp.task('wiredep', function (){
	return gulp.src('index.html', {
		cwd: './app'
	})
	.pipe(wiredep({
		directory: './app/vendor',
		read: false,
		onError: function (err){
			console.log(err.code);
		}
	}))
	.pipe(gulp.dest('./app'));
});

// Dejamos en escucha las siguientes tareas - modo developer
gulp.task('watch', function (){
	gulp.watch([paths.html], ['html']);
	gulp.watch([paths.js], ['inject']);
	gulp.watch([paths.css], ['inject']);
	gulp.watch([paths.bower], ['wiredep']);
});

// Tareas watch para modo servidor
gulp.task('server-only', ['server', 'html'], function (){
	gulp.watch([paths.html], ['html']);
});

// Tarea por defecto
gulp.task('default', ['server', 'inject', 'watch']);