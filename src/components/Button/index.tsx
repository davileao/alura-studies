import React from "react";
import style from "./Button.module.scss";

type Props ={//coloquei o nome de Props mas poderia ser qualquer nome
  children: string,
  type?: "button" | "submit" | "reset" | undefined
}

class Button extends React.Component<Props> {
  render(): React.ReactNode {
    return <button type={this.props.type} className={style.button}>{this.props.children}</button>;
  }
}

export default Button;