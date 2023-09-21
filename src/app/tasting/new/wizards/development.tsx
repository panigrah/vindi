/*
- youthful - more fruity and floral from the grapes - green, citrus, stone, tropical
- developing - can smell more of oaky, nutty, buttery, creamy
- developed - a lot more from aging - coffee, toffee, caramel, chocolate, vnialla, toast, musrhoom, earthy..
- past developed - is extreme on the developed side.
https://www.wineenthusiast.com/basics/primary-wine-aromas-guide/
*/
'use client'
import { developmentOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range, Progressbar } from 'konsta/react'
import { useState } from 'react'

export default function Development({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>()
  
  return (
    <div>
      <BlockTitle className="prose dark:prose-invert">
          Development
      </BlockTitle>
      <Block strong>
        <div className='prose dark:prose-invert'>
          <p>
            Aromas are broken down into three categories: <b>primary aromas</b>, which are those arising from the grape itself; secondary aromas, which are those arising from <b>fermentation</b>; and tertiary aromas, which are those that arise from <b>aging</b>. Aging happens in the bottle and also in any barrels prior to bottling. All of these different aromas mingle together in the glass to form a complex sensorial experience known as the bouquet of the wine. 
          </p>
          <p>
            As you smell the wine if you find more primary aromas of green fruits and floral its likely still young - but if you get more of tertiary aromas like oak, nuts, dry fruits, cream, earth - then its considered more developed. You are looking at the balance of these aromas to decide how developed the aroma is. 
          </p>
          <p>
            In red wines, fresh ripe fruit starts to transform into stewed or dried fruit, like raisin or fig. Tertiary aromas of tobacco, earth and mushroom will come about, too.
            White wines start to develop dried apricot, orange marmalade and sometimes even maderized qualities, or Sherry-like notes of almonds and candied fruit. Other tertiary characteristics include nutty aromas as well as complex spice components like nutmeg, ginger and petrol.
          </p>
          <p>
            It’s important to note that wines with tertiary aromas and flavors are not “better” than those with primary and secondary ones. Around 90% of wines are meant to be consumed young and fresh, while a small percentage of wines improve with three to 10 years in the bottle. Only a tiny amount of wines (some estimate as low as 1%) are meant to age 10 years or more.
          </p>
          <p>So what do you smell?</p>
          <p>
            {developmentOptions.map( c => {
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
    </div>
  )
}