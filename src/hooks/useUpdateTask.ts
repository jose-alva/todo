import { UpdateTaskSchema } from '@/utils/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: UpdateTaskSchema & { id: string }) => {
      await fetch(`/api/todos/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
