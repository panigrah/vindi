'use client'
import { aromaList, colorList } from '@/selectOptions';
import { useEffect, useMemo, useState } from 'react';
//import { PieChart } from 'react-minimal-pie-chart';
//import Sunburst from 'sunburst-chart'
import { Button, Block, BlockTitle, List, ListItem, Chip } from 'konsta/react'
import * as d3 from 'd3'
import { useController } from 'react-hook-form';
import { ArrowLeftIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

/*
type EntryType = {
  name: string;
  value: number;
  children: EntryType[]
}

const getChildren = (name: string) => aromaWheel.filter(f => f.family === name).map( f => ({ name: f.name, value: 1, children: [] as EntryType[]}))

const AromaInput2 = () => {
  useEffect(() => {
    //first level..
    const data = {name: "root", children: getChildren('root')}
    //second level
    data.children.forEach(f => {
      f.children.push(...getChildren(f.name))
      //third level
      f.children.forEach(c => {
        c.children.push(...getChildren(c.name))
      })
    })

    console.log(data)
    Sunburst()
      .data(data)
      .sort((a,b) => b.value - a.value)
      .excludeRoot(true)(document.getElementById('chart-sunburst')!)
  })

  return(
    <div id="chart-container">
      <div id="chart-sunburst"></div>
    </div>
  )
}

function AromaInput() {
  const [family, setFamily] = useState('root')
  const [selected, setSelected] = useState<{family: string, name: string}>()

  const data = aromaWheel
    .filter(a => a.family === family)
    .map((a, index, array) => ({
      title: a.name,
      value: 1,
      color: colors[index],
      extra: a
    }))

  return(
    <>
      <PieChart
        animate
        labelStyle={{ fontSize: '5px' }}
        label={(D => D.dataEntry.title)}
        segmentsShift={(index) => (data[index].title === selected?.name )? 7: 0 }
        onClick={(_, index) => {
          console.log(index)
          const child = data[index].extra.name;
          if( aromaWheel.filter( a => a.family === child).length > 0 ) {
            //only set the family if there are children..
            setFamily(child)
          } else if(selected?.name === data[index].title) {
            //go back to prior family..
            const parent = aromaWheel.find( a => a.name === selected.family)
            if(parent) {
              setFamily(parent.family)
            }
          } else {
            setSelected(data[index].extra)
          }
        }}
        data={data}
      />
    </>
  )
}
*/

const Arc = ({ arcData, onSelect, selected = false }: { arcData: any, onSelect: () => void, selected?: boolean }) => {
  const arc = d3.arc().innerRadius(15 + (selected ? 10 : 0)).outerRadius(120 + (selected ? 10 : 0))
  if (!arcData) return null
  const d = arc(arcData)
  if (!d) return null;
  const d2 = d3.arc().innerRadius(125).outerRadius(135)(arcData)

  return (
    <>
      <path
        fill={arcData.data.color}
        d={d}
        className={selected ? 'stroke-white dark:stroke-black' : ''}
        strokeWidth={4}
        onClick={() => onSelect()}
      />
      {d2 &&
        <path
          d={d2}
          fill={arcData.data.color}
        />
      }
    </>
  )
}

type AromaType = {
  name: string;
  family: string;
  color?: string;
}

const AromaInput = ({ name, label, openHelp }: { name: string, label: string, openHelp?: (topic: string) => void; }) => {
  const { field, fieldState, formState } = useController({ name })
  const [family, setFamily] = useState('root')
  const [percentVisible, setPercentVisible] = useState(0)
  const [selected, setSelected] = useState('')
  //const [aromas, setAromas] = useState<AromaType[]>([])
  const pie = d3.pie().startAngle(0).endAngle(percentVisible * Math.PI)

  const aromas = field.value as AromaType[]
  const setAromas = (values: AromaType[]) => {
    field.onChange(values)
  }
  const aromaDictionary = useMemo(() => aromaList(), [])
  //console.log(aromaDictionary)
  const data = useMemo(() =>
    aromaDictionary
      .filter(a => a.family === family)
      .map((a, index, array) => ({
        title: a.name,
        value: aromaDictionary.filter(f => f.family === a.name).length + 1,
        color: a.color || colorList[index],
        extra: a,
        valueOf: () => aromaDictionary.filter(f => f.family === a.name).length + 1
      }))
    , [family, aromaDictionary])

  useEffect(() => {
    d3.selection()
      .transition('pie-reveal')
      .duration(3000)
      .ease(d3.easeSinInOut)
      .tween('percentVisible', () => {
        const percentInterpolate = d3.interpolate(0, 100)
        return t => setPercentVisible(percentInterpolate(t))
      })
  }, [data])

  const parent = aromaDictionary.find(f => f.name === family)?.family
  const select = (index: number) => {
    //only set family if there are more children?
    if (aromaDictionary.filter(a => a.family === data[index].extra.name).length > 0)
      setFamily(data[index].extra.name)
    else {
      if (!aromas.find(a => a.name === data[index].extra.name)) {
        setAromas([...aromas, data[index].extra])
      }
    }
    setSelected(data[index].extra.name)
  }

  return (
    <>
      <BlockTitle>
        Aroma Descriptors
      </BlockTitle>
      <Block inset strong>
        <div className='max-w-md mx-auto'>
          <div className='flex flex-row justify-between items-center border-b -mx-4 pb-1 -mt-2'>
            <Button
              onClick={() => { if (parent) setFamily(parent) }}
              disabled={!parent}
              clear
              inline
            >
              <ArrowLeftIcon className='w-5 h-5' />
            </Button>
            <div className='font-bold uppercase text-slate-500'>
              Aroma Wheel
            </div>
            <div>
              <Button
                onClick={() => openHelp?.(name)}
                disabled={!openHelp}
                clear
                inline
              >
                <InformationCircleIcon className='w-5 h-5' />
              </Button>
            </div>
          </div>
          <svg className='w-full aspect-square mx-auto mt-4' viewBox='0 0 300 300'>
            <g className='translate-x-[50%] translate-y-[50%]'>
              {pie(data).map((d, index) => {
                return <Arc
                  arcData={{ ...d }}
                  key={index}
                  onSelect={() => select(index)}
                  selected={data[index].extra.name === selected}
                />
              })}
              <circle
                cx={0}
                cy={0}
                r={15}
                className="fill-slate-100 dark:fill-slate-900" onClick={() => { if (parent) setFamily(parent) }} />
              {pie(data).map((d, index) => {
                const angle = (d.startAngle + d.endAngle) / 2
                const x = Math.cos(angle) * 25
                const y = Math.sin(angle) * 25
                const deg = (angle - Math.PI / 2) / Math.PI * 180
                return (
                  <g transform={`rotate(${deg})`} key={index}>
                    <g transform={`translate(45, 5)`}>
                      <text
                        style={{ stroke: 'white', strokeWidth: '0.5em', fill: 'black', paintOrder: 'stroke', strokeLinejoin: 'round' }}
                        onClick={() => select(index)}
                        transform={'scaleX(-1)'}
                      >
                        {data[index].extra.name}
                      </text>
                    </g>
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
        <div className='border-t pt-2 -mx-4 px-4'>
          {aromas.length ?
            aromas.map(a =>
              <Chip
                className="m-0.5"
                key={a.name}
                deleteButton
                onDelete={() => {
                  setAromas(aromas.filter(aroma => aroma.name !== a.name))
                }}
              >
                {a.name}
              </Chip>
            )
            :
            <p>No Aromas Selected</p>
          }
        </div>
      </Block>
    </>
  )
}
export default AromaInput;