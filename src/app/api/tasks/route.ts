import { TaskModel } from '@/schemas/task.schema';
import { TaskStatus } from '@/types/taks';
import { createTaskSchema } from '@/utils/schema';
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');

  let tasks;
  if (status && status !== 'All') {
    tasks = await TaskModel.scan('status').eq(status).all().exec();
  } else {
    tasks = await TaskModel.scan().all().exec();
  }

  const sortedTasks = tasks.toSorted((a, b) => {
    return (
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() &&
      (b.status === TaskStatus.Completed ? -1 : 1)
    );
  });

  return NextResponse.json(sortedTasks);
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const result = createTaskSchema.safeParse(data);

  if (!result.success) {
    return NextResponse.json({ error: result.error.message }, { status: 400 });
  }

  const task = await TaskModel.create({
    id: crypto.randomUUID(),
    ...result.data,
    status: TaskStatus.Incomplete,
  });

  return NextResponse.json(task);
}
