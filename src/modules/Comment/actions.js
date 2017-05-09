import { firebaseDB } from '../../services/firebase'

export function removeComment(commentId) {
  return (dispatch, getState) => {
    const commentableId = getState().commentable.activeCommentable;
    const commentRef = firebaseDB.ref(`/commentables/${commentableId}/comments`);

    commentRef.child(commentId).remove();
  }
}
