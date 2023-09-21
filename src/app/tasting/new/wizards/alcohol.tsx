'use client'
import { acidityOptions, alcoholOptions, tanninOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range } from 'konsta/react'
import { useState } from 'react'

export default function Alcohol({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>();

  return (
      <Block strong>
        <div className='prose dark:prose-invert'>
          <p>
            Other than just looking at the wine label;
          </p>
          <p>
            At lower levels, like in beer, it can be challenging to notice the <b>flavor</b> of alcohol, but once you start to have a wine of at least 13% alcohol or so, you will begin to notice a warming sensation towards the back of your palate. 
          </p><p>
            A good example of this is to drink whisky or a similar spirit and pay attention to the aftertaste. Generally, red wine is higher in alcohol than white wine, but any wine of at least 13% can start to show off <b>alcoholic warmth</b> When you have a rich red that is 15% alcohol, you will definitely notice it.
          </p>
        </div>
        <div className='w-full mt-2 prose dark:prose-invert'>
          {alcoholOptions.map( c => {
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
        <Button 
          className='mt-2'
          disabled={!selected}
          onClick={() => onChange?.(selected)}>
          Continue
        </Button>
        <div className='prose dark:prose-invert mt-4'>
          <p>
            There is also a visual way to notice if a wine has high or low alcohol content by swirling your glass and looking at the shape of and number of streaks that run down the sides of your glass. 
          </p>
          <p>
            These are called wine tears or wine legs. High alcohol content have more legs than lower alcohol ones because of the difference in surface tension between alcohol and water and the fact that alcohol evaporates faster. Lookup <a href="https://en.wikipedia.org/wiki/Tears_of_wine" target='new'>the Marangoni Effect</a>
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/appearance/wine.legs.jpg" className='w-full' alt='wine tears' />
        </div>
      </Block>
  )
}