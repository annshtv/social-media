import { UserRepository } from '../domain/UserRepository';
export const getCurrentUser = (userRepository: UserRepository) => {
  return userRepository.findCurrent();
};