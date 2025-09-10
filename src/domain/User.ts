export type User = {
  id: string;
  name: string;
  handle: string; 
  avatarUrl: string;
  bio?: string; 
};

const user1: User = {
  id: "1",
  name: "Capitan America",
  handle: "captain_america",
  avatarUrl: "/pictures/avatar.png",
  bio: "Leader of the Avengers 🛡️",
};