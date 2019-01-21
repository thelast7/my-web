import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount(){
    let id = this.props.match.params.post_id
    axios.get('http://jsonplaceholder.typicode.com/posts/' + id)
    this.setState({
      id: id
    })
  }

  render() {
    return (
      <div className="container">
        <h4>{this.state.post}</h4>
      </div>
    )
  }
}

export default Post