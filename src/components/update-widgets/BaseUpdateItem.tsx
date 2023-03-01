import * as React from 'react';
import BookInfo from '../core/BookInfo';
import ProfilePicColumnContainer from '../core/ProfilePicColumnContainer';
import { View } from 'react-native';
import { Book } from '../../data/Book';
import { flexStyles } from '../util/stylesheets';

interface BaseItemProps { name: string, action: string}
class BaseUpdateItem extends React.Component<BaseItemProps, {}> {
    constructor(props: BaseItemProps) {
        super(props);
      }

    render() {
        let props = this.props;
        let book = new Book("Frankenstein", "Mary Shelley", "", "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/10/2a34d8_7edc06080c344f958cde383a3fa6f3f1mv2.jpg?resize=564%2C946&ssl=1", new Date());
        return (
           <ProfilePicColumnContainer>
            <View style={[ flexStyles.column]}>
                <View style={[ flexStyles.row, flexStyles.flexfill, {justifyContent: 'space-between', alignItems: 'center'} ]}>
                        <div style={{display: "inline-flex"}}>
                            <div className='update-item-name'>{ props.name }&nbsp;</div>{props.action}
                        </div>
                        <div className='timestamp'>10 min. ago</div>
                </View>
                <BookInfo book={book} rating/>
            </View>
                
           </ProfilePicColumnContainer>
        );
    }
}

export default BaseUpdateItem;