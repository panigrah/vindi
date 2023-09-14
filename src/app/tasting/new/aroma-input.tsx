'use client'
import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import SunburstChart from 'sunburst-chart';
import Sunburst from 'sunburst-chart'

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

const aromaWheel = [
  { family: "root", name: "Fruity" },
  { family: "Fruity", name: "Citrus" },
  { family: "Fruity", name: "Berry" },
  { family: "Fruity", name: "Tree Fruit" },
  { family: "Fruity", name: "Tropical Fruit" },
  { family: "Fruity", name: "Dried/Cooked Fruit" },
  { family: "Fruity", name: "Other" },
  { family: "root", name: "Herbacious" },
  { family: "Herbacious", name: "Fresh" },
  { family: "Herbacious", name: "Canned/Cooked" },
  { family: "Herbacious", name: "Dried" },
  { family: "root", name: "Nutty" },
  { family: "Nutty", name: "Walnut" },
  { family: "Nutty", name: "Hazelnut" },
  { family: "Nutty", name: "Almond" },
  { family: "root", name: "Caramel" },
  { family: "Caramel", name: "Honey" },
  { family: "Caramel", name: "Butterscotch" },
  { family: "Caramel", name: "Butter" },
  { family: "Caramel", name: "Soy Sauce" },
  { family: "Caramel", name: "Chocolate" },
  { family: "Caramel", name: "Molasses" },
  { family: "Woody", name: "Resinous" },
  { family: "Woody", name: "Phenolic" },
  { family: "Woody", name: "Burned" },
  { family: "root", name: "Earthy" },
  { family: "Earthy", name: "Earthy" },
  { family: "Earthy", name: "Moldy" },
  { family: "root", name: "Chemical" },
  { family: "Chemical", name: "Pungent" },
  { family: "Chemical", name: "Sulphur" },
  { family: "Chemical", name: "Petroleum" },
  { family: "root", name: "Oxidized" },
  { family: "Oxidized", name: "Sherry" },
  { family: "root", name: "Microbiological" },
  { family: "Microbiological", name: "Lactic" },
  { family: "Microbiological", name: "Yeasty" },
  { family: "Microbiological", name: "Other" },
  { family: "root", name: "Floral" },
  { family: "Floral", name: "Geranium" },
  { family: "Floral", name: "Violet" },
  { family: "Floral", name: "Rose" },
  { family: "Floral", name: "Linalol (Earl Gray Tea)" },
  { family: "Floral", name: "Orange Blossom" },
  { family: "root", name: "Spicy" },
  { family: "Spicy", name: "Licorice/Anise" },
  { family: "Spicy", name: "Black Pepper" },
  { family: "Spicy", name: "Clove" },
]

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

export default AromaInput2;