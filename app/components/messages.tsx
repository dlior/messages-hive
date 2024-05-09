import { fetchMessages } from '../lib/actions';
import MessageCard from './message-card';

export default async function Messages() {
  const messages = await fetchMessages();

  return (
    <section className='rounded-md shadow-md bg-white w-[450px] py-8 pr-8 text-sm flex flex-col gap-4 max-h-96 capitalize'>
      <h2 className='font-bold text-base pl-8'>
        message history ({messages?.length})
      </h2>
      <div className='messages-container scrollbar px-3'>
        {messages?.map((message, i) => (
          <MessageCard key={i} message={message} />
        ))}
      </div>
    </section>
  );
}
