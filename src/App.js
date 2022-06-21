import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import classes from './App.module.css';
import Mytasks from './components/Mytasks';

function App() {
  return(
    <div className={classes.App}>
      <Navigation />
      <Header />
      <TaskForm />
      <Mytasks/>
    </div>
  );
}
export default App;
