import React from 'react';
import {View, StyleSheet} from 'react-native';

const Cartao = (props) => {
    return(
        <View style={{...estilos.cartao, ...props.estilos}}>
            {props.children}
        </View>

    )
}

const estilos = StyleSheet.create ({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
            width:0,
            height: 2
            },
       shadowOpacity: 0.32,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        padding: 12
        },

});

export default Cartao;