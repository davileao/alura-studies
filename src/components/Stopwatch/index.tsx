import style from "./Stopwatch.module.scss";
import Button from "../Button";
import Clock from "./Clock";
import {timeToSeconds} from "../../common/utils/time";
import {Itasks} from "../../types/itasks";
import {useEffect, useState} from "react";

interface Iprops {
    selected?: Itasks;
    endTask: () => void;
    // selected: Itasks | undefined; (pode ser assim também)
}

export function Stopwatch({ selected, endTask }: Iprops) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        setTime(timeToSeconds(selected?.time || '00:00:00'));
    },[selected]);

    function countDown(counter: number =0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter -1);
                return countDown(counter -1);
            }
            endTask();
        }, 1000);
        }


    return (
    <div className={style.stopwatch}>
        <p className={style.title}>Choose a card and start the stopwatch</p>
        Time: {time}
        <div className={style.wrapper}>
        <Clock time={time} />
        </div>
        <Button onClick={() => countDown(time)}>
            Start!
        </Button>
    </div>

    )
}