import './WantToRead.scss';
import * as React from 'react';
import {View} from 'react-native';
import BookInfo from './BookInfo';
import { flexStyles } from '../util/stylesheets';
import ProfilePicColumnContainer from './ProfilePicColumnContainer';

class WantToRead extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {active: false};
      }

    // changeColor(){
    //     this.setState({active: !this.state.active})
    // }

    render() {
        let props = this.props;
        
        return (
           <ProfilePicColumnContainer>
            <View style={[ flexStyles.column]}>
                <View style={[ flexStyles.row, flexStyles.flexfill, {justifyContent: 'space-between', alignItems: 'center'} ]}>
                        <div style={{display: "inline-flex"}}>
                            <div className='update-item-name'>{ props.name }&nbsp;</div>WANTS TO READ
                        </div>
                        <div className='timestamp'>10 min. ago</div>
                </View>
                <BookInfo title="Pride and Prejudice" authorName="Jane Austen" background/>
            </View>
                
           </ProfilePicColumnContainer>
        );
    }
};

export default WantToRead;