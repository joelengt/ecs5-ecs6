// clases con ECMAScript 6

class Dog extends Animal {
	constructor (name) {
		this.name = name
	}

	bark () {
		this.sound('Woof')
	}
}

// Arrow functions

var sum = (a, b) => a + b

// Declaración de variables

const a = 12
let b = 'Hello'
var c = 'world'

// Modulos

// para import

import { serveStatic } from './assets'
// en lugar de ..
var assets = require('./assets')
assets.serveStatic(...)

// ------

export function serveStatic (name, callback) {...}
// en lugar de ...
module.exports = function serveStatic (name, callback) {...}

