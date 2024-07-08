import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  media?: JsonFilter;
  comments?: CommentListRelationFilter;
  likes?: LikeListRelationFilter;
  user?: UserWhereUniqueInput;
};
