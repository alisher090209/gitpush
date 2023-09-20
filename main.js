'use strict'

const amaliyIsh = prompt("Nechta serial ko'rdingiz?", '')

const vazifa = {
  count: amaliyIsh,
  series: {},
  actors: {},
  genres: [],
  private: false,
}

const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const b = prompt('Necha baxo berasiz', '')
const c = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const d = prompt('Necha baxo berasiz', '')

vazifa.series[a] = b
vazifa.series[c] = d

console.log(vazifa)