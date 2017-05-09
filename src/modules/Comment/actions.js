import { firebaseDB } from '../../services/firebase'

export function removeComment(commentId) {
  return (dispatch, getState) => {
    const { activeCommentable } = getState().commentable;
    const commentRef = firebaseDB.ref(`/commentables/${activeCommentable}/comments`);

    commentRef.child(commentId).remove();
  }
}

export { addComment } from '../Comments/actions';
