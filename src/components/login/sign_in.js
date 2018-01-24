import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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
    this.props.login(values.username, values.password, values.gender);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit } = this.props;
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
          <button className="btn btn-primary" type="submit">Submit</button>
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
