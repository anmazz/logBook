import * as React from 'react';
import '../../sass/base/_colors.scss';
import './StatusUpdate.scss';
import TextField from '../core/TextField';
import BookInfo from '../core/BookInfo';
import Button from '../core/Button';
import Dropdown from '../core/Dropdown';
import ProfilePicColumnContainer from '../core/ProfilePicColumnContainer';
import { View } from 'react-native';
import { flexStyles } from '../util/stylesheets';
import { BookMap } from '../../data/BookList';

const StatusUpdate = (props: { className: string; }) => {
    return (
        <ProfilePicColumnContainer 
            className={'status-container ' + (props.className ?? "")} statusContainer>
            <View style={flexStyles.row}>
                <View style={[flexStyles.column, {flex: 0.5}]}>
                    <BookInfo book={BookMap['The Great Gatsby']}/>
                </View>
                <View style={[flexStyles.column, {flex: 0.5, justifyContent: 'space-between'}]}>
                    <View style={[flexStyles.row, {alignItems: 'center'}]}>
                        <input type="text" defaultValue='97' style={{ maxWidth:'40px', border: 'none' }}></input>
                        <p>of 243 pages</p>
                    </View>
                    <View style={[flexStyles.row, { gap: 6 }]}>
                        <Button className="pt-1 pb-1" label="finished" noDropShadow/>
                        <Button className="pt-1 pb-1" label="did not finish" noDropShadow/>
                    </View>
                </View>
            </View>
            <View style={flexStyles.flexfill}>
                <div>
                    <TextField placeholder="Status update" className="flex-fill mb-2 ps-2 mt-3"/>
                    <View style={[ flexStyles.row, { gap: 6, justifyContent: 'flex-end'}]}>
                        <Dropdown />
                        <Button label="update"/>
                    </View>
                </div>
            </View>
        </ProfilePicColumnContainer>
    )
};

export default StatusUpdate;