'use client'

import {
  Page,
  Navbar,
} from 'konsta/react';
import Link from 'next/link';

export default function HomePage({ wines, tastings, users }: {wines: number, tastings: number, users: number}) {

  return (
    <Page>
      <Navbar title="Vindi" subtitle="Learn about Wine" />
      <div className='flex items-center justify-center flex-col flex-auto'>
      <div className='grid grid-cols-2 gap-4 p-4 w-full max-w-md'>
        <div className='rounded-md bg-slate-50 dark:bg-slate-950 shadow-md aspect-square p-4 flex flex-col'>
          <Link href="/tasting" className='flex-auto flex flex-col'>
            <div className='text-2xl'>
              Tastings
            </div>
            <div className='flex flex-row flex-auto items-end mb-4 space-x-2'>
              <span className='text-5xl font-bold'>
                {tastings}
              </span>
              <span>recorded</span>
            </div>
          </Link>
          <Link 
            className='bg-indigo-600 text-slate-100 rounded-md px-3 py-2 text-center'
            href='/tasting/new'>Record New</Link>
        </div>
        <div className='rounded-md bg-slate-50 dark:bg-slate-950 shadow-md aspect-square p-4 flex flex-col'>
          <Link href="/wine" className='flex-auto flex flex-col'>
          <div className='text-2xl'>Wines</div>
          <div className='flex flex-row flex-auto items-end mb-4 space-x-2'>
            <span className='text-5xl font-bold'>
              {wines}
            </span>
            <span>added</span>
          </div>
          </Link>
          <Link 
            className='bg-indigo-600 text-slate-100 rounded-md px-3 py-2 text-center'
            href='/wine'>Find Wine</Link>
        </div>
      </div>
      </div>
    </Page>
  );
}
