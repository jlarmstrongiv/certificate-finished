// require the module as normal
var bs = require('browser-sync').create();

// .init starts the server
bs.init({
  server: './src'
});

// Now call methods on bs instead of the
// main browserSync module export
bs.watch('./src/*.html').on('change', bs.reload);
bs.watch('./src/styles/*.css', function (event, file) {
  if (event === 'change') {
    bs.reload('./src/*.html');
  }
});
bs.watch('./src/scripts/*.js', function(event, file) {
  if (event === 'change') {
    bs.reload('./src/*.html');
  }
});
