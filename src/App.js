import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Posts from './components/posts'
import Post from './components/post'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Posts} />
      <Route path="/posts/:id" component={Post} />
    </BrowserRouter>
  );
}

export default App;
