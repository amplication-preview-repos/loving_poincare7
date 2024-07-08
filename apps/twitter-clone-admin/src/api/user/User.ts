import { JsonValue } from "type-fest";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Tweet } from "../tweet/Tweet";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  profilePicture: JsonValue;
  bio: string | null;
  comments?: Array<Comment>;
  likes?: Array<Like>;
  tweets?: Array<Tweet>;
};
