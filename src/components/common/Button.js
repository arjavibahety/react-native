import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPress, children }) => {
    const { buttonStyle, buttonTextStyle } = styles;

    return ( 
        <TouchableOpacity 
        style={buttonStyle} 
        onPress={whenPress}
        >

            <Text style={buttonTextStyle}>{children}</Text>   
        
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5,
        padding: 5,
           },

    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
};

export { Button };
