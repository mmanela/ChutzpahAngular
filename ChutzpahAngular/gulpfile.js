/// <binding BeforeBuild='Default' />
var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('ClearFolder', function () {
    return del([
    'Dist/**/*'
    ]);
}); 

gulp.task('Transpile', ['ClearFolder'], function () {
    return gulp.src("Angular_Code/**/*.ts")
        .pipe(tsProject())
        .js.pipe(gulp.dest('Angular_Code'));
});

gulp.task('CopyViewtemplates', ['ClearFolder', 'Transpile'], function () {
    gulp.src(['Angular_Code/ViewTemplates/**/*.html'])
    .pipe(gulp.dest('Dist/ViewTemplates'));
});

gulp.task('Watch', function () {
    gulp.watch('Angular_Code/**/*.ts', ['Transpile']);
    gulp.watch('Angular_Code/**/*.html', ['CopyViewtemplates']);
});

gulp.task('default', ['ClearFolder', 'Transpile', 'CopyViewtemplates']);