export interface Message {
  phoneNumber: string;
  message: string;
  date: Date | string | undefined;
}

export const messages: Message[] = [
  {
    phoneNumber: '123-456-7890',
    message: 'Hey there! How are you?',
    date: new Date('2023-04-20T09:30:00.000Z'),
  },
  {
    phoneNumber: '456-789-0123',
    message: 'Just wanted to remind you about our meeting tomorrow.',
    date: new Date('2023-04-21T06:00:00.000Z'),
  },
  {
    phoneNumber: '789-012-3456',
    message: 'Happy birthday! 🎉 Have an amazing day!',
    date: new Date('2023-05-04T21:00:00.000Z'),
  },
  {
    phoneNumber: '234-567-8901',
    message: 'I just saw the cutest puppy!',
    date: new Date('2023-04-18T12:45:00.000Z'),
  },
  {
    phoneNumber: '567-890-1234',
    message: "Don't forget to buy milk on your way home.",
    date: new Date('2023-04-22T14:00:00.000Z'),
  },
  {
    phoneNumber: '890-123-4567',
    message: 'Are you free for a call later?',
    date: new Date('2023-04-25T07:15:00.000Z'),
  },
  {
    phoneNumber: '345-678-9012',
    message: 'Remember to submit the report by end of day.',
    date: new Date('2023-04-19T13:30:00.000Z'),
  },
  {
    phoneNumber: '678-901-2345',
    message: "Let's grab lunch together tomorrow.",
    date: new Date('2023-04-21T09:00:00.000Z'),
  },
  {
    phoneNumber: '901-234-5678',
    message: 'Happy anniversary! 💖',
    date: new Date('2023-04-30T21:00:00.000Z'),
  },
  {
    phoneNumber: '432-109-8765',
    message: 'Can you pick up some groceries on your way back?',
    date: new Date('2023-04-24T15:30:00.000Z'),
  },
  {
    phoneNumber: '765-432-1098',
    message: "Don't forget to water the plants.",
    date: new Date('2023-04-20T05:00:00.000Z'),
  },
  {
    phoneNumber: '098-765-4321',
    message: 'Have a safe trip!',
    date: new Date('2023-04-28T03:00:00.000Z'),
  },
  {
    phoneNumber: '321-654-9870',
    message: 'Happy Friday! 🥳',
    date: new Date('2023-04-20T21:00:00.000Z'),
  },
  {
    phoneNumber: '654-987-0123',
    message: 'Good luck on your presentation today!',
    date: new Date('2023-04-19T06:30:00.000Z'),
  },
  {
    phoneNumber: '987-012-3456',
    message: "I'll be there in 10 minutes.",
    date: new Date('2023-04-23T12:50:00.000Z'),
  },
  {
    phoneNumber: '210-543-8765',
    message: 'Did you see the latest episode of that show?',
    date: new Date('2023-04-22T18:00:00.000Z'),
  },
  {
    phoneNumber: '543-876-1098',
    message: 'Congratulations on your promotion!',
    date: new Date('2023-05-02T21:00:00.000Z'),
  },
  {
    phoneNumber: '876-109-4321',
    message: "Don't worry, everything will be fine.",
    date: new Date('2023-04-19T14:45:00.000Z'),
  },
  {
    phoneNumber: '109-432-7654',
    message: 'Can we reschedule our meeting to next week?',
    date: new Date('2023-04-24T11:00:00.000Z'),
  },
  {
    phoneNumber: '432-765-0987',
    message: "Sorry, I'm running late. Be there soon!",
    date: new Date('2023-04-20T07:30:00.000Z'),
  },
  {
    phoneNumber: '765-098-3210',
    message: "Hope you're having a great day!",
    date: new Date('2023-04-25T08:20:00.000Z'),
  },
  {
    phoneNumber: '098-321-6543',
    message: "Don't forget to call mom.",
    date: new Date('2023-04-18T16:00:00.000Z'),
  },
  {
    phoneNumber: '321-654-9876',
    message: 'Let me know if you need any help with that.',
    date: new Date('2023-04-23T10:10:00.000Z'),
  },
  {
    phoneNumber: '654-987-2109',
    message: 'What time are we meeting tomorrow?',
    date: new Date('2023-04-19T08:45:00.000Z'),
  },
  {
    phoneNumber: '987-210-5432',
    message: "Don't forget to buy tickets for the concert.",
    date: new Date('2023-04-27T05:30:00.000Z'),
  },
  {
    phoneNumber: '210-543-8765',
    message: 'Have you read the latest book by that author?',
    date: new Date('2023-04-21T11:20:00.000Z'),
  },
  {
    phoneNumber: '543-876-1098',
    message: 'Happy holidays! 🎄',
    date: new Date('2023-05-14T21:00:00.000Z'),
  },
  {
    phoneNumber: '876-109-4321',
    message: "Let's plan a trip for next month.",
    date: new Date('2023-04-28T21:00:00.000Z'),
  },
  {
    phoneNumber: '109-432-7654',
    message: 'Can you sent me the details?',
    date: new Date('2023-04-26T13:00:00.000Z'),
  },
  {
    phoneNumber: '432-765-0987',
    message: "I'll be working late tonight.",
    date: new Date('2023-04-20T16:30:00.000Z'),
  },
  {
    phoneNumber: '765-098-3210',
    message: "Let's catch up over coffee.",
    date: new Date('2023-04-23T08:00:00.000Z'),
  },
  {
    phoneNumber: '098-321-6543',
    message: 'Remember to book the restaurant for Saturday.',
    date: new Date('2023-04-22T07:00:00.000Z'),
  },
  {
    phoneNumber: '321-654-9876',
    message: 'Looking forward to seeing you!',
    date: new Date('2023-04-25T15:00:00.000Z'),
  },
  {
    phoneNumber: '654-987-2109',
    message: "Don't forget to pack your passport.",
    date: new Date('2023-04-30T06:00:00.000Z'),
  },
  {
    phoneNumber: '987-210-5432',
    message: 'Happy New Year! 🎉',
    date: new Date('2022-12-31T22:00:00.000Z'),
  },
  {
    phoneNumber: '210-543-8765',
    message: 'Are you coming to the party tonight?',
    date: new Date('2023-04-29T17:00:00.000Z'),
  },
  {
    phoneNumber: '543-876-1098',
    message: "Let's go for a hike this weekend.",
    date: new Date('2023-04-22T04:00:00.000Z'),
  },
  {
    phoneNumber: '876-109-4321',
    message: 'Do you want to watch a movie later?',
    date: new Date('2023-04-23T16:00:00.000Z'),
  },
  {
    phoneNumber: '109-432-7654',
    message: "I'll be there in 5 minutes.",
    date: new Date('2023-04-19T11:55:00.000Z'),
  },
  {
    phoneNumber: '432-765-0987',
    message: 'Let me know if you need anything.',
    date: new Date('2023-04-24T07:45:00.000Z'),
  },
  {
    phoneNumber: '765-098-3210',
    message: 'Have you seen the latest episode?',
    date: new Date('2023-04-27T19:00:00.000Z'),
  },
  {
    phoneNumber: '098-321-6543',
    message: "I'm so excited for the concert!",
    date: new Date('2023-04-28T15:00:00.000Z'),
  },
  {
    phoneNumber: '321-654-9876',
    message: "Let's plan a trip for next summer.",
    date: new Date('2023-04-30T21:00:00.000Z'),
  },
  {
    phoneNumber: '654-987-2109',
    message: 'Can you pick up some snacks on your way?',
    date: new Date('2023-04-26T13:30:00.000Z'),
  },
  {
    phoneNumber: '987-210-5432',
    message: "I'm looking forward to our dinner tonight.",
    date: new Date('2023-04-21T16:30:00.000Z'),
  },
];
