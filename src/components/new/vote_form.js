import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FIELDS = {
  rating: {
    label: 'Rating'
  },
  clean: {
    label: 'Cleanliness'
  },
  paper: {
    label: 'Toilet Paper'
  },
  traffic: {
    label: 'Traffic'
  }
};

class VoteForm extends Component {

  onSubmit(values) {
    const { id } = this.props.match.params;
    axios.post(`http://localhost:8080/sendRatings?id=${id}`, {
      "rating": values.rating,
      "clean" : values.clean,
      "paper" : values.paper,
      "traffic" : values.traffic
    }).then(this.props.history.push(`/results`))
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
        <h2>Vote on {this.props.match.params.id}!</h2>
        <Field name={"rating"} label="Rating" component={this.renderMenu.bind(this)} />
        <Field name="clean" label="Cleanliness" component={this.renderMenu.bind(this)} />
        <Field name="paper" label="Toilet Paper" component={this.renderMenu.bind(this)} />
        <Field name="traffic" label="Traffic" component={this.renderMenu.bind(this)} />
        <div>
          <button style={{marginRight: "1vh"}} className="btn btn-primary" type="submit">Submit</button>
          <Link className="btn btn-danger" to={`/view/${this.props.match.params.id}`}>Return</Link>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors={};
  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = 'Please enter a rating';
    }
  })

  return errors;
}

export default reduxForm({
  form: "new",
  fields: _.keys(FIELDS),
  validate
})(VoteForm);
