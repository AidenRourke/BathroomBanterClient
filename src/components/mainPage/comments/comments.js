import React, {Component} from 'react';

class Comments extends Component{
  render(){
    constructor(props){
      super(props);
      this.state ={comment: ''};
    }
    return(
      <div className="comment-box">
        <textarea rols="4" cols="50" form="commenting"
          value={this.state.comment};
          onComment={event => this.onCommenting(event.target.value)} />
        <form id="commenting">
          <input type="submit"/>
        </form>
      </div>
    );
  }
  onCommenting(comment){
    this.setState({ comment });
  }
}

export default Comments;
