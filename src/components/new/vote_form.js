import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import axios from 'axios'

//Class
class VoteForm extends Component {

  onSubmit(values) {
    const { id } = this.props.match.params;
    const request = axios.post(`http://localhost:8080/sendRatings?id=${id}`, {
      "rating": values.rating,
      "clean" : values.clean,
      "paper" : values.paper,
      "traffic" : values.traffic
    }).then(this.props.history.push(`/results/${id}`))
  }

  renderMenu(field) {
    const { input, label } = field;
    return (
      <div className={`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <select className="form-control" { ...input }>
          <option></option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <h2>Form for {this.props.match.params.id}</h2>
        <Field name="rating" label="Rating" component={this.renderMenu.bind(this)} />
        <Field name="clean" label="Cleanliness" component={this.renderMenu.bind(this)} />
        <Field name="paper" label="Toilet Paper" component={this.renderMenu.bind(this)} />
        <Field name="traffic" label="Traffic" component={this.renderMenu.bind(this)} />
        <div>
          <button style={{marginRight: "1vh"}} className="btn btn-primary" type="submit">Submit</button>
          <Link className="btn btn-danger" to={`/results/${this.props.match.params.id}`}>Return</Link>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors={};

  if (!values.rating) {
    errors.rating="Please choose a rating";
  }
  if (!values.clean) {
    errors.clean="Please choose a rating";
  }
  if (!values.paper) {
    errors.paper="Please choose a rating";
  }
  if (!values.traffic) {
    errors.traffic="Please choose a rating";
  }
  return errors;
}

export default reduxForm({
  form: "new",
  validate
})(VoteForm);
