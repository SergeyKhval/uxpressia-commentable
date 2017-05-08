import { SET_COMMENTABLE } from './actions';
import { COMMENTABLE_UNSET } from '../Comments/actions'

const initialState = {
  activeCommentable: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case (SET_COMMENTABLE):
      return { ...state, activeCommentable: payload };
    case(COMMENTABLE_UNSET):
      return { ...state, activeCommentable: '' };
    default:
      return state;
  }
}
