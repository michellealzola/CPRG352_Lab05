import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {      
      albumId: '',
      id: '',
      title: ''      
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMessage: 'Error retrieving data' })
      })
  }
  render() {
    const { title, albumId } = this.state
    return (
      <div className='container'>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Enter Album ID</label>
            <input type="text" name="albumId" value={albumId} onChange={this.changeHandler}></input>
          </div>
          <div>
            <label>Enter title</label>
            <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
          </div>


          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}

export default PostForm;