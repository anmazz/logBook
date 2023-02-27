import './Button.scss';
import Icon from '@mui/material/Icon';
import * as React from 'react';

interface ButtonProps {
    label: string,
    iconLeft?: string,
    iconRight?: string,
    className?: string
}

interface ButtonState {
    active: boolean
}

class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {active: false};
      }

    changeColor(){
        this.setState({active: !this.state.active})
    }

    render() {
        let props = this.props;
        let btn_class = this.state.active ? "activeButton" : "";
        
        return (
            <div className={'button d-flex justify-content-center align-items-center ' + (btn_class) + " " + (props.className ?? "") }
                onClick={this.changeColor.bind(this)}>
                { props.iconLeft && <Icon>{props.iconLeft}</Icon> }
                <input type="button"  value={props.label}/>
                { props.iconRight && <Icon>{props.iconRight}</Icon> }
            </div>
        );
    }
};

export default Button;