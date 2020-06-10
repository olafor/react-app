import React from 'react';
import './App.css';
import GetList from './components/task-list'

const testTasks = [{name: "steve"}, {name: "larry"}];

function App() {
  return (
    <GetList tasks={testTasks} />
  );
}

export default App;
