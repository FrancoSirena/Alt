import gulp  from 'gulp';
import babel from 'gulp-babel';
import gls from 'gulp-live-server';
var path = require('path');
var webpack = require('webpack');

gulp.task("webpack", function(callback) { 
    webpack({
        entry: './src/app.js',
        output: { //saida
            path: "./dist/",
            filename: "app.js"
        },
        devtool: 'source-map' ,
        module: {
            loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                presets: ['es2015', 'react']
                }
            }
            ]
        }
    }, function(err, stats) {
                if(err) throw new gutil.PluginError("webpack", err);
                console.log("[webpack]", stats.toString({
                    // output options
                }));
                callback();
    });
})
gulp.task('server', () => { 
     var server = gls.static('./',process.env.PORT, process.env.IP);
    server.start();
});
 
gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', ['webpack']);
});
 
gulp.task('default', ['webpack', 'server', 'watch' ]);