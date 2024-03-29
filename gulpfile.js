var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('sync', function(){

  browserSync.init({
    server: {
      baseDir:"./",
      index: "index.html"
    }
  });

  gulp.watch(["./*.html", "./css/*.css"]).on('change', browserSync.reload);
})
