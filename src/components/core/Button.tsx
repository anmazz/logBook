import * as React from 'react';
import './Button.scss';
import Icon from '@mui/material/Icon';

interface ButtonProps {
    label: string,
    iconLeft?: string,
    iconRight?: string,
    className?: string,
    noDropShadow?: any
}

interface ButtonState {
    active: boolean
}

class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {active: false};
      }

    displayStatus(){
        this.setState({active: !this.state.active})
    }

    render() {
        let props = this.props;
        let btn_class = this.state.active ? "activeButton" : "";
        btn_class = btn_class + (props.noDropShadow ? "" : "dropShadow");
        
        return (
            <div className={'button d-flex justify-content-center align-items-center ' + (btn_class) + " " + (props.className ?? "") }
                onClick={this.displayStatus.bind(this)}>
                { props.iconLeft && <Icon>{props.iconLeft}</Icon> }
                <input type="button"  value={props.label}/>
                { props.iconRight && <Icon>{props.iconRight}</Icon> }
            </div>
        );
    }
};

export default Button;