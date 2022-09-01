import style from "./Stopwatch.module.scss";
import Button from "../Button";
import Clock from "./Clock";

export function Stopwatch() {
    return (
    <div className={style.stopwatch}>
        <p className={style.title}>Choose a card and start the stopwatch</p>
        <div className={style.wrapper}>
        <Clock />
        </div>
        <Button>
            Start
        </Button>
    </div>

    )
}