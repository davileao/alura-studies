import React, {useState} from 'react';
import Form from './components/Form';
import List from "./components/List";
import './style.scss';
import {Stopwatch} from "./components/Stopwatch";
import {Itasks} from "./types/itasks";


function App() {
  const [tasks, setTasks] = useState<Itasks[]>([])

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
        <List  tasks={tasks}/>
        <Stopwatch />
    </div>
  );
}

export default App;
