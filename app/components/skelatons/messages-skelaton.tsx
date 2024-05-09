import MessageCardSkelaton from './message-card-skelaton';

export default function MessagesSkelaton() {
  return (
    <section className='rounded-md shadow-md bg-white w-[450px] py-8 pr-8 text-sm flex flex-col gap-4 max-h-96 capitalize'>
      <h2 className='font-bold text-base pl-8'>message history</h2>
      <div className='messages-container scrollbar px-3 my-8'>
        <MessageCardSkelaton />
        <MessageCardSkelaton />
        <MessageCardSkelaton />
      </div>
    </section>
  );
}
