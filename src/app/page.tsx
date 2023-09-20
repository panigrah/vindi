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
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  return (
    <Page>
      <Navbar title="Vindi" subtitle="Learn about Wine" />
        <Tabbar className="left-0 bottom-0 fixed">
          <TabbarLink
            onClick={() => router.push('/tasting')}
            label={'Tastings'}
          />
          <TabbarLink
            onClick={() => router.push('/wine')}
            label={'Wines'}
          />
        </Tabbar>
    </Page>
  );
}
