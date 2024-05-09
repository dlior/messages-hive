import { Suspense } from 'react';

import MessageForm from './components/message-form';
import Messages from './components/messages';
import MessagesSkelaton from './components/skelatons/messages-skelaton';

export default function HomePage() {
  return (
    <main className='flex flex-col gap-6 items-center mt-24'>
      <h1 className='text-lg font-extrabold uppercase'>my sms messenger</h1>
      <div className='flex gap-6 justify-center'>
        <MessageForm />
        <Suspense fallback={<MessagesSkelaton />}>
          <Messages />
        </Suspense>
      </div>
    </main>
  );
}
