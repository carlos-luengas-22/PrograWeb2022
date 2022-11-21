console.log('\n')

for (var i = 0; i < 5; i++) {
  var resultado = ''
  for (var j = 0; j <= i; j++) {
    resultado += '* '
    console.log(resultado)
  }
}

console.log('\n')

for (var i = 0; i < 4; i++) {
  var resultado = ''
  for (var j = 0; j <= i; j++) {
    resultado += '* '
  }
  console.log(resultado)
}

console.log('\n')

var k = 0
for (var i = 0; i < 7; i++) {
  var resultado = ''
  if (i > 3) {
    k += 2
    for (var j = 0; j <= i - k; j++) {
      resultado += '* '
    }
    console.log(resultado)
  } else {
    for (var j = 0; j <= i; j++) {
      resultado += '* '
    }
    console.log(resultado)
  }
}
