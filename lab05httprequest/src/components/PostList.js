import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: '',
         id: ''
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
    
    
    deleteRow= (id, e) => {   
      e.preventDefault();   
      
      axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`) 
        .then(res => console.log('Deleted', res))
        .catch(err => console.log(err))  

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
        <div key={(post.id)}>
        <form >    
        <table>          
          <tr >
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td><img src={post.thumbnailUrl} alt="thumbnail"></img></td>
            <td><button value={post.id} onClick={(e) => this.deleteRow(post.id, e)}>delete</button></td>
          </tr>
        </table> 
        </form> 
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