'use client'
import { Button, Block, BlockTitle, Checkbox } from 'konsta/react'
import { useState } from 'react'

export default function AromaIntensity({ onChange }: { onChange?: (value: any) => void }) {
  const [delicate, setDelicate] = useState<boolean | undefined>()
  const [simple, setSimple] = useState<boolean | undefined>()

  return (
    <div>
      <Block strong>
        <div className='prose dark:prose-invert'>
        <p>
          Intensity can be described by two attributes. How strong is the smell and how complex is the aroma? A strong and complex aroma will be classified as <b>Deep</b> whereas a delicate and simple aroma will be <b>Light</b> and everything else will be in between. So pickup the glass and smell the wine in its resting state. Then swirl the glass and smell again. What do you notice?
        </p> 
        <p>
          The aroma hits you instantly and is <b>Intense</b>&nbsp;<Checkbox onChange={() => setDelicate(false)} checked={delicate === false} />&nbsp; or is does it take an effort to smell something?&nbsp;<Checkbox onChange={() => setDelicate(true)} checked={delicate === true} />&nbsp;<b>Delicate</b>
          </p> 
        <p>
          Now take a moment and consider if the aroma is a <b>generic and simple</b>&nbsp;<Checkbox onChange={() => setSimple(true)} checked={simple === true} />&nbsp;i.e. you only smell one or two easily identifiable things in it?  or is the aroma <b>well defined and complex</b>&nbsp;<Checkbox onChange={() => setSimple(false)} checked={simple === false} />&nbsp;? 
          </p> 
        <p>
          {(simple && delicate)?
              <Button onClick={() => onChange?.('Light')}>Light Aroma</Button>
            : (simple === false && delicate === false)?
              <Button onClick={() => onChange?.('High')}>High Aroma</Button>
            : (simple === undefined || delicate === undefined)?
              <Button disabled>Select</Button>
            : <Button onClick={() => onChange?.('Medium')}>Medium Aroma</Button>
          }
        </p>
        </div>
      </Block>
    </div>
  )
}