import React, { Component } from 'react';
import { Jumbotron, Container, Button, Accordion, Card, Badge } from 'react-bootstrap';
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
        <Link to="/">
          <Jumbotron fluid key={post.id}>
              <Container className="posts">
                <Link to={`/posts/${post.id}`}><h1 as={Button} font-family="Cantarell" >{post.title}</h1></Link>
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
                        <p>
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

      <div class="megakul">
        { this.props.postsData.isLoading === true ? "LOADING" : posts }
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
