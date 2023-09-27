/* eslint-disable @next/next/no-img-element */
'use client';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { ListBulletIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import { Page, Card, Navbar, BlockTitle, ListItem, Searchbar, Preloader, ListInput, List, Block} from 'konsta/react'
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce'

export default function WineTrackerPage() {
  const searchParams = useSearchParams()
  const keywords = searchParams.get('q') || ''
  const [q, setQ] = useState(keywords)
  const [value] = useDebounce(q, 1000);

  const router = useRouter()
  const pathname = usePathname()
  
  const results = useQuery({ 
    queryKey: ['wine', 'search', keywords],
    queryFn: () => {
      const result = fetch(`/api/wine/search?q=${keywords}`).then( res => res.json() )
      return result;
    },
    enabled: !!keywords
  })

  const setQueryParam = useCallback((key: string, value: string) => {
    let qs = new URLSearchParams()
    searchParams.forEach((v, k) => {
      if( k !== key ) {
        qs.append(k, v)
      }
    })
    qs.append(key, value)
    //console.log(qs.toString())
    router.push(pathname + '?' + qs.toString())
  }, [pathname, router, searchParams])

  useEffect(() => {
    setQueryParam('q', value)
  }, [value, setQueryParam])

  const onSearch = (e:any) => {
    setQ(e.target.value)
  }

  //console.log(results.data?.length, results.isFetching, q)
  return(
    <Page>
       <Navbar 
          title='Search for a Wine'
          right={<Link href='/wines/tracker'>
            <ShoppingBagIcon className='w-5 h-5' />
          </Link>}
        />
      <BlockTitle>Feel lucky?</BlockTitle>
      <Block strong inset>
          <Searchbar 
            outline 
            onChange={onSearch} 
            placeholder='Search for a wine'
            value={q}
          />
        </Block>
     
      <BlockTitle>Results</BlockTitle>
      { results.isFetching && <div className='flex flex-auto h-full'><Preloader className='mx-auto mt-20' /></div> }
      { (!results.isFetching && !results.data?.length)? 
        (
          q?
            <Block strong inset>
              No results found
            </Block>
          :
            <Block strong inset>
              Enter something into the search box
            </Block>
        )
        :
        null
      }
      {results.data?.length ?
          <List strong inset outline>
            {results.data.map( (r:any) => {
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
        : null
      }
    </Page>
  )
}