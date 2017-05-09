import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { setUser as setUserAction } from './actions';
import './style.scss';

function Users({ currentUser, setUser }) {
  return (
    <div className="users">
      <p className="users__title">Select current user</p>
      <div className="users__input">
        <SelectField value={currentUser} onChange={setUser}>
          <MenuItem value="Bruce Wayne" primaryText="Bruce Wayne"/>
          <MenuItem value="Peter Parker" primaryText="Peter Parker"/>
          <MenuItem value="Barry Allen" primaryText="Barry Allen"/>
        </SelectField>
      </div>
    </div>
  );
}

Users.propTypes = {
  currentUser: PropTypes.string.isRequired,
  setUser: PropTypes.func.isRequired,
};

function mapStateToProps({ users }) {
  return {
    currentUser: users.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (e, index, user) => dispatch(setUserAction(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
