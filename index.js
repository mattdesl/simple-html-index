var through2 = require('through2')

module.exports = function (opt) {
  opt = opt || {}
  var out = through2()
  var format = opt.format
  var delim = format ? '\n' : ''
  var tab = format ? '  ' : ''
  var html = [
    '<!doctype html>',
    '<head>',
    opt.title ? (tab + '<title>' + opt.title + '</title>') : '',
    tab + '<meta charset="utf-8">',
    opt.css ? (tab + '<link rel="stylesheet" href="' + opt.css + '">') : '',
    '</head>',
    '<body>',
    opt.entry ? (tab + '<script src="' + opt.entry + '"></script>') : '',
    '</body>',
    '</html>',
    '' // finish with newline when --format
  ].join(delim).replace(/\n+/g, delim)
  out.end(html)
  return out
}
