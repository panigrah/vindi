'use client'

import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  Link,
  BlockTitle,
  Tabbar,
  TabbarLink,
  Icon
} from 'konsta/react';

export default function Home() {
  return (
    <Page>
      <Navbar title="Vindi" subtitle="Learn about Wine" />
      <Tabbar className="left-0 bottom-0 fixed">
        <TabbarLink
          onClick={() => console.log('go')}
          label={'Tastings'}
        />
        <TabbarLink
          onClick={() => console.log('go')}
          label={'Wines'}
        />
      </Tabbar>
    </Page>
  );
}
