import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    posts : []
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
  }

  render() {
    const { posts } = this.state
    const listPosts = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title center">{post.title}</span>
              <p className="card-body center">{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">Gak ada post</div>
    )
    return (
      <div className="container">
        <h1 className="center">home</h1>
        {listPosts}
      </div>
    )
  }
}

export default Home