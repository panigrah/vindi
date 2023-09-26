/* eslint-disable @next/next/no-img-element */
'use client';
import { useQuery } from '@tanstack/react-query';
import { Page, Card, BlockTitle, ListItem, Preloader, ListInput, List, Block} from 'konsta/react'
import { useState } from 'react';
import { useDebounce } from 'use-debounce'

export default function WineTrackerPage() {
  const [q, setQ] = useState('')
  const [value] = useDebounce(q, 1000);

  const results = useQuery({ 
    queryKey: ['wine', 'search', q],
    queryFn: () => {
      const result = fetch(`/api/wine/search?q=${value}`).then( res => res.json() )
      return result;
    },
    enabled: !!value
  })

  const onSearch = (e:any) => {
    setQ(e.target.value)
  }

  console.log(results.data?.length, results.isFetching, q)
  return(
    <Page>
      <BlockTitle>Feel lucky?</BlockTitle>
      <List>
        <ListInput 
          onChange={onSearch} 
          placeholder='Search for a wine'
          outline={true}
          value={q}
        />
      </List> 
      { results.isFetching && <div className='flex flex-auto h-full'><Preloader className='mx-auto mt-20' /></div> }
      { (!results.isFetching && !results.data?.length) && (
          q?
            <Block inset>
              No results found
            </Block>
          :
            <Block inset>
              Enter something into the search box
            </Block>
        )
      }
      {results.data?.length &&
        <>
          <BlockTitle>Results</BlockTitle>
          <List outline>
            {results.data?.map( (r:any) => {
              return <ListItem 
                key={r.id} 
                href={r.url}
                target='new'
                title={r.src}
                after={r.sale_price}
                subtitle={<>
                  <span>{r.name}</span>
                  {r.vintage && <span>-[{r.vintage}]</span>}
                  </>
                }
                text={r.summary || r.detail || 'no details provided' }
                media={
                  r.image?.length ?
                  <img 
                    className="ios:rounded-lg material:rounded-full ios:w-20 aspect-square object-contain material:w-10"
                    src={r.image?.[0]}
                    width="80"
                    alt={r.name}
                  />
                  :undefined
                }
              />
            })}
          </List>
        </>
      }
    </Page>
  )
}