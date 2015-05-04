var gulp 					= require('gulp')
var	browserify 				= require('browserify')
var	sass 					= require('gulp-ruby-sass')
var	connect					= require('gulp-connect')
var	source 					= require('vinyl-source-stream')
var	prefix					= require('gulp-autoprefixer')
var	uglify 					= require('gulp-uglify')
var	minifyCSS 				= require('gulp-minify-css')
var	sequence				= require('run-sequence')
var	watchify				= require('watchify')
var	gutil					= require('gulp-util')
var	jshint					= require('gulp-jshint')
var	stylish 				= require('jshint-stylish')
var	historyApiFallback 		= require('connect-history-api-fallback')
var notify					= require('gulp-notify')
var babel					= require('babelify')
var coffee					= require('gulp-coffee')

// 
// Browserfy bundle
// 

gulp.task('scripts', function() {
	var b = browserify({
		cache: {},
		packageCache: {},
		fullPaths: true,
		debug: false
	}).transform(babel)

	b = watchify(b)
	b.on('update', function() {
		bundleShare(b)
	})

	b.add('./src/js/main.js')
	bundleShare(b)

	function bundleShare(b) {
		gutil.log(gutil.colors.blue('Bundling JavaScript...'))
		b.bundle()
			.on('error', function(err) {
				gutil.log(gutil.colors.red('JavaScript Error: ' + err.message))
			})
			.on("error", notify.onError({
				title: 'JavaScript Error',
				message: "<%= error.message %>",
				sound: 'Basso'
			}))
			.pipe(source('main.js'))
			.pipe(connect.reload())
			.pipe(gulp.dest('public/scripts'))
			gutil.log(gutil.colors.green('JavaScript Ready!'))
	}
})

// 
// Compiles CofeeScript
// 

gulp.task('coffee', function(){
	gulp.src('./src/coffee/**/*.coffee')
	.pipe(coffee({bare: true}))
	.on("error", notify.onError({
		title: 'CoffeeScript Error',
		message: "<%= error.message %>",
		sound: 'Basso'
	}))
	.pipe(gulp.dest('./src/js'))
})

//
// JSHint
//

gulp.task('jshint', function() {
	gulp.src('./src/js/**/*.js')
		.pipe(jshint())
	    .pipe(jshint.reporter(stylish))
})

// 
// Sass compiling
// 

gulp.task('sass', function() {
	return sass('src/styles/screen.sass', {
		sourcemap: false,
	})	
	.pipe(prefix())
	.pipe(gulp.dest('public/styles'))
	.pipe(connect.reload())
})

//
// Gulp watchers
//

gulp.task('watch', function() {
	gulp.watch('src/js/**/*.js', ['jshint'])
	gulp.watch('src/coffee/**/*.coffee', ['coffee'])
	gulp.watch('src/styles/*', ['sass'])
})

// 
// Localhost server
// 

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000,
		livereload: true,

		// For single page apps

		// middleware: function(connect, opt) {
		// 	return [ historyApiFallback ]
		// }
	})
})

gulp.task('default', ['connect', 'sass', 'scripts', 'watch'])

// 
// Build tasks
// 

gulp.task('build', function() {
	sequence(['minifyCSS', 'uglifyJS'])
})

gulp.task('minifyCSS', function() {
	gulp.src('./public/styles/screen.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./public/styles'));
})

gulp.task('uglifyJS', function() {
	gulp.src('./public/scripts/main.js')
	.pipe(uglify())
	.pipe(gulp.dest('./public/scripts'));
})




