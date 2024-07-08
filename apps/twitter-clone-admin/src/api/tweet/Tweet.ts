import { JsonValue } from "type-fest";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { User } from "../user/User";

export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  media: JsonValue;
  comments?: Array<Comment>;
  likes?: Array<Like>;
  user?: User | null;
};
