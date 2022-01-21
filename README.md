# Proyecto Base para maquetar Aplicaciones Web Responsivas con Sass y Gulp

#### Descripción:

Plantilla para implementar maquetaciones de paginas web usando sass y gulp.

### Técnologia empleada

- [sass]
- [gulp]

#### _**Configuracion de paquetes:**_

```sh
$ npm install -D gulp gulp-sass gulp-minify-css gulp-concat sass
```

#### _**Configuracion de scripts:**_

```sh
	  "scripts": {
		"build": "gulp build_CSS",
		"build:minifyCSS": "gulp build_minifyCSS",
		"watch": "gulp watch_CSS"
	  },
```

#### _**Configuracion de archivo gulpfile.js:**_

```sh
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

```
