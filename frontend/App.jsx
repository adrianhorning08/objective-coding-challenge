import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/main';

const App = () => (
    <div id="page">
      <Route exact path ="/" component={Main}/>
    </div>
);

export default App;
