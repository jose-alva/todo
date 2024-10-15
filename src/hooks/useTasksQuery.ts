import { useQuery } from '@tanstack/react-query';

const getTasks = async (status: string) => {
  const response = await fetch(`/api/tasks?status=${status}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response.json() as Promise<any[]>;
};

export const useTasksQuery = (status: string) => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks(status),
    enabled: true,
    staleTime: Infinity,
  });
};
