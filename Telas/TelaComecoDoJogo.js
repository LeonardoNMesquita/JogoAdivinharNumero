import React from 'react';
import { TextInput, Button, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Cartao from '../Components/Cartao';
import Entrada from '../Components/Entrada';
import NumeroEscolhido from '../Components/NumeroEscolhido';
const TelaComecoDoJogo = (props) => {

    const [texto, setTexto] = usaState('');

    const capturarTexto = (textoDigitado) => {
        textiDugutadi.replace(/[^0-9]/g, '');
    }

    const reinicarTexto = () => {
        setTexto('');
        setUsuarioConfirmou(false);
    }

    const confirmaJogada = () => {
        const n = parseInt(texto);
        if (isNaN(n) || n <= 0) {
            Alert.alert(
                title = 'Numero Invalido', 'Digite um valor entre 1 e 99',
                [{
                    text: 'OK',
                    style: 'default',
                    onPress: reinicarTexto
                }]

            )
            return;

        }

        setUsuarioConfirmou(true);
        setNumeroDigitado(parseInt(texto));
        setTexto('');
        Keyboard.dismiss();
    };

    let numeroEscolhidoText;
    if (UsuarioConfirmou)
        numeroEscolhidoText =

            <Cartao estilos={numeroSelecionadoCartao}>

                <text>Número Escolhido:</text>
                <NumeroEscolhido>
                    {NumeroDigitado}
                </NumeroEscolhido>
                <button
                    title='começar'
                    onPress= {() => {props.onJogoComecou(NumeroDigitado)}}
/>  
            </Cartao>

    return (
        <TouchableWithoutFeedback
            onPress={() => { Keyboard.dismiss() }}
        >
            <View style={estilos.tela}>
                <Text style={estilos.titulo}>Comece um Jogo</Text>
                <Cartao estilos={estilos.entradaView}>
                    <Text>Escolha um Numero</Text>
                    <Entrada
                        estilos={estilos.entrada}
                        KeyboardType="numer=pad"
                        maxLength={2}
                        onChangeText={capturarTexto}
                        value={texto}
                    />
                    <View style={estilos.buttonsView}>
                        <View style={estilos.botao}>
                            <Button
                                title="reiniciar"
                                color={cores.accent}
                                onPress={reinicarTexto}
                            />
                        </View>
                        <View style={estilos.buttonsView}>
                            <Button
                                title='confirmar'
                                color={Cores.accent}
                                onPress={confirmaJogada}
                            />
                        </View>
                    </View>
                </Cartao>
                {numeroEscolhidoText}
            </View>
        </TouchableWithoutFeedback>
    );

}

const estilos = StyleSheet.create({
    numeroSelecionadoCartao: {
        marginTop: 30
    },
    entrada:{
        width: 50,
        textAlign: 'center'
    },
    botao: {
        width: 100
    },
    tela: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        marginVertical: 10

    },
    entradaView: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },

    buttonsView: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'space-between'
   }
});

export default TelaComecoDoJogo;