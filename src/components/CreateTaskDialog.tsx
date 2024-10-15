import { useCreateTask } from '@/hooks/useCreateTask';
import { CreateTaskSchema } from '@/utils/schema';
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { toast } from './toast';

export default function CreateTaskDialog({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const form = useForm<CreateTaskSchema>();
  const createTaskMutation = useCreateTask();
  const onSubmit = async (data: CreateTaskSchema) => {
    try {
      await createTaskMutation.mutateAsync(data);
      toast('Task created successfully', 'success');
      form.reset();
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        component: 'form',
        onSubmit: form.handleSubmit(onSubmit),
      }}
    >
      <DialogTitle>Create Task</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a new task</DialogContentText>
        <TextField
          {...form.register('title')}
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="Title"
          fullWidth
          variant="outlined"
          error={!!form.formState.errors.title}
          helperText={form.formState.errors.title?.message}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          onClick={handleClose}
          variant="soft"
          size="large"
          color="inherit"
        >
          Cancel
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={form.formState.isSubmitting}
        >
          Create
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
