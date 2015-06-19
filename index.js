var through2 = require('through2')

module.exports = function (opt) {
  opt = opt || {}
  var out = through2()
  out.end([
    '<!doctype html>',
    '<head>',
    opt.title ? ('<title>' + opt.title + '</title>') : '',
    '<meta charset="utf-8">',
    '</head><body>',
    opt.entry ? ('<script src="' + opt.entry + '"></script>') : '',
    '</body>',
    '</html>'
  ].join(''))
  return out
}
