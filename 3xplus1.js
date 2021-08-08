const process = require('process')
let x = ''
if (process.argv[2]) {
	x = process.argv[2]
}

function threexplusone(x) {
	let i = 0
	let threeXplusOneRec = function (x) {
		if (x == 1) {
			return false
		} else if (x % 2 != 0) {
			i = i + 1
			threeXplusOneRec(x * 3 + 1)
		} else if (x % 2 == 0) {
			i = i + 1
			threeXplusOneRec(x / 2)
		}
	}
	threeXplusOneRec(x)
	return i
}
function threexplusoneVerbose(x) {
	let i = 0
	let threeXplusOneRec = function (x) {
		if (x == 1) {
			return false
		} else if (x % 2 != 0) {
			i = i + 1
			threeXplusOneRec(x * 3 + 1)
			console.log(`${x} * 3 + 1 = ${x * 3 + 1}`)
		} else if (x % 2 == 0) {
			i = i + 1
			threeXplusOneRec(x / 2)
			console.log(`${x} / 2 = ${x / 2}`)
		}
	}
	threeXplusOneRec(x)
	return i
}
console.log(threexplusoneVerbose(x))