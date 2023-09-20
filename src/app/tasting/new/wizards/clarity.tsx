'use client'
import {Button} from 'konsta/react'
import { WizardComponent } from '../help-wizard'

const Clarity:WizardComponent = ({ onChange }) => {
  return(
    <div>
      <div className="prose prose-slate prose-sm">
        <h2>Wine Clarity</h2>
      </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-2 my-2'>
          <div onClick={() => onChange?.('Clear')} className="cursor-pointer rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clarity/red.clear.png" className='w-full object-cover aspect-square' alt='hazy-red' />
          </div>
          <div onClick={() => onChange?.('Hazy')} className="cursor-pointer rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clarity/red.hazy.png" className='w-full object-cover aspect-square' alt='hazy-red' />
          </div>
          <div onClick={() => onChange?.('Clear')} className="cursor-pointer rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clarity/white.clear.png" className='w-full object-cover aspect-square' alt='hazy-red' />
          </div>
          <div onClick={() => onChange?.('Hazy')} className="cursor-pointer rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/clarity/white.hazy.png" className='w-full object-cover aspect-square' alt='hazy-red' />
          </div>
        </div>
        <div className="prose prose-slate prose-sm">
        <p>
          Do you see any hazes in the wine? A haze might not necessarily be a fault in the product. Many wines, especially those from biodynamic and natural producers, are unfiltered and unfined. Therefore, those wines maybe hazy as a function of their winemaking style. 
        </p>
        <p>
          Other reasons wine can be hazy
          <ol>
            <li>Protein instability. This can be viewed as a fault.</li>
            <li>Formation of Tartrate Crystals. Potassium can react with the tartaric acid and precipiate out of solution in cold temperatures. These are referred to as wine diamonds. While these present no other sensorial detriment to the wine - they can be off putting to wine consumers. Winemakers try to cold stabilize the wine before shipping to eliminate this</li>
          </ol>
        </p>
        </div>
      </div>
  )
}

export default Clarity