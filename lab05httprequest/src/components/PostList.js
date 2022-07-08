import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMessage: 'Error retrieving data'})
            })
    }
  render() {
    const{posts, errorMessage} = this.state
    return (
      <div>
      List of Albums
      {
        posts.length?
        posts.map(post => 
        <div key={(post.id)}>
        {post.id} {post.title} {post.thumbnailUrl}
        </div>):
        null
      }
      {
        <div>{errorMessage}</div>
      }
      </div>
    )
  }
}

export default PostList