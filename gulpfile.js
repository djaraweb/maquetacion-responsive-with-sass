const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minifyCSS = require("gulp-minify-css");
const concat = require("gulp-concat");

gulp.task("build_CSS", () => {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("src/public/css"));
});

gulp.task("build_minifyCSS", () => {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest("src/public/css"));
});

gulp.task("watch_CSS", () => {
  gulp.watch("src/sass/**/*.scss", gulp.series("build_CSS"));
});
