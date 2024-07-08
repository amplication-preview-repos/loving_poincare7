import { InputJsonValue } from "../../types";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  profilePicture?: InputJsonValue;
  bio?: string | null;
  comments?: CommentUpdateManyWithoutUsersInput;
  likes?: LikeUpdateManyWithoutUsersInput;
  tweets?: TweetUpdateManyWithoutUsersInput;
};
