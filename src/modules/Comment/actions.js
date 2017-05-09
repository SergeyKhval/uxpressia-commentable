import { firebaseDB } from '../../services/firebase';
import { database } from 'firebase';

export function removeComment(commentId) {
  return (dispatch, getState) => {
    const { activeCommentable } = getState().commentable;
    const commentRef = firebaseDB.ref(`/commentables/${activeCommentable}/comments`);

    commentRef.child(commentId).remove();
  }
}

export function editComment(commentId, updates) {
  return (dispatch, getState) => {
    const { activeCommentable } = getState().commentable;
    const commentRef = firebaseDB.ref(`/commentables/${activeCommentable}/comments`);

    updates.updatedAt = database.ServerValue.TIMESTAMP;

    commentRef.child(commentId).update(updates);
  }
}

export { addComment } from '../Comments/actions';
