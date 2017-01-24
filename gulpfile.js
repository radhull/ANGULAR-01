var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');




var paths = {
  scripts: ['./node_modules/core-js/client/shim.min.js','./node_modules/zone.js/dist/zone.js', './node_modules/systemjs/dist/system.js'],
  destino: './bundles'
};

gulp.task('clean', function() {
  return del(paths.destino);
});

gulp.task('bundles',['clean'], function() {
   gulp.src(paths.scripts)
            .pipe(uglify())
            .pipe(concat('polyfills.min.js'))
            .pipe(gulp.dest(paths.destino));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['bundles']);
});

gulp.task('default',['watch', 'bundles']);