import { combineReducers } from 'redux';
import commentable from '../modules/Commentable/reducer';
import comments from '../modules/Comments/reducer';
import users from '../modules/Users/reducer';

export default combineReducers({ commentable, comments, users });
