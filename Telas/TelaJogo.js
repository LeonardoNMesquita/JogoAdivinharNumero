import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import NumeroEscolhido from '../Components/NumeroEscolhido';
import Cartao from '../Components/Cartao';

const geraValor = (min, max, excluir) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const gerado = min + Math.floor(Math.random() * (max - min));
    if (gerado === excluir)
        return geraValor(min, max, excluir);
    return gerado;


}

const TelaJogo = (props) => {

    const {valorDigitado, onJogoAcabou} = props;

    useEffect(() => {
        //verificar se houve ganho
        if(tentativaAtual === props.valorDigitado){
            props.onJogoAcabou(rodadas);

        }
    }, [valorDigitado, onJogoAcabou]);

    const [tentativaAtual, setTentativaAtual] = useState(geraValor(1, 100, props.valorDigitado));
    const [rodadas,setRodadas] = useState(0);

    const minAtual = useRef(1);
    const maxAtual = useRef(100);

    const geraNovoPalpite = (dica) => {
        if (dica === 'menor' && tentativaAtual < props.vaçprDigitado || dica == `maior` && tentativaAtual > props.valorDigitado) {
            Alert.alert(
                `dica invalida`,
                `dica errada!`,
                [{
                    text: 'ok',
                    style: 'cancel'

                }]
            )
            return;
        }
        if (dica === 'menor') {
            maxAtual.current = tentativaAtual;

        }
        else {
            minAtual.current = tentativaAtual;

        }
        const n = geraValor(minAtual, current, maxAtual, current, tentativaAtual);
        setTentativaAtual(n);
        setRodadas(rodadas => rodadas + 1);
    }

    return (
        <view style={estilos.tela}>
            <text>Palpite do computador</text>
            <NumeroEscolhido>
                {tentativaAtual}
            </NumeroEscolhido>
            <Cartao estilos>
                <button
                    title="é menor"
                    onPress={geraNovoPalpite.bind(this. 'menor')}

                />
                <button
                    title="é maior"
                    onPress={geraNovoPalpite.bind(this. 'maior')}
                />


            </Cartao>

        </view>

    )
};

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'

    }


});

export default TelaJogo;
