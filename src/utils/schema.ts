import { TaskStatus } from '@/types/taks';
import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string({ message: 'Title is required' }),
});

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  title: z.string().optional(),
  status: z.nativeEnum(TaskStatus).optional(),
});

export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;
