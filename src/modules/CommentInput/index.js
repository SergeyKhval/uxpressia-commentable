import React from 'react';
import PropTypes from 'prop-types';
import { Mention, MentionsInput } from 'react-mentions';
import FlatButton from 'material-ui/FlatButton';

const users = [
  { id: 1, display: 'Bruce Wayne' },
  { id: 2, display: 'Peter Parker' },
  { id: 3, display: 'Barry Allen' },
];

function CommentInput({ handleSubmit, handleChange, value }) {
  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="comment-form__input">
        <MentionsInput value={value} onChange={handleChange}>
          <Mention trigger="@" data={users}/>
        </MentionsInput>
      </div>
      <div className="comment-form__button">
        <FlatButton type="submit" label="Submit"/>
      </div>
    </form>
  );
}

CommentInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CommentInput;
