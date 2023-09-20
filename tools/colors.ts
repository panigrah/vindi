import { colorOptions } from "../selectOptions"

const colors = {
  whites: [
[240, 238, 192],
[229, 225, 146],
[242, 198, 79],
[244, 149, 44],
[31, 21, 15],
  ],
  reds: [
[71, 10, 30],
[85, 8, 29],
[109,13,21],
[148, 41, 28],
[50, 17, 14],
  ],
  pinks: [
[254, 177, 192],
[252, 124, 192],
[252, 101, 140],
[247, 42, 99],
[248, 63, 69]
  ]
}

const names = {
  whites: [0, 1, 2, 3, 4],
  reds: [8, 9, 10, 11, 4],
  pinks: [5, -1, 6, -1, 7],
}

const toHex = (rgb: number[]) => {
  const paddedHex = (n: number) =>  (n < 16? '0' + n.toString(16): n.toString(16)).toUpperCase()
  return '#' + rgb.map(paddedHex).join('')
}

Object.entries(colors).forEach( ([key, value], index) => {
  value.forEach( (v, index) => {
    const n = colorOptions[names[key as 'whites' | 'reds' | 'pinks'][index]]?.name
    console.log(`{name: "${n}", color: "${toHex(v)}", family: "${key}"},`)
  })
})