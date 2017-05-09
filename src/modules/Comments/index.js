import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Comment from '../Comment';
import CommentInput from '../CommentInput';
import {
  fetchComments as fetchCommentsAction,
  addComment as addCommentAction,
  unsetCommentable as unsetCommentableAction,
} from './actions';
import './style.scss';

class Comments extends Component {
  static propTypes = {
    commentableId: PropTypes.string,
    fetchComments: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
  };

  static defaultProps = {
    commentableId: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  componentWillReceiveProps({ commentableId }) {
    if (commentableId && (this.props.commentableId !== commentableId)) {
      this.props.fetchComments(commentableId)
    }
  }

  handleInputChange({ target }) {
    this.setState({
      comment: target.value,
    })
  }

  handleFormSubmit(e) {
    const { addComment } = this.props;

    e.preventDefault();
    addComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    const { commentableId, comments, unsetCommentable } = this.props;

    return (
      <Drawer
        docked={false}
        open={!!commentableId}
        openSecondary
        width="50%"
        onRequestChange={unsetCommentable}
      >
        <div className="comments">
          <div className="comments__header">
            <h2>Object {commentableId}</h2>
            <IconButton iconClassName="material-icons" onTouchTap={() => unsetCommentable()}>close</IconButton>
          </div>

          <div className="comments__body">
            {comments.map(c => (
              <Comment
                comment={c.comment}
                commentId={c.id}
                createdAt={c.createdAt}
                user={c.user}
                edited={c.edited}
                key={c.id}
                subComments={c.subComments}
              />
            ))}
          </div>

          <div className="comments__footer">
            <CommentInput
              handleSubmit={::this.handleFormSubmit}
              handleChange={::this.handleInputChange}
              value={this.state.comment}
            />
          </div>
        </div>
      </Drawer>
    )
      ;
  }
}

function mapStateToProps({ commentable, comments }) {
  return {
    commentableId: commentable.activeCommentable,
    comments: comments.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: commentableId => dispatch(fetchCommentsAction(commentableId)),
    addComment: (commentableId, comment) => dispatch(addCommentAction(commentableId, comment)),
    unsetCommentable: open => dispatch(unsetCommentableAction(open)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
