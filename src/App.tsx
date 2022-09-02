import React, {useState} from 'react';
import Form from './components/Form';
import List from "./components/List";
import './style.scss';
import {Stopwatch} from "./components/Stopwatch";
import {Itasks} from "./types/itasks";




function App() {
  const [tasks, setTasks] = useState<Itasks[]>([])
  const [selected, setSelected] = useState<Itasks>();

  function selectTask (selectedTask: Itasks) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
        ...task,
        selected: task.id === selectedTask.id
    })));

  }

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
        <List
            tasks={tasks}
            selectTask={selectTask}
        />
        <Stopwatch />
    </div>
  );
}

export default App;
