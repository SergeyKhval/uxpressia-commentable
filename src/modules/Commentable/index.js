import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { setCommentable as setCommentableAction } from './actions';
import './style.scss';

function Commentable({ objectId, setCommentable, children }) {
  return (
    <div className="commentable">
      <div className="commentable__overlay">
        <FlatButton onTouchTap={() => setCommentable(objectId)} label="Comments"/>
      </div>
      {children}
    </div>
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
