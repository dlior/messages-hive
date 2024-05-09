import React from 'react';

export default function MessageCardSkelaton() {
  return (
    <div role='status' className='animate-pulse flex flex-col gap-1 mt-2'>
      <div className='flex justify-between gap-2'>
        <span className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 pr-2 w-1/4'></span>
        <span className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-2/4'></span>
      </div>
      <p className='h-8 bg-gray-200 rounded-md dark:bg-gray-700' />
    </div>
  );
}
