import { textBoxStyles } from '../util/stylesheets';

const TextField = (props) => {
    return (
        <div className="d-flex">
            <textarea 
                className={props.className} 
                placeholder={props.placeholder} 
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = props.placeholder} 
                type="textarea"
                style={textBoxStyles.textArea}/>
        </div>
    );
}

export default TextField;