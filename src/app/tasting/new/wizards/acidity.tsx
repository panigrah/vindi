'use client'
import { acidityOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range } from 'konsta/react'
import { useState } from 'react'

export default function Acidity({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>();

  return (
    <div>
      <Block strong>
        <div className='prose dark:prose-invert'>
          <p>
            A wine that has high acidity will usually taste crisper and more tart on the palate. A low acid wine will feel softer and rounder on the palate. A great way to detect the acidity of a wine is by assessing how much it makes your mouth water. For example, think about what your mouth does right after you bite into a crisp crunchy apple... it starts to water! So when you&apos;re tasting wine, pay close attention and test it the same.
          </p>
          <p>
            The acidity level tells us the concentration of acids present in wine. 2 g/l is very low acidity and the wine will taste flat and 10 g/l is high and very sour. Typically wines range between 4 and 8.   
          </p>
          <p>
            Take a small sip of wine and then open your mouth (nice and wide!) and take notice of how much your cheeks start to roll with saliva. The more saliva you feel dropping, the higher the acidity!
          </p>
        </div>
        <div className='w-full mt-2 prose dark:prose-invert'>
          {acidityOptions.map( c => {
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
      </Block>
    </div>
  )
}