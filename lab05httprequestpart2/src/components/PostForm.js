import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: '',
         title:'',
         thumbnailUrl: ''
      }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos')
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
    const{id, title, thumbnailUrl} = this.state
    return (
      <div>
        <form onSumit={this.submitHandler}>
            <div>
                <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type="text" name="thumbnailUrl" value={thumbnailUrl} onChange={this.changeHandler}></input>
            </div>

            <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}

export default PostForm