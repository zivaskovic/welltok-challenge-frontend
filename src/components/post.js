import React, { Component } from 'react';
import {Button, Badge } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/posts.js';
import { Link} from "react-router-dom";


class Post extends Component {
  componentDidMount() {
    this.props.loadAllPosts();
   }
  state = { post : []}


  render () {

    let postRender  = ""
    if (this.props.postsData.isLoading === false) {
      let post = search(this.props.match.params.id, this.props.postsData.posts);
      let tags = (post.tags || []).map((tag, i) => (
        <Badge variant="primary" key={`${tag}-${i}`}>
          {tag}
        </Badge>
      ))
       postRender = (
        <div>
        <p>
            <div className="current-post">
              <h1 className="post-title">{post.title}</h1>
              <p className="post-description">
                {post.description}
              </p> 
              <p>
              Author: {post.author}
              </p>
              <p>Tags:
              {tags}
              </p>
              <Link to={`/`}>
              <Button className="post-close" onClick={this.closePosts} variant="danger" size="lg">
                Close post
              </Button>
              </Link>
            </div>
        </p>
      </div>
       )
    }

    function search(id, posts){
      for (var i=0; i < posts.length; i++) {
          if (posts[i].id == id) {
              return posts[i];
          }
      }
    }
    return  (

      <div class="megakul">
        { this.props.postsData.isLoading === true ? "LOADING" : postRender }
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return  {
    postsData: state.posts
  }
};

export default connect (mapStateToProps, actionCreators)(Post);