import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Timestamp from 'react-timestamp';
import ReactMarkdown from 'react-markdown';
import CommentInput from '../CommentInput';
import { removeComment as removeCommentAction, addComment as addCommentAction } from './actions';
import './style.scss';

class Comment extends Component {
  state = {
    reply: '',
    replyVisible: false,
  };

  handleReplyChange({ target }) {
    this.setState({ reply: target.value });
  }

  handleReplySubmit(e) {
    const { addComment, commentId } = this.props;

    e.preventDefault();
    addComment(this.state.reply, commentId);
    this.setState({ reply: '', replyVisible: false });
  }

  handleReplyClick() {
    this.setState({ replyVisible: !this.state.replyVisible });
  }

  render() {
    const { comment, commentId, createdAt, user, currentUser, removeComment, subComments } = this.props;
    const nestedComments = (subComments || []).map(c => (
        <Comment
          {...this.props}
          comment={c.comment}
          commentId={c.id}
          createdAt={c.createdAt}
          user={c.user}
          key={c.id}
          subComments={c.subComments}
        />
      )
    );

    return (
      <div className="comment">
        <div className="comment__header comment-header">
          <div className="comment-header__user">
            <FontIcon className="material-icons">face</FontIcon>
            <span className="comment-user">{user} {currentUser === user ? ' (You)' : null} said:</span>
          </div>

          {currentUser === user ? <div className="comment-header__actions">
            <FlatButton label="Edit" primary/>
            <FlatButton label="Delete" onClick={() => removeComment(commentId)} secondary/>
          </div> : null}
        </div>

        <div className="comment__body">
          <ReactMarkdown source={comment} className="comment-text"/>
        </div>

        <div className="comment__footer comment-footer">
          <div className="comment-footer__time">
            <Timestamp time={Math.floor(createdAt / 1000)} format="ago"/>
          </div>
          <div className="comment-footer__actions">
            <FlatButton
              label="Reply"
              icon={<FontIcon className="material-icons">reply</FontIcon>}
              onClick={::this.handleReplyClick}
            />
          </div>
        </div>

        <div className="comment__reply" style={{ display: this.state.replyVisible ? 'block' : 'none' }}>
          <CommentInput
            handleSubmit={::this.handleReplySubmit}
            handleChange={::this.handleReplyChange}
            value={this.state.reply}
          />
        </div>

        <div className="nested-comments">
          {nestedComments}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  currentUser: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
};

function mapStateToProps({ users }, ownProps) {
  const { currentUser } = users;
  const { comment, commentId, createdAt, user } = ownProps;

  return { comment, commentId, createdAt, user, currentUser };
}

function mapDispatchToProps(dispatch) {
  return {
    removeComment: commentId => dispatch(removeCommentAction(commentId)),
    addComment: (comment, parentId) => dispatch(addCommentAction(comment, parentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
