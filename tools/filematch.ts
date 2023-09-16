import Fuse from 'fuse.js'
import { aromaWheel } from '@/selectOptions'
import { readdirSync, copyFileSync } from 'fs'
import slugify from 'slugify'

//const fuse = new Fuse(aromaWheel, { keys: ['name'], includeScore: true })
//const result = fuse.search('bacon')

const files = readdirSync('public/aromas', { withFileTypes: false })
  .map( f => ({
    media: typeof f === 'string'? f.split('.')[0] : f, 
    matched: false,
    matchedAroma: [] as any,
    path: `/aromas/${f}`, 
}))

const fuse = new Fuse(files, { keys: ['media'], includeScore: true })
const aromaList = aromaWheel.map( aroma => ({...aroma, media: '', score: 999, slug: slugify(aroma.name, { lower: true, strict: true, trim: true})}))
aromaList.forEach( aroma => {
  const matches = fuse.search(aroma.name)
  if( matches.length > 0) {
    matches[0].item.matchedAroma.push(aroma)
    aroma.media = matches[0].item.path
    aroma.score = matches[0].score?? -999
  }
})

console.log('Matched aromas:', aromaList.filter(a => (!!a.media)).length)
console.log('Unmatched aromas:', aromaList.filter(a => (!a.media)))

console.log('Matched media:', files.filter(f => (f.matchedAroma.length > 0)).length)
console.log('UnMatched media:', files.filter(f => (f.matchedAroma.length === 0)))

aromaList.forEach(aroma => {
  console.log(`${aroma.name}, ${aroma.slug}, ${aroma.media}, ${aroma.score}`)
  if( aroma.media) {
    const ext = aroma.media.split(".")[1]
    copyFileSync(`public${aroma.media}`, `public/aromas/output/${aroma.slug}.${ext}`)
  }
})

files.filter(f=> f.matchedAroma.length > 1).forEach( media => {
  console.log(media.media, media.matchedAroma.map((a:any) => a.name))
})
