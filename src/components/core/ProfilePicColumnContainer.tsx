import * as React from 'react';
import {View } from 'react-native';
import { flexStyles } from '../util/stylesheets';
import './ProfilePicColumnContainer.scss';


const ProfilePicColumnContainer = (props: { className?: string; statusContainer?: boolean, children: React.ReactNode }) => {
    return (
    <View nativeID="profile-item-container-column" style={{ flexDirection: 'row', gap: 14, zIndex: (props.statusContainer ? 100 : 0)}}>
        <View>
            <img 
            className="profile-pic" 
            src="https://ichef.bbci.co.uk/images/ic/256xn/p076jc1w.jpg"/>
        </View>
        <View style={[ flexStyles.column, flexStyles.flexfill ]}>
            <div className={props.className}>
                {props.children}
            </div>
        </View>
    </View>)
}

export default ProfilePicColumnContainer;