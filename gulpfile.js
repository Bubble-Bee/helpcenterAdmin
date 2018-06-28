var gulp=require('gulp');
var browserSync=require('browser-sync').create();
var uglifiy=require('gulp-uglify');
var concat=require('gulp-concat');
//var babel=require('gulp-babel');
var reload=browserSync.reload;
var paths = {
    styles: {
      src: 'src/assets/**/*.cs',
      dest: 'assets/styles/'
    },
    scripts: {
      src: 'src/assets/**/*.js',
      dest: 'assets/scripts/'
    }
  };
gulp.task('minify',[],function(){
    gulp.src(paths.scripts.src,{sourcemaps:true})
    .pipe(uglifiy())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
});
gulp.task('serve',[],function(){
    browserSync.init({
        server:"./src"
    });
    gulp.watch("./src/**/*.html").on('change',reload);
    gulp.watch("./src/app/**/*.js").on('change',reload);
});
gulp.task('default',['serve']);