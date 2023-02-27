import * as React from 'react';
import TextField from '../core/TextField';
import {View} from 'react-native';
import BookInfo from '../core/BookInfo';
import './StatusUpdate.scss';
import Button from '../core/Button';
import Dropdown from '../core/Dropdown';
import ProfilePicColumnContainer from '../core/ProfilePicColumnContainer';
import { flexStyles } from '../util/stylesheets';
import '../../sass/base/_colors.scss';
import { BookMap } from '../../data/BookList';

const StatusUpdate = (props: { className: string; }) => {
    return (
        <ProfilePicColumnContainer className={'status-container ' + (props.className ?? "")}>
            <View style={flexStyles.row}>
                <View style={[flexStyles.column, {flex: .5}]}>
                    <BookInfo book={BookMap['The Great Gatsby']}/>
                </View>
                <View style={[flexStyles.column, {flex: .5}]}>
                    <View style={[flexStyles.row, {alignItems: 'center'}]}>
                        <input type="text" defaultValue='97' style={{maxWidth:'50px'}}></input>
                        <p>of 243 pages</p>
                    </View>
                    <View style={flexStyles.row}>
                        <Button className="pt-1 pb-1" label="finished" iconLeft={''} iconRight={''}/>
                        <Button className="pt-1 pb-1" label="did not finish" iconLeft={''} iconRight={''}/>
                    </View>
                </View>
            </View>
            <View style={flexStyles.flexfill}>
                <div>
                    <TextField placeholder="Status update" className="flex-fill mb-2 ps-2 pt-1"/>
                    <View style={[ flexStyles.row ]}>
                        <Dropdown />
                        <Button label="update"/>
                    </View>
                </div>
            </View>
        </ProfilePicColumnContainer>
    )
};

export default StatusUpdate;