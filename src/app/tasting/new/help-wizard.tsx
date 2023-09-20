'use client';
import { Panel, Link as ConstaLink, Page, Navbar, Block } from 'konsta/react';
import Clarity from './wizards/clarity';
import Color from './wizards/color';

export function HelpWizard({ topic, title, update, onClose }: { topic?: string; title?: string; update?: any; onClose: () => void; }) {
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
          {topic === 'clarity' && <Clarity onChange={(v) => update(topic, v)} />}
          {topic === 'color' && <Color onChange={(v) => update(topic, v)} />}
        </Block>
      </Page>
    </Panel>
  );
}
