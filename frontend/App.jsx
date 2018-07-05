import React from 'react';
import { Route } from 'react-router-dom';
import Table from './components/table';

const App = () => (
    <div id="page">
      <Route exact path ="/" component={Table}/>
    </div>
);

export default App;
