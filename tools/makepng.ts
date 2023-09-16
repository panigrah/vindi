import sharp from 'sharp'
import { readdirSync, copyFileSync } from 'fs'

const folder = 'public/aromas'
const outdir = 'public/aromas/process/convert'
const tmpdir = 'public/aromas/process/resize'

const files = readdirSync(folder)
  .map(filename => {
    const [base, ext] = filename.split('.')
    return ({path: `${folder}/${filename}`, base, ext})
  })
  .filter( f => f.ext && f.ext !== 'png')

async function convert() {
  for(let i=0; i < files.length; i++) {
    const f = files[i]
    await sharp(f.path)
    .toFile(`${outdir}/${f.base}.png`, err => {
      if(err) {
        console.log('unable to convert:', f.path)
        console.log(err)
      }
    })
  }
}

//extraction tool
const filter = async (into: string) => {
  const files = readdirSync(folder).filter(f => f.endsWith('png'))
  for(let i=0; i < files.length; i++) {
    try {
    const metadata = await sharp(`${folder}/${files[i]}`).metadata()
    if( metadata?.width === 800 && metadata?.height === 416 ) {
      copyFileSync(`${folder}/${files[i]}`, `${into}/${files[i]}`)
    }
    } catch (err) {
      console.log('unable to get metadata for', files[i], err)
    } 
  }
}

const tl = { x: 473, y: 108 }
const bl = { x: 683, y: 318 }

const resize = async () => {
  //find all the files that match certain criteria into the tmp dir for this process
  await filter(tmpdir)

  //crop these files to remove extra info
  const files = readdirSync(tmpdir).filter(f=> f.endsWith('png'))
  for( let i = 0; i < files.length; i++ ) {
    try {
      await sharp(`${tmpdir}/${files[i]}`)
      .extract({ left: tl.x, top: tl.y, width: bl.x - tl.x, height: bl.y - tl.y })
      .toFile(`${tmpdir}/final/${files[i]}`)
    } catch (err) {
      console.log('unable to resize: ', files[i], ':', err)
    }
  }
}

resize()