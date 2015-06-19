var test = require('tape')
var html = require('./')
var concat = require('concat-stream')

test('should write html', function (t) {
  t.plan(3)
  run(t, undefined, '<!doctype html><head><meta charset="utf-8"></head><body></body></html>')
  run(t, { title: 'foo' }, '<!doctype html><head><title>foo</title><meta charset="utf-8"></head><body></body></html>')
  run(t, { title: 'foo', entry: 'blah.js' }, '<!doctype html><head><title>foo</title><meta charset="utf-8"></head><body><script src="blah.js"></script></body></html>')
})

function run (t, opt, expected) {
  html(opt).pipe(concat(function (body) {
    var str = body.toString()
    t.equal(str, expected)
  }))
}