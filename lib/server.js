var express = require('express'),
    index = require('serve-index'),
    path = require('path'),
    errorHandler = require('errorhandler');

var root = path.resolve('.');
var app = express();

app.use(express.static(root));
app.use(index(root));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.listen(3000, function () {
  console.log("Server listening to 3000 with directory " + root);
});
