'use client'
import { Button, Block, BlockTitle } from 'konsta/react'

export default function AromaIntensity({ onChange }: { onChange?: (value: any) => void }) {
  return (
    <div>
      <BlockTitle className="prose dark:prose-invert">
          Aroma Intensity
      </BlockTitle>
      <Block strong>
        <div className="grid grid-cols-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/intensity/framework.png" alt="framework" className='w-full' />
        </div>
        <div className="grid grid-cols-3 gap-x-2 mt-2">
          <div>
            <Button onClick={() => onChange?.('Light')}>Light</Button>
          </div>
          <div>
            <Button onClick={() => onChange?.('Medium')}>Medium</Button>
          </div>
          <div>
            <Button onClick={() => onChange?.('High')}>High</Button>
          </div>
        </div>
      </Block>
    </div>
  )
}