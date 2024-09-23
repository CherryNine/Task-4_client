import { UserProfile } from "app/auth/types/userProfile";

export interface UserState {
    users: UserProfile[];
    pending: {
      getUsers: boolean;
      delete: boolean;
      changeStatus: boolean;
    };
    errors: {
      getUsers: string | null;
      delete: string | null;
      changeStatus: string | null;
    };
  }