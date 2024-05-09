'use server';

import { revalidatePath } from 'next/cache';

import { Message, messages } from '../db';
import prisma from '../db/db';

export async function seedDb() {
  await prisma.message.createMany({
    data: messages,
  });
}

export async function fetchMessages(): Promise<Message[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = await prisma.message.findMany({
    orderBy: [
      {
        date: 'desc',
      },
    ],
  });
  if (!data?.length) {
    await seedDb();
  }
  return data;
}

export async function sendMessage(formData: FormData) {
  await prisma.message.create({
    data: {
      phoneNumber: formData.get('phoneNumber') as string,
      message: formData.get('message') as string,
      date: new Date(),
    },
  });
  revalidatePath('/');
}
