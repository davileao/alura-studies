import React from "react";
import style from './list.module.scss';
import Item from "./Item";
import {Itasks} from "../../types/itasks";


interface Iprops {
    tasks: Itasks[],
    selectTask: (selectedTask: Itasks) => void
}

function List({tasks, selectTask}: Iprops) {
    return (
        <aside className={style.taskList}>
            <h2 > Studies of the day </h2>
            <ul> {tasks.map((item) => (
                <Item
                    selectTask={selectTask}
                    key={item.id}
                    task={item.task}
                    time={item.time}
                    selected={item.selected}
                    completed={item.completed}
                    id={item.id}
                />
            ))}
            </ul>
        </aside>
    );
}

export default List;