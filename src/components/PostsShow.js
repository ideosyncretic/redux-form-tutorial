import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost } from '../actions'

class PostsShow extends Component {
  componentDidMount () {
    // if post is not already loaded (by index)
    if (!this.props.post) {
      // React Router provides params object, of all the different wildcards used in the route url
      const { id } = this.props.match.params
      this.props.fetchPost(id) // we need to inject it from state to our component using mapStateToProps
    }
  }
  render () {
    const { post } = this.props

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to='/' className='btn btn-primary'>Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

// first arg is application state, ownProps is used to refer to PostsShow component's props
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] } // intermediate lookup step to extract just a single post
}

// connect args: mapStateToProps and action
export default connect(mapStateToProps, { fetchPost })(PostsShow)
