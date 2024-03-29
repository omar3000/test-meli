const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("sass", function () {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(gulp.dest("./src/css"));
});

gulp.task(
  "watch",
  gulp.series("sass", function () {
    gulp.watch("src/scss/*.scss", gulp.series("sass"));
  })
);

gulp.task("start", gulp.series("watch"));
