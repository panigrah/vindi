'use client'
import { aromaWheel } from '@/selectOptions';
import { useEffect, useMemo, useState } from 'react';
//import { PieChart } from 'react-minimal-pie-chart';
//import Sunburst from 'sunburst-chart'
import { Block, BlockTitle, List, ListItem, Chip } from 'konsta/react'
import * as d3 from 'd3'

const colors = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


type EntryType = {
  name: string;
  value: number;
  children: EntryType[]
}

const getChildren = (name: string) => aromaWheel.filter(f => f.family === name).map( f => ({ name: f.name, value: 1, children: [] as EntryType[]}))
/*
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

const Arc = ({ arcData, onSelect, selected = false }: { arcData: any, onSelect: () => void, selected?:boolean }) => {
  const arc = d3.arc().innerRadius(15 + (selected? 10: 0)).outerRadius(120 + (selected? 10: 0))
  if(!arcData) return null
  const d = arc(arcData)
  if(!d) return null;
  console.log(arcData.data.color)
  const d2 = d3.arc().innerRadius(125).outerRadius(135)(arcData)
  const d4 = d3.arc().innerRadius(140).outerRadius(150)(arcData)

  return(
    <>
      <path
        fill={ arcData.data.color || colors[arcData.index]}
        d={d}
        className={selected? 'stroke-white dark:stroke-black' : ''}
        strokeWidth={4}
        onClick={() => onSelect()}
      />
      { d2 && 
        <path
          d={d2}
          fill={ arcData.data.color || colors[arcData.index]}
        />
      }
      { d4 && 
        <path
          d={d4}
          fill={ arcData.data.color || colors[arcData.index]}
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

const AromaInput = () => {
  const [family, setFamily] = useState('root')
  const [selected, setSelected] = useState('')
  const [aromas, setAromas] = useState<AromaType[]>([])
  const pie = d3.pie()

  const data = useMemo(() => aromaWheel
    .filter(a => a.family === family)
    .map((a, index, array) => ({
      title: a.name,
      value: aromaWheel.filter(f => f.family === a.name).length + 1,
      color: a.color || colors[index],
      extra: a,
      valueOf: () => aromaWheel.filter(f => f.family === a.name).length + 1
    }))
    , [family])

  const parent = aromaWheel.find(f => f.name === family)?.family
  const select = (index: number) => {
    //only set family if there are more children?
    if( aromaWheel.filter(a => a.family === data[index].extra.name).length > 0)
      setFamily(data[index].extra.name)
    else {
      if(!aromas.find(a => a.name === data[index].extra.name )) {
        setAromas([...aromas, data[index].extra])
      }
    }
    setSelected(data[index].extra.name)
  }

  return (
    <>
    <BlockTitle>What do you smell</BlockTitle>
    <Block inset strong>
      { aromas.length?
          aromas.map(a =>  
              <Chip
                className="m-0.5"
                key={a.name}
                deleteButton
                onDelete={() => {
                  setAromas(aromas.filter( aroma => aroma.name !== a.name ))
                }}
              >
                {a.name}
              </Chip>
          )
        :
          <p>Select a smell</p>
      }
    </Block>
    <Block inset strong>
      <svg className='w-full aspect-square mx-auto mt-4'>
        <g className='translate-x-[50%] translate-y-[50%]'>
          { pie(data).map((d, index) => {
            return <Arc arcData={d} key={index} onSelect={() => select(index)} selected={data[index].extra.name === selected} />
          })} 
           <circle 
            cx={0} 
            cy={0} 
            r={15} 
            className="fill-slate-100 dark:fill-slate-900" onClick={() => { if(parent) setFamily(parent)}} />
          { pie(data).map((d, index) => {
            const angle = (d.startAngle + d.endAngle)/2
            const x = Math.cos(angle) * 25
            const y = Math.sin(angle) * 25
            const deg = (angle - Math.PI/2) / Math.PI * 180
            return (
              <g transform={`rotate(${deg})`} key={index}>
                <g transform={`translate(45, 5)`}>
                  <text 
                    style={{stroke:'white', strokeWidth:'0.5em', fill:'black', paintOrder:'stroke', strokeLinejoin:'round'}}
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
    </Block>
    </>    
  )
}
export default AromaInput;