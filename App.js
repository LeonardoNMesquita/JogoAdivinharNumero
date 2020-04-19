import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './Components/Cabecalho';
import TelaComecoDoJogo from './Telas/TelaComecoDoJogo';
import TelaJogo from './Telas/TelaJogo';
import TelaFimDEJogo from './Telas/TelaFimDeJogo';

export default function App() {
  const [numeroDigitado, setNumeroDigitado] = useState();
  const [rodadas, setRodadas] = useState(0);

  const jogoComecou = (numeroDigitado) => {
setNumeroDigitado(numeroDigitado);
}

  const atualizadaRodadas = (numRodadas) => {
    setRodadas(numRodadas);
  }

  const IniciarNovoJogo= () => {
    setRodadas(0);
    setNumeroDigitado(null);

  }

    let conteudo = <TelaComecoDoJogo onJogoComecou={jogocomecou} />
    if (numeroDigitado && rodadas <= 0) {
      conteudo = <TelaJogo valorDigitado={numeroDigitado} onJogoAcabou={atualizaRodadas} />
    }
    else if(rodadas > 0) {
      conteudo = <TelaFimDEJogo rodadas={rodadas} numeroDigitado={numeroDigitado} onIniciarNovoJogo={onIniciarNovoJogo}/>
    }
  
  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={"adivinhe o numero"} />
      {conteudo}
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
});
