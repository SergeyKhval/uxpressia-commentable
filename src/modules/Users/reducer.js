import { USER_SET } from './actions';

const initialState = {
  currentUser: 'Bruce Wayne',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case (USER_SET):
      return { ...state, currentUser: payload };
    default:
      return state;
  }
}
