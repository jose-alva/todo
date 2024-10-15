'use client';

import CreateTaskDialog from '@/components/CreateTaskDialog';
import { toast } from '@/components/toast';
import { useDeleteTask } from '@/hooks/useDeleteTask';
import { useTasksQuery } from '@/hooks/useTasksQuery';
import { useUpdateTask } from '@/hooks/useUpdateTask';
import { TaskStatus } from '@/types/taks';
import { Add, Delete } from '@mui/icons-material';
import {
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
const TodoItemStyled = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
}));

export default function Home() {
  const [status, setStatus] = useState<string>('All');
  const [open, setOpen] = useState<boolean>(false);

  const tasksQuery = useTasksQuery(status);
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const changeTaskStatus = async (id: string, status: string) => {
    try {
      await updateTask.mutateAsync({
        id,
        status:
          status === TaskStatus.Completed
            ? TaskStatus.Incomplete
            : TaskStatus.Completed,
      });
      toast('Task status changed successfully', 'success');
    } catch (error) {
      toast('Failed to change task status', 'error');
      console.error(error);
    }
  };

  const onDeleteTask = async (id: string) => {
    try {
      await deleteTask.mutateAsync(id);
      toast('Task deleted successfully', 'success');
    } catch (error) {
      toast('Failed to delete task', 'error');
      console.error(error);
    }
  };

  useEffect(() => {
    tasksQuery.refetch();
  }, [status]);

  return (
    <Container maxWidth="sm" sx={{ my: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Welcome to the Todo App!
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple Todo App built with MUI and Next.js. You can add,
        remove, and manage your tasks here.
      </Typography>
      <CreateTaskDialog open={open} handleClose={handleClose} />
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        alignItems="center"
        sx={{ my: 4 }}
      >
        <FormControl fullWidth size="small">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={handleChange}
            size="small"
            variant="outlined"
            label="Status"
            defaultValue=""
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
          </Select>
        </FormControl>

        <IconButton onClick={handleOpen}>
          <Add />
        </IconButton>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <List sx={{ gap: 2, flexDirection: 'column', display: 'flex' }}>
        {tasksQuery.data?.map((task) => (
          <TodoItemStyled key={task.id}>
            <FormControlLabel
              control={<Checkbox checked={task.status === 'completed'} />}
              label={task.title}
              slotProps={{
                typography: {
                  sx: {
                    textDecoration:
                      task.status === 'completed' ? 'line-through' : 'none',
                  },
                },
              }}
              onChange={() => changeTaskStatus(task.id, task.status)}
            />
            <IconButton color="error" onClick={() => onDeleteTask(task.id)}>
              <Delete />
            </IconButton>
          </TodoItemStyled>
        ))}
      </List>
    </Container>
  );
}
