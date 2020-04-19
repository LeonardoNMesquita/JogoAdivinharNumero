import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Cabecalho = (props) => {
    return(
            <View style={estilos.cabecalho}>

                 <Text style={estilos.cabecalho}>{props.titulo}</Text>
            </View>
       
    );

}

const estilo = StyleSheet.create ({
    cabecalho: {
        width: '100%',
        height: 95,
        paddingTop: 40,
        backgroundColor: '#2196F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color:'#000',
        fontSize: 22

    }



});



export default Cabecalho;