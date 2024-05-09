import { Message } from '../lib/db';
import { dateFormatter } from '../lib/utils';

type MessageCardProps = {
  message: Message;
};

export default function MessageCard({ message }: MessageCardProps) {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex justify-between text-xs'>
        <span className='font-bold'>{message.phoneNumber}</span>
        <span>{dateFormatter(message.date)}</span>
      </div>
      <p className='p-2 rounded-md text-xs border border-black'>
        {message.message}
      </p>
    </div>
  );
}
