import { CreateTaskSchema } from '@/utils/schema';
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query';

const createTask = async (task: CreateTaskSchema) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(task),
  });
  return response.json();
};

export const useCreateTask = (
  options?: UseMutationOptions<CreateTaskSchema, Error, CreateTaskSchema>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    ...options,
  });
};
