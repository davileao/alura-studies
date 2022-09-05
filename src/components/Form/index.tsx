import React, {useState} from "react";
import Button from "../Button";
import style from './form.module.scss';
import {Itasks} from "../../types/itasks";
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>,
}



function Form ({setTasks}: Props) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');


    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTasks(oldTask =>
            [
                ...oldTask,
                {
                    id: uuidv4(),
                    task,
                    time,
                    completed: false,
                    selected: false,

                }
            ]

        )
        setTask("");
        setTime("00:00");

    }


        return (<form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new study
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="what do you want to study?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Clock
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    id="time"
                    min="00:00:00"
                    max="10:30:00"
                    required
                />
            </div>
            <Button>
                Add
            </Button>
        </form>
        )
}


// Em forma de classe: (caindo em desuso no react preferem-se funções)
// class Form extends React.Component<{
//     setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>
// }> {
//
//     state = {
//         task: '',
//         time: '00:00:00',
//     }
//     private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const {name, value} = e.target;
//         this.setState({
//             [name]: value,
//         })
//     }
//
//     addTask(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//
//         this.props.setTasks(oldTasks =>
//             [
//                 ...oldTasks,
//                 {
//                     ...this.state,
//                     selected: false,
//                     completed: false,
//                     id: uuidv4(),
//                 }
//
//             ]);
//
//         this.setState({
//             task: '',
//             time: '00:00:00',
//         })
//
//     }
//
//     render() {
//         return (
//             <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
//                 <div className={style.inputContainer}>
//                     <label htmlFor="task">
//                         Add a new study
//                     </label>
//                     <input
//                         type="text"
//                         name="task"
//                         id="task"
//                         value={this.state.task}
//                         onChange={this.handleChange}
//                         placeholder="what do you want to study?"
//                         required
//                     />
//                 </div>
//                 <div className={style.inputContainer}>
//                     <label htmlFor="time">
//                         Clock
//                     </label>
//                     <input
//                         type="time"
//                         step="1"
//                         name="time"
//                         value={this.state.time}
//                         onChange={this.handleChange}
//                         id="time"
//                         min="00:00:00"
//                         max="10:30:00"
//                         required
//                     />
//                 </div>
//                 <Button>
//                     Add
//                 </Button>
//             </form>
//         )
//     }
//
// }

export default Form;