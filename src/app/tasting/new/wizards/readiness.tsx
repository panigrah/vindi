'use client'
import { readinessOptions } from '@/selectOptions'
import { Button, Block, BlockTitle, Checkbox, Range, Progressbar } from 'konsta/react'
import { useState } from 'react'

const characteristics = [
  "Low acidity",
  "Balanced Tannins",
  "High Alcohol Levels",
  "High Complexity",
  "Low Residual sugar",
  "Oak barrelling",
]

export default function Readiness({ onChange }: { onChange?: (value: any) => void }) {
  const [selected, setSelected] = useState<string[]>([])
  const toggleSelection = (e: any) => {
    const value = e.target.value
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value))
    } else {
      setSelected([...selected, value])
    }
  }
  const score = (selected.length/characteristics.length) * (readinessOptions.length-1)

  return (
    <Block strong>
      <div className='prose dark:prose-invert'>
        <p>
          A “young” wine is recently bottled. An “aged” wine is set for some years already. Ageing a bottle means opening it when the quality is the best.
        </p>
        <p>
          A wine matures and gets better in contact of the oxygen through the cork. At some point this micro-oxygenation makes the quality of the wine to reach a peak. Some of the wines take lesser time to age and some others take longer time to age. The complexity is then to know when to open a bottle.
        </p>
        <p>
          One of the ways to tell if a wine needs further development is to look at the following characteristics of the wine. The more boxes you tick - the more ready to drink the wine maybe
        </p>
        <p>
          {characteristics.map(c => {
            return (
              <div key={c}>
                <Checkbox
                  value={c}
                  onChange={toggleSelection}
                  checked={selected.includes(c)}
                />&nbsp;
                {c}
              </div>
            )
          })}
          <div className="mt-4">
            <Progressbar progress={score/2} />
            <div className='grid grid-cols-2'>
              <div className='text-left'>Aging Potential</div>
              <div className="text-right">Drink Now</div>
            </div>
            <Button
              className="mt-4"
              onClick={() => onChange?.(readinessOptions[Math.round(score)/2].name)}
            >
              Continue
            </Button>
          </div>
        </p>
        <h2>The second-day test</h2>
        <ol>
          <li>Open the bottle, pour a generous glass and immediately put the cork or cap back on the bottle – don’t use any pumps or preservatives.</li>
          <li>Taste the wine, looking for the characteristics listed above – make a note of your first impressions.</li>
          <li>A couple of hours later, pour another glass and taste again. Put the cork or cap back on the bottle (again, with no aeration or decanting) and leave it on the counter overnight.</li>
          <li>Pour another glass and Taste again the next day. Most wines will have faded, but if yours still tastes good – or better – then you can generally expect it to age well for many years.</li>
        </ol>
        <p>The rule of thumb typically translates to two to three years of age for each day the wine showcases a developed palate.</p>
        <h2>Typical age-worthy wines</h2>
        <p>
          <dt>Cabernet Sauvignon</dt>
          <dd>
            Cabernet Sauvignons from cooler climates age best because the acidity is high – many of these are also aged in oak, which boosts their aging potential.
            Aging potential: Up to 20+ years for quality Bordeaux.
          </dd>

          <dt>Champagne</dt>
          <dd>
            High in acidity, Champagne will lose its effervescence as it ages but its flavours become nuttier and creamier.
            Aging potential: Up to 25+ years for legendary vintages.
          </dd>

          <dt>Chenin Blanc</dt>
          <dd>
            This variety is so naturally high in acidity that additional residual sugar is often used to provide balance.
            Aging potential: 30+ for high quality vintages.
          </dd>
          <dt>Nebbiolo</dt>
          <dd>
            An extremely acidic and tannic wine that mellows with age.
            Aging potential: 20+ years.
          </dd>
          <dt>Riesling</dt>
          <dd>
            A firm structure and sharp acidity allow some of the best Riesling to age for 100 years or more. Many also tout high residual sugar levels.
            Aging potential: 20+ years.
          </dd>
          <dt>Sangiovese</dt>
          <dd>
            High acidity and oak aging make this one of the longest-lived wines in the world.
            Aging potential: The best vintages can age for upwards of 50 years.
          </dd>
          <dt>Sauternes</dt>
          <dd>
            Sauternes ages so well because – like Chenin Blanc – it combines high acidity with high sugar levels.
            Aging potential: 40+ years.
          </dd>
          <dt>Syrah</dt>
          <dd>
            Syrah has naturally high levels of tannins that evolve and become multifaceted with age.
            Aging potential: 15+ years.</dd>
        </p>
      </div>
    </Block>
  )
}
