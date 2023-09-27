'use client';
import { useMutation } from '@tanstack/react-query';
import { Page, Block, List, ListItem, BlockTitle, Notification, Navbar, ListInput, Preloader, Searchbar } from 'konsta/react'
import { useState } from 'react';
import { useMutationAddRetailer } from './queries';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function isValidURL(url: string) {
  var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

export default function WineRetailerTrackerPage({ items }: { 
  items: {
    name: string, 
    lastChecked: Date | null, 
    status: string,
    url: string
  }[]}) {
    const [open, setNotification] = useState(false)
    const [q, setQ] = useState('')
    const addRetailerMutation = useMutationAddRetailer()
    const haveValidURL = isValidURL(q)

    const onAdd = (e:any) => {
      setQ(e.target.value)
    }

    const filtered = items.filter(i => i.name.includes(q) || i.url.includes(q))

    return(
      <Page>
        <Navbar 
          title='Tracked Sites'
          left={<Link href='/wines'><ChevronLeftIcon className='w-5 h-5' /></Link>}
        />
        <Notification
          opened={open}
          title="Vindiary"
          subtitle="Added new request"
          text="It will take a few days"
          button
          onClick={() => setNotification(false)} 
        />
        <Block strong inset>
          <Searchbar 
            outline 
            onChange={onAdd}
            after={<Preloader size='w-5 h-5' />}
            placeholder='Find or Request new retailer'
          />
        </Block>
        <BlockTitle>Tracked Sites ({filtered.length})</BlockTitle>
        <List inset strong>
          {filtered.length > 0?
            filtered.map(i => 
              <ListItem 
                key={i.name}
                title={i.url}
                subtitle={`Frequency: ${i.status}`}
                text={i.lastChecked?.toString()}
              />
            )
          :
            <ListItem
              link={haveValidURL && !addRetailerMutation.isLoading}
              after={addRetailerMutation.isLoading? <Preloader size='w-5 h-5' /> : null}
              onClick={() => {
                if(haveValidURL) {
                  addRetailerMutation.mutate(
                    {url: q} as any,
                    {onSuccess: (data) => {
                      setNotification(true)
                      setQ('')
                    }}
                  )
                }
              }}
              title={
                haveValidURL? 
                  <div>Request <u>{q}</u> to be added</div>
                  :
                  <div>Enter a valid url and click here to request it to be added</div>
                }
              subtitle={''}
            />
          }
        </List>
      </Page>
    )
}