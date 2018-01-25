import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

class EnsureLoggedIn extends Component {

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return this.props.children;
    }
    return <Redirect to="/login/Login" />;
  }
}

function mapStateToProps({ isLoggedIn }) {
  return { isLoggedIn }
}

export default connect(mapStateToProps)(EnsureLoggedIn);
