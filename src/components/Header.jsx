import './Header.scss';
import Logo from './spiral.svg';
import { Image, View, TextInput } from 'react-native-web';
import { flexStyles, textBoxStyles } from './util/stylesheets';
import { Icon } from '@mui/material';
import { Icon as Iconify } from '@iconify/react';
import React from 'react';


const Header = () => {
    const [text, onChangeText] = React.useState('Search');

    return (
        <div className="topnav">
            <View style={[flexStyles.row, flexStyles.centerSpaceBetween]}>
                <View style={flexStyles.row}>
                    <a className="logo">
                        <img src={Logo} width="22" height="22"/>
                        logBook
                    </a>
                    <a className="active" href="#home">Home</a>
                    <a href="#browse">Browse</a>
                    <a href="#community">Community</a>
                </View>
                <View style={[flexStyles.row, flexStyles.center, {gap: '0.5rem'}]}>
                    <div className='search-bar'>
                        <TextInput
                            style={[textBoxStyles.textArea, textBoxStyles.searchBar, {backgroundColor: "var(--background-gray)"}]}
                            className="text-area"
                            onChangeText={onChangeText}
                            value={text}
                        />
                        <Icon style={{position: 'absolute', right: 0, paddingTop: '0.2rem', marginRight: '0.3rem'}}>search</Icon>
                    </div>
                    <Icon>favorite</Icon>
                    <Iconify icon="mdi:bookshelf" style={{ fontSize: '24px' }}/>
                    <Image
                        className="user-profile"
                        source="https://ichef.bbci.co.uk/images/ic/256xn/p076jc1w.jpg"
                        style={{backgroundColor:'black', borderRadius: '100%', height: '1.5rem', width: '1.5rem', marginRight: '2rem'}}/>
                </View>
            </View>
        </div>
    )
};

export default Header;