export const SET_COMMENTABLE = 'SET_COMMENTABLE';

export function setCommentable(commentableId) {
  return {
    type: SET_COMMENTABLE,
    payload: commentableId,
  };
}
