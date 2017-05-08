import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCommentable as setCommentableAction } from './actions';

function Commentable({ objectId, setCommentable, children }) {
  return (
    <div onClick={() => setCommentable(objectId)}>{children}</div>
  );
}

Commentable.propTypes = {
  objectId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state, { objectId }) {
  return { objectId }
}

function mapDispatchToProps(dispatch) {
  return {
    setCommentable: commentableId => dispatch(setCommentableAction(commentableId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Commentable);
