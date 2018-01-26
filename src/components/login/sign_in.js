import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { login } from '../../actions/index';

class SignIn extends Component {

  renderField({ input, label, type, meta: { touched, error } }) {
    return (
      <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <input
          className="form-control"
          {...input}
          placeholder={label}
          type={type} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderGender({ input, label, type, meta: { touched, error } }) {
    return (
      <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <select className="form-control" {...input}>
          <option></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    //Submit validation
    const { username, password, gender } = values;

    return axios.post(`http://localhost:8080/login`, {
      username,
      password,
      gender
    })
    .then((response) => {
      if (!response.data.success) {
        throw new SubmissionError({ _error: "Login Failed"});
      }
      else {
        this.props.login(values.username, values.password, values.gender);
        this.props.history.push('/');
      }
    })
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <h1>Welcome To Bathroom Banter!</h1>
        <h6>Please sign in to continue:</h6>
        <Field
          label="Username"
          type="text"
          name="username"
          component={this.renderField} />
        <Field
          label="Password"
          type="password"
          name="password"
          component={this.renderField} />
        <Field name="gender" component={this.renderGender} label="Washroom gender" />
        <div>
          <Link className="btn btn-default" to="/login/SignUp">Sign up</Link>
          <button className="btn btn-primary" type="submit">Sign In</button>
        </div>
        <div className="text-help">
          {error ? error : ''}
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.username) errors.username = "Please select a username";
  if(!values.password) errors.password = "Please select a password";
  if(!values.gender) errors.gender = "Please select an option";

  return errors;
}

export default reduxForm({
  validate,
  form: "login"
})(
  connect(null, { login })(SignIn)
);
