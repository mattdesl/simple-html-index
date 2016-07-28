var test = require('tape')
var html = require('./')
var concat = require('concat-stream')

test('should write html', function (t) {
  t.plan(8)
  run(t, undefined, '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"></head><body></body></html>')
  run(t, { title: 'foo' }, '<!DOCTYPE html><html lang="en"><head><title>foo</title><meta charset="utf-8"></head><body></body></html>')
  run(t, { title: 'foo', base: '/' }, '<!DOCTYPE html><html lang="en"><head><title>foo</title><meta charset="utf-8"><base href="/"></head><body></body></html>')
  run(t, { title: 'foo', entry: 'blah.js' }, '<!DOCTYPE html><html lang="en"><head><title>foo</title><meta charset="utf-8"></head><body><script src="blah.js"></script></body></html>')
  run(t, { title: 'foo', css: 'bla.css' }, '<!DOCTYPE html><html lang="en"><head><title>foo</title><meta charset="utf-8"><link rel="stylesheet" href="bla.css"></head><body></body></html>')
  run(t, { title: 'foo', favicon: true }, '<!DOCTYPE html><html lang="en"><head><title>foo</title><meta charset="utf-8"><link rel="shortcut icon"type="image/x-icon" href="data:image/x-icon;,"></head><body></body></html>')
  run(t, { title: 'foo', favicon: true, lang: 'en-US' }, '<!DOCTYPE html><html lang="en-US"><head><title>foo</title><meta charset="utf-8"><link rel="shortcut icon"type="image/x-icon" href="data:image/x-icon;,"></head><body></body></html>')
  run(t, { title: 'foo', favicon: true, lang: 'en-US', base: '/foo/' }, '<!DOCTYPE html><html lang="en-US"><head><title>foo</title><meta charset="utf-8"><base href="/foo/"><link rel="shortcut icon"type="image/x-icon" href="data:image/x-icon;,"></head><body></body></html>')
})

function run (t, opt, expected) {
  html(opt).pipe(concat(function (body) {
    var str = body.toString()
    t.equal(str, expected)
  }))
}
