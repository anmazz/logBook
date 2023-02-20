import './Button.scss';
import Icon from '@mui/material/Icon';
import * as React from 'react';

class Button extends React.Component {
    constructor(props) {
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