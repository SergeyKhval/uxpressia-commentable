import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { removeComment as removeCommentAction } from './actions';

function Comment({ comment, commentId, removeComment }) {
  return (
    <div className="comment">
      <div className="comment__header">
        <FlatButton label="Edit"/>
        <FlatButton label="Delete" onClick={() => removeComment(commentId)}/>

      </div>
      <div className="comment__body">{comment}</div>
      <div className="comment__footer">
        3 min ago
        <FlatButton label="Reply"/>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  removeComment: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { comment, commentId } = ownProps;

  return { comment, commentId };
}

function mapDispatchToProps(dispatch) {
  return {
    removeComment: commentId => dispatch(removeCommentAction(commentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
