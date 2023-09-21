/*
- youthful - more fruity and floral from the grapes - green, citrus, stone, tropical
- developing - can smell more of oaky, nutty, buttery, creamy
- developed - a lot more from aging - coffee, toffee, caramel, chocolate, vnialla, toast, musrhoom, earthy..
- past developed - is extreme on the developed side.
https://www.wineenthusiast.com/basics/primary-wine-aromas-guide/
*/
'use client'
import { sweetnessOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range, Progressbar } from 'konsta/react'
import { useState } from 'react'

export default function Sweetness({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>()
  
  return (
      <Block strong>
        <div className='prose dark:prose-invert'>
          <p>
            Luckily WSET has produced specific criteria to help define how sweet a wine tastes. The sweetness can be from the sugar in the wine itself that is left over from the unfermented grapes, it can be added sugar like in the case of fortified wines and frequently it is not the actual sugar but the perception of sweetness that comes from the aromas in the wine itself. 
          </p>
          <p>
           These aromas that can create the perception of sweetness are byproducts fermentation, in compounds called <b>esters</b>. Esters create the perception of sweetness because our brain normally associates them with the flavor of fruits that are sweet. Even in the absence of the sugar, esters can trick our brain into tasting sweet.
          </p>
          <p>So how sweet is the wine?</p>
          <p>
            {sweetnessOptions.map( c => {
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