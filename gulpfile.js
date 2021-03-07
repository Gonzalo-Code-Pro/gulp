const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
//variables
const scssFolderPath = "./scss/*.scss";
const cssDestino = "./css";
//tareas
gulp.task("sass", async () => {
  gulp
    .src("./scss/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
        sourceCommnents: true,
      })
    )
    .pipe(
      autoprefixer({
        versions: ["last 2 browsers"],
      })
    )
    .pipe(gulp.dest(cssDestino));
});
//watches all
gulp.task("default", () => {
  gulp.watch(scssFolderPath, gulp.series("sass"));
  gulp.watch("./*.html").on("change", browsersync.reload);
  gulp.watch(scssFolderPath).on("change", browsersync.reload);
  browsersync.init({
    server: {
      baseDir: "./",
    },
  });
});
