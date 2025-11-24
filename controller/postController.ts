// @ts-nocheck
import * as db from "../fake-db";

// POSTS
export const getPosts = async (n = 5, sub = undefined) => {
  return db.getPosts(n, sub);
};

export const getPostById = async (id: string) => {
  return db.getPost(Number(id));
};

export const createPost = async ({ title, link, description, subgroup, creator }) => {
  return db.addPost(title, link, creator, description, subgroup);
};

export const updatePost = async (id: string, changes: any) => {
  return db.editPost(Number(id), changes);
};

export const deletePost = async (id: string) => {
  return db.deletePost(Number(id));
};

// COMMENTS
export const getCommentsForPost = async (postid: string) => {
  // Comments are provided inside decoratePost, so we return the post’s comments.
  const post = db.getPost(Number(postid));
  return post ? post.comments : [];
};

export const getCommentById = async (id: string) => {
  return db.getCommentById(Number(id));
};

export const createComment = async (postid: string, creator: any, description: string) => {
  return db.addComment(Number(postid), creator, description);
};

export const deleteComment = async (id: string) => {
  return db.deleteComment(Number(id));
};

// VOTES
export const setVote = async (postid: string, userid: any, value: number) => {
  return db.setVote(userid, Number(postid), value);
};
