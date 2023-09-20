'use client';
import { Page, Block, BlockTitle, Chip, Navbar } from 'konsta/react'
import { TastingType } from '../../queries';
import { acidityOptions, alcoholOptions, appearanceIntensityOptions, bodyOptions, colorOptions, developmentOptions, finishOptions, flavorIntensityOptions, noseIntensityOptions, sweetnessOptions, tanninOptions } from '@/selectOptions';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function CompareItemRow<T extends { id: string }>({ label, items, render }: { label: string, items: T[], render: (row:T) => JSX.Element  }) {
  return(
    <tr className='border-b border-slate-100 dark:border-slate-800'>
      <td className='font-semibold py-3 px-1'>{label}</td>
      {items.map(v => <td key={v.id}>{render(v)}</td>)}
    </tr>
  )
}

const CircleProgress = ({ percentage, color, width }: { percentage: number, color: string, width: number }) => {
  const r = 70
  const strokeCircum = 2 * 3.1415 * r;
  const strokeOffset = percentage == 1? 0: 2 * 3.1415 * r * (1-percentage);
  return <svg width={width} height={width} viewBox="0 0 180 180">
      <g transform="translate(90,90)" stroke="#000" strokeWidth="0">
        <g transform='rotate(-90)'>
          <circle r={r} cx="0" cy="0" fill="transparent" stroke="#e0e0e0" strokeWidth="36px"></circle>
          <circle r={r} cx="0" cy="0" fill="transparent" stroke={color} strokeWidth="36px" strokeDasharray={`${strokeCircum}px`} strokeDashoffset={`${strokeOffset}px`}></circle>
        </g>
      </g>
    </svg> 
}


function OptionValue(options: {name: string}[], value?: string) {
  const index = options.findIndex(c => c.name === value);
  if( index >= 0) {
    return (<CircleProgress percentage={(index + 1)/options.length} color="#ff0000" width={24} />)
  } else {
    return <div>n/a</div>
  }
}

function ColorValue(color?: string) {
  const colorOption = colorOptions.find(c => c.name === color)
  if( colorOption ) {
    return(<div className="w-6 h-6 rounded-full" style={{backgroundColor: colorOption.color}} />)
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
                { item.wine? 
                  <>
                    { item.wine.images?.length ? 
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.wine.images?.[0].url} width={48} height={48} alt={item.wine.name} />
                      :
                      <div className='w-12 h-48 bg-gray-200 dark:bg-gray-800'/>
                    }
                    <div className='whitespace-break-spaces'>
                      <Link href={`/tasting/${item.id}`}>{item.wine.name}</Link>
                    </div>
                  </>
                  :
                  <div>Unknown</div>
                }
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
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(appearanceIntensityOptions, item.appearanceIntensity)}</div>} 
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
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(noseIntensityOptions, item.noseIntensity)}</div>} 
          />
          <CompareItemRow 
            label='Development' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(developmentOptions, item.development)}</div>} 
          />
          <CompareItemRow 
            label='Aromas' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-row flex-wrap justify-center'>{item.aromaDescriptors?.map(a => <Chip key={a.name} className="m-0.5 truncate">{a.name}</Chip>)}</div>} 
          />
        </table>
      </Block>
      <BlockTitle>Palette</BlockTitle>
        <Block strong>
          <table className='table-fixed w-full'>
          <CompareItemRow 
            label='Sweetness' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(sweetnessOptions, item.sweetness)}</div>} 
          />
          <CompareItemRow 
            label='Acidity' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(acidityOptions, item.acidity)}</div>} 
          />
          <CompareItemRow 
            label='Tannin' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(tanninOptions, item.tannin)}</div>} 
          />
          <CompareItemRow 
            label='Alcohol' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(alcoholOptions, item.alcohol)}</div>} 
          />
          <CompareItemRow 
            label='Body' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(bodyOptions, item.body)}</div>} 
          />
          <CompareItemRow 
            label='Flavor Intensity' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(flavorIntensityOptions, item.flavorIntensity)}</div>} 
          />
          <CompareItemRow 
            label='Finish' 
            items={tastings} 
            render={(item: TastingType) => <div className='flex flex-auto w-full justify-center'>{OptionValue(finishOptions, item.finish)}</div>} 
          />
        </table>
      </Block>
     
    </Page>
 )
}