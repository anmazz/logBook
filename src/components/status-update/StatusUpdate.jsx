import TextField from '../core/TextField';
import {View} from 'react-native';
import BookInfo from '../core/BookInfo';
import './StatusUpdate.scss';
import Button from '../core/Button';
import GatsbyCover from '../../../public/images/tgg.jpg';
import Dropdown from '../core/Dropdown';
import ProfilePicColumnContainer from '../core/ProfilePicColumnContainer';
import { flexStyles } from '../util/stylesheets';
import '../../sass/base/_colors.scss';

const StatusUpdate = (props) => {
    return (
        <ProfilePicColumnContainer className={'status-container ' + (props.className ?? "")}>
            <View style={flexStyles.row}>
                <View style={[flexStyles.column, {flex:'50%'}]}>
                    <BookInfo title="The Great Gatsby" authorName="F. Scott Fitzgerald" cover={GatsbyCover}/>
                </View>
                <View style={[flexStyles.column, {flex:'50%'}]}>
                    <View style={[flexStyles.row, {alignItems: 'center'}]}>
                        <input type="text" defaultValue='97' style={{maxWidth:'50px'}}></input>
                        <p>of 243 pages</p>
                    </View>
                    <View style={flexStyles.row}>
                        <Button className="pt-1 pb-1" label="finished"/>
                        <Button className="pt-1 pb-1" label="did not finish"/>
                    </View>
                </View>
            </View>
            <View style={flexStyles.flexfill}>
                <div>
                    <TextField placeholder="Status update" className="flex-fill mb-2 ps-2 pt-1"/>
                    <View style={[ flexStyles.row, {justifyContent: 'end' } ]}>
                        <Dropdown />
                        <Button label="update"/>
                    </View>
                </div>
            </View>
        </ProfilePicColumnContainer>
    )
};

export default StatusUpdate;