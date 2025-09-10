import { User } from './User';
export interface UserRepository {
  findCurrent(): User | null;
}