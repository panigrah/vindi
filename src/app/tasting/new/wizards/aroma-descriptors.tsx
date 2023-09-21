'use client'
import { Button, Block, BlockTitle, Checkbox } from 'konsta/react'
import { useState } from 'react'

export default function AromaDescriptors({ onChange }: { onChange?: (value: any) => void }) {
  return (
      <Block strong>
        <div className='prose dark:prose-invert'>
          <p>
            If I told you a wine smells like my grandmother&apos;s kitchen, you probably wont have a frame of reference for that aroma. 
            So its important that we as winemakers have a shared vocabulary when it comes to wine tasting. With this in mind, researcher Ann Noble developed the Wine Aroma Wheel while she was at UC Davis. 
          </p>
          <p>
            The Aroma Wheel provides us with a good shared vocabulary to use when describing wine aroma. You&apos;ll notice that the Aroma Wheel is broken up into large groups. These major groups of aromas are then broken down into subgroups and then finally into individual aromas. You&apos;ll notice that about half of the aromas on the wheel arise from the fruit itself. These are the fruity white wine, fruity red wine, floral, and vegetable aromas. The other aromas on the left-hand wheel arise mostly from winemaking techniques.
          </p>
          <p>
            By having a shared vocabulary, wine professionals can more easily convey information to one another about how a wine tastes and smells.
          </p>
        </div>
      </Block>
  )
}