'use client';
import { Preloader, Page } from 'konsta/react';

export const Loader = ({ message }: { message: string; }) => {
  return (<Page>
    <div className='flex flex-auto flex-col h-full justify-center'>
      <Preloader className="mx-auto" />
      <div className='text-center w-full'>{message}</div>
    </div>
  </Page>);
};
