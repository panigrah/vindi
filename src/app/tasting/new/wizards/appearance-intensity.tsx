'use client'
import { Button, Block, BlockTitle } from 'konsta/react'

export default function AppearanceIntensity({ onChange }: {onChange?: (value: any) => void }) {
  return(
    <div>
      <Block strong>
        <div className="grid grid-cols-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/appearance/red.intensity.png" alt="red wine intensity" className="w-full" />
        </div>
        <div className="grid grid-cols-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/appearance/white.intensity.png" alt="white wine intensity" className="w-full" />
        </div>
        <div className="grid grid-cols-3 gap-x-2 mt-2">
          <div>
            <Button onClick={() => onChange?.('Pale')}>Pale</Button>
          </div>
          <div>
            <Button onClick={() => onChange?.('Medium')}>Medium</Button>
          </div>
          <div>
            <Button onClick={() => onChange?.('Deep')}>Deep</Button>
          </div>
        </div>
      </Block>
      <Block strong>
        <div className="prose prose-slate dark:prose-invert">
          <p>
            Tilt the wine glass so that the rim of the glass is away from you and you see the shape above on top of a white cloth or paper. The more you can see through the paler the intensity is for that color of wine. A pale wine should have a wide area that appears watery while a deeper wine will have a shorter area starting from the top that appears translucent. 
          </p>
          <p>
            The intensity of the wine can point to the age of the wine and can also indicate the level of tannins and acidity. Paler looking wines tend to be low tannin and high acidity whereas deeper wines have higher tannins and lower acidity. Deeper wines also tend to be older wines.
          </p>
        </div>
      </Block>
    </div>
  )
}