import TextField from '../core/TextField';
import {View, StyleSheet} from 'react-native';
import Picture from '../../../public/images/jane.png';
import './StatusUpdate.scss';
import Button from '../core/Button';

const StatusUpdate = () => {
    let profileWidth = 0.2;
    return (
    <View nativeID="profile-item-container-column" style={{ flexDirection: 'row', gap: '.5rem' }}>
        <View style={{flex: {profileWidth}}}>
            <img className="profile-pic" src={Picture}></img>
        </View>
        <View style={style.flexfill}>
            <div className='status-container'>
                <TextField placeholder="Status update" className="flex-fill mb-2 ps-2 pt-1"/>
                <View style={{ flexDirection: 'row', gap: '.5rem', justifyContent: 'end' }}>
                    <Button label="Public" className="ps-2 pe-2 pt-1 pb-1" iconLeft="public" iconRight="keyboard_arrow_down"/>
                    <Button label="Submit" className="ps-2 pe-2 pt-1 pb-1"/>
                </View>
            </div>
        </View>
    </View>
    )
};

const style = StyleSheet.create({
    flexfill: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto'
    }
});


export default StatusUpdate;