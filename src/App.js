import React from 'react';
import Layout from './components/Layout/Layout';
import ToDoListBuilder from './containers/ToDoListBuilder/ToDoListBuilder';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <ToDoListBuilder/>
      </Layout>
    </div>
  );
}

export default App;
