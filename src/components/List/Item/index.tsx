import style from "./Item.module.scss";
import React from "react";
import {Itasks} from "../../../types/itasks";

interface Iprops extends Itasks {
    selectTask: (selectedTask: Itasks) => void
}

export default function Item(
    {
    task,
    time,
    selected,
    completed,
    id,
    selectTask
    }: Iprops) {


    console.log(task,
        time,
        selected,
        completed,
        id);

    return (

        <li
            className={`${style.item} ${selected ? style.itemSelected: ""} 
            ${completed ? style.itemCompleted: ""}`}
            onClick={() => !completed && selectTask({
                task,
                time,
                selected,
                completed,
                id
            })}>

            <h3> {task}</h3>
            <span>{time}</span>
            {completed && <span className={style.finished} aria-label="task completed"></span>}

        </li>
    )
}