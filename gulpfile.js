var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');

var source = require('vinyl-source-stream');

gulp.task('serve', ['bundle', 'live-server'], function() {
	browserSync.init(null, {
		proxy: 'http://localhost:4000',
		browser: "chrome",
		port: 9001
	});
});

gulp.task('bundle', function() {
	return browserify({
		entries: 'app/main.jsx',
		debug: true
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'))
});

gulp.task('live-server', function() {
	var server = new LiveServer(
			'server/main.js',
			undefined,
			12345
		);
	server.start();
});