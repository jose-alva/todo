import { Todo } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

const getTasks = async (status: string) => {
  const response = await fetch(`/api/todos?status=${status}`);
  return response.json() as Promise<Todo[]>;
};

export const useTasksQuery = (status: string) => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks(status),
    enabled: true,
    staleTime: Infinity,
  });
};
