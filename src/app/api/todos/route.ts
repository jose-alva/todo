import db from '@/utils/database';
import { createTaskSchema } from '@/utils/schema';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');
  const where: Prisma.TodoWhereInput = {};

  if (status && status !== 'All') {
    where.status = status as string;
  }

  const todos = await db.todo.findMany({
    where,
  });

  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const { title } = await request.json();

  const result = createTaskSchema.safeParse({ title });

  if (!result.success) {
    return NextResponse.json({ error: result.error.message }, { status: 400 });
  }

  const todo = await db.todo.create({
    data: {
      title,
      status: 'incomplete',
    },
  });

  return NextResponse.json(todo);
}
