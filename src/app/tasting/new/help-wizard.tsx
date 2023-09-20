'use client';
import { Panel, Link as ConstaLink, Page, Navbar, Block } from 'konsta/react';
import Clarity from './wizards/clarity';
import Color from './wizards/color';
import AppearanceIntensity from './wizards/appearance-intensity';

export type WizardComponent = React.FC<{onChange?: (value: any) => void}>

interface WizardsType {
  [key: string]: { Component: WizardComponent, title: string }
}

const WizardList:WizardsType = {
  clarity: { Component: Clarity, title: 'Clarity' },
  color: { Component: Color, title: 'Color' },
  appearanceIntensity: { Component: AppearanceIntensity, title: 'Intensity' }
}

export function HelpWizard({ topic, title, update, onClose }: { topic?: string; title?: string; update?: any; onClose: () => void; }) {
  const Wizard = topic? WizardList[topic] : null;

  return (
    <Panel
      side="left"
      opened={!!topic}
      onBackdropClick={() => onClose()}
    >
      <Page>
        <Navbar
          title={Wizard?.title ?? topic}
          right={<ConstaLink navbar onClick={() => onClose()}>
            Close
          </ConstaLink>} />
        <Block>
          {Wizard?.Component && <Wizard.Component onChange={(v) => update(topic, v)} />}
        </Block>
      </Page>
    </Panel>
  );
}
