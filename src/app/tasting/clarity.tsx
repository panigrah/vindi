'use client'
import {Button} from 'konsta/react'
export default function Clarity({ onChange }: {onChange?: (value: any) => void }) {
  return(
    <div>
      <div onClick={() => onChange?.('Hazy')} className="cursor-pointer">
        <img src="/clarity.hazy.red.jpg" className='w-56 h-56 object-cover aspect-square' alt='hazy-red' />
      </div>
      <div onClick={() => onChange?.('Clear')} className="cursor-pointer">
        <img src="/clarity.hazy.white.png" className='w-56 h-56 object-cover aspect-square' alt='hazy-white' />
      </div>
      What do you see in the glass? These are examples of clear and hazy for red and white ones.
    </div>
  )
}