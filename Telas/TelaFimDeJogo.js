import React from 'react';
import {textInput, StyleSheet, TextInput, Button} from 'react-native';

const TelaFimDEJogo = (props) => {
    return (
        
         <View style={estilos.tela}>
             <text>o jogo acabou</text>
             <text>numero de tentativas: {props.rodadas}</text>
             <text>o numero era: {props.numeroDigitado}</text>
             <button
                title= "novo jogo"
                onPress={props.onIniciarNovoJogo}
             />
             </View>
    );
    }

    const estilos = StyleSheet.create({
        tela: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'

        }
    });

    export default TelaFimDEJogo

