var express = require('express');
var index = require('serve-index');
var path = require('path');
var errorHandler = require('errorhandler');
var port = 3000;
var logging = false;

if (process.argv.length > 2) {
  var args = process.argv.slice(2);

  for (var i = 0; i < args.length; i++) {
    var value = args[i];
    if (value === "-h") {
      console.log("Usage: nanoserver [options]\n" +
                  "\n" +
                  "Options\n" +
                  "\t-h: print help.\n" +
                  "\t-p <port>: customise port.\n" +
                  "\t-l: enable logging\n");
      process.exit(0);
    } else if (value === "-l") {
      logging = true;
    } else if (value === "-p") {
      if (i < args.length - 1) {
        i++;
        port = parseInt(args[i], 10);
      }
    }
  }
}

var root = path.resolve('.');
var app = express();

app.use(function (req, res, next) {
  if (logging) {
    console.log(req.method + ': ' + req.url);
  }
  next();
});
app.use(express.static(root));
app.use(index(root));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.listen(port, function () {
  console.log("Server listening to " + port + " with directory " + root);
});
