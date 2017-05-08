import { firebaseDB } from '../../services/firebase'

export const COMMENTS_FETCH = 'COMMENTS_FETCH';
export const COMMENTABLE_UNSET = 'COMMENTABLE_UNSET';

export function fetchComments(commentableId) {
  const commentsRef = firebaseDB.ref(`/commentables/${commentableId}/comments`);

  return (dispatch) => {
    commentsRef.on('value', (snapshot) => {
      const comments = snapshot.val() || {};
      const payload = Object.keys(comments).map(key => ({ id: key, comment: comments[key].comment }));

      dispatch({
        type: COMMENTS_FETCH,
        payload,
      })
    })
  }
}

export function addComment(commentableId, comment) {
  const commentsRef = firebaseDB.ref(`/commentables/${commentableId}/comments`);

  commentsRef.push({ comment });
}

export function unsetCommentable(open) {
  if (!open) {
    return {
      type: COMMENTABLE_UNSET,
    }
  }
}
