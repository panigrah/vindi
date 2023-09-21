'use client'
import { Button, Block, BlockTitle, Checkbox } from 'konsta/react'
import { useState } from 'react'

export default function WorkInProgress({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string>()

  return (
    <Block strong>
      <div className='prose dark:prose-invert'>
        <p>
          this is not yet implemented.
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