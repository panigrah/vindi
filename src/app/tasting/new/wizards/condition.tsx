'use client'
import { Button, Block, BlockTitle, Checkbox } from 'konsta/react'
import { useState } from 'react'

export default function Condition({ onChange }: { onChange?: (value: any) => void }) {
  const [condition, setCondition] = useState<string>()

  return (
    <div>
      <BlockTitle className="prose dark:prose-invert">
          Condition
      </BlockTitle>
      <Block strong>
        <div className='prose dark:prose-invert'>
        <p>
          What do you smell?
        </p> 
          <p>
            <Checkbox checked={condition==='sulfur'} onChange={() => setCondition('sulfur')} />&nbsp;
            Sulfuric smells - rotten eggs for example. Wine may need to breath a bit. Let the wine rest for some time and tray again in 5-10mins
          </p>
          <p>
            <Checkbox checked={condition==='bret'} onChange={() => setCondition('bret')} />&nbsp;
            Bandaid smell, or smell of a Horse Barn or Horse Blanket - may indicate spoilage from a yeast called Brettanomyces
          </p>
          <p>
            <Checkbox checked={condition==='corktaint'} onChange={() => setCondition('corktaint')} />&nbsp;
            Wet Newspapers - may indicate cork taint. This happens if the cork had TCA/TBA in it. Its estimate that 1-2% of corked wine bottles will have this however most producers have strict quality controls in place to reduce its occurance
          </p>
          <p>
            <Checkbox checked={condition==='clean'} onChange={() => setCondition('clean')} />&nbsp;
            None of the above.
          </p>
          <Button 
            onClick={() => onChange?.(condition === 'clean'? 'Clean': 'Unclean (faulty)')}
            disabled={condition === undefined}
          >
            Continue
          </Button>
        </div>
      </Block>
    </div>
  )
}