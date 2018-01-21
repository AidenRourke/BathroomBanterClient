import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { viewWashroom } from '../../actions/index';

class ViewWashroom extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.viewWashroom(id, () => console.log("No Callback"));
  }

  render() {
    if (this.props.selectedWashroom) {
      const { id, male, average_rating, cleanliness, size, toilet_paper, traffic } = this.props.selectedWashroom.data;
      return (
        <div>
          <Link to="/results">Back to Results</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Information for {id}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Average Rating /5</td>
                <td>{average_rating}</td>
              </tr>
              <tr>
                <td>Male or Female</td>
                <td>{male === 1 ? "Male" : "Female"}</td>
              </tr>
              <tr>
                <td>Cleanliness /5</td>
                <td>{cleanliness}</td>
              </tr>
              <tr>
                <td>Size /5</td>
                <td>{size}</td>
              </tr>
              <tr>
                <td>Toilet paper /5</td>
                <td>{toilet_paper}</td>
              </tr>
              <tr>
                <td>Traffic /5</td>
                <td>{traffic}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  return <div>Loading...</div>
  }
}

function mapStateToProps({ selectedWashroom }) {
  return { selectedWashroom };
}

export default connect(mapStateToProps, { viewWashroom })(ViewWashroom);
