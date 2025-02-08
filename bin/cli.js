// #! /usr/bin/env/env node
const {program} = require('commander')

const myhelp = require('../lib/core/myHelp')
const myCommander = require('../lib/core/myCommander')

myhelp(program)
myCommander(program)

program.parse(process.argv)