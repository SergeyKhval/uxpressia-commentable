import { combineReducers } from 'redux';
import commentable from '../modules/Commentable/reducer';
import comments from '../modules/Comments/reducer';

export default combineReducers({ commentable, comments });
