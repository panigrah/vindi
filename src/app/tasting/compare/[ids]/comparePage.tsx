'use client';
import { Page, Block, BlockTitle, Chip, Navbar } from 'konsta/react'
import { TastingType } from '../../queries';
import { colorOptions, noseIntensityOptions } from '@/selectOptions';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function CompareItemRow<T>({ label, items, render }: { label: string, items: T[], render: (row:T) => JSX.Element  }) {
  return(
    <tr className='border-b border-slate-100 dark:border-slate-800'>
      <td className='font-semibold py-3 px-1'>{label}</td>
      {items.map(v => <td>{render(v)}</td>)}
    </tr>
  )
}

function IntensityValue(intensity?: string) {
  const intensities = ['Pale', 'Medium', 'Deep']
  if(intensity && intensity !== 'N/A') {
    return intensities.findIndex(i => i === intensity)
  } else {
    return "N/A"
  }
}

const CircleProgress = ({ percentage, color, width }: { percentage: number, color: string, width: number }) => {
  const r = 70
  const strokeCircum = 2 * 3.1415 * r;
  const strokeOffset = 2 * 3.1415 * r * percentage;
  return <svg width={width} height={width} viewBox="0 0 180 180">
      <g transform="translate(90,90)" stroke="#000" stroke-width="0">
        <g transform='rotate(-90)'>
          <circle r={r} cx="0" cy="0" fill="transparent" stroke="#e0e0e0" stroke-width="36px"></circle>
          <circle r={r} cx="0" cy="0" fill="transparent" stroke={color} stroke-width="36px" stroke-dasharray={`${strokeCircum}px`} stroke-dashoffset={`${strokeOffset}px`}></circle>
        </g>
      </g>
    </svg> 
}

function NoseIntensityValue(intensity?: string) {
  const index = noseIntensityOptions.findIndex(c => c.name === intensity)

  if(index >= 0) {
    //return <div className='w-6 h-6 rounded-full bg-slate-300' />
    return (<CircleProgress percentage={(index + 1)/5} color="#ff0000" width={24} />)
  } else {
    return null;
  }
}

function ColorValue(color?: string) {
  const colorOption = colorOptions.find(c => c.name === color)
  if( colorOption ) {
    return(<div className='w-6 h-6 rounded-full' style={{backgroundColor: colorOption.color}} />)
  } else {
    return <div>n/a</div>
  }
}

export default function ComparePage({ tastings }: { tastings: any[]}) {
 return(
    <Page>
        <Navbar left={
          <Link href="/tasting">
            <ChevronLeftIcon className="w-5 h-5" />
          </Link>} 
          title="Compare Tastings" 
        />
        <Block strong>
        <table className='table-fixed w-full'>
          <CompareItemRow 
            label='Wine' 
            items={tastings} 
            render={(item: TastingType) => (
              <div key={item.id} className='text-center flex items-center flex-col'>
                <img src={item.wine!.media?.[0]} width={48} height={48}/>
                <div className='whitespace-break-spaces'>
                  {item.wine!.name}
                </div>
              </div>)} 
            />
          </table>
        </Block>
        <BlockTitle>Appearance</BlockTitle>
        <Block strong>
          <table className='table-fixed w-full'>
          <CompareItemRow 
            label='Clarity' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.clarity}</div>} 
          />
          <CompareItemRow 
            label='Intensity' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{IntensityValue(item.appearanceIntensity)}</div>} 
          />
          <CompareItemRow 
            label='Color' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{ColorValue(item.color)}</div>} 
          />
        </table>
      </Block>
      <BlockTitle>Nose</BlockTitle>
        <Block strong className="">
          <table className='table-fixed w-full'>
          <CompareItemRow 
            label='Condition' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.condition}</div>} 
          />
          <CompareItemRow 
            label='Intensity' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{NoseIntensityValue(item.noseIntensity)}</div>} 
          />
          <CompareItemRow 
            label='Development' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.development}</div>} 
          />
          <CompareItemRow 
            label='Aromas' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-row flex-wrap justify-center'>{item.aromaDescriptors?.map(a => <Chip className="m-0.5 truncate">{a.name}</Chip>)}</div>} 
          />
        </table>
      </Block>
      <BlockTitle>Palette</BlockTitle>
        <Block strong>
          <table className='table-fixed w-full'>
          <CompareItemRow 
            label='Sweetness' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.sweetness}</div>} 
          />
          <CompareItemRow 
            label='Acidity' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.acidity}</div>} 
          />
          <CompareItemRow 
            label='Tannin' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.tannin}</div>} 
          />
          <CompareItemRow 
            label='Alcohol' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.alcohol}</div>} 
          />
          <CompareItemRow 
            label='Body' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.body}</div>} 
          />
          <CompareItemRow 
            label='Flavor Intensity' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.flavorIntensity}</div>} 
          />
          <CompareItemRow 
            label='Finish' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{item.finish}</div>} 
          />
        </table>
      </Block>
     
    </Page>
 )
}