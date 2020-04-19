import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import cores from '../Telas/Cores/Cores';

const NumeroEscolhido = (props) => {
return (
    
     <View>
         <text>{props.children}</text>

     </View>
);
}

const estilos = stryleSheet.create({
    CaixaNumeroEscolhido: {
        borderBottomColor: cores.accent,
        borderBottomWidth: 2,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },

    NumeroEscolhido: {
        color: cores.accent,
        fontSize: 22

    }
});

export default NumeroEscolhido;