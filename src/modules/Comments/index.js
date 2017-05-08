import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import Comment from '../Comment';
import {
  fetchComments as fetchCommentsAction,
  addComment as addCommentAction,
  unsetCommentable as unsetCommentableAction,
} from './actions';

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

  render() {
    const { commentableId, comments, addComment, unsetCommentable } = this.props;

    return (
      <Drawer
        docked={false}
        open={!!commentableId}
        openSecondary
        width="50%"
        onRequestChange={unsetCommentable}
      >
        <div className="comments">
          {comments.map(c => <Comment comment={c.comment} key={c.id}/>)}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          addComment(commentableId, this.state.comment);
        }}>
          <TextField id="root-comment" onChange={::this.handleInputChange}/>
        </form>
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
