import { NextRequest, NextResponse } from 'next/server';
import db from '@/utils/database';
import { updateTaskSchema } from '@/utils/schema';
import { z } from 'zod';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { title, status } = await request.json();

  const isIdValid = z.string().uuid().safeParse(id);

  if (!isIdValid.success) {
    return NextResponse.json(
      { error: isIdValid.error.message },
      { status: 400 }
    );
  }

  const result = updateTaskSchema.safeParse({ title, status });

  if (!result.success) {
    return NextResponse.json({ error: result.error.message }, { status: 400 });
  }

  const isExist = await db.todo.findUnique({
    where: { id: id as string },
  });

  if (!isExist) {
    return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
  }

  const todo = await db.todo.update({
    where: { id: id as string },
    data: { title, status },
  });

  return NextResponse.json(todo);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const isIdValid = z.string().uuid().safeParse(id);

  if (!isIdValid.success) {
    return NextResponse.json(
      { error: isIdValid.error.message },
      { status: 400 }
    );
  }

  const isExist = await db.todo.findUnique({
    where: { id: id as string },
  });

  if (!isExist) {
    return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
  }

  await db.todo.delete({
    where: { id: id as string },
  });

  return NextResponse.json({ message: 'Todo deleted' });
}
