#!/usr/bin/env node

'use strict'

var cheerio = require('cheerio')
var request = require('request')
var async = require('async')
require('colors')
var program = require('commander')
var userHome = require('user-home')
var path = require('path')
var fs = require('fs')
var mkdirp = require('mkdirp')
const _ = require('lodash')

const VERSION = require('./package.json').version

console.log(VERSION)