#!/usr/bin/env node
'use strict'

const Mocha = require('mocha')
const mocha = new Mocha()

mocha.addFile('./spec/challenge.spec')

mocha.run()
