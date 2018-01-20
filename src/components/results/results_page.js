import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { viewWashroom } from '../../actions/index';

//This container will show a list of the washrooms and be clickable
class SearchResults extends Component {

  renderResults(washroom) {
    return (
      <tr
        className="Washroom"
        key={washroom}
        onClick={() => this.props.viewWashroom(washroom, () => {
          this.props.history.push(`/results/${washroom}`);
        })} >
        <td>{washroom}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <Link to="/">Back to Search</Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Washrooms</th>
            </tr>
          </thead>
          <tbody>
            {this.props.washrooms.map(this.renderResults.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps( { washrooms }) {
  return { washrooms };
}

export default connect(mapStateToProps, { viewWashroom })(SearchResults);
