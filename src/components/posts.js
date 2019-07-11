import React, { Component } from 'react';
import { Jumbotron, Container, Button, Accordion, Card, Spinner } from 'react-bootstrap';
import './posts.css';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/posts.js';
import {Link} from "react-router-dom";

class Posts extends Component {

 componentDidMount() {
   this.props.loadAllPosts();
  }

  shortDescription (description) {
    return description.split(" ")
      .slice(0, 30)
      .join(" ");
  }

  render() {
    let posts  = ""
    if (this.props.postsData.isLoading === false) {
       posts = (this.props.postsData.posts).map(post => (
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Jumbotron fluid key={post.id}>
              <Container className="posts">
                <Link to={`/posts/${post.id}`}><h1 as={Button} style={{ textDecoration: 'none' }} font-family="Cantarell" >{post.title}</h1></Link>
                <p>
                <Accordion defaultActiveKey="0">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link"  eventKey="1">
                          Read short description...
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <p className="posts-description">
                        {`${this.shortDescription(post.description)}...`}
                        </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>

                </p>
              </Container>
            </Jumbotron>
          </Link>
       ))
    }

    return (

      <div className="post-container">
        <h1 className="all-posts">ALL POSTS</h1>
        { this.props.postsData.isLoading === true ? <Spinner animation="border" variant="primary" className="spinner"/> : posts }
      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return  {
    postsData: state.posts
  }
};

export default connect (mapStateToProps, actionCreators)(Posts);
