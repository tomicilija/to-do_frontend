export interface UserI {
  name: string;
}

export interface UsersI {
  id: string;
  name: string;
}

export interface TaskI {
  title: string;
  description: string;
}

export interface TasksI {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  completedAt?: string;
  userId: string;
}

export interface UserInfoProps {
  isUserInfoOpen: boolean;
  setIsUserInfoOpen: (isUserInfoOpen: boolean) => void;
}


export interface AddTaskProps {
  isAddTaskOpen: boolean;
  setIsAddTaskOpen: (isAddTaskOpen: boolean) => void;
}

