import * as React from 'react';
import { textBoxStyles } from '../util/stylesheets';

const TextField = (props: { className: string; placeholder: string; }) => {
    return (
        <div className="d-flex">
            <textarea 
                className={props.className} 
                placeholder={props.placeholder} 
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = props.placeholder} 
                style={textBoxStyles.textArea}/>
        </div>
    );
}

export default TextField;