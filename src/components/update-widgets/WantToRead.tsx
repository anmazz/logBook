import * as React from 'react';
import './WantToRead.scss';
import BookInfo from '../core/BookInfo';
import ProfilePicColumnContainer from '../core/ProfilePicColumnContainer';
import { View } from 'react-native';
import { flexStyles } from '../util/stylesheets';
import { BookMap } from '../../data/BookList';


interface WantToReadProps {
    name: string;
}

class WantToRead extends React.Component<WantToReadProps, {}> {
    constructor(props: WantToReadProps) {
        super(props);
      }

    render() {
        let props = this.props;
        let book = BookMap['Frankenstein'];
        return (
           <ProfilePicColumnContainer>
                <View style={[ flexStyles.column]}>
                    <View style={[ flexStyles.row, flexStyles.flexfill, {justifyContent: 'space-between', alignItems: 'center'} ]}>
                            <div style={{display: "inline-flex"}}>
                                <div className='update-item-name'>{ props.name }&nbsp;</div>WANTS TO READ
                            </div>
                            <div className='timestamp'>10 min. ago</div>
                    </View>
                    <BookInfo book={book}/>
                </View>
           </ProfilePicColumnContainer>
        );
    }
};

export default WantToRead;