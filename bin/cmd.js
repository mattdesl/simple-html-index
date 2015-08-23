#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    title: 't',
    entry: 'e',
    css: 's',
    format: 'f'
  }
})

require('../')(argv).pipe(process.stdout)
