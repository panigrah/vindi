'use client';
import { Panel, Link as ConstaLink, Page, Navbar, Block } from 'konsta/react';
import Clarity from './wizards/clarity';
import Color from './wizards/color';
import AppearanceIntensity from './wizards/appearance-intensity';

export type WizardComponent = React.FC<{onChange?: (value: any) => void}>

interface WizardsType {
  [key: string]: WizardComponent
}

const WizardList:WizardsType = {
  clarity: Clarity,
  color: Color,
  appearanceIntensity: AppearanceIntensity
}

export function HelpWizard({ topic, title, update, onClose }: { topic?: string; title?: string; update?: any; onClose: () => void; }) {
  const Component = topic? WizardList[topic] : null;

  return (
    <Panel
      side="left"
      opened={!!topic}
      onBackdropClick={() => onClose()}
    >
      <Page>
        <Navbar
          title={title ?? topic}
          right={<ConstaLink navbar onClick={() => onClose()}>
            Close
          </ConstaLink>} />
        <Block>
          {Component && <Component onChange={(v) => update(topic, v)} />}
        </Block>
      </Page>
    </Panel>
  );
}
