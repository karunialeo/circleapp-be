import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createThread(req: Request, res: Response) {
  const { content, authorId } = req.body;

  // const user = (req as any).user;
  // console.log(user);

  if (!content || !authorId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  let imagePath = null;
  if (req.file) {
    console.log(req.file.path);
    imagePath = req.file.path;
  }

  try {
    const newThread = await prisma.thread.create({
      data: {
        content,
        authorId,
        image: imagePath,
      },
    });

    res
      .status(201)
      .json({ message: 'Thread created successfully', thread: newThread });
  } catch (error) {
    res.status(500).json({ message: 'Error creating thread', error });
  }
}
