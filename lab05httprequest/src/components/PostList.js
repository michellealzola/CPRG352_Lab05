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
        <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Delete</th>
          </tr>
          </table>

        </div>
      }
      {
        posts.length?
        posts.map(post => 
        <div>
        <table>          
          <tr key={(post.id)}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td><img src={post.thumbnailUrl} alt="thumbnail"></img></td>
            <td><button>delete</button></td>
          </tr>
        </table>          
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