import { TaskModel } from '@/schemas/task.schema';
import { updateTaskSchema } from '@/utils/schema';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export async function PUT(
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

  const data = await request.json();

  const result = updateTaskSchema.safeParse(data);

  if (!result.success) {
    return NextResponse.json({ error: result.error.message }, { status: 400 });
  }

  const isExist = await TaskModel.get(id);

  if (!isExist) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  const task = await TaskModel.update(id, result.data);

  return NextResponse.json(task);
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

  const isExist = await TaskModel.get(id);

  if (!isExist) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  await TaskModel.delete(id);

  return NextResponse.json({ message: 'Task deleted' });
}
