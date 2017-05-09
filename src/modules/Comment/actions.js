import { firebaseDB } from '../../services/firebase';
import { database } from 'firebase';

export function removeComment(commentId) {
  return (dispatch, getState) => {
    const { activeCommentable } = getState().commentable;
    const commentRef = firebaseDB.ref(`/commentables/${activeCommentable}/comments`);

    commentRef.child(commentId).remove();
  }
}

export function editComment(commentId, comment) {
  return (dispatch, getState) => {
    const { activeCommentable } = getState().commentable;
    const commentRef = firebaseDB.ref(`/commentables/${activeCommentable}/comments`);

    const updates = {
      edited: true,
      updatedAt: database.ServerValue.TIMESTAMP,
      comment,
    };

    commentRef.child(commentId).update(updates);
  }
}

export { addComment } from '../Comments/actions';
