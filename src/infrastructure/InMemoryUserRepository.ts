import type { User } from '../domain/User';
import type { UserRepository } from '../domain/UserRepository';
import userAvatar from '../pictures/avatar.png';

const currentUser: User = {
  id: 'user-steve',
  name: 'Steve Rogers',
  handle: 'steve_rogers',
  avatarUrl: userAvatar,
  bio: ''
};

export const inMemoryUserRepository: UserRepository = {
  findCurrent() {
    return currentUser;
  }
};