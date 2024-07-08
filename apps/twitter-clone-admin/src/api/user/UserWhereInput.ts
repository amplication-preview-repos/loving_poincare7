import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  profilePicture?: JsonFilter;
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  likes?: LikeListRelationFilter;
  tweets?: TweetListRelationFilter;
};
