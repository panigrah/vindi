'use client'
import { acidityOptions, tanninOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range } from 'konsta/react'
import { useState } from 'react'

export default function Tannin({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>();

  return (
    <Block strong>
      <div className='prose dark:prose-invert'>
        <p>
          Tannin is extracted from red grape skins, grape stems, seeds and oak. It is the mouth drying and astringent sensation that you feel on your gums. If you drink black coffee or black tea, you will easily identify the sensation. Tannin is an important component in red wine (and a few whites). If it comes from the grape itself, this helps a wine have a longer ageing potential. As a rule, the thicker the grape skin, the higher the tannin. The good news is that tannin becomes milder and more integrated with the wine as it ages.
        </p>
        <p>
          Of course, there are different levels of tannins in the wine.  This was easy for me in determining which one is low, medium or high. You just need to taste a Pinot Noir (low tannin), a Malbec or Merlot (medium tannin) and a Cabernet Sauvignon or Nebbiolo (high tannin) in the same tasting and you will figure out easily which one is which.
        </p>
        <p>
          The Tannin levels are difficult to objectively quantify without tasting lots of different wines that have been calibrated for different tannin levels.
        </p>
      </div>
      <div className='w-full mt-2 prose dark:prose-invert'>
        {tanninOptions.map(c => {
          return (
            <div key={c.name}>
              <dt>
                <Checkbox
                  value={c.name}
                  onChange={() => setSelected(c.name)}
                  checked={selected === c.name}
                />&nbsp;
                <b>{c.name}</b>
              </dt>
              <dd>{c.description}</dd>
            </div>
          )
        })}
      </div>
      <Button
        className='mt-2'
        disabled={!selected}
        onClick={() => onChange?.(selected)}>
        Continue
      </Button>
    </Block>
  )
}