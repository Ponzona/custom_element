const gulp           = require('gulp');
const browserSync    = require('browser-sync').create();
const reload         = browserSync.reload;

const less 					 = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix     = new LessAutoprefix({ browsers: ['last 2 versions'] });
const concat 			   = require('gulp-concat');

gulp.task('less', function () {
	return gulp.src('./styles/*.less')
	.pipe(concat('bundle.less'))
	.pipe(less({
		plugins: [autoprefix]
	}))
	.pipe(gulp.dest('./bundle/'));
});

gulp.task('watch', function () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('styles/*.less', gulp.series('less'));
	gulp.watch('**').on('change', reload);
});