import * as React from 'react';
import './Header.scss';
import Logo from './spiral.svg';
import { Image, View, TextInput } from 'react-native';
import { flexStyles, textBoxStyles } from './util/stylesheets';
import { Icon } from '@mui/material';
import { Icon as Iconify } from '@iconify/react';


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
                <View style={[flexStyles.row, flexStyles.center, {gap: 8}]}>

                    <div className='search-bar'>
                        <TextInput
                            style={[textBoxStyles.textArea, textBoxStyles.searchBar, {backgroundColor: "var(--background-gray)"}]}
                            onChangeText={onChangeText}
                            value={text}
                        />
                        <Icon style={{position: 'absolute', right: 0, paddingTop: '0.2rem', marginRight: '0.3rem'}}>search</Icon>
                    </div>

                    <View style={[flexStyles.row, {gap: 5}]}>
                        <Icon>favorite</Icon>
                        <Iconify icon="mdi:bookshelf" style={{ fontSize: '24px' }}/>
                    </View>
                    
                    <Image
                        source={{uri: "https://ichef.bbci.co.uk/images/ic/256xn/p076jc1w.jpg"}}
                        style={{backgroundColor:'black', borderRadius: 100, height: '1.5rem', width: '1.5rem', marginRight: '2rem'}}/>
                </View>
            </View>
        </div>
    )
};

export default Header;