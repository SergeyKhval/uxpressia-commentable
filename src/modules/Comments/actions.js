import { database } from 'firebase';
import { firebaseDB } from '../../services/firebase'

export const COMMENTS_FETCH = 'COMMENTS_FETCH';
export const COMMENTABLE_UNSET = 'COMMENTABLE_UNSET';

function nestComments(commentList) {
  const keys = Object.keys(commentList);

  keys.forEach(key => {
    const comment = commentList[key];

    if (comment.parentId !== -1) {
      const parent = commentList[comment.parentId];

      if (parent) {
        if (!parent.hasOwnProperty('subComments')) {
          parent.subComments = [];
        }

        parent.subComments.push(comment);
      }
    }
  });

  return keys.map((key) => {
    const comment = commentList[key];
    comment.id = key;

    return comment;
  }).filter(comment => comment.parentId === -1);
}

export function fetchComments(commentableId) {
  const commentsRef = firebaseDB.ref(`/commentables/${commentableId}/comments`);

  return (dispatch) => {
    commentsRef.on('value', (snapshot) => {
      const comments = snapshot.val() || {};

      dispatch({
        type: COMMENTS_FETCH,
        payload: nestComments(comments),
      })
    })
  }
}

export function addComment(comment, parentId = -1) {
  return (dispatch, getState) => {
    const state = getState();
    const { currentUser } = state.users;
    const { activeCommentable } = state.commentable;
    const commentsRef = firebaseDB.ref(`/commentables/${activeCommentable}/comments`);

    const newComment = {
      user: currentUser,
      createdAt: database.ServerValue.TIMESTAMP,
      updatedAt: database.ServerValue.TIMESTAMP,
      edited: false,
      status: 'open',
      parentId,
      comment,
    };

    commentsRef.push(newComment);
  }
}

export function unsetCommentable(open) {
  if (!open) {
    return {
      type: COMMENTABLE_UNSET,
    }
  }
}
