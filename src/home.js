import React, { Component, Fragment } from "react";
import "./styleSheet.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addUser = this.addUser.bind(this);
  }
  componentDidMount() {
    axios.get("https://api.myjson.com/bins/141hpq").then(response => {
      this.setState({ posts: response.data });
    });
  }

  addUser() {
    this.props.history.push("/input",{ detail: 'something'});
  }
  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <div>
          <p>
            <b>List of Users</b>
          </p>
          {posts.length
            ? posts.map(post => <div key={post.id}>{post.title}</div>)
            : null}
        </div>
        <div>
          <button onClick={this.addUser}>Add User</button>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(home);
