import { InputJsonValue } from "../../types";
import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  content?: string | null;
  media?: InputJsonValue;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
