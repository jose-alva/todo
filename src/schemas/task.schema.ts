import { TaskStatus } from '@/types/taks';
import dynamoose from '@/utils/dynamodb';

export const TaskSchema = new dynamoose.Schema(
  {
    id: { type: String, hashKey: true },
    title: { type: String, required: true },
    status: {
      required: true,
      index: true,
      type: String,
      default: TaskStatus.Incomplete,
      enum: Object.values(TaskStatus),
    },
  },
  {
    timestamps: true,
    saveUnknown: true,
  }
);

export const TaskModel = dynamoose.model('Tasks', TaskSchema);
