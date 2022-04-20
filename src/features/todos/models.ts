interface ITodo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
  createdAt?: string;
}

export type { ITodo };
export default {};
