'use client';

import { useState } from 'react';

import { sendMessage } from '../lib/actions';

export default function MessageForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (formData: FormData) => {
    await sendMessage(formData);
    onClear();
  };
  const onClear = () => {
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <section className='rounded-md shadow-md bg-white w-[450px] p-8 text-sm flex flex-col gap-4 max-h-96'>
      <h2 className='font-bold text-base capitalize'>new message</h2>
      <form className='flex flex-col gap-4' action={onSubmit}>
        <div className='flex flex-col gap-1'>
          <label htmlFor='phoneNumber' className='text-xs'>
            Phone number
          </label>
          <input
            type='text'
            pattern='\d{3}-\d{3}-\d{4}'
            id='phoneNumber'
            name='phoneNumber'
            className='p-2 border-black border rounded-md placeholder:italic text-xs'
            placeholder='123-456-7890'
            required
            title='Phone number should be in xxx-xxx-xxxx format'
            value={phoneNumber}
            onChange={({ target: { value } }) => setPhoneNumber(value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='message' className='text-xs capitalize'>
            message
          </label>
          <textarea
            name='message'
            id='message'
            rows={5}
            className='rounded-md border-black border p-2 resize-none placeholder:italic text-xs'
            required
            placeholder='message'
            maxLength={250}
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
          />
          <aside className='text-right text-xs text-gray-500'>
            {message.length}/250
          </aside>
        </div>
        <div className='flex justify-between items-center mt-4 mb-12'>
          <button
            type='button'
            className='border-b-black border-b p-0 text-xs capitalize'
            onClick={onClear}
          >
            clear
          </button>
          <button
            className='capitalize rounded-full bg-black py-2 px-4 text-white text-xs disabled:opacity-80 disabled:bg-gray-800 disabled:hover:cursor-not-allowed'
            disabled={!phoneNumber || !message}
          >
            submit
          </button>
        </div>
      </form>
    </section>
  );
}
