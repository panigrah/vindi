import tesseract from 'node-tesseract-ocr'
const config = {
  lang: "eng",
  oem: 1,
  psm: 3
}

//const src = '/Users/sp/Documents/projects/winediary-react/vindi-nextjs/public/martin-ray-sonoma-coast-pinot-noir.jpg'
const src = process.argv[2]
if(!src) {
  console.log('please provide image file name')
  process.abort()
}

tesseract
  .recognize(src, config)
  .then(text => {
    console.log("result: ", text)
  })
  .catch(error => {
    console.log(error.message)
  })