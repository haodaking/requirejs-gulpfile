var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('scripts', function () {
    return gulp.src('src/js/main.js')
        .pipe(requirejsOptimize({
            mainConfigFile: 'src/js/main.js',
            // 代码优化
            optimize: 'none'
            // exclude: [
            //     'jquery'
            // ]
        }))
        .pipe(gulp.dest('dist'));
});