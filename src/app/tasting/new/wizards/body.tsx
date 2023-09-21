'use client'
import { bodyOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox } from 'konsta/react'
import { useState } from 'react'
//https://unravelingwine.com/wine-body-5-things-no-one-else-is-telling-you/

export default function WineBody({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>()

  return (
    <Block strong>
      <div className='prose dark:prose-invert'>
        <p>
          Wine body is the thickness or thinness of a wine. The body in wine is determined by several factors; alcohol content, sugar, glycerin, oak-ageing, tannins, and the grape variety. All of these elements give wine more viscosity. Viscosity is a measure of a fluid&apos;s resistance to flow; so how fast or slow wine moves around our mouths.
        </p>
        <p>
          You also need to be aware that a high acidity makes wine feel lighter in body, while sugar, higher levels of tannin, alcohol might affect the sensation of body.
        </p>
        <div className='w-full mt-2 prose dark:prose-invert'>
          {bodyOptions.map( c => {
                return(
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
        <p>
          <Button 
                className="mt-2"
                onClick={() => onChange?.(selected)}
                disabled={!selected}
            >
              Continue
            </Button>
        </p>
      </div>
    </Block>
  )
}