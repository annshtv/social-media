export type User = {
  id: string;
  name: string;
  handle: string; 
  avatarUrl: string;
  bio?: string; 
  isNew:boolean;
};

const user: User = {
  id: "1",
  name: "Capitan America",
  handle: "captain_america",
  avatarUrl: "/pictures/avatar.png",
  bio: "Leader of the Avengers 🛡️",
};