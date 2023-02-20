import {View, StyleSheet } from 'react-native';
import { flexStyles } from '../util/stylesheets';
import './ProfilePicColumnContainer.scss';


const ProfilePicColumnContainer = (props) => {
    let profileWidth = 0.1;
    return (
    <View nativeID="profile-item-container-column" style={{ flexDirection: 'row', gap: '.5rem' }}>
        <View style={{flex: {profileWidth}}}>
            <img 
            className="profile-pic" 
            src="https://ichef.bbci.co.uk/images/ic/256xn/p076jc1w.jpg"/>
        </View>
        <View style={[ flexStyles.column, flexStyles.flexfill ]}>
            <div  className={props.className}>
                {props.children}
            </div>
        </View>
    </View>)
}

export default ProfilePicColumnContainer;