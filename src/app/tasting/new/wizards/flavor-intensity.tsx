/*
- youthful - more fruity and floral from the grapes - green, citrus, stone, tropical
- developing - can smell more of oaky, nutty, buttery, creamy
- developed - a lot more from aging - coffee, toffee, caramel, chocolate, vnialla, toast, musrhoom, earthy..
- past developed - is extreme on the developed side.
https://www.wineenthusiast.com/basics/primary-wine-aromas-guide/
*/
'use client'
import { flavorIntensityOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range, Progressbar } from 'konsta/react'
import { useState } from 'react'

export default function FlavorIntensity({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>()
  
  return (
      <Block strong>
        <div className='prose dark:prose-invert'>
          <p>
            Intensity can be easy to sense but harder to objectively quantify. So you can use a framework similar to the one used in measuring the Aroma Intensity.
          </p>
          <p>Look for two things; how strong is the flavor, is the flavor simple and easily identifiable or is it complex?</p>
          <p>Flavors that are <u>light and simple</u> will be on the <b>Lighter</b> side of the spectrum compared to the ones that are <u>strong and complex</u> which will be on the <b>Pronounced</b> side.</p>
          <p>So what did you sense?</p>
          <p>
            {flavorIntensityOptions.map( c => {
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