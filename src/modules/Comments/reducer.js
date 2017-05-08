import { COMMENTS_FETCH } from './actions';

const initialState = {
  comments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case (COMMENTS_FETCH):
      return { ...state, comments: payload };
    default:
      return state;
  }
}
