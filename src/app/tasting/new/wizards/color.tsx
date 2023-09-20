'use client'
import { wineColors } from '@/selectOptions'
import { WizardComponent } from '../help-wizard'

//sources
//https://www.wineswithattitude.co.uk/blog/wine-ramblings/the-colour-of-wine-and-what-it-tells-us.html
const Color:WizardComponent = ({ onChange }) => {
  return(
    <div className=''>
      <div className='prose prose-slate mt-4 dark:prose-invert'>
        <h2>Colors of Red Wine</h2>
        There are more hues of red wine or perhaps simply more distinguishable. The color comes from the grape skins that are included in the winemaking process. 
        Almost all grape varieties produce a clear juice. So the color comes from the skin when introduced into the fermentation process.
      </div>
      <div className='grid md:grid-cols-5 grid-cols-5 mt-2'>
        {wineColors.filter( wc => wc.family === 'reds').map( wc => (
          <div
            key={wc.name}
            onClick={() => onChange?.(wc.name)} 
            className="cursor-pointer w-full h-32 text-sm text-slate-300 text-center font-semibold flex items-end pb-2 justify-center"
            style={{backgroundColor: wc.color}}
          >
            {wc.name}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 mt-1 prose dark:prose-invert'>
        <div className='text-left'>
          <div>Younger</div>
          <div>Higher Acidity</div>
          <div>Cooler Climates</div>
          <div>Fresh Fruits</div>
          <div>Low Tannins</div>
          <div>Unoaked</div>
          <div>Lighter Body</div>
        </div>
        <div className='text-right'>
          <div>Older</div>
          <div>Lower Acidity</div>
          <div>Warmer regions</div>
          <div>Dry Fruits & Nuts</div>
          <div>Higher Tannins</div>
          <div>Fuller Body</div>
          <div>Potentially Fortified</div>
        </div>
      </div>
      <div className='prose prose-slate prose-sm mt-4  dark:prose-invert'>
        <h2>Colors of White Wine</h2>
        White wines are not white at all but range through a long list of shades from a pale lemon colour with green notes through different shades of gold to orange. 
      </div>
      <div className='grid md:grid-cols-4 grid-cols-4 mt-2'>
        {wineColors.filter( wc => wc.family === 'whites').map( wc => (
          <div
            key={wc.name}
            onClick={() => onChange?.(wc.name)} 
            className="cursor-pointer w-full h-32 text-sm  text-center font-semibold flex items-end pb-2 justify-center"
            style={{backgroundColor: wc.color}}
          >
            {wc.name}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 mt-1 prose dark:prose-invert'>
        <div className='text-left'>
          <div>Younger</div>
          <div>Unoaked</div>
          <div>Cooler climates</div>
          <div>Drier</div>
          <div>Lighter Body</div>
          <div>Filtered</div>
        </div>
        <div className='text-right'>
          <div>Older</div>
          <div>Oaked</div>
          <div>Warmer regions</div>
          <div>Fruity and Spicy</div>
          <div>Fuller Body</div>
          <div>Oxidised (intentionally)</div>
        </div>
      </div>
      <div className='prose prose-slate prose-sm mt-4 dark:prose-invert'>
        <h2>Colors of Rose Wine</h2>
        Rosé wines can range from the most delicate pink through salmon pink hues to orange. They take their colour from the black grapes used in their production - particularly important is the length of time the juice is left on the skins for extraction of the colour.      
      </div>
      <div className='grid md:grid-cols-3 grid-cols-3 mt-2'>
        {wineColors.filter( wc => wc.family === 'pink').map( wc => (
          <div
            key={wc.name}
            onClick={() => onChange?.(wc.name)} 
            className="cursor-pointer w-full h-32 text-sm  text-center font-semibold flex items-end pb-2 justify-center"
            style={{backgroundColor: wc.color}}
          >
            {wc.name}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 mt-1 prose dark:prose-invert'>
        <div className='text-left'>
          <div>Dry</div>
          <div>Higher Acidity</div>
          <div>Summer Fruit</div>
          <div>Lighter Body</div>
          <div>Cooler Climates</div>
        </div>
        <div className='text-right'>
          <div>Sweeter</div>
          <div>Medium Body</div>
          <div>Possibly Oaked</div>
          <div>Medium Body</div>
        </div>
      </div>
    </div>
  )
}

export default Color