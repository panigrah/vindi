'use client';
import { Panel, Link as ConstaLink, Page, Navbar, Block } from 'konsta/react';
import Clarity from './wizards/clarity';
import Color from './wizards/color';
import AppearanceIntensity from './wizards/appearance-intensity';
import AromaIntensity from './wizards/aroma-intensity';
import Condition from './wizards/condition';
import Development from './wizards/development';
import AromaDescriptors from './wizards/aroma-descriptors';
import Sweetness from './wizards/sweetness';
import Acidity from './wizards/acidity';
import Tannin from './wizards/tannin';
import Alcohol from './wizards/alcohol';

export type WizardComponent = React.FC<{onChange?: (value: any) => void}>

interface WizardsType {
  [key: string]: { Component: WizardComponent, title: string }
}

const WizardList:WizardsType = {
  clarity: { Component: Clarity, title: 'Clarity' },
  color: { Component: Color, title: 'Color' },
  appearanceIntensity: { Component: AppearanceIntensity, title: 'Intensity' },
  noseIntensity: { Component: AromaIntensity, title: 'Intensity' },
  condition: { Component: Condition, title: 'Nose Condition' },
  development: { Component: Development, title: 'Development' },
  aromaDescriptors: { Component: AromaDescriptors, title: 'Aroma Descriptors' },
  sweetness: { Component: Sweetness, title: 'Sweetness' },
  acidity: { Component: Acidity, title: 'Acidity' },
  tannin: { Component: Tannin, title: 'Tannin' },
  alcohol: { Component: Alcohol, title: 'Alcohol Content' }
}

export function HelpWizard({ topic, title, update, onClose }: { topic?: string; title?: string; update?: any; onClose: () => void; }) {
  const Wizard = topic? WizardList[topic] : null;

  return (
    <Panel
      side="left"
      opened={!!topic}
      onBackdropClick={() => onClose()}
      size='w-screen h-screen max-w-md'
    >
      <Page>
        <Navbar
          title={Wizard?.title ?? topic}
          right={<ConstaLink navbar onClick={() => onClose()}>
            Close
          </ConstaLink>} />
        {Wizard?.Component && <Wizard.Component onChange={(v) => update(topic, v)} />}
      </Page>
    </Panel>
  );
}
