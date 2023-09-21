
/*
Finish is the aftertaste that stays in your mouth after you spat or swallowed the wine. You should note down your impressions on the finish and the length. Was it a pleasant? Was there something that you didn’t like about it?
In the wine assessment, finish can be short, medium or long. A short finish lasts for only a couple of seconds. This is usually found in generic, inexpensive wines.  A medium finish lasts up to one minute, while a long finish can last a minute and more, triggering layers of pleasant taste in your mouth, after you spat or swallowed. A long finish is the attribute of a fine wine.
I tend to chew a bit and make a mental record of what flavours I get and for how long they last before I make my assessment.
*/
'use client'
import { finishOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range, Progressbar } from 'konsta/react'
import { useState } from 'react'

export default function Finish({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>()
  
  return (
      <Block strong>
        <div className='prose dark:prose-invert'>
          <p>
          Finish is the aftertaste that stays in your mouth after you spat or swallowed the wine. You should note down your impressions on the finish and the length. Was it a pleasant? Was there something that you didn’t like about it?
          </p><p>
            In the wine assessment, finish can be short, medium or long. A short finish lasts for only a couple of seconds. This is usually found in generic, inexpensive wines.  A medium finish lasts up to one minute, while a long finish can last a minute and more, triggering layers of pleasant taste in your mouth, after you spat or swallowed. A long finish is the attribute of a fine wine. But the finish also needs to be pleasant and balanced to be considered a good wine.
          </p>
          <p>
            Chew a bit and make a mental record of what flavours you get and for how long they last before make an assessment.
          </p>
          <p>
            {finishOptions.map( c => {
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