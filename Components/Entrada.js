import React from 'react';
import {textInput, StyleSheet, TextInput} from 'react-native';

//const Entrada:  (props: any) => JSX.Element
const Entrada = (props) => {
return (
    <TextInput
        {...props}
        style={{...estilo.entrada, ...props.estilo}}
        />
);
}

const estilos = stryleSheet.create({
    entrada: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
        
    }

}


)

export default Entrada;