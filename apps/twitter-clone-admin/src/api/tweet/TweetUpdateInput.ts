import { InputJsonValue } from "../../types";
import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  content?: string | null;
  media?: InputJsonValue;
  comments?: CommentUpdateManyWithoutTweetsInput;
  likes?: LikeUpdateManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
