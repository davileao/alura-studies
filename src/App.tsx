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


  function endTask (){
    if (selected) {
      setSelected(undefined);
      setTasks (oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
      }
  }

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks}/>
        <List
            tasks={tasks}
            selectTask={selectTask}
        />
        <Stopwatch
            selected={selected}
            endTask={endTask}
        />
    </div>
  );
}

export default App;
