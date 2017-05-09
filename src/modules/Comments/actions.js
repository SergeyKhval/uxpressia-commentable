import { database } from 'firebase';
import { firebaseDB } from '../../services/firebase'

export const COMMENTS_FETCH = 'COMMENTS_FETCH';
export const COMMENTABLE_UNSET = 'COMMENTABLE_UNSET';

export function fetchComments(commentableId) {
  const commentsRef = firebaseDB.ref(`/commentables/${commentableId}/comments`);

  return (dispatch) => {
    commentsRef.on('value', (snapshot) => {
      const comments = snapshot.val() || {};
      const payload = Object.keys(comments).map(id => {
        const { comment, createdAt, user } = comments[id];

        return {
          comment,
          createdAt,
          user,
          id,
        }
      });

      dispatch({
        type: COMMENTS_FETCH,
        payload,
      })
    })
  }
}

export function addComment(commentableId, comment) {
  const commentsRef = firebaseDB.ref(`/commentables/${commentableId}/comments`);

  return (dispatch, getState) => {
    const { currentUser } = getState().users;

    const newComment = {
      user: currentUser,
      createdAt: database.ServerValue.TIMESTAMP,
      updatedAt: database.ServerValue.TIMESTAMP,
      edited: false,
      status: 'open',
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
