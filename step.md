# gulp 打包 requirejs

### 1. 安装node.js

```sh
https://nodejs.org/en/
```
### 2. 生成package.json文件

```sh
$ npm init
```

### 3. 安装依赖包

```sh
$ npm install gulp --save-dev
```
```sh
$ npm install gulp-requirejs-optimize --save-dev
```
### 4. gulpfile文件配置

```javascript

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

```