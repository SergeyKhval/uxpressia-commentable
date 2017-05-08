import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div>{comment}</div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
};

export default Comment;
